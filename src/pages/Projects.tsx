import { motion } from "framer-motion";
import { ExternalLink, Play, Layers, BarChart3, Database } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import teamImage from "@/assets/loago-team.jpeg";
import hackathonImage from "@/assets/loago-hackathon.jpeg";

const autobotsProjects = [
  {
    id: "property-lynk",
    title: "Property Lynk",
    tagline: "Comprehensive property management platform for landlords, property managers, tenants, transport operators, and agents",
    status: "Finished (Available on Play Store)",
    problem: "Landlords, property managers, and agents in Botswana faced fragmented manual tracking for rent collection, maintenance requests, and tenant records.",
    solution: "Built a unified property management ecosystem enabling landlords, tenants, transport operators, and agents to handle property listings, rent tracking, and operations from one application.",
    tools: ["React Native", "React.js", "TypeScript", "Node.js", "Database Design"],
    features: ["Tenant & Rent Management", "Property Listings & Record Keeping", "Maintenance Requests Tracking", "Administrative Dashboards", "Mobile (Play Store) & Web Access"],
    outcome: "Successfully launched and available on Google Play Store for active property and rental management.",
  },
  {
    id: "lynk",
    title: "Lynk",
    tagline: "A dating and social connection platform designed specifically for the Botswana market",
    status: "In Development",
    problem: "Existing dating applications lack local context, safety verification, and matchmaking features tailored to African and local Botswana communities.",
    solution: "Developing a feature-rich, highly secure dating platform combining modern matchmaking algorithms with local user experience design.",
    tools: ["React Native", "TypeScript", "WebSockets", "Push Notifications", "UI/UX Design"],
    features: ["User Authentication & Verification", "Profile Creation & Matching Algorithms", "Real-Time Messaging & Chat", "Push Notifications", "Strict Content Moderation"],
    outcome: "Currently in active development with prototype testing and safety validation.",
  },
  {
    id: "autobots-crm",
    title: "Autobots CRM",
    tagline: "Customer relationship management platform designed to help SMEs manage customer interactions and automate tasks",
    status: "In Development",
    problem: "Small and medium enterprises often lose sales leads and waste time due to manual pipeline tracking and repetitive administrative tasks.",
    solution: "Designing a modular CRM tool that automates sales workflows, monitors customer touchpoints, and provides real-time pipeline analytics.",
    tools: ["React", "TypeScript", "Node.js", "BI Analytics", "Workflow Automation"],
    features: ["Customer Management & Contact History", "Sales Pipeline & Lead Tracking", "Workflow & Task Automation", "Custom Reporting & Analytics"],
    outcome: "In active development at Autobots Dev to power local SME growth.",
  },
  {
    id: "krh27",
    title: "KRH27 Ticket Tracking System",
    tagline: "Event management platform for digital ticket registration, sales tracking, and entrance access verification",
    status: "Completed",
    problem: "Event organizers needed a reliable way to manage ticket sales and verify access at entrances even in low-connectivity event venues.",
    solution: "Designed and built an event ticketing application featuring real-time and offline synchronization with instant QR/code verification.",
    tools: ["React", "TypeScript", "Offline Sync", "Database Management"],
    features: ["Ticket Registration & Sales Management", "Instant Ticket Verification at Gates", "Offline Data Synchronization", "Administrative Dashboard & Role Access"],
    outcome: "Successfully deployed for event gate control with zero throughput bottlenecks.",
  },
  {
    id: "easyorder",
    title: "EasyOrder",
    tagline: "Online ordering platform helping local businesses showcase products and receive digital customer orders",
    status: "Completed",
    problem: "Local merchants and food vendors needed a simple, mobile-friendly digital storefront without complex setup costs.",
    solution: "Built a lightweight product catalog and instant ordering web platform that streamlines customer orders straight to business operators.",
    tools: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    features: ["Product Catalog & Menu Management", "Instant Order Tracking", "Responsive & Mobile-First Design", "Seamless Customer Checkout"],
    outcome: "Deployed for local business digital storefronts.",
  },
  {
    id: "naledi-platform",
    title: "Naledi Senior School Digital Platform",
    tagline: "Lightweight digital platform designed to improve school communication and simplify administration",
    status: "In Development",
    problem: "Schools face administrative bottlenecks in tracking student records, announcements, and parent communication.",
    solution: "Creating a streamlined school management platform focused on ease-of-use for teachers, administrators, and students.",
    tools: ["React", "TypeScript", "Database Management", "UI/UX"],
    features: ["Student & Class Management", "Administrative Tools", "Communication Modules", "Reporting Capabilities"],
    outcome: "In active development for school administration pilot.",
  },
  {
    id: "rantao-attorneys",
    title: "Rantao Attorneys Website Redevelopment",
    tagline: "A complete redesign and modernization of the legal practice's online presence",
    status: "Completed",
    problem: "The firm's existing web presence needed modern branding, improved usability, and mobile responsiveness to establish trust with prospective clients.",
    solution: "Rebuilt the website with a clean legal-focused layout, responsive design, structured service information, and direct inquiry forms.",
    tools: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    features: ["Modern Responsive Design", "Service & Practice Area Layouts", "Client Inquiry Integration", "High Performance & Accessibility"],
    outcome: "Delivered a modern website building client trust and online inquiries.",
  },
  {
    id: "bofwa-website",
    title: "BOFWA Website Redevelopment",
    tagline: "Complete website redesign improving functionality, responsiveness, and user experience for BOFWA",
    status: "Completed",
    problem: "The organization required an updated, accessible web platform to share health information, resources, and community programs.",
    solution: "Redesigned the web architecture to emphasize content clarity, quick resource access, and seamless mobile viewing.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Accessibility"],
    features: ["Content Resource Hub", "Program Announcements", "Fully Responsive Layout", "Enhanced Accessibility"],
    outcome: "Improved community engagement and resource access for users across Botswana.",
  },
  {
    id: "autobots-botsogo",
    title: "Team AutoBots - Botsogo Health Platform",
    tagline: "AI-powered healthcare platform to improve patient access and reduce clinic congestion across Botswana",
    status: "Top 4 Finish - BDIH Hackathon",
    problem: "Patients in Botswana face long clinic queues, limited access to triage info, and congested healthcare facilities.",
    solution: "Co-founded Team AutoBots and built Botsogo, an AI healthcare platform enabling smart triage, clinic load monitoring, and patient scheduling.",
    tools: ["AI/Healthcare Triage", "Product Thinking", "Team Leadership", "Pitching"],
    features: ["AI-powered patient access system", "Clinic congestion monitoring", "Smarter healthcare decision-making", "Stakeholder presentations & pitching"],
    outcome: "Achieved Top 4 finish on health at Botswana Digital & Innovation Hub (BDIH).",
    liveLink: "https://lnkd.in/dqvcrNUq",
    subProject: {
      title: "FinGuide AI",
      desc: "A financial assistant concept developed under AutoBots to help small businesses track income, expenses, and simplify financial management.",
      status: "Concept / Early-stage development",
    },
  },
];

