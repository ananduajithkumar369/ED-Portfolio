"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

// Initial Mock Data representing Anandu's works, projects, and analytics
const initialReels = [
  {
    id: 'reel-1',
    title: 'Gaming Montage - Cyberpunk style',
    category: 'Reel Editing',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600',
    reach: '125K',
    engagement: '18.4K Likes',
    link: 'https://instagram.com/anandu',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gaming-controller-glowing-in-the-dark-32235-large.mp4',
    description: 'Dynamic keyframing, beat-matching audio syncing, cyber neon color grading, and velocity edits.'
  },
  {
    id: 'reel-2',
    title: 'Travel Reel - Vagamon Vibe',
    category: 'Reel Editing',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600',
    reach: '89K',
    engagement: '12.1K Likes',
    link: 'https://instagram.com/anandu',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-drone-shot-of-a-wave-breaking-on-a-sandy-beach-42323-large.mp4',
    description: 'Foley sound design, atmospheric color mapping, speed ramps, and seamless masking transitions.'
  },
  {
    id: 'reel-3',
    title: 'Automotive Cinematic - Beast Unleashed',
    category: 'Reel Editing',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600',
    reach: '250K',
    engagement: '32.8K Likes',
    link: 'https://instagram.com/anandu',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-at-sunset-34294-large.mp4',
    description: 'High-octane soundscape design, visual shake effects, aggressive color-grading, and camera tracking.'
  }
];

const initialSocials = [
  {
    id: 'social-1',
    title: 'Tech Hub Academy',
    category: 'Social Media Management',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
    reach: '1.2M Impressions',
    engagement: '340% Growth',
    link: 'https://instagram.com/anandu',
    description: 'End-to-end content calendar design, captioning, hashtag strategies, and high-conversion Reels editing.'
  },
  {
    id: 'social-2',
    title: 'Cafe Delight Brand Campaign',
    category: 'Social Media Management',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
    reach: '650K Reach',
    engagement: '500K+ Views',
    link: 'https://instagram.com/anandu',
    description: 'Shot on-site video creatives, styled aesthetic Instagram story frames, and ran micro-influencer events.'
  }
];

const initialPosters = [
  {
    id: 'poster-1',
    title: 'Techno Fest 2026 - Main Stage',
    category: 'Posters & Creatives',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600',
    reach: '12K Views',
    engagement: '1.5K Saves',
    link: 'https://instagram.com/anandu',
    description: 'Neo-brutalist cyberpunk poster design for College techno-cultural festival event.'
  },
  {
    id: 'poster-2',
    title: 'Creative Brand Identity - AeroVibe',
    category: 'Posters & Creatives',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=600',
    reach: '8.5K Views',
    engagement: '800 Shares',
    link: 'https://instagram.com/anandu',
    description: 'Minimalist and clean vector brand identities with neon glow elements.'
  }
];

