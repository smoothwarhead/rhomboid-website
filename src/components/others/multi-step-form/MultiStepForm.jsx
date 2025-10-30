import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import InputField from "../../globals/forms/input/InputField";
import { stepFormData } from "../../globals/prd-section/prd-data";
import ProgressIndicator from "./ProgressIndicator";
// import "./MultiStepForm.scss";

const MultiStepForm = () => {

  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState({ id: "", option: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    phoneNumber: "",
    organizationName: "",
    physicians: "",
    organizationType: "",
    evaluationTime: "",
  });

  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  // Animate transitions and progress indicator
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    stepRefs.current.forEach((el, i) => {
      if (i + 1 < step) {
        gsap.to(el, {
          backgroundColor: "#BCD2E8",
          color: "#000",
          duration: 0.3,
        });
      } else if (i + 1 === step) {
        gsap.to(el, {
          backgroundColor: "#BCD2E8",
          color: "#000",
          duration: 0.3,
        });
      } else {
        gsap.to(el, { backgroundColor: "#fff", color: "#000", duration: 0.3 });
      }
    });
  }, [step]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => {
    if (step < 3) {
      gsap.to(containerRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setStep(step + 1),
      });
    }

    // checkProgress();
 
  };

  const prevStep = () => {
    if (step > 1) {
      gsap.to(containerRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setStep(step - 1),
      });
    }

    // checkProgress();

  };

  // Validation for enabling buttons
  const isStep1Valid = !!selectedOption;
  const isStep2Valid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.companyEmail.trim() &&
    formData.phoneNumber.trim();

  const isStep3Valid =
    formData.organizationName.trim() && formData.physicians.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };




  return (
    <div className="multi-step-form">
      {step > 1 && (
        <div className="back-nav" onClick={prevStep}>
          <MdOutlineKeyboardArrowLeft />
          <span>Back</span>
        </div>
      )}


     
  

      <div className="form-content" ref={containerRef}>
        {/* STEP 1 */}
        {step === 1 && (
          <div className="step step-1">

            <ProgressIndicator 
                step={step}
                ref={(el) => (stepRefs.current[i] = el)}

            />


            <h2>Which best describes you?</h2>
            <p>(Choose One)</p>
            <div className="options">
              {stepFormData.map((option, i) => (
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
            <button
              className="next"
              onClick={nextStep}
              disabled={!isStep1Valid}
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2 */}

        {selectedOption.id.toString() === "1" && step === 2 && (
          <div className="step step-2">
            <h2>Let's help you find what you're looking for.</h2>
            {/* <p>Please share the following information so we can contact you.</p> */}

            <button
              className="next"
              onClick={nextStep}
              disabled={!isStep2Valid}
            >
              Next
            </button>
          </div>
        )}

        {selectedOption.id.toString() === "3" && step === 2 && (
          <div className="step step-2">

           

            <h2>Let's help you find what you're looking for.</h2>
            <p>Please share the following information so we can contact you.</p>

            <button
              className="next"
              onClick={nextStep}
              disabled={!isStep2Valid}
            >
              Next
            </button>
          </div>
        )}

        {selectedOption.id.toString() === "2" && step === 2 && (
          <div className="step step-2">

              <ProgressIndicator 
                step={step}
                ref={(el) => (stepRefs.current[i] = el)}

            />
            <h2>Tell us about you.</h2>
            <p>Please share the following information so we can contact you.</p>
            <div className="form-grid">
              <InputField
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                label="First Name"
              />
              {/* <div>
                <label>First Name*</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div> */}
              <div>
                <label>Last Name*</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label>Company Email*</label>
                <input
                  name="companyEmail"
                  type="email"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="Company Email"
                />
              </div>
              <div>
                <label>Phone Number*</label>
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <button
              className="next"
              onClick={nextStep}
              disabled={!isStep2Valid}
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form className="step step-3" onSubmit={handleSubmit}>

             <ProgressIndicator 
                step={step}
                ref={(el) => (stepRefs.current[i] = el)}

            />


            <h2>Tell us about your organization.</h2>
            <p>
              Help us better understand your needs by providing the following
              information.
            </p>
            <div className="form-grid">
              <div>
                <label>Name of Organization*</label>
                <input
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="Organization Name"
                />
              </div>
              <div>
                <label>Number of physicians in your organization*</label>
                <input
                  name="physicians"
                  value={formData.physicians}
                  onChange={handleChange}
                  placeholder="Number"
                />
              </div>
              <div>
                <label>Type of organization (optional)</label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Private Practice">Private Practice</option>
                </select>
              </div>
              <div>
                <label>
                  When will you evaluate new solution(s)? (optional)
                </label>
                <select
                  name="evaluationTime"
                  value={formData.evaluationTime}
                  onChange={handleChange}
                >
                  <option value="">Select time</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Later">Later</option>
                </select>
              </div>
            </div>
            <p className="policy">
              By submitting your information, you agree to our{" "}
              <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.
            </p>
            <button className="submit" type="submit" disabled={!isStep3Valid}>
              Submit Form
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
