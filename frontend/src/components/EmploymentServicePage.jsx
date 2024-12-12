import React from 'react';
import { Briefcase } from 'lucide-react';  // Import the Briefcase icon

// Employment Service Page
const EmploymentServicePage = () => {
  const services = [
      {
        title: "Workplace Rights",
        description: "This section provides comprehensive information on understanding your rights at work, including wage standards, working hours, breaks, and leave policies. It also covers protections against workplace discrimination based on race, gender, age, disability, or other factors, ensuring employees are aware of their legal entitlements and how to seek remedies if their rights are violated."
      },
      {
        title: "Contract Review",
        description: "Our contract review service offers expert guidance on employment contracts to ensure they are fair and compliant with relevant labor laws. We assist employees in understanding their rights and obligations, including terms related to compensation, working conditions, termination, and non-compete clauses, providing clarity and advice on potential contractual issues."
      },
      {
        title: "Dispute Resolution",
        description: "This service focuses on resolving workplace disputes efficiently and effectively. We provide assistance with mediation, arbitration, and representation in tribunals, helping employees address conflicts related to workplace issues such as unfair dismissal, wrongful termination, or contractual disagreements, aiming to achieve fair outcomes."
      }
  
  ];

  return (
    <div className="service-page">
      <header className="service-page-header">
        <h1>Employment Legal Support</h1>
        <p>Professional legal assistance for workplace issues</p>
      </header>
      <section className="service-details">
        <h2>Our Employment Services</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-icon">
                <Briefcase size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EmploymentServicePage;
