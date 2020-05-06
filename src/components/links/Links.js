import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./links.scss";
const Links = () => {
  return (
    <div className="links">
      <ul className="linkList">
        <li className="linkList__link ">
          <a href="#" className="icon">
            <FaGithub />
          </a>
        </li>
        <li className="linkList__link">
          <a href="#" className="icon">
            <FaTwitter />
          </a>
        </li>
        <li className="linkList__link">
          <a href="#" className="icon">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
