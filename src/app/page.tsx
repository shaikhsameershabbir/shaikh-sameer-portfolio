'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
  Code,
  Database,
  Server,
  MapPin,
  Briefcase,
  Building,
  Phone,
  Award,
  Send,
  BookOpen,
  Palette,
  Utensils,
  Users,
  Gamepad2,
  ChevronRight,
  Layers,
  Menu,
  X,
  Shield,
  Zap,
  Cloud,
  Wrench,
  Cpu,
  Layout,
  Box,
  Braces,
  Globe,
  Radio,
  Sparkles,
  Search,
  GitBranch,
  RefreshCw,
  Monitor,
  Activity,
  Network,
  Expand,
} from 'lucide-react';

const CV_URL = '/Shaikh-Sameer-CV.pdf';
const COVER_LETTER_URL = '/Shaikh-Sameer-Cover-Letter.md';

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'architecture', 'download', 'contact'];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Coreline IT Solutions',
    location: 'Aurangabad, India',
    duration: 'Feb 2025 – Present',
    current: true,
    achievements: [
      'Architected scalable backend services supporting enterprise applications used by multiple client organizations',
      'Developed responsive admin dashboards using Next.js, React.js and Tailwind CSS enabling efficient management of enterprise application workflows',
      'Led engineering team of 6 developers delivering web platforms, internal tools, and SaaS applications',
      'Increased API performance by 40%',
      'Established CI/CD pipelines enabling automated deployments and reducing release time by 60%',
      'Implemented reusable frontend components and optimized UI rendering improving application performance and maintainability',
      'Guided junior developers through code reviews, architectural discussions, and performance optimization strategies',
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'CI/CD', 'TypeScript'],
  },
  {
    title: 'Software Engineer',
    company: 'Moksha Solutions',
    location: 'Aurangabad, India',
    duration: 'Jun 2024 – Jan 2025',
    current: false,
    achievements: [
      'Engineered backend services powering applications used in healthcare and logistics sectors',
      'Accelerated API response times by redesigning database indexes and improving query execution',
      'Collaborated with frontend teams to implement responsive UI features using React.js ensuring seamless integration with backend APIs',
      'Collaborated with cross-functional teams delivering production features across multiple client projects',
      'Strengthened application stability through debugging, monitoring, and automated testing',
    ],
    tech: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'ARA Global',
    location: 'Aurangabad, India',
    duration: 'Feb 2023 – Apr 2024',
    current: false,
    achievements: [
      'Built internal enterprise applications supporting operations for more than 500 employees',
      'Delivered a complete ERP platform including HR payroll, attendance tracking, and reporting dashboards',
      'Developed responsive frontend dashboards using React.js enabling employees and administrators to manage operational workflows efficiently',
      'Implemented REST APIs using Node.js enabling seamless communication between frontend interfaces and backend services',
      'Reduced system latency by 40%',
      'Introduced real-time notification infrastructure using WebSockets improving user engagement',
      'Managed production deployments and server configuration across Linux VPS environments',
    ],
    tech: ['Node.js', 'React', 'REST APIs', 'WebSockets', 'Linux', 'VPS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Techsparagus',
    location: 'Aurangabad, India',
    duration: 'Feb 2022 – Feb 2023',
    current: false,
    achievements: [
      'Engineered REST APIs supporting mobile and web applications handling thousands of API requests daily',
      'Developed responsive frontend components using React.js ensuring seamless user experience across desktop and mobile devices',
      'Integrated frontend applications with backend services through REST APIs enabling dynamic data interaction',
      'Introduced real-time messaging and notification systems using WebSockets',
      'Structured scalable MongoDB and MySQL database schemas improving query performance',
    ],
    tech: ['Node.js', 'React', 'MongoDB', 'MySQL', 'WebSockets', 'REST APIs'],
  },
  {
    title: 'Junior Full Stack Developer',
    company: 'Vaibhav Consulting Services',
    location: 'Aurangabad, India',
    duration: 'Dec 2019 – Jan 2022',
    current: false,
    achievements: [
      'Contributed to ERP modules including billing, inventory management, and financial reporting',
      'Created backend logic for casino-style gaming systems including betting engines and wallet tracking',
      'Built desktop business tools using Electron.js improving operational efficiency for internal users',
    ],
    tech: ['Node.js', 'Electron.js', 'JavaScript', 'MySQL'],
  },
];

