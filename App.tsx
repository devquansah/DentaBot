import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CheckIn from './components/CheckIn';
import FAQ from './components/FAQ';
import WaitTimes from './components/WaitTimes';
import Confirmation from './components/Confirmation';

export function App() {
  const location = useLocation();

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--background)]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      
      <main className="pt-20 pb-12 px-4">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wait-times" element={<WaitTimes />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <div className="mb-2">
            <span className="font-medium text-[var(--primary)]">DentalAI</span> - Intelligent Reception System
          </div>
          <div>
            © {new Date().getFullYear()} DentalAI Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
