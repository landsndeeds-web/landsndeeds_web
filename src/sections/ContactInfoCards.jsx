import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Head Office',
    lines: [
      'No: 62, GV Residency, Sowripalayam,',
      'Coimbatore – 641028, Tamil Nadu.',
    ],
    cta: { label: 'Get Directions', href: 'https://maps.google.com/?q=Sowripalayam+Coimbatore' },
    color: '#1A335E',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['0422-4359777', '+91 70105 92827', '+91 99449 92530'],
    cta: { label: 'Call Now', href: 'tel:04224359777' },
    color: '#D6B97B',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['landsndeeds@gmail.com'],
    cta: { label: 'Send Email', href: 'mailto:landsndeeds@gmail.com' },
    color: '#1A335E',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday – Saturday', '9:00 AM – 6:00 PM', 'Sunday: Appointment Only'],
    cta: null,
    color: '#D6B97B',
  },
];

const ContactInfoCards = () => {
  return (
    <section className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <MapPin size={14} />
            Our Contact Details
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E]">
            Reach Us <span className="gold-gradient">Anywhere</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Visit our office, call, or email — we're always available to assist with your property queries.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    <Icon size={20} style={{ color: card.color }} />
                  </div>
                  <h3 className="font-serif font-bold text-[#1A335E] text-base">{card.title}</h3>
                  <div className="space-y-0.5">
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-gray-500 text-xs sm:text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>

                {card.cta && (
                  <a
                    href={card.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[#D6B97B] font-bold text-xs uppercase tracking-wider hover:gap-2.5 transition-all duration-300 no-underline"
                  >
                    {card.cta.label}
                    <ArrowRight size={13} />
                  </a>
                )}

                {!card.cta && (
                  <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold uppercase tracking-wider text-[#D6B97B]">
                    Available During Hours
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
