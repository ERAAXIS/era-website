import {
  FaRobot,
  FaLeaf,
  FaTools,
  FaCubes,
  FaTruck,
  FaBolt,
} from "react-icons/fa";
import PropTypes from "prop-types";

const SolutionCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="solution-card">
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

SolutionCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const SolutionsSection = () => {
  const solutions = [
    {
      icon: FaRobot,
      title: "Industrial Automation Systems",
      description:
        "Automate repetitive tasks and optimize production with our industrial automation systems. From robotic integration to IoT-enabled smart manufacturing and AI-powered data analytics, we ensure your operations run smoothly with fewer errors and reduced labor costs.",
    },
    {
      icon: FaLeaf,
      title: "Emission Management Solutions",
      description:
        "Ensure environmental compliance with our Ecowatch Emission Monitoring system. Gain real-time insights into your emissions data and streamline sustainability reporting, helping you stay ahead of regulatory requirements while achieving your environmental goals.",
    },
    {
      icon: FaTools,
      title: "Predictive Maintenance",
      description:
        "Prevent costly downtime and extend the lifespan of your machinery with our predictive maintenance solutions. By utilizing IoT sensors and AI-driven analytics, we detect issues early and schedule maintenance at the most efficient times.",
    },
    {
      icon: FaCubes,
      title: "CAD Design and Simulation",
      description:
        "Develop high-quality products with our advanced CAD design tools and virtual simulation platforms. Test and validate designs digitally to minimize the need for physical prototypes and reduce product development time.",
    },
    {
      icon: FaTruck,
      title: "Supply Chain Optimization",
      description:
        "Enhance your supply chain with our optimization solutions. Get real-time visibility into logistics, automate inventory management, and reduce delivery delays with advanced scheduling and tracking systems.",
    },
    {
      icon: FaBolt,
      title: "Energy Management Systems",
      description:
        "Reduce energy consumption and lower your utility bills with our smart energy management systems. Track energy usage across facilities and integrate renewable energy sources to make your operations more sustainable.",
    },
  ];

  return (
    <section
      id="solutions"
      className="solutions py-20 bg-solutions-pattern bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Our Comprehensive Solutions
        </h2>
        <div className="solutions-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
