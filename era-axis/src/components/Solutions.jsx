const Solutions = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          ERA AXIS EDUCATION
        </h2>
        <p className="text-xl text-center mb-12">
          Hands-on tech education for everyone&mdash;no qualifications needed.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            <img
              src="/images/2.jpeg"
              alt="Bridging Theory and Practice"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">
              Bridging Theory and Practice
            </h3>
            <p className="mb-6">
              Unlock your potential with hands-on learning in electronics,
              programming, and tech innovation. Our programs are designed to
              equip students and professionals with the skills they need to
              thrive in today@apos tech-driven world. Learn, build, and innovate
              with ERA AXIS.
            </p>
            <a
              href="manufacturing.html"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
