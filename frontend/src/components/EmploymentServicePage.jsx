import React from 'react';
import { Briefcase } from 'lucide-react';  // Import the Briefcase icon

// Employment Service Page
const EmploymentServicePage = () => {
  const services = [
    {
      title: "Workplace Rights",
      description: "Understanding your rights at work and dealing with discrimination"
    },
    {
      title: "Contract Review",
      description: "Review and advice on employment contracts"
    },
    {
      title: "Dispute Resolution",
      description: "Help with workplace disputes and tribunals"
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