import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutData } from "@/data/portfolio-data";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12 container mx-auto px-4"
      >
        <div className="flex items-center gap-4">
          <User className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">About <span className="text-primary">Me</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="text-xl font-semibold">{aboutData.education.institution}</h3>
                  <p className="text-muted-foreground">{aboutData.education.degree}</p>
                  <p className="text-sm text-primary">{aboutData.education.period}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}