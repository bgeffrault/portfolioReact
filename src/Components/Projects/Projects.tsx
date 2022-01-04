import { FC } from "react";
import { Section } from "..";
import { Section as SectionName } from "../../App";
import { Project } from "../../Resources/Projects";
import "./Projects.scss";

export type IProjects = {
  projects: Project[];
  onProjectSelected: (project: Project) => void;
  onVisible: () => void;
};

export const Projects: FC<IProjects> = ({
  projects,
  onProjectSelected,
  onVisible,
}) => {
  return (
    <Section title="Main Projects" onVisible={onVisible} id={SectionName.Projects} threshold={0.2}>
      <div className="projects">
        {projects.map((project) => (
          <div className="container" key={project.title}>
            <div className="projectContainer">
              <div
                style={{
                  backgroundImage: `url(${project.imgSrc})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="titleOverlay"
                onClick={() => onProjectSelected(project)}
              >
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
