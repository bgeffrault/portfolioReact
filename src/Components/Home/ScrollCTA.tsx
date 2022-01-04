import React, { FC } from "react";
import { SignatureHelpTriggerCharacter } from "typescript";

export type IScrollCTA = {
  width: number | string;
  height: number | SignatureHelpTriggerCharacter;
};

export const ScrollCTA: FC<IScrollCTA> = ({ width, height }) => {
  return <div className="cta">Learn more..</div>;
};

export default ScrollCTA;
