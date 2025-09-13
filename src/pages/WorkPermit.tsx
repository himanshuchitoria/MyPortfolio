import React from 'react';
import './WorkPermit.css';
import { WorkPermit as IWorkPermit } from '../types';

const workPermitData: IWorkPermit = {
  visaStatus: "Valid",
  expiryDate: new Date("2027-05-24"), // Use Date object for correct typing!
  summary: "I am currently eligible to work in the India",
  additionalInfo: "Legal age to work "
};

const WorkPermit: React.FC = () => (
  <div className="work-permit-container">
    <div className="work-permit-card">
      <h2 className="work-permit-headline"> Work Permit</h2>
      <p className="work-permit-summary">
       Nationality : Indian <br />
       I am currently eligible to work in India.
      </p>
      <p className="additional-info">🇮🇳 </p>
    </div>
  </div>
);

export default WorkPermit;
