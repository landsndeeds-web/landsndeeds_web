import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle2, MapPin, ChevronDown } from 'lucide-react';

const serviceOptions = [
  'Property - Legal Services',
  'Consultation',
  '360 Degree Due Diligence',
  'End to End - Registration Process',
  'Digital Survey',
  'Land Clearance and Approvals',
  'Buy / Sell / Lease Property',
  'Other',
];

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-10 md:py-14 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1A335E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ─── Left: Info Panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
                <MessageSquare size={14} />
                Send a Message
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E] leading-tight">
                For More Details, <span className="gold-gradient">Contact Us!</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Whether you need a legal opinion, due diligence report, registration assistance, or property consultation — our experts are ready to guide you at every step.
              </p>
            </div>

            {/* Contact Quick Info */}
            <div className="bg-slate-50 rounded-2xl border border-gray-200/80 p-5 sm:p-6 space-y-4">
              {[
                { icon: MapPin, title: 'Head Office', body: 'No: 62, GV Residency, Sowripalayam, Coimbatore – 641028.' },
                { icon: Phone, title: 'Phone Numbers', body: '0422-4359777 | +91 70105 92827 | +91 99449 92530' },
                { icon: Mail, title: 'Email Address', body: 'landsndeeds@gmail.com' },
              ].map(({ icon: Icon, title, body }, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E] shrink-0 mt-0.5">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-[#D6B97B] font-bold text-[11px] uppercase tracking-wider">{title}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-0.5">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm h-44 sm:h-52">
              <iframe
                title="Lands N Deeds Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.9858!3d11.0108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a5b93f4bc7%3A0xb86a9e3f9b9bd254!2sSowripalayam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1693000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ─── Right: Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-lg p-6 sm:p-8 md:p-10">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A335E]">Send Us a Message</h3>
                <p className="text-gray-500 text-sm">Fill in the form below and our team will respond within 24 hours.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-3 py-14 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D6B97B]/20 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-[#D6B97B]" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#1A335E]">Message Received!</h4>
                  <p className="text-gray-500 text-sm max-w-xs">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D6B97B] hover:text-[#1A335E] transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <User size={12} className="text-[#D6B97B]" /> Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D6B97B]/50 focus:border-[#D6B97B] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone size={12} className="text-[#D6B97B]" /> Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D6B97B]/50 focus:border-[#D6B97B] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail size={12} className="text-[#D6B97B]" /> Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D6B97B]/50 focus:border-[#D6B97B] transition-all"
                    />
                  </div>

                  {/* Service Interested In */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <ChevronDown size={12} className="text-[#D6B97B]" /> Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D6B97B]/50 focus:border-[#D6B97B] transition-all appearance-none"
                    >
                      <option value="">— Select a service —</option>
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare size={12} className="text-[#D6B97B]" /> Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property requirement, query or request…"
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D6B97B]/50 focus:border-[#D6B97B] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full group flex items-center justify-center gap-2.5 bg-[#1A335E] hover:bg-[#0D1B2A] text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#1A335E]/20"
                  >
                    Send Message
                    <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>

                  <p className="text-center text-gray-400 text-[11px]">
                    We will respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
