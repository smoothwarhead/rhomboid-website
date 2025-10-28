import React, { forwardRef } from "react";

const ScrollMerge = forwardRef(({ contents, size }, ref) => {
  return (
    <div
      className="merge-section"
      ref={ref}
    >
      <div className={size === "small" ? "left-box" : "big-left-box"}>
        {contents.left.title !== "" ? <h4>{contents.left.title}</h4> : <div></div>}
        {contents.left.text !== "" ? <span>{contents.left.text}</span> : <div></div>}
        
      </div>

      <div className={size === "small" ? "right-box" : "big-right-box"}>
        {contents.right.title !== "" ? <h4>{contents.right.title}</h4> : <div></div>}
        {contents.right.text !== "" ? <span>{contents.right.text}</span> : <div></div>}
      </div>
    </div>
  );
});

export default ScrollMerge;
