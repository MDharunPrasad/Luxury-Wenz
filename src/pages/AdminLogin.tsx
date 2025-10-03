import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Allow any email and password for demo purposes
      if (email.trim() && password.trim()) {
        // Set admin token
        localStorage.setItem('admin_token', 'dummy_admin_token');
        
        toast.success('Login successful!');
        
        // Redirect to admin dashboard
        navigate('/admin');
        return;
      } else {
        toast.error('Please enter both email and password');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to login. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald via-emerald/90 to-emerald/80">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/95 via-emerald/85 to-jet/90"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        
        {/* Floating luxury elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-champagne/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-champagne/15 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
        
        {/* Luxury diagonal lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full transform -skew-y-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-20 left-0 w-full h-full transform skew-y-12 bg-gradient-to-r from-transparent via-champagne/10 to-transparent"></div>
        </div>
        
        {/* Radial overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(30,48,94,0.3)_100%)]"></div>
      </div>
      
      {/* Luxury logo watermark */}
      <div className="absolute top-8 left-8 flex items-center space-x-3 text-white/30">
        <div className="w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20">
          <span className="text-xl font-bold font-playfair">LW</span>
        </div>
        <div>
          <h1 className="text-xl font-bold font-playfair">Luxury Wenz</h1>
          <p className="text-sm opacity-80">Premium Real Estate</p>
        </div>
      </div>

      {/* Main login content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Glass morphism card */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-champagne/5 rounded-3xl"></div>
            
            <div className="relative p-8">
              {/* Luxury header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-champagne via-champagne/90 to-champagne/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-champagne/25 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl font-playfair">LW</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 font-playfair tracking-wide">Welcome Back</h2>
                <p className="text-white/70 text-sm">Access your luxury property dashboard</p>
              </div>
              
              {/* Luxury form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-champagne/50 focus:border-champagne transition-all duration-300 text-white placeholder-white/50"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-champagne/50 focus:border-champagne transition-all duration-300 text-white placeholder-white/50 pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-champagne transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-champagne via-champagne/90 to-champagne/80 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:shadow-champagne/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      'Access Dashboard'
                    )}
                  </button>
                </div>
              </form>
              
              {/* Demo info */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-champagne rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white/80 text-sm font-medium">Enter any credentials to continue</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
