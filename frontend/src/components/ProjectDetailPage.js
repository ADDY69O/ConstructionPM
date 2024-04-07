import React, { useState } from "react";

function ProjectDetailPage() {
  const [phases, setPhases] = useState([
    {
      _id: "6612ca40a3ef0d3a1746afbf",
      Phase_Name: "Planning",
      Phase_Budget: 100000,
      tasks: [
        { task: "Checking the required area", completed: false },
        { task: "Checklist for requirements", completed: false },
        { task: "Prerequisites required for this project", completed: false },
        { task: "Handling all of the things in documents", completed: false },
      ],
      project_id: "661247c0954d9450692754dc",
      __v: 0,
    },
    {
      _id: "6612ca40a3ef0d3a1746afbf",
      Phase_Name: "Implementation",
      Phase_Budget: 300000,
      tasks: [
        { task: "Checking the required area", completed: false },
        { task: "Checklist for requirements", completed: false },
        { task: "Prerequisites required for this project", completed: false },
        { task: "Handling all of the things in documents", completed: false },
      ],
      project_id: "661247c0954d9450692754dc",
      __v: 0,
    },
    {
      _id: "6612ca40a3ef0d3a1746afbf",
      Phase_Name: "Testing",
      Phase_Budget: 700000,
      tasks: [
        { task: "Checking the required area", completed: false },
        { task: "Checklist for requirements", completed: false },
        { task: "Prerequisites required for this project", completed: false },
        { task: "Handling all of the things in documents", completed: false },
      ],
      project_id: "661247c0954d9450692754dc",
      __v: 0,
    },
  ]);

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  const handleTaskToggle = (phaseIndex, taskIndex) => {
    const updatedPhases = [...phases];
    updatedPhases[phaseIndex].tasks[taskIndex].completed =
      !updatedPhases[phaseIndex].tasks[taskIndex].completed;
    setPhases(updatedPhases);
  };

  const handleNextPhase = () => {
    if (
      currentPhaseIndex < phases.length - 1 &&
      phases[currentPhaseIndex].tasks.every((task) => task.completed)
    ) {
      setCurrentPhaseIndex(currentPhaseIndex + 1);
    }
  };

  const calculateCompletedPercentage = (phaseIndex) => {
    const completedTasks = phases[phaseIndex].tasks.filter(
      (task) => task.completed
    ).length;
    return ((completedTasks / phases[phaseIndex].tasks.length) * 100).toFixed(
      2
    );
  };

  const isProjectCompleted = () => {
    return phases.every((phase) => phase.tasks.every((task) => task.completed));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">Project Detail</h1>
        <div key={phases[currentPhaseIndex]._id}>
          <h2 className="text-xl font-semibold mb-2">
            Phase {currentPhaseIndex + 1}
          </h2>
          <p className="text-gray-700 mb-2">
            Phase Name: {phases[currentPhaseIndex].Phase_Name}
          </p>
          <p className="text-gray-700 mb-2">
            Phase Budget: ${phases[currentPhaseIndex].Phase_Budget}
          </p>
          <p className="text-gray-700 mb-2">
            Completed: {calculateCompletedPercentage(currentPhaseIndex)}%
          </p>
          <ul>
            {phases[currentPhaseIndex].tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="mb-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    handleTaskToggle(currentPhaseIndex, taskIndex)
                  }
                  className="mr-2"
                />
                <label className="text-gray-700">{task.task}</label>
              </li>
            ))}
          </ul>
          {currentPhaseIndex < phases.length - 1 &&
            phases[currentPhaseIndex].tasks.every((task) => task.completed) && (
              <button
                onClick={handleNextPhase}
                className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Next Phase
              </button>
            )}
          {isProjectCompleted() && (
            <p className="mt-4 text-green-700 font-semibold">
              Project successfully completed!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
