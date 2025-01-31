import React from 'react';
import { Cpu, Box, Code, FlaskConical } from 'lucide-react';

const projectTypes = [
  {
    title: "Electronics and Arduino Programming",
    description: "Build interactive electronic projects with custom programming and hardware integration",
    icon: Cpu,
    color: "bg-blue-500",
    projects: "150+ Projects"
  },
  {
    title: "3D Design and Modeling",
    description: "Create detailed 3D models and bring your design concepts to life",
    icon: Box,
    color: "bg-purple-500",
    projects: "200+ Projects"
  },
  {
    title: "Software Development",
    description: "Develop custom applications, websites, and software solutions",
    icon: Code,
    color: "bg-indigo-500",
    projects: "300+ Projects"
  },
  {
    title: "Simulations and System Prototyping",
    description: "Model complex systems and create functional prototypes",
    icon: FlaskConical,
    color: "bg-teal-500",
    projects: "100+ Projects"
  }
];

const ProjectCard = ({ title, description, icon: Icon, color, projects }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      <div className={`absolute h-1 w-full ${color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`${color} p-3 rounded-lg text-white`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {projects}
          </span>
          
          <button className="group-hover:translate-x-1 transition-transform duration-300">
            <svg 
              className="w-6 h-6 text-gray-400 group-hover:text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectTypes = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Types of Projects We Support
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our diverse range of technical project categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectTypes.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            Don't see your project type? Contact us for custom solutions.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Discuss Your Project
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

export default ProjectTypes;