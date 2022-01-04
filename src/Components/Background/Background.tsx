import { FC } from "react";
import "./stars.scss";

export type IBackground = {};

export const Background: FC<IBackground> = () => {
  return (
    <div className="header">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Background;
