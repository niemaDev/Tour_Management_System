import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D1B14] text-white overflow-hidden border-t border-white/5">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-16 md:py-20 px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center sm:text-left">
          <FooterGroup title="About" links={["Our Story", "Team", "Careers"]} />
          <FooterGroup title="Support" links={["Help Center", "Contact Us", "FAQ"]} />
          <FooterGroup title="Legal" links={["Privacy Policy", "Terms of Service"]} />
          
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-lg mb-6 md:mb-8 text-[#B95B2A]">Connect</h4>
            <p className="opacity-60 text-sm leading-relaxed max-w-xs">
              Discover the wonders of Ethiopia with expert guides and authentic experiences.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-xs text-center md:text-left order-2 md:order-1">
            © 2026 HabeshaTour. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 order-1 md:order-2">
            <a href="#" className="text-gray-400 hover:text-[#B95B2A] transition-colors p-2">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B95B2A] transition-colors p-2">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B95B2A] transition-colors p-2">
              <Youtube size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B95B2A] transition-colors p-2">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B95B2A] transition-colors p-2">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterGroup = ({ title, links }) => (
  <div className="flex flex-col items-center sm:items-start">
    <h4 className="font-bold text-lg mb-6 md:mb-8 tracking-tight">{title}</h4>
    <ul className="space-y-3 md:space-y-4 opacity-60 text-sm">
      {links.map(link => (
        <li key={link} className="hover:text-[#B95B2A] cursor-pointer transition-colors">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;