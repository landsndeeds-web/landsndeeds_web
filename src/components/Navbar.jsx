import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo_lnd.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Properties', href: '/properties' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[100] py-2 md:py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-500"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-lg flex items-center justify-center">
              <img src={logo} alt="LandsnDeeds Logo" className="w-full h-full object-contain border-none" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[10px] font-bold text-gray-900 hover:text-[#D6B97B] transition-colors relative group uppercase tracking-widest ${
                  location.pathname === link.href ? 'text-[#D6B97B]' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D6B97B] transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Get in Touch — premium gold pill */}
            <Link
              to="/contact"
              id="navbar-get-in-touch-btn"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(197,160,89,0.45)] shadow-[0_3px_12px_rgba(197,160,89,0.3)]"
              style={{ background: 'linear-gradient(135deg,#c5a059 0%,#d4b475 50%,#c5a059 100%)', backgroundSize: '200% 100%' }}
            >
              {/* Shimmer overlay */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
              <Phone size={12} className="shrink-0" />
              <span>Get in Touch</span>
              <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            {/* Login — crisp navy outlined pill */}
            <a
              href="https://soft.landsndeeds.com/login"
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-login-btn"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d3557] hover:text-white hover:shadow-md"
              style={{ color: '#1d3557', border: '1.5px solid #1d3557', background: 'transparent' }}
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out md:hidden overflow-y-auto flex flex-col items-center pt-28 pb-12 px-6 gap-6 ${
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
            className="text-xl font-sans font-bold text-gray-900 hover:text-[#D6B97B] transition-colors uppercase tracking-widest py-1 block w-full text-center"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {link.name}
          </Link>
        ))}
        <a
          href="https://soft.landsndeeds.com/login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-xl font-sans font-bold text-gray-900 hover:text-[#D6B97B] transition-colors uppercase tracking-widest py-1 block w-full text-center animate-pulse"
        >
          Login
        </a>
        <Link
          to="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="group relative mt-4 inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full font-bold text-base text-white uppercase tracking-widest overflow-hidden shadow-[0_4px_16px_rgba(197,160,89,0.4)] hover:shadow-[0_8px_24px_rgba(197,160,89,0.5)] transition-all duration-300"
          style={{ background: 'linear-gradient(135deg,#c5a059 0%,#d4b475 50%,#c5a059 100%)' }}
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
          <Phone size={15} />
          <span>Get in Touch</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
