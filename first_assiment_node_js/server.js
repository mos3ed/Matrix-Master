const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// post 
const posts = [
  {
    name: "Michael Choi",
    date: "January 15th 2013",
    message: "This is my message. This is my message. This is my message. This is my message. This is my message."
  },
  {
    name: "Michael Choi",
    date: "January 23rd 2013",
    message: "This is my message. This is my message. This is my message. This is my message. This is my message."
  },
  {
    name: "Cory Whiteland",
    date: "January 15th 2013",
    message: "This is my message. This is my message. This is my message. This is my message. This is my message."
  }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
