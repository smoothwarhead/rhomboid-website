import PageHero from "../../../components/globals/page-hero/PageHero";
import ScrollMerge from "../../../components/globals/scroll-merge/ScrollMerge";
import { whoMergeData } from "../../../utils/scrollMergeData";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActiveBtn from "../../../components/globals/buttons/btns/ActiveBtn";

gsap.registerPlugin(ScrollTrigger);






const WhoWeAre = () => {
  const containerRefs = useRef([]);

  useEffect(() => {
    containerRefs.current.forEach((el, i) => {
      const leftBox = el.querySelector(".icon-left-box");
      const rightBox = el.querySelector(".icon-right-box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "top 70%",
          scrub: true,
        },
      });

      tl.to(leftBox, {
        x: "8%",
        duration: 1,

        ease: Power3.easeInOut,
      }).to(
        rightBox,
        {
          x: "-8%",
          duration: 1,
          ease: Power3.easeInOut,
        },
        "<"
      );
    });
  }, []);

  return (
    <div className="w-page">
      <section className="w-hero-section">
        <PageHero
          p="Who we are"
          h2="Rhomboid health is curing complexity to simplify the practice of care"
          span="Together, we can make healthcare work intelligently, efficiently, and effectively — as it should."
        />
      </section>

      <section className="w-mid-page">
        <h3>A trusted partner for healthcare practices of all sizes</h3>
        <span className="m-text">
          Rhomboid health is gear for the cure the complexity for ambulatory
          healthcare practices and the patients they serve, empowering them to
          deliver the best possible care and business outcomes through
          innovative clinical, financial, and patient engagement solutions.
        </span>
        <br />
        <br />
        <span className="m-text">
          The company’s flagship Advanced technology solution, RhomboidBridge®,
          integrates electronic health records (EHR), practice management, and
          patient engagement capabilities powered by the most open, connected
          network in the industry and an embedded service model to help
          practices thrive and remain independent.
        </span>
      </section>

      <section className="vision-section">
        <div className="texts">
          <h3>Our Vision</h3>
          <p>
            To create a thriving ecosystem that delivers accessible,
            high-quality, and sustainable healthcare for all.
          </p>
        </div>
      </section>

      <section className="believe-section">
        <div className="believe-section-con">
          <div className="texts">
            <p className="text-p">RHOMBOID BRIDGE</p>
            <h3 className="text-h">What we believe in</h3>
            <span className="text-span">
              Our company values and behaviors inform the way we interact with
              our partners — and the standards to which we hold one another.
            </span>
          </div>

          <div className="scroll-merge-wrapper">
            {whoMergeData.map((item, index) => (
              <ScrollMerge
                key={index}
                ref={(el) => (containerRefs.current[index] = el)}
                contents={item}
                size=""
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mid-page">
        <h3>Our Leadership</h3>
        <span className="m-text">Meet the seasoned professionals and industry experts leading our mission to transform healthcare.</span>

        <div className="mid-page-btn">
          <ActiveBtn text="Meet the leadership" active={true} />
        </div>
      </div>

      {/* <section className="leadership-section">

      </section> */}
    </div>
  );
};

export default WhoWeAre;
