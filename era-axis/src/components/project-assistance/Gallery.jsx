import React from 'react';
import { Camera, ChevronRight } from 'lucide-react';

const previewProjects = [
  {
    title: "Arduino Smart Home",
    category: "Electronics",
    imageUrl: "/api/placeholder/600/400",
    tags: ["IoT", "Arduino", "Automation"]
  },
  {
    title: "3D Printed Robotics",
    category: "3D Design",
    imageUrl: "/api/placeholder/600/400",
    tags: ["3D Printing", "Robotics", "CAD"]
  },
  {
    title: "Mobile App Development",
    category: "Software",
    imageUrl: "/api/placeholder/600/400",
    tags: ["React Native", "UI/UX", "Mobile"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      <div className="p-4">
        <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600">
          {project.category}
        </span>
        <h3 className="mb-2 text-lg font-bold text-gray-900">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, purple 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Project Assistance Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Explore the incredible projects completed with the support of ERA AXIS
            Education's Project Assistance. From electronics prototypes to 3D
            design models and software applications, our students have turned
            their innovative ideas into reality with expert guidance.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Success Rate", value: "98%" },
            { label: "Student Satisfaction", value: "4.9/5" },
            { label: "Different Categories", value: "20+" }
          ].map((stat, index) => (
            <div key={index} className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl">
            View Full Gallery
            <ChevronRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Discover more inspiring student projects and success stories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;