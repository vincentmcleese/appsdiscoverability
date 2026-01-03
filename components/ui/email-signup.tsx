'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual integration later
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 px-6 py-3 bg-[rgb(27,200,140)]/10 border border-[rgb(27,200,140)]/30 rounded-full">
        <Check className="w-5 h-5 text-[rgb(27,200,140)]" />
        <span className="text-slate-700 font-medium">You're on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder="Enter your email"
          className="px-4 py-2.5 bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none w-[180px] sm:w-[220px] md:w-[280px]"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "group relative flex items-center gap-1 overflow-hidden rounded-full px-4 sm:px-6 py-2.5 text-sm font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap",
            "bg-brand-gradient text-white hover:opacity-90 active:scale-[0.97]",
            isLoading && "opacity-70 cursor-not-allowed"
          )}
        >
          <span className="relative z-[1]">
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </span>
          {!isLoading && (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </form>
  );
}


