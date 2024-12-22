const TurningDreams = () => {
  return (
    <section className="py-12 bg-gray-100 rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Turning Dreams into Reality
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          We empower students to bring their dream innovations to life. With the
          guidance of our expert mentors, we provide the tools, resources, and
          opportunities needed to transform ideas into reality—whether it&apos;s
          a new app, a 3D design prototype, or an electronics project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
            <p>
              Receive guidance from industry professionals to refine your ideas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              State-of-the-Art Tools
            </h3>
            <p>
              Access cutting-edge technology and software for your projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project Showcase</h3>
            <p>
              Present your completed projects to peers and potential employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurningDreams;
