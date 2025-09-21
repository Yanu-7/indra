import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

import Homepage from "./page/homepage-developer-portfolio-launch-pad";
import AboutDigitalCraftsmanStory from "./page/about-digital-craftsman-story";
import PortfolioInteractiveProjectUniverse from "./page/portfolio-interactive-project-universe";
import ServicesPage from "./page/services-comprehensive-digital-solutions-hub";
import ContactMultiChannelCommunicationHub from "./page/contact-multi-channel-communication-hub";
import NotFound from "./page/NotFound";
const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutDigitalCraftsmanStory />} />
          <Route path="/portfolio" element={<PortfolioInteractiveProjectUniverse />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactMultiChannelCommunicationHub />} />
          <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
