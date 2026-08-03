import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, Code, Database, Download, Award, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const coreSkills = [
  "Power BI",
  "SQL & T-SQL",
  "DAX",
  "Power Query",
  "Data Modeling (Star/Snowflake)",
  "ETL Concepts",
  "Data Reconciliation & Governance",
  "Banking Analytics",
  "Python",
  "React.js",
  "TypeScript",
  "Excel (Advanced)"
];

const achievements = [
  { icon: BarChart3, value: "5+ Power BI Dashboards", label: "Used by 15+ stakeholders across transactional banking" },
  { icon: TrendingUp, value: "70% Time Saved", label: "Automated 3 major monthly reporting workflows at FNB" },
  { icon: ShieldCheck, value: "99% Data Accuracy", label: "Resolved cash deposit reconciliation & reporting issues" },
  { icon: Award, value: "First Class Honours", label: "BSc (Hons) Business Intelligence & Data Analytics" }
];

const projects = [
  { title: "Autobots Dev (Pty) Ltd.", tagline: "Technology & digital transformation company building modern software and analytics in Botswana", tools: ["Software Dev", "BI & Analytics", "UI/UX"], link: "/autobots" },
  { title: "Property Lynk", tagline: "Finished property management platform for landlords, tenants, & agents (Live on Play Store)", tools: ["Mobile App", "Web App", "Property Tech"], link: "/projects#property-lynk" },
  { title: "FNB Banking Analytics", tagline: "Power BI dashboards for POS, eCommerce, cash deposits, customer profitability & FX analysis", tools: ["Power BI", "SQL", "DAX", "Data Modeling"], link: "/projects#fnb-banking" },
  { title: "World Data 2023 & Walmart Sales Prediction", tagline: "Interactive trend dashboards and predictive modeling projects", tools: ["Python", "Power BI", "SQL", "Predictive Modeling"], link: "/projects#analytics-projects" },
];

const Index = () => {
  return (
  <div className="pt-16">
    {/* Hero */}
    <section className="section-container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-light text-primary uppercase tracking-[0.2em]">Gaborone, Botswana</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide mt-4 leading-[1.15]">
            Turning Data into{" "}
            <span className="gradient-text">Insights</span>.{" "}
            Building Solutions That{" "}
            <span className="gradient-text">Matter</span>.
          </h1>
          <p className="text-muted-foreground mt-6 text-lg font-light leading-relaxed">
            First Class Honours BI & Data Analytics Graduate · Founder at Autobots Dev (Pty) Ltd. · Business Intelligence Analyst & Software Developer
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-light tracking-wide hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/autobots"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-light tracking-wide text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
            >
              Explore Autobots Dev
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="/cv/Loago_Junior_Rantao_CV.pdf"
              download="Loago_Junior_Rantao_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-border text-sm font-light tracking-wide text-foreground hover:border-primary/30 hover:text-primary transition-colors"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </motion.div>

        <div>
          <HeroSlider />
        </div>
      </div>
    </section>

    {/* Key Achievements Grid */}
    <section className="section-container py-12 border-t border-border bg-secondary/20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 border border-border rounded-sm bg-background"
          >
            <item.icon size={20} className="text-primary mb-2" />
            <h3 className="font-heading text-lg font-light tracking-wide">{item.value}</h3>
            <p className="text-muted-foreground text-xs font-light mt-1 leading-relaxed">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Skills */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Technical & Domain Expertise" title="Core Competencies & Tools" />
      <div className="p-6 border border-border rounded-sm">
        <div className="flex items-center gap-2 mb-4">
          <Database size={18} className="text-primary" />
          <h3 className="font-heading font-light text-lg tracking-wide">Data, Analytics & Development Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((s) => (
            <span key={s} className="skill-badge-accent">{s}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Portfolio Highlights" title="Featured Work" description="A selection of business intelligence, data analytics, web & mobile software development." />
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>

    {/* About Preview */}
    <section className="section-container py-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BarChart3, title: "Banking & BI Analytics", desc: "Proven track record at FNB Botswana in Power BI dashboard development, SQL extraction, FX analysis, and reporting automation." },
            { icon: Layers, title: "Autobots Dev (Pty) Ltd.", desc: "Founder leading custom software development, mobile apps, database design, and UI/UX solutions in Botswana." },
            { icon: Code, title: "Full-Stack Software Dev", desc: "Building practical web and mobile applications using React, TypeScript, Python, and modern backend systems." },
          ].map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <item.icon size={22} className="text-primary mx-auto md:mx-0 mb-3" />
              <h3 className="font-heading font-light text-lg tracking-wide mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:text-left">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group">
            Learn more about my experience & background <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  </div>
  );
};

export default Index;
