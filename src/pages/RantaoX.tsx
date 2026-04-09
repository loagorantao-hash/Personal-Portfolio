import { motion } from "framer-motion";
import { Rocket, Wrench, Lightbulb, Target, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const focusAreas = [
  { icon: Wrench, title: "Financial Management Tools", desc: "Simple tools that help small businesses track money, understand profit, and make better decisions." },
  { icon: Target, title: "Business Support Solutions", desc: "Practical solutions designed for everyday business challenges faced by SMEs in Botswana." },
  { icon: Lightbulb, title: "Practical Digital Utilities", desc: "Useful digital tools that solve real problems without unnecessary complexity." },
  { icon: Rocket, title: "Growing Platform", desc: "RantaoX is evolving. New tools and features are actively being developed and refined." },
];

const RantaoX = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="section-container py-16 md:py-24 border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="inline-block text-xs font-light text-primary uppercase tracking-[0.2em] mb-4">
          Early Stage · Actively Evolving
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
          <span className="gradient-text">RantaoX</span>
        </h1>
        <p className="text-xl text-muted-foreground font-light mt-4 leading-relaxed">
          A growing digital product initiative focused on building practical tools and solutions for small businesses and everyday users.
        </p>
        <a
          href="https://rantaox.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-light tracking-wide hover:opacity-90 transition-opacity"
        >
          Visit RantaoX <ExternalLink size={16} />
        </a>
      </motion.div>
    </section>

    {/* Philosophy */}
    <section className="section-container py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Keep It Simple", desc: "No unnecessary complexity. Every tool should be easy to understand and use from day one." },
          { title: "Solve Real Problems", desc: "Every feature starts with a real problem that small businesses or individuals actually face." },
          { title: "Build What People Use", desc: "The goal isn't to build flashy tech. It's to build things people actually find useful." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border rounded-sm text-center"
          >
            <h3 className="font-heading font-light text-lg tracking-wide mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Focus Areas */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Focus Areas" title="What RantaoX Is Building" />
      <div className="grid sm:grid-cols-2 gap-6">
        {focusAreas.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border rounded-sm"
          >
            <f.icon size={20} className="text-primary mb-3" />
            <h3 className="font-heading font-light text-lg tracking-wide mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-container py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h3 className="font-heading text-2xl font-light tracking-wide mb-4">Want to Follow the Journey?</h3>
        <p className="text-muted-foreground font-light mb-6">
          RantaoX is still early, but it's growing. If you're interested in what we're building or want to collaborate, I'd love to hear from you.
        </p>
        <a
          href="mailto:loagorantao@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-light tracking-wide hover:opacity-90 transition-opacity"
        >
          Get in Touch <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  </div>
);

export default RantaoX;
