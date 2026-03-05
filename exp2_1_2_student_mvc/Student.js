const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  roll: Number,
  branch: String
});

module.exports = mongoose.model("Student", studentSchema);