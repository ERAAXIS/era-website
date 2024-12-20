import { ArrowRight, Code2, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 gap-12 lg:gap-20 bg-[#000000]">
      <div className="absolute inset-0 bg-era-black" aria-hidden="true" />
      <div className="w-full lg:w-1/2 space-y-8 relative z-10">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
          We Build Modern Software Solutions
        </h1>

        <p className="text-lg lg:text-xl text-gray-300">
          In the rapidly evolving world of manufacturing, software plays a
          pivotal role in driving efficiency and innovation. ERA AXIS offers
          comprehensive software solutions that empower manufacturers to
          automate processes, gain real-time insights, and enhance operational
          control. 
        </p>

        <button
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-era-purple-500 rounded-lg hover:bg-era-purple-400 transition-colors"
          aria-label="Get Started"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      <div className="w-full lg:w-1/2 relative z-10">
        <img
          src="/images/5.jpg"
          alt="Team collaborating on software development"
          className="w-full h-auto rounded-2xl shadow-2xl"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
