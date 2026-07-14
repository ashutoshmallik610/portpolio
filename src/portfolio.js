/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  title: "Hello, I'm",
username: "Ashutosh Mallik",
  subTitle: emoji(
    "A passionate Java Developer 🚀 with a strong foundation in Core Java, Object-Oriented Programming, JDBC, Collections Framework, SQL, Exception Handling and Multithreading. I enjoy building real-world Java applications and continuously learning backend technologies."
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ashutoshmallik610",
  linkedin: "https://www.linkedin.com/in/ashutoshmallik",
  gmail: "ashutoshmallik546@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
  "JAVA DEVELOPER PASSIONATE ABOUT BUILDING CLEAN, SCALABLE AND OBJECT-ORIENTED APPLICATIONS",
  skills: [
  emoji("⚡ Develop Java console and desktop applications using Object-Oriented Programming."),
  emoji("⚡ Build database-driven applications using JDBC and MySQL."),
  emoji("⚡ Strong understanding of Collections Framework, Exception Handling and Multithreading."),
  emoji("⚡ Currently learning Spring Boot and modern backend development.")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
 
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "VS Code",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "IntelliJ IDEA",
    fontAwesomeClassname: "fas fa-laptop-code"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gandhi Institute for Technological Advancement (GITA), Bhubaneswar",
      logo: require("./assets/images/gitaLogo.png"),
      subHeader: "Master of Computer Applications (MCA)",
      duration: "September 2024 - July 2026",
      desc: "Focused on Java, Object-Oriented Programming, Database Management Systems, Software Engineering, and Full-Stack Development.",
      
    },
    {
      schoolName: "Brundaban +3 Science Residential College",
      logo: require("./assets/images/brundabanLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "May 2021 - April 2024",
      desc: "Graduated with 81.80%, building a strong foundation in computer science and programming.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience:[
{
Stack:"Core Java",
progressPercentage:"90%"
},
{
Stack:"JDBC & MySQL",
progressPercentage:"85%"
},
{
Stack:"Object-Oriented Programming",
progressPercentage:"90%"
},
{
Stack:"Collections Framework",
progressPercentage:"80%"
},
{
Stack:"GitHub",
progressPercentage:"75%"
}
],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Java Specialist Intern",
      company: "Cognifyz Technologies",
      companylogo: require("./assets/images/cognifyzlogo.png"),
      date: "2024",
      desc:
        "Developed Java applications using Object-Oriented Programming principles and gained practical experience in building console-based applications.",
      descBullets: [
        "Developed Java applications using inheritance, polymorphism, abstraction and encapsulation.",
        "Built multiple Java console projects to strengthen Core Java concepts.",
        "Improved problem-solving and coding practices through practical assignments."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Java applications I have developed",

  projects: [
    {
      image: require("./assets/images/bank.png"),
      projectName: "Bank Management System",
      projectDesc:
        "A Java console application that manages Savings and Current Accounts with deposit, withdrawal, balance enquiry, account validation and custom exception handling using Object-Oriented Programming and JDBC.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ashutoshmallik610/BankManagementSystem"
        }
      ]
    },

    {
      image: require("./assets/images/railway.png"),
      projectName: "Railway Reservation System",
      projectDesc:
        "A Java-based railway reservation system that supports ticket booking, cancellation, seat validation and passenger management using inheritance, exception handling and file handling.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ashutoshmallik610/Railway-Management-System"
        }
      ]
    },

    {
      image: require("./assets/images/rapido.png"),
      projectName: "Rapido Ride Booking System",
      projectDesc:
        "A console-based ride booking application supporting Bike, Auto and Cab booking with fare calculation, runtime polymorphism, inheritance and multithreading.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/ashutoshmallik610/RapidoBook"
        }
      ]
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "Professional certifications and learning achievements that strengthen my technical skills.",

  achievementsCards: [
    {
      title: "Java Programming Certification",
      subtitle:
        "Successfully completed Java Programming Certification from Quality Coders (MSME & ISO 9001 Certified). Gained practical knowledge of Core Java and Object-Oriented Programming.",
      image: require("./assets/images/javaimage.png"),
      imageAlt: "Java Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    },

    {
      title: "HTML & CSS - Coursera",
      subtitle:
        "Completed the Coursera course on building responsive single-page websites using HTML and CSS.",
      image: require("./assets/images/htmlcsssinglepage.png"),
      imageAlt: "HTML CSS Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    },

    {
      title: "Introduction to Generative AI",
      subtitle:
        "Completed Coursera certification covering Generative AI concepts and applications.",
      image: require("./assets/images/genAI.png"),
      imageAlt: "Generative AI Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  display: false
};

// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm actively looking for Java Developer opportunities. Feel free to connect with me.",
  number: "8260822558",
  email_address: "ashutoshmallik546@gmail.com"
};

// Twitter Section

const twitterDetails = {
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};


