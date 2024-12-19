import { useState } from "react";
import PropTypes from "prop-types";
import ImageModal from "./ImageModal";

const GallerySection = ({ title, description, items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-green-700">{title}</h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
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

export default GallerySection;
