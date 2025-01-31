import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Arduino Robot Project",
    category: "electronics",
    image: "/api/placeholder/400/300",
    tags: ["robotics", "arduino", "programming"],
  },
  {
    id: 2,
    title: "Smart Home System",
    category: "software",
    image: "/api/placeholder/400/300",
    tags: ["iot", "automation", "coding"],
  },
  {
    id: 3,
    title: "3D Printed Drone",
    category: "mechanical",
    image: "/api/placeholder/400/300",
    tags: ["3d-printing", "design", "aviation"],
  }
];

const categories = ["all", "electronics", "software", "mechanical"];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span 
            key={tag}
            className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const GallerySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(project => {
        const matchesSearch = 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = 
          selectedCategory === 'all' || project.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
    );
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Student <span className="text-purple-600">Projects</span>
          </h1>
          <p className="text-lg text-gray-600">
            Explore amazing projects created by our students
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;