import React from 'react';
    import { motion } from 'framer-motion';

    const Skills = () => {
      const skillCategories = [
        {
          title: 'Frontend Development',
          skills: [
            { name: 'Html', level: 95 },
            { name: 'css', level: 90 },
            { name: 'javascript', level: 85 },
            { name: 'Vue.js', level: 50 },
            { name: 'Tailwind CSS', level: 65 },
          ]
        },
        {
          title: 'Backend Development',
          skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Express.js', level: 90 },
            { name: 'FastAPI', level: 80 },
            { name: 'REST APIs', level: 95 }
          ]
        },
        {
          title: 'Database & Cloud',
          skills: [
            { name: 'SQL', level: 60 },
            { name: 'MongoDB', level: 80 },
            { name: 'Render', level: 90 }
          ]
        },
        {
          title: 'Design & Tools',
          skills: [
            { name: 'Figma', level: 85 },
            { name: 'Git/GitHub', level: 95 },
            { name: 'Vs Code', level: 80 },
            { name: 'Postman', level: 80 }
          ]
        }
      ];

      return (
        <section id="skills" className="py-20 bg-white dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-6 font-['Montserrat']">
                Skills & Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto font-['Open_Sans']">
                A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-zinc-800 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 font-['Montserrat']">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-zinc-700 dark:text-zinc-300 font-medium font-['Open_Sans']">
                            {skill.name}
                          </span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-600 to-blue-500 h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Skills;