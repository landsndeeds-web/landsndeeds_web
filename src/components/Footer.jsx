import { Mail, Phone, MapPin, ArrowUpRight, ArrowUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_lnd.webp';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Our Services', href: '/services' },
  { name: 'Knowledge Centre', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/917010592827?text=' + encodeURIComponent('Hello Lands N Deeds, I would like to enquire about your property services.');

  return (
    <footer className="bg-[#0A1626] text-white relative overflow-hidden border-t-2 border-[#D6B97B]/40 font-sans">
      {/* Top Accent Strip */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1A335E] via-[#D6B97B] to-[#10B981]" />

      <div className="container mx-auto px-6 pt-10 pb-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block group cursor-pointer">
              <div className="w-24 h-14 overflow-hidden rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center">
                <img src={logo} alt="Lands N Deeds Logo" className="w-full h-full object-contain border-none" />
              </div>
            </Link>

            <p className="!text-slate-200 text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
              South India's premier property firm providing guaranteed due diligence, transparent marketing, and complete legal registration under one roof.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 !text-slate-200 text-[11px] font-medium">
                <CheckCircle2 size={13} className="text-[#10B981]" /> 100% Legal Due Diligence
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 !text-slate-200 text-[11px] font-medium">
                <CheckCircle2 size={13} className="text-[#D6B97B]" /> Verified Listings
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="!text-[#E5C378] font-bold uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="!text-slate-200 hover:!text-[#D6B97B] transition-colors inline-flex items-center gap-1.5 text-xs font-medium no-underline group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D6B97B]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Office (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="!text-[#E5C378] font-bold uppercase tracking-widest text-xs">
              Get in Touch
            </h4>
            
            <ul className="space-y-2.5 text-xs !text-slate-200">
              <li className="flex gap-2.5 items-start">
                <MapPin className="text-[#D6B97B] shrink-0 mt-0.5" size={15} />
                <span className="leading-relaxed">
                  No: 62, GV Residency, Sowripalayam, Coimbatore – 641028.
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="text-[#10B981] shrink-0" size={15} />
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="tel:+917010592827" className="!text-white font-semibold hover:!text-[#D6B97B] transition-colors no-underline">
                    +91 70105 92827
                  </a>
                  <a href="tel:+919944992530" className="!text-slate-300 hover:!text-[#D6B97B] transition-colors no-underline">
                    +91 99449 92530
                  </a>
                  <a href="tel:04224359777" className="!text-slate-400 hover:!text-[#D6B97B] transition-colors no-underline">
                    0422-4359777
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="text-[#D6B97B] shrink-0" size={15} />
                <a href="mailto:landsndeeds@gmail.com" className="!text-slate-200 hover:!text-[#D6B97B] transition-colors no-underline">
                  landsndeeds@gmail.com
                </a>
              </li>
            </ul>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="tel:+917010592827"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 !text-white text-xs font-bold transition-all no-underline"
              >
                📞 Call Us
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] !text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 no-underline"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs !text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="!text-white font-semibold">Lands N Deeds</span>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 !text-[#D6B97B] hover:!text-white transition-colors cursor-pointer border-0 bg-transparent p-0 font-medium"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
