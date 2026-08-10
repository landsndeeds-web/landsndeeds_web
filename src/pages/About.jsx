import { Helmet } from 'react-helmet-async';
import AboutHero      from '../sections/AboutHero';
import AboutIntro     from '../sections/AboutIntro';
import AboutStory     from '../sections/AboutStory';
import AboutVision    from '../sections/AboutVision';
import AboutWhatWeDo  from '../sections/AboutWhatWeDo';
import AboutWhyChoose from '../sections/AboutWhyChoose';
import AboutValues    from '../sections/AboutValues';
import AboutHowWeWork from '../sections/AboutHowWeWork';
import AboutCTA       from '../sections/AboutCTA';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Lands N Deeds | Trusted Property Platform in Tamil Nadu</title>
        <meta
          name="description"
          content="Learn about Lands N Deeds, a trusted property platform helping buyers, sellers, investors and property owners with professional guidance, verified listings and transparent real estate solutions across Tamil Nadu."
        />
        <meta
          name="keywords"
          content="Trusted Property Platform in Tamil Nadu, Property Consultant in Coimbatore, Buy Sell Lease Property, Property Guidance, Property Investment, Verified Property Listings, Real Estate Services Tamil Nadu"
        />
        <link rel="canonical" href="https://www.landsndeeds.com/about" />
        {/* Open Graph */}
        <meta property="og:title" content="About Lands N Deeds | Trusted Property Platform in Tamil Nadu" />
        <meta
          property="og:description"
          content="Learn about Lands N Deeds, a trusted property platform helping buyers, sellers, investors and property owners with professional guidance, verified listings and transparent real estate solutions across Tamil Nadu."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-24 overflow-hidden">
        {/* 1. Hero */}
        <AboutHero />

        {/* 2. Who We Are */}
        <AboutIntro />

        {/* 3. Our Story */}
        <AboutStory />

        {/* 4. Our Vision */}
        <AboutVision />

        {/* 5. What We Do */}
        <AboutWhatWeDo />

        {/* 6. Why Choose Us */}
        <AboutWhyChoose />

        {/* 7. Our Values */}
        <AboutValues />

        {/* 8. How We Work */}
        <AboutHowWeWork />

        {/* 9. Final CTA */}
        <AboutCTA />
      </div>
    </>
  );
};

export default About;
