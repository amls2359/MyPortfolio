import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dark') || 'false');
    } catch {
      return false;
    }
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('dark', JSON.stringify(isDarkMode));
    } catch {}
  }, [isDarkMode]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (!el) {
    console.warn("scrollToSection: target not found for", href);
    setIsMenuOpen(false);
    return;
  }

  const headerHeight = headerRef.current?.offsetHeight ?? 64;

  // Close the menu first, but trigger scroll AFTER it's closed
  setIsMenuOpen(false);

  // Wait long enough for the menu closing animation to finish
  const DELAY_MS = isMenuOpen ? 300 : 0; // longer delay if menu was open

  setTimeout(() => {
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - headerHeight - 8);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, DELAY_MS);
};

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h1 className="text-3xl font-extrabold font-montserrat bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-text">
              AMAL's Portfolio
            </h1>
          </motion.div>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-xl font-large font-inter transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                type="button"
                onClick={() => setIsDarkMode((s) => !s)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
              </motion.button>

              <div className="md:hidden">
                <motion.button
                  type="button"
                  onClick={() => setIsMenuOpen((s) => !s)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-700"
              style={{ overflow: 'hidden' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-base font-medium font-inter text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-md transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
