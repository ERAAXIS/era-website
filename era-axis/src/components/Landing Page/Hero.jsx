import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newOpacity = 1 - (scrolled / 500);
      setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('/images/3.jpg')",
          transform: `scale(${1 + (1 - scrollOpacity) * 0.1})`
        }}
      />
      
      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30" />

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-4xl mx-auto px-6"
        style={{ opacity: scrollOpacity }}
      >
        {/* Decorative Element */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            <div className="absolute inset-0 bg-purple-500/20 blur-xl" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Engineering the Future of{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Innovation
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Pioneering technological solutions that shape tomorrow's possibilities
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            onClick={handleScroll}
            className="group relative px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
          >
            Explore Our Services
            <div className="absolute inset-0 bg-white/20 rounded-full blur animate-pulse" />
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity: Math.max(0.2, scrollOpacity) }}
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;