import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import ChunkErrorBoundary from './components/ChunkErrorBoundary';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Properties = lazy(() => import('./pages/Properties'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const StudioPage = lazy(() => import('./pages/StudioPage'));

const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[60vh] py-20 bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D6B97B]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ChunkErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Isolated Studio Route */}
            <Route path="/studio/*" element={<StudioPage />} />
            
            {/* Main Website Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </ChunkErrorBoundary>
    </Router>
  );
}

export default App;
