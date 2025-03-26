import React from "react";
import "./Project.css";
import pro from "../data/pro.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section className="container-pro" id="projects">
      <h2 className="title-pro">Projects</h2>
      <div className="projects-pro">
        {pro.map((pro, id) => {
          return (
            <ProjectCard key={id} project={pro} />
          );
        })}
      </div>
    </section>
  );
}
