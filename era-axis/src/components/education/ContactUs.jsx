import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-us py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact Us
        </h2>
        <div className="contact-content grid md:grid-cols-2 gap-12">
          <div className="contact-form">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form action="submit_form.php" method="post" className="space-y-6">
              <div className="form-group relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=" "
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-600 transition-all duration-300"
                >
                  Your Name
                </label>
              </div>
              <div className="form-group relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" "
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-600 transition-all duration-300"
                >
                  Your Email
                </label>
              </div>
              <div className="form-group relative">
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder=" "
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-gray-600 transition-all duration-300"
                >
                  Your Message
                </label>
              </div>
              <button
                type="submit"
                className="submit-button w-full py-3 bg-era-purple-500 text-white font-semibold rounded-md transition-colors duration-300 hover:bg-era-purple-400"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="flex items-center mb-4">
              <FaPhone className="mr-2 text-primary" /> (123) 456-7890
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-2 text-primary" /> info@ERA AXIS.com
            </p>
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-primary" /> 1234 Tech Park,
              Innovation City, Country
            </p>
            <div className="map mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195092963173!2d-122.40135868468126!3d37.79362097975524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c3c0d99d%3A0x3ab3f1a0e6aefa3b!2s1234%20Tech%20Park%2C%20Innovation%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1602209876543!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
            <div className="social-media mt-8 flex space-x-4">
              <a
                href="#"
                className="text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
