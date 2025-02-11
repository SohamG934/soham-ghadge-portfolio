
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = [
  {
    company: "GenbaNext Technologies Tokyo",
    position: "AI Engineer",
    period: "Nov 2024 - Present",
    description: [
      "Working on developing an AI powered app for dynamic question paper generation for educational institutes in Japan",
      "Generated refined MCQs using Retrieval on course material, leading to a 100% increase in the number of unique question papers generated monthly.",
      "Developed a customer support agent, eliminating the human element in user query resolution"
    ]
  },
  {
    company: "SuperKalam(YC W23)",
    position: "AI Research Intern",
    period: "Aug 2024 - Nov 2024",
    description: [
      "Designed advanced prompt engineering techniques for evaluating and providing feedback on competitive examination responses (e.g., UPSC Mains) across 10+ subject domains, resulting in a 20% reduction in evaluation time and improving the accuracy of automated feedback.",
      "Fine-tuned Large Language Models (LLMs) specific to UPSC domains, optimizing parameters and employing Reinforcement Learning from Human Feedback (RLHF), which increased model accuracy by 15% and also increased the relevance of generated answers.",
      "Explored advanced Retrieval-Augmented Generation (RAG) pipelines, which improved the quality of answer generation by 25%, enhancing user satisfaction and reducing the need for manual corrections.",
      "Created an AI-based grading model for evaluating student answers, achieving a 30% improvement in grading accuracy compared to traditional methods.",
      "Developed custom scripts that systematized data preprocessing tasks in model training processes, minimizing manual input efforts by ten hours per week while ensuring cleaner datasets were used for analysis."
    ]
  },
  {
    company: "All Advance AI",
    position: "AI Associate Intern",
    period: "Feb 2024 - Jul 2024",
    description: [
      "Introduced a Python library for inference and management of Large Language Models (LLMs), accessible via Command Line Interface (CLI) and Web User Interface (Web UI), which reduced inference processing time by 30% and improved user accessibility.",
      "Implemented user management, version control, and workflow automation, which led to a 100% increase in the number of clients by improving system efficiency and user experience.",
      "Designed and implemented the entire backend of the company's product using FastAPI, resulting in a 40% improvement in system performance and scalability."
    ]
  },
  {
    company: "MSM AI",
    position: "AI Associate Intern",
    period: "Jun 2023 - Aug 2023",
    description: [
      "Optimized large language models for enhanced performance through strategic fine-tuning with PyTorch, increasing model accuracy by 20% and reducing training time by 25%.",
      "Diagnosed and resolved critical bugs in model training, resulting in a 15% reduction in error rates and improving response generation accuracy by 10% for the Python web application."
    ]
  }
];

const WorkTimeline = () => {
  return (
    <section id='work-timeline' className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-space font-bold mb-12 neon-text text-center">Work Experience</h2>
          
          {/* <ScrollArea className="h-[600px] w-full rounded-md"> */}
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
                  
                  <div className="glass-panel p-6" ml-4>
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
          {/* </ScrollArea> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkTimeline;
