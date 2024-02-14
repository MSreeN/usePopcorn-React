import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
}) {
  const [isCollapse, setIsCollapse] = useState(true);
  console.log(isCollapse);
  return (
    <div>
      {isCollapse
        ? children.slice(0, collapsedNumWords) + "....."
        : children + "....."}
      {isCollapse || (
        <a style={{ color: buttonColor }} onClick={() => setIsCollapse(true)}>
          {collapseButtonText}
        </a>
      )}
      {isCollapse && (
        <a style={{ color: buttonColor }} onClick={() => setIsCollapse(false)}>
          {expandButtonText}
        </a>
      )}
    </div>
  );
}
