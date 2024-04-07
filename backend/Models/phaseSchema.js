const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Phase_Name: {
    type: String,
    required: true,
  },
  Phase_Budget: {
    type: Number,
    required: true,
  },
  tasks: {
    type: Array,
    default: [],
  },
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
