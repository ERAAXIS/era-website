import React from 'react';
import { Settings, Lightbulb, Target, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Hardware and software solutions tailored for industries and homes, including repairs, installations, and expert troubleshooting."
  },
  {
    icon: Lightbulb,
    title: "Education & Training",
    description: "Hands-on training programs in electronics, programming, and emerging technologies to build practical tech skills."
  },
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Dedicated to improving efficiency and simplifying processes through innovative solutions and educational resources."
  }
];

const CompanyOverview = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgb(226 232 240 / 0.5) 1px, transparent 0)",
        backgroundSize: "48px 48px"
      }} />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            About ERA AXIS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering technological advancement through innovative solutions and comprehensive education.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl" />
              <img
                src="/images/2.jpg"
                alt="ERA AXIS Team"
                className="relative rounded-xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                <div className="text-sm font-semibold text-gray-900">Trusted by</div>
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Clients Worldwide</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Features Grid */}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group flex gap-6 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300"
              >
                Learn more about our services
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;