import React from 'react';
    import { motion } from 'framer-motion';
    import { Code, Palette, Zap } from 'lucide-react';

    const About = () => {
      const values = [
        {
          icon: <Code className="w-8 h-8" />,
          title: 'Clean Code',
          description: 'Writing maintainable, scalable code that stands the test of time.'
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'User-Centered Design',
          description: 'Creating intuitive experiences that delight users and solve real problems.'
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: 'Performance First',
          description: 'Building fast, optimized applications that provide exceptional user experiences.'
        }
      ];

      return (
        <section id="about" className="py-20 bg-white dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-6 font-['Montserrat']">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto"></div>
            </motion.div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="relative w-fit mx-auto lg:mx-0 rounded-2xl p-[4px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-border">
      <img
        src="/AMALS.webp"
        alt="Amal:s - Mern-Stack Developer"
        width="500"
        height="600"
        loading="lazy"
        decoding="async"
        className="rounded-2xl shadow-2xl w-full max-w-md"
      />
    </div>
  </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-['Open_Sans']">
                  Hi, I’m Amal, a passionate MERN stack developer with strong problem-solving skills and a love for building efficient, user-friendly applications. I have hands-on experience developing projects using JavaScript, Node.js, MongoDB, and React, and I’ve solved over 80+ coding challenges on LeetCode, sharpening my logic and coding ability..
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-['Open_Sans']">
                  I’m a self-learner who enjoys exploring new technologies, and I strongly believe in continuous improvement. Along with my technical skills, I bring leadership qualities gained from my past work experience in a direct selling company, where I also learned the value of teamwork and adaptability.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-['Open_Sans']">
                 If given the opportunity, I will contribute my best to create impactful solutions and grow as a developer while adding value to the team I work with.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-white mb-12 text-center font-['Montserrat']">
                My Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-slate-50 dark:bg-zinc-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-6">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-zinc-800 dark:text-white mb-4 font-['Montserrat']">
                      {value.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-300 font-['Open_Sans']">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default About;