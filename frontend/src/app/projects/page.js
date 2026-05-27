"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { 
  Code, Github, ExternalLink, Cpu, Database, 
  Terminal, Sparkles, FolderGit, Layout 
} from 'lucide-react';
import { getMediaUrl } from '@/utils/mediaUtils';

const filters = [
  'All',
  'Full-Stack',
  'AI & ML'
];

export default function ProjectsPage() {
  const { projects } = usePortfolio();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Group or map projects based on filter
  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Full-Stack') {
      return project.techStack.includes('Django') || project.techStack.includes('React');
    }
    if (selectedFilter === 'AI & ML') {
      const mlKeywords = ['yolov8', 'scikit-learn', 'opencv', 'pyttsx3', 'nlp', 'spacy'];
      return project.techStack.some(tech => mlKeywords.includes(tech.toLowerCase()));
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12 relative w-full">
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-glow-blue -z-10 rounded-full opacity-35" />
      <div className="absolute bottom-10 right-10 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-glow-purple -z-10 rounded-full opacity-25" />

      {/* Header */}
      <div className="text-left flex flex-col gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-wider w-fit">
          <Code className="w-3.5 h-3.5" /> Engineering & Code
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
          Developer <span className="text-gradient-purple-blue">Projects</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xl">
          A showcase of full-stack architectures, computer vision tools, machine learning pipelines, and aesthetic branding solutions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-thin border-b border-white/5">
        {filters.map((filter) => {
          const isActive = selectedFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`relative px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer z-10 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter}
              {isActive && (
                <motion.div
                  layoutId="activeProjectIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const mlKeywords = ['yolov8', 'scikit-learn', 'opencv', 'pyttsx3', 'nlp', 'spacy'];
            const isML = project.techStack.some(tech => mlKeywords.includes(tech.toLowerCase()));
            const Icon = isML ? Cpu : Database;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass rounded-2xl overflow-hidden border-white/5 group hover:border-blue-500/30 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-500 flex flex-col h-[480px]"
              >
                {/* Visual Header / Image Preview with Overlay */}
                <div className="h-44 relative bg-black overflow-hidden flex items-center justify-center">
                  <img 
                    src={getMediaUrl(project.thumbnail_file || project.thumbnail, 'image')} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-black/40 to-transparent" />
                  
                  {/* Technology Overlay Icon */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase text-blue-400 tracking-wider">
                    {isML ? 'AI / ML' : 'Web App'}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-lg font-black uppercase tracking-wide group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[9px] font-bold text-gray-300 uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-grow py-2.5 rounded-xl glass border-white/10 text-center text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code Repository
                      </a>

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="glass rounded-3xl py-24 px-4 text-center border-white/5 max-w-lg mx-auto w-full">
          <FolderGit className="w-10 h-10 text-blue-400 animate-pulse mx-auto mb-4" />
          <h3 className="text-white text-lg font-bold uppercase">No projects found</h3>
          <p className="text-gray-500 text-xs mt-1">
            Try switching filter tags or upload a new coding asset in the Admin Dashboard!
          </p>
        </div>
      )}
    </div>
  );
}

