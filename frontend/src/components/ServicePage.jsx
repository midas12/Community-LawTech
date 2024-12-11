import React from 'react';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  return (
    <div className="service-page">
      <header className="service-page-header">
        <h1>Explore Our Legal Services</h1>
        <p>
          Our team of experienced lawyers provides guidance in immigration, housing, and employment law, ensuring culturally and linguistically appropriate support.
        </p>
      </header>

      <section className="service-list">
        <div className="service-item">
          <div className="immigration-box">
            <img 
              src="/assets/images/immigration.jpg" 
             
              className="service-image"
            />
          </div>
          {/* Link to Immigration Support Page */}
          <Link to="/immigration-support">
            <h3>Immigration Legal Assistance</h3>
          </Link>
          <p>
            Our immigration services help individuals navigate complex legal processes with ease. We offer personalized support to ensure your rights are protected and your needs are met.
          </p>
        </div>

        <div className="service-item">
          <div className="housing-box">
            <img 
              src="/assets/images/housing.jpg" 
             
              className="service-image"
            />
          </div>
          {/* Link to Housing Support Page */}
          <Link to="/housing-support">
            <h3>Housing Law Support</h3>
          </Link>
          <p>
            We provide expert advice on housing issues, ensuring tenants and landlords understand their rights and responsibilities. Our services aim to resolve disputes efficiently.
          </p>
        </div>

        <div className="service-item">
          <div className="employment-box">
            <img 
              src="/assets/images/employment.jpg" 
            
              className="service-image"
            />
          </div>
          {/* Link to Employment Support Page */}
          <Link to="/employment-support">
            <h3>Employment Law Guidance</h3>
          </Link>
          <p>
            Our employment law services cover a wide range of issues, from contract disputes to workplace discrimination. We are committed to protecting your employment rights.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
