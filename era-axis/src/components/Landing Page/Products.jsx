import PropTypes from "prop-types";

const ProductItem = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h4 className="text-xl font-bold mb-2 text-era-purple-500">{title}</h4>
    <p>{description}</p>
  </div>
);

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Hardware Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProductItem
              image="/images/3.jpg"
              title="Personalised Builds"
              description="Providing hardware devices tailored to your specific requirements, designed to meet unique needs and desired features."
            />
            <ProductItem
              image="/images/4.jpg"
              title="TechCare Solutions"
              description="Providing troubleshooting, repairs, installations, and consultations for home appliances, devices, and business systems, tailored for both individuals and companies."
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">Software Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProductItem
              image="/images/5.jpg"
              title="Tailored Software Solutions"
              description="Providing software uniquely designed and adapted to your business or personal needs, ensuring optimal performance and seamless integration."
            />
            <ProductItem
              image="/images/6.jpg"
              title="Comprehensive Software Care"
              description="Providing expert consultation, troubleshooting, updates, and maintenance services to ensure your software performs optimally for both industrial systems and home applications."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
