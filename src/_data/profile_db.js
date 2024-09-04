import {
  FaWhatsapp,
  // FaTwitter,
  FaGithub,
  // FaFacebook,
  FaLinkedin,
  FaUser,
  FaIdBadge,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

// Contact details
const margin_end = "me-3";
export const contactDetailsData = {
  name: {
    type: "Name",
    text: "Samuel K. Ablordeppey",
    icon: <FaUser className={margin_end} />,
  },
  profile: {
    type: "Profile",
    text: "Data Analyst",
    icon: <FaIdBadge className={margin_end} />,
  },
  location: {
    type: "Location",
    text: "Kumasi - Ghana",
    icon: <FaMapMarkerAlt className={margin_end} />,
  },
  email: {
    type: "Email",
    text: "jhayphix05@gmail.com",
    icon: <FaEnvelope className={margin_end} />,
  },
  phone: {
    type: "Phone",
    text: "+233 248 359 918",
    icon: <FaPhone className={margin_end} />,
  },
};

export const contactSocialIconsData = [
  {
    name: "whatsapp",
    title: "Whatsapp",
    url: "https://wa.me/233248359918?text=Hello Jhay, I need your service!!",
    target: "_blank",
    style: "text_whatsapp",
    icon: <FaWhatsapp className="social_icon" />,
  },
  {
    name: "github",
    title: "Github",
    url: "https://github.com/jhayphix",
    target: "_blank",
    style: "text_secondary_1",
    icon: <FaGithub className="social_icon" />,
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/samuel-k-ablordeppey-8b98bb251/",
    target: "_blank",
    style: "text_linkedin",
    icon: <FaLinkedin className="social_icon" />,
  },
  {
    name: "mail",
    title: "Mail",
    url: "mailto:jhayphix05@gmail.com?subject=Contact%20Request&body=Hello%20Jhay,%0A%0AI%20am%20reaching%20out%20to%20you%20because%20I%20am%20interested%20in%20your%20services.%0A%0AThank%20you!",
    target: "_blank",
    style: "text_mail",
    icon: <FaEnvelope className="social_icon" />,
  },
];

export const aboutMeContentData = [
  {
    id: 1,
    text: "I am a skilled data analyst with a passion for transforming raw data into meaningful insights.",
  },
  {
    id: 2,
    text: "Over the course of three years, I've honed my expertise in essential tools like Excel, Tableau, SQL, and Python. ",
  },
  {
    id: 3,
    text: "Specifically mastering data cleaning, exploration, and visualization. ",
  },
  {
    id: 4,
    text: "My commitment to delivering impactful results through data analysis is what drives me, and I look forward to sharing my insights with you through my portfolio.",
  },
];

export const skillsRatingsData = [
  {
    id: 1,
    name: "Excel",
    rate: "91",
  },
  {
    id: 2,
    name: "Tableau",
    rate: "95",
  },
  {
    id: 3,
    name: "SQL",
    rate: "85",
  },
  {
    id: 4,
    name: "Python",
    rate: "80",
  },
  {
    id: 5,
    name: "Pandas",
    rate: "87",
  },
  {
    id: 6,
    name: "Data cleaning",
    rate: "93",
  },
  {
    id: 7,
    name: "Data Exploration",
    rate: "91",
  },
  {
    id: 8,
    name: "Data Visualization",
    rate: "95",
  },
];
