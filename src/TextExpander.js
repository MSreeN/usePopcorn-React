import { useState } from "react";

export default function TextExpander({
  expanded = false,
  children,
  collapsedNumWords = 20,
  expandButtonText = "....Show more",
  collapseButtonText = "....Show less",
  buttonColor = "red",
  className,
}) {
  const [isCollapse, setIsCollapse] = useState(expanded);
  console.log(isCollapse);
  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointers",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      {isCollapse ? children : children.slice(0, collapsedNumWords)}
      <button
        style={buttonStyle}
        onClick={() => setIsCollapse((prev) => !prev)}
      >
        {isCollapse ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
