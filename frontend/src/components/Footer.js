"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUpRight, Flame, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full border-t border-[rgba(255,255,255,0.06)] bg-[#030014]/80 backdrop-blur-md py-12 md:py-16 px-4 md:px-8 mt-auto z-10 overflow-hidden">
      {/* Background glow node */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-glow-purple -z-10 rounded-full opacity-40" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              <span className="font-black text-white text-lg tracking-tighter">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-sm tracking-wider uppercase text-left">ANANDU AJITHKUMAR</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase text-left">Editor + Developer</span>
            </div>
          </Link>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/anandu-ajithkumar/', color: 'hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]' },
              { icon: Instagram, href: 'https://www.instagram.com/an4nduu_?igsh=cTlnMDExenJ2ZXE4', color: 'hover:text-pink-400 hover:border-pink-500/50 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a 
                  whileHover={{ y: -3, scale: 1.05 }}
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {currentYear} Anandu Ajithkumar. All rights reserved. Created for premium creators + builders.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & Passion
            </span>
            <button 
              onClick={handleScrollTop}
              className="text-purple-400 hover:text-purple-300 font-bold uppercase text-[10px] tracking-wider border-b border-purple-500/20 hover:border-purple-400 transition-colors"
            >
              Back to Top &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

