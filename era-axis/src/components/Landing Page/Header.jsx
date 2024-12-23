import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  let timer;

  const showHeader = useCallback(() => {
    if (!isAtTop) {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsVisible(false), 8000);
    }
  }, [isAtTop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY === 0) {
        setIsVisible(false);
      } else {
        showHeader();
      }
    };

    const handleMouseMove = (event) => {
      if (event.clientY <= 100 && !isAtTop) {
        showHeader();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [showHeader, isAtTop]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-black bg-opacity-70" : ""} 
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
        ${isAtTop ? "opacity-0 -translate-y-full pointer-events-none" : ""}`}
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
