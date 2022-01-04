import { FC, useState, useCallback } from "react";
import "./App.scss";
import {
  ApplicationBar,
  Home,
  Background,
  PositionIndicator,
  Drawer,
  Projects,
  Skills,
  Footer,
  Services,
} from "./Components";


import { Project, projects } from "./Resources/Projects";
import { Skill, skills } from "./Resources/Skills";

export enum Section {
  Home = "Home",
  Services = "Services",
  Projects = "Projects",
  Skills = "Skills",
  Contact = "Contact",
}

const App: FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  const handleOnCloseDrawer = () => {
    setProject(null);
    setSkill(null);
  };

  const handleProjectsVisible = useCallback(() => {
    setActiveSection(Section.Projects);
  }, []);

  const handleHomePageVisible = useCallback(() => {
    setActiveSection(Section.Home);
  }, []);

  const handleSkillsVisible = useCallback(() => {
    setActiveSection(Section.Skills);
  }, []);

  const handleFooterVisible = useCallback(() => {
    setActiveSection(Section.Contact);
  }, []);

  const handleServicesVisible = useCallback(() => {
    setActiveSection(Section.Services);
  }, []);

  return (
    <>
      <Background />
      <ApplicationBar activeSection={activeSection} />
      <PositionIndicator activeSection={activeSection} />
      <Drawer project={project} skill={skill} onClose={handleOnCloseDrawer} />
      <div className="App">
        <Home onVisible={handleHomePageVisible} />
        <Services onVisible={handleServicesVisible} />
        <Projects
          projects={projects}
          onProjectSelected={setProject}
          onVisible={handleProjectsVisible}
        />
        <Skills
          onSkillClick={setSkill}
          skills={skills}
          onVisible={handleSkillsVisible}
        />
        <Footer onVisible={handleFooterVisible} />
      </div>
    </>
  );
};

export default App;
