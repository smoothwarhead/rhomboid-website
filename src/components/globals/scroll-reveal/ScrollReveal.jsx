import React, { forwardRef } from "react";
import ActiveBtn from "../buttons/btns/ActiveBtn";

const ScrollReveal = forwardRef(({ contents }, ref) => {
  return (
    <div
      className="reveal-card"
      ref={ref}
    >
      <div className="reveal-card-border"></div>
      <div className="reveal-card-content">

        {contents.for !== "" ? <span className="content-heading">{contents.for}</span> : <div></div>}
        <h2>{contents.title}</h2>
        <p className="content-p">{contents.text}</p>
        <div className="reveal-btn">

            {contents.btnText !== "" ?    
                <ActiveBtn
                    text={contents.btnText}
                    active={true}
                />

                :

                <div></div>

            }
        </div>
      </div>
    </div>
  );
});

export default ScrollReveal;
