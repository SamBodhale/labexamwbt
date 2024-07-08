const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addr: { type: String, required: true },
  stream: { type: String, required: true },
  year: { type: Number, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
