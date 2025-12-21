import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email Us",
    value: "info@thrived.uk",
    href: "mailto:info@thrived.uk"
  }];
  return <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-navy-light p-12 md:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <motion.span initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Get Started Today
              </motion.span>

              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mt-4 mb-6">
                Ready to Maximize Your Property's Potential?
              </motion.h2>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">Schedule a free consultation with our experts and discover how Thrived can transform your commercial property investments.</motion.p>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex justify-center mt-16">
            {contactInfo.map(info => <a key={info.label} href={info.href} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <info.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {info.label}
                </p>
                <p className="font-semibold text-foreground">{info.value}</p>
              </a>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;