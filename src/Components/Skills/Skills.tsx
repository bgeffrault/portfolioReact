import { FC } from "react";
import { Section } from "..";
import "./Skills.scss";
import { useElementOnScreen } from "../../Hooks/useElementOnScreen";
import { Section as SectionName } from "../../App";
import { Skill } from "../../Resources/Skills";

export type ISkills = {
  onSkillClick: (skill: Skill) => void;
  skills: Skill[];
  onVisible: () => void;
};

export const Skills: FC<ISkills> = ({ skills, onSkillClick, onVisible }) => {
  const [containerRefPlanets, arePlanetsVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  return (
    <Section title="Main Skills" onVisible={onVisible} id={SectionName.Skills}>
      <div
        ref={containerRefPlanets as any}
        className="skillsContainer planetarium"
      >
        {skills.map((skill, i) => (
          <div
            className="planet"
            key={skill.skill}
            onClick={() => onSkillClick(skill)}
          >
            <div className="entitiesContainer">
              <div className="textureContainer">
                <img
                  src={skill.texture}
                  alt={`Planet ${skill.skill}`}
                  style={{
                    animation: arePlanetsVisible
                      ? `translate1 ${60 + (i % 2) * 4}s linear infinite`
                      : "",
                  }}
                />
                <img
                  src={skill.texture}
                  alt={`Planet ${skill.skill}`}
                  style={{
                    animation: arePlanetsVisible
                      ? `translate2 ${60 + (i % 2) * 4}s linear infinite`
                      : "",
                  }}
                />
                <div className="planet-overlay" />
                <div className="planet-name">{skill.skill}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
