import { useRef, useEffect } from "react";
import ScrollReveal from "../../../components/globals/scroll-reveal/ScrollReveal";
import { fqhcRevealData } from "../../../utils/scrollMergeData";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductivitySection from "../../../components/globals/prd-section/ProductivitySection";
import PageHero from "../../../components/globals/page-hero/PageHero";
import MidPage from "../../../components/globals/mid-page/MidPage";


gsap.registerPlugin(ScrollTrigger);

const Fqhc = () => {

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
        btnText="Request a personalized demo"
        p="RHOMBOID BRIDGE FOR Community Health Centers"
        h2="A comprehensive solution for Community Health Centers and FQHCs"
        span="Deliver personalized care that addresses a variety of health needs and social challenges through multi-layered, FQHC-specific support."
      />

      <div className="section-2">
        <h3>Enhance patient care & engagement</h3>
        <p>Increase patient satisfaction by providing high-quality care with tools that support care planning, whole-patient care, and enable patient access.</p>


        <div className="section-reveal-wrapper">
          {fqhcRevealData.map((item, index) => (
            <ScrollReveal
              contents={item}
              key={index}
              ref={(el) => (revealerRefs.current[index] = el)}
            />
          ))}
        </div>

        <MidPage text="From specialty-specific workflows and accelerators to tailorable revenue cycle technology, athenaOne is designed to support your needs." />

        <ProductivitySection />
      </div>
    </div>
  )
}

export default Fqhc