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
          {/* Link to Immigration Support Page */}
        <Link to="/immigration">
          <div className="immigration-box">
            <img 
              src="/assets/images/immigration.jpg" 
             
              className="service-image"
            />
          </div>
            <h3>Immigration Legal Assistance</h3>
          <p>
            Our immigration services help individuals navigate complex legal processes with ease. We offer personalized support to ensure your rights are protected and your needs are met.
          </p>
          </Link>
        </div>

        <div className="service-item">
          {/* Link to Housing Support Page */}
          <Link to="/housing">
          <div className="housing-box">
            <img 
              src="/assets/images/housing.jpg" 
             
              className="service-image"
            />
          </div>
            <h3>Housing Law Support</h3>
          <p>
            We provide expert advice on housing issues, ensuring tenants and landlords understand their rights and responsibilities. Our services aim to resolve disputes efficiently.
          </p>
          </Link>
        </div>

        <div className="service-item">
          {/* Link to Employment Support Page */}
          <Link to="/employment">
          <div className="employment-box">
            <img 
              src="/assets/images/employment.jpg" 
            
              className="service-image"
            />
          </div>
            <h3>Employment Law Guidance</h3>
          <p>
            Our employment law services cover a wide range of issues, from contract disputes to workplace discrimination. We are committed to protecting your employment rights.
          </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
