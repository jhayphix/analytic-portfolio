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

// ::::::::::::::::::::::::::::::::::::::::
// Contact details
// ::::::::::::::::::::::::::::::::::::::::
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

// ::::::::::::::::::::::::::::::::::::::::
// Contact Social icons
// ::::::::::::::::::::::::::::::::::::::::

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

// ::::::::::::::::::::::::::::::::::::::::
// About me text
// ::::::::::::::::::::::::::::::::::::::::

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

// ::::::::::::::::::::::::::::::::::::::::
// Skills
// ::::::::::::::::::::::::::::::::::::::::

export const skillsBadgeData = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Python", url: "https://img.shields.io/badge/Python-306998?style=for-the-badge&logo=python&logoColor=white" },
      { name: "PHP", url: "https://img.shields.io/badge/PHP-8892BF?style=for-the-badge&logo=php&logoColor=white" },
      { name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
      { name: "R", url: "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white" }
    ]
  },
  {
    title: "WEB TECHNOLOGIES, LIBRARIES & FRAMEWORKS",
    skills: [
      { name: "Laravel", url: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" },
      { name: "React", url: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
      { name: "Numpy", url: "https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
      { name: "Pandas", url: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
      { name: "CSS3", url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
      { name: "Bootstrap", url: "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" },
      { name: "HTML5", url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
      { name: "Firebase", url: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" }
    ]
  },
  {
    title: "OTHER TECHNOLOGIES & SKILLS",
    skills: [
      { name: "MySQL", url: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "Tableau", url: "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white" },
      { name: "Excel", url: "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" },
      { name: "Octave", url: "https://img.shields.io/badge/Octave-0790C0?style=for-the-badge&logo=octave&logoColor=white" },
      { name: "Matplotlib", url: "https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=matplotlib&logoColor=white" },
      { name: "Figma", url: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
      { name: "Canva", url: "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white" },
      { name: "GitHub Pages", url: "https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white" },
      { name: "LaTeX", url: "https://img.shields.io/badge/LaTeX-008080?style=for-the-badge&logo=latex&logoColor=white" }
    ]
  }
];

// ::::::::::::::::::::::::::::::::::::::::
// Not using
// ::::::::::::::::::::::::::::::::::::::::

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
