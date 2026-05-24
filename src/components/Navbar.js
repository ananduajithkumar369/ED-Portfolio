"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Film, TrendingUp, Code, User, Mail, 
  LayoutDashboard, Award, Sparkles 
} from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Sparkles },
  { name: 'About', path: '/about', icon: User },
  { name: 'Works', path: '/works', icon: Film },
  { name: 'Projects', path: '/projects', icon: Code },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track page scroll to toggle background solidness
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300">
      <nav className={`mx-auto max-w-7xl rounded-full transition-all duration-300 px-6 py-3 ${
        scrolled 
          ? 'glass-dark border-[rgba(168,85,247,0.3)] shadow-[0_10px_30px_rgba(3,0,20,0.8),0_0_15px_rgba(168,85,247,0.1)]' 
          : 'glass border-[rgba(255,255,255,0.05)]'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform duration-300">
              <span className="font-black text-white text-lg tracking-tighter">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-sm tracking-wider group-hover:text-purple-400 transition-colors duration-300 uppercase">ANANDU AJITHKUMAR</span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Editor + Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className="relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors duration-300 uppercase flex items-center gap-1.5 z-10 hover:text-white"
                  style={{ color: isActive ? '#ffffff' : '#94a3b8' }}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-400' : 'text-gray-400'}`} />
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[rgba(168,85,247,0.2)] to-[rgba(59,130,246,0.2)] border border-[rgba(168,85,247,0.3)] rounded-full -z-10 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Social CTAs on Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/contact"
              className="px-5 py-2 text-xs font-bold uppercase rounded-full glass border-purple-500/30 text-purple-200 hover:text-white transition-all duration-300 hover:border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
            >
              Let's Create
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 z-40 rounded-3xl glass-dark border-[rgba(168,85,247,0.35)] shadow-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.path}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-[rgba(168,85,247,0.2)] to-[rgba(59,130,246,0.2)] border border-[rgba(168,85,247,0.35)] text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400 animate-pulse' : 'text-gray-400'}`} />
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="h-[1px] bg-white/10 my-1" />
            
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-xs font-bold uppercase rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              Get In Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
