import { useOutletContext } from 'react-router-dom';
import Hero from '../sections/Hero';
import FeaturedProperties from '../sections/FeaturedProperties';
import PropertyCategoriesSection from '../sections/PropertyCategoriesSection';
import WhyChooseUs from '../sections/WhyChooseUs';
import PropertyServicesSection from '../sections/PropertyServicesSection';
import KnowledgeCentreSection from '../sections/KnowledgeCentreSection';
import CustomerTestimonialsSection from '../sections/CustomerTestimonialsSection';
import CTASectionWireframe from '../sections/CTASectionWireframe';

const Home = () => {
  const context = useOutletContext();
  const onOpenEnquiry = context?.onOpenEnquiry;

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section (Image 1 Wireframe) */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Featured Properties Section (Image 1 Wireframe) */}
      <FeaturedProperties onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Explore Property Categories (Image 2 Wireframe) */}
      <PropertyCategoriesSection />

      {/* 4. Why Choose Lands N Deeds (Image 2 Wireframe) */}
      <WhyChooseUs onOpenEnquiry={onOpenEnquiry} />

      {/* 5. Property Services (Image 3 Wireframe) */}
      <PropertyServicesSection onOpenEnquiry={onOpenEnquiry} />

      {/* 6. Property Knowledge Centre (Image 3 & 4 Wireframes) */}
      <KnowledgeCentreSection />

      {/* 7. Customer Testimonials (Image 4 Wireframe) */}
      <CustomerTestimonialsSection />

      {/* 8. Ready To Find Your Property CTA (Image 4 Wireframe) */}
      <CTASectionWireframe onOpenEnquiry={onOpenEnquiry} />
    </main>
  );
};

export default Home;
