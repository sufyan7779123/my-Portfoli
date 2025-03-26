import React from "react";
import { getImageUrl } from "../utils";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="container-h">
      <div className="content-h">
        <h1 className="title-h">Hi, I'm Sufyan</h1>
        <p className="desc-h">I'm a Frontend Developer with 9 months of Experience using with React, HTML, CSS, JAVASCRIPT. Reach out if you'd like to learn more!</p>
        <a href="mailto:lachisufyan4@email.com" className="contactBtn">Contact me</a>
      </div>
      <img src={getImageUrl("heroImage.png")} alt="" className="heroImg" />
      <div className="topBlur"/>
      <div className="bottomBlur"/>
    </section>
    
  );
}
