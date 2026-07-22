import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import EnquiryModal from '../components/EnquiryModal';
import ScrollToTop from '../components/ScrollToTop';
import SmoothScroll from '../components/SmoothScroll';
import CursorGlow from '../components/CursorGlow';

const MainLayout = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState('');

  const handleOpenEnquiry = (serviceName = 'Buy Property') => {
    setEnquiryService(serviceName);
    setIsEnquiryOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="bg-[#FAFAFA] text-[#111111] min-h-screen relative flex flex-col justify-between font-sans">
        <CursorGlow />
        
        {/* Navigation Bar */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Page Content */}
        <main className="flex-grow">
          <Outlet context={{ onOpenEnquiry: handleOpenEnquiry }} />
        </main>

        {/* Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Sticky Action Bar for Mobile Screens (Image 5 Wireframe Requirement) */}
        <StickyMobileBar onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Enquiry & Post Property Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          initialService={enquiryService}
        />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
