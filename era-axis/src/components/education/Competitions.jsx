import React from 'react';
import { Trophy, Presentation, Users, Target, Globe, Medal } from 'lucide-react';

const CompetitionCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
    <div className="p-3 bg-purple-50 rounded-lg inline-block mb-4">
      <Icon className="h-6 w-6 text-purple-600" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Competitions = () => {
  const features = [
    {
      icon: Trophy,
      title: "Confidence Building",
      description: "Develop self-assurance through competitive challenges and public demonstrations of skills."
    },
    {
      icon: Presentation,
      title: "Presentation Skills",
      description: "Master the art of articulating complex ideas clearly and persuasively to diverse audiences."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Learn effective collaboration strategies while working in diverse team environments."
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Set and accomplish challenging objectives through structured competition preparation."
    },
    {
      icon: Globe,
      title: "International Exposure",
      description: "Participate in worldwide competitions and gain global perspective."
    },
    {
      icon: Medal,
      title: "Recognition",
      description: "Earn accolades and build a portfolio of competitive achievements."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            <span className="text-purple-600">Competitions</span> and Skills Development
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience growth through local and international competitions. Our students
            develop essential skills while showcasing their innovations on global platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <CompetitionCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;