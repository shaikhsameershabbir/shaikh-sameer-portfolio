'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Experience', href: '/experience' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/shaikhsameer',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/shaikhsameer',
            icon: Linkedin,
        },
        {
            name: 'Email',
            href: 'mailto:shaikhsameer@example.com',
            icon: Mail,
        },
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Shaikh Sameer</h3>
                        <p className="text-gray-400">
                            Full Stack Developer specializing in MERN stack. Building modern web applications with clean, efficient code.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                                    >
                                        {link.name}
                                        <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                        <div className="space-y-2">
                            <p className="text-gray-400">
                                <span className="font-medium">Email:</span> shaikhsameer@example.com
                            </p>
                            <p className="text-gray-400">
                                <span className="font-medium">Location:</span> Available for remote work
                            </p>
                            <p className="text-gray-400">
                                <span className="font-medium">Status:</span> Open to opportunities
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Shaikh Sameer. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm mt-2 md:mt-0">
                        Built with Next.js 14, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
