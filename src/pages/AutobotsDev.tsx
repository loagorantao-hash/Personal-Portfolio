import { motion } from "framer-motion";
import { Rocket, Wrench, Lightbulb, Target, ArrowRight, ExternalLink, Code2, Smartphone, BarChart3, Bot, Palette, Database, ShieldCheck, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Code2, title: "Custom Web Development", desc: "Building scalable, responsive, and high-performance web applications tailored to business needs." },
  { icon: Smartphone, title: "Mobile Application Development", desc: "Crafting intuitive iOS and Android mobile solutions for local and international markets." },
  { icon: BarChart3, title: "Business Intelligence & Analytics", desc: "Transforming raw data into actionable dashboards, metrics, and automated reporting systems." },
  { icon: Bot, title: "Automation Solutions", desc: "Streamlining repetitive workflows and operational tasks to save time and increase efficiency." },
  { icon: Palette, title: "UI/UX Design", desc: "Designing clean, modern, user-centered digital interfaces that optimize engagement." },
  { icon: Database, title: "Database Design & Management", desc: "Architecting reliable, secure, and performance-tuned database schemas and data models." },
  { icon: ShieldCheck, title: "Software Maintenance & Support", desc: "Providing ongoing technical support, system updates, security patches, and optimizations." },
];

const featuredProducts = [
  {
    name: "Property Lynk",
    status: "Finished (Available on Play Store)",
    statusBadge: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    desc: "Comprehensive property management platform for landlords, property managers, tenants, transport operators, and agents to manage operations seamlessly from one platform.",
    features: ["Tenant & Rent Management", "Property Listings", "Maintenance Requests", "Admin Dashboards", "Mobile & Web Access"]
  },
  {
    name: "Lynk",
    status: "In Development",
    statusBadge: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    desc: "Modern dating platform designed specifically for the Botswana market, blending smart matchmaking with local context and real-time engagement.",
    features: ["User Authentication & Verification", "Matching Algorithms", "Real-Time Messaging", "Push Notifications", "Content Moderation"]
  },
  {
    name: "Botsogo (Health Platform)",
    status: "Top 4 Finish - BDIH Hackathon",
    statusBadge: "bg-primary/10 text-primary border-primary/20",
    desc: "AI-powered healthcare platform built by Team AutoBots to reduce clinic congestion and improve patient access across Botswana.",
    features: ["AI Patient Access", "Clinic Congestion Reduction", "Smart Triage & Analytics", "Stakeholder Dashboards"]
  },
  {
    name: "Autobots CRM",
    status: "In Development",
    statusBadge: "bg-sky-500/10 text-sky-500 border-sky-500/20",
    desc: "Customer Relationship Management platform enabling SMEs to track sales pipelines, manage customer interactions, and automate business processes.",
    features: ["Customer Pipeline Tracking", "Workflow Automation", "Sales Analytics", "Reporting Dashboards"]
  }
];

const AutobotsDev = () => (
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
          Technology & Digital Transformation Company
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
          Autobots Dev <span className="gradient-text">(Pty) Ltd.</span>
        </h1>
        <p className="text-xl text-muted-foreground font-light mt-4 leading-relaxed">
          Building modern digital solutions for businesses, entrepreneurs, and consumers in Botswana. Specializing in software development, data analytics, web & mobile applications, UI/UX design, and digital transformation.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="mailto:loagorantao@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-light tracking-wide hover:opacity-90 transition-opacity"
          >
            Work With Us <ArrowRight size={16} />
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-light tracking-wide text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
          >
            Explore Projects
          </a>
        </div>
      </motion.div>
    </section>

    {/* Services */}
    <section className="section-container py-16">
      <SectionHeading label="Capabilities" title="Our Services" description="End-to-end digital capabilities designed to help businesses scale and modernize." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 border border-border rounded-sm hover:border-primary/40 transition-colors"
          >
            <s.icon size={22} className="text-primary mb-3" />
            <h3 className="font-heading font-light text-lg tracking-wide mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Product Portfolio" title="Key Software Products" description="Proprietary platforms and client solutions developed by Autobots Dev." />
      <div className="grid md:grid-cols-2 gap-6">
        {featuredProducts.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 md:p-8 border border-border rounded-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-heading font-light text-2xl tracking-wide">{p.name}</h3>
                <span className={`text-[11px] font-light px-2.5 py-1 rounded-full border ${p.statusBadge}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">{p.desc}</p>
              <div className="space-y-1.5 mb-4">
                {p.features.map((f) => (
                  <div key={f} className="text-xs text-foreground/80 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
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
        <HeartHandshake size={32} className="text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide mb-4">Partner with Autobots Dev</h3>
        <p className="text-muted-foreground font-light mb-6 leading-relaxed">
          Whether you need a custom web or mobile app, business intelligence dashboards, software maintenance, or digital transformation consulting, Autobots Dev delivers practical results.
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

export default AutobotsDev;
