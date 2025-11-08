import { FaArrowRight, FaSnowflake } from "react-icons/fa6";
import BridgeFeatures from "../../../components/others/bridge-features/BridgeFeatures";
import LinkBtn from "../../../components/globals/buttons/link-btns/LinkBtn";
import ActiveBtn from "../../../components/globals/buttons/btns/ActiveBtn";

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              <span className="green">Better care,</span>
              <br />
              cheaper rates,
              <br />
              faster processes,
              <br />
              better outcomes
            </h1>

            <LinkBtn text="Get Started" cName="get-started-btn" />
          </div>

          <div className="hero-right">
            <p className="description">
              Rhomboid Health simplify healthcare through smart technology that
              lifts administrative burdens, drives organizational success, and
              empowers clinicians to focus on their patients. Because simpler
              care is healthier care.
            </p>

            <ul className="benefits">
              <li>
                <FaSnowflake className="icon" />
                Faster & More Accurate Access to Patient Records
              </li>
              <li>
                <FaSnowflake className="icon" />
                Increased Efficiency and Productivity
              </li>
              <li>
                <FaSnowflake className="icon" />
                Improved Access to Care
              </li>
              <li>
                <FaSnowflake className="icon" />
                Patient Empowerment and Education
              </li>
              <li>
                <FaSnowflake className="icon" />
                Increased Mobility
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BridgeFeatures />

      <section className="join-section">
        <div className="join-section-con">
          <h4>Join the other Nigeria Parctices using RhomboidBridge</h4>

          <div className="join-btn">
            <ActiveBtn text="Request a demo today" active={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
