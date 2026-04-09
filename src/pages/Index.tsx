import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, Code, Database, Download } from "lucide-react";
import heroImage from "@/assets/loago-hero.jpeg";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const coreSkills = ["SQL", "Python", "Power BI", "Excel", "Data Analysis", "Financial Reporting"];
const learningSkills = ["React", "TypeScript", "Web Development", "APIs"];

const projects = [
  { title: "RantaoX", tagline: "Building practical tools and solutions for small businesses", tools: ["React", "TypeScript", "Product"], link: "/rantaox" },
  { title: "Transact Dashboard", tagline: "Power BI dashboard analyzing ATM, CashPlus, and card transactions", tools: ["Power BI", "DAX", "SQL"], link: "/projects#transact" },
  { title: "Tsetseng Financial Analysis", tagline: "Monthly financial reporting for deposits, fees, and FX turnover", tools: ["Excel", "Power BI", "Financial Analysis"], link: "/projects#tsetseng" },
  { title: "AutoBots", tagline: "Co-founded a startup team during a hackathon program", tools: ["Teamwork", "Pitching", "Product Thinking"], link: "/projects#autobots" },
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
            Business Intelligence Analyst · Product Builder · Co-Founder
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-light tracking-wide hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/rantaox"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-light tracking-wide text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
            >
              Explore RantaoX
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
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img src={heroImage} alt="Loago Junior Rantao" className="w-full h-full object-cover" fetchPriority="high" width={512} height={640} decoding="async" />
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Skills" title="What I Work With" />
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-border rounded-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Database size={18} className="text-primary" />
            <h3 className="font-heading font-light text-lg tracking-wide">Core Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((s) => (
              <span key={s} className="skill-badge-accent">{s}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 border border-border rounded-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code size={18} className="text-primary" />
            <h3 className="font-heading font-light text-lg tracking-wide">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {learningSkills.map((s) => (
              <span key={s} className="skill-badge">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Projects" title="Featured Work" description="A selection of data analysis, business intelligence, and product building work." />
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
            { icon: BarChart3, title: "Data Analysis", desc: "Hands-on experience with financial datasets, transaction analysis, and business reporting." },
            { icon: Brain, title: "Product Thinking", desc: "Moving beyond analysis into building products that solve real problems." },
            { icon: Code, title: "Building Skills", desc: "Learning React, TypeScript, and modern web development to turn ideas into tools." },
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
            Learn more about me <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  </div>
  );
};

export default Index;
