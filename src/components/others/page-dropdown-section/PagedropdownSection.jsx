import { React, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

// const topTabs = [
//   {
//     id: "health",
//     label: "I'm interested in rhomboid health",
//     content: (
//       <p>
//         This section shows content for people interested in Rhomboid Health.
//         Replace this with your real CTA, descriptions, or product messaging.
//       </p>
//     ),
//   },
//   {
//     id: "customer",
//     label: "I'm a current customer",
//     content: (
//       <p>
//         This content is specifically for existing customers—help docs, portals,
//         and personalized onboarding can appear here.
//       </p>
//     ),
//   },
//   {
//     id: "patient",
//     label: "I'm a patient",
//     content: (
//       <p>
//         Patient-focused content goes here. Appointment FAQs, support links,
//         account details, etc.
//       </p>
//     ),
//   },
// ];

// const faqItems = [
//   {
//     title: "Can I schedule a meeting?",
//     content:
//       "Yes! You can schedule a meeting via our booking portal or by contacting support directly.",
//   },
//   {
//     title: "Where can I find product information?",
//     content:
//       "You can view full product specifications, guides, and videos on our product information page.",
//   },
//   {
//     title: "Where can I find pricing information?",
//     content:
//       "Pricing varies depending on your plan. Visit our pricing page or contact sales for custom quotes.",
//   },
//   {
//     title: "Do you service my specialty?",
//     content:
//       "We support a wide range of medical specialties. View supported specialties on our service overview page.",
//   },
// ];

export default function PagedropdownSection(props) {


  const { sectionTitle, sectionHeader,  data} = props;

  const [activeTab, setActiveTab] = useState("health");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentTab = data.tabs.find((t) => t.id === activeTab);

  return (
    <section className="page-dropdown-section">
      <h3>{sectionHeader}</h3>

      <h2>{sectionTitle}</h2>

      <div className="questions">
        <div className="faq">
          {/* Top Buttons */}
          <div className="faq__tabs">
            {data.tabs.map((tab) => (
              <div
                key={tab.id}
                className={`faq__tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div className="contents">
            <div className="contents-con">
              {/* Section Header */}
              <h5 className="faq__title">{`${currentTab.contentHeading}:`}</h5>

              {/* Dynamic Content Block */}
              {/* <div className="faq__content">{currentTab.content}</div> */}

              {/* FAQ List */}
              <div className="faq__list">
                {currentTab.items.map((item, index) => (
                  <div
                    key={index}
                    className={`faq__item ${
                      openIndex === index ? "faq__item--open" : ""
                    }`}
                  >
                    <button
                      className="faq__question"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="faq__icon">
                        {openIndex === index ? <FiMinus /> : <FiPlus />}
                      </span>
                      {item.title}
                    </button>

                    <div
                      className="faq__answer"
                      style={{
                        maxHeight: openIndex === index ? "200px" : "0px",
                      }}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
