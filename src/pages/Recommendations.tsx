import React from 'react';
import { useTranslation } from 'react-i18next';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div>
            <h3>{t('recommendations.title')}</h3>
            <p>{t('recommendations.subtitle')}</p>
            <p className="date">{t('recommendations.date')}</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>{t('recommendations.contactMessage')}</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
