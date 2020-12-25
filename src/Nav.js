import React from "react";
import { NavLink } from "react-router-dom";
import { faAngleDoubleLeft, faImage, faHammer, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faGit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {

  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
      <NavLink className="nav-link" to="/" exact>
          <span className="link-text logo-text">Home</span>
          <FontAwesomeIcon icon={faAngleDoubleLeft} /> 
          </NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link"  to="/images" exact>
      <FontAwesomeIcon icon={faImage} />
          <span className="link-text">Images</span>
          </NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/projects" exact>
      <FontAwesomeIcon icon={faHammer} />
          <span className="link-text">Projects</span>
          </NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/search" exact>
      <FontAwesomeIcon icon={faSearch} />
          <span className="link-text">Search</span>
          </NavLink>
      </li>    

      <li className="nav-item-social">
        <a href="https://www.instagram.com/dustinevansphoto" className="nav-link">
        <FontAwesomeIcon icon={faInstagram} />
          <span className="link-text">Instagram</span>
        </a>
      </li>

      <li className="nav-item-social">
        <a href="https://twitter.com/JediHagrid" className="nav-link">
        <FontAwesomeIcon icon={faTwitter} />
          <span className="link-text">Twitter</span>
        </a>
      </li>

      <li className="nav-item-social">
        <a href="https://github.com/dlevans" className="nav-link">
        <FontAwesomeIcon icon={faGit} />
          <span className="link-text">GitHub</span>
        </a>
      </li>

      <li className="nav-item-social">
        <a href="https://www.youtube.com/channel/UCRbeAc93F64GndHbhbWY5BQ" className="nav-link">
        <FontAwesomeIcon icon={faYoutube} />
          <span className="link-text">YouTube</span>
        </a>
      </li>

      <li className="nav-item-home">
        <NavLink className="nav-link" to="/" exact>
        <FontAwesomeIcon icon={faHome} />
        <span className="link-text">Home</span>
        </NavLink>
      </li>
    </ul>
  </nav>
  );
}

export default Nav;
