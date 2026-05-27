"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu, Video, Paintbrush, Code, Award, Target,
  Calendar, CheckCircle, Sparkles, BookOpen
} from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const tools = [
  {
    name: 'CapCut & DaVinci',
    category: 'Video Editing',
    percentage: 95,
    color: 'from-purple-500 to-indigo-500',
    glow: 'rgba(168, 85, 247, 0.4)',
    desc: 'Specialist in rapid velocity ramps, foley sound mixing, advanced green-screen masks, and vertical short-form typography.'
  },
  {
    name: 'Photoshop',
    category: 'Creative Design',
    percentage: 75,
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.4)',
    desc: 'High-end color matching, double-exposures, creative poster composition, and aesthetic brand kit guidelines.'
  },
  {
    name: 'Canva',
    category: 'Social Media Management',
    percentage: 92,
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.4)',
    desc: 'Scalable marketing decks, collaborative client content libraries, dynamic story slides, and lightning-fast mockups.'
  },
  {
    name: 'React & Next.js',
    category: 'Frontend Engineering',
    percentage: 85,
    color: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6, 182, 212, 0.4)',
    desc: 'Highly interactive states, Framer Motion layouts, responsive CSS grid configurations, and optimized SEO bundles.'
  },
  {
    name: 'Django & Python',
    category: 'Backend Development',
    percentage: 95,
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'REST API architectures, custom cache filters, secure SQLite/Postgres schemas, and background job queues.'
  }
];



export default function AboutPage() {
  const { milestones } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-24 relative w-full">
      {/* Background glow Node */}
      <div className="absolute top-10 left-10 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-glow-purple -z-10 rounded-full opacity-35" />

      {/* 1. Personal Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">

        {/* Bio Text */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-[10px] font-black uppercase tracking-wider w-fit">
            <Cpu className="w-3.5 h-3.5" /> Who is Anandu Ajithkumar?
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
            A Creative Brain <br />
            Powered by <span className="text-gradient-purple-blue">Clean Logic</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I am a multi-disciplinary visual artist and full-stack engineer. I believe that modern software shouldn't just be robust—it needs to look and feel premium. Conversely, creative videography shouldn't just be pretty—it must be backed by data-driven SMM strategy to optimize engagement.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Starting as a self-taught motion designer and editor, I learned to blend timing, audio foley, and dramatic framing to capture attention. To scale my creations, I transitioned into coding, mastering Python, Django, and modern React architectures. Today, I build the systems that serve the media I create.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { label: 'Creative Editing', desc: 'CapCut velocity, foley layers, pacing.' },
              { label: 'Web Systems', desc: 'React layouts, Django backend APIs.' },
            ].map((focus, i) => (
              <div key={i} className="flex gap-2.5 items-start">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold uppercase tracking-wide">{focus.label}</span>
                  <span className="text-gray-500 text-[11px] mt-0.5">{focus.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Mock Photo Container */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass border-purple-500/20 shadow-2xl flex items-center justify-center bg-black group">
          <img
            src="/20250906_115852(0).jpg"
            alt="Anandu Ajithkumar Creative Editor + Developer"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Glass floating card */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border-white/10 text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white text-xs font-black uppercase tracking-wider">Anandu Ajithkumar</span>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Interactive Skill Cards */}
      <section className="flex flex-col gap-12 w-full">
        <div className="text-center flex flex-col gap-4">
          <span className="text-xs font-black uppercase tracking-widest text-purple-400">Toolkit & Stack</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Production Arsenal</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A curated list of design applications, video software, and programming frameworks I employ on a daily basis to build and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass p-5 rounded-2xl border-white/5 relative group text-left flex flex-col justify-between min-h-[220px]"
            >
              <div
                className="absolute top-0 left-0 w-full h-full -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 10%, ${tool.glow} 0%, transparent 60%)`
                }}
              />

              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">{tool.category}</span>
                <h3 className="text-white font-extrabold text-lg uppercase tracking-wide group-hover:text-purple-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-4 mt-1">
                  {tool.desc}
                </p>
              </div>

              {/* Progress and percentage meter */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mb-1">
                  <span>PROFICIENCY</span>
                  <span className="text-white">{tool.percentage}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full bg-gradient-to-r ${tool.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Timeline / Experience Section */}
      <section className="flex flex-col gap-12 w-full relative">
        <div className="absolute bottom-10 right-10 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-glow-blue -z-10 rounded-full opacity-35" />

        <div className="text-left flex flex-col gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-purple-400">Milestones</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Experience Timeline</h2>
          <p className="text-gray-400 text-sm max-w-lg">
            A look back at the roles, events, and consulting opportunities that allowed me to sharpen my editing and dev workflows.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto w-full flex flex-col gap-8 pl-8 md:pl-12 border-l border-white/10 mt-4">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group text-left"
            >
              {/* Timeline bubble bullet */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#030014] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:border-purple-400 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
              </div>

              <div className="flex flex-col gap-2 glass p-6 rounded-2xl border-white/5 hover:border-purple-500/20 transition-all">
                <span className="text-xs font-black text-purple-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {milestone.year}
                </span>

                <h3 className="text-white text-xl font-extrabold uppercase tracking-wide">
                  {milestone.role}
                </h3>

                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  {milestone.company}
                </span>

                <p className="text-gray-400 text-xs leading-relaxed mt-2 border-t border-white/5 pt-3">
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Passion Pitch / Callout */}
      <section className="glass rounded-3xl p-8 md:p-12 border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-left max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-2.5 max-w-xl">
          <span className="text-xs font-black uppercase tracking-widest text-purple-400 flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> Continuous Learning</span>
          <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tight">
            Currently Diving Deeper Into AI-Powered Creative Renders
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            I am actively building real-time CV pipelines mapping Python datasets to web interfaces. My goal is to make every tool highly accessible with intuitive audio feedback loops.
          </p>
        </div>
        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white text-4xl shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <Award className="w-10 h-10 animate-bounce" />
        </div>
      </section>

    </div>
  );
}

