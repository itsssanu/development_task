import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { navLinks } from '../data/mock';
import { Button } from './UI/button.jsx';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './UI/sheet';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.target);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(link.target);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white text-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900">Healthcare</h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.target)}
                className="
                  text-gray-800 hover:text-black transition-all duration-300
                  text-sm font-medium relative group
                "
              >
                {link.label}

                <span
                  className={`
                    absolute bottom-0 left-0 h-0.5 bg-[#FFEC22] transition-all duration-300
                    ${activeSection === link.target ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-5 py-2 rounded-full border-2 border-[#FFEC22] text-gray-900 bg-white transition-all duration-300 ease-in-out
              shadow-md hover:shadow-lg hover:-translate-y-1">
              Admission
            </button>
            <button onClick={() => scrollToSection("contact-form")} className="px-5 py-2 rounded-full bg-yellow-400 text-gray-900 transition-all duration-300 ease-in-out
              shadow-md hover:shadow-lg hover:-translate-y-1">
              Contact
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-900">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent className="bg-white text-gray-900 border-l-gray-200">
                <SheetHeader>
                  <SheetTitle className="text-gray-900 text-xl">
                    Healthcare
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col space-y-4 p-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => {
                        scrollToSection(link.target);
                        setIsOpen(false);
                      }}
                      className={`
                        text-left text-lg py-2 transition-colors
                        ${activeSection === link.target ? "text-black font-semibold" : "text-gray-800"}
                      `}
                    >
                      {link.label}
                    </button>
                  ))}

                  <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                    <button className="w-full px-5 py-2 rounded-full border-2 border-yellow-400 text-gray-900 bg-white transition-all duration-300 ease-in-out
              shadow-md hover:shadow-lg hover:-translate-y-1">
                      Admission
                    </button>

                    <button
                      onClick={() => {
                        scrollToSection("contact-form");
                        setIsOpen(false);
                      }}
                      className="w-full px-5 py-2 rounded-full bg-[#FFEC22] text-gray-900 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:-translate-y-1">
                      Contact
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
};
