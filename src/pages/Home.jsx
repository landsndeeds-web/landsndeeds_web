import { useEffect } from 'react';
import Hero from '../sections/Hero';
import HomeSearchSection from '../sections/HomeSearchSection';
import PropertyCategories from '../sections/PropertyCategories';
import WhyChooseUs from '../sections/WhyChooseUs';
import FeaturedProperties from '../sections/FeaturedProperties';
import PropertyServices from '../sections/PropertyServices';
import KnowledgeCentre from '../sections/KnowledgeCentre';
import Testimonials from '../sections/Testimonials';
import HomeFinalCTA from '../sections/HomeFinalCTA';

const Home = () => {
  // SEO Meta Tags
  useEffect(() => {
    document.title = 'Property in Tamil Nadu | Buy, Sell & Lease with Lands N Deeds';

    const setMeta = (name, content, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta(
      'description',
      'Explore verified residential, commercial, agricultural and investment properties across Tamil Nadu. Buy, sell or lease properties with confidence through Lands N Deeds.'
    );
    setMeta('keywords', 'property in Tamil Nadu, buy property Tamil Nadu, sell property, lease property, property consultant, property platform, real estate services');
    setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:title', 'Property in Tamil Nadu | Buy, Sell & Lease with Lands N Deeds', false);
    setMeta('og:description', 'Explore verified residential, commercial, agricultural and investment properties across Tamil Nadu. Buy, sell or lease properties with confidence through Lands N Deeds.', false);
    setMeta('og:type', 'website', false);
    setMeta('og:url', 'https://www.landsndeeds.com/', false);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.landsndeeds.com/');

    return () => {
      document.title = 'Lands N Deeds';
    };
  }, []);

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Search Section */}
      <HomeSearchSection />

      {/* 3. Property Categories */}
      <PropertyCategories />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Featured Properties */}
      <FeaturedProperties />

      {/* 6. Property Services */}
      <PropertyServices />

      {/* 7. Knowledge Centre */}
      <KnowledgeCentre />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Final CTA */}
      <HomeFinalCTA />
    </main>
  );
};

export default Home;
