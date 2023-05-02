const express = require("express");
const app = express();
const port = 300;
const categories = require("./categories.json");
const allData = require("./data.json");

var cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/chefs", (req, res) => {
  res.send(allData);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = allData.find((n) => parseInt(n._id) === id) || {};
  res.send(item);
});

// app.get("/recipe/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const item = allData.find((n) => n.recipes?.recipes_id === id) || {};
//   res.send(item);
// });

app.get("/ranking/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const rank = allData.filter((n) => parseInt(n.ranking) === id) || {};
  res.send(rank);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.id);
  const item = allData.filter((n) => parseInt(n._id) === category_id) || [];
  res.send(item);
});

app.listen(port, () => {
  console.log("hi");
});
