import ServicesCard from '@/components/ServicePageCmp/ServicesCard'
import React from 'react'
import CommonHeroSectionCard from '@/components/CommonHeroSectionCard'

import rubber_recycling_consultation from '@/assets/ServicesScreenImages/rubber_recycling_consultation.png';
import reclaim_rubber_manufacturing from '@/assets/ServicesScreenImages/reclaim_rubber_manufacturing.png';
import rubber_crumb_production from '@/assets/ServicesScreenImages/rubber_crumb_production.png';
import rubber_chip_manufacturing from '@/assets/ServicesScreenImages/rubber_chip_manufacturing.png';
import custom_rubber_compounding from '@/assets/ServicesScreenImages/custom_rubber_compounding.png';
import rubber_recycling_equipment_sales from '@/assets/ServicesScreenImages/rubber_recycling_equipment_sales.png';
import rubber_waste_management_solutions from '@/assets/ServicesScreenImages/rubber_waste_management_solutions.png';
import projects_advertising from '@/assets/ServicesScreenImages/projects_advertising.png';
import projects_installation from '@/assets/ServicesScreenImages/projects_installation.png';
import imagesrc from "@/assets/ServicesScreenImages/modern-equipped-computer-lab(1).jpg";

const page = () => {

  const services = [
    { icon: rubber_recycling_consultation, title: 'RUBBER RECYCLING CONSULTATION', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: reclaim_rubber_manufacturing, title: 'RECLAIM RUBBER MANUFACTURING', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: rubber_crumb_production, title: 'RUBBER CRUMB PRODUCTION', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: rubber_chip_manufacturing, title: 'RUBBER CHIP MANUFACTURING', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: custom_rubber_compounding, title: 'CUSTOM RUBBER COMPOUNDING', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: rubber_recycling_equipment_sales, title: 'RUBBER RECYCLING EQUIPMENT SALES', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: rubber_waste_management_solutions, title: 'RUBBER WASTE MANAGEMENT SOLUTIONS', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: projects_advertising, title: 'PROJECTS ADVERTISING', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
    { icon: projects_installation, title: 'PROJECTS INSTALLATION', description: 'Duis at suscipit massa. Etiam quis mollis arcu. Integer sit amet ex eros' },
  ];

  const title = "Services";
  const description = "Explore Expert Perspectives and Industry Trends in Rubber Recycling and Sustainable Practices"; 

  return (
    <>
      <CommonHeroSectionCard title={title} imageSrc={imagesrc} description={description} />
      <main className="flex justify-center items-center flex-col p-8">
        <div className="w-full mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServicesCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default page
