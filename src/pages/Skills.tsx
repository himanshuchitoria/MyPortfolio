import React from 'react';
import './Skills.css';

// Icons
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiOpenai, SiOpencv, SiTypescript, SiMysql, SiMongodb, SiSpringboot, SiHtml5, SiCss3 } from 'react-icons/si';
import { Skill } from '../types';

// Map icon name to actual icon component
const iconMap: { [key: string]: JSX.Element } = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  SiTensorflow: <SiTensorflow />,
  SiKeras: <SiKeras />,
  SiOpenai: <SiOpenai />,
  SiOpencv: <SiOpencv />,
  SiTypescript: <SiTypescript />,
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  SiSpringboot: <SiSpringboot />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

// Local static skills data, based on your CV
const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "Python",
    category: "Programming Languages",
    description: "Proficient in scripting, automation, and data science.",
    icon: "FaPython"
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    description: "Robust web development and dynamic interactions.",
    icon: "FaReact"
  },
  {
    name: "Java",
    category: "Programming Languages",
    description: "Enterprise applications, Spring Boot, and backend APIs.",
    icon: "FaJava"
  },
  {
    name: "C++",
    category: "Programming Languages",
    description: "Efficient algorithms and competitive programming.",
    icon: "FaJava"
  },
  {
    name: "HTML5",
    category: "Programming Languages",
    description: "Modern semantic markup for web.",
    icon: "SiHtml5"
  },
  {
    name: "CSS3",
    category: "Programming Languages",
    description: "Responsive, styled UI/UX.",
    icon: "SiCss3"
  },

  // Frameworks & Libraries
  {
    name: "React.js",
    category: "Frameworks & Libraries",
    description: "Building interactive and scalable UIs.",
    icon: "FaReact"
  },
  {
    name: "Node.js",
    category: "Frameworks & Libraries",
    description: "Fast, scalable backend JavaScript.",
    icon: "FaNodeJs"
  },
  {
    name: "Express.js",
    category: "Frameworks & Libraries",
    description: "RESTful APIs with Node.js.",
    icon: "FaNodeJs"
  },
  {
    name: "TensorFlow",
    category: "Frameworks & Libraries",
    description: "Machine learning and deep learning models.",
    icon: "SiTensorflow"
  },
   {
    name: "Keras",
    category: "Frameworks & Libraries",
    description: "Machine learning and deep learning models.",
    icon: "SiTensorflow"
  },
  {
    name: "OpenCV",
    category: "Frameworks & Libraries",
    description: "Computer vision and image processing.",
    icon: "SiOpencv"
  },
  {
    name: "Spring Boot",
    category: "Frameworks & Libraries",
    description: "Robust Java backend microservices.",
    icon: "SiSpringboot"
  },
  {
    name: "TypeScript",
    category: "Frameworks & Libraries",
    description: "Typed JavaScript for safer coding.",
    icon: "SiTypescript"
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "Cloud & DevOps",
    description: "Building cloud-native apps and infra.",
    icon: "FaAws"
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    description: "Containerization for scalable deployments.",
    icon: "FaDocker"
  },

  // Databases
  {
    name: "SQL and MySQL",
    category: "Databases",
    description: "Handling relational databases and queries.",
    icon: "SiMysql"
  },
  {
    name: "MongoDB",
    category: "Databases",
    description: "Document store and NoSQL techniques.",
    icon: "SiMongodb"
  },
];

// Group skills by category
const skillsByCategory = skillsData.reduce((acc: Record<string, Skill[]>, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills: React.FC = () => (
  <div className="skills-container">
    {Object.keys(skillsByCategory).map((category, index) => (
      <div key={index} className="skill-category">
        <h3 className="category-title">{category}</h3>
        <div className="skills-grid">
          {skillsByCategory[category].map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
              <h3 className="skill-name">
                {skill.name.split('').map((letter, i) => (
                  <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                    {letter}
                  </span>
                ))}
              </h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
    <br />
    <p> *Open to learn any tech stack which will help me in my work.</p>
  </div>
);

export default Skills;
