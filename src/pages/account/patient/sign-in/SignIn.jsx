import { Link } from "react-router";
import NavLogo from "../../../../components/globals/navigation/main-nav/navLogo.png";
import Apple from "../../../../assets/apple-logo.png";
import Microsoft from "../../../../assets/Microsoft_logo.svg.png";
import Google from "../../../../assets/Google__G__logo.svg.png";
import Twitter from "../../../../assets/x-logo.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { patientSignIn } from "../../../../utils/data";
import FormInput from "../../../../components/globals/forms/form-input/FormInput";
import usePasswordToggle from "../../../../hooks/usePasswordToggle";
import { hasEmpty } from "../../../../utils/methods";
// import InputField from "../../../../components/globals/forms/input/InputField";














const SignIn = () => {

  const {InputType, Icon} = usePasswordToggle();


  const [openEmailCard, setOpenEmailCard] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    <div className="signin-container">
      {/* LEFT SIDE */}
      <div className="signin-left">
        <div className="logo-section">
          <img src={NavLogo} alt="Rhomboid Health" className="rh-logo" />
          <h2>RHOMBOID HEALTH</h2>
        </div>

        <div className="permissions">
          <p>This platform is requesting the following permissions:</p>
          <ul>
            <li>Verify your identity</li>
            <li>Access your email address</li>
            <li>Access your basic profile information</li>
            <li>Stay signed in to this application</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="signin-right">
        <div className="signup-header">
          <span>Don’t have an account?</span>
          <Link to="/patient/create-account" className="sign-up-btn">Sign Up</Link>
        </div>

        {!openEmailCard && (
          <div className="signin-card">
            {/* Social Login Buttons */}
            <div className="login-btn google">
              <img src={Google} alt="" />
              Continue with Google
            </div>

            <div className="login-btn apple">
              <img src={Apple} alt="" />
              Continue with Apple
            </div>

            <div className="login-btn microsoft">
              <img src={Microsoft} alt="" />
              Continue with Microsoft
            </div>

            <div className="login-btn x">
              <img src={Twitter} alt="" />
              Continue with X
            </div>

            <div className="email" onClick={() => setOpenEmailCard(true)}>
              Continue with email
              <IoIosArrowRoundForward />
              {/* <span className="arrow"></span> */}
            </div>

            {/* Terms */}
            <p className="terms">
              By continuing, you agree to rhomboid health's{" "}
              <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>.
              <br />
              This site is protected by reCAPTCHA Enterprise and the Google{" "}
              <Link href="#">Privacy Policy</Link> and{" "}
              <Link href="#">Terms of Service</Link> apply.
            </p>
          </div>
        )}

        {openEmailCard && (
          <div className="signin-card">
            <div className="back-arrow" onClick={() => setOpenEmailCard(false)}>
              <IoIosArrowRoundBack />
              Back
            </div>

            <div className="patient-inputs">
              {patientSignIn.map((input, index) => (
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
                  cName="patient-input"
                />
              ))}
            </div>

            <div className="sign-in-btn" onClick={handleSubmit}>Sign in</div>

            {/* <div className="email" onClick={() => setOpenEmailCard(true)}>
              Continue with email
              <IoIosArrowRoundForward />
            </div> */}

            {/* Terms */}
            <p className="terms">
              By continuing, you agree to rhomboid health's{" "}
              <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>.
              <br />
              This site is protected by reCAPTCHA Enterprise and the Google{" "}
              <Link href="#">Privacy Policy</Link> and{" "}
              <Link href="#">Terms of Service</Link> apply.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
