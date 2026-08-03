import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutImage from "@/assets/loago-about.jpeg";
import casualImage from "@/assets/loago-casual.jpeg";
import { Award, Briefcase, GraduationCap, CheckCircle2, BookOpen, Layers } from "lucide-react";

const experience = [
  {
    role: "Founder | BI Analyst | Software Developer",
    company: "Autobots Dev (Pty) Ltd.",
    period: "Present",
    desc: "Leading a technology company focused on software development, data analytics, automation, web & mobile applications, UI/UX design, and digital transformation in Botswana. Built key platforms like Property Lynk (on Play Store), Lynk, EasyOrder, Autobots CRM, and KRH27 Ticket Tracking."
  },
  {
    role: "Business Intelligence Analyst - Banking Analytics",
    company: "FNB Botswana",
    period: "2024",
    desc: "Designed and delivered 5+ interactive Power BI dashboards for cash deposits, POS transactions, eCommerce, and digital banking metrics. Developed SQL queries for data extraction, transformation, reconciliation, and validation across multiple banking systems. Conducted customer profitability and FX commission analysis. Automated 3 major monthly reports reducing manual preparation time by 70%."
  },
  {
    role: "Transactional Banker - eWallet Pro Support",
    company: "FNB Botswana",
    period: "2024",
    desc: "Supported digital banking operations by resolving transaction-related queries and escalations. Performed transaction validation and reconciliation activities, identified root causes of issues, and collaborated with product and technical teams to improve customer experience and system reliability."
  }
];

const education = [
  {
    degree: "BSc (Hons) Business Intelligence and Data Analytics",
    grade: "First Class Honours",
    institution: "University of Sunderland (UK) | Botswana Accountancy College",
    awarded: "Awarded July 2026",
    desc: "Specialized in data modeling (star/snowflake schemas), database design (T-SQL), enterprise business intelligence systems, data warehousing, data governance, and predictive analytics."
  }
];

const certifications = [
  "Power BI Data Visualization Certification",
  "SQL Server Fundamentals & Advanced Query Optimization (Self-Directed Learning)"
];

const softSkills = [
  { title: "Analytical Thinking", desc: "Ability to break down complex business problems and translate them into actionable technical solutions." },
  { title: "Problem Solving", desc: "Demonstrated ability to identify root causes, troubleshoot data discrepancies, and implement efficient fixes." },
  { title: "Stakeholder Engagement", desc: "Skilled at gathering business requirements, presenting data insights, and influencing decision-making through data storytelling." },
  { title: "Attention to Detail", desc: "Meticulous approach to data validation, reconciliation, and quality assurance." },
  { title: "Fast-Paced Delivery", desc: "Comfortable working in dynamic environments with tight timelines and competing priorities." },
  { title: "Cross-Functional Collaboration", desc: "Effective team player with experience working across banking, technical, and business teams." }
];

const About = () => (
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
          Loago Junior Rantao
        </h1>
        <p className="text-lg text-primary font-light tracking-wide mt-4">
          First Class Honours BI & Data Analytics Graduate · Founder at Autobots Dev (Pty) Ltd.
        </p>
      </motion.div>
    </section>

    {/* Bio + Photos */}
    <section className="section-container py-16">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="aspect-[3/4] rounded-sm overflow-hidden border border-border">
            <img src={aboutImage} alt="Loago Junior Rantao" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[16/10] rounded-sm overflow-hidden border border-border">
            <img src={casualImage} alt="Loago Junior Rantao casual" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-3xl font-light tracking-wide">Professional Profile</h2>
          <div className="w-12 h-px bg-primary" />
          <p className="text-base font-light leading-relaxed">
            First Class Honours Business Intelligence and Data Analytics graduate with hands-on experience in transactional banking, digital financial services at FNB Botswana, and software venture creation as Founder of Autobots Dev (Pty) Ltd.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            Experienced in transaction validation, reconciliation, reporting automation, and resolving payment-related queries. Skilled in Excel, SQL (T-SQL), Power BI, DAX, and data modeling, with a proven ability to identify transaction trends, support operational processes, and improve service delivery within financial environments.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            As Founder of Autobots Dev (Pty) Ltd., I bridge business intelligence with full-stack software engineering—building custom web applications, mobile platforms like Property Lynk (available on Play Store), CRM tools, and AI healthcare initiatives like Botsogo.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Education Section */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Academic Qualifications" title="Education" />
      <div className="max-w-3xl space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 border border-border rounded-sm bg-secondary/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                <h3 className="font-heading text-xl font-light tracking-wide">{e.degree}</h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-light">
                {e.grade}
              </span>
            </div>
            <p className="text-sm font-light text-foreground/80 mb-1">{e.institution}</p>
            <p className="text-xs text-muted-foreground font-light mb-3">{e.awarded}</p>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Professional Experience */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Work Experience" title="Professional History" />
      <div className="space-y-6 max-w-3xl">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border rounded-sm"
          >
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-heading font-light text-xl tracking-wide">{exp.role}</h3>
                <p className="text-sm font-light text-primary">{exp.company}</p>
              </div>
              <span className="text-xs text-muted-foreground font-light px-2.5 py-1 rounded border border-border">{exp.period}</span>
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mt-3">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Certifications & Soft Skills */}
    <section className="section-container py-16 border-t border-border">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Certifications */}
        <div>
          <SectionHeading label="Professional Development" title="Certifications" />
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-border rounded-sm">
                <Award size={18} className="text-primary shrink-0" />
                <span className="text-sm font-light">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <SectionHeading label="Professional Attributes" title="Core Soft Skills" />
          <div className="grid gap-3">
            {softSkills.slice(0, 4).map((s, i) => (
              <div key={i} className="p-4 border border-border rounded-sm">
                <h4 className="font-heading font-light text-base text-foreground mb-1">{s.title}</h4>
                <p className="text-xs font-light text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
