'use client';

import { motion } from 'framer-motion';
import { Download, Server, Code, Database, Wrench } from 'lucide-react';
import Link from 'next/link';

const skills = [
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'REST APIs', 'WebSockets', 'Microservices'],
  },
  {
    category: 'Frontend',
    icon: Code,
    technologies: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Redux Toolkit'],
  },
  {
    category: 'Databases',
    icon: Database,
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Query Optimization', 'Prisma', 'Knex.js'],
  },
  {
    category: 'DevOps & Cloud',
    icon: Wrench,
    technologies: ['Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'Nginx', 'AWS', 'DigitalOcean', 'Cloudflare R2'],
  },
];

export default function About() {
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
            About Me
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Senior Full Stack Developer with 7+ years of experience
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Professional Summary</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Senior Full Stack Developer with 7+ years of experience delivering scalable backend systems and
                enterprise web applications. Specialized in Node.js architecture, real-time systems, and
                high-performance APIs with strong expertise in React.js and modern JavaScript frameworks.
              </p>
              <p>
                Proven track record of improving system performance, leading development teams, and deploying
                production systems serving thousands of users. I have worked across healthcare, logistics,
                education, SaaS, and ERP industries.
              </p>
              <p>
                <strong className="text-zinc-300">Backend strengths:</strong> Node.js, Express, NestJS, REST APIs,
                WebSockets, microservices, query optimization, Redis caching.
              </p>
              <p>
                <strong className="text-zinc-300">Frontend strengths:</strong> React, Next.js, TypeScript, Tailwind
                CSS, responsive dashboards, admin panels.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/Shaikh-Sameer-CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-zinc-400" />
                    <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-zinc-700/50 text-zinc-400 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-zinc-400 mb-6">
              Open to new opportunities. Let&apos;s discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="border border-zinc-600 hover:border-zinc-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
