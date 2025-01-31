import React from 'react';
import { Lightbulb, Code, Wrench, PuzzleIcon, Briefcase } from 'lucide-react';

const helpItems = [
  {
    title: "Concept Development",
    description: "Struggling with project ideas? We help you brainstorm and refine your project concept to ensure it aligns with your academic goals and technical capabilities.",
    icon: Lightbulb
  },
  {
    title: "Technical Guidance",
    description: "Our mentors provide step-by-step technical guidance, ensuring you have the support needed for complex tasks such as coding, circuit design, 3D modeling, or system integration.",
    icon: Code
  },
  {
    title: "Hands-On Support",
    description: "Get hands-on support as you work through the practical aspects of your project, ensuring that you have the confidence and skills to successfully complete it.",
    icon: Wrench
  },
  {
    title: "Problem Solving",
    description: "Stuck on a specific issue? We can help troubleshoot your project, identify challenges, and provide solutions to keep you on track.",
    icon: PuzzleIcon
  },
  {
    title: "Portfolio Building",
    description: "Complete your project successfully and build a portfolio that demonstrates your technical skills and creativity to future employers or academic institutions.",
    icon: Briefcase
  }
];

const HelpCard = ({ title, description, icon: Icon, index }) => {
  return (
    <div 
      className="group relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="absolute -top-4 left-6 bg-indigo-600 p-3 rounded-lg shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-bold mb-3 text-indigo-900 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
    </div>
  );
};

const HowWeCanHelp = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-indigo-900">
            How We Can Help
          </h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive support system is designed to guide you through every aspect of your project journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {helpItems.map((item, index) => (
            <HelpCard
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;