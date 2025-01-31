import React from 'react';
import { Rocket, Clock, Check, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get matched with an expert mentor within 24 hours"
  },
  {
    icon: Check,
    title: "Expert Support",
    description: "Work with experienced professionals in your field"
  },
  {
    icon: Rocket,
    title: "Immediate Start",
    description: "Begin your project journey as soon as you're ready"
  }
];

const GetStarted = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-purple-50 via-white to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-purple-100 rounded-full opacity-20" />
        <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-purple-100 rounded-full opacity-20" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to receive expert help for your project? Submit your request
              below, and we'll guide you through the process from start to
              finish.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Submit Your Project Request
                </h3>
                <p className="text-gray-600 mb-6">
                  Tell us about your project and get matched with an expert mentor who can help you succeed.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Detailed project analysis",
                    "Personalized mentorship",
                    "Technical guidance",
                    "Regular progress tracking"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <button className="w-full group bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center">
                  Submit Project Request
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-center text-sm text-gray-600 mt-4">
                  Average response time: 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;