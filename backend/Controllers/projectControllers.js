const Project = require("../Models/projectSchema");
const Task = require("../Models/phaseSchema");

const createProject = async (req, res) => {
  try {
    const { Project_Name, Total_Budget, phases } = req.body;
    const user_id = req.user.id;

    // Step 1: Create project
    const newProject = await Project.create({
      Project_Name,
      Total_Budget,
      user_id,
    });

    const project_id = newProject._id;

    // Step 2: Create phases
    const phasesIndex = await Promise.all(
      phases.map(async (phase) => {
        const newPhase = await Task.create({
          project_id,
          Phase_Name: phase.Phase_Name,
          Phase_Budget: phase.Phase_Budget,
          tasks: phase.tasks,
        });
        return newPhase._id;
      })
    );

    // Step 3: Update project with phase references
    await Project.findByIdAndUpdate(
      { _id: project_id },
      { phases: phasesIndex }
    );

    // Fetch updated project to return in response
    const updatedProject = await Project.findById(project_id);

    return res.status(200).json({
      message: "Project created successfully",
      status: "success",
      project: updatedProject,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: "Internal Server error",
      status: "failed",
    });
  }
};

module.exports = { createProject };
