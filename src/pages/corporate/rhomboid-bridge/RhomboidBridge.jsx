import BridgeImg from "../../../assets/bridgeHero.png";
import ActiveBtn from "../../../components/globals/buttons/btns/ActiveBtn";
import {
  scrollMergeData,
  scrollRevealData,
} from "../../../utils/scrollMergeData";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMerge from "../../../components/globals/scroll-merge/ScrollMerge";
// import "./ScrollMerge.css";

gsap.registerPlugin(ScrollTrigger);

const RhomboidBridge = () => {

  
  const containerRefs = useRef([]);
  const revealerRefs = useRef([]);
  const btnRefs = useRef([]);






  useEffect(() => {
    containerRefs.current.forEach((el, i) => {
      const leftBox = el.querySelector(".left-box");
      const rightBox = el.querySelector(".right-box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 80%",
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

    revealerRefs.current.forEach((el, i) => {
      // gsap.set(el, { y: "-5%", opacity: 0 });

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: 'play none none reverse'
          
        },
      });

      t2.fromTo(el, {

        y: 100,
        opacity: 0,
       
      },{
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power3.easeInOut
      })
      

    });


    btnRefs.current.forEach((el, i) => {
      // gsap.set(el, { y: "-5%", opacity: 0 });

      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: 'play none none reverse'
          
        },
      });

      t3.fromTo(el, {

        y: 10,
        opacity: 0,
       
      },{
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power3.easeInOut
      })
      

    });



  }, []);

  return (
    <div className="bridge-con">
      <span className="page-intro-p">
        An advanced technological driven, all-in-one solution that enables
        exceptional care
      </span>
      <h1 className="page-intro-h1">Rhomboid Bridge</h1>

      <div className="hero-img-con">
        <img src={BridgeImg} alt="bridge_img" />
      </div>

      <span className="page-intro-p">
        <p>
          Rhomboid Bridge is Rhomboid health’s integrated EHR, practice
          management, and patient engagement solution that leverages advanced
          technology to transform your performance.
        </p>
      </span>

      <div className="page-btns">
        <ActiveBtn text="Request a demo" active={true} />
        <ActiveBtn text="See how Rhomboid Bridge works" active={false} />
      </div>

      <div className="page-section">
        <p>RHOMBOID BRIDGE</p>
        <h3>Electronic Health Records</h3>
        <span>
          Rhomboid Bridge is Rhomboid health’s integrated EHR, practice
          management, and patient engagement solution that leverages advanced
          technology to transform your performance.
        </span>

        <div className="scroll-merge-wrapper">
          {scrollMergeData.map((item, index) => (

            <ScrollMerge
              key={index}
              ref={(el) => (containerRefs.current[index] = el)}
              contents = {item}
              size = "small"
            />
            // <div
            //   className="merge-section"
            //   key={index}
            //   ref={(el) => (containerRefs.current[index] = el)}
            // >
            //   <div className="left-box">{item.left}</div>
            //   <div className="right-box">{item.right}</div>
            // </div>
          ))}
        </div>

        <div className="section-btn"
          ref={(el) => (btnRefs.current[0] = el)}

        >
          <ActiveBtn text="Explore our EHR" active={true} />
        </div>
      </div>

      <div className="page-section">
        <p>RHOMBOID BRIDGE</p>
        <h3>Patient Engagement</h3>
        <span>
          Support patients beyond the visit and boost your pay yield with our
          fully integrated Patient Portal and patient mobile app.
        </span>

        <div className="scroll-reveal-wrapper">
          {scrollRevealData.map((item, index) => (
            <div
              className="reveal-card"
              key={index}
              ref={(el) => (revealerRefs.current[index] = el)}
            >
              <div className="reveal-card-border"></div>
              <div className="reveal-card-content">
                <h2>{item.title}</h2>
                <p className="content-p">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="section-btn"
          ref={(el) => (btnRefs.current[1] = el)}

        >
          <ActiveBtn text="Explore Patient Engagement" active={true} />
        </div>
      </div>
    </div>
  );
};

export default RhomboidBridge;
