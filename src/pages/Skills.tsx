import React from 'react';
import './Skills.css';

// Icons
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

// Map icon name to actual icon component
const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
};

// Local static skills data (edit as per your profile!)
const skillsData: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Building interactive UIs with React.",
    icon: "FaReact"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Typed JS for scalable apps.",
    icon: "SiTypescript"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Performant server-side JavaScript.",
    icon: "FaNodeJs"
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerize and deploy applications.",
    icon: "FaDocker"
  },
  {
    name: "Java",
    category: "Backend",
    description: "Enterprise solutions with Java & Spring Boot.",
    icon: "FaJava"
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Building on Amazon Web Services.",
    icon: "FaAws"
  },
  // Add/edit more skills here as desired!
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
  </div>
);

export default Skills;
