const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          ERA AXIS combines extensive experience in industrial electrical
          systems with a safety-first approach to deliver tailored, high-quality
          solutions. We use advanced technology in power management, renewable
          energy integration, and industrial controls, offering comprehensive
          support from installation to maintenance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Expertise
            </h3>
            <p className="text-gray-700">
              Years of experience in industrial electrical systems.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Safety First
            </h3>
            <p className="text-gray-700">
              Prioritizing safety in all our installations and repairs.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Advanced Technology
            </h3>
            <p className="text-gray-700">
              Utilizing cutting-edge solutions in power management.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Comprehensive Support
            </h3>
            <p className="text-gray-700">
              Full service from installation to ongoing maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
