'use client';

import { motion } from 'framer-motion';
import { MapPin, Building, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Coreline IT Solutions',
    location: 'Aurangabad, India',
    duration: 'Feb 2025 – Present',
    current: true,
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    achievements: [
      'Architected scalable backend services supporting enterprise applications for multiple client organizations',
      'Developed responsive admin dashboards using Next.js, React.js and Tailwind CSS for enterprise workflows',
      'Led engineering team of 6 developers delivering web platforms, internal tools, and SaaS applications',
      'Increased API performance by 40%',
      'Established CI/CD pipelines enabling automated deployments, reducing release time by 60%',
      'Implemented reusable frontend components and optimized UI rendering',
      'Guided junior developers through code reviews, architectural discussions, and performance optimization',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'CI/CD', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Moksha Solutions',
    location: 'Aurangabad, India',
    duration: 'Jun 2024 – Jan 2025',
    current: false,
    description: 'Engineered backend services for healthcare and logistics applications.',
    achievements: [
      'Engineered backend services powering applications in healthcare and logistics sectors',
      'Accelerated API response times by redesigning database indexes and improving query execution',
      'Collaborated with frontend teams to implement responsive UI features using React.js',
      'Collaborated with cross-functional teams delivering production features across multiple client projects',
      'Strengthened application stability through debugging, monitoring, and automated testing',
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'ARA Global',
    location: 'Aurangabad, India',
    duration: 'Feb 2023 – Apr 2024',
    current: false,
    description: 'Built internal enterprise applications for 500+ employees.',
    achievements: [
      'Built internal enterprise applications supporting operations for 500+ employees',
      'Delivered complete ERP platform including HR payroll, attendance tracking, and reporting dashboards',
      'Developed responsive frontend dashboards using React.js for operational workflows',
      'Implemented REST APIs using Node.js for frontend-backend communication',
      'Reduced system latency by 40%',
      'Introduced real-time notification infrastructure using WebSockets improving user engagement',
      'Managed production deployments and server configuration across Linux VPS environments',
    ],
    technologies: ['Node.js', 'React', 'REST APIs', 'WebSockets', 'Linux', 'VPS'],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'Techsparagus',
    location: 'Aurangabad, India',
    duration: 'Feb 2022 – Feb 2023',
    current: false,
    description: 'Engineered REST APIs and real-time systems for mobile and web applications.',
    achievements: [
      'Engineered REST APIs supporting mobile and web applications handling thousands of API requests daily',
      'Developed responsive frontend components using React.js for desktop and mobile',
      'Integrated frontend applications with backend services through REST APIs',
      'Introduced real-time messaging and notification systems using WebSockets',
      'Structured scalable MongoDB and MySQL database schemas improving query performance',
    ],
    technologies: ['Node.js', 'React', 'MongoDB', 'MySQL', 'WebSockets', 'REST APIs'],
  },
  {
    id: 5,
    title: 'Junior Full Stack Developer',
    company: 'Vaibhav Consulting Services',
    location: 'Aurangabad, India',
    duration: 'Dec 2019 – Jan 2022',
    current: false,
    description: 'Contributed to ERP modules and casino-style gaming systems.',
    achievements: [
      'Contributed to ERP modules including billing, inventory management, and financial reporting',
      'Created backend logic for casino-style gaming systems including betting engines and wallet tracking',
      'Built desktop business tools using Electron.js improving operational efficiency',
    ],
    technologies: ['Node.js', 'Electron.js', 'JavaScript', 'MySQL'],
  },
];

const education = [
  {
    degree: 'Bachelor of Engineering — Computer Science',
    institution: 'Dr. Babasaheb Ambedkar Marathwada University',
    location: 'Aurangabad, India',
  },
];

export default function Experience() {
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
            Professional Experience
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            7+ years building scalable systems across healthcare, logistics, education, and SaaS
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative flex gap-6"
              >
                <div
                  className={`relative z-10 w-4 h-4 rounded-full mt-2 flex-shrink-0 ${
                    exp.current ? 'bg-emerald-500' : 'bg-zinc-600'
                  }`}
                >
                  {exp.current && (
                    <div className="absolute inset-0 w-4 h-4 bg-emerald-500 rounded-full animate-ping opacity-75" />
                  )}
                </div>

                <div className="flex-1 pb-12">
                  <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-zinc-600/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-zinc-400 mt-1">
                          <Building size={16} />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400 font-medium">{exp.duration}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-sm">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <Award size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="text-zinc-400 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-zinc-700/50 text-zinc-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Education</h2>
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6">
            {education.map((edu) => (
              <div key={edu.degree}>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-zinc-400 mt-1">
                  <Building size={16} />
                  {edu.institution}
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                  <MapPin size={14} />
                  {edu.location}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-zinc-400 mb-6">
              I bring 7+ years of full-stack experience. Let&apos;s discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/Shaikh-Sameer-CV.pdf"
                download
                className="border border-zinc-600 hover:border-zinc-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
