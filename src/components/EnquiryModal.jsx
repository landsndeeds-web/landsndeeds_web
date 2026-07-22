import { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Buy Property',
    location: 'Coimbatore',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-[#D6B97B]/20 overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1A335E] hover:text-white transition-colors z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1A335E]">Enquiry Submitted!</h3>
            <p className="text-gray-600 text-sm">
              Thank you for reaching out to Lands n Deeds. Our real estate expert will get in touch with you shortly.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-6">
              <span className="text-[#D6B97B] font-bold text-xs uppercase tracking-widest block mb-1">
                Lands N Deeds Consultation
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1A335E]">
                Get In Touch With Our Experts
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Verified property assistance across Tamil Nadu
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D6B97B] focus:ring-1 focus:ring-[#D6B97B] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D6B97B] focus:ring-1 focus:ring-[#D6B97B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Requirement / Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-[#D6B97B] focus:ring-1 focus:ring-[#D6B97B] transition-all cursor-pointer"
                  >
                    <option value="Buy Property">Buy Property</option>
                    <option value="Sell Property">Sell Property</option>
                    <option value="Lease Property">Lease Property</option>
                    <option value="Post Property">Post Property</option>
                    <option value="Valuation">Valuation</option>
                    <option value="Legal Docs / Patta">Legal Docs / Patta</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Location Preference
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-[#D6B97B] focus:ring-1 focus:ring-[#D6B97B] transition-all cursor-pointer"
                >
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Salem">Salem</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Hosur">Hosur</option>
                  <option value="Erode">Erode</option>
                  <option value="Tiruppur">Tiruppur</option>
                  <option value="Other Tamil Nadu">Other Tamil Nadu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us more about your property needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D6B97B] focus:ring-1 focus:ring-[#D6B97B] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1A335E]/20 cursor-pointer"
              >
                <Send size={16} />
                Submit Enquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
