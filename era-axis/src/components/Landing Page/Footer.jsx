import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

const getCurrentYear = () => new Date().getFullYear();

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Products & Services', href: '#products' },
  { name: 'Ecowatch', href: '#ecowatch' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact Us', href: '#contact' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: 'privacy-policy.html' },
  { name: 'Terms of Service', href: 'terms-of-service.html' }
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/era-axis/' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/99technologiess' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/eraaxis' }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">ERA AXIS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering innovation through expert project assistance and sustainable solutions.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@eraaxis.com" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@eraaxis.com</span>
              </a>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-sm">123 Innovation Street,<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 transform transition-transform duration-200 group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <div id="mc_embed_signup" className="bg-gray-800/50 rounded-lg p-6">
              <form
                action="https://gmail.us7.list-manage.com/subscribe/post?u=2184be1e66f070db4ae847b90&amp;id=56f5977f5a&amp;f_id=0007bce4f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-gray-400 text-sm mb-4">
                    Subscribe to our newsletter for the latest updates on sustainability and innovation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      name="EMAIL"
                      className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                      id="mce-EMAIL"
                      placeholder="Enter your email"
                      required
                    />
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; {getCurrentYear()} ERA AXIS. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;