import PropTypes from "prop-types";
import {
  FaLaptopCode,
  FaCogs,
  FaCubes,
  FaProjectDiagram,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

const OfferingCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <Icon className="text-4xl text-era-purple-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

OfferingCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: FaLaptopCode,
      title: "Hands-On Learning Seamless Online",
      description:
        "Our curriculum focuses on practical, real-world applications. Learn through step-by-step guidance, simulations, and interactive projects, making it easy to apply your knowledge effectively in real-life scenarios.",
    },
    {
      icon: FaCogs,
      title: "Software Design and Building",
      description:
        "Gain a strong foundation in software design and development. Whether you're new to coding or looking to advance your skills, you'll learn how to build and deploy custom applications for various platforms.",
    },
    {
      icon: FaCubes,
      title: "3D Design for Mechanical Students",
      description:
        "Specialized courses for mechanical students focus on 3D design and modeling, providing the tools to excel in mechanical engineering, product design, and prototyping.",
    },
    {
      icon: FaProjectDiagram,
      title: "Custom Projects",
      description:
        "Every semester, students complete practical projects in electronics, Arduino programming, 3D design, software development, and simulations, helping you build a strong portfolio.",
    },
    {
      icon: FaUsers,
      title: "Accessible to All Students",
      description:
        "Our courses are open to all students, regardless of their background—whether you're studying engineering, business, health sciences, or another field.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Support",
      description:
        "Our instructors and mentors provide continuous guidance and support, making your learning experience engaging and effective, whether in-person or online.",
    },
  ];

  return (
    <section
      id="what-we-offer"
      className="py-12 bg-gray-100 rounded-lg shadow-md mb-8"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {offerings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
