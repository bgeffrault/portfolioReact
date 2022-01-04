import { FC, useState, useEffect } from "react";
import { Project } from "../../Resources/Projects";
import { Skill } from "../../Resources/Skills";
import Close from '../../Resources/SvgIcons/Close'

import "./Drawer.scss";

export type IDrawer = {
  project: Project | null;
  skill: Skill | null;
  onClose: () => void;
};

export const Drawer: FC<IDrawer> = ({ project, skill, onClose }) => {
  const [closed, setClosed] = useState(false);

  const handleOnClick = () => {
    setClosed(true);
  };

  useEffect(() => {
    if (closed) {
      setTimeout(() => {
        setClosed(false);
        onClose();
      }, 225);
    }
  }, [closed, onClose]);

  return (
    <>
      {project || skill ? (
        <div className="drawerContainer">
          <div className="clickAway" onClick={handleOnClick} />
          <div className={`drawer ${closed ? "slideOut" : "slideIn"}`}>
            <div className="drawerHeader">
              <h3>{skill ? skill.skill : project?.title}</h3>
              <Close onClose={onClose} />
            </div>
            <div className="drawerContent">
              <div>
                <div className="description">{skill ? skill.description : project?.description}</div>
              </div>
              <div>
                <h4>{skill ? "Projects:" : "Technologies:"}</h4>
                <div className="technologies">
                  {project?.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}
                  {skill?.projects.map((project) => <span className="tag" key={project}>{project}</span>)}
                </div>
              </div>
              <div>
                <img src={skill ? skill.imgSrc : project?.imgSrc} alt="project" />
                <div className="legend">
                  {project?.author}
                  {skill?.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Drawer;
