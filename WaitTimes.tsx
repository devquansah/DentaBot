import { Clock, Users } from 'lucide-react';
import { format } from 'date-fns';

const currentTime = new Date();
const waitTimes = [
  { 
    doctorName: "Dr. Sarah Johnson", 
    specialty: "General Dentist",
    waitTime: 15, 
    nextAvailable: new Date(currentTime.getTime() + 15 * 60000),
    patients: 3
  },
  { 
    doctorName: "Dr. Michael Chen", 
    specialty: "Orthodontist",
    waitTime: 25, 
    nextAvailable: new Date(currentTime.getTime() + 25 * 60000),
    patients: 4
  },
  { 
    doctorName: "Dr. Lisa Patel", 
    specialty: "Pediatric Dentist",
    waitTime: 5, 
    nextAvailable: new Date(currentTime.getTime() + 5 * 60000),
    patients: 1
  },
  { 
    doctorName: "Dr. James Wilson", 
    specialty: "Oral Surgeon",
    waitTime: 40, 
    nextAvailable: new Date(currentTime.getTime() + 40 * 60000),
    patients: 2
  }
];

export default function WaitTimes() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-2">Current Wait Times</h2>
        <p className="text-gray-600">
          Last updated: {format(new Date(), 'h:mm a')}
        </p>
      </div>
      
      <div className="space-y-4">
        {waitTimes.map((doctor, index) => {
          // Calculate color based on wait time
          let waitColor = 'bg-green-100 text-green-800';
          if (doctor.waitTime > 30) {
            waitColor = 'bg-red-100 text-red-800';
          } else if (doctor.waitTime > 15) {
            waitColor = 'bg-yellow-100 text-yellow-800';
          }
          
          return (
            <div key={index} className="card flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-lg">{doctor.doctorName}</h3>
                <p className="text-gray-500 text-sm">{doctor.specialty}</p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-gray-500" />
                  <span className="text-gray-700">{doctor.patients} ahead</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className={`px-3 py-1.5 rounded-full font-medium ${waitColor}`}>
                    {doctor.waitTime} min wait
                  </div>
                  <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Clock size={12} />
                    <span>Next at {format(doctor.nextAvailable, 'h:mm a')}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card bg-[var(--secondary-light)]">
          <h3 className="font-medium text-lg text-[var(--primary)] mb-3">
            What to expect
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="bg-white rounded-full p-1 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              </div>
              <span>Wait times are estimated and may change.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-white rounded-full p-1 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              </div>
              <span>Emergency cases may cause delays.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-white rounded-full p-1 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              </div>
              <span>Check in 15 minutes before your appointment.</span>
            </li>
          </ul>
        </div>
        
        <div className="card border border-[var(--primary)] bg-white">
          <h3 className="font-medium text-lg text-[var(--primary)] mb-3">
            Reducing wait time
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="bg-[var(--secondary-light)] rounded-full p-1 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              </div>
              <span>Complete forms in advance online.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-[var(--secondary-light)] rounded-full p-1 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              </div>
              <span>Check in using the AI receptionist.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="bg-[var(--secondary-light)] rounded-full p-1 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              </div>
              <span>Arrive a few minutes early.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
