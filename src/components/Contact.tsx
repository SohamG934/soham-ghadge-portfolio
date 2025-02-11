
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-space font-bold mb-12 neon-text">Get in Touch</h2>
          
          <div className="glass-panel p-8 mb-12">
            <p className="text-lg mb-8">
              Interested in collaborating on AI projects or discussing ML solutions? 
              Let's connect and explore possibilities together.
            </p>
            
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-green to-neon-blue text-space-black font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, href: "mailto:sohamghadge0903@gmail.com" },
              { icon: Github, href: "https://github.com/sohamg934" },
              { icon: Linkedin, href: "https://linkedin.com/in/sohamghadge" },
              { icon: Twitter, href: "https://twitter.com/sohamg5" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 hover:text-neon-green transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
