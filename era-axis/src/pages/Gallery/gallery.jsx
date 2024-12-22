import Header from "../../components/Landing Page/Header";
import Footer from "../../components/Landing Page/Footer";
import GallerySection from "../../components/gallery/GallerySection";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

// Sample data for different gallery sections
const galleryData = [
  {
    title: "Student Projects",
    description:
      "Explore innovative projects completed by our students with ERA AXIS support.",
    items: [
      {
        id: 1,
        title: "Arduino-based Smart Home",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 2,
        title: "3D Printed Robotic Arm",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 3,
        title: "IoT Weather Station",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 4,
        title: "Machine Learning Image Classifier",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    title: "Industrial Solutions",
    description:
      "View our industrial electrical installations and solutions in action.",
    items: [
      {
        id: 5,
        title: "High-Voltage Power Distribution",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 6,
        title: "Industrial Lighting System",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 7,
        title: "Renewable Energy Integration",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 8,
        title: "Safety Inspection Process",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    title: "Educational Workshops",
    description: "See our students engaged in hands-on learning experiences.",
    items: [
      {
        id: 9,
        title: "Electronics Workshop",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 10,
        title: "3D Modeling Class",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 11,
        title: "Programming Bootcamp",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 12,
        title: "Robotics Competition",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-era-purple-600">
          ERA AXIS Gallery
        </h1>
        {galleryData.map((section, index) => (
          <GallerySection key={index} {...section} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

GallerySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
