'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, Code, Database, Server, Palette, Star, ArrowRight, ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Next.js, and TypeScript',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Express, and modern APIs',
      features: ['Node.js & Express', 'REST & GraphQL APIs', 'Microservices', 'Authentication']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database architecture and optimization for performance',
      features: ['MongoDB & PostgreSQL', 'Database Optimization', 'Data Modeling', 'Backup & Recovery']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that enhance user experience',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
  ];

  const technologies = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js', level: 90, color: 'bg-green-500' },
    { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
    { name: 'MongoDB', level: 85, color: 'bg-green-600' },
    { name: 'Next.js', level: 92, color: 'bg-gray-500' },
    { name: 'PostgreSQL', level: 80, color: 'bg-blue-700' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Shaikh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'Working with Shaikh was a game-changer for our startup. He built a robust backend system that scaled perfectly with our growth.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      company: 'CreativeStudio',
      content: 'Shaikh\'s frontend development skills are top-notch. He brought our designs to life with pixel-perfect implementation.',
      rating: 5
    }
  ];

  const recentProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '/projects'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tech: ['Next.js', 'TypeScript', 'Prisma'],
      link: '/projects'
    },
    {
      title: 'Social Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tech: ['React', 'D3.js', 'Express'],
      link: '/projects'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -180, -360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for new projects
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 font-medium"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="text-6xl md:text-8xl font-display font-bold text-white text-shadow"
            >
              <motion.span
                className="gradient-text-blue"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Shaikh Sameer
              </motion.span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              className="text-3xl md:text-4xl font-heading font-semibold text-gray-200"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="gradient-text-purple"
              >
                Full Stack Developer
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-gray-300"
              >
                {" "}&amp; UI/UX Enthusiast
              </motion.span>
            </motion.h2>

            {/* Enhanced Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              <motion.p
                className="text-xl font-body text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                I specialize in building{" "}
                <motion.span
                  className="gradient-text-green font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  modern, scalable web applications
                </motion.span>{" "}
                using the MERN stack. With over 3 years of experience, I create digital experiences that combine cutting-edge technology with exceptional user design.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  San Francisco, CA
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  Available for remote work
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Open to opportunities
                </span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link
                href="/projects"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/contact"
                className="group border-2 border-gray-600 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Let&apos;s Collaborate
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>

              <Link
                href="/resume.pdf"
                download
                className="group bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Download CV
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex justify-center space-x-6 pt-8"
            >
              <a
                href="https://github.com/shaikhsameer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/shaikhsameer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:shaikhsameer@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Happy Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              What I{" "}
              <motion.span
                className="gradient-text-blue"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                Do
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl font-body text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I offer comprehensive full-stack development services to bring your ideas to life
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 font-body mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              Tech{" "}
              <motion.span
                className="gradient-text-purple"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                Stack
              </motion.span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies I work with to create amazing digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{tech.name}</span>
                  <span className="text-gray-400 text-sm">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full ${tech.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              Recent{" "}
              <motion.span
                className="gradient-text-green"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                Projects
              </motion.span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group glass rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.link}
                      className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 font-body mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              What Clients{" "}
              <motion.span
                className="gradient-text-blue"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                Say
              </motion.span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Testimonials from satisfied clients and collaborators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 font-body mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <h4 className="text-white font-heading font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 font-body text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-display font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              Ready to Start Your{" "}
              <motion.span
                className="gradient-text-blue"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Next Project?
              </motion.span>
            </motion.h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let&apos;s collaborate to bring your ideas to life. I&apos;m here to help you create
              something amazing that will make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
