import React from 'react';
import PropTypes from 'prop-types';
import { Factory, Monitor, Wrench, ArrowRight } from 'lucide-react';

const industries = [
  {
    image: "/images/7.jpg",
    title: "Manufacturing Solutions",
    description: "Providing custom-built systems and equipment to optimize industrial manufacturing processes for maximum efficiency.",
    link: "manufacturing",
    icon: Factory,
    stats: {
      projects: "150+",
      efficiency: "35%",
      label: "Efficiency Increase"
    }
  },
  {
    image: "/images/8.jpg",
    title: "Software Solutions",
    description: "Providing customized software solutions to boost automation, data management, and process control in industrial settings.",
    link: "software-solutions",
    icon: Monitor,
    stats: {
      projects: "200+",
      efficiency: "45%",
      label: "Process Automation"
    }
  },
  {
    image: "/images/9.jfif",
    title: "Maintenance & Support",
    description: "Offering expert repairs, installations, and troubleshooting to ensure seamless operation of industrial systems and equipment.",
    link: "industrial",
    icon: Wrench,
    stats: {
      projects: "300+",
      efficiency: "99%",
      label: "Uptime Achieved"
    }
  }
];

const IndustryItem = ({ image, title, description, link, icon: Icon, stats }) => (
  <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    {/* Image Section */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      
      {/* Icon Badge */}
      <div className="absolute top-4 right-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Stats Section */}
      <div className="flex items-center justify-between mb-6 p-4 bg-purple-50 rounded-lg">
        <div>
          <div className="text-2xl font-bold text-purple-600">{stats.projects}</div>
          <div className="text-sm text-gray-600">Projects Completed</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-600">{stats.efficiency}</div>
          <div className="text-sm text-gray-600">{stats.label}</div>
        </div>
      </div>

      {/* CTA Link */}
      <a
        href={link}
        className="group inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300"
      >
        Learn More 
        <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>

    {/* Bottom Progress Line */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </div>
);

IndustryItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  stats: PropTypes.shape({
    projects: PropTypes.string.isRequired,
    efficiency: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
};

const IndustrySolutions = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-50/50 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Advanced software and hardware solutions designed for industrial
            efficiency and reliability.
          </p>
        </div>

        {/* Industry Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryItem key={index} {...industry} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Discuss Your Industrial Needs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;