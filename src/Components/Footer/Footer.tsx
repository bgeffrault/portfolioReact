import { FC } from "react";
import { Section, SiteReference } from "..";
import "./Footer.scss";
import Baptiste from "../../Resources/Images/Baptiste.png";
import Github from "../../Resources/Images/Github.png";
import LinkeIn from "../../Resources/Images/LinkeIn.png";
import { Section as SectionName } from "../../App";

export type IFooter = {
  onVisible: () => void;
};

export const Footer: FC<IFooter> = ({ onVisible }) => {
  return (
    <Section title="Contact" onVisible={onVisible} id={SectionName.Contact}>
      <div className="Footer">
        <div className="infoContainer">
          <div>
            <span className="email">
              Email : bgeffrault@outlook.fr
            </span>
            <div className="redirectContainer">
              <SiteReference url="https://www.linkedin.com/in/bgeffrault" content={<img src={LinkeIn} alt="LinkeIn" className="redirectIcon" />} />
              <SiteReference url="https://github.com/bgeffrault" content={<img src={Github} alt="Github" className="redirectIcon" />} />
            </div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="baptisteImg">
            <div>
              <img src={Baptiste} alt="Baptiste G." />
            </div>
            <div className="legend">Ok, the dark and white ... it looks like I'm dead but I'm not !</div>
          </div>
          My name is Baptiste GEFFRAULT, I'm a Web Developer and a
          French Engineer.
          I like to build different kind of things from Web applications to IoT projects.
          <br />
          After two years in project management, I choose to retrain on web app development where I really enjoy myself.
          <br />
          Regardless, I love to travel, eat good food and play board & video games.
        </div>
      </div>
    </Section>
  );
};

export default Footer;
