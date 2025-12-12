import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { footerData } from '../data/mock';
import footerBg from "../assets/icons/images/footer.jpg";

const iconMap = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
};

export const Footer = () => {
  return (
    <footer
      className="text-white pt-16 pb-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-4xl font-bold mb-4">{footerData.logo.name}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footerData.logo.tagline}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {footerData.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-white hover:bg-[#012f3c] flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFD700]">Quick Link</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const section = document.getElementById(link.target);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-300 font-medium hover:text-[#FFD700] transition-colors duration-200 inline-flex items-center group text-left"
                  >
                    <span className="w-1.5 h-1.5 bg-[#3EC6EA] rounded-full mr-2 group-hover:bg-[#FFD700] transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>


          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFD700]">Academics</h4>
            <ul className="space-y-3">
              {footerData.academics.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300  font-medium hover:text-[#FFD700] transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#3EC6EA] rounded-full mr-2 group-hover:bg-[#FFD700] transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFD812]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#3EC6EA] mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">{footerData.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#3EC6EA] mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                >
                  {footerData.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#3EC6EA] mr-3 flex-shrink-0" />
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                >
                  {footerData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm mb-4 md:mb-0">
              College  © {new Date().getFullYear()} - All Right Reserved | Designed & Developed by Xtracut
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
