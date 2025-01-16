const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/3.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Engineering the Future of Innovation
        </h1>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('services');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition duration-300 animate-slideInFromBottom"
        >
          Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
