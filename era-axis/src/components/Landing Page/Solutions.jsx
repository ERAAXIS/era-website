import PropTypes from "prop-types";

const EducationItem = ({ image, title, description, link }) => (
  <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
    <div className="h-48 bg-black">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-green-600">{title}</h3>
      <p className="mb-4 text-justify">{description}</p>
      <a
        href={link}
        className="inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
);

EducationItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Solutions = () => {
  return (
    <section id="industries" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          ERA AXIS Education
        </h2>
        <p className="text-xl text-center mb-12">
          Hands-on tech education for everyone—no qualifications needed.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <EducationItem
            image="/images/7.jpg"
            title="Theoretically-Practical Lessions for Everyone"
            description="Unlock your potential with hands-on learning in electronics, programming, and tech innovation. Our programs are designed to equip students and professionals with the skills they need to thrive in today's tech-driven world. Learn, build, and innovatewith ERA AXIS."
            link="/education"
          />
          <EducationItem
            image="/images/8.jpg"
            title="Poject Assistance from Our Team"
            description="Providing expert guidance and support for your projects, ensuring successful outcomes. Our dedicated team of experts is here to guide you through every step, from concept to completion. Connect with us and we'll assist you with your tech projects."
            link="/project-assistance"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
