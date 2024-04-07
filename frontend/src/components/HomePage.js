import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function HomePage() {
  const [projects, setProjects] = useState([
    {
      _id: "66124917d44de006792f0a42",
      Project_Name: "Highway Project",
      image:
        "https://images.unsplash.com/photo-1708358131308-c2dad0046a73?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Total_Budget: 1000000,
      phases: [
        "66124917d44de006792f0a44",
        "66124917d44de006792f0a45",
        "66124917d44de006792f0a46",
      ],
      user_id: "661243c893a5b28a6696935c",
    },
    {
      _id: "66124917d44de006792f0a42",
      Project_Name: "2 lane Road Project ",
      image:
        "https://plus.unsplash.com/premium_photo-1684760975849-81b096c00cc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Total_Budget: 1000000,
      phases: [
        "66124917d44de006792f0a44",
        "66124917d44de006792f0a45",
        "66124917d44de006792f0a46",
      ],
      user_id: "661243c893a5b28a6696935c",
    },
    {
      _id: "66124917d44de006792f0a42",
      Project_Name: "3 bhk building project",
      image:
        "https://plus.unsplash.com/premium_photo-1677483760204-33b5e845a5c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Total_Budget: 1000000,
      phases: [
        "66124917d44de006792f0a44",
        "66124917d44de006792f0a45",
        "66124917d44de006792f0a46",
      ],
      user_id: "661243c893a5b28a6696935c",
    },
    {
      _id: "66124917d44de006792f0a42",
      Project_Name: "1 lane road project",
      image:
        "https://images.unsplash.com/photo-1669941060931-6912c4538ba3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Total_Budget: 1000000,
      phases: [
        "66124917d44de006792f0a44",
        "66124917d44de006792f0a45",
        "66124917d44de006792f0a46",
      ],
      user_id: "661243c893a5b28a6696935c",
    },
    {
      _id: "66124917d44de006792f0a42",
      Project_Name: "4 Floor building",
      image:
        "https://images.unsplash.com/photo-1600356604548-4c8ed58f97e4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Total_Budget: 1000000,
      phases: [
        "66124917d44de006792f0a44",
        "66124917d44de006792f0a45",
        "66124917d44de006792f0a46",
      ],
      user_id: "661243c893a5b28a6696935c",
    },
    // Add more project objects as needed
  ]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 items-center mx-auto flex justify-center">
        Projects
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
