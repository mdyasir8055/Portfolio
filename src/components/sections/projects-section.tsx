import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { projectsData } from "@/data/portfolio-data";

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-10 bg-muted/10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Explore some of my recent work showcasing my skills and expertise.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
                layout
              >
                <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                      style={{
                        transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  </AspectRatio>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="bg-primary/10 hover:bg-primary/20 text-primary text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>Live Demo</span>
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span>Code</span>
                        <Github className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
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
            <span>{showAll ? "Show Less" : "View All Projects"}</span>
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} 
            />
          </Button>
        </div>
      </div>
    </section>
  );
}