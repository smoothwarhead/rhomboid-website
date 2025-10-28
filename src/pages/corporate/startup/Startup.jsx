import { useEffect, useRef } from "react";
import PageHero from "../../../components/globals/page-hero/PageHero";
import { startupMergeData } from "../../../utils/scrollMergeData";
import ScrollMerge from "../../../components/globals/scroll-merge/ScrollMerge";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActiveBtn from "../../../components/globals/buttons/btns/ActiveBtn";

gsap.registerPlugin(ScrollTrigger);

const Startup = () => {
  const containerRefs = useRef([]);

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
          <p>We will contact you within 2 business hours of form submission to schedule a brief call.</p>
        </div>


        <div className="section-4-right">

          <div className="form-title">
            <p>Are you an existing patient?</p><span>View my Patient Portal</span>
          </div>

          <div className="form-container">
            
          </div>

        </div>

      </div>



    </div>
  );
};

export default Startup;
