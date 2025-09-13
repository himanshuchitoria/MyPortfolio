import React,{useEffect} from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGoogle, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiFirebase, SiChartdotjs, SiOpenai, SiFastapi } from 'react-icons/si';
import { Project } from '../types';
import { GrDeploy } from "react-icons/gr";
import portfolio from '../images/portfolio.png';
import amazon from '../images/amazon.png';

// Extend icon mapping for your DNAs
const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "MongoDB": <SiMongodb />,
  "Material UI": <SiMaterialdesign />,
  "HTML": <SiHtml5 />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "Python": <FaPython />,
  "Java": <FaJava />,
  "Docker": <FaDocker />,
  "Socket.io": <FaNodeJs />,
  "OpenCV": <SiOpenai />,
  "TensorFlow": <SiOpenai />,
  "Keras": <SiOpenai />,
  "Chart.js": <SiChartdotjs />,
  "Recharts": <SiChartdotjs />,
  "OpenAI": <SiOpenai />,
  "JWT": <FaReact />,
  "FastAPI": <SiFastapi />,
  "GitHub": <FaGithub />,
  "Firebase": <SiFirebase />,
  "AWS-ECS": <FaAws />,
  "GoogleCloud": <FaGoogle />,
  "JavaScript": <FaReact />,
  "Express.js": <FaNodeJs />,
  "Redux": <FaReact />,
};

// Your key projects
const projects: Project[] = [
  {
    title: "DevSync – Real-Time Developer Collaboration Tool",
    description: "Live coding platform using MERN stack, WebSockets and CRDT for collaborative editing, secure JWT-based auth, session recording, and multi-user sync.",
    image: { url: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" }, // Replace with your own screenshot
    techUsed: "ReactJS, NodeJS, MongoDB, Socket.io, JWT, Docker"
  },
  {
    title: "FinSave – AI-Based Personal Finance Tracker",
    description: "AI-powered finance app with OCR for bills, GPT-based budget analysis, multi-account sync, and real-time Chart.js dashboards.",
    image: { url: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" }, // Replace with your own screenshot
    techUsed: "ReactJS, NodeJS, MongoDB, OpenAI, Chart.js, Python"
  },
  {
    title: "TrendHire – Resume Optimizer & Job Matcher",
    description: "GenAI-powered resume optimizer and job matcher with PDF parsing, spaCy NLP, and ATS keyword analytics.",
    image: { url: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" }, // Replace with your own screenshot
    techUsed: "ReactJS, NodeJS, Python, OpenAI, MongoDB"
  },
  {
    title: "Pothole Detection using Python & CNN",
    description: "Pothole detection system using OpenCV and custom-trained CNN, real-time video stream, 90% recall and 88% precision.",
    image: { url: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    techUsed: "Python, OpenCV, TensorFlow, Keras"
  },
  {
    title: "Disease Prediction Using ML",
    description: "Predictive disease model (KNN, 95% accuracy) on 4500+ patient records, advanced preprocessing, robust feature engineering.",
    image: { url: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    techUsed: "Python, Scikit-learn"
  },
  {
    title: "Amazon Shopping Website Redesign",
    description: "Revamped Amazon shopping site in HTML, CSS and JS with modern UI/UX, advanced responsive features and 30% improved load times.",
    image: { url: amazon },
    techUsed: "HTML, CSS3, JavaScript"
  },
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio built with React, TypeScript, and responsive CSS.",
    image: { url: portfolio },
    techUsed: "ReactJS, TypeScript, CSS3, GitHub"
  },
  // Link your GitHub if desired
  {
    title: "All Projects & Open Source Contributions",
    description: "See more projects, data science notebooks, and open-source work on my GitHub.",
    image: { url: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" }, // GitHub logo
    techUsed: "GitHub",
  },
];


const Projects: React.FC = () => {

useEffect(()=> {
  window.scrollTo(0,0);
},[]);


  return (

  <div className="projects-container">
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
        >
          <img src={project.image.url} alt={project.title} className="project-image" />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              {project.techUsed.split(', ').map((tech, i) => (
                <span key={i} className="tech-badge">
                  {techIcons[tech] || "🔧"} {tech}
                </span>
              ))}
            </div>
            {/* Show GitHub link badge for the last card */}
            {project.title === "All Projects & Open Source Contributions" && (
              <a
                href="https://github.com/himanshuchitoria"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                style={{ display: "block", marginTop: 12, color: "#e50914" }}
              >Visit my GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Projects;
