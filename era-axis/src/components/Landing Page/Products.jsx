import React from 'react';
import PropTypes from 'prop-types';
import { Wrench, Settings, Code, Cpu } from 'lucide-react';

const services = {
  hardware: [
    {
      image: "/images/3.jpg",
      title: "Personalised Builds",
      description: "Providing hardware devices tailored to your specific requirements, designed to meet unique needs and desired features.",
      icon: Cpu,
      stats: ["100+ Custom Builds", "98% Client Satisfaction"]
    },
    {
      image: "/images/4.jpg",
      title: "TechCare Solutions",
      description: "Providing troubleshooting, repairs, installations, and consultations for home appliances, devices, and business systems, tailored for both individuals and companies.",
      icon: Wrench,
      stats: ["24/7 Support", "500+ Active Clients"]
    }
  ],
  software: [
    {
      image: "/images/5.jpg",
      title: "Tailored Software Solutions",
      description: "Providing software uniquely designed and adapted to your business or personal needs, ensuring optimal performance and seamless integration.",
      icon: Code,
      stats: ["200+ Projects Delivered", "99% Uptime"]
    },
    {
      image: "/images/6.jpg",
      title: "Comprehensive Software Care",
      description: "Providing expert consultation, troubleshooting, updates, and maintenance services to ensure your software performs optimally for both industrial systems and home applications.",
      icon: Settings,
      stats: ["Continuous Support", "Regular Updates"]
    }
  ]
};

const ProductItem = ({ image, title, description, icon: Icon, stats }) => (
  <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {/* Image Section */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Icon Badge */}
      <div className="absolute top-4 left-4">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6">
      <h4 className="text-xl font-bold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Stats */}
      <div className="flex flex-wrap gap-2">
        {stats.map((stat, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
          >
            {stat}
          </span>
        ))}
      </div>
    </div>

    {/* Hover Line */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </div>
);

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ServiceSection = ({ title, items }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <div className="flex-grow h-px bg-gradient-to-r from-purple-200 to-transparent" />
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <ProductItem key={index} {...item} />
      ))}
    </div>
  </div>
);

ServiceSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    stats: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

const Products = () => {
  return (
    <section id="products" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-50 to-transparent" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive hardware and software solutions tailored to your needs
          </p>
        </div>

        {/* Service Sections */}
        <ServiceSection title="Hardware Services" items={services.hardware} />
        <ServiceSection title="Software Services" items={services.software} />

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started with Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;