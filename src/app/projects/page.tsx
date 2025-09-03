'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

export default function Projects() {
    // Dummy project data - replace with your actual projects
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            githubUrl: 'https://github.com/shaikhsameer/ecommerce-platform',
            liveUrl: 'https://ecommerce-demo.vercel.app',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
            githubUrl: 'https://github.com/shaikhsameer/task-manager',
            liveUrl: 'https://taskmanager-demo.vercel.app',
            featured: true
        },
        {
            id: 3,
            title: 'Social Media Dashboard',
            description: 'A comprehensive social media analytics dashboard that aggregates data from multiple platforms and provides insights and reporting.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            technologies: ['React', 'D3.js', 'Express.js', 'MongoDB', 'Chart.js'],
            githubUrl: 'https://github.com/shaikhsameer/social-dashboard',
            liveUrl: 'https://social-dashboard-demo.vercel.app',
            featured: false
        },
        {
            id: 4,
            title: 'Weather App',
            description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
            technologies: ['Vue.js', 'OpenWeather API', 'Leaflet', 'PWA'],
            githubUrl: 'https://github.com/shaikhsameer/weather-app',
            liveUrl: 'https://weather-app-demo.vercel.app',
            featured: false
        },
        {
            id: 5,
            title: 'Blog Platform',
            description: 'A modern blog platform with markdown support, comment system, and admin panel for content management.',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
            technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
            githubUrl: 'https://github.com/shaikhsameer/blog-platform',
            liveUrl: 'https://blog-demo.vercel.app',
            featured: false
        },
        {
            id: 6,
            title: 'Chat Application',
            description: 'A real-time chat application with group messaging, file sharing, and emoji reactions built with modern web technologies.',
            image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop',
            technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
            githubUrl: 'https://github.com/shaikhsameer/chat-app',
            liveUrl: 'https://chat-demo.vercel.app',
            featured: false
        }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A showcase of my recent work and side projects. Each project represents a unique challenge and learning opportunity.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group glass rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex gap-4">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                                aria-label="View Live Demo"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                                aria-label="View Source Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Play size={16} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 border-2 border-gray-600 hover:border-white text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Github size={16} />
                                            Source
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Other Projects */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Other Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group glass rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex gap-3">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                                                aria-label="View Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                                                aria-label="View Source Code"
                                            >
                                                <Github size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1"
                                        >
                                            <Play size={14} />
                                            Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 border border-gray-600 hover:border-white text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1"
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h2>
                        <p className="text-gray-300 mb-6">
                            I'm always excited to take on new challenges and create amazing digital experiences.
                            Let's discuss your next project!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                Start a Project
                            </a>
                            <a
                                href="https://github.com/shaikhsameer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
