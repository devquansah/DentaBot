import { useState } from 'react';
import { CircleCheck, ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Delta Dental, Cigna, Aetna, and Blue Cross Blue Shield. Please contact our office for specific details about your plan's coverage."
  },
  {
    id: 2,
    question: "How often should I visit the dentist?",
    answer: "We recommend a check-up and cleaning every 6 months for most patients. Some patients with specific dental conditions may need more frequent visits as advised by their dentist."
  },
  {
    id: 3,
    question: "What should I do in case of a dental emergency?",
    answer: "Call our emergency line immediately at (555) 123-4567. For severe bleeding or trauma, go to the nearest emergency room. We reserve slots daily for emergency cases."
  },
  {
    id: 4,
    question: "Do you offer teeth whitening services?",
    answer: "Yes, we offer both in-office professional whitening and take-home whitening kits. Our dentists can recommend the best option based on your specific needs and goals."
  },
  {
    id: 5,
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. Regular check-ups and good oral hygiene are essential for their longevity."
  },
  {
    id: 6,
    question: "What age should children have their first dental visit?",
    answer: "We recommend children have their first dental visit by their first birthday or when their first tooth erupts, whichever comes first."
  },
  {
    id: 7,
    question: "How can I manage dental anxiety?",
    answer: "We offer various comfort options including noise-canceling headphones, weighted blankets, and sedation options for anxious patients. Please discuss your concerns with our team before your appointment."
  },
  {
    id: 8,
    question: "What payment options do you offer?",
    answer: "We accept cash, all major credit cards, and offer financing through CareCredit. We also have an in-house dental savings plan for patients without insurance."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-6">
          Find answers to common questions about our dental services, appointments, and more.
        </p>
        
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search questions..."
            className="input-field pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium text-[var(--text)]">{faq.question}</span>
                <ChevronDown 
                  className={`text-[var(--primary)] transition-transform ${openId === faq.id ? 'transform rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              {openId === faq.id && (
                <div className="p-4 pt-0 text-gray-600 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No matching questions found</h3>
            <p className="text-gray-500">Try adjusting your search or ask us directly.</p>
            <button className="btn btn-primary mt-4">
              Ask a New Question
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-12 p-6 card bg-[var(--secondary-light)] border-l-4 border-[var(--primary)]">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <CircleCheck size={24} className="text-[var(--primary)]" />
          </div>
          <div>
            <h3 className="font-medium text-[var(--primary)] mb-1">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-3">
              Our team is ready to answer any specific questions you might have about our services.
            </p>
            <button className="btn btn-primary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
