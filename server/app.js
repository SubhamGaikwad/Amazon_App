const express = require("express");

const app = express();

const mongoose = require("mongoose");

require("dotenv").config();

const port = 8005;

app.post("/", (req, res) => {
  res.send("Hello Megha");
});
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
