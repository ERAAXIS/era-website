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
          <div
            id="mc_embed_signup"
            className="bg-transparent shadow-md rounded-lg max-w-lg p-6"
          >
            <form
              action="https://gmail.us7.list-manage.com/subscribe/post?u=2184be1e66f070db4ae847b90&amp;id=56f5977f5a&amp;f_id=0007bce4f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Subscribe to our Newsletter
                </h2>
                <div className="flex">
                  <input
                    type="email"
                    name="EMAIL"
                    className="block w-full px-3 py-2 text-black border-t border-b border-gray-300 rounded-l-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="mce-EMAIL"
                    required
                  />
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="px-4 py-2 bg-era-purple-500 text-white font-medium text-sm rounded-r-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    value="Subscribe"
                  />
                </div>
              </div>
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
            <a
              href="https://www.linkedin.com/company/era-axis/"
              className="text-white hover:text-gray-300"
            >
              <Linkedin />
            </a>
            <a
              href="https://x.com/99technologiess"
              className="text-white hover:text-gray-300"
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/eraaxis"
              className="text-white hover:text-gray-300"
            >
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
