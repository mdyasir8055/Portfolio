import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certificationsData } from "@/data/portfolio-data";

export function CertificationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const displayedCertifications = showAll ? certificationsData : certificationsData.slice(0, 6);

  return (
    <section id="certifications" className="py-10 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
                layout
              >
                <div className={`relative bg-card/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'border-primary shadow-[0_0_0_1px] shadow-primary/50 transform scale-[1.02]' 
                    : 'border-border/50'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-lg font-bold truncate">{cert.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap flex-shrink-0">
                          <Calendar size={14} className="mr-1" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full group text-primary hover:text-primary/80 hover:bg-primary/10 border-primary/50"
          >
            <span>{showAll ? "Show Less" : "View All Certifications"}</span>
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} 
            />
          </Button>
        </div>
      </div>
    </section>
  );
}