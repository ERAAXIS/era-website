import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';


const galleryData = [
  {
    title: "Student Projects",
    description: "Explore innovative projects completed by our students with ERA AXIS support.",
    items: [
      {
        id: 1,
        title: "Arduino-based Smart Home",
        image: "./images/1.jpg",
        category: "electronics",
        description: "A complete home automation system built using Arduino"
      },
      {
        id: 2,
        title: "3D Printed Robotic Arm",
        image: "./images/1.jpg",
        category: "robotics",
        description: "Fully articulated robotic arm with precision control"
      },
      {
        id: 3,
        title: "IoT Weather Station",
        image: "./images/1.jpg",
        category: "electronics",
        description: "Real-time weather monitoring system with cloud integration"
      },
      {
        id: 4,
        title: "Machine Learning Image Classifier",
        image: "./images/1.jpg",
        category: "software",
        description: "AI-powered image recognition system"
      },
      {
        id: 5,
        title: "Machine Learning Image Classifier",
        image: "./images/1.jpg",
        category: "software",
        description: "AI-powered image recognition system"
      },
    ],
  },
  // ... other sections with similar structure
];



const CategoryFilter = ({ categories, selected, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {categories.map(category => (
      <button
        key={category}
        onClick={() => onChange(category)}
        className={`
          px-4 py-2 text-sm font-medium rounded border transition-colors
          ${selected === category 
            ? 'bg-gray-900 text-white border-gray-900' 
            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
          }
        `}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>
);

const NavigationDots = ({ items, currentIndex, onChange }) => (
  <div className="flex gap-2 justify-center">
    {items.map((_, index) => (
      <button
        key={index}
        onClick={() => onChange(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300 
          ${index === currentIndex 
            ? 'bg-gray-900 w-6' 
            : 'bg-gray-300 hover:bg-gray-400'
          }
        `}
      />
    ))}
  </div>
);

const SliderSection = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(section.items.map(item => item.category))];
  
  const filteredItems = selectedCategory === 'all' 
    ? section.items 
    : section.items.filter(item => item.category === selectedCategory);

  const navigate = (direction) => {
    setCurrentIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % filteredItems.length;
      }
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {section.title}
          </h2>
          <p className="text-gray-600">{section.description}</p>
        </div>
        <CategoryFilter 
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <div className="relative bg-white">
        <div className="aspect-[16/9] overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <img
              src={filteredItems[currentIndex].image}
              alt={filteredItems[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-3xl">
                  <p className="text-sm font-medium text-white/80 mb-2">
                    {filteredItems[currentIndex].category.toUpperCase()}
                  </p>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {filteredItems[currentIndex].title}
                  </h3>
                  <p className="text-white/90">
                    {filteredItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <button
            onClick={() => navigate('prev')}
            className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <button
            onClick={() => navigate('next')}
            className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <NavigationDots 
            items={filteredItems}
            currentIndex={currentIndex}
            onChange={setCurrentIndex}
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`
              relative aspect-[4/3] overflow-hidden rounded 
              transition-all duration-300
              ${index === currentIndex 
                ? 'ring-2 ring-gray-900' 
                : 'hover:ring-2 hover:ring-gray-200'
              }
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className={`
              absolute inset-0 bg-black transition-opacity duration-300
              ${index === currentIndex ? 'opacity-0' : 'opacity-30'}
            `} />
          </button>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Innovation Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover the incredible projects and solutions created by our community
          </p>
        </div>

        <div className="space-y-16">
          {galleryData.map((section, index) => (
            <SliderSection key={index} section={section} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;