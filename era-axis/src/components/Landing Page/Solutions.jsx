import React from 'react';
import PropTypes from 'prop-types';
import { BookOpen, Users, ArrowRight, Sparkles } from 'lucide-react';

const EducationItem = ({ image, title, description, link, icon: Icon, stats }) => (
  <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      
      {/* Icon Badge */}
      <div className="absolute top-4 left-4">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 rounded-lg bg-purple-50">
            <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href={link}
        className="group flex items-center justify-between w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
      >
        <span className="font-semibold">Learn More</span>
        <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

EducationItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Solutions = () => {
  return (
    <section id="industries" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            ERA AXIS Education
          </h2>
          <p className="text-xl text-gray-600">
            Hands-on tech education for everyone—no qualifications needed. 
            Start your journey into technology today.
          </p>
        </div>

        {/* Education Items Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <EducationItem
            image="/images/7.jpg"
            title="Practical Learning for Everyone"
            description="Unlock your potential with hands-on learning in electronics, programming, and tech innovation. Our programs are designed to equip students and professionals with the skills they need to thrive in today's tech-driven world."
            link="/education"
            icon={BookOpen}
            stats={[
              { value: "50+", label: "Courses Available" },
              { value: "1000+", label: "Students Trained" }
            ]}
          />
          <EducationItem
            image="/images/8.jpg"
            title="Expert Project Assistance"
            description="Get expert guidance and support for your technical projects, ensuring successful outcomes. Our dedicated team is here to guide you through every step, from concept to completion."
            link="/project-assistance"
            icon={Users}
            stats={[
              { value: "200+", label: "Projects Completed" },
              { value: "98%", label: "Success Rate" }
            ]}
          />
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <a
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-100 text-purple-700 rounded-full font-semibold hover:bg-purple-200 transition-colors duration-300"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Solutions;