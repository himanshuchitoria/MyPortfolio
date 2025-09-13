import React, {useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

// Logo imports (put these images in src/images/)
import idemiaLogo from '../images/idemia.png';
import valu5Logo from '../images/valu5healthcare.webp';
import hitachiLogo from '../images/hitachi.jpg';
import vitLogo from '../images/vitbhopal.webp';
import iitmLogo from '../images/iitm.webp';
import aryaLogo from '../images/arya.webp';

const timeLineData: TimelineItem[] = [
  
  {
    name: "IDEMIA",
    timelineType: "work",
    title: "Intern – Facial Recognition/Face Comparison",
    techStack: "Python, OpenCV, Machine Learning",
    summaryPoints: [
      "Working with facial recognition and comparison algorithms.",
      "Building computer vision systems for security."
    ],
    dateRange: "2025 – Present",
    logo: idemiaLogo
  },
  {
    name: "ValU5Healthcare Ltd (Medimag)",
    timelineType: "work",
    title: "SDE Intern – Blockchain-based Healthcare DB",
    techStack: "Node.js, MongoDB, Blockchain",
    summaryPoints: [
      "Implemented blockchain-based medical data storage.",
      "Optimized secure API endpoints for fast data retrieval."
    ],
    dateRange: "Feb 2025 – March 2025",
    logo: valu5Logo
  },
  {
    name: "Hitachi Systems Pvt Ltd",
    timelineType: "work",
    title: "Intern – AWS Cloud",
    techStack: "AWS, DevOps, Cloud Architecture",
    summaryPoints: [
      "Managed AWS resources for business applications.",
      "Automated deployments and optimized infra."
    ],
    dateRange: "Dec 2024 – Jan 2025",
    logo: hitachiLogo
  },
  {
    name: "Vellore Institute of Technology, Bhopal",
    timelineType: "education",
    title: "B.Tech, Computer Science & Engineering",
    techStack: "",
    summaryPoints: [
      "CGPA: ",
      "2022 – 2026 (Expected)"
    ],
    dateRange: "2022 – 2026",
    logo: vitLogo
  },
  {
    name: "IIT Madras",
    timelineType: "education",
    title: "B.Sc. Data Science (Part Time)",
    techStack: "",
    summaryPoints: [
      "2023 – 2026 (Expected)"
    ],
    dateRange: "2023 – 2026",
    logo: iitmLogo
  },
  {
    name: "Arya Sr. Sec. School, Charkhi Dadri",
    timelineType: "education",
    title: "12th Standard",
    techStack: "",
    summaryPoints: [
      "Percentage: 90.4%",
      "2022"
    ],
    dateRange: "2022",
    logo: aryaLogo
  },
  {
    name: "Arya Sr. Sec. School, Charkhi Dadri",
    timelineType: "education",
    title: "10th Standard",
    techStack: "",
    summaryPoints: [
      "Percentage: 89.6%",
      "2020"
    ],
    dateRange: "2020",
    logo: aryaLogo
  }
];

const WorkExperience: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
  <>
    <div className="timeline-container">
      <h2 className="timeline-title">Work Experience & Education Timeline</h2>
    </div>
    <VerticalTimeline>
      {timeLineData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.timelineType}`}
          contentStyle={
            item.timelineType === "work"
              ? index === 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(240, 240, 240)', color: '#141313ff' }
              : { background: 'rgb(255, 224, 230)', color: '#1b1919ff' }
          }
          contentArrowStyle={
            item.timelineType === "work"
              ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
              : { borderRight: '7px solid rgb(255, 224, 230)' }
          }
          date={item.dateRange}
          iconStyle={
            item.timelineType === "work"
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : { background: 'rgb(255, 160, 200)', color: '#fff' }
          }
          icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
        >
          <div className="timeline-content-row">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.name + " logo"}
                className="timeline-logo-img"
              />
            )}
            <div style={{ textAlign: 'left' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              {item.techStack && (
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              )}
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  </>
  );
};

export default WorkExperience;
