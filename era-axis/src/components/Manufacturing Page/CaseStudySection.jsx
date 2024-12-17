import {
  FaIndustry,
  FaChartLine,
  FaMoneyBillWave,
  FaBolt,
} from "react-icons/fa";
import PropTypes from "prop-types";

const StatCard = ({ icon: Icon, number, description }) => {
  return (
    <div className="stat-card">
      <Icon />
      <h2>{number}</h2>
      <p>{description}</p>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CaseStudySection = () => {
  const stats = [
    { icon: FaIndustry, number: "25%", description: "Emissions Reduction" },
    { icon: FaChartLine, number: "20%", description: "Efficiency Increase" },
    {
      icon: FaMoneyBillWave,
      number: "15%",
      description: "Maintenance Cost Savings",
    },
    { icon: FaBolt, number: "10%", description: "Energy Savings" },
  ];

  return (
    <section className="case-study py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Success Story: Global Automotive Manufacturer
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Learn how our Ecowatch system helped a leading global automotive
          manufacturer reduce emissions by 25% and improve production efficiency
          by 20%. Through the integration of IoT sensors and AI-driven
          analytics, the company was able to meet its sustainability goals and
          achieve significant time and cost savings.
        </p>
        <div className="stats-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
          >
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
