import React, {useState} from 'react';
import "./Navbar.css";
import { getImageUrl } from '../utils';




export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar'>
        <a href="/" className='title-nav'>Portfolio</a>
        <div className='menu'>
            <img className='menu-btn' src={menuOpen ? getImageUrl("closeIcon.png"): getImageUrl("menuIcon_updated.png")} alt="img" onClick={()=> setMenuOpen(!menuOpen)} />
            <ul className={`menu-items ${menuOpen ? "menuopen": ""}`}>
                <li><a href="#about" >About</a></li>

                <li><a href="#experience">Experience</a></li>

                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
