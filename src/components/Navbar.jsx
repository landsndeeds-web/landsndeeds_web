import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Properties', href: '/properties' },
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
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="px-5 py-2.5 bg-[#1A335E] text-white rounded-lg font-bold text-[11px] hover:bg-[#D6B97B] transition-all duration-300 uppercase tracking-widest">
              Get in touch
            </Link>
            <a href="https://soft.landsndeeds.com/login" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#D6B97B] text-white rounded-lg font-bold text-[11px] hover:bg-[#1A335E] transition-all duration-300 uppercase tracking-widest">
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
          className="mt-4 px-10 py-3 bg-[#D6B97B] text-[#0F0F0F] rounded-full font-bold text-base shadow-lg shadow-black/10 uppercase tracking-widest text-center"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
};

export default Navbar;
