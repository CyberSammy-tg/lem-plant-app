'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ChangePasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email] = useState('john@example.com'); // Pre-filled from profile
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (step === 2 && !canResend) {
      const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
      if (countdown <= 0) {
        setCanResend(true);
        setCountdown(0);
      }
      return () => clearTimeout(t);
    }
  }, [step, countdown, canResend]);

  const sendOtp = async () => {
    setLoading(true); setError(''); setSuccess('');
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setStep(2);
      setCountdown(60);
      setCanResend(false);
      setSuccess('A 6-digit OTP has been sent to your email');
    } finally { setLoading(false); }
  };

  const verifyOtp = async () => {
    if (!otp || otp.length !== 6) { setError('Enter the 6-digit OTP'); return; }
    setLoading(true); setError(''); setSuccess('');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStep(3);
    } finally { setLoading(false); }
  };

  const resetPassword = async () => {
    if (!newPassword || !confirmPassword) { setError('Please fill in all fields'); return; }
    if (newPassword !== confirmPassword) { setError('Passwords do not match'); return; }
    if (newPassword.length < 6) { setError('Password must be at least 6 characters'); return; }
    
    setLoading(true); setError(''); setSuccess('');
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSuccess('Password changed successfully!');
      setTimeout(() => window.location.href = '/profile', 2000);
    } finally { setLoading(false); }
  };

  const resendOtp = async () => {
    setLoading(true); setError(''); setSuccess('');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setCountdown(60);
      setCanResend(false);
      setSuccess('OTP resent to your email');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#2E7D32] to-[#388E3C] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="transition-transform duration-300 hover:scale-105">
              <span className="text-2xl font-bold text-white">🌱 Lem Plant</span>
            </Link>
            <Link 
              href="/profile" 
              className="text-white hover:text-green-200 transition-colors flex items-center gap-2"
            >
              Back to Profile
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Change Password</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-sm">{success}</p>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="text-gray-600 mb-6">
                We&apos;ll send a verification code to your email address to confirm your identity.
              </p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <button
                onClick={sendOtp}
                disabled={loading}
                className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Verification Code'}
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-gray-600 mb-6">
                Enter the 6-digit verification code sent to <strong>{email}</strong>
              </p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent text-center text-2xl tracking-widest"
                />
              </div>

              <button
                onClick={verifyOtp}
                disabled={loading || otp.length !== 6}
                className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70 mb-4"
              >
                {loading ? 'Verifying...' : 'Verify Code'}
              </button>

              <div className="text-center">
                {canResend ? (
                  <button
                    onClick={resendOtp}
                    disabled={loading}
                    className="text-[#2E7D32] hover:underline text-sm"
                  >
                    Resend Code
                  </button>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Resend code in {countdown} seconds
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="text-gray-600 mb-6">
                Create your new password. Make sure it&apos;s secure and easy to remember.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={resetPassword}
                disabled={loading}
                className="w-full mt-6 bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70"
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link href="/profile" className="text-sm text-gray-500 hover:text-gray-700">
              Cancel and return to profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
