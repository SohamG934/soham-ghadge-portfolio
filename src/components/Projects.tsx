
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, LineChart, Database } from 'lucide-react';

const projects = [
  {
    title: "ALLM Library",
    description: "A comprehensive python package for Large Language Model and agentic integrations with support for multiple architectures.",
    tech: ["PyTorch", "Transformers", "CUDA"],
    metrics: "30% latency reduction",
    icon: Bot,
    link: 'https://pypi.org/project/allm/'
  },
  {
    title: "Docs2Answer",
    description: "RAG-powered document analysis system for automated question answering.",
    tech: ["LangChain", "FastAPI", "ChromaDB"],
    metrics: "95% accuracy on benchmarks",
    icon: Database,
    link: 'https://github.com/Docs2ans/PDF-Bot'
  },
  {
    title: "Stock Predictor",
    description: "LSTM-based market prediction model with real-time data processing.",
    tech: ["TensorFlow", "Time Series", "API"],
    metrics: "20% better than baseline",
    icon: LineChart,
    link: 'https://github.com/SohamG934/Stock-bot'
  },
];

const Projects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-space font-bold mb-12 neon-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <project.icon className="w-6 h-6 text-neon-green" />
                <h3 className="text-xl font-space font-medium">{project.title}</h3>
              </div>
              
              <p className="text-silver/80 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="text-sm text-neon-blue mb-2">{project.metrics}</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full border border-neon-green/30 text-neon-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={project.link}><button className="text-sm flex items-center gap-2 hover:text-neon-green transition-colors">
                  <Github className="w-4 h-4" />
                  Code
                </button></a>
                {/* <button className="text-sm flex items-center gap-2 hover:text-neon-blue transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
