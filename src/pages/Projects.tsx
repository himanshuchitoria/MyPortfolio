import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGoogle, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiFirebase, SiChartdotjs, SiOpenai, SiFastapi } from 'react-icons/si';
import { GrDeploy } from "react-icons/gr";
import './Projects.css';
import portfolio from '../images/portfolio.png';
import amazon from '../images/amazon.png';

const techIcons: {[key: string]: JSX.Element} = {
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

const projectsData = [
  {
    titleKey: "projects.devSync.title",
    descKey: "projects.devSync.description",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    techUsed: "ReactJS, NodeJS, MongoDB, Socket.io, JWT, Docker"
  },
  {
    titleKey: "projects.finSave.title",
    descKey: "projects.finSave.description",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    techUsed: "ReactJS, NodeJS, MongoDB, OpenAI, Chart.js, Python"
  },
  {
    titleKey: "projects.trendHire.title",
    descKey: "projects.trendHire.description",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    techUsed: "ReactJS, NodeJS, Python, OpenAI, MongoDB"
  },
  {
    titleKey: "projects.potholeDetection.title",
    descKey: "projects.potholeDetection.description",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    techUsed: "Python, OpenCV, TensorFlow, Keras"
  },
  {
    titleKey: "projects.diseasePrediction.title",
    descKey: "projects.diseasePrediction.description",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    techUsed: "Python, Scikit-learn"
  },
  {
    titleKey: "projects.amazonRedesign.title",
    descKey: "projects.amazonRedesign.description",
    imageUrl: amazon,
    techUsed: "HTML, CSS3, JavaScript"
  },
  {
    titleKey: "projects.portfolioWebsite.title",
    descKey: "projects.portfolioWebsite.description",
    imageUrl: portfolio,
    techUsed: "ReactJS, TypeScript, CSS3, GitHub"
  },
  {
    titleKey: "projects.allProjects.title",
    descKey: "projects.allProjects.description",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.TDICeZlc2sMQCiZT4w4FugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    techUsed: "GitHub"
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={project.imageUrl}
              alt={t(project.titleKey)}
              className="project-image"
            />
            <div className="project-details">
              <h3>{t(project.titleKey)}</h3>
              <p>{t(project.descKey)}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              {project.titleKey === "projects.allProjects.title" && (
                <a
                  href="https://github.com/himanshuchitoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  style={{ display: "block", marginTop: 12, color: "#e50914" }}
                >
                  {t("projects.visitGithub")}
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