const analyticsProjects = [
  {
    id: "fnb-banking",
    title: "FNB Botswana - Banking Analytics & Dashboard Suite",
    tagline: "Power BI BI & Analytics system for cash deposits, POS, eCommerce, customer profitability, and FX turnover",
    problem: "Transactional banking units required real-time visibility into POS transactions, cash deposit accuracy, customer profitability, and foreign exchange commission turnover across digital channels.",
    solution: "Designed 5+ interactive Power BI dashboards, wrote complex SQL queries (T-SQL) for multi-system data extraction & ETL, performed data reconciliation, and automated monthly reporting workflows.",
    tools: ["Power BI", "SQL / T-SQL", "DAX", "Power Query", "Star/Snowflake Schema", "Excel (Advanced)"],
    features: [
      "5+ Interactive Power BI Dashboards for 15+ stakeholders across banking units",
      "Automated 3 major monthly reports, cutting manual preparation time by 70%",
      "Identified & resolved cash deposit data reconciliation issues, boosting accuracy from 92% to 99%",
      "Dimensional data modeling (star schema) for transactional banking and eCommerce",
      "Customer profitability and foreign exchange (FX) commission analysis",
      "Knowledge-sharing sessions for non-technical teams on BI dashboard interpretation"
    ],
    outcome: "Enabled real-time performance monitoring across FNB Botswana transactional banking units and improved reporting precision.",
  },
  {
    id: "world-data-2023",
    title: "World Data 2023 Dashboard",
    tagline: "Interactive global metrics and trend analysis dashboard",
    problem: "Global economic and demographic datasets contain millions of records that require cleaning, transformation, and structured modeling to extract actionable global trends.",
    solution: "Cleaned and modeled global dataset records into structured star-schema tables, creating interactive visual filters for macro-trend analysis.",
    tools: ["Power BI", "SQL", "Excel", "Data Visualization"],
    features: ["Data Cleaning & Transformation", "Interactive Multi-metric Dashboards", "Global Trend Analysis", "Custom Visual Filters"],
    outcome: "Delivered intuitive visual insights into global economic and demographic patterns.",
  },
  {
    id: "walmart-sales-prediction",
    title: "Walmart Sales Prediction Project",
    tagline: "Data analysis and predictive modeling for retail revenue forecasting",
    problem: "Retail managers need accurate sales forecasting across store departments to optimize inventory, staffing, and promotional planning.",
    solution: "Applied Python statistical and machine learning models to analyze historical sales data, seasonal trends, and promotional impacts.",
    tools: ["Python", "Power BI", "Excel", "Predictive Modeling"],
    features: ["Exploratory Data Analysis (EDA)", "Predictive Sales Forecasting Models", "Departmental Revenue Visualizations", "Analytical Executive Reporting"],
    outcome: "Demonstrated predictive revenue modeling with actionable inventory recommendations.",
  },
];

