import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS once
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const formRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message: formRef.current.message.value,
      to_name: 'Ravi Kumar',
      to_email: 'kumarsoniravi705@gmail.com',
      reply_to: formRef.current.from_email.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        setLoading(false);
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.',
        });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className="section-padding bg-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-card rounded-lg border border-white/5 text-primary">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                  <p className="text-gray-200">Bengaluru, Karnataka</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-card rounded-lg border border-white/5 text-primary">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                  <p className="text-gray-200">+91 9608710567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-card rounded-lg border border-white/5 text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-gray-200">kumarsoniravi705@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-bold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ravi-soni123" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/ravisoni804426" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="https://www.kaggle.com/ravikumarsonis" target="_blank" rel="noopener noreferrer">
                  <Code />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl"
            >
              <div className="space-y-6">
                <input name="from_name" placeholder="Your Name" required className="w-full p-3 rounded-lg" />
                <input name="from_email" type="email" placeholder="Your Email" required className="w-full p-3 rounded-lg" />
                <textarea name="message" rows="4" placeholder="Your Message" required className="w-full p-3 rounded-lg" />

                {status.message && (
                  <div className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                    {status.message}
                  </div>
                )}

                <button disabled={loading} className="w-full btn-primary flex justify-center gap-2">
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <Send size={16} />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
