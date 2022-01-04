import { FC } from "react";
import { Section } from "..";
import { Section as SectionName } from "../../App";
import Code from "../../Resources/SvgIcons/Code";
import Person from "../../Resources/SvgIcons/Person";
import "./Services.scss";

export type IServices = {
  onVisible: () => void;
};

const webServices = [
  "Create responsive Websites",
  "Create & Connect API",
  "Implement features & user interfaces",
  "Implement with Best Practices",
  // "Architect efficient and reusable front-end systems",
];

const personServices = [
  "Collaborate with Product Designers, Product Managers, and Software Engineers ",
  "Propose, design and develop solutions",
  "Perform code reviews",
  "Team leader",
];

type ICard = {
  title: string | JSX.Element;
  list: string[];
};

const Card: FC<ICard> = ({ title, list }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {list.map((service) => (
        <div className="listItem" key={service}>
          {service}
        </div>
      ))}
    </div>
  );
};

export const Services: FC<IServices> = ({ onVisible }) => {
  return (
    <Section title="Services" onVisible={onVisible} id={SectionName.Services}>
      <div className="services">
        <div className="cardsContainer">
          <Card
            title={
              <span className="title">
                <Code /> Web Development
              </span>
            }
            list={webServices}
          />
          <Card
            title={
              <span className="title">
                <Person /> Others
              </span>
            }
            list={personServices}
          />
        </div>
      </div>
    </Section>
  );
};

export default Services;
