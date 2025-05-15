import { Calendar, ChevronRight, Clock, CircleHelp, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
          Welcome to our Dental Clinic
        </h1>
        <p className="text-lg text-gray-600">
          How can our AI receptionist assist you today?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Link to="/check-in" className="card hover:shadow-lg transition-all group">
          <div className="flex flex-col items-center p-4">
            <div className="bg-[var(--secondary-light)] p-4 rounded-full mb-4">
              <User size={32} className="text-[var(--primary)]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Check-in</h2>
            <p className="text-gray-600 mb-4">Already have an appointment? Check in here.</p>
            <ChevronRight className="text-[var(--primary)] transform group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link to="/appointments" className="card hover:shadow-lg transition-all group">
          <div className="flex flex-col items-center p-4">
            <div className="bg-[var(--secondary-light)] p-4 rounded-full mb-4">
              <Calendar size={32} className="text-[var(--primary)]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Schedule</h2>
            <p className="text-gray-600 mb-4">Book a new appointment with our dentists.</p>
            <ChevronRight className="text-[var(--primary)] transform group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link to="/faq" className="card hover:shadow-lg transition-all group">
          <div className="flex flex-col items-center p-4">
            <div className="bg-[var(--secondary-light)] p-4 rounded-full mb-4">
              <CircleHelp size={32} className="text-[var(--primary)]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">FAQs</h2>
            <p className="text-gray-600 mb-4">Find answers to common questions.</p>
            <ChevronRight className="text-[var(--primary)] transform group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link to="/wait-times" className="card hover:shadow-lg transition-all group">
          <div className="flex flex-col items-center p-4">
            <div className="bg-[var(--secondary-light)] p-4 rounded-full mb-4">
              <Clock size={32} className="text-[var(--primary)]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Wait Times</h2>
            <p className="text-gray-600 mb-4">Check current wait times for our dentists.</p>
            <ChevronRight className="text-[var(--primary)] transform group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
}
