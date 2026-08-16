import { useEffect } from 'react';
import ContactHero from '../sections/ContactHero';
import ContactInfoCards from '../sections/ContactInfoCards';
import ContactFormSection from '../sections/ContactFormSection';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | Lands N Deeds - Property Experts in Coimbatore, Tamil Nadu';

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta(
      'description',
      'Contact Lands N Deeds in Coimbatore for property legal services, consultation, 360° due diligence, registration, digital survey, and land clearance approvals across Tamil Nadu.'
    );
  }, []);

  return (
    <main className="pt-20 bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <ContactHero />

      {/* 2. Contact Info Cards (Address, Phone, Email, Hours) */}
      <ContactInfoCards />

      {/* 3. Contact Form + Info Panel */}
      <ContactFormSection />
    </main>
  );
};

export default Contact;