const initialProjects = [
  {
    id: 'proj-1',
    title: 'College Portal System',
    description: 'A comprehensive Academic Management Platform with real-time mark calculation, attendance tracking, and syllabus organizer. Built for college administration and students.',
    techStack: ['Django', 'React', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/anandu',
    demo: 'https://github.com/anandu',
    category: 'Developer Projects',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600'
  },
  {
    id: 'proj-2',
    title: 'Indoor Object Detection with Voice Feedback',
    description: 'A deep learning AI tool built using YOLOv8 for visually impaired users. It detects obstacles in a room and gives real-time localized audio guidance via text-to-speech.',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'Pyttsx3'],
    github: 'https://github.com/anandu',
    demo: 'https://github.com/anandu',
    category: 'Developer Projects',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600'
  },
  {
    id: 'proj-3',
    title: 'K-Means Clustering Image Compressor',
    description: 'An algorithmic project that performs image compression by grouping similar pixel colors together into K clusters using custom ML math, showing visual compression rates.',
    techStack: ['Python', 'Scikit-Learn', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/anandu',
    demo: 'https://github.com/anandu',
    category: 'Developer Projects',
    thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600'
  }
];

const initialTestimonials = [
  {
    id: 't-1',
    name: 'Nitin Thomas',
    role: 'Co-Founder, Tech Hub Academy',
    feedback: 'Anandu is a wizard when it comes to visual storytelling. He turned our boring slides into viral Instagram reels that brought in 15k followers in a single month! Highly professional developer and editor.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150'
  },
  {
    id: 't-2',
    name: 'Sreelakshmi K.',
    role: 'Event Coordinator, Techno Fest',
    feedback: 'The poster designs were absolute fire! He blended neon synthwave elements with perfect typographic hierarchy. Also helped automate our booking database on the fly. 10/10 developer designer combo!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150'
  }
];

const initialAnalyticsData = {
  followers: { current: '42.8K', growth: '+15.2%', history: [
    { name: 'Dec', followers: 28000, reach: 350000, engagement: 25000 },
    { name: 'Jan', followers: 31000, reach: 480000, engagement: 32000 },
    { name: 'Feb', followers: 34500, reach: 620000, engagement: 41000 },
    { name: 'Mar', followers: 37800, reach: 790000, engagement: 49000 },
    { name: 'Apr', followers: 40500, reach: 980000, engagement: 58000 },
    { name: 'May', followers: 42800, reach: 1200000, engagement: 68000 },
  ]},
  kpis: [
    { label: 'Reel Reach', value: '1.2M', trend: '+28.4%', desc: 'Previous 30 Days' },
    { label: 'Avg Engagement Rate', value: '8.7%', trend: '+1.5%', desc: 'Industry avg: 4%' },
    { label: 'Followers Growth', value: '42.8K', trend: '+15.2%', desc: 'Active community' },
    { label: 'Total Projects Run', value: '18+', trend: '+4', desc: 'Code + Creatives' }
  ],
  topContent: [
    { title: 'Cyberpunk Gaming Reel', reach: '250K', engagement: '32.8K', path: 'Reels' },
    { title: 'Travel Vlog Vagamon', reach: '125K', engagement: '18.4K', path: 'Reels' },
    { title: 'Techno Fest 2026 Poster', reach: '89K', engagement: '12.1K', path: 'Creatives' },
    { title: 'Indoor Voice Det AI Video', reach: '68K', engagement: '9.5K', path: 'Tech' }
  ]
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export const PortfolioProvider = ({ children }) => {
  const [reels, setReels] = useState(initialReels);
  const [socials, setSocials] = useState(initialSocials);
  const [posters, setPosters] = useState(initialPosters);
  const [projects, setProjects] = useState(initialProjects);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [analyticsData, setAnalyticsData] = useState(initialAnalyticsData);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [contactChannels, setContactChannels] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedReels = localStorage.getItem('anandu_reels');
      const storedSocials = localStorage.getItem('anandu_socials');
      const storedPosters = localStorage.getItem('anandu_posters');
      const storedProjects = localStorage.getItem('anandu_projects');
      const storedTestimonials = localStorage.getItem('anandu_testimonials');
      const storedAnalytics = localStorage.getItem('anandu_analytics');
      const storedContacts = localStorage.getItem('anandu_contacts');
      const storedMilestones = localStorage.getItem('anandu_milestones');
      const storedChannels = localStorage.getItem('anandu_channels');

      if (storedReels) setReels(JSON.parse(storedReels));
      if (storedSocials) setSocials(JSON.parse(storedSocials));
      if (storedPosters) setPosters(JSON.parse(storedPosters));
      if (storedProjects) setProjects(JSON.parse(storedProjects));
      if (storedTestimonials) setTestimonials(JSON.parse(storedTestimonials));
      if (storedAnalytics) setAnalyticsData(JSON.parse(storedAnalytics));
      if (storedContacts) setContactSubmissions(JSON.parse(storedContacts));
      if (storedMilestones) setMilestones(JSON.parse(storedMilestones));
      if (storedChannels) setContactChannels(JSON.parse(storedChannels));

      // Fetch dynamic analytics from Django backend
      fetch(`${API_BASE_URL}/api/analytics/kpis/`)
        .then(res => res.json())
        .then(data => {
          if (data && Array.isArray(data)) {
            const formattedKpis = data.map(k => ({
              label: k.label,
              value: k.value,
              trend: k.trend,
              desc: k.description
            }));
            setAnalyticsData(prev => {
              const updated = { ...prev, kpis: formattedKpis };
              localStorage.setItem('anandu_analytics', JSON.stringify(updated));
              return updated;
            });
          }
        })
        .catch(err => console.log('Django backend not reachable or error fetching KPIs:', err));

      // Fetch portfolio items from Django backend
      Promise.all([
        fetch(`${API_BASE_URL}/api/portfolio/reels/`).then(res => res.json()).catch(() => null),
        fetch(`${API_BASE_URL}/api/portfolio/socials/`).then(res => res.json()).catch(() => null),
        fetch(`${API_BASE_URL}/api/portfolio/posters/`).then(res => res.json()).catch(() => null),
        fetch(`${API_BASE_URL}/api/portfolio/projects/`).then(res => res.json()).catch(() => null),
        fetch(`${API_BASE_URL}/api/portfolio/testimonials/`).then(res => res.json()).catch(() => null),
        fetch(`${API_BASE_URL}/api/portfolio/milestones/`).then(res => res.json()).catch(() => null),
        fetch(`${API_BASE_URL}/api/portfolio/contact-channels/`).then(res => res.json()).catch(() => null)
      ]).then(([reelsData, socialsData, postersData, projectsData, testimonialsData, milestonesData, channelsData]) => {
        if (reelsData && Array.isArray(reelsData) && reelsData.length > 0) {
          setReels(reelsData);
          localStorage.setItem('anandu_reels', JSON.stringify(reelsData));
        }
        if (socialsData && Array.isArray(socialsData) && socialsData.length > 0) {
          setSocials(socialsData);
          localStorage.setItem('anandu_socials', JSON.stringify(socialsData));
        }
        if (postersData && Array.isArray(postersData) && postersData.length > 0) {
          setPosters(postersData);
          localStorage.setItem('anandu_posters', JSON.stringify(postersData));
        }
        if (projectsData && Array.isArray(projectsData) && projectsData.length > 0) {
          setProjects(projectsData);
          localStorage.setItem('anandu_projects', JSON.stringify(projectsData));
        }
        if (testimonialsData && Array.isArray(testimonialsData) && testimonialsData.length > 0) {
          setTestimonials(testimonialsData);
          localStorage.setItem('anandu_testimonials', JSON.stringify(testimonialsData));
        }
        if (milestonesData && Array.isArray(milestonesData) && milestonesData.length > 0) {
          setMilestones(milestonesData);
          localStorage.setItem('anandu_milestones', JSON.stringify(milestonesData));
        }
        if (channelsData && Array.isArray(channelsData) && channelsData.length > 0) {
          setContactChannels(channelsData);
          localStorage.setItem('anandu_channels', JSON.stringify(channelsData));
        }
      });
    }
  }, []);

  // Save updates to localStorage Helper
  const saveToStorage = (key, data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  // Add Item
  const addItem = (type, item) => {
    const newItem = { id: `${type.slice(0,3)}-${Date.now()}`, ...item };
    if (type === 'reels') {
      const updated = [newItem, ...reels];
      setReels(updated);
      saveToStorage('anandu_reels', updated);
    } else if (type === 'socials') {
      const updated = [newItem, ...socials];
      setSocials(updated);
      saveToStorage('anandu_socials', updated);
    } else if (type === 'posters') {
      const updated = [newItem, ...posters];
      setPosters(updated);
      saveToStorage('anandu_posters', updated);
    } else if (type === 'projects') {
      const updated = [newItem, ...projects];
      setProjects(updated);
      saveToStorage('anandu_projects', updated);
    } else if (type === 'testimonials') {
      const updated = [newItem, ...testimonials];
      setTestimonials(updated);
      saveToStorage('anandu_testimonials', updated);
    } else if (type === 'milestones') {
      const updated = [newItem, ...milestones];
      setMilestones(updated);
      saveToStorage('anandu_milestones', updated);
    }
  };

  // Edit Item
  const updateItem = (type, id, updatedFields) => {
    if (type === 'reels') {
      const updated = reels.map(r => r.id === id ? { ...r, ...updatedFields } : r);
      setReels(updated);
      saveToStorage('anandu_reels', updated);
    } else if (type === 'socials') {
      const updated = socials.map(s => s.id === id ? { ...s, ...updatedFields } : s);
      setSocials(updated);
      saveToStorage('anandu_socials', updated);
    } else if (type === 'posters') {
      const updated = posters.map(p => p.id === id ? { ...p, ...updatedFields } : p);
      setPosters(updated);
      saveToStorage('anandu_posters', updated);
    } else if (type === 'projects') {
      const updated = projects.map(p => p.id === id ? { ...p, ...updatedFields } : p);
      setProjects(updated);
      saveToStorage('anandu_projects', updated);
    } else if (type === 'testimonials') {
      const updated = testimonials.map(t => t.id === id ? { ...t, ...updatedFields } : t);
      setTestimonials(updated);
      saveToStorage('anandu_testimonials', updated);
    } else if (type === 'milestones') {
      const updated = milestones.map(m => m.id === id ? { ...m, ...updatedFields } : m);
      setMilestones(updated);
      saveToStorage('anandu_milestones', updated);
    }
  };

  // Delete Item
  const deleteItem = (type, id) => {
    if (type === 'reels') {
      const updated = reels.filter(r => r.id !== id);
      setReels(updated);
      saveToStorage('anandu_reels', updated);
    } else if (type === 'socials') {
      const updated = socials.filter(s => s.id !== id);
      setSocials(updated);
      saveToStorage('anandu_socials', updated);
    } else if (type === 'posters') {
      const updated = posters.filter(p => p.id !== id);
      setPosters(updated);
      saveToStorage('anandu_posters', updated);
    } else if (type === 'projects') {
      const updated = projects.filter(p => p.id !== id);
      setProjects(updated);
      saveToStorage('anandu_projects', updated);
    } else if (type === 'testimonials') {
      const updated = testimonials.filter(t => t.id !== id);
      setTestimonials(updated);
      saveToStorage('anandu_testimonials', updated);
    } else if (type === 'milestones') {
      const updated = milestones.filter(m => m.id !== id);
      setMilestones(updated);
      saveToStorage('anandu_milestones', updated);
    }
  };

  // Update Analytics
  const updateAnalytics = (newKpis, newHistory) => {
    const updated = {
      ...analyticsData,
      kpis: newKpis || analyticsData.kpis,
      followers: newHistory ? { ...analyticsData.followers, history: newHistory } : analyticsData.followers
    };
    setAnalyticsData(updated);
    saveToStorage('anandu_analytics', updated);
  };

  // Add Contact Submission
  const addContactSubmission = (submission) => {
    const newSub = { id: `contact-${Date.now()}`, date: new Date().toLocaleDateString(), ...submission };
    const updated = [newSub, ...contactSubmissions];
    setContactSubmissions(updated);
    saveToStorage('anandu_contacts', updated);
  };

  // Get aggregated works list grouped or filtered
  const getAllWorks = () => {
    return [...reels, ...socials, ...posters];
  };

  return (
    <PortfolioContext.Provider value={{
      reels,
      socials,
      posters,
      projects,
      testimonials,
      milestones,
      contactChannels,
      analyticsData,
      contactSubmissions,
      addItem,
      updateItem,
      deleteItem,
      updateAnalytics,
      addContactSubmission,
      getAllWorks
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
