import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const contacts = [
  { icon: Mail, label: "Email", value: "loagorantao@gmail.com", href: "mailto:loagorantao@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/feed" },
  { icon: Github, label: "GitHub", value: "github.com/loagojunior", href: "https://github.com/loagojunior" },
  { icon: MessageCircle, label: "WhatsApp", value: "+267 71 458 185", href: "https://wa.me/26771458185" },
];

const Contact = () => {
  return (
  <div className="pt-16">
    {/* Header */}
    <section className="section-container py-16 md:py-24 border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide">
          Let's Connect
        </h1>
        <p className="text-lg text-muted-foreground font-light tracking-wide mt-4">
          Open to entry-level roles, internships, collaboration opportunities, and learning experiences.
        </p>
      </motion.div>
    </section>

    <section className="section-container py-16">
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border rounded-sm group block hover:border-primary/30 transition-colors"
          >
            <c.icon size={20} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-light text-lg tracking-wide mb-1">{c.label}</h3>
            <p className="text-muted-foreground text-sm font-light">{c.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 md:p-8 border border-border rounded-sm max-w-2xl"
      >
        <h3 className="font-heading text-xl font-light tracking-wide mb-4">What I'm Looking For</h3>
        <ul className="space-y-3">
          {[
            "Entry-level Business Intelligence / Data Analyst roles",
            "Internship opportunities in data or product teams",
            "Collaboration on product ideas and startup ventures",
            "Mentorship and learning opportunities",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-light">
              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* CV Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 md:p-8 border border-border rounded-sm max-w-2xl"
      >
        <h3 className="font-heading text-xl font-light tracking-wide mb-4">My CV</h3>
        <p className="text-muted-foreground text-sm font-light mb-4">
          Download or preview my full curriculum vitae.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/cv/Loago_Junior_Rantao_CV.pdf"
            download="Loago_Junior_Rantao_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-light tracking-wide hover:opacity-90 transition-opacity"
          >
            <Download size={14} /> Download CV
          </a>
        </div>
      </motion.div>
    </section>

  </div>
  );
};

export default Contact;
