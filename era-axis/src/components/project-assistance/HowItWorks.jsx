import React from 'react';
import { ClipboardList, Users, MessageSquare, Trophy } from 'lucide-react';

const steps = [
  {
    title: "Submit Your Project Request",
    description: "Provide us with details about your project, including the area of focus (electronics, programming, 3D designs, etc.), and we'll match you with an expert who can assist you.",
    icon: ClipboardList,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Get Matched with a Mentor",
    description: "Once we receive your request, we'll assign you a mentor who specializes in your project area. They will work with you to provide guidance and technical support.",
    icon: Users,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Work with Your Mentor",
    description: "Collaborate with your mentor through one-on-one sessions (in-person or online) to develop and complete your project.",
    icon: MessageSquare,
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Complete and Submit Your Project",
    description: "With our expert guidance, you will confidently complete your project and showcase it as part of your academic or professional portfolio.",
    icon: Trophy,
    color: "from-teal-400 to-teal-600"
  }
];

const StepCard = ({ step, index, isLast }) => {
  const { title, description, icon: Icon, color } = step;
  
  return (
    <div className="relative flex items-start group">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200">
          <div className="absolute w-full h-0 bg-gradient-to-b group-hover:h-full transition-all duration-500 ease-out" 
               style={{ backgroundColor: '#818cf8' }} />
        </div>
      )}
      
      {/* Number and Icon Container */}
      <div className="flex-shrink-0 mr-6">
        <div className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${color} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold text-gray-700">{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pb-12">
        <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Your journey from project concept to successful completion
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;