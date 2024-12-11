import React from 'react';
import { Home } from 'lucide-react';  // Import the Home icon

// Housing Support Page
const HousingSupportPage = () => {
  const services = [
    {
      title: "Tenancy Rights",
      description: "Understanding your rights as a tenant and dealing with landlord disputes"
    },
    {
      title: "Eviction Support",
      description: "Legal assistance with eviction notices and proceedings"
    },
    {
      title: "Housing Benefits",
      description: "Help with housing benefit claims and appeals"
    }
  ];

  return (
    <div className="service-page">
      <header className="service-page-header">
        <h1>Housing Legal Support</h1>
        <p>Get expert legal help with housing-related issues</p>
      </header>
      <section className="service-details">
        <h2>Our Housing Services</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HousingSupportPage;
