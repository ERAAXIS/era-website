import PropTypes from "prop-types";

const ImageModal = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.image} alt={image.title} className="w-full h-auto" />
        <h3 className="text-xl font-semibold mt-4 mb-2 text-green-800">
          {image.title}
        </h3>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
