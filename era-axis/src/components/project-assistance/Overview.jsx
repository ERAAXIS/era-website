import React from 'react';
import { ArrowDownCircle, Sparkles } from 'lucide-react';

const Overview = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 transition-opacity duration-500 hover:opacity-30"
        style={{ backgroundImage: "url('/images/3.jpg')" }}
      ></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 animate-fadeIn">
          Project Assistance for Students
        </h1>

        {/* Hero text */}
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fadeIn delay-200">
          At <span className="font-semibold text-blue-400">ERA AXIS</span>, we understand 
          the challenges students face when working on tech projects. Whether it's electronics, 
          programming, 3D designs, or software development, our experts are here to guide you 
          through every step of your project—from concept to completion.
        </p>

        {/* CTA section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slideInFromBottom delay-300">
          <a
            href="#products"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Explore Our Services
            <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Get Started
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownCircle className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Overview;