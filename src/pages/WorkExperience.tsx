import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

import idemiaLogo from '../images/idemia.png';
import valu5Logo from '../images/valu5healthcare.webp';
import hitachiLogo from '../images/hitachi.jpg';
import vitLogo from '../images/vitbhopal.webp';
import iitmLogo from '../images/iitm.webp';
import aryaLogo from '../images/arya.webp';

const timeLineData: TimelineItem[] = [
  {
    name: "timeline.idemia.name",
    timelineType: "work",
    title: "timeline.idemia.title",
    techStack: "timeline.idemia.techStack",
    summaryPoints: ["timeline.idemia.summaryPoints.0", "timeline.idemia.summaryPoints.1"],
    dateRange: "2025 – Present",
    logo: idemiaLogo
  },
  {
    name: "timeline.valu5.name",
    timelineType: "work",
    title: "timeline.valu5.title",
    techStack: "timeline.valu5.techStack",
    summaryPoints: ["timeline.valu5.summaryPoints.0", "timeline.valu5.summaryPoints.1"],
    dateRange: "Feb 2025 – March 2025",
    logo: valu5Logo
  },
  {
    name: "timeline.hitachi.name",
    timelineType: "work",
    title: "timeline.hitachi.title",
    techStack: "timeline.hitachi.techStack",
    summaryPoints: ["timeline.hitachi.summaryPoints.0", "timeline.hitachi.summaryPoints.1"],
    dateRange: "Dec 2024 – Jan 2025",
    logo: hitachiLogo
  },
  {
    name: "timeline.vit.name",
    timelineType: "education",
    title: "timeline.vit.title",
    techStack: "",
    summaryPoints: ["timeline.vit.summaryPoints.0", "timeline.vit.summaryPoints.1"],
    dateRange: "2022 – 2026",
    logo: vitLogo
  },
  {
    name: "timeline.iitm.name",
    timelineType: "education",
    title: "timeline.iitm.title",
    techStack: "",
    summaryPoints: ["timeline.iitm.summaryPoints.0"],
    dateRange: "2023 – 2026",
    logo: iitmLogo
  },
  {
    name: "timeline.arya12.name",
    timelineType: "education",
    title: "timeline.arya12.title",
    techStack: "",
    summaryPoints: ["timeline.arya12.summaryPoints.0", "timeline.arya12.summaryPoints.1"],
    dateRange: "2022",
    logo: aryaLogo
  },
  {
    name: "timeline.arya10.name",
    timelineType: "education",
    title: "timeline.arya10.title",
    techStack: "",
    summaryPoints: ["timeline.arya10.summaryPoints.0", "timeline.arya10.summaryPoints.1"],
    dateRange: "2020",
    logo: aryaLogo
  }
];

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">{t('timeline.title')}</h2>
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
                  alt={t(item.name) + " logo"}
                  className="timeline-logo-img"
                />
              )}
              <div style={{ textAlign: 'left' }}>
                <h3 className="vertical-timeline-element-title">{t(item.title)}</h3>
                <h4 className="vertical-timeline-element-subtitle">{t(item.name)}</h4>
                {item.techStack && (
                  <p className="vertical-timeline-element-tech">🔧 {t(item.techStack)}</p>
                )}
                <ul>
                  {item.summaryPoints.map((point, idx) => (
                    <li key={idx}>{t(point)}</li>
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
