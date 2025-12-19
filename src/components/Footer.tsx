import { motion } from "framer-motion";
import ThrivedLogo from "@/components/ThrivedLogo";

const Footer = () => {
  const footerLinks = {
    services: [
      "Property Leasing",
      "Lease Administration",
      "Financial Management",
      "Maintenance",
      "Tenant Relations",
    ],
    company: ["About Us", "Our Team", "Careers", "News", "Contact"],
    resources: [
      "Property Owners Guide",
      "Market Reports",
      "Blog",
      "FAQ",
    ],
  };

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <ThrivedLogo className="h-7 w-auto" variant="light" />
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Expert commercial property management that maximizes your
              investment returns and creates thriving spaces for businesses.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Thrived. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
