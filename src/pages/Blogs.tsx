import React from 'react';
import { FaUsers, FaPenNib, FaUserSecret } from 'react-icons/fa';
import './Blogs.css';

const blogs = [
  {
    title: "Lead Design Team",
    platform: "Data Science Club, VIT Bhopal",
    
    icon: <FaUsers />,
    date: "2024 - 2025",
    link: "#",
    description: "Led design/branding initiatives and managed creative teams for club events and campaigns.",
  },
  {
    title: "Member Editorial Team",
    platform: "VIT Bhopal",
    icon: <FaPenNib />,
    link: "#",
    date: "2023 - 2025",
    description: "Focused on ui/ux design and content creation for newsletters and blogs.",
  },
  {
    title: "Cybersecurity Bootcamp",
    platform: "Sadik Academy",
    icon: <FaUserSecret />,
    date: "2024",
    link: "#",
    description: "Completed hands-on ethical hacking and digital forensics training.",
  },
];

const Blogs: React.FC = () => (
  <div className="blogs-container">
    <h2 className="blogs-title">Extracurricular Activities</h2>
    <p className="blogs-intro">
      Beyond the classroom: leadership, creativity, and technical curiosity.
    </p>
    <div className="blogs-grid">
      {blogs.map((blog, idx) => (
        <a
          href={blog.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-card"
          tabIndex={0}
          style={{ '--delay': `${idx * 0.13}s` } as React.CSSProperties}
        >
          <div className="blog-icon">{blog.icon}</div>
          <div className="blog-info">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-description">{blog.description}</div>
            <div className="blog-description">{blog.date}</div>
            <div className="blog-platform">{blog.platform}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Blogs;
