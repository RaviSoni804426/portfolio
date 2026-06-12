import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">
                            Building Scalable Systems with <span className="text-primary">Data, AI & Automation</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I am a Data Science and AI undergraduate at IIT Guwahati, currently working as an Ai product Intern with the PWIOI team at PhysicsWallah. I focus on converting raw operational data into decision-ready dashboards, automation workflows, and AI-enabled tools.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            At PW, I built Looker Studio admission and sales dashboards, Python and Google Sheets automations, a Streamlit-based Mettle video extraction tool, Telegram marketing automation, and BRDs for product modules. I like solving unstructured problems where data, product thinking, and clean engineering meet.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-card rounded-xl border border-white/5">
                                <h4 className="text-3xl font-bold text-white mb-1">15+</h4>
                                <p className="text-gray-400 text-sm">Dashboards Delivered</p>
                            </div>
                            <div className="p-4 bg-card rounded-xl border border-white/5">
                                <h4 className="text-3xl font-bold text-white mb-1">01+</h4>
                                <p className="text-gray-400 text-sm">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4"
                    >
                        {[
                            { icon: <Terminal className="text-blue-400" />, title: "AI & Automation", desc: "Python scripts, Streamlit tools, Telegram bots, Google Sheets automation, workflow optimization" },
                            { icon: <Cpu className="text-purple-400" />, title: "Machine Learning & LLMs", desc: "Regression, Classification, Clustering, RAG, FAISS, Transformers, PyTorch, FastAPI" },
                            { icon: <Database className="text-green-400" />, title: "Business Intelligence", desc: "Looker Studio dashboards, SQL analysis, funnel tracking, data cleaning, executive reporting" }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 p-6 glass-card hover:bg-white/5 transition-colors">
                                <div className="mt-1 p-3 bg-darker rounded-lg h-fit">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
