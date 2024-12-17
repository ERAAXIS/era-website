import {
  FaChartLine,
  FaMoneyBillWave,
  FaCheckCircle,
  FaLeaf,
} from "react-icons/fa";
import PropTypes from "prop-types";

const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="benefit-card">
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

BenefitCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: FaChartLine,
      title: "Increased Productivity",
      description:
        "Boost your productivity through advanced automation and streamlined processes.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost Savings",
      description:
        "Reduce operational costs with predictive maintenance and optimized resource management.",
    },
    {
      icon: FaCheckCircle,
      title: "Improved Quality",
      description:
        "Enhance product quality with precise control and data-driven decision making.",
    },
    {
      icon: FaLeaf,
      title: "Sustainability",
      description:
        "Achieve your sustainability goals and ensure compliance with environmental regulations.",
    },
  ];

  return (
    <section className="benefits py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Benefits of Partnering with ERA AXIS
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          By partnering with ERA AXIS, you gain access to cutting-edge
          technology and industry expertise. Our solutions support your growth
          with scalable systems tailored to your needs.
        </p>
        <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
