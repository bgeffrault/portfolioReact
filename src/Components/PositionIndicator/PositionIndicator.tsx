import { FC } from "react";
import { Section } from "../../App";
import "./PositionIndicator.scss";

export type IPositionIndicator = {
  activeSection: Section;
};

export const PositionIndicator: FC<IPositionIndicator> = ({
  activeSection,
}) => {
  const sections = Object.keys(Section).filter((element) => {
    return isNaN(Number(element));
  });

  return (
    <div id="positionIndicators">
      {sections.map((value) => {
        let className =
          activeSection === value ? "bubble activeState" : "bubble";
        return <div key={value} className={className} />;
      })}
    </div>
  );
};

export default PositionIndicator;
