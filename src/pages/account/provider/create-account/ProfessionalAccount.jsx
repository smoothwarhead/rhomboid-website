
import { RiMessage2Fill } from "react-icons/ri";
import { TbTestPipe2Filled } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundBack, IoIosHelpCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import FormInput from "../../../../components/globals/forms/form-input/FormInput";
import { PatientCreateInput1, PatientCreateInput2, professionals } from "../../../../utils/data";
import usePasswordToggle from "../../../../hooks/usePasswordToggle";
import { useState } from "react";
import { hasEmpty } from "../../../../utils/methods";
import AccountIntro from "../../../../components/others/provider-account/account-intro/AccountIntro";
import FormSelect from "../../../../components/globals/forms/select/form-select/FormSelect";





const ProfessionalAccount = () => {
  const { InputType, Icon } = usePasswordToggle();

  //   const [openEmailCard, setOpenEmailCard] = useState(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


    const handleSubmit = () => {
        // e.preventDefault();

        if(hasEmpty(values)){
            setError(true);
        }
        
      
        else{
            console.log(values);
        }


    }


  return (
    <div className="create-acc-container">
      {/* LEFT SECTION */}
        <AccountIntro />

      {/* RIGHT SECTION */}
      <div className="right-section account-scroll-section">
        <div className={`signup-header ${step > 1 ? "flex" : "block"}`}>
          {step > 1 && (
            <div className="back-arrow" onClick={() => setStep(1)}>
              <IoIosArrowRoundBack />
              Back
            </div>
          )}
          {`${step}/2`}
        </div>

        {step === 1 && (
          <div className="form-card">
            <h3>Enter Your Information</h3>
            <p className="form-desc">
              Enter the details to create a provider account.
            </p>

            <FormSelect 
                label="Profession"
                options = {professionals}
                placeholder = "Nurse"
                cName = "p-account-select"
            />

            <div className="patient-inputs">
              {PatientCreateInput1.map((input, index) => (
                <FormInput
                  key={index}
                  inputType={
                    input.name === "email"
                      ? "email"
                      : !input.name === "email" && !input.isPassword
                      ? "text"
                      : InputType
                  }
                  {...input}
                  icon={!input.isPassword ? null : Icon}
                  value={formData[input.name]}
                  handleChange={handleChange}
                  isPassword={input.isPassword}
                  validate={input.validate}
                  errorMessage={input.errorMessage}
                  error={error}
                  cName="patient-c-input"
                />
              ))}
            </div>

            <div className="form-btn e-btn" onClick={() => setStep(step + 1)}>
              Next
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-card">
            <h3>Enter Your Information</h3>
            <p className="form-desc">
              Enter the details to create a provider account.
            </p>

            <div className="patient-inputs">
              {PatientCreateInput2.map((input, index) => (
                <FormInput
                  key={index}
                  inputType={
                    input.name === "email"
                      ? "email"
                      : !input.name === "email" && !input.isPassword
                      ? "text"
                      : InputType
                  }
                  {...input}
                  icon={!input.isPassword ? null : Icon}
                  value={formData[input.name]}
                  handleChange={handleChange}
                  isPassword={input.isPassword}
                  validate={input.validate}
                  errorMessage={input.errorMessage}
                  error={error}
                  cName="patient-c-input"
                />
              ))}
            </div>


            <div className="form-btn e-btn" onClick={handleSubmit}>
              Create Account
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalAccount;
