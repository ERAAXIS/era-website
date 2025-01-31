import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';
import EmailServices from '../../utils/emailService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const success = await EmailServices.sendEmail(
        formData.email,
        formData.name,
        'Contact Us Message',
        formData.message
      );

      if (success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ type, name, label, value, onChange, multiline = false }) => (
    <div className="relative">
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all peer pt-6"
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all peer pt-6"
          placeholder=" "
        />
      )}
      <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 top-4 left-4 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-focus:text-purple-500">
        {label}
      </label>
    </div>
  );

  const ContactInfo = ({ icon: Icon, text }) => (
    <div className="flex items-center space-x-3 text-gray-600 mb-4">
      <div className="p-2 bg-purple-50 rounded-lg">
        <Icon className="w-5 h-5 text-purple-600" />
      </div>
      <span>{text}</span>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Get in <span className="text-purple-600">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  type="text"
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  type="email"
                  name="email"
                  label="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  name="message"
                  label="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium 
                    hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 
                    focus:ring-offset-2 transition-colors disabled:opacity-70 
                    disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {status && (
                  <div className={`p-3 rounded-lg ${
                    status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfo icon={FaPhone} text="(233) 509-582497" />
                <ContactInfo icon={FaEnvelope} text="support@eraaxis.com" />
                <ContactInfo icon={FaMapMarkerAlt} text="Sekondi-Takoradi, Ghana" />
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195092963173!2d-122.40135868468126!3d37.79362097975524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c3c0d99d%3A0x3ab3f1a0e6aefa3b!2s1234%20Tech%20Park%2C%20Innovation%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1602209876543!5m2!1sen!2sus"
                  className="w-full h-64 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                />
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/era-axis/"
                  className="p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5 text-purple-600" />
                </a>
                <a
                  href="https://x.com/99technologiess"
                  className="p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <FaTwitter className="w-5 h-5 text-purple-600" />
                </a>
                <a
                  href="https://www.instagram.com/eraaxis"
                  className="p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <FaFacebookF className="w-5 h-5 text-purple-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;