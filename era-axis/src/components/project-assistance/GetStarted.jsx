const GetStarted = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-era-purple-600">
          Get Started
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Ready to receive expert help for your project? Submit your request
          below, and we&apos;ll guide you through the process from start to
          finish.
        </p>
        <div className="text-center">
          <button className="bg-era-purple-500 text-white px-6 py-3 rounded-full hover:bg-era-purple-400 transition duration-300">
            Submit Project Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
