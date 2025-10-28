import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EhrTablet from "./tablet.png";
import LinkBtn from "../../../components/globals/buttons/link-btns/LinkBtn";
import LoopedSettings from "./loopedSettings.png";
import LoopedChart from "./loopedChart.png";
import LoopedPortal from "./loopedPortal.png";

gsap.registerPlugin(ScrollTrigger);

const EHR = () => {
  const sectionRef = useRef(null);
  const tabletRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      //tablet reveal
      gsap.from(tabletRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotate: 5,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tabletRef.current,
          start: "top 25%",
        },
      });

      // parallax tilt effect on scroll

      gsap.to(tabletRef.current, {
        rotateY: 10,
        rotateX: -10,
        ease: "none",
        scrollTrigger: {
          trigger: tabletRef.current,
          start: "top 25%",
          end: "bottom top",
          scrub: true,
        },
      });

      // demo button animation
      gsap.from(".demo-btn", {
        y: 40,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".demo-btn",
          start: "top 85%",
        },
      });

      // feature cards
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
      });

      // Text and highlight box

      gsap.from(".text-section", {
        x: -100,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 85%",
        },
      });

      gsap.from(".highlight-box", {
        x: 100,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".highlight-box",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ehr-section">
      <div className="ehr-section-1">
        <div className="hero">
          <div className="hero-left">
            <p className="hero-intro">
              An all-in-one EHR that simplifies care and documentation
            </p>
            <h2>Electronic Health Records</h2>

            <p className="hero-text">
              Focus more on your patients and less on paperwork. Our Advanced
              technological EHR, Rhomboid Health, helps you make better-informed
              decisions, coordinate care seamlessly, and reduce administrative
              strain.
            </p>

            <LinkBtn
              text="Request a demo"
              cName="demo-btn"
              to="/request-a-demo"
            />
          </div>
          <div className="hero-right" ref={tabletRef}>
            <img src={EhrTablet} alt="Rhomboid Health EHR" className="tablet" />
          </div>
        </div>

        <div className="features-section">
          <h2>Stay on the leading edge of care through the cloud</h2>
          <p>
            With no software to install or hardware to maintain, our fully
            cloud-based EHR stays automatically up to date—keeping you aligned
            with the ever-evolving clinical landscape
          </p>

          <div className="feature-cards-con">
            <div className="feature-card">
              <div className="icon">
                <img src={LoopedSettings} alt="" />
              </div>
              <h3>Automatic updates</h3>
              <p>
                No more manual updates or outdated software—your EHR stays
                effortlessly up to date in the cloud.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <img src={LoopedChart} alt="" />
              </div>
              <h3>Chart on any device</h3>
              <p>
                Access patient data anytime, on any device—laptop, tablet, or
                mobile—for greater flexibility and convenience.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">
                <img src={LoopedPortal} alt="" />
              </div>
              <h3>Free patient portal</h3>
              <p>
                Deliver a seamless patient experience at every stage of
                care—before, during, and after each visit—while empowering
                patients to take an active role in their health.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ehr-section-2">
        <div className="workflow">
          <div className="text-section">
            <h2>Save time with clinical workflows tailored to your needs</h2>
            <p>
              Your EHR comes with a free library of customizable charting
              templates, so you can quickly e-prescribe, send lab and imaging
              orders, and share results right from your patient’s electronic
              health record.
            </p>
          </div>

          <span>
            <div className="highlight-box">
              <h4>With Rhomboid Bridge EHR, you get:</h4>
              <ul>
                <li>• Intuitive charting</li>
                <li>• Seamless e-prescribing</li>
                <li>• Labs and imaging connections</li>
                <li>• Patient engagement capabilities</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default EHR;
