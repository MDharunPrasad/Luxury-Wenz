import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in real app, this would be handled by backend
    if (formData.password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials. Use password: admin123');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-neutral-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-neutral-900">Flaunt</h1>
              <p className="text-xs text-emerald-600 font-semibold tracking-wide">ADMIN PANEL</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Welcome Back</h2>
          <p className="text-neutral-600">Sign in to manage your properties and leads</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-100">
          {/* Login Type Toggle */}
          <div className="flex mb-6">
            <div className="bg-neutral-100 rounded-2xl p-1 flex w-full">
              <button
                type="button"
                onClick={() => setLoginType('email')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-medium transition-all duration-300 ${
                  loginType === 'email'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-neutral-600 hover:text-emerald-600'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
              <button
                type="button"
                onClick={() => setLoginType('phone')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-medium transition-all duration-300 ${
                  loginType === 'phone'
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-neutral-600 hover:text-emerald-600'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Phone Input */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                {loginType === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <div className="relative">
                {loginType === 'email' ? (
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                ) : (
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                )}
                <input
                  type={loginType === 'email' ? 'email' : 'tel'}
                  name={loginType}
                  required
                  value={loginType === 'email' ? formData.email : formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder={loginType === 'email' ? 'admin@flauntproperties.com' : '+91 98765 43210'}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-emerald-600 border-neutral-300 rounded focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-neutral-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Sign In to Dashboard
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-sm text-emerald-700 font-medium mb-2">Demo Credentials:</p>
            <p className="text-xs text-emerald-600">
              Email: admin@flauntproperties.com<br />
              Password: admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-500">
            © 2024 Flaunt Properties. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};