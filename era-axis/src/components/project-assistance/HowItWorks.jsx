const steps = [
  {
    title: "Submit Your Project Request",
    description:
      "Provide us with details about your project, including the area of focus (electronics, programming, 3D designs, etc.), and we'll match you with an expert who can assist you.",
  },
  {
    title: "Get Matched with a Mentor",
    description:
      "Once we receive your request, we'll assign you a mentor who specializes in your project area. They will work with you to provide guidance and technical support.",
  },
  {
    title: "Work with Your Mentor",
    description:
      "Collaborate with your mentor through one-on-one sessions (in-person or online) to develop and complete your project.",
  },
  {
    title: "Complete and Submit Your Project",
    description:
      "With our expert guidance, you will confidently complete your project and showcase it as part of your academic or professional portfolio.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          How It Works
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
