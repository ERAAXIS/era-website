import PropTypes from "prop-types";

const TeamMember = ({ image, name, role, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h4 className="text-xl font-bold mb-2 text-green-600">{name}</h4>
    <p className="font-semibold mb-2">{role}</p>
    <p>{description}</p>
  </div>
);

TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our People</h2>
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
          <p className="text-lg">
            Our leadership team ensures seamless operations, driving innovation
            and efficiency at every level. With their strategic direction, we
            deliver industry-leading solutions that consistently exceed
            expectations.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-8">Meet the Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              image="/images/about-us/ceo.jpg"
              name="John Ransford Arthur"
              role="CEO (Founder)"
              description="The CEO drives our vision and growth, focusing on innovation and ensuring we meet industry demands with cutting-edge solutions."
            />
            <TeamMember
              image="/images/about-us/coo.jpg"
              name="Josua Kofi Annan"
              role="CTO (Co-Founder)"
              description="The CTO leads our technological advancements, ensuring our software and hardware solutions are innovative, reliable, and industry-ready."
            />
            <TeamMember
              image="/images/about-us/cto.jpg"
              name="Eugene Amoakwah"
              role="COO (Co-Founder)"
              description="The COO ensures smooth operations, optimizing processes and guaranteeing quality in the delivery of our services."
            />
            <TeamMember
              image="/images/header.jpg"
              name="Nusetor Delali Foster"
              role="Software Lead"
              description="The Software Lead oversees all aspects of software development, ensuring our solutions are innovative, reliable, and aligned with the company's goals for both efficiency and client satisfaction."
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Our Values & Culture</h3>
          <p className="mb-4">
            At ERA AXIS, our culture is built on innovation, collaboration, and
            a commitment to making a positive impact. We value:
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>Innovation:
              Constantly pushing boundaries to develop cutting-edge solutions.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>Sustainability:
              Prioritizing environmental responsibility in all we do.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>Integrity: Upholding
              the highest ethical standards in our business practices.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>Collaboration:
              Fostering a collaborative environment where ideas thrive.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>Excellence: Striving
              for excellence in every product and service we offer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
