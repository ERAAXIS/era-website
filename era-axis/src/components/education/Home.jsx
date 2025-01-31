import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Lightbulb, Users, Globe } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Lightbulb, title: 'Hands-on Learning', description: 'Practical experience in electronics and programming' },
    { icon: Users, title: 'Accessible to All', description: 'No qualifications required to start learning' },
    { icon: Globe, title: 'Flexible Learning', description: 'Available both online and in-person' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-6">
              Welcome to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                ERA AXIS
              </span>{' '}
              Education
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-12 text-center leading-relaxed">
              We are dedicated to providing hands-on learning experiences that
              bridge theory and practice. Our programs offer practical skills in
              technology innovation—open to all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#what-we-offer"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-500 transition-all flex items-center justify-center"
              >
                Explore Programs
                <ChevronDown className="ml-2 h-5 w-5" />
              </motion.a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;