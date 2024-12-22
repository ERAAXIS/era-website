const Benefits = () => {
  return (
    <section className="py-12 bg-era-purple-50 rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-era-purple-600">
          Benefits of Partnering
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Partnering with ERA AXIS guarantees uninterrupted operations, energy
          efficiency, and safety compliance. Our tailored electrical systems
          reduce energy consumption, enhance operational safety, and ensure that
          your facility meets industry regulations, helping you operate more
          sustainably and cost-effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-era-purple-400">
              Uninterrupted Operations
            </h3>
            <p className="text-gray-700">
              Minimize downtime with our reliable electrical systems and quick
              repair services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-era-purple-400">
              Energy Efficiency
            </h3>
            <p className="text-gray-700">
              Reduce energy consumption and costs with our optimized electrical
              solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-era-purple-400">
              Safety Compliance
            </h3>
            <p className="text-gray-700">
              Ensure your facility meets all industry regulations and safety
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
