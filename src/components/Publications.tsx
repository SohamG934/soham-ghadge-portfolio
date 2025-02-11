
import { motion } from 'framer-motion';
import { BookText } from 'lucide-react';

const publications = [
  {
    title: "Ensemble Deep Neural Networks: An assessment for early Alzheimer’s Disease diagnosis with structural MRI",
    journal: "IEEE Xplore",
    year: 2024,
    description: "Novel approach to early detection of Alzheimer's using convolutional neural networks and transfer learning on MRI datasets.",
    link: "https://ieeexplore.ieee.org/abstract/document/10660806"
  },
  // {
  //   title: "Optimizing Large Language Models for Low-Resource Environments",
  //   journal: "arXiv Preprint",
  //   year: 2023,
  //   description: "Research on model compression and quantization techniques for deploying LLMs in resource-constrained settings.",
  //   link: "#"
  // },
  // {
  //   title: "Enhanced RAG: Improving Information Retrieval in LLM Applications",
  //   journal: "Conference on Neural Information Processing Systems",
  //   year: 2022,
  //   description: "New methodologies for improving retrieval accuracy and relevance in RAG systems.",
  //   link: "#"
  // }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold neon-text mb-4">Publications</h2>
          <p className="text-silver/80">Research contributions and academic papers</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 hover:bg-white/10 transition-colors"
            >
              <BookText className="w-8 h-8 text-neon-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <div className="text-sm text-silver/60 mb-3">
                {pub.journal} • {pub.year}
              </div>
              <p className="text-silver/80 mb-4 text-sm">
                {pub.description}
              </p>
              <a
                href={pub.link}
                className="inline-block text-neon-green hover:text-neon-blue transition-colors text-sm"
              >
                Read Paper →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
