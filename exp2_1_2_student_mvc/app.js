const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});