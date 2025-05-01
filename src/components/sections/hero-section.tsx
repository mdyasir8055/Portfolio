import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { heroData } from "@/data/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-16 pb-8 flex flex-col items-center justify-center">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene={heroData.splineScene} className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="relative mx-auto h-40 w-40 mb-8">
            <div className="absolute inset-0 rounded-full bg-primary animate-spin-slow"></div>
            <div className="absolute inset-[3px] rounded-full bg-background"></div>
            <div className="absolute inset-[6px] rounded-full overflow-hidden">
              <img 
                src={heroData.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            {heroData.name.split(' ')[0]} <span className="text-primary">{heroData.name.split(' ')[1]}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary/80">{heroData.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {heroData.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> {heroData.contactButtonText}
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href={heroData.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> {heroData.githubButtonText}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}