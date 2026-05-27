"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Code, Award, Video, TrendingUp, Sparkles, 
  ArrowRight, Heart, Users, Calendar, ArrowUpRight,
  Film, Eye, X
import { usePortfolio } from '@/context/PortfolioContext';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

export default function HomePage() {
  const { reels, analyticsData, projects, testimonials, socials } = usePortfolio();
  const [hoveredReel, setHoveredReel] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (work) => {
    const targetUrl = work.video || work.link;
    if (targetUrl && (targetUrl.includes('instagram.com') || targetUrl.includes('youtube.com') || targetUrl.includes('youtu.be'))) {
      window.open(targetUrl, '_blank');
    } else {
      setSelectedMedia(work);
    }
  };

  // Take first 3 reels for featured section
  const featuredReels = reels.slice(0, 3);
  
  // Take first 2 projects for quick developer showcase
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col gap-24 overflow-hidden w-full">
      
      {/* 1. Fullscreen Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-glow-purple -z-10 rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-glow-blue -z-10 rounded-full opacity-60" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          {/* Tagline Badge */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            Anandu Ajithkumar | Creative Editor & Developer
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none text-white select-none"
          >
            Bridging <br className="hidden sm:inline" />
            <span className="text-gradient-purple-blue">Cinematic Edit</span> & <br className="hidden sm:inline" />
            <span className="text-gradient-neon">Modern Code</span>
          </motion.h1>

          {/* Subtitle / Pitch */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-xl font-medium max-w-2xl leading-relaxed"
          >
            I create viral social media campaigns, premium video compositions, and architect robust Django-React interfaces. A dual-threat creative bridging raw aesthetic and logic.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <Link 
              href="/works"
              className="px-8 py-4 rounded-full font-bold uppercase text-xs tracking-wider bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              View Works
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full font-bold uppercase text-xs tracking-wider glass border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute left-8 bottom-12 hidden lg:flex items-center gap-3 p-4 rounded-2xl glass border-purple-500/20"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400">
            <Video className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white text-xs font-bold">Cinematic Visuals</span>
            <span className="text-gray-400 text-[10px]">CapCut & Premiere</span>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute right-8 bottom-12 hidden lg:flex items-center gap-3 p-4 rounded-2xl glass border-blue-500/20"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
            <Code className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white text-xs font-bold">Robust Django Apps</span>
            <span className="text-gray-400 text-[10px]">React & Python</span>
          </div>
        </motion.div>
      </section>

      {/* 4. Featured Reels Showcase Grid */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="text-left flex flex-col gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-purple-400">Cinematic Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Trending Reels Showcase</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Hover over a card to preview high-retention, cinematic video edits crafted for maximum audience engagement.
            </p>
          </div>
          <Link 
            href="/works" 
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-400/20 hover:border-purple-300 pb-1"
          >
            Browse All Reels & Creatives
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReels.map((reel) => {
            const hasVideo = !!reel.video;
            return (
            <motion.div 
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredReel(reel.id)}
              onMouseLeave={() => setHoveredReel(null)}
              className="glass rounded-2xl overflow-hidden border-white/5 shadow-lg group hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-500 relative flex flex-col h-[420px]"
            >
              {/* Media Viewport */}
              <div className="h-56 relative overflow-hidden bg-black flex items-center justify-center">
                  {hasVideo ? (
                    <video 
                      className={`w-full h-full object-cover transition-transform duration-700 ${hoveredReel === reel.id ? 'scale-105' : 'opacity-80'}`}
                      src={reel.video} 
                      autoPlay={hoveredReel === reel.id} 
                      loop 
                      muted 
                      playsInline 
                      onError={(e) => {
                        // Fallback to thumbnail if video fails to load due to ORB or 404
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'block';
                        }
                      }}
                    />
                  ) : null}
                  <img 
                    src={reel.thumbnail} 
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                    style={{ display: hasVideo ? 'none' : 'block' }}
                  />
                  
                  {reel.reach && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase text-purple-400 tracking-wider">
                      {reel.reach} REACH
                    </div>
                  )}  

                  {hasVideo && hoveredReel !== reel.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}
              </div>

              {/* Card Details */}
              <div className="p-5 flex flex-col justify-between flex-grow text-left">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">{reel.category}</span>
                  <h3 className="text-white text-lg font-bold group-hover:text-purple-400 transition-colors uppercase leading-tight line-clamp-2">
                    {reel.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    {reel.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-4 border-t border-white/5 pt-4">
                  {/* Metrics area */}
                  {(reel.engagement) && (
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Growth Metrics</span>
                      <span className="text-green-400 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {reel.engagement}
                      </span>
                    </div>
                  )}
                  
                  {/* Action Button */}
                  <button 
                    onClick={() => handleMediaClick(reel)}
                    className="w-full py-2.5 rounded-xl glass border-purple-500/20 text-center text-[10px] font-black uppercase tracking-widest text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:border-transparent transition-all flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] mt-auto"
                  >
                    {hasVideo ? <Film className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {hasVideo ? 'VIEW VIDEO' : 'VIEW POST'}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Animated Statistics Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-glow-blue -z-10 rounded-full opacity-30" />
        
        <div className="text-center flex flex-col gap-4 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-purple-400">Impact Metrics</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Social Media & Coding Footprint</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            These numbers are not just analytics—they represent engagement growth and scalable tools crafted with precision.
          </p>
        </div>



        {/* Social Media Details */}
        {socials && socials.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {socials.map((social) => (
              <a 
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-2xl border-white/5 relative group hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all flex flex-col gap-4 text-left overflow-hidden block"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-glow-purple opacity-0 group-hover:opacity-20 transition-opacity rounded-full -mr-16 -mt-16" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                    <img src={social.thumbnail} alt={social.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase text-sm group-hover:text-purple-400 transition-colors line-clamp-1">{social.title}</h3>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-wider">{social.category}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Reach</span>
                    <span className="text-purple-300 font-black text-sm">{social.reach || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Views / Engagement</span>
                    <span className="text-green-400 font-black text-sm flex items-center justify-end gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {social.engagement || 'N/A'}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* 6. Developer Quick Highlight Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="glass-glow-blue rounded-3xl p-8 md:p-12 border-blue-500/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 text-left">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-glow-blue opacity-50 -mr-40 -mt-40 rounded-full" />
          
          {/* Pitch Text */}
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-wider w-fit">
              <Code className="w-3 h-3 animate-pulse" /> Architecture & APIs
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              Clean Code, <br />
              High Performance
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              When I'm not editing cinematic cuts, I compile high-scale databases and interactive reactive layouts. Specializing in Python Django Rest Framework backends and Next.js React frontend environments.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {['React', 'Next.js', 'Tailwind', 'Django API', 'PostgreSQL', 'YOLO v8'].map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <Link 
              href="/projects" 
              className="px-6 py-3 rounded-full font-bold uppercase text-[10px] tracking-wider bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all w-fit mt-4 flex items-center gap-1.5 group"
            >
              Browse Developer Projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Render Mock Code View */}
          <div className="w-full lg:w-1/2 z-10">
            <div className="glass-dark rounded-2xl border-white/5 overflow-hidden shadow-2xl font-mono text-xs text-left">
              <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between text-gray-500 text-[10px]">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-green-500/80" /></span>
                <span>anandu_api.py</span>
              </div>
              <div className="p-5 overflow-x-auto text-[10px] md:text-xs text-gray-300 leading-relaxed max-h-64">
                <p className="text-gray-500"># Premium Django ViewSet with High Performance caching</p>
                <p><span className="text-purple-400">from</span> rest_framework <span className="text-purple-400">import</span> viewsets</p>
                <p><span className="text-purple-400">from</span> django.core.cache <span className="text-purple-400">import</span> cache</p>
                <p className="text-blue-400">class <span className="text-green-400">PortfolioItemViewSet</span>(viewsets.ModelViewSet):</p>
                <p className="pl-4">serializer_class = PortfolioSerializer</p>
                <p className="pl-4">queryset = PortfolioItem.objects.filter(is_active=<span className="text-yellow-500">True</span>)</p>
                <br />
                <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">get_queryset</span>(self):</p>
                <p className="pl-8">cache_key = <span className="text-orange-300">'anandu_works_feed'</span></p>
                <p className="pl-8">cached_data = cache.get(cache_key)</p>
                <p className="pl-8 text-purple-400">if <span className="text-slate-300">cached_data:</span></p>
                <p className="pl-12 text-green-400">return <span className="text-slate-300">cached_data</span></p>
                <p className="pl-8">db_data = super().get_queryset()</p>
                <p className="pl-8">cache.set(cache_key, db_data, <span className="text-yellow-500">3600</span>)</p>
                <p className="pl-8"><span className="text-purple-400">return</span> db_data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
          <div className="text-center flex flex-col gap-2 mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-purple-400">Word on the Street</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Testimonials</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Real feedback from event organizers, founders, and creative directors I've collaborated with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border-white/5 shadow-lg group hover:border-purple-500/30 transition-all text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-glow-blue opacity-0 group-hover:opacity-20 transition-opacity rounded-full -mr-16 -mt-16" />
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
                    <img src={testimonial.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150'} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-white text-lg font-bold uppercase tracking-wide">{testimonial.name}</h4>
                    <span className="text-purple-400 text-xs font-black uppercase tracking-wider">{testimonial.role}</span>
                    <p className="text-gray-400 text-sm italic mt-2 leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Creative CTA banner */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="relative rounded-3xl overflow-hidden glass border-purple-500/20 py-16 px-8 md:px-16 text-center flex flex-col items-center gap-6 shadow-[0_0_35px_rgba(168,85,247,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 -z-10" />
          
          <h2 className="text-3xl md:text-6xl font-black uppercase text-white leading-none max-w-3xl">
            Have a project in mind? <br /> Let's craft absolute fire.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Whether you want custom Reels that trigger 100K+ reach, a sleek agency branding layout, or a high-performance custom React web dashboard—I've got you covered.
          </p>
          <Link 
            href="/contact" 
            className="px-10 py-4 rounded-full font-bold uppercase text-xs tracking-wider bg-white text-black shadow-lg hover:scale-105 transition-transform duration-300 mt-2 flex items-center gap-2"
          >
            Start A Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

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
              
              {!!(selectedMedia.video) ? (
                <>
                  <video 
                    src={selectedMedia.video} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <img 
                    src={selectedMedia.thumbnail} 
                    alt={selectedMedia.title} 
                    className="w-full h-full object-contain"
                    style={{ display: 'none' }}
                  />
                </>
              ) : (
                <img 
                  src={selectedMedia.thumbnail} 
                  alt={selectedMedia.title} 
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

