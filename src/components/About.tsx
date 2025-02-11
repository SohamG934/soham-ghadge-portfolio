
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Network, Code, Cloud } from 'lucide-react';

const skills = [
  { icon: Brain, name: "Deep Learning", level: 90 },
  { icon: Network, name: "LangChain", level: 85 },
  { icon: Database, name: "PyTorch", level: 88 },
  { icon: Code, name: "Python", level: 95 },
  { icon: Cloud, name: "GCP/AWS/Azure", level: 82 },
  { icon: Cpu, name: "MLOps", level: 85 },
];

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-space font-bold mb-12 neon-text text-center">About Me</h2>
          
          <div className="glass-panel p-8 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              I'm a Machine Learning Engineer specializing in Large Language Models and Natural Language Processing. 
              With experience at GenbaNext and SuperKalam, I've developed cutting-edge AI solutions that bridge 
              theoretical research with practical applications.
            </p>
            <p className="text-lg leading-relaxed">
              My work focuses on creating scalable AI systems that solve real-world problems, from automated 
              grading systems to advanced language models for document analysis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-5 h-5 text-neon-green" />
                  <h3 className="font-space font-medium">{skill.name}</h3>
                </div>
                <div className="h-2 bg-space-darker rounded-full">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
