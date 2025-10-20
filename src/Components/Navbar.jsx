import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of navItems) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 z-10">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#61DBFB] to-[#F97316] bg-clip-text text-transparent">
            PS
          </span>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 z-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#61DBFB] bg-[#61DBFB]/10"
                  : "text-gray-700 hover:text-[#61DBFB] dark:text-gray-300 dark:hover:text-[#61DBFB]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side: Dark Mode + Mobile Menu */}
        <div className="flex items-center space-x-2 z-10">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[#61DBFB] hover:bg-[#61DBFB]/10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-[#61DBFB] p-2 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 absolute w-full top-16 left-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={` px-3 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#61DBFB] bg-[#61DBFB]/10"
                    : "text-gray-700 hover:text-[#61DBFB] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-[#61DBFB] dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
