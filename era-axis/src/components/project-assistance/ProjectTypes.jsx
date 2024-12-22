const projectTypes = [
  "Electronics and Arduino Programming",
  "3D Design and Modeling",
  "Software Development",
  "Simulations and System Prototyping",
];

const ProjectTypes = () => {
  return (
    <section className="py-12 bg-era-purple-50 rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-era-purple-600">
          Types of Projects We Support
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectTypes.map((type, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center text-era-purple-400 font-semibold"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectTypes;
