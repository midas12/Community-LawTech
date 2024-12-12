import React from 'react';
import { Home } from 'lucide-react';  // Import the Home icon
import "./HousingSupportPage.css";

// Housing Support Page
const HousingSupportPage = () => {
  const services = [
    {
      title: "Tenancy Rights",
      description: "Understanding your rights as a tenant and dealing with landlord disputes. Learn how to navigate rental agreements, ensure proper maintenance of your rented property, and address common issues like rent increases, deposits, and eviction notices. Discover effective ways to handle disputes with landlords, seek legal support, and protect yourself from unfair practices. This guide empowers tenants with the knowledge they need to foster a fair and stress-free renting experience."
    },
    {
      title: "Eviction Support",
      description: "Legal assistance  for tenants facing eviction, including guidance on understanding eviction notices, filing responses, and navigating court proceedings. Our support also covers negotiating with landlords, exploring tenant rights, and accessing emergency housing resources to ensure stability during challenging times."
    },
    {
      title: "Housing Benefits",
      description: "Assistance with housing benefit claims, eligibility checks, and appeals. Our team provides guidance on understanding housing benefit policies and helps navigate the application process to ensure you receive the financial support you are entitled to."
    }
  ];

  return (
    <div className="service-page">
      <header className="service-page-header">
        <h1>Housing Legal Support</h1>
        <p>Get expert legal help with housing-related issues</p>
      </header>
       {/* New Image Section */}
       <section className="image-section">
        <img
          src="https://rsnonline.org.uk/images/article%20images/landscape%20for%20article/housing_market_landscape.jpg" // Replace with your image path
          alt="Housing Support"
          className="image-section-img"
        />
      </section>
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
