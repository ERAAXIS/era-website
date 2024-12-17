const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Why Choose ERA AXIS Education?
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          At ERA AXIS Education, we focus on delivering practical skills in
          electronics, programming, software design, 3D designs, and
          simulations. Our courses are open to everyone, no qualifications
          required. With hands-on projects and expert support, you&apos;ll build
          a strong portfolio and enhance your academic and professional growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
            <p>
              Gain hands-on experience in electronics, programming, and more.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Open to All</h3>
            <p>
              No prior qualifications needed to start your learning journey.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p>Receive guidance from experienced instructors and mentors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
