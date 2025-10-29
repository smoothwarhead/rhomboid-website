import { useEffect, useRef } from "react";
import PageHero from "../../../components/globals/page-hero/PageHero";
import { startupMergeData } from "../../../utils/scrollMergeData";
import ScrollMerge from "../../../components/globals/scroll-merge/ScrollMerge";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActiveBtn from "../../../components/globals/buttons/btns/ActiveBtn";
import { Link } from "react-router";
import InputField from "../../../components/globals/forms/input/InputField";
import SelectField from "../../../components/globals/forms/select/SelectField";




gsap.registerPlugin(ScrollTrigger);

const Startup = () => {
  const containerRefs = useRef([]);

  const formRef = useRef(null);

  useEffect(() => {
    containerRefs.current.forEach((el, i) => {
      const leftBox = el.querySelector(".big-left-box");
      const rightBox = el.querySelector(".big-right-box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "top 70%",
          scrub: true,
        },
      });

      tl.to(leftBox, {
        x: "5%",
        duration: 1,

        ease: Power3.easeInOut,
      }).to(
        rightBox,
        {
          x: "-5%",
          duration: 1,
          ease: Power3.easeInOut,
        },
        "<"
      );
    });
  }, []);

  return (
    <div className="startup-page">
      <PageHero
        btnText="Let's Connect"
        p="RHOMBOID BRIDGE FOR STARTUP PRACTICES"
        h2="Achieve true independence with a partner committed to helping you succeed"
        span="Rhomboid Bridge helps simplify the complexities of starting a practice so you can focus on patient care."
      />

      <div className="section-2">
        <p>RHOMBOID BRIDGE</p>
        <h3>Core Solutions</h3>

        <div className="section-mergers">
          {startupMergeData.map((item, index) => (
            <ScrollMerge
              key={index}
              ref={(el) => (containerRefs.current[index] = el)}
              contents={item}
              size="big"
            />
          ))}
        </div>
      </div>

      <div className="section-3">
        <h3>Technology built with your specialty in mind</h3>
        <p>
          From specialty-specific workflows and accelerators to tailorable
          revenue cycle technology, athenaOne is designed to support your needs.
        </p>

        <div className="section-btn">
          <ActiveBtn text="See who we serve" active={true} />
        </div>
      </div>

      <div className="section-4">
        <div className="section-4-left">
          <h3>Get set for success from the start</h3>
          <p>
            We will contact you within 2 business hours of form submission to
            schedule a brief call.
          </p>
        </div>

        <div className="section-4-right">

          <div className="existing-patient">
            Are you an existing patient?{" "}
            <Link href="#">View my Patient Portal.</Link>
          </div>


          <section className="contact-section" ref={formRef}>

            <div className="form-container">
              {/* Section 1 */}
              <div className="form-section">
                <h2>Let's get in touch.</h2>
                <p>
                  Please provide the following information so our team can reach
                  out.
                </p>
                <div className="form-grid">
                  <InputField
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                  <InputField
                    label="Company Email"
                    name="email"
                    placeholder="Company Email"
                    required
                  />
                  <InputField
                    label="Phone Number"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              {/* Section 2 */}
              <div className="form-section">
                <h2>Let's get to know each other better.</h2>
                <p>
                  Help us understand your needs by telling us a little about
                  your future practice.
                </p>

                <div className="form-grid">
                  <SelectField
                    label="Which best describes your current situation?"
                    name="situation"
                    options={[
                      "Starting new practice",
                      "Expanding current practice",
                      "Researching options",
                    ]}
                    required
                  />
                  <SelectField
                    label="When are you planning to open your new practice?"
                    name="openingTime"
                    options={[
                      "Within 3 months",
                      "3–6 months",
                      "6–12 months",
                      "Not sure yet",
                    ]}
                    required
                  />
                  <SelectField
                    label="Does your new practice have a legal name?"
                    name="legalName"
                    options={["Yes", "No"]}
                    required
                  />
                  <SelectField
                    label="Have you secured a location for your practice?"
                    name="locationSecured"
                    options={["Yes", "No"]}
                    required
                  />
                  <SelectField
                    label="Are you planning to accept insurance"
                    name="insurance"
                    options={["Yes", "No", "Not yet decided"]}
                    required
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="form-footer">
                <p>
                  By submitting your information, you agree to our{" "}
                  <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Terms of Use</a>.
                </p>
                <button className="submit-btn" disabled>
                  Submit
                </button>
                <p className="note">
                  Patients, please do not use this form. Instead,{" "}
                  <Link href="#">visit your patient portal here.</Link>
                </p>
              </div>

            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default Startup;
