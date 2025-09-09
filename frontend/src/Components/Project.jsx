import React from 'react';
    import { motion } from 'framer-motion';
    import { ExternalLink, Github } from 'lucide-react';

    const Projects = () => {
      const projects = [
        {
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
          image: '/obscura-footwear.png',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
          liveUrl: 'https://obscura-footwear-1.onrender.com',
          githubUrl: 'https://github.com/amls2359/Obscura-Footwear'
        },
        {
          title:'Portfolio website',
          description: 'A personal portfolio website to showcase projects, skills, and experience. Built with React and Tailwind CSS, featuring smooth animations and responsive design.',
          image: '/Portfolio.png',
          technologies: ['React', 'Tailwind CSS', 'javascript','express.js','mongodb','node.js'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/amls2359/MyPortfolio'

        }
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
                A showcase of my recent work, demonstrating expertise in modern web technologies and user-centered design.
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
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width="600"
                      height="400"
                      loading="lazy"
                      decoding="async"
                       className="w-full h-48 object-cover transition-transform duration-300 transform scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-3 font-['Montserrat']">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-4 font-['Open_Sans'] leading-relaxed">
                      {project.description}
                    </p>
                    
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
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Projects;