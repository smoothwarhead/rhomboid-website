import React, { forwardRef } from "react";

const ScrollMerge = forwardRef(({ contents }, ref) => {
  return (
    <div
      className="merge-section"
      ref={ref}
    >
      <div className="left-box">{contents.left}</div>
      <div className="right-box">{contents.right}</div>
    </div>
  );
});

export default ScrollMerge;
