import { useEffect } from 'react';
import AboutHero from '../sections/AboutHero';
import AboutTeam from '../sections/AboutTeam';
import AboutVision from '../sections/AboutVision';
import AboutMission from '../sections/AboutMission';
import AboutInfrastructure from '../sections/AboutInfrastructure';
import AboutLandBanks from '../sections/AboutLandBanks';
import AboutWhyChooseUs from '../sections/AboutWhyChooseUs';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Lands N Deeds - Expert Real Estate & Property Team in Tamil Nadu';

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
      'Learn about Lands N Deeds - Tamil Nadu\'s premier property platform. Backed by former IAS, IRS, DRO officers, and senior Advocates offering land due diligence, verification, and property consultation.'
    );
  }, []);

  return (
    <main className="pt-20 bg-white overflow-hidden">
      {/* 1. Header Banner & Section a: About Team */}
      <AboutHero />
      <AboutTeam />

      {/* 2. Section b: Our Vision */}
      <AboutVision />

      {/* 3. Section c: Our Mission */}
      <AboutMission />

      {/* 4. Section d: Infrastructure */}
      <AboutInfrastructure />

      {/* 5. Section e: Our Land Banks – Executed Projects */}
      <AboutLandBanks />

      {/* 6. Section f: Why Choose Lands N Deeds? */}
      <AboutWhyChooseUs />
    </main>
  );
};

export default About;
