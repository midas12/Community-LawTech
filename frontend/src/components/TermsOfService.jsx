import React from 'react';
import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <div className="container">
        <h1>Terms of Service</h1>
        <p>Effective Date: [Insert Date]</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to [Your Website Name]! By using our website, you agree to comply with and be bound by the following terms of service. Please review these terms carefully. If you do not agree to these terms, you should not use this site.
          </p>
        </section>

        <section>
          <h2>2. Changes to Terms</h2>
          <p>
            We may update these terms of service from time to time. We will notify you of any changes by posting the new terms on this page. You are advised to review these terms periodically for any changes.
          </p>
        </section>

        <section>
          <h2>3. Use of the Site</h2>
          <p>
            You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our site.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            The content on this site, including text, graphics, images, and logos, is the property of [Your Website Name] or its content suppliers and is protected by copyright laws. You may not use any content without our express written permission.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, [Your Website Name] shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use or inability to use the site, including but not limited to reliance by a user on any information obtained from the site, or that result from mistakes, omissions, interruptions, deletion of files or emails, errors, defects, viruses, delays in operation or transmission, or any failure of performance, whether or not resulting from acts of God, communications failure, theft, destruction or unauthorized access to our records, programs, or services.
          </p>
        </section>

        <section>
          <h2>6. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at [Your Contact Information].
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
