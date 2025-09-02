import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

// Local, type-safe timeline data
const timeLineData: TimelineItem[] = [
  {
    name: "Tech Company Ltd.",
    timelineType: "work",
    title: "Frontend Developer",
    techStack: "React, TypeScript, Redux",
    summaryPoints: [
      "Built modern UI",
      "Optimized performance",
      "Collaborated with backend"
    ],
    dateRange: "Jan 2021 – Present"
  },
  {
    name: "State University",
    timelineType: "education",
    title: "B.Sc. Computer Science",
    techStack: "",
    summaryPoints: [
      "Majored in CS",
      "Graduated cum laude",
      "Led coding competitions"
    ],
    dateRange: "Aug 2017 – May 2021"
  },
  {
    name: "StartUp Inc.",
    timelineType: "work",
    title: "Software Engineer Intern",
    techStack: "Node.js, MongoDB, Docker",
    summaryPoints: [
      "Developed RESTful APIs",
      "Deployed with Docker",
      "Learned agile"
    ],
    dateRange: "May 2020 – Aug 2020"
  },
  // Add more entries as desired
];

const WorkExperience: React.FC = () => (
  <>
    <div className="timeline-container">
      <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
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
                : { background: 'rgb(240, 240, 240)', color: '#fff' }
              : { background: 'rgb(255, 224, 230)', color: '#fff' }
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
          {item.timelineType === "work" ? (
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </VerticalTimelineElement>
      ))}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  </>
);

export default WorkExperience;
