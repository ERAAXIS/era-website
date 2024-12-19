import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-70" : ""
      }`}
    >
      <nav
        className="container mx-auto px-6 py-3"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            <img src="/images/logo.svg" alt="ERA AXIS Logo" className="h-10" />
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/gallery" className="hover:text-gray-300">
              Gallery
            </a>
            <a href="https://blog.eraaxis.com" className="hover:text-gray-300">
              News
            </a>
            <a href="https://store.eraaxis.com" className="hover:text-gray-300">
              Store
            </a>
            <a
              href="https://payment.eratechgh.com"
              className="hover:text-gray-300"
            >
              Payment
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="/gallery" className="block py-2 hover:text-gray-300">
              Gallery
            </a>
            <a
              href="https://blog.eraaxis.com"
              className="block py-2 hover:text-gray-300"
            >
              News
            </a>
            <a
              href="https://store.eraaxis.com"
              className="block py-2 hover:text-gray-300"
            >
              Store
            </a>
            <a
              href="https://payment.eratechgh.com"
              className="block py-2 hover:text-gray-300"
            >
              Payment
            </a>
            <a href="#contact" className="block py-2 hover:text-gray-300">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
