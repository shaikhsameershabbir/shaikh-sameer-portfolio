'use client';

import { motion } from 'framer-motion';
import { Download, Code, Database, Server, Palette, Wrench } from 'lucide-react';

export default function About() {
    const skills = [
        {
            category: 'Frontend',
            icon: Palette,
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
            color: 'text-blue-400'
        },
        {
            category: 'Backend',
            icon: Server,
            technologies: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL'],
            color: 'text-green-400'
        },
        {
            category: 'Database',
            icon: Database,
            technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Prisma'],
            color: 'text-purple-400'
        },
        {
            category: 'Tools & Others',
            icon: Wrench,
            technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest'],
            color: 'text-orange-400'
        }
    ];

    const timeline = [
        {
            year: '2024',
            title: 'Senior Full Stack Developer',
            company: 'Tech Solutions Inc.',
            description: 'Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices.',
            current: true
        },
        {
            year: '2022',
            title: 'Full Stack Developer',
            company: 'Digital Innovations Ltd.',
            description: 'Developed and maintained multiple client projects. Collaborated with cross-functional teams to deliver high-quality solutions.',
            current: false
        },
        {
            year: '2021',
            title: 'Frontend Developer',
            company: 'WebCraft Studios',
            description: 'Specialized in React development and UI/UX implementation. Created responsive and interactive user interfaces.',
            current: false
        },
        {
            year: '2020',
            title: 'Junior Developer',
            company: 'StartupXYZ',
            description: 'Started my journey in web development. Learned fundamentals of HTML, CSS, JavaScript, and various frameworks.',
            current: false
        }
    ];

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
                    <motion.h1
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    >
                        About{" "}
                        <motion.span
                            className="gradient-text-blue"
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            Me
                        </motion.span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Passionate about creating digital experiences that make a difference
                    </p>
                </motion.div>

                {/* Professional Summary */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-white mb-6">Professional Summary</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    I&apos;m a passionate Full Stack Developer with over 3 years of experience in building
                                    modern web applications. My expertise lies in the MERN stack, and I&apos;m dedicated
                                    to creating scalable, efficient, and user-friendly solutions.
                                </p>
                                <p>
                                    Throughout my career, I&apos;ve had the opportunity to work on diverse projects ranging
                                    from e-commerce platforms to real-time applications. I believe in writing clean,
                                    maintainable code and following industry best practices.
                                </p>
                                <p>
                                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                                    open-source projects, or sharing knowledge with the developer community. I&apos;m
                                    always eager to learn and grow in this ever-evolving field.
                                </p>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                                >
                                    <Download size={20} />
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* Profile Image Placeholder */}
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Code size={48} />
                                    </div>
                                    <p className="text-lg font-semibold">Profile Image</p>
                                    <p className="text-sm opacity-75">Replace with your photo</p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    <motion.h2
                        className="text-4xl font-display font-bold text-white text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Skills &{" "}
                        <motion.span
                            className="gradient-text-purple"
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            Technologies
                        </motion.span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.category}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="glass rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon className={`w-8 h-8 ${skill.color}`} />
                                        <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
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

                {/* Experience Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <motion.h2
                        className="text-4xl font-display font-bold text-white text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Experience{" "}
                        <motion.span
                            className="gradient-text-green"
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            Timeline
                        </motion.span>
                    </motion.h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="relative flex items-start gap-6"
                                >
                                    {/* Timeline dot */}
                                    <div className={`relative z-10 w-4 h-4 rounded-full ${item.current ? 'bg-blue-500' : 'bg-gray-500'} mt-2`}>
                                        {item.current && (
                                            <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 glass rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                                <p className="text-blue-400 font-medium">{item.company}</p>
                                            </div>
                                            <span className="text-gray-400 font-medium mt-2 md:mt-0">{item.year}</span>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                        {item.current && (
                                            <span className="inline-block mt-3 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                                Current Position
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
                        <p className="text-gray-300 mb-6">
                            I&apos;m always interested in new opportunities and exciting projects.
                            Let&apos;s discuss how we can bring your ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="/projects"
                                className="border-2 border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
