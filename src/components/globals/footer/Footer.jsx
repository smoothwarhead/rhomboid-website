import { FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi2";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Help Section */}
      <section className="help-section">
        <h2>Let us help you</h2>
        <div className="help-cards">

          <div className="help-card help-card-1">
            {/* <div className="help-icon">💻</div> */}
            <FaDesktop />
            <h3>Explore our cutting edge solution</h3>
            <p>
              See how we combine the power of software, service, and our network
            </p>
            <button>See how Rhomboid Bridge works</button>
          </div>

          <div className="help-card help-card-2">
            {/* <div className="help-icon">📅</div> */}
            <HiOutlineCalendar />
            <h3>Get a personalized Rhomboid Bridge demo</h3>
            <p>Submit a request, and we’ll schedule a brief call.</p>
            <button>Schedule a demo today</button>
          </div>

        </div>
      </section>

      {/* Footer Links */}
      <section className="footer-links">
        <div className="footer-column brand">
          <h3>Rhomboid Health</h3>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Who we are</li>
            <li>Leadership</li>
            <li>Contact us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li>Rhomboid Bridge</li>
            <li>Electronic Health Record</li>
            <li>Patient Engagement</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Who We Serve</h4>
          <ul>
            <li>Startup Practices</li>
            <li>Small Medical Practices</li>
            <li>Medium to Large Medical Practices</li>
            <li>Enterprise Health Systems</li>
            <li>Women’s Health</li>
            <li>Orthopedics</li>
            <li>Behavioral Health &</li>
            <li>Labs & Imaging Centers</li>
            <li>Pharmacies</li>
            <li>View all specialties</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Customer support</li>
          </ul>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <FaSquareInstagram />
          <IoLogoFacebook />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </section>

    </footer>
  );
};

export default Footer;