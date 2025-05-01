
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box, Float, MeshDistortMaterial } from '@react-three/drei';
import { experienceData } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';
import '@/components/ui/experience.css';

const AnimatedBox = ({ position, rotation = [0, 0, 0] }: { position: [number, number, number], rotation?: [number, number, number] }) => {
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <Box 
        position={position} 
        rotation={rotation as any}
        args={[0.5, 0.5, 0.5]}
      >
        <MeshDistortMaterial
          color="hsl(var(--primary))"
          emissive="hsl(var(--primary))"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={2}
        />
      </Box>
    </Float>
  );
};

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="py-14 sm:py-16 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black"
    >
      {/* Enhanced 3D elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 opacity-30">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0070f3" />
            <AnimatedBox position={[0, 0, 0]} rotation={[0.5, 0.5, 0]} />
          </Canvas>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-30">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0070f3" />
            <AnimatedBox position={[0, 0, 0]} rotation={[0.2, 0.3, 0.1]} />
          </Canvas>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
          <Canvas>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedBox position={[0, 0, 0]} rotation={[0.1, 0.1, 0.1]} />
          </Canvas>
        </div>
      </div>
      
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50"></div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ opacity, y }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary uppercase tracking-wider text-sm font-medium mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 sm:mb-16 relative w-full"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  duration: 0.8,
                  delay: index * 0.15
                }
              }}
              viewport={{ once: false, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline connector - adjusted for mobile */}
              <div className="absolute top-0 bottom-0 left-[30px] sm:left-[40px] md:left-1/2 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10 transform -translate-x-1/2"></div>
              
              {/* Timeline dot - adjusted for mobile */}
              <div className="absolute top-0 left-[30px] sm:left-[40px] md:left-1/2 w-6 h-6 bg-black border-2 border-primary rounded-full transform -translate-x-1/2 z-10 timeline-dot-glow">
                <div className={`absolute inset-0.5 rounded-full bg-primary transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-50'}`}></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative transition-all duration-500 mx-auto pl-[50px] sm:pl-[60px] md:pl-0">
                {/* Left side: Role, Company, Duration */}
                <motion.div 
                  className="md:text-right space-y-3 pt-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold"
                    animate={{ color: hoveredIndex === index ? 'hsl(var(--primary))' : '#ffffff' }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="text-primary/90 font-medium text-base sm:text-lg">{exp.company}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs sm:text-sm text-primary/90 border border-primary/20">
                    {exp.period}
                  </div>
                </motion.div>
                
                {/* Right side: Description and Skills */}
                <motion.div 
                  className="space-y-4 mt-2 md:mt-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div 
                    className={`p-4 sm:p-5 md:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 experience-card-hover ${
                      hoveredIndex === index ? 'shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]' : ''
                    }`}
                  >
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                    <motion.div 
                      className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.4,
                        staggerChildren: 0.1
                      }}
                    >
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ 
                            duration: 0.3, 
                            delay: skillIndex * 0.05 + 0.5
                          }}
                        >
                          <Badge 
                            variant="outline"
                            className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-all duration-300 text-xs sm:text-sm py-0.5 px-2 sm:px-3"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}