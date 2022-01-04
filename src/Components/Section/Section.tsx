import { FC, useEffect } from "react";
import { useElementOnScreen } from "../../Hooks/useElementOnScreen";
import "./Section.scss";

export type ISection = {
  title: string;
  threshold?: number;
  onVisible: () => void;
  id: string;
};

export const Section: FC<ISection> = ({
  title,
  children,
  threshold = 0.4,
  onVisible,
  id,
}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);

  return (
    <div
      className={`page ${isVisible ? "appear" : "disappear"}`}
      ref={containerRef as any}
      id={id}
    >
      <div className="spacer sectionContainer">
        <h3>
          <span className="selected">{title}</span>
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Section;
