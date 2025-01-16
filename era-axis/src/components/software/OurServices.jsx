import {
    Building2,
    Factory,
    Network,
    Cloud,
    Truck,
    BrainCog
  } from "lucide-react";

  const services = [
    {
      title: "Manufacturing Execution Systems (MES)",
      description:
        "Optimize and monitor your production processes in real-time with advanced software solutions. Automate repetitive tasks, collect data on production performance, and streamline workflows across departments for a more efficient and error-free operation.",
      icon: Factory,
    },
    {
      title: "Enterprise Resource Planning (ERP) Solutions",
      description: "Integrate every aspect of your business with our comprehensive ERP solutions. From finance and procurement to production and logistics, our ERP platform enables real-time data-driven decision-making and ensures that all business processes are aligned for maximum efficiency.",
      icon: Building2,
    },
    {
      title: "Digital Twin Technology",
      description: "Simulate your production processes with digital twin technology. By creating virtual replicas of your systems, you can test different scenarios, identify inefficiencies, and optimize performance without interrupting real-time production.",
      icon: Network,
    },
    {
      title: "Cloud-Based Collaboration Tools",
      description: "Facilitate seamless communication and collaboration among teams with cloud-based tools. Monitor production lines remotely, share data securely, and foster a collaborative work environment with centralized platforms.",
      icon: Cloud,
    },
    {
      title: "Supply Chain Management Software",
      description:
        "Gain complete visibility over your supply chain from end to end. Automate inventory management, optimize logistics, and ensure timely delivery with intelligent software that tracks your supply chain in real-time.",
      icon: Truck,
    },
    {
      title: "AI and Machine Learning Solutions",
      description: "Leverage AI and machine learning to enhance decision-making in your manufacturing operations. From predictive maintenance to automated quality control and advanced data analytics, our AI solutions help you reduce downtime and improve operational efficiency",
      icon: BrainCog,
    },
  ];

const OurServices = () => {
  return (
    <div id="serivces" className="w-full bg-gray-900">
      <section className="px-6 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-100 group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-[#4c4795] rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-[#8b79ff]">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurServices