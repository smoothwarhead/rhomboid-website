// import { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { stepFormData } from "./prd-data";
import MultiStepForm from "../../others/multi-step-form/MultiStepForm";






const ProductivitySection = () => {



//   console.log(selectedBtn);

  return (
    <div className="prd-section">
      <div className="left">
        <div className="left-h3">Unlock productivity and drive efficiency</div>
        <div className="left-p">
          We will contact you within 2 business hours of form submission to
          schedule a brief call.
        </div>
      </div>


      <div className="step-container">
        <MultiStepForm />

      </div>



    </div>
  );
};

export default ProductivitySection;
