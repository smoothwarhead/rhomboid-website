import { useRef, useEffect } from "react";
import ScrollReveal from "../../../components/globals/scroll-reveal/ScrollReveal";
import { enterpriseRevealData } from "../../../utils/scrollMergeData";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductivitySection from "../../../components/globals/prd-section/ProductivitySection";
import PageHero from "../../../components/globals/page-hero/PageHero";
import MidPage from "../../../components/globals/mid-page/MidPage";


gsap.registerPlugin(ScrollTrigger);

const EnterpriseSystem = () => {

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
     <div className="startup-page">
      <PageHero
        btnText="Let's Connect"
        p="RHOMBOID BRIDGE FOR ENTERPRISES & HEALTH SYSTEMS"
        h2="Healthcare IT that unlocks efficiency and data insights"
        span="Maximize revenue and operational efficiency with enterprise solutions designed to support your ideal healthcare IT experience."
      />

      <div className="section-2">
        <p>RHOMBOID BRIDGE</p>
        <h3>Core Solutions</h3>

        <div className="section-reveal-wrapper">
          {enterpriseRevealData.map((item, index) => (
            <ScrollReveal
              contents={item}
              key={index}
              ref={(el) => (revealerRefs.current[index] = el)}
            />
          ))}
        </div>

        <MidPage text="From specialty-specific workflows and accelerators to tailorable revenue cycle technology, rhomboidBridge is designed to support your needs." />

        <ProductivitySection />
      </div>
    </div>
  )
}

export default EnterpriseSystem