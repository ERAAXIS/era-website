import { useState } from "react";

const CaptureSchool = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ schoolName: "", contactPerson: "", email: "", phone: "" });
  };

  return (
    <section className="py-12 bg-gray-100 rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Capture Your School/Organization
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Want to bring ERA AXIS Education to your school or organization?
          Submit your details, and we&apos;ll work with you to include your
          institution in our hands-on learning program.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="schoolName"
              className="block text-gray-700 font-bold mb-2"
            >
              School/Organization Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-era-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactPerson"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-era-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-era-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-era-purple-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-era-purple-500 text-white px-6 py-3 rounded-full hover:bg-era-purple-400 transition duration-300"
            >
              Submit Your School
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CaptureSchool;
