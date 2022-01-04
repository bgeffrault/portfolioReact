import { FC, useEffect } from "react";
import { Section as SectionName } from "../../App";
import "../../App.scss";
import { useElementOnScreen } from "../../Hooks/useElementOnScreen";
import "./Home.scss";
import ScrollCTA from "./ScrollCTA";
import Button from "../Button/Button";

type IHome = {
  onVisible: () => void;
};

const tags1 = ["React", "D3.js", "Angular", "ASP.NETCore"];
const tags2 = ["Design", "Figma", "Git", "PowerBI"];

const Home: FC<IHome> = ({ onVisible }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);

  return (
    <div
      id={SectionName.Home}
      className="page home shootingStars appear"
      ref={containerRef as any}
    >
      <span />
      <span />
      <span />
      <span />

      <div className="spacer">
        <div className="titleContainer">
          <h1>I help you build websites</h1>
          <h2>Baptiste Geffrault - Web Developer</h2>
        </div>
      </div>

      <div className="splitContent">
        <div className="ctaContactSection">
          <div>
            Contact me to build amazing thing together ....
            <div style={{ marginTop: "1rem" }}>
              <Button content="Contact" href={"#" + SectionName.Contact} />
            </div>
          </div>
        </div>

        <div className="tagsContainer">
          <div className="tags">
            {tags1.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <div className="tags">
            {tags2.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="ctaContainer">
        <ScrollCTA width={20} height={20} />
      </div>
    </div>
  );
};

export default Home;
