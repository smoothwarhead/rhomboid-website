import { FaArrowRight } from "react-icons/fa6";
import { features, featuresReveal } from "../../../utils/data";
import LinkBtn from "../../globals/buttons/link-btns/LinkBtn";
import ActiveBtn from "../../globals/buttons/btns/ActiveBtn";
import MidPage from "../../globals/mid-page/MidPage";
import ScrollReveal from "../../globals/scroll-reveal/ScrollReveal";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BridgeFeatures = () => {
  const revealerRefs = useRef([]);

  useEffect(() => {
    revealerRefs.current.forEach((el, i) => {
      // gsap.set(el, { y: "-5%", opacity: 0 });

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      t2.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: Power3.easeInOut,
        }
      );
    });
  }, []);

  return (
    <div className="home-bridge-section">
      <section className="bridge-section">
        <div className="bridge-header">
          <p className="small-heading">
            ELECTRONIC HEALTH RECORDS (EHR) AND MORE WITH
          </p>
          <h2>Rhomboid Bridge</h2>
          <p className="small-p">
            Deliver better and faster care with our advanced electronic health
            record (EHR) system, enabling you to focus on delivering efficient,
            high-quality healthcare.
          </p>

          <LinkBtn text="Learn more about Rhomboid Bridge" cName="learn-more" />
        </div>

        <div className="section-reveal-wrapper">
          {featuresReveal.map((item, index) => (
            <ScrollReveal
              contents={item}
              key={index}
              ref={(el) => (revealerRefs.current[index] = el)}
            />
          ))}
        </div>

        {/* <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
             
              <div className="feature-content">
                <h4>{f.title}</h4>
                <p>{f.description}</p>
                <ActiveBtn active={true} text={f.button} />
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default BridgeFeatures;
