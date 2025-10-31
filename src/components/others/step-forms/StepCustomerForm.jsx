import React from "react";
import { stepCustomerFormData } from "../../globals/prd-section/prd-data";

const StepCustomerForm = (props) => {
  const { nextStep, isStep2Valid, selectedOption, handleOptionSelect } = props;

  return (
    <div className="step step-2">
      <h2>Let's help you find what you're looking for</h2>
      <div className="options">
        {stepCustomerFormData.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(option)}
            className={
              selectedOption.id.toString() === option.id.toString()
                ? "selected"
                : ""
            }
          >
            {option.option}
          </button>
        ))}
      </div>
      <button className="next" onClick={nextStep} disabled={!selectedOption.id}>
        Take me there
      </button>
    </div>
  );
};

export default StepCustomerForm;