const Projects = () => (
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
          Projects & Portfolio
        </h1>
        <p className="text-lg text-muted-foreground font-light tracking-wide mt-4">
          Software applications, technology ventures at Autobots Dev, and Business Intelligence & Data Analytics projects.
        </p>
      </motion.div>
    </section>

    {/* Section 1: Autobots Dev Software Projects */}
    <section className="section-container py-16">
      <SectionHeading label="Software & Products" title="Autobots Dev (Pty) Ltd. Projects" description="Custom web apps, mobile solutions, CRM tools, and enterprise redevelopments built by Autobots Dev." />
      <div className="space-y-12">
        {autobotsProjects.map((p, i) => (
          <motion.div
            key={p.id}
            id={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-sm p-6 md:p-10 hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-light text-primary uppercase tracking-[0.2em]">Autobots Dev Product {i + 1}</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {p.status}
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide">{p.title}</h3>
                <p className="text-muted-foreground font-light mt-1">{p.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span key={t} className="skill-badge-accent text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Problem</h4>
                <p className="text-sm font-light leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Solution</h4>
                <p className="text-sm font-light leading-relaxed">{p.solution}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Key Features</h4>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm font-light flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Impact / Outcome</h4>
                <p className="text-sm font-light leading-relaxed">{p.outcome}</p>
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-light text-primary hover:text-primary/70 transition-colors"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            {p.id === "autobots-botsogo" && (
              <>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="aspect-[16/10] rounded-sm overflow-hidden border border-border">
                    <img src={teamImage} alt="AutoBots team working together" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[16/10] rounded-sm overflow-hidden border border-border">
                    <img src={hackathonImage} alt="Hackathon presentation" className="w-full h-full object-cover" />
                  </div>
                </div>

                {p.subProject && (
                  <div className="mt-8 p-6 border border-border rounded-sm">
                    <span className="text-xs font-light text-primary uppercase tracking-[0.2em]">Sub-Project</span>
                    <h4 className="font-heading text-lg font-light tracking-wide mt-1 mb-2">{p.subProject.title}</h4>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-3">{p.subProject.desc}</p>
                    <span className="inline-block text-xs font-light px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {p.subProject.status}
                    </span>
                  </div>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>

    {/* Section 2: Data Analytics & Business Intelligence Projects */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Business Intelligence & Analytics" title="Data Analytics Projects" description="Power BI dashboards, SQL data engineering, financial analytics at FNB Botswana, and predictive models." />
      <div className="space-y-12">
        {analyticsProjects.map((p, i) => (
          <motion.div
            key={p.id}
            id={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-sm p-6 md:p-10 hover:border-primary/40 transition-colors duration-300 bg-secondary/10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-light text-primary uppercase tracking-[0.2em]">Analytics Case Study {i + 1}</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide mt-1">{p.title}</h3>
                <p className="text-muted-foreground font-light mt-1">{p.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span key={t} className="skill-badge-accent text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Challenge & Scope</h4>
                <p className="text-sm font-light leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">BI / Analytics Solution</h4>
                <p className="text-sm font-light leading-relaxed">{p.solution}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Key Accomplishments</h4>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm font-light flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Business Impact</h4>
                <p className="text-sm font-light leading-relaxed">{p.outcome}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Projects;
