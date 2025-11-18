import EHR from "../pages/corporate/home/Ehr.png";
import PRACTICE from "../pages/corporate/home/desktop.png";
import PATIENT from "../pages/corporate/home/phones.png";
import CUSTOMER from "../pages/corporate/home/d_img.jpg";

export const features = [
  {
    title: "EHR",
    description: "Personalized documentation and more complete records",
    button: "Explore our EHR",
    img: EHR,
  },
  // {
  //   title: "Practice Management",
  //   description: "Collect what you're owed faster and with less work",
  //   button: "Explore Practice Management",
  //   img: PRACTICE,
  // },
  {
    title: "Patient Engagement",
    description: "Stay connected with patients beyond the encounter",
    button: "Explore Patient Engagement",
    img: PATIENT,
  },
  {
    title: "Customer Support",
    description: "Training, resources, and support to drive your success",
    button: "Explore Customer Support",
    img: CUSTOMER,
  },
];

export const featuresReveal = [
  {
    for: "EHR",
    btnText: "Explore our EHR",
    title: "Personalized documentation and more complete records",
    text: "",
  },
  {
    for: "PRACTICE MANAGEMENT",
    btnText: "Explore Practice Management",
    title: "Collect what you're owed faster and with less work",
    text: "",
  },
  {
    for: "PATIENT ENGAGEMENT",
    btnText: "Explore Patient Engagement",
    title: "Stay connected with patients beyond the encounter",
    text: "",
  },
  {
    for: "CUSTOMER SUPPORT",
    btnText: "Explore Customer Support",
    title: "Training, resources, and support to drive your success",
    text: "",
  },
];

export const contactData = [
  {
    title: "Sales",
    description:
      "We'll help you find the right products and pricing for your organization.",
    button: "Connect with Sales",
    cName: "green",
    to: "",
  },

  {
    title: "Customer support",
    description: "",
    button: "Contact support",
    cName: "blue",
    to: "",
  },
  {
    title: "Patient Resources",
    description:
      "Find helpful links to bill pay, find your patient portal, or download our patient app.",
    button: "View patient resources",
    cName: "red",
    to: "",
  },
];

export const contactDropdownData = {
  tabs: [
    {
      id: "health",
      label: "I'm interested in rhomboid health",
      items: [
        {
          title: "Can I schedule a meeting?",
          content:
            "Absolutely. Give us a call at 08034231256, or schedule a meeting with this online form.",
        },
        {
          title: "Where can I find product information?",
          content:
            "Please feel free to browse our solutions and services listed on the homepage of athenahealth.com—we’d also love to walk you through the services that best address your organization’s needs. Schedule a meeting or give us a call at 08034231256 for a more customized approach to maximizing your clinical and financial performance.",
        },
        {
          title: "Where can I find pricing information?",
          content:
            "We price individually, because the cost is based on a percent of your collections. Every organization has unique goals, so we tailor our approach to meet them. Schedule a meeting or call us at 08034231256 so we can learn your specific needs before offering a customized quote.",
        },
        {
          title: "Do you service my specialty?",
          content:
            "Probably! We service multiple specialties, so call 08034231256 or schedule a meeting to see if we might be a good fit.",
        },
      ],
      contentHeading: "You might be wondering",
      note: "",
    },
    {
      id: "customer",
      label: "I'm a current customer",
      items: [
        {
          title: "I forgot my rhomboidBridge password. Can you help?",
          content:
            "You can reset your rhomboidBridge password here at any time.",
        },
        {
          title: "I’d like to connect with rhomboid health. How can I contact you?",
          content:
            "You can create a case or call under the Support menu in rhomboidBridge, or access our success community here—you’ll be able to choose a help category to find answers to your inquiries. You’ll need to login to rhomboidBridge to connect.",
        },
        {
          title: "I’m having trouble with rhomboidBridge. Is the system down?",
          content:
            "Thankfully, our downtimes are infrequent, The site updates in real-time to display any rhomboid bridge alerts for our various services.",
        },
        
      ],
      contentHeading: "You might be wondering",
      note: "",
    },
    {
      id: "patient",
      label: "I'm a patient",
      items: [
        {
          title: "How can I find my patient portal?",
          content:
            "You’ll need to contact your medical provider’s office directly for the correct web address of your patient portal. They can also provide you with instructions on how to register and log in if you need them. If you have additional patient and portal related questions, please visit our patient resources page.",
        },
        
      ],
      contentHeading: "You might be wondering",
      note: "",
    },
  ],
};
