import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import InputField from "../../globals/forms/input/InputField";
import { stepFormData, stepFormInput1, stepPatientFormData } from "../../globals/prd-section/prd-data";
import ProgressIndicator from "./ProgressIndicator";
import StepOrganizationFormOne from "../step-forms/StepOrganizationFormOne";
import StepPatientForm from "../step-forms/StepPatientForm";
import StepCustomerForm from "../step-forms/StepCustomerForm";
import StepOrganizationFormTwo from "../step-forms/StepOrganizationFormTwo";
// import "./MultiStepForm.scss";

const MultiStepForm = () => {

  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState({ id: "", option: "" });
  const [selectedOption2, setSelectedOption2] = useState({ id: "", option: "" });
  const [selectedOption3, setSelectedOption3] = useState({ id: "", option: "" });
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

    if(step === 1){
        setSelectedOption(option);
    }
    if(step === 2){
        console.log(option, "2");
        if(selectedOption.id === 1){
            setSelectedOption2(option);

        }else{
            setSelectedOption3(option);
            
        }

    }
    // if(step === 3){

    //     console.log(option)
    //     setSelectedOption3(option);
    // }
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
  const isStep1Valid = !!selectedOption.id;
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
          <div className="step step-2">

            <ProgressIndicator 
                step={step}
               
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
            <StepPatientForm 
                step = {step}
                nextStep = {nextStep}
                selectedOption = {selectedOption2}
                handleOptionSelect = {handleOptionSelect}
            />
        )}

       

        {selectedOption.id.toString() === "2" && step === 2 && (

            <StepOrganizationFormOne 

                step = {step}
                nextStep = {nextStep}
                isStep2Valid={isStep2Valid}
                formData={formData}
                handleChange={handleChange}

            
            />
    
        )}


        {selectedOption.id.toString() === "3" && step === 2 && (
            <StepCustomerForm 
                step = {step}
                nextStep = {nextStep}
                selectedOption = {selectedOption3}
                handleOptionSelect = {handleOptionSelect}
            />
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <StepOrganizationFormTwo 

          
                step = {step}
                formData={formData}
                handleChange={handleChange}
                isStep3Valid={isStep3Valid}
                handleSubmit={handleSubmit}
          
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
