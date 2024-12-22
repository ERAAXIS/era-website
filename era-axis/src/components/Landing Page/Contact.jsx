import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form action="submit_form.php" method="post" className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-era-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-era-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-era-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-era-purple-500 text-white rounded-lg hover:bg-era-purple-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-2" /> (123) 456-7890
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> info@ERA AXIS.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" /> Airport Residential , Accra
              </p>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195092963173!2d-122.40135868468126!3d37.79362097975524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c3c0d99d%3A0x3ab3f1a0e6aefa3b!2s1234%20Tech%20Park%2C%20Innovation%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1602209876543!5m2!1sen!2sus"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps"
              ></iframe>
            </div>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="text-era-purple-500 hover:text-era-purple-400"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="text-era-purple-500 hover:text-era-purple-400"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-era-purple-500 hover:text-era-purple-400"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
