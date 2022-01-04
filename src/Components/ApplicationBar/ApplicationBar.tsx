import { FC, useState } from "react";
import "./ApplicationBar.scss";
import { Section } from "../../App";

import '../Drawer/Drawer.scss'

export type IApplicationBar = {
  activeSection: Section;
};


export const ApplicationBar: FC<IApplicationBar> = ({ activeSection }) => {
  const [open, setOpen] = useState({ open: false, openedOnce: false });

  const appBarItems = Object.keys(Section).filter((element) => {
    return isNaN(Number(element));
  });

  let burgerMenuClasses = "menu hidden";
  let clickAwayClasses = "menuClickAway hidden";

  if (open.openedOnce) {
    burgerMenuClasses = open.open ? "menu slideIn" : "menu slideOut";
    clickAwayClasses = open.open ? "menuClickAway" : "menuClickAway hidden"
  }
  else if (open.open) {
    burgerMenuClasses = "menuClickAway";
  }

  return (
    <>
      <div className={`ApplicationBarContainer ${open.open ? "activeBackground" : ""}`}>
        <div className="ApplicationBar">
          <div className="logo">
            <a href={`#${Section.Home}`}>Baptiste Geffrault</a>
          </div>
          <div className="ApplicationBarActions">
            {appBarItems.map((item) => (
              <a
                href={`#${item}`}
                className={`${activeSection === item ? "selected" : ""
                  } AppBarButton`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
          <div className={`burgerButton`} onClick={() => setOpen({ openedOnce: true, open: !open.open, })}>
            <div className="burger" />
          </div>
        </div>
      </div>
      <div className={burgerMenuClasses}>
        {appBarItems.map((item) => (
          <a
            href={`#${item}`}
            className="AppBarButton hoverBlack"
            key={item}
            onClick={() => setOpen({ ...open, open: false, })}
          >
            {item}
          </a>
        ))}
      </div>
      <div className={clickAwayClasses} onClick={() => setOpen({ ...open, open: false })} />
    </>
  );
};

export default ApplicationBar;
