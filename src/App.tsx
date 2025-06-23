import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Parts from "./pages/Parts";
import Vehicles from "./pages/Vehicles";
import ImportProcess from "./pages/ImportProcess";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={
              <>
                <Navigation />
                <About />
                <Footer />
              </>
            } />
            <Route path="/parts" element={
              <>
                <Navigation />
                <Parts />
                <Footer />
              </>
            } />
            <Route path="/vehicles" element={
              <>
                <Navigation />
                <Vehicles />
                <Footer />
              </>
            } />
            <Route path="/import-process" element={
              <>
                <Navigation />
                <ImportProcess />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Navigation />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
