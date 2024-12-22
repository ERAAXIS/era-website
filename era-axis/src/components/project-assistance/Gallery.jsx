const Gallery = () => {
  return (
    <section className="py-12 bg-era-purple-50 rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-era-purple-600">
          Project Assistance Gallery
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Explore the incredible projects completed with the support of ERA AXIS
          Education&apos;s Project Assistance. From electronics prototypes to 3D
          design models and software applications, our students have turned
          their innovative ideas into reality with expert guidance. Take a look
          at their journey through concept development, technical execution, and
          final presentations.
        </p>
        <div className="text-center">
          <button className="bg-era-purple-500 text-white px-6 py-3 rounded-full hover:bg-era-purple-400 transition duration-300">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
