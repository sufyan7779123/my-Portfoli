import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="container-foot">
      <div className="text-foot">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className="links-foot">
        <li className="link-foot">
            <img src="/emailIcon.png" alt="" />
            <a className='anc' href="mailto:lachisufyan4@gmail.com">lachisufyan4@gmail.com</a>
        </li>

        <li className="link-foot">
            <img src="/linkedinIcon.png" alt="" />
            <a href="mailto:lachisufyan4@gmail.com">linkedin.com/myname</a>
        </li>

        <li className="link-foot">
            <img src="/githubIcon.png" alt="" />
            <a href="mailto:lachisufyan4@gmail.com">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
}
