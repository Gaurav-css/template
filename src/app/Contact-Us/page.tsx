'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    termsAccepted: false,
  });

  // State to handle form validation errors
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; terms?: string }>({});
  
  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | 'idle'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
      if (checked) {
        setErrors(prev => ({...prev, terms: undefined}));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
      const newErrors: { name?: string; email?: string; message?: string; terms?: string } = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.email.trim()) {
          newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid.';
      }
      if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
      if (!formData.termsAccepted) newErrors.terms = 'You must accept the terms to submit.';
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('idle');

    if (!validateForm()) {
        return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
            name: '',
            email: '',
            message: '',
            termsAccepted: false,
        });
        // Hide the success message after a few seconds
        setTimeout(() => setSubmissionStatus('idle'), 5000);
      } else {
        // Handle server errors (e.g., 500)
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-slate-800 dark:text-slate-200 font-sans">
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Form */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 dark:text-white tracking-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Have questions or a fun story about your pet? We'd love to hear from you!
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 dark:bg-neutral-800 border border-slate-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                      required
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 dark:bg-neutral-800 border border-slate-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                      required
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message..."
                      rows={5}
                      className="w-full p-3 bg-slate-50 dark:bg-neutral-800 border border-slate-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                      required
                    ></textarea>
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  
                  {/* Terms Checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="termsAccepted"
                        name="termsAccepted"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="h-4 w-4 accent-orange-600 bg-slate-50 border-slate-300 dark:bg-neutral-700 dark:border-neutral-600 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="termsAccepted" className="font-medium text-slate-700 dark:text-slate-300">
                            I accept the <a href="#" className="text-orange-500 hover:underline">Terms of Service</a>
                        </label>
                    </div>
                  </div>
                  {errors.terms && <p className="text-sm text-red-500 -mt-3">{errors.terms}</p>}
                  
                  {/* Submit Button & Status Messages */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-orange-500 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950 focus:ring-orange-500 transition-colors duration-300 disabled:bg-orange-300 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                    
                    {submissionStatus === 'success' && (
                        <div className="mt-4 flex items-center gap-3 p-3 text-sm text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900/50 rounded-md border border-green-200 dark:border-green-800">
                            <CheckCircle size={20} />
                            <span>Thank you! Your message has been sent successfully.</span>
                        </div>
                    )}
                     {submissionStatus === 'error' && (
                        <div className="mt-4 flex items-center gap-3 p-3 text-sm text-red-800 bg-red-100 dark:text-red-200 dark:bg-red-900/50 rounded-md border border-red-200 dark:border-red-800">
                            <XCircle size={20} />
                            <span>Something went wrong. Please try again later.</span>
                        </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Map */}
            <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119213196!2d-0.3012434255761614!3d51.52873519823157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1727088923058!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter dark:invert dark:grayscale"
              ></iframe>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

