"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioContext = createContext();

const initialReels = [];
const initialSocials = [];
const initialPosters = [];
const initialProjects = [];
const initialTestimonials = [];
const initialAnalyticsData = {
  followers: { current: '0', growth: '0%', history: [] },
  kpis: [],
  topContent: []
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
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analytics/kpis/`)
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
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/reels/`).then(res => res.json()).catch(() => null),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/socials/`).then(res => res.json()).catch(() => null),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/posters/`).then(res => res.json()).catch(() => null),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/projects/`).then(res => res.json()).catch(() => null),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/testimonials/`).then(res => res.json()).catch(() => null),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/milestones/`).then(res => res.json()).catch(() => null),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/contact-channels/`).then(res => res.json()).catch(() => null)
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
  const newItem = { id: `${type.slice(0, 3)}-${Date.now()}`, ...item };
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
