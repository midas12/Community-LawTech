import React from 'react';

const Mission = () => {
  return (
    <div className="mission-page">
      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-image">
            <img
              src="path/to/mission-image.jpg"
              alt="Law Tech Community Event"
            />
          </div>
          <div className="mission-text">
            <h1>Our Mission & Vision</h1>
            <p>
              At Law Tech Firm, we strive to bridge the gap in legal services for marginalized
              communities. Our mission is to ensure that everyone has access to high-quality legal
              support, regardless of their background or circumstances. We believe in empowering
              individuals through accessible legal resources.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="stat">
          <h2>1000 clients served</h2>
          <p>
            Since our inception in 2023, we have dedicated ourselves to serving over 1,000 clients
            from diverse backgrounds, ensuring they receive the legal support they deserve.
          </p>
        </div>

        <div className="stat">
          <h2>50 lawyers connected</h2>
          <p>
            Our innovative platform has successfully connected 50 accredited community lawyers with
            individuals seeking legal assistance, fostering a network of support.
          </p>
        </div>

        <div className="stat">
          <h2>200 community events</h2>
          <p>
            We have organized 200 community events aimed at raising awareness about legal rights and
            resources available to marginalized groups.
          </p>
        </div>

        <div className="stat">
          <h2>500 donations received</h2>
          <p>
            Thanks to the generosity of our supporters, we have received 500 donations that directly
            contribute to our mission of providing free legal services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;
