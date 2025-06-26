// const express = require('express');
// const app = express();
// const path = require('path')

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // app.get('/about', (req, res) =>{
// //     res.send("From About")
// // })


// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'about.html'));
// });

// app.get('/contact', (req, res) =>{
//     res.send("From Contact")
// })

// app.get('/portfolio', (req, res) =>{
//     res.send("From Portfolio")
// })

// app.get('/resume', (req, res) =>{
//     res.send("From Resume")
// })

// app.get('/services', (req, res) => {
//     res.send("From Services")
// })


// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


const express = require('express');
const path = require('path');
const app = express();

// ✅ Serve static files like CSS/JS/images from the current folder
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'resume.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
