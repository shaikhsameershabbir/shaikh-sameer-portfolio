'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'StudyPulse',
    subtitle: 'Online Learning and Examination Platform',
    description:
      'Scalable online learning platform allowing students to access study material, take exams, and track academic progress. Admin dashboard for institutions to manage exams, users, reports, and financial transactions.',
    highlights: [
      'Multi-role access: Admins, Operators, Schools, Students',
      'JWT authentication with role-based authorization',
      'Razorpay payment gateway for subscription-based access',
      'PDF report generation for student performance analytics',
      'DigitalOcean Spaces for file uploads (study materials, images)',
      'Redis caching reducing database load, ~30% API improvement',
      'CI/CD pipeline with GitHub Actions and Docker',
    ],
    technologies: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Razorpay'],
    architecture: 'Backend: Node.js + Express + PostgreSQL. Frontend: React admin dashboard. Auth: JWT. Storage: DigitalOcean Spaces.',
  },
  {
    id: 2,
    title: 'Indian Design Editing Platform',
    subtitle: 'Marketing Design Customization for Small Businesses',
    description:
      'Web platform allowing small businesses to quickly customize marketing designs by editing pre-built templates. Users can modify text, colors, branding, upload logos, and purchase customized designs.',
    highlights: [
      'Real-time template editing interface',
      'Cloudflare R2 object storage for high-resolution assets',
      'Backend APIs for template management and purchase transactions',
      'Image purchase system for marketing and branding use',
      'CDN-backed storage for optimized asset delivery',
    ],
    technologies: ['React', 'Node.js', 'Cloudflare R2', 'REST APIs'],
    architecture: 'Frontend editing interface + backend APIs. Storage: Cloudflare R2 with CDN.',
  },
  {
    id: 3,
    title: 'POST EAT',
    subtitle: 'Australian Food Delivery Platform',
    description:
      'Full-stack food delivery system supporting restaurants, customers, and delivery partners. Real-time order tracking and live status updates.',
    highlights: [
      'Responsive customer and restaurant interfaces',
      'Backend services for orders, menus, payments, delivery logistics',
      'Real-time order tracking via WebSockets and Socket.IO',
      'Notification services for customers and delivery partners',
      'Optimized database queries and indexing',
    ],
    technologies: ['Node.js', 'MongoDB', 'React', 'Socket.IO', 'WebSockets'],
    architecture: 'Node.js + MongoDB backend. Real-time: Socket.IO. Multi-role: Restaurants, Customers, Delivery.',
  },
  {
    id: 4,
    title: 'KT Guru',
    subtitle: 'Global SaaS Knowledge Transfer Platform',
    description:
      'SaaS platform enabling consultants to conduct knowledge transfer sessions with global clients. Real-time communication and collaboration features.',
    highlights: [
      'Real-time chat, file sharing, and collaboration',
      'Scalable backend for concurrent sessions and multi-user interactions',
      'Role-based access: consultants, clients, admins',
    ],
    technologies: ['Node.js', 'React', 'WebSockets', 'SaaS'],
    architecture: 'SaaS multi-tenant. Real-time modules for chat and file sharing.',
  },
  {
    id: 5,
    title: 'Casino Gaming Platform',
    subtitle: 'Real-time Casino Gaming Backend',
    description:
      'Real-time casino gaming backend supporting multiple games including Roulette and DKD. Betting engine with wallet management and secure transactions.',
    highlights: [
      'Betting engine: bet validation, payout calculation, wallet management',
      'Server-side randomization algorithms for fairness',
      'Secure transaction system for bets, winnings, wallet balances',
    ],
    technologies: ['Node.js', 'WebSockets', 'Real-time', 'Wallet System'],
    architecture: 'Backend betting engine. Server-side randomization. Wallet and transaction logging.',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Enterprise and product work across education, design, food delivery, SaaS, and gaming
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8 hover:border-zinc-600/50 transition-colors"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <p className="text-zinc-400 text-sm">{project.subtitle}</p>
              </div>

              <p className="text-zinc-400 mb-6">{project.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-2">Architecture</h3>
                <p className="text-zinc-500 text-sm">{project.architecture}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-2">Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-zinc-700/50 text-zinc-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/shaikhsameershabbir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-500 text-sm">Enterprise / client projects</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h2>
            <p className="text-zinc-400 mb-6">
              I&apos;m open to new opportunities. Let&apos;s discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/shaikhsameershabbir"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-600 hover:border-zinc-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
