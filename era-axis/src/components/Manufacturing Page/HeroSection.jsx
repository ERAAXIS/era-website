const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-hero-manufacturing bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Manufacturing Solutions
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-slideUp animation-delay-200">
          Modern manufacturing demands continuous innovation and precision. At
          ERA AXIS, we deliver cutting-edge solutions designed to streamline
          production, optimize supply chains, and enhance sustainability.
        </p>
        <a
          href="#solutions"
          className="mt-8 inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-primary-dark hover:shadow-lg animate-slideUp animation-delay-400"
        >
          Explore Our Solutions
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
