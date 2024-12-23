import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gray-300">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#ecowatch" className="hover:text-gray-300">
                  Ecowatch
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-gray-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
            <p className="mb-4">
              Subscribe to receive the latest news and updates.
            </p>
            <form action="subscribe.php" method="post" className="flex">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#4c4795] text-white px-6 py-2 rounded-r-lg hover:bg-[#8b79ff] transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="privacy-policy.html" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="terms-of-service.html" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/company/era-axis/" className="text-white hover:text-gray-300">
              <Linkedin />
            </a>
            <a href="https://x.com/99technologiess" className="text-white hover:text-gray-300">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/eraaxis" className="text-white hover:text-gray-300">
              <Instagram />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {getCurrentYear()} ERA AXIS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
