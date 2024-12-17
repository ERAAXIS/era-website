const Competitions = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Competitions and Skills Development
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          At ERA AXIS Education, we help students build confidence, develop
          presentation skills, and enhance teamwork by participating in local
          and international competitions. These experiences allow students to
          showcase their talents, collaborate effectively, and present their
          ideas with clarity, preparing them for real-world challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Confidence Building</h3>
            <p>Gain self-assurance through competitive experiences.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Presentation Skills</h3>
            <p>Learn to articulate ideas clearly and persuasively.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
            <p>Collaborate effectively in diverse group settings.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
