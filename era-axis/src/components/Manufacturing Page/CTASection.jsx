const CTASection = () => {
  return (
    <section className="cta py-20 bg-cta-pattern bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Manufacturing Operations?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Contact ERA AXIS today to learn how we can help you enhance
          efficiency, reduce costs, and achieve sustainability in your
          processes. Discover the future of manufacturing with ERA AXIS.
        </p>
        <a
          href="#contact"
          className="btn-primary inline-block px-8 py-3 bg-white text-blue-800 font-semibold rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};
export default CTASection;
