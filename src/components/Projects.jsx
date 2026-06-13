import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
{
    title: "PW Internship — AI Product Engineering",
    subtitle: "Full Internship Report | PhysicsWallah PWIOI",
    desc: "Comprehensive report of my AI Product Engineering internship at PhysicsWallah (PWIOI team). Covers 15+ Looker Studio dashboards, Python automations, Mettle video downloader, Telegram bot, GCMS website management, and BRD documentation.",
    stack: ["Looker Studio", "Python", "Streamlit", "Telegram Bot API", "Google Sheets", "BRD", "SQL"],
    category: "Internship Report",
    color: "from-sky-500 to-blue-600",
    demo: "/ravi-pw-internship-report.pdf",
    isReport: true
},
{
    title: "AI Candidate-Evaluation-Pipeline",
    subtitle: "AI-Powered Candidate Screening",
    desc: "Automated candidate screening with PDF/DOCX parsing, LLM-backed summaries, transparent heuristic scoring, RAG retrieval, and a React dashboard.",
    stack: ["RAG", "Python", "AI Agents", "FAISS", "FastAPI", "Streamlit"],
    category: "AI Engineering",
    color: "from-purple-500 to-indigo-500",
    github: "https://github.com/RaviSoni804426/Candidate-Evalution-Pipeline-",
    demo:"https://huggingface.co/spaces/RaviSonii/Candidate_Evaluation_Pipeline"
},
{
    title: "Admission Samadhan & Sales Funnel Dashboard",
    subtitle: "PWIOI 2026 BI Dashboard",
    desc: "Built a high-impact dashboard for PhysicsWallah PWIOI to track the 2026 registration funnel and admission samadhan with city-wise and funnel-stage filters.",
    stack: ["Looker Studio", "Google Sheets", "Python", "SQL", "Data Visualization"],
    category: "Business Intelligence",
    color: "from-blue-500 to-cyan-500",
    demo: "https://datastudio.google.com/reporting/eeb67d58-98f8-4eb0-afbc-11bcb7d2d343"
},
{
    title: "Aegis Market - Financial Market Simulator",
    subtitle: "Autonomous Financial Agent Stress-Testing",
    desc: "Simulated micro-economic stress scenarios such as inflation and liquidity shocks on a synthetic market, modeling agent behavior and price dynamics.",
    stack: ["Python", "Flask", "AI Agents", "Pandas", "NumPy", "SQL", "MLOps"],
    category: "Financial AI",
    color: "from-emerald-500 to-green-500",
    github: "https://github.com/RaviSoni804426/Stock-Market-Analysis",
    demo: "https://huggingface.co/spaces/RaviSonii/Stock_Market_Analysis"
},
{
    title: "RAG-Based Knowledge Retrieval System",
    subtitle: "Retrieval-Augmented Generation System",
    desc: "Built a first RAG system from scratch using open-source LLM tooling, sentence-transformer embeddings, FAISS vector search, and LangChain text splitting.",
    stack: ["RAG", "Python", "Transformers", "FAISS", "LangChain"],
    category: "Generative AI",
    color: "from-indigo-500 to-purple-500",
    github: "https://github.com/RaviSoni804426/Projects/tree/main/projects/RAG%20From%20Scratch"
},
{
    title: "SpaceIQ AI Revenue Intelligence",
    subtitle: "AI-Powered Revenue Platform",
    desc: "Developed an AI-driven revenue intelligence platform to analyze sales pipelines, accurately forecast revenue, and provide actionable insights for business growth.",
    stack: ["Python", "AIOps", "AI Agents", "Product Development", "LLMs", "SQL"],
    category: "Revenue Intelligence",
    color: "from-orange-500 to-yellow-500",
    github: "https://github.com/RaviSoni804426/SPACEIQ-FULL-PROJECT",
     demo: "https://huggingface.co/spaces/RaviSonii/SpaceIQ"
    
},
{
    title: "Walmart Sales Data Analysis",
    subtitle: "SQL and Data Visualization Project",
    desc: "Used SQL and data visualization techniques to clean, process, and analyze complex Walmart sales datasets, identifying key business patterns for strategic decision-making.",
    stack: ["Python", "SQL", "Power BI", "Tableau", "Data Cleaning"],
    category: "Data Analysis",
    color: "from-rose-500 to-pink-500",
    github: "https://github.com/RaviSoni804426/Projects/tree/main/projects/Walmart-Sales-Data-Analysis--SQL-Project"
}
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my technical expertise in solving real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors group flex flex-col h-full"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                            <div className="p-6 flex flex-col h-full">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-mono px-2 py-1 bg-darker rounded text-gray-300 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
    >
      View Code <Github className="w-4 h-4" />
    </a>
  )}

  {project.demo && !project.isReport && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
    >
      Live Demo <ExternalLink className="w-4 h-4" />
    </a>
  )}

  {project.isReport && project.demo && (
    <a
      href={project.demo}
      download="Ravi-Kumar-PW-Internship-Report.pdf"
      className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
    >
      Download Report <ExternalLink className="w-4 h-4" />
    </a>
  )}
</div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
