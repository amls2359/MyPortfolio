import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = document.querySelector('header')?.offsetHeight ?? 64;

    requestAnimationFrame(() => {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - headerHeight - 8);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-indigo-950 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-800 dark:text-white mb-6 font-['Montserrat']">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Amal:S
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-3xl mx-auto font-['Open_Sans']">
              Full-Stack MERN Developer & UI/UX Designer dedicated to crafting
              intuitive, responsive, and impactful digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-6 mb-16"
          >
            <a
              href="https://github.com/amls2359"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/amals9353"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="mailto:amalskumar20@gmail.com"
              className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-slate-400 mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
