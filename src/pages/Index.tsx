
import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import WorkTimeline from '../components/WorkTimeline';
import Publications from '../components/Publications';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Home, User, Briefcase, BookOpen, Mail, Layout } from 'lucide-react';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-green to-neon-blue transform origin-left z-50"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-lg z-40 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center h-16 gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 text-silver/80 hover:text-neon-green transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 text-silver/80 hover:text-neon-green transition-colors"
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('work-timeline')}
              className="flex items-center gap-2 text-silver/80 hover:text-neon-green transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Work</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 text-silver/80 hover:text-neon-green transition-colors"
            >
              <Layout className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('publications')}
              className="flex items-center gap-2 text-silver/80 hover:text-neon-green transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Publications</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 text-silver/80 hover:text-neon-green transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        <About />
        <WorkTimeline />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
