import React from 'react';
import ServicePage from '../components/ServicePage';
import { Globe } from 'lucide-react';  // Import the Globe icon

// Immigration Support Page
const ImmigrationSupportPage = () => {
    const services = [
      {
        title: "Visa Applications",
        description: "Assistance with various types of visa applications"
      },
      {
        title: "Citizenship",
        description: "Support with citizenship applications and naturalization"
      },
      {
        title: "Immigration Appeals",
        description: "Help with immigration appeals and judicial reviews"
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