import {
  CheckCircle,
  Users,
  Shield,
  Clock,
  Target,
  Award,
  Send,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const benefits = [
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Users,
  },
  {
    value: "57+",
    label: "Projects Completed",
    icon: CheckCircle,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Clock,
  },
  {
    value: "100%",
    label: "Secure Platform",
    icon: Shield,
  },
];
const whyChooseUs = [
  {
    title: "Expert Team",
    content:
      "Our team consists of industry veterans with decades of experience. We have worked with numerous clients from various industries and have a deep understanding of their needs and challenges.",
    icon: Users,
  },
  {
    title: "Proven Track Record",
    content:
      "We have successfully delivered hundreds of enterprise projects. Our expertise spans across multiple industries and technologies, enabling us to deliver tailored solutions that meet our clients' needs.",
    icon: Target,
  },
  {
    title: "Quality Assured",
    content:
      "We take pride in our rigorous quality control and testing processes. This ensures that our solutions are of the highest quality, and our clients can trust that they will receive a reliable and efficient solution.",
    icon: Award,
  },
];

const BottomSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [stats, setStats] = useState(benefits.map(() => 0));
  useEffect(() => {
    benefits.forEach((benefit, index) => {
      const target = parseInt(benefit.value) || 100;
      let current = 0;
      const step = target / 50;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setStats((prev) => {
          const newStats = [...prev];
          newStats[index] = current;
          return newStats;
        });
      }, 50);
    });
  }, []);

  return (
    <div>
      <section className="px-6 lg:px-20 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Delivering exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl shadow-sm"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {Math.round(stats[index])}
                    {benefit.value.includes("%") ? "%" : "+"}
                  </div>
                  <p className="text-gray-600">{benefit.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference of working with industry leaders
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              {whyChooseUs.map((item, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-6 transition-all ${
                    activeTab === index
                      ? "bg-blue-600 text-white rounded-xl"
                      : "text-gray-600 hover:bg-gray-50 rounded-xl"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center gap-4">
                    {item.icon && (
                      <item.icon
                        className={`w-6 h-6 ${
                          activeTab === index ? "text-white" : "text-blue-600"
                        }`}
                      />
                    )}
                    <span className="text-xl font-semibold">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="w-full lg:w-2/3 bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {/* Explicitly extract and render the icon */}
                  {whyChooseUs[activeTab] && whyChooseUs[activeTab].icon
                    ? React.createElement(whyChooseUs[activeTab].icon, {
                        className: "w-8 h-8 text-white",
                      })
                    : null}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {whyChooseUs[activeTab]?.title || "Default Title"}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {whyChooseUs[activeTab]?.content || "Default Content"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Contact us today and transform your business
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12">
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full lg:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottomSection;
