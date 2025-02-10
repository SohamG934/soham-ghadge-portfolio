
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = [
  {
    company: "GenbaNext",
    position: "Machine Learning Engineer",
    period: "2023 - Present",
    description: [
      "Developed an automated question paper generation system using LLMs, increasing unique paper generation by 100%",
      "Implemented RAG pipelines for enhanced document analysis and information retrieval",
      "Led the development of custom LLM solutions for educational content generation"
    ]
  },
  {
    company: "SuperKalam",
    position: "AI Engineer",
    period: "2022 - 2023",
    description: [
      "Built an automated grading system that improved accuracy by 30%",
      "Developed NLP models for educational content analysis",
      "Implemented MLOps practices for model deployment and monitoring"
    ]
  },
  {
    company: "AI Research Institute",
    position: "Research Assistant",
    period: "2021 - 2022",
    description: [
      "Conducted research on Large Language Models and their applications",
      "Published papers on efficient fine-tuning methods",
      "Developed prototype systems for real-world AI applications"
    ]
  }
];

const WorkTimeline = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-space font-bold mb-12 neon-text text-center">Work Experience</h2>
          
          <ScrollArea className="h-[600px] w-full rounded-md">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-green before:to-neon-blue">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-space-darker glass-panel neon-border">
                    <Briefcase className="h-5 w-5 text-neon-green" />
                  </div>
                  
                  <div className="glass-panel p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-space font-bold text-neon-green">{experience.company}</h3>
                      <span className="text-sm text-silver/80">{experience.period}</span>
                    </div>
                    <h4 className="text-lg font-space mb-4 text-neon-blue">{experience.position}</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-silver/90">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkTimeline;
