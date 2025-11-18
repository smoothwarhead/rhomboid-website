import React, { forwardRef } from "react";
import { hasEmpty } from "../../../utils/methods";

const ScrollMerge = forwardRef(({ contents, size }, ref) => {
  return (
    <div className="merge-section" ref={ref}>
      <div
        className={
          contents.hasIcon
            ? "icon-left-box"
            : size === "small"
            ? "left-box"
            : "big-left-box"
        }
      >
        {contents.left.icon ? (
          <div className="box-icon">
            <contents.left.icon />
          </div>
        ) : (
          <div></div>
        )}
        {contents.left.title !== "" ? (
          <h4>{contents.left.title}</h4>
        ) : (
          <div></div>
        )}
        {contents.left.text !== "" ? (
          <span>{contents.left.text}</span>
        ) : (
          <div></div>
        )}
      </div>

      {contents.hasOwnProperty("right") ? (
        <div
          className={
            contents.hasIcon
              ? "icon-right-box"
              : size === "small"
              ? "right-box"
              : "big-right-box"
          }
        >
          {contents.left.icon ? (
            <div className="box-icon">
              <contents.right.icon />
            </div>
          ) : (
            <div></div>
          )}
          {contents.right.title !== "" ? (
            <h4>{contents.right.title}</h4>
          ) : (
            <div></div>
          )}
          {contents.right.text !== "" ? (
            <span>{contents.right.text}</span>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
});

export default ScrollMerge;
