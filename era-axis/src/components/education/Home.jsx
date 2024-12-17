const Home = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Welcome to ERA AXIS Education
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          We are dedicated to providing hands-on learning experiences that
          bridge theory and practice. Our programs are accessible both in-person
          and online, offering practical skills in electronics, programming, 3D
          design, simulation, software development, and technology
          innovation—open to all, with no qualifications required.
        </p>
        <div className="text-center">
          <a
            href="#what-we-offer"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
