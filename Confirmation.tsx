import { CircleCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="max-w-lg mx-auto card text-center">
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CircleCheck size={40} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--primary)]">Check-in Complete!</h2>
        <p className="text-gray-600 mt-2">
          Our team has been notified of your arrival
        </p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock size={20} className="text-[var(--primary)]" />
          <span className="font-medium">Estimated wait time: 15 minutes</span>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 border-t border-gray-200 pt-4">
          <div>Current time: 2:15 PM</div>
          <div>Expected: 2:30 PM</div>
        </div>
        
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-[var(--primary)] h-2.5 rounded-full w-[25%]"></div>
        </div>
      </div>
      
      <div className="mb-8 text-left bg-[var(--secondary-light)] p-4 rounded-lg">
        <h3 className="font-medium text-[var(--primary)] mb-2">While you wait</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <div className="min-w-5 pt-0.5">•</div>
            <span>Please have your insurance card and ID ready</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="min-w-5 pt-0.5">•</div>
            <span>Free Wi-Fi available: "DentalClinic-Guest" (pw: smile123)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="min-w-5 pt-0.5">•</div>
            <span>Complimentary beverages are available in the waiting area</span>
          </li>
        </ul>
      </div>
      
      <div className="flex items-center justify-center gap-2 mb-4 text-sm text-[var(--primary)]">
        <MapPin size={16} />
        <span>Waiting Area - First Floor, Section A</span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/faq" className="btn btn-outline">
          View FAQs
        </Link>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
