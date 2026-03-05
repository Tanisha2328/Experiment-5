const Student = require("../models/Student");

// show all students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
};

// add student
exports.addStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    roll: req.body.roll,
    branch: req.body.branch
  });

  await student.save();
  res.redirect("/");
};

// delete student
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

// edit page
exports.editPage = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
};

// update student
exports.updateStudent = async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    age: req.body.age,
    roll: req.body.roll,
    branch: req.body.branch
  });

  res.redirect("/");
};