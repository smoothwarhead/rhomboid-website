
import { RiMessage2Fill } from "react-icons/ri";
import { TbTestPipe2Filled } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundBack, IoIosHelpCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import FormInput from "../../../../components/globals/forms/form-input/FormInput";
import { PatientCreateInput1, PatientCreateInput2 } from "../../../../utils/data";
import usePasswordToggle from "../../../../hooks/usePasswordToggle";
import { useState } from "react";
import { hasEmpty } from "../../../../utils/methods";





const CreateAccount = () => {
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
      <div className="left-section">
        <p className="tagline">Access enables Care</p>

        <h1 className="title">
          Rhomboid Patient <br /> for every home.
        </h1>

        <p className="subtitle">
          Rhomboid Bridge is built for patients and healthcare providers to
          manage their health information and connect with each other. Whether
          you're exploring the basics or delivering full care management,
          Rhomboid Bridge is essentially a personal gateway to your health
          record.
        </p>

        {/* Feature List */}
        <div className="features">
          <div className="feature-item">
            <div className="f-item-icon">
              <RiMessage2Fill className="m-icon" />
            </div>
            <div>
              <h4>Communicate with your doctor</h4>
              <p>
                Get answers to your medical questions from the comfort of your
                own home
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="f-item-icon">
              <TbTestPipe2Filled className="t-icon" />
            </div>
            <div>
              <h4>Access your test results</h4>
              <p>View your results and doctor’s comments within days</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="f-item-icon">
              <SlCalender className="c-icon" />
            </div>
            <div>
              <h4>Manage your appointments</h4>
              <p>Schedule or view your past and upcoming appointments</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="f-item-icon">
              <IoIosHelpCircle className="h-icon" />
            </div>
            <div>
              <h4>Need assistance with Rhomboid?</h4>
              <p>Contact Rhomboid Support at +2348100000000</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="f-item-icon">
              <FaLocationDot className="l-icon" />
            </div>
            <div>
              <h4>Find a nearby Health Provider</h4>
              <p>Discover convenient locations for you and your family</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">
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

            <div className="form-btn next-btn" onClick={() => setStep(step + 1)}>
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


            <div className="form-btn create-btn" onClick={handleSubmit}>
              Create Account
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
