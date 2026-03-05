const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/", studentController.getStudents);

router.post("/add", studentController.addStudent);

router.get("/delete/:id", studentController.deleteStudent);

router.get("/edit/:id", studentController.editPage);

router.post("/update/:id", studentController.updateStudent);

module.exports = router;