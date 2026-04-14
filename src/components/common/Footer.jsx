import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2D1B14] text-white overflow-hidden">
      {/* CTA Section */}
      <div className="py-24 text-center px-8 border-b border-white/5">
        <h2 className="text-5xl font-serif font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-lg opacity-60 mb-10 max-w-2xl mx-auto">Join thousands of travelers who have experienced the magic of Ethiopia with our expert-guided tours.</p>
        <button className="bg-[#B95B2A] hover:bg-[#a04a20] px-12 py-4 rounded-xl font-bold text-lg transition shadow-2xl">
          Book Your Journey →
        </button>
      </div>

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

      <div className="text-center py-10 opacity-40 text-sm">
        © 2026 Ethiopian Tours. All rights reserved.
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