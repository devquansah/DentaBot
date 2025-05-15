import { useState } from 'react';
import { Squircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CheckIn() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    appointmentTime: '',
    phone: '',
    email: '',
    reason: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.dob) {
        setError('Please fill in all fields');
        return false;
      }
    } else if (step === 2) {
      if (!formData.appointmentTime) {
        setError('Please select your appointment time');
        return false;
      }
    } else if (step === 3) {
      if (!formData.phone && !formData.email) {
        setError('Please provide at least one contact method');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      // In a real app, this would connect to a backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Simulate alerting staff
      setTimeout(() => {
        navigate('/confirmation');
      }, 3000);
    }
  };

  return (
    <div className="max-w-lg mx-auto card">
      <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Patient Check-in</h2>
      
      {isSubmitted ? (
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-medium mb-2">Check-in Successful!</h3>
          <p className="text-gray-600 mb-4">
            We've notified our staff that you've arrived. Please have a seat in our waiting area.
          </p>
          <div className="animate-pulse flex justify-center">
            <div className="bg-[var(--secondary-light)] text-[var(--primary)] py-2 px-4 rounded-md">
              Notifying staff...
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="flex items-center gap-2 p-3 mb-4 bg-red-50 text-red-700 rounded-md">
              <Squircle size={20} />
              <span>{error}</span>
            </div>
          )}
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                    i < step ? 'bg-[var(--success)] text-white' : 
                    i === step ? 'bg-[var(--primary)] text-white' : 
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {i < step ? <Check size={16} /> : i}
                  </div>
                  <div className={`text-xs ${i === step ? 'text-[var(--primary)]' : 'text-gray-500'}`}>
                    {i === 1 ? 'Info' : i === 2 ? 'Appointment' : i === 3 ? 'Contact' : 'Confirm'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input-field"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input-field"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="input-field"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Appointment Time
                </label>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  className="input-field"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your appointment time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit (Optional)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  className="input-field"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Brief description of your dental concern"
                ></textarea>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
              <p className="text-sm text-gray-500 italic">
                Please provide at least one contact method above.
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Please confirm your information:</h3>
              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                <p><span className="font-medium">Date of Birth:</span> {formData.dob}</p>
                <p><span className="font-medium">Appointment Time:</span> {formData.appointmentTime}</p>
                {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}
                {formData.email && <p><span className="font-medium">Email:</span> {formData.email}</p>}
                {formData.reason && <p><span className="font-medium">Reason:</span> {formData.reason}</p>}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-outline"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary ml-auto"
              >
                Complete Check-in
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
