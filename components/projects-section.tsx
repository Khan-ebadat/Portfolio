"use client";

import { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    description: 'Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
    image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg',
    tags: ['React Native', 'Redux', 'Firebase'],
    category: 'mobile',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: '3D Product Configurator',
    description: 'Interactive 3D product configurator allowing users to customize products in real-time with realistic rendering.',
    image: 'https://images.pexels.com/photos/2764285/pexels-photo-2764285.jpeg',
    tags: ['Three.js', 'React', 'WebGL'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'Web application leveraging AI to generate marketing copy, blog posts, and social media content.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    tags: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    title: 'Crypto Portfolio Tracker',
    description: 'Financial tool for tracking cryptocurrency investments, market trends, and portfolio performance.',
    image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg',
    tags: ['Vue.js', 'Chart.js', 'API Integration'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'AR Navigation App',
    description: 'Augmented reality mobile app for indoor navigation in complex buildings like malls and airports.',
    image: 'https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg',
    tags: ['ARKit', 'React Native', 'TypeScript'],
    category: 'mobile',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

// Categories for filtering
const categories = {
  all: 'All Projects',
  web: 'Web Apps',
  mobile: 'Mobile Apps',
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across web and mobile platforms. 
            Each project represents a unique challenge solved with modern technologies.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <Tab.Group>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <Tab.List className="flex space-x-2 rounded-xl bg-card p-1">
              {Object.entries(categories).map(([key, value]) => (
                <Tab
                  key={key}
                  className={({ selected }) =>
                    `py-2 px-6 rounded-lg transition-all ${
                      selected
                        ? 'bg-primary text-primary-foreground shadow'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                    }`
                  }
                  onClick={() => setActiveCategory(key)}
                >
                  {value}
                </Tab>
              ))}
            </Tab.List>
          </motion.div>
          
          <Tab.Panels>
            <Tab.Panel>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} variants={itemVariants} />
                ))}
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
            <Github className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  variants: Variants;
}

function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.div
      variants={variants}
      className="card bg-card overflow-hidden transition-all duration-300 hover:shadow-lg border border-border group"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}