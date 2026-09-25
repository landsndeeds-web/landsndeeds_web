import { Mail, Phone, MapPin, ArrowUpRight, ArrowUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_lnd.webp';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Properties', href: '/properties' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
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
            <div className="flex items-center gap-2.5 pt-2">
              {/* Call Us — gold gradient pill */}
              <a
                href="tel:+917010592827"
                id="footer-call-us-btn"
                className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(197,160,89,0.45)] shadow-[0_3px_10px_rgba(197,160,89,0.25)] no-underline"
                style={{ background: 'linear-gradient(135deg,#c5a059 0%,#d4b475 50%,#b8903e 100%)' }}
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                <Phone size={12} className="shrink-0" />
                <span>Call Us</span>
                <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              {/* WhatsApp — rich green gradient pill */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(37,211,102,0.45)] shadow-[0_3px_10px_rgba(37,211,102,0.25)] no-underline"
                style={{ background: 'linear-gradient(135deg,#1da851 0%,#25D366 50%,#1da851 100%)' }}
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
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
