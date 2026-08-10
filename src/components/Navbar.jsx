import { useState, useEffect } from 'react';
import { Menu, X, PlusCircle, LogIn, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo_lnd.webp';

const Navbar = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.10)] border-b border-gray-100'
            : 'py-3 bg-white/90 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.07)] border-b border-gray-100/60'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-14 h-14 md:w-20 md:h-20 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img src={logo} alt="LandsnDeeds Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-lg md:text-xl font-extrabold text-[#1A335E] tracking-wider leading-none">
                LANDS N DEEDS
              </span>
              <span className="block text-[9px] font-bold tracking-[0.25em] text-[#D6B97B] uppercase mt-0.5">
                Verified Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-extrabold transition-colors relative group uppercase tracking-widest ${
                  location.pathname === link.href ? 'text-[#D6B97B]' : 'text-gray-800 hover:text-[#D6B97B]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#D6B97B] transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Post Property CTA (Wireframe requirement) */}
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Post Property')}
              className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center gap-1.5 cursor-pointer hover:scale-105"
            >
              <PlusCircle size={14} />
              Post Property
            </button>

            {/* Get in touch */}
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('General Enquiry')}
              className="px-4 py-2.5 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall size={14} />
              Get in touch
            </button>

            {/* Login */}
            <a
              href="https://soft.landsndeeds.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#D6B97B] hover:bg-[#1A335E] text-[#0F0F0F] hover:text-white rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <LogIn size={14} />
              Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Post Property')}
              className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <PlusCircle size={12} />
              Post Property
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A335E] p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out lg:hidden overflow-y-auto flex flex-col items-center pt-28 pb-24 px-6 gap-5 ${
          isMobileMenuOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-bold text-gray-900 hover:text-[#D6B97B] transition-colors uppercase tracking-widest py-2 border-b border-gray-100 w-full text-center"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {link.name}
          </Link>
        ))}

        <div className="w-full space-y-3 mt-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenEnquiry && onOpenEnquiry('Post Property');
            }}
            className="w-full py-3 bg-emerald-700 text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <PlusCircle size={16} />
            Post Property
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenEnquiry && onOpenEnquiry('General Enquiry');
            }}
            className="w-full py-3 bg-[#1A335E] text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <PhoneCall size={16} />
            Get In Touch
          </button>

          <a
            href="https://soft.landsndeeds.com/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 bg-[#D6B97B] text-[#0F0F0F] rounded-xl font-bold text-sm uppercase tracking-widest text-center block shadow-md"
          >
            Client Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
