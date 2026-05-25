"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { 
  Play, Instagram, TrendingUp, Eye, ArrowUpRight, 
  Film, Palette, Calendar, Share2, Sparkles, X
} from 'lucide-react';

const categories = [
  'Reel Editing',
  'Posters & Creatives',
  'Social Media Management'
];

const getDirectUrl = (url, type = 'image') => {
  if (!url) return '';
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    if (type === 'video') {
      return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
    } else {
      return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1000`;
    }
  }
  return url;
};

export default function WorksPage() {
  const { getAllWorks } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('Reel Editing');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (work) => {
    const targetUrl = work.video_file || work.videoUrl || work.link;
    if (targetUrl && (targetUrl.includes('instagram.com') || targetUrl.includes('youtube.com') || targetUrl.includes('youtu.be'))) {
      window.open(targetUrl, '_blank');
    } else {
      setSelectedMedia(work);
    }
  };

  // Get all works from our global Context
  const allWorks = getAllWorks();

  // Filter works dynamically
  const filteredWorks = selectedCategory === 'All'
    ? allWorks
    : allWorks.filter(work => work.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12 relative w-full">
      {/* Background glow overlay */}
      <div className="absolute top-20 right-10 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-glow-purple -z-10 rounded-full opacity-30" />
      
      {/* Page Header */}
      <div className="text-left flex flex-col gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-[10px] font-black uppercase tracking-wider w-fit">
          <Film className="w-3.5 h-3.5" /> Creative Catalog
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
          Selected <span className="text-gradient-purple-blue">Creations</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-xl">
          Explore a curated showcase of cinematic save the date films, travel trek reels, promotional poster designs, and results-oriented social media pages and channels.
        </p>
      </div>

      {/* Category Tabs / Filter */}
      <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-thin border-b border-white/5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer z-10 ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full -z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Works Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => {
            const hasVideo = !!(work.video_file || work.videoUrl);
            
            return (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCard(work.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass rounded-2xl overflow-hidden border-white/5 group hover:border-purple-500/30 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-500 flex flex-col h-[450px]"
              >
                {/* Visual Viewport with Video Autoplay Mockup */}
                <div className="h-60 relative overflow-hidden bg-black flex items-center justify-center">
                  
                  {hasVideo ? (
                    <video 
                      className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCard === work.id ? 'scale-105' : 'opacity-80'}`}
                      src={getDirectUrl(work.video_file || work.videoUrl || work.link, 'video')} 
                      autoPlay={hoveredCard === work.id} 
                      loop 
                      muted 
                      playsInline 
                    />
                  ) : (
                    <img 
                      src={getDirectUrl(work.thumbnail_file || work.thumbnail || work.link, 'image')} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                    />
                  )}

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase text-gray-300 tracking-wider">
                    {work.category}
                  </div>
                  
                  {work.reach && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase text-purple-400 tracking-wider">
                      {work.reach} REACH
                    </div>
                  )}

                  {/* Autoplay Prompt Overlay for reels */}
                  {hasVideo && hoveredCard !== work.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-200 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Info Details */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-lg font-black uppercase tracking-wide group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-4 border-t border-white/5 pt-4">
                    {/* Metrics area */}
                    {(work.engagement) && (
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Growth Metrics</span>
                        <span className="text-green-400 font-bold flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {work.engagement}
                        </span>
                      </div>
                    )}

                    {/* Action Button */}
                    <button 
                      onClick={() => handleMediaClick(work)}
                      className="w-full py-2.5 rounded-xl glass border-purple-500/20 text-center text-[10px] font-black uppercase tracking-widest text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:border-transparent transition-all flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] mt-auto"
                    >
                      {hasVideo ? <Film className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {work.title?.includes('Footie Masterz') ? 'VIEW CHANNEL' :
                       (work.title?.includes('Heavenly Events') || work.title?.includes('Pramora Media')) ? 'VIEW PAGE' :
                       (hasVideo ? 'VIEW VIDEO' : 'VIEW POST')}
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {!!(selectedMedia.video_file || selectedMedia.videoUrl) ? (
                <video 
                  src={getDirectUrl(selectedMedia.video_file || selectedMedia.videoUrl || selectedMedia.link, 'video')} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                />
              ) : (
                <img 
                  src={getDirectUrl(selectedMedia.poster_file || selectedMedia.thumbnail_file || selectedMedia.thumbnail || selectedMedia.link, 'image')} 
                  alt={selectedMedia.title} 
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {filteredWorks.length === 0 && (
        <div className="glass rounded-3xl py-24 px-4 text-center border-white/5 max-w-lg mx-auto w-full">
          <Sparkles className="w-10 h-10 text-purple-400 animate-bounce mx-auto mb-4" />
          <h3 className="text-white text-lg font-bold uppercase">No items in this category yet</h3>
          <p className="text-gray-500 text-xs mt-1">
            Use the Admin Dashboard tab to upload new video edits or social promotions!
          </p>
        </div>
      )}
    </div>
  );
}

