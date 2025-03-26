import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({
  project: { imageSrc, title, description, skills, demo, source }
}) {
  return (
    <div className="container-p">
      <img src={imageSrc} alt="" className="img-p" />
      <h3 className="title-p">{title}</h3>
      <p className="description-p">{description}</p>
      <ul className="skills-p">
        {skills.map((skill, id) => (
          <li className="skill-p" key={id}>
            {skill}
          </li>
        ))}
      </ul>

      <div className="links-p">
        <a className="link-p" href={demo}>
          Demo
        </a>
        <a className="link-p" href={source}>
          Source
        </a>
      </div>
    </div>
  );
}
