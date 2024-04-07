import React, { useState } from "react";

function CreatePage() {
  const [projectData, setProjectData] = useState({
    Project_Name: "",
    Total_Budget: "",
    numPhases: "",
    phases: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handlePhaseChange = (e) => {
    const numPhases = parseInt(e.target.value);
    const phases = [];
    for (let i = 1; i <= numPhases; i++) {
      phases.push({ Phase_Name: "", Phase_Budget: "", tasks: [] });
    }
    setProjectData({ ...projectData, numPhases, phases });
  };

  const handlePhaseInputChange = (e, index) => {
    const { name, value } = e.target;
    const phases = [...projectData.phases];
    phases[index][name] = value;
    setProjectData({ ...projectData, phases });
  };

  const handleTaskInputChange = (e, phaseIndex, taskIndex) => {
    const { value } = e.target;
    const phases = [...projectData.phases];
    phases[phaseIndex].tasks[taskIndex] = value;
    setProjectData({ ...projectData, phases });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectData);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Project Name:</label>
            <input
              type="text"
              name="Project_Name"
              value={projectData.Project_Name}
              onChange={handleInputChange}
              className="border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Total Budget:</label>
            <input
              type="number"
              name="Total_Budget"
              value={projectData.Total_Budget}
              onChange={handleInputChange}
              className="border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Number of Phases:</label>
            <input
              type="number"
              name="numPhases"
              value={projectData.numPhases}
              onChange={handlePhaseChange}
              className="border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          {projectData.phases.map((phase, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Phase {index + 1}</h2>
              <div className="mb-2">
                <label className="block mb-1">Phase Name:</label>
                <input
                  type="text"
                  name="Phase_Name"
                  value={phase.Phase_Name}
                  onChange={(e) => handlePhaseInputChange(e, index)}
                  className="border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Phase Budget:</label>
                <input
                  type="number"
                  name="Phase_Budget"
                  value={phase.Phase_Budget}
                  onChange={(e) => handlePhaseInputChange(e, index)}
                  className="border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Tasks:</label>
                {Array.from({ length: phase.numTasks || 0 }, (_, i) => (
                  <input
                    key={i}
                    type="text"
                    name={`task_${index}_${i}`}
                    value={phase.tasks[i] || ""}
                    onChange={(e) => handleTaskInputChange(e, index, i)}
                    className="border-gray-300 rounded-md p-2 w-full mb-2"
                    placeholder={`Task ${i + 1}`}
                    required
                  />
                ))}
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    const phases = [...projectData.phases];
                    phases[index].numTasks = (phases[index].numTasks || 0) + 1;
                    phases[index].tasks.push("");
                    setProjectData({ ...projectData, phases });
                  }}
                >
                  Add Task
                </button>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
