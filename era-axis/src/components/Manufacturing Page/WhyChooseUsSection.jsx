import React from 'react';
import { FaUserTie, FaLightbulb, FaLeaf, FaChartLine, FaHandshake } from 'react-icons/fa';

const ReasonCard = ({ icon: Icon, title, description }) => (
  <div className="reason-card bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <Icon className="text-4xl text-primary mb-4" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: FaUserTie,
      title: "Deep Industry Expertise",
      description: "Our team has extensive experience in the manufacturing sector, ensuring you receive expert guidance."
    },
    {
      icon: FaLightbulb,
      title: "Innovative Solutions",
      description: "We continuously develop and implement cutting-edge technologies to keep you ahead of the competition."
    },
    {
      icon: FaLeaf,
      title: "Sustainability Focus",
      description: "Our solutions are designed to help you achieve your sustainability goals and reduce environmental impact."
    },
    {
      icon: FaChartLine,
      title: "Proven Track Record",
      description: "We have a history of successful implementations and satisfied clients across various industries."
    },
    {
      icon: FaHandshake,
      title: "Comprehensive Support",
      description: "Our team provides ongoing support and training to ensure you get the most out of our solutions."
    }
  ];

  return (
    <section className="why-choose-us py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose ERA AXIS?</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          At ERA AXIS, we have deep expertise in the manufacturing sector. Our solutions are tailored to your specific needs, ensuring that you receive the most efficient and innovative technologies available.
        </p>
        <div className="reasons-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

