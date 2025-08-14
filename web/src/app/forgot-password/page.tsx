'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
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
    if (!email) { setError('Please enter your email'); return; }
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
    if (!newPassword || !confirmPassword) { setError('Fill both password fields'); return; }
    if (newPassword !== confirmPassword) { setError('Passwords do not match'); return; }
    setLoading(true); setError(''); setSuccess('');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSuccess('Password reset successfully! You can now login.');
    } finally { setLoading(false); }
  };

  const resendOtp = async () => {
    if (!canResend) return;
    setLoading(true); setError(''); setSuccess('');
    try {
      await new Promise((r) => setTimeout(r, 600));
      setCountdown(60);
      setCanResend(false);
      setSuccess('A new OTP has been sent to your email');
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
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Forgot Password</h1>

          {error && <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-3 mb-4">{error}</div>}
          {success && <div className="bg-green-50 text-green-800 border border-green-200 rounded-lg p-3 mb-4">{success}</div>}

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                />
              </div>
              <button onClick={sendOtp} disabled={loading} className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70">
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent tracking-widest text-center"
                />
                <p className="text-xs text-gray-500 mt-2">Time remaining: {countdown}s</p>
                <button onClick={resendOtp} disabled={!canResend || loading} className="mt-2 text-sm text-[#2E7D32] hover:underline disabled:opacity-50">
                  Resend OTP
                </button>
              </div>
              <button onClick={verifyOtp} disabled={loading} className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70">
                {loading ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          )}

          {step === 3 && (
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                />
              </div>
              <button onClick={resetPassword} disabled={loading} className="w-full bg-[#2E7D32] text-white py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-70">
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
              <Link href="/login" className="block text-center text-sm text-[#2E7D32] hover:underline">
                Back to login
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

