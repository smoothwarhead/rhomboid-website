import React from "react";
import { GoDotFill } from "react-icons/go";

const features = [
  "Improve efficiency in administrative tasks like appointment scheduling and prescription refills.",
  "Enhance patient engagement.",
  "Provide a centralized platform for reviewing patient medical records and test results.",
  "Have quick, direct follow-ups with patients through secure messaging reducing phone calls and freeing up time for more direct care during the workday.",
];

const AccountIntro = () => {
  return (
    <div className="left-section">
      <p className="tagline">Access enables Care</p>

      <h1 className="title">
        Rhomboid Bridge <br /> for every home.
      </h1>

      <p className="subtitle">
        Rhomboid Bridge is built for patients and healthcare providers to manage
        their health information and connect with each other. Whether you're
        exploring the basics or delivering full care management, Rhomboid Bridge
        is essentially a personal gateway to your health record.
      </p>

      {/* Feature List */}
      <div className="account-features">
        <h4>With a Rhomboid Bridge account, you can:</h4>

        <div className="features">
          {features.map((text, index) => (
            <div className="feature-con" key={index}>
              <div className="feature-icon">
                <GoDotFill />
              </div>
              <p className="feature-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountIntro;
