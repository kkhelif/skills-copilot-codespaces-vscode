// Create web server with express.js
// Create a route for comments
// Add a POST route for comments that will add a comment to the comments array
// Add a GET route for comments that will return the comments array

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Add a GET route for comments that will return the comments array
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Add a POST route for comments that will add a comment to the comments array
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const comments = [
  {
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

// Path: comments.js
// Create web server with express.js
// Create a route for comments
// Add a POST route for comments that will add a comment to the comments array
// Add a GET route for comments that will return the comments array

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Add a GET route for comments that will return the comments array
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Add a POST route for comments that will add a comment to the comments array
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const comments = [
  {
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    username: "Skyler",
    comment:
