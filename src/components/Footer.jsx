import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Globe, Share2, MessageCircle, ArrowUpRight } from 'lucide-react';
import logo from '../assets/Logo_lnd.webp';

const Footer = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-24 md:pb-12 border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-xl p-1 overflow-hidden">
                <img src={logo} alt="LandsnDeeds Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white tracking-wider">
                  LANDS N DEEDS
                </span>
                <span className="block text-[9px] font-bold tracking-[0.2em] text-[#D6B97B] uppercase">
                  Verified Real Estate
                </span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed font-medium">
              Lands N Deeds is a trusted property platform offering buying, selling, leasing, and property guidance services across Tamil Nadu. We connect people with verified property opportunities through a transparent and customer-focused approach.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-[#D6B97B] hover:text-black flex items-center justify-center transition-colors">
                <Globe size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-[#D6B97B] hover:text-black flex items-center justify-center transition-colors">
                <Share2 size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-[#D6B97B] hover:text-black flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links / Site Map */}
          <div className="space-y-6 md:pl-8">
            <h4 className="text-[#D6B97B] font-bold uppercase tracking-[0.3em] text-xs">Site Map</h4>
            <ul className="space-y-4">
              {[
                { name: 'Properties', href: '/properties' },
                { name: 'Buy Property', href: '/properties' },
                { name: 'Sell Property', href: '/contact' },
                { name: 'Lease Property', href: '/contact' },
                { name: 'About Us', href: '/about' },
                { name: 'Knowledge Centre', href: '/blogs' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Post Property', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-[#D6B97B] transition-colors flex items-center justify-between group font-medium text-sm max-w-[150px]">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D6B97B] uppercase tracking-wider">
              Properties
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-400">
              <li>
                <Link to="/properties?type=Apartments" className="hover:text-[#D6B97B] transition-colors">Apartments</Link>
              </li>
              <li>
                <Link to="/properties?type=Villas" className="hover:text-[#D6B97B] transition-colors">Villas</Link>
              </li>
              <li>
                <Link to="/properties?type=Lands" className="hover:text-[#D6B97B] transition-colors">Lands / Plots</Link>
              </li>
              <li>
                <Link to="/properties?type=Commercial" className="hover:text-[#D6B97B] transition-colors">Commercial</Link>
              </li>
              <li>
                <Link to="/properties?type=Agricultural" className="hover:text-[#D6B97B] transition-colors">Agricultural</Link>
              </li>
              <li>
                <Link to="/properties?type=Industrial" className="hover:text-[#D6B97B] transition-colors">Industrial</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#D6B97B] uppercase tracking-wider">
              Contact & Advisory
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-[#D6B97B] shrink-0 mt-0.5" />
                <span>Coimbatore & Across Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#D6B97B] shrink-0" />
                <a href="tel:+919442630000" className="hover:text-[#D6B97B] transition-colors">+91 94426 30000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#D6B97B] shrink-0" />
                <a href="mailto:info@landsndeeds.com" className="hover:text-[#D6B97B] transition-colors">info@landsndeeds.com</a>
              </li>
            </ul>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Post Property')}
              className="mt-2 w-full py-2.5 bg-[#D6B97B] text-[#0F0F0F] rounded-xl font-extrabold text-[11px] uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Post Property Free
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Lands N Deeds. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/contact" className="hover:text-gray-300">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
