import React from 'react';
import './WorkPermit.css';
import { WorkPermit as IWorkPermit } from '../types';

const workPermitData: IWorkPermit = {
  visaStatus: "Valid",
  expiryDate: new Date("2027-05-24"), // Use Date object for correct typing!
  summary: "I'm currently on a Valid 🛂 work permit, which allows me to work in the UK! 🇬🇧 My visa is valid until 24/05/2027 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟",
  additionalInfo: "Eligible for renewal in May 2027."
};

const WorkPermit: React.FC = () => (
  <div className="work-permit-container">
    <div className="work-permit-card">
      <h2 className="work-permit-headline">🎓 Work Permit</h2>
      <p className="work-permit-summary">
        I'm currently on a <strong>{workPermitData.visaStatus}</strong> 🛂, which allows me to work in the UK! 🇬🇧 My visa is valid until <strong>{workPermitData.expiryDate.toLocaleDateString()}</strong> 📅, giving me the opportunity to build valuable experience and grow my career here. 🌟
      </p>
      <p className="additional-info">{workPermitData.additionalInfo}</p>
    </div>
  </div>
);

export default WorkPermit;
