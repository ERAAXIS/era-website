const solutionsData = [
  {
    title: "Industrial Electrical Installations",
    description:
      "We design and install heavy-duty electrical systems for industrial machinery, high-voltage installations, and customized power distribution systems that ensure uninterrupted operations and compliance with industry standards.",
  },
  {
    title: "Industrial Electrical Repairs and Upgrades",
    description:
      "Our repair services minimize downtime and restore full operational capacity with fault diagnosis, system upgrades, and motor and control system repairs that meet the latest efficiency and safety standards.",
  },
  {
    title: "Industrial Lighting Solutions",
    description:
      "Implement energy-efficient lighting systems such as LED high-bay lighting, explosion-proof lighting for hazardous areas, and smart lighting controls to optimize energy use and improve workplace safety in industrial environments.",
  },
  {
    title: "Preventive Maintenance and Safety Inspections",
    description:
      "Keep your industrial electrical systems running smoothly with our scheduled maintenance programs and safety inspections, ensuring compliance with industry standards and preventing costly breakdowns.",
  },
  {
    title: "Renewable Energy and Power Backup Systems",
    description:
      "Integrate renewable energy solutions into your industrial operations with solar power systems, energy storage solutions, and industrial-grade backup generators to ensure uninterrupted power supply during outages.",
  },
];

const Solutions = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
