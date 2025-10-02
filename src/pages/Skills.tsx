import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython,
} from 'react-icons/fa';
import {
  SiTensorflow, SiKeras, SiOpenai, SiOpencv, SiTypescript,
  SiMysql, SiMongodb, SiSpringboot, SiHtml5, SiCss3,
} from 'react-icons/si';
import { Skill } from '../types';
import './Skills.css';

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

const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "skills.names.python",
    category: "skills.categories.programmingLanguages",
    description: "skills.descriptions.python",
    icon: "FaPython",
  },
  {
    name: "skills.names.javascript",
    category: "skills.categories.programmingLanguages",
    description: "skills.descriptions.javascript",
    icon: "FaReact",
  },
  {
    name: "skills.names.java",
    category: "skills.categories.programmingLanguages",
    description: "skills.descriptions.java",
    icon: "FaJava",
  },
  {
    name: "skills.names.cplusplus",
    category: "skills.categories.programmingLanguages",
    description: "skills.descriptions.cplusplus",
    icon: "FaJava",
  },
  {
    name: "skills.names.html5",
    category: "skills.categories.programmingLanguages",
    description: "skills.descriptions.html5",
    icon: "SiHtml5",
  },
  {
    name: "skills.names.css3",
    category: "skills.categories.programmingLanguages",
    description: "skills.descriptions.css3",
    icon: "SiCss3",
  },
  // Frameworks & Libraries
  {
    name: "skills.names.reactjs",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.reactjs",
    icon: "FaReact",
  },
  {
    name: "skills.names.nodejs",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.nodejs",
    icon: "FaNodeJs",
  },
  {
    name: "skills.names.expressjs",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.expressjs",
    icon: "FaNodeJs",
  },
  {
    name: "skills.names.tensorflow",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.tensorflow",
    icon: "SiTensorflow",
  },
  {
    name: "skills.names.keras",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.keras",
    icon: "SiTensorflow",
  },
  {
    name: "skills.names.opencv",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.opencv",
    icon: "SiOpencv",
  },
  {
    name: "skills.names.springboot",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.springboot",
    icon: "SiSpringboot",
  },
  {
    name: "skills.names.typescript",
    category: "skills.categories.frameworksLibraries",
    description: "skills.descriptions.typescript",
    icon: "SiTypescript",
  },
  // Cloud & DevOps
  {
    name: "skills.names.aws",
    category: "skills.categories.cloudDevOps",
    description: "skills.descriptions.aws",
    icon: "FaAws",
  },
  {
    name: "skills.names.docker",
    category: "skills.categories.cloudDevOps",
    description: "skills.descriptions.docker",
    icon: "FaDocker",
  },
  // Databases
  {
    name: "skills.names.sqlmysql",
    category: "skills.categories.databases",
    description: "skills.descriptions.sqlmysql",
    icon: "SiMysql",
  },
  {
    name: "skills.names.mongodb",
    category: "skills.categories.databases",
    description: "skills.descriptions.mongodb",
    icon: "SiMongodb",
  },
];

const groupSkillsByCategory = (skills: Skill[]) => {
  const acc: Record<string, Skill[]> = {};
  skills.forEach(skill => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
  });
  return acc;
};

const Skills: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillsByCategory = groupSkillsByCategory(skillsData);

  return (
    <div className="skills-container">
      {Object.entries(skillsByCategory).map(([categoryKey, skills], idx) => (
        <div key={idx} className="skill-category">
          <h3 className="category-title">{t(categoryKey)}</h3>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const skillName = t(skill.name);
              return (
                <div key={i} className="skill-card">
                  <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                  <h3 className="skill-name">
                    {skillName.split('').map((letter, index) => (
                      <span key={index} className="letter" style={{ animationDelay: `${index * 0.05}s` }}>
                        {letter}
                      </span>
                    ))}
                  </h3>
                  <p className="skill-description">{t(skill.description)}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <br />
      <p>{t('skills.openToLearn')}</p>
    </div>
  );
};

export default Skills;
