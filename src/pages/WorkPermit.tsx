import React from 'react';
import { useTranslation } from 'react-i18next';
import './WorkPermit.css';
import { WorkPermit as IWorkPermit } from '../types';

const workPermitData: IWorkPermit = {
  visaStatus: "workPermit.visaStatus",
  expiryDate: new Date("2027-05-24"),
  summary: "workPermit.summary",
  additionalInfo: "workPermit.additionalInfo"
};

const WorkPermit: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">{t('workPermit.title')}</h2>
        <p className="work-permit-summary">
          {t('workPermit.nationality')} : {t('workPermit.nationalityValue')} <br />
          {t(workPermitData.summary)}
        </p>
        <p className="additional-info">
          🇮🇳 {t(workPermitData.additionalInfo)}
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
