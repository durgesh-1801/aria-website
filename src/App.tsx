import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileNavDrawer } from './components/MobileNavDrawer';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { HowItWorks } from './pages/HowItWorks';
import { PartnerWithUs } from './pages/PartnerWithUs';
import { PrivacyAndSafety } from './pages/PrivacyAndSafety';
import { TrustAndRecognition } from './pages/TrustAndRecognition';
import { TermsOfService } from './pages/TermsOfService';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <ScrollToTop />
        <MobileNavDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/privacy-and-safety" element={<PrivacyAndSafety />} />
          <Route path="/trust-and-recognition" element={<TrustAndRecognition />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* Fix #18: Proper 404 page instead of silent redirect */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;
