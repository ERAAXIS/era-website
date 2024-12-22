import PropTypes from "prop-types";

const IndustryItem = ({ image, title, description, link }) => (
  <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
    <div className="h-48 bg-black">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-era-purple-500">{title}</h3>
      <p className="mb-4">{description}</p>
      <a
        href={link}
        className="inline-block px-6 py-2 bg-era-purple-500 text-white rounded-full hover:bg-era-purple-400 transition duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
);

IndustryItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const IndustrySolutions = () => {
  return (
    <section id="industries" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Industry Solutions
        </h2>
        <p className="text-xl text-center mb-12">
          Advanced software and hardware solutions designed for industrial
          efficiency and reliability.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <IndustryItem
            image="/images/7.jpg"
            title="Manufacturing Solutions"
            description="Providing custom-built systems and equipment to optimize industrial manufacturing processes for maximum efficiency."
            link="manufacturing"
          />
          <IndustryItem
            image="/images/8.jpg"
            title="Software Solutions"
            description="Providing customized software solutions to boost automation, data management, and process control in industrial settings."
            link="software-solutions"
          />
          <IndustryItem
            image="/images/9.jfif"
            title="Maintenance & Support"
            description="Offering expert repairs, installations, and troubleshooting to ensure seamless operation of industrial systems and equipment."
            link="industrial"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
