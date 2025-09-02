import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { Project } from '../types';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

// Tech badge icons mapping
const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  "Cognito": <FaAws />,
  "Lambda": <FaAws />,
  "ECS": <FaAws />,
  "Jenkins": <FaJenkins />,
  "Docker": <FaDocker />,
  "GraphQL": <FaDatabase />,
  "CI/CD": <FaGitlab />,
  "GitLab": <FaGitlab />,
  "GitHub": <FaGithub />,
  "Heroku": <GrDeploy />,
  "Netlify": <GrDeploy />,
  "Firebase": <SiFirebase />,
  "GCP": <FaGoogle />,
  "Azure": <FaMicrosoft />,
  "Kubernetes": <GrKubernetes />,
  "Terraform": <SiTerraform />,
  "ArgoCD": <SiArgo />,
  "Java": <FaJava />,
  "Spring Boot": <FaJava />,
  "Python": <FaPython />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  "Hibernate": <FaJava />,
  "Maven": <FaJava />,
  "Gradle": <FaJava />,
  "JUnit": <FaJava />,
  "Mockito": <FaJava />,
  "Jest": <FaReact />,
  "React": <FaReact />,
  "Angular": <FaAngular />,
  "Vue.js": <FaVuejs />,
  "Next.js": <FaReact />,
  "Gatsby": <FaReact />,
  "Nuxt.js": <FaVuejs />,
  "Redux": <FaReact />,
  "Vuex": <FaVuejs />,
  "Tailwind CSS": <SiCss3 />,
  "Bootstrap": <SiCss3 />,
  "JQuery": <SiJquery />,
};

// Local static sample projects data
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio site built with React, TypeScript, and styled-components.",
    image: { url: "/images/portfolio.png" }, // store your image in public/images
    techUsed: "ReactJS, TypeScript, CSS3, GitHub"
  },
  {
    title: "Chat App",
    description: "Real-time chat application using Node.js, Express, and Socket.io on AWS.",
    image: { url: "/images/chatapp.png" }, // store your image in public/images
    techUsed: "NodeJS, Express.js, AWS, Socket.io"
  },
  {
    title: "Data Dashboard",
    description: "Interactive data dashboard with live charts and filters built using React, Redux, and MongoDB.",
    image: { url: "/images/dashboard.png" }, // store your image in public/images
    techUsed: "ReactJS, Redux, MongoDB, GitLab"
  },
  // Add your own projects here!
];

const Projects: React.FC = () => (
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
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
