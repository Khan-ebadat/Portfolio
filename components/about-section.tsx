"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Three.js', level: 70 },
  { name: 'CSS/Tailwind', level: 90 },
  { name: 'Node.js', level: 70 },
  { name: 'Git/GitHub', level: 85 },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left column - Image and bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative h-80 w-80 mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                alt="John Doe"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-muted-foreground">
                Hello! I'm John, a frontend developer based in San Francisco with a passion for building exceptional digital experiences.
              </p>
              <p className="text-muted-foreground">
                With 5+ years of experience in web development, I enjoy creating elegant solutions to complex problems. My expertise includes React, TypeScript, and Three.js, allowing me to build both functional and visually appealing applications.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new hiking trails, experimenting with photography, or contributing to open-source projects.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="/resume.pdf" download className="btn btn-primary">
                  Download CV
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="card bg-background p-4 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">B.S. Computer Science</p>
                <p className="text-sm text-muted-foreground">Stanford University, 2018</p>
              </div>
              
              <div className="card bg-background p-4 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">5+ Years</p>
                <p className="text-sm text-muted-foreground">Frontend Development</p>
              </div>
              
              <div className="card bg-background p-4 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-muted-foreground">40+ Completed</p>
                <p className="text-sm text-muted-foreground">Web & Mobile Apps</p>
              </div>
              
              <div className="card bg-background p-4 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Clients</h3>
                <p className="text-muted-foreground">25+ Happy</p>
                <p className="text-sm text-muted-foreground">Global Clients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}