// Navigation Bar section
const navBar = {
  show: true,
};

// Main Body section
const mainBody = {
  gradientColors: "#222, #333, #222, #444",
  firstName: "Johnroe Paulo",
  middleName: "",
  lastName: "Cañamaque",
  message: "Building websites, teaching others, and making an impact.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jpcanamaque",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/papau09",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jpcanamaque/",
    },
  ],
};

// About Me section

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile-pic.jpg"),
  imageSize: 375,
  message:
    "My name is Johnroe Paulo Cañamaque. I am a BS Information Technology graduate from Cavite State University with 8 years of experience in both Manufacturing and IT industry. I have acquired valuable knowledge and skills through my work experience, which has helped me to become a proficient and experienced professional in my field. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  resume: require("../editable-stuff/resume.pdf"),
};

// Projects section

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jpcanamaque",
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: Math.floor(Math.random() * 100) },
    { name: "SQL", value: Math.floor(Math.random() * 100) },
    { name: "Data Structures", value: Math.floor(Math.random() * 100) },
    { name: "PHP", value: Math.floor(Math.random() * 100) },
    { name: "JavaScript", value: Math.floor(Math.random() * 100) },
    { name: "React", value: Math.floor(Math.random() * 100) },
    { name: "HTML/CSS", value: Math.floor(Math.random() * 100) },
    { name: "C#", value: Math.floor(Math.random() * 100) },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: Math.floor(Math.random() * 100) },
    { name: "Collaboration", value: Math.floor(Math.random() * 100) },
    { name: "Positivity", value: Math.floor(Math.random() * 100) },
    { name: "Adaptability", value: Math.floor(Math.random() * 100) },
    { name: "Problem Solving", value: Math.floor(Math.random() * 100) },
    { name: "Empathy", value: Math.floor(Math.random() * 100) },
    { name: "Organization", value: Math.floor(Math.random() * 100) },
    { name: "Creativity", value: Math.floor(Math.random() * 100) },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jpcanamaque@gmail.com",
};


// Work Experiences
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Web Application Developer',
      companylogo: require('../assets/img/websan_logo.png'),
      date: 'April 2022 – Present',
    },
    {
      role: 'Full-stack Web Developer Instructor',
      companylogo: require('../assets/img/kodego_logo.png'),
      date: 'December 2022 – Present',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
