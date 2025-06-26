import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xwpozyva");

  const renderForm = () => {
    if (state.succeeded) {
      return (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Thank You!</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Rudranil Chowdhury"
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-800 focus:ring-opacity-50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="rudranil@gmail.com"
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-800 focus:ring-opacity-50 transition-colors"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+919876543210"
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-800 focus:ring-opacity-50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-800 focus:ring-opacity-50 transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Consultation">Consultation</option>
              <option value="Partnership">Partnership</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us about your project or inquiry..."
            className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-800 focus:ring-opacity-50 transition-colors resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
            <Send size={18} className="ml-2" />
          </button>
        </div>
      </form>
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Have a project in mind or just want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-50 dark:bg-amber-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Office Address</h4>
                  <address className="not-italic text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tarapukur Main Rd, Tara Pukur South<br />
                    Agarpara, Pirtala<br />
                    Kolkata, West Bengal 700109
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-50 dark:bg-amber-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+919875663719" className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    +91 98756 63719
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-50 dark:bg-amber-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Email</h4>
                  <a href="mailto:avijitchowdhury55@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    avijitchowdhury55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-50 dark:bg-amber-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 dark:text-white mb-1">Business Hours</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Monday - Saturday: 10:00 AM - 9:00 PM<br />
                    Sunday: 10:00 AM - 7:00 PM<br />
                    Thursday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.212779789138!2d88.3877395!3d22.683121600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89de4a11d4d81%3A0x5863c18e6e5c51bd!2sNew%20Design%20O%20Craft!5e0!3m2!1sen!2sin!4v1747424370313!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Send Us a Message</h3>
            {renderForm()}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
