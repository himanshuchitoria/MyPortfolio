import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          
          <div>
            <h3></h3>
            <p></p>
            <p className="date"></p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ Contact me on chitoriahimanshu@gmail.com 😊 </p>
          
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
