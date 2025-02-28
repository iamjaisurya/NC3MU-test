import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Code2, Users, Cpu, ArrowRight, DollarSign } from 'lucide-react';
import emailjs from '@emailjs/browser';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

function AnimatedSection({ children, variants = fadeIn }: { children: React.ReactNode, variants?: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Data Center"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">NCLOUD3</h1>
            <p className="text-2xl text-blue-300 mb-8">Your Premier Cloud Solutions Partner in Mauritius</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </motion.div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">About NCLOUD3</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                  alt="Cloud Technology Team"
                  className="rounded-xl shadow-2xl mb-8"
                />
                <div className="bg-slate-700 p-8 rounded-xl h-full">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
                  <p className="text-gray-300">
                    At NCloud3, our mission is to deliver exceptional, tailored cloud solutions, empowering businesses with cost effective, secure, and scalable services. We measure our success by our clients' achievements.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <div className="bg-slate-700 p-8 rounded-xl h-full">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h3>
                  <p className="text-gray-300 mb-6">
                    NCloud3 envisions being the foremost innovator and trusted cloud managed service provider, driving digital transformation and fostering sustainable growth for businesses worldwide.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80"
                    alt="Cloud Innovation"
                    className="rounded-xl shadow-xl"
                  />
                </div>

                <div className="bg-slate-700 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">Key Differentiators</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Customer-Centric Approach</h4>
                      <p className="text-gray-300">We understand our client's unique needs and tailor our offerings accordingly.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Tailored Solutions</h4>
                      <p className="text-gray-300">Precision-driven solutions customized to your unique business needs.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Certified Professionals</h4>
                      <p className="text-gray-300">Expertise you can trust—our certified professionals deliver industry-leading solutions.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Reliability 24/7</h4>
                      <p className="text-gray-300">Uninterrupted peace of mind with our round-the-clock support and monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        </AnimatedSection>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Cloud, 
                title: "Cloud Migration", 
                desc: "Expert cloud migration services with zero downtime and seamless transition to cloud infrastructure",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              },
              { 
                icon: Code2, 
                title: "Automation & DevOps", 
                desc: "Streamline operations with cutting-edge automation and DevOps practices",
                image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80"
              },
              { 
                icon: Users, 
                title: "Consulting", 
                desc: "Strategic guidance and expert consultation for your digital transformation journey",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              },
              { 
                icon: Cpu, 
                title: "AI & ML Services", 
                desc: "Advanced artificial intelligence and machine learning solutions including GenAI implementation",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              },
              { 
                icon: DollarSign, 
                title: "Cloud Cost Optimization & FinOps", 
                desc: "Optimize cloud spending and implement FinOps practices for maximum ROI",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <AnimatedSection key={index} variants={scaleIn}>
                <div className="bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                  </div>
                  <div className="p-8">
                    <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Our Partners</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white p-12 rounded-xl flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="AWS Logo"
                  className="h-12 w-auto"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-12 rounded-xl flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                  alt="Microsoft Logo"
                  className="h-12 w-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Plan Your Cloud Migration</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Ready to transform your business with cloud technology? Let's discuss your migration strategy.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                Contact Us <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-400">Ready to transform your business? Contact us today.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-slate-800 p-8 rounded-xl">
              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="bg-slate-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="bg-slate-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="bg-slate-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 md:col-span-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 md:col-span-2 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 md:col-span-2 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">NCLOUD3</h3>
              <p className="text-gray-400">Your trusted cloud partner in Mauritius</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cloud Migration</li>
                <li>Automation & DevOps</li>
                <li>AI & ML Services</li>
                <li>Cloud Cost Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Port Louis, Mauritius</li>
                <li>nc3mu@ncloud3.com</li>
                <li>+230 XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NCLOUD3. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;