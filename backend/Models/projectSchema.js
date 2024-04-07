const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  Project_Name: {
    type: String,
    required: true,
  },
  Total_Budget: {
    type: Number,
    required: true,
  },
  phases: {
    type: Array,
    default: [],
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
