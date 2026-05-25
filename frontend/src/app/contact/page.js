"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { 
  Mail, MessageSquare, Instagram, Linkedin, Send, 
  CheckCircle, Sparkles, AlertCircle, Phone 
} from 'lucide-react';

import * as LucideIcons from 'lucide-react';

export default function ContactPage() {
  const { addContactSubmission, contactChannels } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Video Editing',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all standard secure lines.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send directly to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1da7b78b-7bb8-4b31-8060-d267e1e9096c",
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Inquiry: ${formData.subject}`,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        addContactSubmission(formData); // Still save it locally to your dashboard
        setIsSubmitting(false);
        setSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: 'Video Editing',
          message: ''
        });

        // Clear success modal after 4 seconds
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setIsSubmitting(false);
        setError("Transmission failed. Please try again or use direct channels.");
      }
    } catch (err) {
      setIsSubmitting(false);
      setError("Network error. Could not connect to transmission servers.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12 relative w-full">
      {/* Background glow node */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-glow-purple -z-10 rounded-full opacity-35" />

      {/* Header */}
      <div className="text-left flex flex-col gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-[10px] font-black uppercase tracking-wider w-fit">
          <MessageSquare className="w-3.5 h-3.5" /> Secure Line
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
          Initiate <span className="text-gradient-purple-blue">Contact</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xl">
          Let's align. Send a secure brief to discuss video editing, SMM, or custom web architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left mt-4">
        
        {/* Left Column: Direct Access Channels */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Direct Channels</span>
          
          {(contactChannels && contactChannels.length > 0 ? contactChannels : []).map((ch, idx) => {
            const Icon = LucideIcons[ch.icon_name] || LucideIcons.Mail;
            return (
              <motion.a
                key={idx}
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className={`glass p-5 rounded-2xl border-white/5 flex gap-4 transition-all duration-300 ${ch.color_classes}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-current flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-xs font-black uppercase tracking-wider">{ch.name}</span>
                  <span className="text-white font-mono text-xs font-bold">{ch.value}</span>
                  <p className="text-gray-500 text-[10px] leading-relaxed mt-0.5">{ch.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Right Column: Secure Submission Form */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Secure Message Transmission</span>
          
          <div className="glass rounded-3xl p-6 md:p-8 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-glow-blue opacity-30 -mr-16 -mt-16 rounded-full" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 z-10 relative">
              {error && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  {error}
                </div>
              )}

              {/* Success Feedback Modal Bubble */}
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-950/40 border border-green-500/30 text-green-300 text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Message sent successfully! I'll get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grid name & email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Your Identity Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Anandu Dev"
                    className="w-full px-4 py-3 rounded-xl glass border-white/10 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Your Secure Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@agency.com"
                    className="w-full px-4 py-3 rounded-xl glass border-white/10 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Inquiry Category</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass border-white/10 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-colors bg-[#0a0a14] [&>option]:bg-[#0a0a14] [&>option]:text-white"
                >
                  <option value="Video Editing">Vertical Reel Editing Showcase</option>
                  <option value="SMM Management">Instagram SMM & Analytics Growth</option>
                  <option value="Full-Stack Dev">Django + React Custom App Development</option>
                  <option value="Creative Design">Brand Identity & Digital Poster Vectoring</option>
                </select>
              </div>

              {/* Secure Message Content */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">Transmission Payload Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Outline the specifications of your campaign, design vectors, or engineering deadlines..."
                  className="w-full px-4 py-3 rounded-xl glass border-white/10 text-xs text-white focus:outline-none focus:border-purple-500/50 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Action Trigger */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Transmitting Payload...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 fill-current group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Dispatch Secure Transmission
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

