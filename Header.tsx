import { Menu, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[var(--primary)] text-white p-2 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-[var(--primary)]">DentalAI</h1>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/appointments" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
            Appointments
          </Link>
          <Link to="/faq" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
            FAQ
          </Link>
          <Link to="/about" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
            About Us
          </Link>
          <div className="bg-[var(--secondary-light)] p-2 rounded-full text-[var(--primary)]">
            <User size={20} />
          </div>
        </div>

        <button 
          className="md:hidden text-[var(--primary)]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/appointments" 
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Appointments
            </Link>
            <Link 
              to="/faq" 
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/about" 
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
