import InputField from "../../globals/forms/input/InputField";
import { stepFormInput1 } from "../../globals/prd-section/prd-data";
import ProgressIndicator from "../multi-step-form/ProgressIndicator";

const StepOrganizationFormOne = (props) => {
  const {
    step,
    nextStep,
    isStep2Valid,
    formData,
    handleChange,
  } = props;

  return (
    <div className="step step-2">
      <ProgressIndicator step={step} />

      <h2>Tell us about you.</h2>
      <p>Please share the following information so we can contact you.</p>
      <div className="form-grid">
        {stepFormInput1.map((input, index) => (
          <InputField
            key={index}
            value={formData[input.name]}
            onChange={handleChange}
            required={input.validate}
            inputType="text"
            {...input}
          />
        ))}
      </div>
      <button className="next" onClick={nextStep} disabled={!isStep2Valid}>
        Next
      </button>
    </div>
  );
};

export default StepOrganizationFormOne;
