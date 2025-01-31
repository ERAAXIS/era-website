import React from 'react';
import { Leaf, Wind, Recycle, TreePine, Globe } from 'lucide-react';

const InitiativeCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="bg-green-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const StatCard = ({ value, label, description }) => (
  <div className="bg-green-50 p-6 rounded-xl text-center">
    <div className="text-3xl font-bold text-green-600 mb-2">{value}</div>
    <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Energy Efficiency",
      description: "Implementing smart energy management systems and renewable energy solutions in our facilities."
    },
    {
      icon: Wind,
      title: "Climate Education",
      description: "Providing comprehensive training programs on climate change adaptation and mitigation strategies."
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Implementing circular economy principles to minimize waste and maximize resource efficiency."
    },
    {
      icon: TreePine,
      title: "Community Projects",
      description: "Partnering with local organizations to promote environmental awareness and sustainability."
    },
    {
      icon: Globe,
      title: "Carbon Footprint",
      description: "Actively monitoring and reducing our carbon emissions through innovative technologies."
    },
    {
      icon: Globe,
      title: "Water Conservation",
      description: "Implementing water-saving technologies and promoting responsible water usage practices."
    }
  ];

  const stats = [
    {
      value: "75%",
      label: "Renewable Energy",
      description: "Of our total energy consumption comes from renewable sources"
    },
    {
      value: "50K",
      label: "Trees Planted",
      description: "Through our community reforestation initiatives"
    },
    {
      value: "-40%",
      label: "Carbon Reduction",
      description: "In our operational carbon footprint since 2020"
    },
    {
      value: "100%",
      label: "Waste Recycled",
      description: "Of recyclable materials are properly processed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Sustainability
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ERA AXIS, sustainability isn't just a buzzword—it's the foundation of our business. 
            We're committed to developing technologies that advance industrial capabilities while 
            protecting our planet for future generations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Environmental Leadership
          </h3>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-6">
              Our commitment to environmental stewardship goes beyond compliance. We actively 
              seek innovative ways to reduce our environmental impact while helping our clients 
              achieve their sustainability goals. Through continuous improvement and investment 
              in green technologies, we're working towards a more sustainable future.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">
                Download Sustainability Report
              </button>
              <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-200">
                Learn More About Our Impact
              </button>
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Our Green Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <InitiativeCard key={index} {...initiative} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-green-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We believe that sustainable development is a collective effort. Partner with us to create 
            innovative solutions that benefit both business and the environment.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;