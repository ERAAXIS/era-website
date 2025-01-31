import React from 'react';
import { Briefcase, Heart, Users, Brain, Star, Target } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
    <div className="p-3 bg-purple-50 rounded-lg inline-block mb-4">
      <Icon className="h-6 w-6 text-purple-600" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhyItMatters = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Career Readiness",
      description: "Gain practical experience and skills highly valued by employers in technology and innovation sectors."
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Develop self-confidence, presentation skills, and effective communication abilities."
    },
    {
      icon: Users,
      title: "Collaborative Skills",
      description: "Master teamwork through group projects and peer learning opportunities."
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Enhance problem-solving abilities through hands-on project experience."
    },
    {
      icon: Star,
      title: "Portfolio Building",
      description: "Create tangible projects that showcase your skills to future employers."
    },
    {
      icon: Target,
      title: "Academic Success",
      description: "Bridge theoretical knowledge with practical applications for better learning outcomes."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Why It <span className="text-purple-600">Matters</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our comprehensive approach ensures students develop technical expertise
            alongside essential soft skills, preparing them for both academic excellence
            and professional success in the real world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;