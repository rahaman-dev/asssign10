const express = require("express");
const app = express();
const port = 300;

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
  const item = allData.find((n) => parseInt(n.chef_id) === id) || {};
  res.send(item);
});

app.get("/ranking/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const rank = allData.filter((n) => parseInt(n.ranking) === id) || {};
  res.send(rank);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.id);
  const item = allData.filter((n) => parseInt(n._id) === category_id) || [];
  res.send(item);
});

app.listen(port, () => {
  console.log("hi");
});
