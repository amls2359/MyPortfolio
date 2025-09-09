import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { z } from 'zod';
    import { Mail, Phone, MapPin, Send } from 'lucide-react';
    import Swal from 'sweetalert2';
   

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .regex(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces'),

  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .trim()
    .regex(
      /^(\+91[6-9]\d{9}|[6-9]\d{9})$/,
      'Please enter a valid phone number'
    ),

  subject: z
    .string()
    .trim()
    .min(5, 'Subject must be at least 5 characters'),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters'),
});


    const Contact = () => {
      const [isSubmitting, setIsSubmitting] = useState(false);
      
      const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(contactSchema)
      });



const onSubmit = async (data) => {
  setIsSubmitting(true);

  try {
  const response = await fetch("http://localhost:5000/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});


    const result = await response.json();

    if (result.success) {
      Swal.fire({
        toast: true,
        position: "top", // top-end, bottom-end, bottom-start, etc.
        icon: "success",
        title: "Message sent successfully ✅",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      reset();
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: result.error || "Failed to send message ❌",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: "Something went wrong ❌",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  } finally {
    setIsSubmitting(false);
  }
};

      const contactInfo = [
        {
          icon: <Mail className="w-6 h-6" />,
          title: 'Email',
          value: 'amalskumar20@gmail.com',
          link: 'mailto:amalskumar20@gmail.com'
        },
        {
          icon: <Phone className="w-6 h-6" />,
          title: 'Phone',
          value: '+91 9645342887',
          link: 'tel:+9645342887'
        },
        {
          icon: <MapPin className="w-6 h-6" />,
          title: 'Kerala,india',
          value: 'Kollam',
          link: null
        }
      ];

      return (
        <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-6 font-['Montserrat']">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto font-['Open_Sans']">
                Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6 font-['Montserrat']">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-8 font-['Open_Sans'] leading-relaxed">
                    Whether you have a project in mind, need technical consultation, or just want to say hello, 
                    I'd love to hear from you. I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-white font-['Montserrat']">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-['Open_Sans']"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-zinc-600 dark:text-zinc-300 font-['Open_Sans']">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-colors"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor='phone' className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-colors"
                    placeholder="Your phone number"
                    >
                    </input>
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
                    )}
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-colors"
                      placeholder="Project inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white transition-colors resize-vertical"
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;