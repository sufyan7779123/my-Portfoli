import React from "react";
import { getImageUrl } from "../utils";
import "./About.css";

export default function About() {
  return (
    <section className="container-ab" id="about">
      <h2 className="title-ab">ABOUT</h2>
      <div className="content-ab">
      <img className="aboutImage" src={getImageUrl("aboutImage.png")} alt="" />
      <ul className="aboutItems">
        <li className="aboutItem">
          <img className="" src={getImageUrl("cursorIcon.png")} alt="" />
          <div className="aboutitemText">
            <h3>Frontend Developer</h3>
            <p>
              I'm a Frontend Developer with experience in build and optimized
              sites
            </p>
          </div>
        </li>
        <li className="aboutItem">
          <img src={getImageUrl("serverIcon.png")} alt="" />
          <div className="aboutitemText">
            <h3>React Developer</h3>
            <p>I Have experience with fast and optimized APIs</p>
          </div>
        </li>
        <li className="aboutItem">
          <img src={getImageUrl("cursorIcon.png")} alt="" />
          <div className="aboutitemText">
            <h3>UI Designer</h3>
            <p>I Have designed multiple landing and have systems as well</p>
          </div>
        </li>
      </ul>
    </div>
    </section>
  );
}