const projects = [
  {
    title: 'StudyPulse',
    subtitle: 'Online Learning & Examination Platform',
    description: 'Designed and built a scalable online learning platform allowing students to access study material, take exams, and track academic progress. Institutions manage exams, users, reports, and financial transactions through a responsive admin dashboard.',
    highlights: [
      'Multi-role access: Admins, Operators, Schools, Students',
      'JWT authentication with role-based authorization',
      'Razorpay payment gateway for subscription-based access',
      'PDF report generation for student performance analytics',
      'DigitalOcean Spaces for study materials, images, exam resources',
      'Redis caching — ~30% API response time improvement',
      'CI/CD pipeline with GitHub Actions and Docker',
    ],
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Redis', 'Razorpay', 'Docker', 'DigitalOcean'],
    architecture: 'Backend: Node.js + Express + PostgreSQL. Frontend: React admin dashboard. Auth: JWT. Storage: DigitalOcean Spaces.',
  },
  {
    title: 'Indian Design Editing Platform',
    subtitle: 'Marketing Design Customization for Small Businesses',
    description: 'Web platform allowing small businesses to quickly customize marketing designs by editing pre-built templates. Real-time editing interface for text, colors, branding — upload logos, personalize designs, and purchase customized assets.',
    highlights: [
      'Real-time template editing (text, colors, branding)',
      'Cloudflare R2 for high-resolution template assets and user designs',
      'Backend APIs: template management, design workflows, purchase transactions',
      'Image purchase system for marketing and branding use',
      'CDN-backed storage for optimized image load speed',
    ],
    tech: ['React', 'Node.js', 'Cloudflare R2', 'REST APIs'],
    architecture: 'Frontend editing interface + backend APIs. Storage: Cloudflare R2 with CDN.',
  },
  {
    title: 'POST EAT',
    subtitle: 'Australian Food Delivery Platform',
    description: 'Full-stack food delivery system supporting restaurants, customers, and delivery partners. Responsive interfaces for seamless ordering across desktop and mobile. Real-time order tracking and live status updates.',
    highlights: [
      'Backend services: orders, menus, payments, delivery logistics',
      'Real-time order tracking via WebSockets and Socket.IO',
      'Notification services for customers and delivery partners',
      'Database query optimization and indexing for order processing speed',
    ],
    tech: ['Node.js', 'MongoDB', 'React', 'Socket.IO', 'WebSockets'],
    architecture: 'Node.js + MongoDB backend. Real-time: Socket.IO. Multi-role: Restaurants, Customers, Delivery.',
  },
  {
    title: 'KT Guru',
    subtitle: 'Global SaaS Knowledge Transfer Platform',
    description: 'SaaS platform enabling consultants to conduct knowledge transfer sessions with global clients. Real-time communication and collaboration features for concurrent sessions.',
    highlights: [
      'Real-time chat, file sharing, and collaboration',
      'Scalable backend for concurrent sessions and multi-user interactions',
      'Role-based access: consultants, clients, administrative users',
    ],
    tech: ['Node.js', 'React', 'WebSockets', 'SaaS'],
    architecture: 'SaaS multi-tenant. Real-time modules for chat and file sharing.',
  },
  {
    title: 'Casino Gaming Platform',
    subtitle: 'Real-time Casino Gaming Backend',
    description: 'Real-time casino gaming backend supporting multiple games including Roulette and DKD. Betting engine with wallet management and secure transaction recording.',
    highlights: [
      'Betting engine: bet validation, payout calculation, wallet management',
      'Server-side randomization algorithms for fairness and integrity',
      'Secure transaction system for bets, winnings, wallet balances',
    ],
    tech: ['Node.js', 'WebSockets', 'Real-time', 'Wallet System'],
    architecture: 'Backend betting engine. Server-side randomization. Wallet and transaction logging.',
  },
];

const projectIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  StudyPulse: BookOpen,
  'Indian Design Editing Platform': Palette,
  'POST EAT': Utensils,
  'KT Guru': Users,
  'Casino Gaming Platform': Gamepad2,
};

const skillToIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'JavaScript (ES6+)': Braces,
  'TypeScript': Code,
  'SQL': Database,
  'Node.js': Server,
  'Express.js': Server,
  'NestJS': Box,
  'REST APIs': Globe,
  'WebSockets': Radio,
  'Socket.IO': Radio,
  'React.js': Layout,
  'Next.js': Zap,
  'Redux Toolkit': Layers,
  'HTML5': FileText,
  'CSS3': Palette,
  'Tailwind CSS': Sparkles,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'MySQL': Database,
  'Query Optimization': Search,
  'Data Modeling': Database,
  'Prisma ORM': Database,
  'Knex.js': Database,
  'Docker': Box,
  'Git': GitBranch,
  'CI/CD': RefreshCw,
  'DigitalOcean': Cloud,
  'AWS (EC2, S3)': Cloud,
  'VPS Deployment': Server,
  'Electron.js': Monitor,
  'Redis': Database,
  'Linux Servers': Server,
  'Performance Monitoring': Activity,
  'System Design': Network,
  'Scalable Architecture': Expand,
  'API Security': Shield,
  'Agile Development': Zap,
};

const skillsWithIcons: { category: string; icon: React.ComponentType<{ size?: number; className?: string }>; items: string[] }[] = [
  { category: 'Languages', icon: Code, items: ['JavaScript (ES6+)', 'TypeScript', 'SQL'] },
  { category: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'WebSockets', 'Socket.IO'] },
  { category: 'Frontend', icon: Layout, items: ['React.js', 'Next.js', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Databases', icon: Database, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Query Optimization', 'Data Modeling'] },
  { category: 'ORM / Query Builders', icon: Box, items: ['Prisma ORM', 'Knex.js'] },
  { category: 'Cloud & DevOps', icon: Cloud, items: ['Docker', 'Git', 'CI/CD', 'DigitalOcean', 'AWS (EC2, S3)', 'VPS Deployment'] },
  { category: 'Tools', icon: Wrench, items: ['Electron.js', 'Redis', 'Linux Servers', 'Performance Monitoring'] },
  { category: 'Engineering', icon: Cpu, items: ['System Design', 'Scalable Architecture', 'API Security', 'Agile Development'] },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.08 } });

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMobileNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop - 150 <= scrollY) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setFormStatus('success');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Fixed Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--bg)]/80 backdrop-blur-2xl"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button onClick={() => handleNavClick('hero')} className="text-base sm:text-lg font-display font-semibold gradient-text hover:opacity-90 transition-opacity">
            Shaikh Sameer
          </button>
          <div className="hidden md:flex items-center gap-1">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  activeSection === id ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {id}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={CV_URL}
              download
              className="btn-gradient flex items-center gap-2 px-4 py-2 rounded-xl text-black font-semibold text-sm"
            >
              <Download size={16} />
              <span className="hidden sm:inline">CV</span>
            </a>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)]/50 bg-[var(--bg)]/95"
          >
            <div className="px-4 py-4 space-y-1">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium capitalize transition-colors ${
                    activeSection === id ? 'text-[var(--accent)] bg-[var(--accent-muted)]' : 'text-[var(--text-muted)] hover:bg-[var(--surface)]'
                  }`}
                >
                  {id}
                </button>
              ))}
              <a href={CV_URL} download className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-colors">
                Download CV
              </a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
        <div className="absolute inset-0 bg-mesh bg-grid" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-muted)] text-[var(--accent)] text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-[0_0_20px_-5px_rgba(245,158,11,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            Available for opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[var(--text-muted)] text-base sm:text-lg mb-3 sm:mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-3 sm:mb-4 gradient-text"
          >
            Shaikh Sameer
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-[var(--text-muted)] mb-4 sm:mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="max-w-2xl mx-auto text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 px-1"
          >
            Senior Full Stack Developer with 8 years of experience delivering scalable backend systems and enterprise web applications. Specialized in Node.js architecture, real-time systems, and high-performance APIs.
          </motion.p>

          {/* Tech stack - hidden on small mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="hidden sm:flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
          >
            {['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.05 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] text-xs sm:text-sm hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            <a
              href={CV_URL}
              download
              className="btn-gradient inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base"
            >
              <Download size={18} className="flex-shrink-0" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </a>
            <a
              href={COVER_LETTER_URL}
              download
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-[var(--text)] font-medium hover:border-[var(--accent)]/50 hover:bg-white/5 transition-all duration-300"
            >
              <FileText size={18} />
              Cover Letter
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/20 text-[var(--text)] font-medium hover:border-[var(--accent)]/50 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base"
            >
              <Code size={18} className="flex-shrink-0" />
              Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[var(--text-muted)] font-medium hover:text-[var(--text)] transition-colors"
            >
              <Mail size={18} />
              Contact
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            <a href="https://github.com/shaikhsameershabbir" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
              <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
            <a href="https://linkedin.com/in/shaikh-sameer-39a584216" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
            <a href="mailto:samsk7774@gmail.com" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" aria-label="Email">
              <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
          </motion.div>

          {/* Location & experience - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden sm:flex flex-wrap justify-center gap-6 mt-6 text-sm text-[var(--text-subtle)]"
          >
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Aurangabad, India</span>
            <span className="flex items-center gap-1.5"><Briefcase size={14} /> 8 years experience</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-12 rounded-full border-2 border-[var(--border)] flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-[var(--text-subtle)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats - hidden on mobile (shown in About) */}
      <section className="hidden sm:block py-16 sm:py-20 section-glow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '5+', label: 'Companies' },
              { value: '10+', label: 'Projects' },
              { value: '500+', label: 'Users Supported' },
            ].map((stat, i) => (
              <motion.div key={stat.label} {...stagger(i)} className="glass-card rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </motion.div>
            ))} 
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 section-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-3 sm:mb-4">About</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base">Professional summary</p>
          </motion.div>
          <motion.div {...stagger(1)} className="max-w-2xl mx-auto space-y-6 p-6 sm:p-8 rounded-2xl glass-card">
            <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base text-center">
              Senior Full Stack Developer with 8 years of experience delivering scalable backend systems and enterprise web applications. Specialized in Node.js architecture, real-time systems, and high-performance APIs with strong expertise in React and modern JavaScript frameworks.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base text-center hidden sm:block">
              Proven track record of improving system performance, leading development teams, and deploying production systems serving thousands of users.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base text-center hidden md:block">
              <span className="text-[var(--text)]">Industries:</span> Healthcare, Logistics, Education, SaaS, ERP. <span className="text-[var(--text)]">Backend:</span> Node.js, Express, NestJS, REST APIs, WebSockets, microservices. <span className="text-[var(--text)]">Frontend:</span> React, Next.js, TypeScript, Tailwind.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4 sm:hidden">
              <div className="text-center p-4 rounded-2xl glass-card">
                <div className="text-lg font-bold gradient-text">8+</div>
                <div className="text-xs text-[var(--text-muted)]">Years</div>
              </div>
              <div className="text-center p-4 rounded-2xl glass-card">
                <div className="text-lg font-bold gradient-text">5+</div>
                <div className="text-xs text-[var(--text-muted)]">Companies</div>
              </div>
              <div className="text-center p-4 rounded-2xl glass-card">
                <div className="text-lg font-bold gradient-text">10+</div>
                <div className="text-xs text-[var(--text-muted)]">Projects</div>
              </div>
              <div className="text-center p-4 rounded-2xl glass-card">
                <div className="text-lg font-bold gradient-text">500+</div>
                <div className="text-xs text-[var(--text-muted)]">Users</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills - Bento layout with category accents */}
      <section id="skills" className="py-20 sm:py-28 section-glow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-3 sm:mb-4">Skills</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto">
              Languages, frameworks, databases, DevOps, cloud, and engineering practices
            </p>
          </motion.div>

          {/* Category accent colors for visual variety */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-fr">
            {skillsWithIcons.map((skill, i) => {
              const Icon = skill.icon;
              const accents = [
                'from-amber-500/20 to-amber-600/5 border-l-amber-500/60',
                'from-emerald-500/20 to-emerald-600/5 border-l-emerald-500/60',
                'from-sky-500/20 to-sky-600/5 border-l-sky-500/60',
                'from-violet-500/20 to-violet-600/5 border-l-violet-500/60',
                'from-rose-500/20 to-rose-600/5 border-l-rose-500/60',
                'from-cyan-500/20 to-cyan-600/5 border-l-cyan-500/60',
                'from-orange-500/20 to-orange-600/5 border-l-orange-500/60',
                'from-indigo-500/20 to-indigo-600/5 border-l-indigo-500/60',
              ];
              const iconAccents = [
                'bg-amber-500/15 text-amber-400',
                'bg-emerald-500/15 text-emerald-400',
                'bg-sky-500/15 text-sky-400',
                'bg-violet-500/15 text-violet-400',
                'bg-rose-500/15 text-rose-400',
                'bg-cyan-500/15 text-cyan-400',
                'bg-orange-500/15 text-orange-400',
                'bg-indigo-500/15 text-indigo-400',
              ];
              const accent = accents[i % accents.length];
              const iconAccent = iconAccents[i % iconAccents.length];
              return (
                <motion.div
                  key={skill.category}
                  {...stagger(i)}
                  className={`group relative overflow-hidden rounded-2xl border-l-4 bg-gradient-to-br ${accent} border border-white/[0.06] p-5 sm:p-6 transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_40px_-12px_rgba(245,158,11,0.15)]`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconAccent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => {
                      const ItemIcon = skillToIcon[item] || Box;
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-[var(--text-muted)] text-xs sm:text-sm border border-white/[0.06] hover:border-white/10 hover:text-[var(--text)] hover:bg-white/[0.06] transition-all duration-200"
                        >
                          <ItemIcon className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 sm:py-28 section-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-3 sm:mb-4">Experience</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base">8 years across 5 companies</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-[var(--border)]" />
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, i) => (
                <motion.div key={exp.company} {...stagger(i)} className="relative flex gap-4 sm:gap-6 pl-10 sm:pl-12">
                  <div className={`absolute left-1.5 sm:left-2.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${exp.current ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`} />
                  <div className="flex-1 p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)]">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-[var(--accent)] font-medium text-sm sm:text-base">
                          <Building size={14} className="flex-shrink-0" />
                          {exp.company}
                        </div>
                        <p className="text-[var(--text-subtle)] text-xs sm:text-sm mt-1 hidden sm:block">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[var(--text-muted)] text-xs sm:text-sm">{exp.duration}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded bg-[var(--success-muted)] text-[var(--success)] text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      {exp.achievements.map((a) => (
                        <li key={a} className="text-[var(--text-muted)] text-xs sm:text-sm flex gap-2">
                          <Award size={12} className="mt-0.5 flex-shrink-0 text-[var(--accent)]/70 sm:w-3.5 sm:h-3.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-1.5 sm:px-2 py-0.5 rounded bg-[var(--surface-hover)] text-[var(--text-subtle)] text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 sm:py-28 section-glow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-3 sm:mb-4">Projects</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-2xl mx-auto">
              Enterprise platforms, SaaS products, and real-time systems — from education to food delivery
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-10">
            {projects.map((p, i) => {
              const ProjectIcon = projectIcons[p.title] || Code;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl glass-card">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--accent)]/0 via-[var(--accent)]/20 to-[var(--accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
                    <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[var(--text-subtle)]/40 text-xs sm:text-sm font-mono hidden sm:inline">
                      0{i + 1}
                    </span>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-8">
                      <div className="flex-shrink-0 flex items-center gap-3 sm:block">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[var(--accent-muted)] flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                          <ProjectIcon className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--accent)]" />
                        </div>
                        <div className="sm:hidden flex-1 min-w-0">
                          <h3 className="text-lg font-display font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                            {p.title}
                          </h3>
                          <span className="text-[var(--text-muted)] text-xs">{p.subtitle}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="hidden sm:flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                            {p.title}
                          </h3>
                          <span className="px-2 py-0.5 rounded-md bg-[var(--accent-muted)] text-[var(--accent)] text-xs font-medium">
                            {p.subtitle}
                          </span>
                        </div>
                        <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                          {p.description}
                        </p>

                        {/* Highlights & Architecture - hidden on mobile */}
                        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-xs font-semibold text-[var(--text-subtle)] uppercase tracking-wider mb-3 flex items-center gap-2">
                              <Layers size={12} />
                              Highlights
                            </h4>
                            <ul className="space-y-2">
                              {p.highlights.map((h) => (
                                <li key={h} className="text-[var(--text-muted)] text-sm flex gap-2">
                                  <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-[var(--accent)]/80" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-[var(--text-subtle)] uppercase tracking-wider mb-3">
                              Architecture
                            </h4>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                              {p.architecture}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-[var(--surface-hover)] text-[var(--text-muted)] text-xs font-medium border border-[var(--border)]/50"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-20 sm:py-28 section-glow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-3 sm:mb-4">Architecture</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto">
              System design, scalable backend, CI/CD, API security, and deployment practices
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div {...stagger(0)} className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-3 sm:mb-4">
                <Server className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2 sm:mb-3">Scalable Node.js</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm mb-3 sm:mb-4">
                REST APIs with Express & NestJS, microservices, JWT auth, query optimization, WebSocket notifications. 40% latency reduction via indexing.
              </p>
              <ul className="space-y-1 text-[var(--text-muted)] text-xs sm:text-sm hidden sm:block">
                <li>• Role-based access control</li>
                <li>• Real-time notification infra</li>
              </ul>
            </motion.div>
            <motion.div {...stagger(1)} className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-3 sm:mb-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2 sm:mb-3">CI/CD & Docker</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm mb-3 sm:mb-4">
                GitHub Actions, Docker, Linux VPS, DigitalOcean, AWS. 60% faster releases. Automated deployments, Nginx, server configuration.
              </p>
              <ul className="space-y-1 text-[var(--text-muted)] text-xs sm:text-sm hidden sm:block">
                <li>• Automated deployments</li>
                <li>• VPS deployment</li>
              </ul>
            </motion.div>
            <motion.div {...stagger(2)} className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card hidden md:block">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2 sm:mb-3">API Security</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm">
                JWT authentication, role-based authorization, secure transaction systems, server-side validation.
              </p>
            </motion.div>
            <motion.div {...stagger(3)} className="p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card hidden lg:block">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2 sm:mb-3">Performance</h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm">
                Redis caching, query optimization, indexing, performance monitoring, UI rendering optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 sm:py-28 section-glow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-3 sm:mb-4">Download</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base mb-8 sm:mb-10">CV and cover letter</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <a
                href={CV_URL}
                download
                className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-black font-semibold"
              >
                <Download size={18} />
                CV (PDF)
              </a>
              <a
                href={COVER_LETTER_URL}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-[var(--text)] font-medium"
              >
                <FileText size={18} />
                Cover Letter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28 section-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold gradient-text mb-3 sm:mb-4">Contact</h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base">Open to opportunities</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div {...stagger(0)} className="p-6 sm:p-8 rounded-2xl glass-card">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-6">Get in touch</h3>
              <div className="space-y-4">
                <a href="mailto:samsk7774@gmail.com" className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  <Mail size={20} />
                  samsk7774@gmail.com
                </a>
                <a href="tel:+918379843464" className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                  <Phone size={20} />
                  +91-8379843464
                </a>
                <div className="flex items-center gap-3 text-[var(--text-muted)]">
                  <MapPin size={20} />
                  Aurangabad, India
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/shaikhsameershabbir" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/shaikh-sameer-39a584216" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div {...stagger(1)} className="p-6 sm:p-8 rounded-2xl glass-card">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Name</label>
                  <input id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg)]/50 border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent)]/50 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Email</label>
                  <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-[var(--bg)]/50 border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent)]/50 transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-[var(--bg)]/50 border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent)]/50 transition-colors resize-none" placeholder="Your message..." />
                </div>
                {formStatus === 'success' && (
                  <p className="text-[var(--success)] text-sm">Thanks! I&apos;ll get back to you soon.</p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-gradient w-full py-4 rounded-xl text-black font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-14 section-glow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[var(--text-subtle)] text-sm">© {new Date().getFullYear()} Shaikh Sameer</p>
          <p className="text-[var(--text-subtle)] text-sm">Built with Next.js, TypeScript, Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
