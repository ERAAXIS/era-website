import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const navigationLinks = [
  { title: "Gallery", url: "/gallery", isExternal: false },
  { title: "News", url: "https://blog.eraaxis.com", isExternal: true },
  { title: "Store", url: "https://store.eraaxis.com", isExternal: true },
  { title: "Payment", url: "https://payment.eratechgh.com", isExternal: true },
  { title: "Contact", url: "#contact", isExternal: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const timerRef = useRef(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  const showHeader = useCallback(() => {
    if (!isAtTop) {
      setIsVisible(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsVisible(false), 3000);
    }
  }, [isAtTop]);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;

      setScrolled(currentScrollY > 50);
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY === 0) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        showHeader();
      }
    }, 100);

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
      clearTimeout(timerRef.current);
    };
  }, [showHeader, isAtTop]);

  const headerClasses = `
    fixed w-full z-50 transition-all duration-500 ease-out
    ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"} 
    ${isVisible || isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
    ${isAtTop ? "opacity-100 translate-y-0 pointer-events-auto" : ""}
    ${scrollDirection === "down" && !isOpen ? "-translate-y-full" : ""}
  `;

  const NavLink = ({ title, url, isExternal }) => (
    <a
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1"
      onClick={() => setIsOpen(false)}
    >
      {title}
      {isExternal && (
        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      )}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
    </a>
  );

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          {/* Logo */}
          <a href="/" className="relative group">
            <img
              src="/images/logo.svg"
              alt="ERA AXIS Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 transform scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink key={link.title} {...link} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 bg-white/5 rounded-lg transition-transform duration-300 hover:scale-110" />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out
            ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {navigationLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {link.title}
                {link.isExternal && <ExternalLink className="w-4 h-4 opacity-50" />}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;