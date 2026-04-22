import React from 'react';
import { 
  ChevronDown,
  LayoutDashboard,
  User, 
  LogIn, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D1B14] text-white overflow-hidden">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-20 px-8 grid grid-cols-1 md:grid-cols-4 gap-16 text-left">
        <FooterGroup title="About" links={["Our Story", "Team", "Careers"]} />
        <FooterGroup title="Support" links={["Help Center", "Contact Us", "FAQ"]} />
        <FooterGroup title="Legal" links={["Privacy Policy", "Terms of Service"]} />
        <div>
          <h4 className="font-bold text-lg mb-8">Connect</h4>
          <p className="opacity-60 text-sm leading-relaxed">Discover the wonders of Ethiopia with expert guides and authentic experiences.</p>
        </div>
      </div>
 <div className="max-w-7xl mx-auto px-8 h-10 flex items-center justify-between">
      <div className="flex items-center gap-4 text-gray-400 text-sm">
        © 2026 Ethiopian Tours. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-gray-500">
          <div className="flex items-center gap-1.5 text-gray-400">
            <a href="#" className="hover:text-[#B95B2A] transition"><Facebook size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Youtube size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><Instagram size={14} /></a>
            <a href="#" className="hover:text-[#B95B2A] transition"><MessageCircle size={14} /></a>
          </div>
          </div>
          </div>

    </footer>
    
  );
};

const FooterGroup = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-lg mb-8">{title}</h4>
    <ul className="space-y-4 opacity-60 text-sm">
      {links.map(link => <li key={link} className="hover:text-[#B95B2A] cursor-pointer transition">{link}</li>)}
    </ul>
  </div>
);

export default Footer;