import React from 'react';
import { Zap, Users, Headphones, Award, Clock, Laptop } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-purple-50 rounded-lg">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Practical Skills",
      description: "Gain hands-on experience in electronics, programming, and cutting-edge technologies."
    },
    {
      icon: Users,
      title: "Open to All",
      description: "Start your learning journey without prerequisites or prior qualifications."
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Receive personalized guidance from experienced instructors and mentors."
    },
    {
      icon: Award,
      title: "Portfolio Building",
      description: "Complete real-world projects that showcase your skills to potential employers."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with both online and in-person options available."
    },
    {
      icon: Laptop,
      title: "Modern Curriculum",
      description: "Learn industry-relevant skills using the latest tools and technologies."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Why Choose <span className="text-purple-600">ERA AXIS</span> Education?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We deliver practical skills in electronics, programming, software design, 3D designs, and
            simulations. Build a strong portfolio and enhance your professional growth with hands-on
            projects and expert support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;