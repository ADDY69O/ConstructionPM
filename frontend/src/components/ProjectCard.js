import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(project);
    navigate(`/project/${project._id}`);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={project.image}
        alt="Project"
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{project.Project_Name}</h2>
        <p className="text-gray-600 mb-2">
          Total Budget: ${project.Total_Budget}
        </p>
        <p className="text-gray-600 mb-2">
          Number of Phases: {project.phases.length}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleClick()}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
