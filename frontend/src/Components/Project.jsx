import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Envision',
      subtitle: 'Project Pricing & Delivery Management Platform',
      role: 'Full-Stack Developer — Client & Admin Portals',
      type: 'professional',
      description:
        'Multi-tenant SaaS platform enabling consulting and professional services firms to configure delivery operations and build AI-assisted project pricing models with approval workflows and subscription billing.',
      highlights: [
        'Developed the Next.js client portal with API integration, UI design, and end-to-end delivery of pricing models, resource allocation, and tenant workflows.',
        'Built complete functionality in the internal admin portal for platform-level client management, subscriptions, support operations, and reporting.',
        'Integrated and tested NestJS serverless APIs on AWS (Lambda, DynamoDB, S3, Cognito) for multi-tenant authentication and data flows.',
        'Implemented subscription-aware UI with Zoho billing integration, role-based navigation, and Radix UI components across client and admin experiences.',
      ],
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'NestJS',
        'AWS Lambda',
        'DynamoDB',
        'S3',
        'Cognito',
        'Zoho',
      ],
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: '/obscura-footwear.png',
      technologies: ['Html', 'Css', 'Javascript', 'Node.js', 'Express.js', 'Mongodb'],
      liveUrl: 'https://obscura-footwear-1.onrender.com',
      githubUrl: 'https://github.com/amls2359/Obscura-Footwear',
    },
    {
      title: 'Portfolio website',
      description:
        'A personal portfolio website to showcase projects, skills, and experience. Built with React and Tailwind CSS, featuring smooth animations and responsive design.',
      image: '/Portfolio.png',
      technologies: ['React', 'Tailwind CSS', 'javascript', 'Express.js', 'Node.js'],
      liveUrl: 'https://myportfolio-nvh4.onrender.com',
      githubUrl: 'https://github.com/amls2359/MyPortfolio',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-6 font-['Montserrat']">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto font-['Open_Sans']">
            Professional and personal work demonstrating expertise in modern web technologies,
            API integration, and user-centered design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${
                project.type === 'professional' ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover transition-transform duration-300 transform scale-110 group-hover:scale-100"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-90" />
                      <p className="text-2xl font-bold font-['Montserrat']">{project.title}</p>
                      {project.subtitle && (
                        <p className="text-sm text-indigo-100 mt-1 font-['Open_Sans']">{project.subtitle}</p>
                      )}
                    </div>
                  </div>
                )}
                {project.type === 'professional' && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full uppercase tracking-wide">
                    Professional Experience
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white font-['Montserrat']">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1 font-['Open_Sans']">
                      {project.subtitle}
                    </p>
                  )}
                  {project.role && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-['Open_Sans']">
                      {project.role}
                    </p>
                  )}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4 font-['Open_Sans'] leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-4 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-300 font-['Open_Sans'] leading-relaxed"
                      >
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1.5 shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
