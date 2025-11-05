import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import toast from 'react-hot-toast';

interface WaitlistFormProps {
  onClose: () => void;
}

export default function WaitlistForm({ onClose }: WaitlistFormProps) {
  const [formType, setFormType] = useState<'freelancer' | 'client'>('freelancer');
  const [freelancerData, setFreelancerData] = useState({
    name: "",
    email: "",
    field: "",
    experience: "",
    phone: "",
    portfolio: "",
  });

  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    company: "",
    years: "",
    phone: "",
    portfolio: "",
  });

  const handleChange = (type: 'freelancer' | 'client', field: string, value: string) => {
    if (type === 'freelancer') {
      setFreelancerData({ ...freelancerData, [field]: value });
    } else {
      setClientData({ ...clientData, [field]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      formType,
      data: formType === "freelancer" ? freelancerData : clientData,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Thank you for joining our waitlist!");
        if (formType === "freelancer") {
          setFreelancerData({ name: "", email: "", field: "", experience: "", phone: "", portfolio: "" });
        } else {
          setClientData({ name: "", email: "", company: "", years: "", phone: "", portfolio: "" });
        }
        onClose();
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="rounded-2xl shadow-2xl overflow-hidden bg-white">
          <CardContent className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Join the Waitlist</h3>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Switch Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <Button 
                variant={formType === 'freelancer' ? 'black' : 'outline'}
                onClick={() => setFormType('freelancer')}
                className="rounded-xl px-6 py-2"
              >
                I'm a Freelancer
              </Button>
              <Button 
                variant={formType === 'client' ? 'black' : 'outline'}
                onClick={() => setFormType('client')}
                className="rounded-xl px-6 py-2"
              >
                I'm a Client
              </Button>
            </div>

            {/* Forms */}
            {formType === 'freelancer' ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={freelancerData.name} 
                    onChange={(e) => handleChange("freelancer", "name", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={freelancerData.email} 
                    onChange={(e) => handleChange("freelancer", "email", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Field of Work" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={freelancerData.field} 
                    onChange={(e) => handleChange("freelancer", "field", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Years of Experience" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={freelancerData.experience} 
                    onChange={(e) => handleChange("freelancer", "experience", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={freelancerData.phone} 
                    onChange={(e) => handleChange("freelancer", "phone", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="url" 
                    placeholder="Portfolio/Website (Optional)" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={freelancerData.portfolio} 
                    onChange={(e) => handleChange("freelancer", "portfolio", e.target.value)} 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl py-3 text-lg font-medium bg-black hover:bg-gray-800 transition"
                >
                  Join as Freelancer
                </Button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={clientData.name} 
                    onChange={(e) => handleChange("client", "name", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={clientData.email} 
                    onChange={(e) => handleChange("client", "email", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={clientData.company} 
                    onChange={(e) => handleChange("client", "company", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Years in Business" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={clientData.years} 
                    onChange={(e) => handleChange("client", "years", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={clientData.phone} 
                    onChange={(e) => handleChange("client", "phone", e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="url" 
                    placeholder="Company Website (Optional)" 
                    className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-black focus:border-transparent transition"
                    value={clientData.portfolio} 
                    onChange={(e) => handleChange("client", "portfolio", e.target.value)} 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl py-3 text-lg font-medium bg-black hover:bg-gray-800 transition"
                >
                  Join as Client
                </Button>
              </form>
            )}

            <p className="mt-4 text-center text-sm text-gray-500">
              By joining, you agree to our{' '}
              <a href="/terms" className="text-black hover:underline" onClick={(e) => e.stopPropagation()}>
                Terms & Conditions
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
