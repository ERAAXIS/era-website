import React from 'react';
import { Home, AlertCircle } from 'lucide-react';

const Error404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center space-y-8 px-4">
          {/* Error Number */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-200">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="w-24 h-24 text-purple-500 animate-bounce" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Page Not Found
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Please check the URL or navigate back to our homepage.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl group"
            >
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
              Back to Homepage
            </a>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Go Back
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-12">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
            <p className="text-sm text-gray-500">
              If you believe this is a mistake, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;