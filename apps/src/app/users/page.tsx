"use client";
import { User, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { createUser } from '../lib/api';

export default function UsersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(name, email);
      alert('User created successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Failed to create user', error);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg backdrop-blur-sm bg-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 space-y-8 border border-white/20">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Create Account
          </h1>
          <p className="text-blue-200/80">
            Join our community and start your journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full h-14 pl-11 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-14 pl-11 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Create User
          </button>
        </form>

        <div className="pt-4 text-center">
          <p className="text-blue-200/60 text-sm">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-blue-300 hover:text-blue-200 underline-offset-4 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-300 hover:text-blue-200 underline-offset-4 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
