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
      setIsScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] ${
          isScrolled
            ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-slate-100'
            : 'py-3.5 bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="LandsnDeeds Logo" className="w-full h-full object-contain border-none" />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] font-extrabold uppercase tracking-wider transition-all duration-200 relative group py-1 ${
                    isActive ? 'text-[#B8860B]' : 'text-slate-800 hover:text-[#B8860B]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Get in Touch — radiant gold pill */}
            <Link
              to="/contact"
              id="navbar-get-in-touch-btn"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider text-[#0D1B2A] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)] shadow-[0_3px_12px_rgba(212,175,55,0.25)] bg-gradient-to-r from-[#F3DA90] via-[#E5C378] to-[#D4AF37] cursor-pointer"
            >
              {/* Shimmer overlay */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none" />
              <Phone size={13} className="shrink-0 text-[#0D1B2A]" />
              <span>Get in Touch</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 text-[#0D1B2A]" />
            </Link>

            {/* Login — crisp navy outlined pill */}
            <a
              href="https://soft.landsndeeds.com/login"
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-login-btn"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider text-[#0D1B2A] border-2 border-[#0D1B2A] bg-transparent hover:bg-[#0D1B2A] hover:text-[#F3DA90] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2 focus:outline-none cursor-pointer rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] transition-all duration-300 ease-in-out md:hidden overflow-y-auto flex flex-col items-center pt-28 pb-12 px-6 gap-5 font-['Plus_Jakarta_Sans',sans-serif] ${
          isMobileMenuOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-extrabold uppercase tracking-wider py-1.5 block w-full text-center transition-colors ${
                isActive ? 'text-[#B8860B]' : 'text-slate-900 hover:text-[#B8860B]'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.name}
            </Link>
          );
        })}
        
        <a
          href="https://soft.landsndeeds.com/login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg font-extrabold text-[#0D1B2A] hover:text-[#B8860B] transition-colors uppercase tracking-wider py-1.5 block w-full text-center"
        >
          Login
        </a>
        
        <Link
          to="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="group relative mt-3 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-black text-sm text-[#0D1B2A] uppercase tracking-wider bg-gradient-to-r from-[#F3DA90] via-[#E5C378] to-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.5)] transition-all duration-300"
        >
          <Phone size={15} />
          <span>Get in Touch</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
