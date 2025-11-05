import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import WaitlistForm from './components/WaitlistForm';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsWaitlistOpen(true);
    };

    window.addEventListener('openWaitlist', handleOpenWaitlist);
    return () => {
      window.removeEventListener('openWaitlist', handleOpenWaitlist);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="py-8 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">WorkBridg</h3>
                <p className="text-gray-400">
                  Connecting talented freelancers with businesses for seamless project collaboration.
                </p>
                <p className="mt-4 text-gray-400">
                  WorkBridg – Registered under Udyam MSME
                  <br />
                  (Udyam Reg. No: UDYAM-HR-05-0163879)
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                  <li>
                    <button 
                      onClick={() => setIsWaitlistOpen(true)}
                      className="text-gray-400 hover:text-white transition text-left"
                    >
                      Join Waitlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} WorkBridg. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
        {/* Waitlist Form Modal */}
        {isWaitlistOpen && (
          <WaitlistForm onClose={() => setIsWaitlistOpen(false)} />
        )}
        
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;
