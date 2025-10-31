import InputField from "../../globals/forms/input/InputField";
import { stepFormInput2 } from "../../globals/prd-section/prd-data";
import ProgressIndicator from "../multi-step-form/ProgressIndicator";




const StepOrganizationFormTwo = (props) => {
  const {
    step,
    isStep3Valid,
    formData,
    handleChange,
    handleSubmit

  } = props;

  return (
    <form className="step step-3" onSubmit={handleSubmit}>
      <ProgressIndicator step={step} />

      <h2>Tell us about your organization.</h2>
      <p>
        Help us better understand your needs by providing the following
        information.
      </p>
      <div className="form-grid">

        <>
            {stepFormInput2.slice().splice(0, 2).map((input, index) => (
          <InputField
            key={index}
            value={formData[input.name]}
            onChange={handleChange}
            required={input.validate}
            inputType="text"
            {...input}
          />
        ))}
        </>

        <>
          {stepFormInput2.slice().splice(-2).map((input, index) => (
          <InputField
            key={index}
            value={formData[input.name]}
            onChange={handleChange}
            required={input.validate}
            inputType="text"
            {...input}
          />
        ))}
        </>
      
      </div>
      <p className="policy">
        By submitting your information, you agree to our{" "}
        <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.
      </p>
      <button className="submit" type="submit" disabled={!isStep3Valid}>
        Submit Form
      </button>
    </form>
  );
};

export default StepOrganizationFormTwo;
