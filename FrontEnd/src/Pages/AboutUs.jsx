import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Target, Zap, Award, ArrowRight, CheckCircle, Globe, Briefcase, 
  TrendingUp, Star, Shield, Clock, Heart, Lightbulb, Rocket, 
  ChevronDown, Play, Pause, BarChart3, Eye, Sparkles, Trophy,
  Building2, UserCheck, Compass, Coffee, Calendar, MapPin
} from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('mission');
  const [counters, setCounters] = useState({
    jobSeekers: 0,
    companies: 0,
    placements: 0,
    successRate: 0
  });

  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Animate counters
    const animateCounters = () => {
      const targets = { jobSeekers: 50000, companies: 5000, placements: 25000, successRate: 98 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        const progress = Math.min(step / steps, 1);
        setCounters({
          jobSeekers: Math.floor(targets.jobSeekers * progress),
          companies: Math.floor(targets.companies * progress),
          placements: Math.floor(targets.placements * progress),
          successRate: Math.floor(targets.successRate * progress)
        });
        
        if (progress >= 1) clearInterval(timer);
        step++;
      }, increment);
    };

    setTimeout(animateCounters, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: counters.jobSeekers.toLocaleString() + '+', label: 'Active Job Seekers', icon: Users, color: '#4ade80', desc: 'Professionals actively searching for opportunities' },
    { number: counters.companies.toLocaleString() + '+', label: 'Partner Companies', icon: Briefcase, color: '#60a5fa', desc: 'Verified employers across all industries' },
    { number: counters.placements.toLocaleString() + '+', label: 'Successful Placements', icon: CheckCircle, color: '#f59e0b', desc: 'Career transitions we\'ve facilitated' },
    { number: counters.successRate + '%', label: 'Match Success Rate', icon: TrendingUp, color: '#ec4899', desc: 'Candidates who find their ideal role' }
  ];

  const timeline = [
    {
      year: '2020',
      quarter: 'Q1',
      title: 'The Vision',
      description: 'Founded by a team of former tech executives and AI researchers who experienced firsthand the inefficiencies of traditional recruitment.',
      icon: Lightbulb,
      metrics: 'Initial concept development'
    },
    {
      year: '2020',
      quarter: 'Q4',
      title: 'MVP Launch',
      description: 'Released our first AI-powered matching algorithm with 100 beta users and 10 partner companies.',
      icon: Rocket,
      metrics: '100 users, 10 companies'
    },
    {
      year: '2021',
      quarter: 'Q2',
      title: 'Rapid Growth',
      description: 'Expanded to 1,000+ job seekers and 100+ companies. Introduced video interviews and skill assessments.',
      icon: TrendingUp,
      metrics: '1K+ users, 100+ companies'
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: 'AI Revolution',
      description: 'Launched our proprietary machine learning models that analyze personality, culture fit, and career aspirations.',
      icon: Zap,
      metrics: '10K+ users, 500+ companies'
    },
    {
      year: '2023',
      quarter: 'Q1',
      title: 'Global Expansion',
      description: 'Extended our platform to support remote work globally, partnering with companies across 25+ countries.',
      icon: Globe,
      metrics: '25K+ users, 2K+ companies'
    },
    {
      year: '2024',
      quarter: 'Q4',
      title: 'Industry Leader',
      description: 'Achieved market leadership with advanced AI, real-time matching, and comprehensive career development tools.',
      icon: Trophy,
      metrics: '50K+ users, 5K+ companies'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Our advanced AI doesn\'t just match skills—it understands personality, culture fit, career goals, and growth potential to create perfect synergies.',
      features: ['AI-powered personality analysis', 'Culture compatibility scoring', 'Career trajectory prediction', 'Skill gap identification'],
      color: '#4ade80'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'From application to interview in under 48 hours. Our streamlined process eliminates the waiting game that plagues traditional recruitment.',
      features: ['Instant application processing', 'Real-time notifications', 'Automated screening', '48-hour response guarantee'],
      color: '#60a5fa'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Every interaction is built on transparency. We verify all companies, provide salary insights, and ensure fair hiring practices.',
      features: ['Company verification process', 'Salary transparency', 'Bias-free algorithms', 'Fair hiring practices'],
      color: '#f59e0b'
    },
    {
      icon: Heart,
      title: 'Human-Centric',
      description: 'Technology serves humanity, not the other way around. We prioritize human connection and meaningful career growth over mere job placement.',
      features: ['Personal career coaching', 'Mental health support', 'Work-life balance focus', 'Long-term career planning'],
      color: '#ec4899'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Google, Sarah led teams of 200+ engineers. She holds a PhD in Computer Science from Stanford and has 15+ years of experience in AI and talent acquisition.',
      image: '👩‍💼',
      specialties: ['AI/ML Strategy', 'Product Vision', 'Team Leadership'],
      linkedin: '#',
      achievements: ['Forbes 30 Under 30', 'MIT Technology Review Innovator', 'TEDx Speaker']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Previously Principal Engineer at Netflix, Marcus architected recommendation systems serving 200M+ users. MIT graduate with expertise in distributed systems and machine learning.',
      image: '👨‍💻',
      specialties: ['Machine Learning', 'System Architecture', 'Data Science'],
      linkedin: '#',
      achievements: ['ACM Distinguished Scientist', 'IEEE Fellow', '20+ Patents']
    },
    {
      name: 'Priya Patel',
      role: 'Head of Operations',
      bio: 'Former McKinsey consultant and Uber operations lead, Priya scaled operations across 50+ cities. MBA from Wharton, specializing in organizational psychology.',
      image: '👩‍💼',
      specialties: ['Operations Excellence', 'User Experience', 'Growth Strategy'],
      linkedin: '#',
      achievements: ['Operations Excellence Award', 'Wharton Alumni Achievement', 'Industry Speaker']
    },
    {
      name: 'David Kim',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning from Carnegie Mellon, former research scientist at OpenAI. Pioneered breakthrough algorithms in natural language processing and computer vision.',
      image: '👨‍🔬',
      specialties: ['AI Research', 'NLP', 'Computer Vision'],
      linkedin: '#',
      achievements: ['NeurIPS Best Paper', '50+ Publications', 'AI Research Excellence']
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Customer Success',
      bio: 'Former Head of Customer Experience at Airbnb, Lisa built customer success programs that achieved 95+ NPS scores. Expert in user psychology and experience design.',
      image: '👩‍💻',
      specialties: ['Customer Success', 'User Experience', 'Community Building'],
      linkedin: '#',
      achievements: ['Customer Experience Award', 'UX Design Recognition', 'Community Leadership']
    },
    {
      name: 'Ahmed Hassan',
      role: 'Head of Global Partnerships',
      bio: 'Former Director of Strategic Partnerships at LinkedIn, Ahmed built relationships with Fortune 500 companies. Fluent in 5 languages with deep international business expertise.',
      image: '👨‍💼',
      specialties: ['Strategic Partnerships', 'International Business', 'Relationship Building'],
      linkedin: '#',
      achievements: ['Partnership Excellence', 'Global Business Leader', 'Cultural Bridge Award']
    }
  ];

  const achievements = [
    { title: 'Best AI Innovation', year: '2024', org: 'Tech Innovation Awards' },
    { title: 'Fastest Growing Startup', year: '2023', org: 'Forbes' },
    { title: 'Best Workplace Culture', year: '2023', org: 'Glassdoor' },
    { title: 'Top 10 EdTech Solutions', year: '2022', org: 'EdTech Breakthrough' }
  ];

  const missionTabs = {
    mission: {
      title: 'Our Mission',
      content: 'To democratize access to meaningful career opportunities by leveraging AI to create perfect matches between talent and organizations, fostering a world where everyone can thrive in their ideal role.',
      icon: Compass,
      stats: { impact: '50K+ careers transformed', reach: '25+ countries', satisfaction: '98% user satisfaction' }
    },
    vision: {
      title: 'Our Vision',
      content: 'A future where finding the perfect job is as simple as finding the perfect match on a dating app—intelligent, instant, and deeply personal. We envision a world without unemployment, underemployment, or career dissatisfaction.',
      icon: Eye,
      stats: { goal: '1M+ placements by 2030', expansion: '100+ countries', innovation: 'Leading AI recruitment' }
    },
    impact: {
      title: 'Our Impact',
      content: 'Beyond job placement, we\'re creating economic mobility, reducing hiring bias, and building more diverse, inclusive workplaces. Every match we make ripples through families, communities, and economies.',
      icon: Sparkles,
      stats: { diversity: '40% increase in diverse hires', mobility: '60% salary increase average', retention: '85% job retention rate' }
    }
  };

  return (
    <div className="about-container">
      <style jsx>{`
        .about-container {
          background: var(--primary-bg);
          min-height: 100vh;
          color: var(--text-light);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .floating-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--gold-light);
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 1s; }
        .particle:nth-child(3) { top: 40%; left: 60%; animation-delay: 2s; }
        .particle:nth-child(4) { top: 80%; left: 20%; animation-delay: 3s; }
        .particle:nth-child(5) { top: 10%; left: 90%; animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        .hero-section {
          padding: 8rem 2rem 6rem;
          text-align: center;
          position: relative;
          background: 
            radial-gradient(circle at 20% 50%, rgba(252, 210, 159, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 160, 86, 0.1) 0%, transparent 50%),
            var(--primary-bg);
          overflow: hidden;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(50px);
          animation: heroAnimation 1.2s ease-out forwards;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(252, 210, 159, 0.1);
          border: 1px solid rgba(252, 210, 159, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          color: var(--gold-light);
          font-weight: 500;
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--gold-light), var(--gold-dark), var(--gold-light));
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-weight: 300;
          line-height: 1.4;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          background: var(--button-hover);
          color: var(--highlight-bg);
          border: none;
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-secondary {
          background: transparent;
          color: var(--text-light);
          border: 2px solid var(--gold-light);
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(252, 210, 159, 0.4);
        }

        .cta-secondary:hover {
          background: var(--gold-light);
          color: var(--highlight-bg);
          transform: translateY(-3px);
        }

        .stats-section {
          padding: 6rem 2rem;
          background: 
            linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
            radial-gradient(circle at center, rgba(252, 210, 159, 0.05), transparent 70%);
          backdrop-filter: blur(20px);
          position: relative;
        }

        .stats-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .stats-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--gold-light);
        }

        .stats-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          backdrop-filter: blur(30px);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          border-color: var(--gold-light);
        }

        .stat-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1.5rem;
          padding: 1rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--gold-light), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          color: var(--text-light);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .stat-description {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .mission-section {
          padding: 8rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mission-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .mission-tab {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: var(--text-muted);
          padding: 1rem 2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mission-tab.active {
          background: var(--gold-light);
          color: var(--highlight-bg);
          border-color: var(--gold-light);
        }

        .mission-content {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 4rem;
          backdrop-filter: blur(30px);
          text-align: center;
        }

        .mission-text {
          font-size: 1.4rem;
          line-height: 1.8;
          color: var(--text-light);
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .mission-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .mission-stat {
          text-align: center;
        }

        .mission-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold-light);
          margin-bottom: 0.5rem;
        }

        .mission-stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .timeline-section {
          padding: 8rem 2rem;
          background: rgba(0, 0, 0, 0.2);
        }

        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--gold-light);
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--gold-light), var(--gold-dark));
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0.7;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .timeline-item.active {
          opacity: 1;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          left: -1;
          right: 55%;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          right: 0;
          left: 55%;
          text-align: left;
        }

        .timeline-content {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(30px);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-content {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .timeline-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: var(--gold-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--highlight-bg);
          font-size: 1.5rem;
          z-index: 2;
        }

        .timeline-year {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold-light);
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-metrics {
          font-size: 0.9rem;
          color: var(--gold-light);
          font-weight: 500;
        }

        .values-section {
          padding: 8rem 2rem;
          background: 
            radial-gradient(circle at 30% 70%, rgba(252, 210, 159, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(212, 160, 86, 0.1) 0%, transparent 50%);
        }

        .values-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .value-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 3rem;
          backdrop-filter: blur(30px);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .value-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .value-card:hover::after {
          opacity: 1;
        }

        .value-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
          border-color: var(--gold-light);
        }

        .value-card.active {
          border-color: var(--gold-light);
          box-shadow: 0 25px 50px rgba(252, 210, 159, 0.2);
        }

        .value-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .value-icon {
          width: 60px;
          height: 60px;
          padding: 1rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .value-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-light);
        }

        .value-description {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .value-features {
          list-style: none;
          padding: 0;
        }

        .value-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          color: var(--text-light);
          font-size: 0.95rem;
        }

        .value-features li::before {
          content: '✓';
          color: var(--success-color);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .team-section {
          padding: 8rem 2rem;
          background: rgba(0, 0, 0, 0.1);
        }

        .team-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .team-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          backdrop-filter: blur(30px);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          border-color: var(--gold-light);
        }

        .team-avatar {
          font-size: 5rem;
          margin-bottom: 2rem;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }

        .team-card:hover .team-avatar {
          transform: scale(1.1);
        }

        .team-name {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--gold-light);
        }

        .team-role {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .team-bio {
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .team-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .specialty-tag {
          background: rgba(252, 210, 159, 0.2);
          color: var(--gold-light);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .team-achievements {
          margin-top: 1rem;
        }

        .team-achievements h4 {
          color: var(--text-light);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .achievement-item {
          color: var(--text-muted);
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .achievement-item::before {
          content: '🏆';
          font-size: 0.7rem;
        }

        .achievements-section {
          padding: 6rem 2rem;
          background: 
            linear-gradient(135deg, rgba(252, 210, 159, 0.1), rgba(212, 160, 86, 0.1)),
            radial-gradient(circle at center, rgba(0, 0, 0, 0.2), transparent 70%);
        }

        .achievements-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .achievement-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(30px);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          border-color: var(--gold-light);
        }

        .achievement-title {
          font-weight: 600;
          color: var(--gold-light);
          margin-bottom: 0.5rem;
        }

        .achievement-year {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .achievement-org {
          color: var(--text-light);
          font-size: 0.85rem;
        }

        .culture-section {
          padding: 8rem 2rem;
          background: rgba(0, 0, 0, 0.1);
        }

        .culture-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .culture-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .culture-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          backdrop-filter: blur(30px);
          transition: all 0.3s ease;
        }

        .culture-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .culture-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .culture-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--gold-light);
          margin-bottom: 1rem;
        }

        .culture-description {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .final-cta-section {
          padding: 8rem 2rem;
          text-align: center;
          background: 
            linear-gradient(135deg, rgba(252, 210, 159, 0.15), rgba(212, 160, 86, 0.15)),
            radial-gradient(circle at 50% 50%, rgba(252, 210, 159, 0.1) 0%, transparent 70%);
          position: relative;
          overflow: hidden;
        }

        .final-cta-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .final-cta-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--gold-light), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .final-cta-text {
          font-size: 1.4rem;
          color: var(--text-light);
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .final-cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button-large {
          background: var(--button-hover);
          color: var(--highlight-bg);
          border: none;
          padding: 1.5rem 3rem;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
        }

        .cta-button-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(252, 210, 159, 0.4);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          opacity: 0.1;
          animation: floatAround 20s linear infinite;
        }

        .floating-element:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 5s;
        }

        .floating-element:nth-child(3) {
          bottom: 20%;
          left: 20%;
          animation-delay: 10s;
        }

        @keyframes floatAround {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(-20px, -60px) rotate(180deg); }
          75% { transform: translate(-40px, -20px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes heroAnimation {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .timeline::before {
            left: 20px;
          }
          
          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            left: 60px;
            right: 0;
            text-align: left;
            width:80vw
          }
          
          .timeline-icon {
            left: 20px;
            transform: translateY(-50%);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 1rem 4rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid,
          .values-grid,
          .team-grid,
          .culture-grid {
            grid-template-columns: 1fr;
          }

          .mission-tabs {
            flex-direction: column;
            align-items: center;
          }

          .mission-content {
            padding: 2rem;
          }

          .final-cta-title {
            font-size: 2.5rem;
          }

          .final-cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 4rem 1rem 3rem;
          }

          .stats-section,
          .mission-section,
          .timeline-section,
          .values-section,
          .team-section {
            padding: 4rem 1rem;
          }

          .stat-card,
          .value-card,
          .team-card {
            padding: 2rem;
          }
        }
      `}</style>

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} />
            Transforming Careers Since 2020
          </div>
          <h1 className="hero-title">Redefining the Future of Work</h1>
          <p className="hero-subtitle">Where AI Meets Human Potential</p>
          <p className="hero-description">
            We're not just another job board. WorkVerse is an intelligent career ecosystem that understands your unique potential, 
            matches you with opportunities that align with your values, and accelerates your professional growth through cutting-edge AI technology.
          </p>
          <div className="hero-cta">
            <button className="cta-primary">
              Discover Your Dream Job
              <ArrowRight size={20} />
            </button>
            <button className="cta-secondary">
              <Play size={18} />
              Watch Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-header">
            <h2 className="stats-title">Our Impact in Numbers</h2>
            <p className="stats-subtitle">
              Every statistic represents a life changed, a career transformed, and a dream realized through our platform.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{ color: stat.color }}>
                  <stat.icon size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Impact Section */}
      <section className="mission-section">
        <div className="mission-tabs">
          {Object.entries(missionTabs).map(([key, tab]) => (
            <button
              key={key}
              className={`mission-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <tab.icon size={20} />
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mission-content">
          <p className="mission-text">{missionTabs[activeTab].content}</p>
          <div className="mission-stats">
            {Object.entries(missionTabs[activeTab].stats).map(([key, value]) => (
              <div key={key} className="mission-stat">
                <div className="mission-stat-value">{value}</div>
                <div className="mission-stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From a bold idea to industry leadership—discover the milestones that shaped WorkVerse into the platform it is today.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
                onClick={() => setActiveTimeline(index)}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year} {item.quarter}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-metrics">{item.metrics}</div>
                </div>
                <div className="timeline-icon">
                  <item.icon size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="timeline-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision we make and every feature we build—because technology should serve humanity.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`value-card ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="value-header">
                  <div className="value-icon" style={{ color: value.color }}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                </div>
                <p className="value-description">{value.description}</p>
                <ul className="value-features">
                  {value.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="timeline-header">
            <h2 className="section-title">Meet the Visionaries</h2>
            <p className="section-subtitle">
              The brilliant minds behind WorkVerse—experienced leaders, innovative thinkers, and passionate advocates for your career success.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-specialties">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
                <div className="team-achievements">
                  <h4>Key Achievements</h4>
                  <div className="achievements-list">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="achievement-item">{achievement}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <h2 className="section-title">Recognition & Awards</h2>
          <p className="section-subtitle">
            Industry recognition for our innovation, impact, and commitment to transforming the future of work.
          </p>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-year">{achievement.year}</div>
                <div className="achievement-org">{achievement.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="culture-container">
          <div className="timeline-header">
            <h2 className="section-title">Our Culture</h2>
            <p className="section-subtitle">
              The values and principles that make WorkVerse not just a great product, but a great place to work and grow.
            </p>
          </div>
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon">🚀</div>
              <h3 className="culture-title">Innovation First</h3>
              <p className="culture-description">
                We push boundaries, challenge conventions, and constantly explore new ways to solve complex problems.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">🤝</div>
              <h3 className="culture-title">Collaboration</h3>
              <p className="culture-description">
                Great ideas come from diverse perspectives working together toward common goals.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">📈</div>
              <h3 className="culture-title">Growth Mindset</h3>
              <p className="culture-description">
                We embrace challenges, learn from failures, and continuously evolve both personally and professionally.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">🌍</div>
              <h3 className="culture-title">Global Impact</h3>
              <p className="culture-description">
                Our work affects millions of lives worldwide, and we take that responsibility seriously.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">⚖️</div>
              <h3 className="culture-title">Ethical AI</h3>
              <p className="culture-description">
                We build AI systems that are fair, transparent, and designed to eliminate bias in hiring.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">💪</div>
              <h3 className="culture-title">Empowerment</h3>
              <p className="culture-description">
                We believe in empowering every individual to reach their full potential and achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="floating-elements">
          <Briefcase className="floating-element" size={40} />
          <Users className="floating-element" size={35} />
          <Target className="floating-element" size={30} />
        </div>
        <div className="final-cta-content">
          <h2 className="final-cta-title">Ready to Transform Your Future?</h2>
          <p className="final-cta-text">
            Join the revolution in career discovery. Whether you're a job seeker ready to find your dream role 
            or a company looking to discover exceptional talent, WorkVerse is your gateway to success.
          </p>
          <div className="final-cta-buttons">
            <button className="cta-button-large">
              <Users size={24} />
              Find Your Dream Job
            </button>
            <button className="cta-button-large">
              <Building2 size={24} />
              Hire Top Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;