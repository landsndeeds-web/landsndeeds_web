import { useEffect } from 'react';
import ServicesHero from '../sections/ServicesHero';
import ServicesLegal from '../sections/ServicesLegal';
import ServicesConsultation from '../sections/ServicesConsultation';
import ServicesDueDiligence from '../sections/ServicesDueDiligence';
import ServicesRegistration from '../sections/ServicesRegistration';
import ServicesDigitalSurvey from '../sections/ServicesDigitalSurvey';
import ServicesLandClearance from '../sections/ServicesLandClearance';
import ServicesCTA from '../sections/ServicesCTA';

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Lands N Deeds - Property, Legal, Due Diligence & Registration';

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
      'Lands N Deeds Services: Property - Legal Services, Consultation, 360 Degree Due Diligence, End to End Registration process, Digital Survey, and Land Clearance and Approvals.'
    );
  }, []);

  return (
    <main className="pt-20 bg-white overflow-hidden">
      {/* Header Banner */}
      <ServicesHero />

      {/* Section a: Property - Legal Services */}
      <ServicesLegal />

      {/* Section b: Consultation */}
      <ServicesConsultation />

      {/* Section c: 360 Degree Due Diligence */}
      <ServicesDueDiligence />

      {/* Section d: End to End - Registration process */}
      <ServicesRegistration />

      {/* Section e: Digital Survey */}
      <ServicesDigitalSurvey />

      {/* Section f: Land Clearance and Approvals */}
      <ServicesLandClearance />

      {/* Call to Action */}
      <ServicesCTA />
    </main>
  );
};

export default Services;
