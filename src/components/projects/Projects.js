import React from "react";
import "./projects.scss";
import { FaGithub, FaRegFolderOpen } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects__heading">
        <span className="coloredNumber">02.</span>
        Projects
      </h3>
      <p className="projects__sum">Some Things I've Built </p>
      <ul className="projects__projectsList">
        <li className="project">
          <div className="project__folderIcons">
            <FaRegFolderOpen className="folder" />
            <a href="#" className="github">
              <FaGithub />
            </a>
          </div>

          <p className="project__title">Poker Evaluator</p>
          <p className="project__summary">
            A poker card evaluator with GUI and some smart functionalities built
            with React,Redux,RxJs and SCSS.
          </p>
          <p className="project__techStack">React Redux RxJs SCSS</p>
        </li>

        <li className="project">
          <div className="project__folderIcons">
            <FaRegFolderOpen className="folder" />
            <a href="#" className="github">
              <FaGithub />
            </a>
          </div>

          <p className="project__title">CRUD</p>
          <p className="project__summary">
            A Crud Application (Create,Read,Update,Delete) made with React,
            Redux, Rxjs and SCSS.
          </p>
          <p className="project__techStack">React Redux RxJs SCSS</p>
        </li>

        <li className="project">
          <div className="project__folderIcons">
            <FaRegFolderOpen className="folder" />
            <a href="#" className="github">
              <FaGithub />
            </a>
          </div>

          <p className="project__title">Type Racer Game</p>
          <p className="project__summary">
            A game where the user needs to type as fast as he can the word that
            is displayed. Built with React And SCSS.
          </p>
          <p className="project__techStack">React SCSS</p>
        </li>

        <li className="project">
          <div className="project__folderIcons">
            <FaRegFolderOpen className="folder" />
            <a href="#" className="github">
              <FaGithub />
            </a>
          </div>

          <p className="project__title">Portofolio 2.0</p>
          <p className="project__summary">
            This portofolio you are looking right now. Built with React and
            SCSS.
          </p>
          <p className="project__techStack">React SCSS</p>
        </li>

        <li className="project">
          <div className="project__folderIcons">
            <FaRegFolderOpen className="folder" />
            <a href="#" className="github">
              <FaGithub />
            </a>
          </div>

          <p className="project__title">Weather Appliaction</p>
          <p className="project__summary">
            A Weather Appliaction which connects with DarkSky API, made with
            React and SCSS.
          </p>
          <p className="project__techStack">React SCSS Darksky API</p>
        </li>

        <li className="project">
          <div className="project__folderIcons">
            <FaRegFolderOpen className="folder" />
            <a href="#" className="github">
              <FaGithub />
            </a>
          </div>

          <p className="project__title">Taboo (Game)</p>
          <p className="project__summary">
            A Taboo game compatitible with All Screen Devices made with React
            and SCSS.
          </p>
          <p className="project__techStack">React SCSS</p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
