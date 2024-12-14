const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Sustainability Commitment</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Environmental Responsibility</h3>
          <p className="text-lg">Sustainability is at the core of ERA AXIS. We strive to develop technologies that not only advance industrial capabilities but also protect our planet for future generations.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Green Initiatives</h3>
          <p className="text-lg mb-4">We are dedicated to reducing our own environmental footprint and actively participate in community projects such as:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Implementing energy-efficient practices in our facilities</li>
            <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Offering training to locals on climate change and its adaptation</li>
            <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Collaborating with local organizations to promote sustainability education</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

