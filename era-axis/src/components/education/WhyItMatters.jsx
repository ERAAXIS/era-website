const WhyItMatters = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Why It Matters
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          By developing confidence, presentation skills, and teamwork, students
          gain a well-rounded education that prepares them not just for academic
          success, but also for real-world challenges. Our approach ensures that
          every student has the tools and experience they need to succeed, both
          as individuals and as part of a larger team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Career Readiness</h3>
            <p>
              Develop skills that are highly valued in the professional world.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
            <p>Build self-confidence and improve communication abilities.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Collaborative Skills</h3>
            <p>Learn to work effectively in team environments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
