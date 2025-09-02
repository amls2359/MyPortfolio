import React from 'react';
import { Github, Linkedin, Mail, Atom, Wind } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/amls2359',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/amals9353',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:amalskumar20@gmail.com',
      label: 'Email'
    }
  ];

  const footerLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-zinc-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Amal s</h3>
            <p className="text-zinc-400 mb-6 font-['Open_Sans']">
              Full-Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-800 hover:bg-indigo-600 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Montserrat']">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 font-['Open_Sans']"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Montserrat']">Get In Touch</h4>
            <p className="text-zinc-400 mb-2 font-['Open_Sans']">
              Ready to work together?
            </p>
            <a
              href="mailto:amalskumar20@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-['Open_Sans']"
            >
              amalskumar20@gmail.com
            </a>
            <p className="text-zinc-400 mt-4 font-['Open_Sans']">
              kerala, kollam
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0 font-['Open_Sans']">
            © {currentYear} Amal s. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm flex items-center font-['Open_Sans']">
            Built with &nbsp; <Atom size={20} color="skyblue" /> React &nbsp;and&nbsp;
            <Wind size={20} color="teal" />Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
