import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
  "Years of commercial property experience",
  "Local market expertise with national resources",
  "Transparent communication and reporting",
  "Dedicated time spent on each account",
  "Technology-driven operations and analytics",
  "Proven track record of maximizing ROI"];


  const stats = [
  { value: "£50M+", label: "Assets Under Management" },
  { value: "15+", label: "Years of Experience" },
  { value: "30+", label: "Commercial Properties" },
  { value: "24/7", label: "Support Available" }];


  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Why Choose Thrived
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Your Property, Our Priority
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Thrived, we understand that commercial property management is
              more than just collecting rent. It's about protecting your
              investment, building lasting tenant relationships, and maximizing
              the potential of every asset.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) =>
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3">
                
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          





















          
        </div>
      </div>
    </section>);

};

export default About;