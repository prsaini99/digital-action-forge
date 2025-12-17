
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/scrollToTop";

// NRI Portal Pages
import NriPortal from "./pages/NriPortal";
import NriResearch from "./pages/NriResearch";
import NriStrategy from "./pages/NriStrategy";
import NriProposal from "./pages/NriProposal";
import NriProjects from "./pages/NriProjects";

// Credentials Page
import Creds from "./pages/Creds";

// Proposals
import LittleCaesarsProposal from "./pages/LittleCaesarsProposal";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isProposalPage = location.pathname.startsWith('/proposals/');
  const isCredsPage = location.pathname === '/creds';
  return (
    <>
      <ScrollToTop />
      {!isProposalPage && !isCredsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* NRI Portal Routes - still accessible but no navigation to them */}
        <Route path="/nri-portal" element={<NriPortal />} />
        <Route path="/nri-portal/research" element={<NriResearch />} />
        <Route path="/nri-portal/strategy" element={<NriStrategy />} />
        <Route path="/nri-portal/proposal" element={<NriProposal />} />
        <Route path="/nri-portal/projects" element={<NriProjects />} />
        
        {/* Proposal Pages - no navigation from main site */}
        <Route path="/proposals/little-caesars" element={<LittleCaesarsProposal />} />
        
        {/* Credentials Page - no navigation from main site */}
        <Route path="/creds" element={<Creds />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isProposalPage && !isCredsPage && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
