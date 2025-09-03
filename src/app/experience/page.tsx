'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Users, Code } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: 'Senior Full Stack Developer',
            company: 'Tech Solutions Inc.',
            location: 'San Francisco, CA',
            duration: 'Jan 2024 - Present',
            type: 'Full-time',
            current: true,
            description: 'Leading development of scalable web applications and mentoring junior developers.',
            responsibilities: [
                'Architected and developed microservices-based applications serving 100K+ users',
                'Led a team of 5 developers in building a real-time collaboration platform',
                'Implemented CI/CD pipelines reducing deployment time by 60%',
                'Mentored junior developers and conducted code reviews',
                'Collaborated with product managers to define technical requirements'
            ],
            technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
            achievements: [
                'Improved application performance by 40% through optimization',
                'Reduced bug reports by 50% through better testing practices',
                'Successfully delivered 3 major product releases on time'
            ]
        },
        {
            id: 2,
            title: 'Full Stack Developer',
            company: 'Digital Innovations Ltd.',
            location: 'New York, NY',
            duration: 'Mar 2022 - Dec 2023',
            type: 'Full-time',
            current: false,
            description: 'Developed and maintained multiple client projects with focus on user experience.',
            responsibilities: [
                'Built responsive web applications using React and Node.js',
                'Integrated third-party APIs and payment gateways',
                'Optimized database queries improving response times by 30%',
                'Collaborated with UI/UX designers to implement pixel-perfect designs',
                'Participated in agile development processes and sprint planning'
            ],
            technologies: ['React', 'Express.js', 'MongoDB', 'Redux', 'Stripe', 'Jest'],
            achievements: [
                'Successfully delivered 15+ client projects',
                'Achieved 95% client satisfaction rating',
                'Reduced development time by 25% through reusable components'
            ]
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'WebCraft Studios',
            location: 'Austin, TX',
            duration: 'Jun 2021 - Feb 2022',
            type: 'Full-time',
            current: false,
            description: 'Specialized in React development and creating interactive user interfaces.',
            responsibilities: [
                'Developed responsive web applications using React and modern JavaScript',
                'Implemented state management solutions using Redux and Context API',
                'Collaborated with backend developers to integrate REST APIs',
                'Optimized applications for performance and accessibility',
                'Maintained and updated existing codebases'
            ],
            technologies: ['React', 'JavaScript', 'CSS3', 'SASS', 'Webpack', 'Git'],
            achievements: [
                'Improved page load times by 35%',
                'Enhanced user engagement by 20% through better UX',
                'Maintained 100% code coverage in unit tests'
            ]
        },
        {
            id: 4,
            title: 'Junior Developer',
            company: 'StartupXYZ',
            location: 'Remote',
            duration: 'Sep 2020 - May 2021',
            type: 'Full-time',
            current: false,
            description: 'Started my journey in web development with focus on learning fundamentals.',
            responsibilities: [
                'Learned and applied HTML, CSS, and JavaScript fundamentals',
                'Built simple web applications and landing pages',
                'Participated in code reviews and team meetings',
                'Assisted senior developers with bug fixes and feature implementations',
                'Contributed to documentation and knowledge sharing'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
            achievements: [
                'Completed 10+ small projects and assignments',
                'Successfully transitioned from intern to full-time developer',
                'Built strong foundation in web development principles'
            ]
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Technology',
            location: 'California, USA',
            duration: '2016 - 2020',
            gpa: '3.8/4.0',
            relevantCourses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development']
        }
    ];

    const certifications = [
        {
            name: 'AWS Certified Developer - Associate',
            issuer: 'Amazon Web Services',
            date: '2023',
            credentialId: 'AWS-DEV-123456'
        },
        {
            name: 'React Developer Certification',
            issuer: 'Meta',
            date: '2022',
            credentialId: 'META-REACT-789012'
        },
        {
            name: 'MongoDB Certified Developer',
            issuer: 'MongoDB University',
            date: '2022',
            credentialId: 'MONGODB-DEV-345678'
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Work <span className="gradient-text">Experience</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        My professional journey in software development, showcasing growth, achievements, and continuous learning.
                    </p>
                </motion.div>

                {/* Work Experience */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="glass rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                            {exp.current && (
                                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                                            <Building size={18} />
                                            {exp.company}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                                            <MapPin size={16} />
                                            {exp.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                                            <Calendar size={16} />
                                            {exp.duration} • {exp.type}
                                        </div>
                                        <p className="text-gray-300 mb-4">{exp.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Responsibilities */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            <Code size={18} />
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            <Award size={18} />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="glass rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                                    <Building size={18} />
                                    {edu.institution}
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 mb-2">
                                    <MapPin size={16} />
                                    {edu.location}
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 mb-4">
                                    <Calendar size={16} />
                                    {edu.duration} • GPA: {edu.gpa}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.relevantCourses.map((course) => (
                                            <span
                                                key={course}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="glass rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                                    <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                                    <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                                    <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                                </div>
                            </motion.div>
                        ))}
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
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h2>
                        <p className="text-gray-300 mb-6">
                            I bring a wealth of experience and a passion for creating exceptional digital experiences.
                            Let's discuss how I can contribute to your next project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="border-2 border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
