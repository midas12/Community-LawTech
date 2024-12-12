import React from 'react';
import ServicePage from '../components/ServicePage';
import { Globe } from 'lucide-react';  // Import the Globe icon

// Immigration Support Page
const ImmigrationSupportPage = () => {
    const services = [
      {
        title: "Visa Applications",
        description: "Assistance with various types of visa applications, including work visas, student visas, family visas, and tourist visas. We provide guidance on document preparation, eligibility requirements, and the application process to ensure a smooth and efficient visa application experience."
      },
      {
        title: "Citizenship",
        description: "Support with citizenship applications and naturalization processes. This includes helping clients understand the requirements, gathering necessary documentation, and navigating the application procedure to secure citizenship or permanent residency status."
      },
      {
        title: "Immigration Appeals",
        description: "Help with immigration appeals and judicial reviews for denied visa applications or citizenship claims. We offer legal expertise to challenge decisions, represent clients in appeals, and ensure they receive fair consideration for their immigration requests."
      }      
    ];

    return (
      <ServicePage 
        title="Immigration Legal Support" 
        description="Expert guidance on immigration matters"
        services={services}
        icon={Globe}  // Pass the Globe icon
      />
    );
};

export default ImmigrationSupportPage;
