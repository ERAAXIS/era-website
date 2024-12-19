const helpItems = [
  {
    title: "Concept Development",
    description:
      "Struggling with project ideas? We help you brainstorm and refine your project concept to ensure it aligns with your academic goals and technical capabilities.",
  },
  {
    title: "Technical Guidance",
    description:
      "Our mentors provide step-by-step technical guidance, ensuring you have the support needed for complex tasks such as coding, circuit design, 3D modeling, or system integration.",
  },
  {
    title: "Hands-On Support",
    description:
      "Get hands-on support as you work through the practical aspects of your project, ensuring that you have the confidence and skills to successfully complete it.",
  },
  {
    title: "Problem Solving",
    description:
      "Stuck on a specific issue? We can help troubleshoot your project, identify challenges, and provide solutions to keep you on track.",
  },
  {
    title: "Portfolio Building",
    description:
      "Complete your project successfully and build a portfolio that demonstrates your technical skills and creativity to future employers or academic institutions.",
  },
];

const HowWeCanHelp = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          How We Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;
