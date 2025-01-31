import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "", subject: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "(233) 509-582497",
      subtitle: "Monday - Friday from 8am to 5pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "support@eraaxis.com",
      subtitle: "Online support 24/7",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      value: "Sekondi-Takoradi, Ghana",
      subtitle: "Come say hello at our office",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have something to say? We're here to help and answer any questions you might have.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods Cards */}
            <div className="lg:col-span-1 space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      {React.cloneElement(method.icon, { className: "w-6 h-6 text-blue-600" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-gray-600 mt-1">{method.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{method.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="p-6 bg-white rounded-xl shadow-sm mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin />, href: "https://www.linkedin.com/company/era-axis/", label: "LinkedIn" },
                    { icon: <Twitter />, href: "https://x.com/99technologiess", label: "Twitter" },
                    { icon: <Facebook />, href: "https://www.instagram.com/eraaxis", label: "Facebook" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                      aria-label={social.label}
                    >
                      {React.cloneElement(social.icon, {
                        className: "w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
                      })}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`absolute left-3 transition-all duration-200 ${
                          focused === 'name' || formData.name
                            ? '-top-2 text-xs bg-white px-1 text-blue-600'
                            : 'top-3 text-gray-500'
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-3 transition-all duration-200 ${
                          focused === 'email' || formData.email
                            ? '-top-2 text-xs bg-white px-1 text-blue-600'
                            : 'top-3 text-gray-500'
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className={`absolute left-3 transition-all duration-200 ${
                        focused === 'subject' || formData.subject
                          ? '-top-2 text-xs bg-white px-1 text-blue-600'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-3 transition-all duration-200 ${
                        focused === 'message' || formData.message
                          ? '-top-2 text-xs bg-white px-1 text-blue-600'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <div className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>

                {status === "success" && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-800">
                      Failed to send message. Please try again later.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195092963173!2d-122.40135868468126!3d37.79362097975524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c3c0d99d%3A0x3ab3f1a0e6aefa3b!2s1234%20Tech%20Park%2C%20Innovation%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1602209876543!5m2!1sen!2sus"
              className="w-full h-96"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;