import { FC } from "react";
import "./Button.scss";

export type IButton = {
  content: JSX.Element | string;
  onClick?: () => void;
  href?: string;
};

export const Button: FC<IButton> = ({ content, onClick, href }) => (
  <a className="button" href={href} style={{ color: "#fff" }} onClick={onClick}>
    {content}
  </a>
);
export default Button;
