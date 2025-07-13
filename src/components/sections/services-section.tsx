import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { techStackData, skillsMarqueeData } from "@/data/portfolio-data";

export function ServicesSection() {
  const [rotation, setRotation] = useState(65.3513);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-10px 0px",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;
      
      // Limit the maximum rotation per scroll event for smoother animation
      const clampedDiff = Math.min(Math.max(scrollDiff, -10), 10);
      
      setRotation(prev => {
        const newRotation = prev + (clampedDiff * 0.06); // More balanced rotation speed
        return newRotation;
      });
      
      setLastScrollY(currentScrollY);
    };

    // Use requestAnimationFrame for smoother animation
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [lastScrollY]);

  return (
    <section id="tech-stack" className="py-10 relative overflow-hidden bg-black backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="relative mx-auto overflow-visible" style={{ minHeight: "350px" }}>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/5 to-black"></div>
        
        <div 
          className="relative mx-auto size-[300px] translate-y-20 md:size-[380px] md:translate-y-24"
          style={{ 
            transform: `rotate(${rotation}deg)`, 
            transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'  // Smoother, more balanced easing curve
          }}
        >
          <img    
            src="\images\round.png"
            draggable="false" 
            alt="skills cover rotating image" 
            className="z-10 w-full opacity-65 select-none rounded-full"
          />
        </div>
    
          <h2 
            style={{ 
              textShadow: '0px 4px 8px rgba(255,255,255,.05), 0px 8px 30px rgba(255,255,255,.25)',
              position: 'relative',
              zIndex: 40,
              marginTop: "0" // Position at the bottom of the image
            }}
            className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center z-30 pb-5"
          >
            <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
              I constantly try to improve
            </p>
            <span>
              My <span className="text-primary">Tech Stack</span>
            </span>
          </h2>

        </div>

        {/* Tech Stack Grid */}
        <motion.div
          ref={ref}
          className="mx-auto mt-16 flex max-w-4xl flex-wrap justify-center gap-2 text-lg lg:gap-4"
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: inView ? 0.5 : 0.2, 
                delay: inView ? index * 0.05 : 0 
              }}
              className="group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-black px-4 py-1.5 text-sm text-white/80 lg:text-base"
              tabIndex={0}
            >
              {tech.icon && (
                <img
                  height="18"
                  width="18"
                  alt={tech.name}
                  src={tech.icon}
                  className="mr-0-1 w-4 transition-transform duration-300 group-hover:scale-125 lg:w-5"
                />
              )}
              <span className="relative">
                <span className="text-primary absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {tech.name}
                </span>
                <span className="transition-colors duration-300">{tech.name}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>

{/* Skills Marquee */}
<section className="my-10 py-10">
  <div className="z-0 translate-y-10 rotate-6 bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-4 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-8"></div>
  
  <div className="z-2 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-gradient-to-r from-[#6799fe] to-[#0255fb] py-1.5 lg:py-3">
    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {[...Array(4)].map((_, duplicateIndex) => (
        <div 
          key={duplicateIndex} 
          className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
          style={{
            animation: 'marquee var(--duration) linear infinite',
            animationPlayState: 'running'
          }}
        >
          {skillsMarqueeData.map((skill, index) => (
            <div 
              key={`${skill}-${index}-${duplicateIndex}`} 
              className="inline-flex items-center gap-2 lg:gap-4"
            >
              <span className="text-sm font-semibold uppercase leading-6 tracking-[0.2em] text-gray-50 md:text-lg lg:text-xl">
                {skill}
              </span>
              {/* Updated star image size */}
              <img
                src="\images\star.png"
                alt="Star"
                className="w-14 h-14" // Increased width and height
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

      </div>
    </section>
  );
}
