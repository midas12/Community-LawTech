import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OurLegalSupport = () => {
  return (
    <div className="services-page">
      {/* Title Section */}
      <section className="services-header">
        <h1>Explore Our Comprehensive Legal Services</h1>
        <p>
          Law Tech Firm is dedicated to providing accessible legal services to migrant and marginalized communities. 
          Our team of accredited community lawyers offers culturally and linguistically appropriate support across 
          various practice areas, including immigration, housing, and employment.
        </p>
      </section>

      {/* Service Cards */}
      <div className="services-cards">
        <div className="service-card">
          <img src="path/to/immigration-image.jpg" alt="Immigration Law Support" />
          <h3>Immigration Law Support</h3>
          <p>
            Our immigration law services are tailored to meet the unique needs of individuals from diverse backgrounds, 
            ensuring culturally sensitive and effective legal assistance.
          </p>
          <Link to="/services/immigration" className="btn btn-primary">Learn More</Link>
        </div>

        <div className="service-card">
          <img src="path/to/housing-image.jpg" alt="Housing Law Assistance" />
          <h3>Housing Law Assistance</h3>
          <p>
            We provide expert legal advice on housing issues, helping clients navigate complex legal processes with ease and confidence.
          </p>
          <Link to="/services/housing" className="btn btn-primary">Learn More</Link>
        </div>

        <div className="service-card">
          <img src="path/to/employment-image.jpg" alt="Employment Law Guidance" />
          <h3>Employment Law Guidance</h3>
          <p>
            Our employment law services focus on protecting the rights of workers, offering guidance and representation 
            in employment-related matters.
          </p>
          <Link to="/services/employment" className="btn btn-primary">Learn More</Link>
        </div>
      </div>

      {/* Expertise Section */}
      <section className="expertise-section">
        <h1>Explore Our Key Areas of Law Expertise</h1>
        <p>
          Law Tech Firm specializes in providing legal services tailored to the needs of migrant and marginalized 
          communities. Our areas of expertise include immigration, housing, and employment law. We ensure that our 
          clients receive culturally and linguistically appropriate support.
        </p>

        {/* Expertise Cards */}
        <div className="expertise-cards">
          <div className="expertise-card">
            <img src="path/to/expertise-immigration.jpg" alt="Comprehensive Immigration" />
            <h3>Comprehensive Immigration</h3>
          </div>

          <div className="expertise-card">
            <img src="path/to/expertise-housing.jpg" alt="Housing Law Assistance" />
            <h3>Expert Housing Law Assistance</h3>
          </div>

          <div className="expertise-card">
            <img src="path/to/expertise-employment.jpg" alt="Employment Law Guidance" />
            <h3>Dedicated Employment Law Guidance</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLegalSupport;
