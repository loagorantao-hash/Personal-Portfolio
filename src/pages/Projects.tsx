import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import teamImage from "@/assets/loago-team.jpeg";
import hackathonImage from "@/assets/loago-hackathon.jpeg";

const projects = [
  {
    id: "rantaox",
    title: "RantaoX",
    tagline: "A digital product brand building practical tools for small businesses",
    problem: "Small businesses and everyday users need simple, affordable digital tools, but most solutions on the market are overbuilt and expensive.",
    solution: "RantaoX is a platform focused on building useful tools that solve real problems. Starting with financial management and expanding into broader business support solutions.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Product Development"],
    features: ["Financial management tools", "Business support solutions", "Practical digital utilities", "Built for simplicity and real use"],
    outcome: "Early stage and actively evolving. Live at rantaox.lovable.app.",
    liveLink: "https://rantaox.lovable.app",
  },
  {
    id: "autobots",
    title: "AutoBots",
    tagline: "Co-founded a startup team that built Botsogo, an AI-powered healthcare platform to improve patient access across Botswana",
    problem: "Patients in Botswana face long clinic queues, limited access to healthcare information, and a system that struggles with congestion and resource allocation.",
    solution: "As Team AutoBots, we built Botsogo, an AI-powered healthcare platform designed to improve patient access, reduce clinic congestion, and enable smarter healthcare decisions. We finished in the Top 4 on health, presenting to judges among strong teams.",
    tools: ["Team Leadership", "AI/Healthcare", "Product Thinking", "Pitching"],
    features: ["AI-powered patient access system", "Clinic congestion reduction", "Smarter healthcare decision-making", "Stakeholder presentations and pitching"],
    outcome: "Top 4 finish on health at BDIH. Key takeaway: building great solutions matters, but clearly communicating and delivering them to investors and stakeholders is just as important. This experience pushed us beyond systems thinking into real-world impact, storytelling, and delivery.",
    liveLink: "https://lnkd.in/dqvcrNUq",
    subProject: {
      title: "FinGuide AI",
      desc: "A financial assistant concept developed as part of the AutoBots initiative. Focused on helping small businesses track income and expenses, understand performance, and simplify financial management. Built to explore how technology can make financial decisions easier.",
      status: "Concept / early-stage idea developed during startup exploration",
    },
  },
  {
    id: "transact",
    title: "Transact Dashboard",
    tagline: "Power BI dashboard for transaction pattern analysis",
    problem: "Financial institutions need clear visibility into transaction patterns across ATM, CashPlus, card, and cardless channels.",
    solution: "Built a Power BI dashboard that visualizes transaction data across all channels, making it easy for stakeholders to spot patterns and make informed decisions.",
    tools: ["Power BI", "DAX", "SQL", "Data Modeling"],
    features: ["ATM vs CashPlus transaction analysis", "Cardless vs card usage comparison", "Airtime and electricity purchase tracking", "Interactive filtering and drill-down"],
    outcome: "Gave stakeholders better visibility into transaction patterns, helping with resource allocation and planning.",
  },
  {
    id: "tsetseng",
    title: "Tsetseng Financial Analysis",
    tagline: "Monthly financial reporting system",
    problem: "Financial reporting was manual and slow, making it hard to track deposits, fees, commissions, and foreign exchange turnover.",
    solution: "Built a structured monthly reporting system that automatically tracks key metrics and presents them clearly for decision makers.",
    tools: ["Excel", "Power BI", "Financial Analysis", "Data Visualization"],
    features: ["Cash deposit tracking (volume and value)", "Fees and commissions monitoring", "FX turnover analysis", "POS and eCommerce data reporting"],
    outcome: "Now supports pricing decisions and delivers client insights that drive business strategy.",
  },
  {
    id: "rantao-attorneys",
    title: "Rantao Attorneys Website",
    tagline: "A modern website for a legal practice to establish credibility and reach clients online",
    problem: "Law firms rely heavily on trust, credibility, and clear communication. Without a professional digital presence, client acquisition and brand positioning suffer.",
    solution: "Designed and developed a clean, professional website with structured content for clarity and trust. Built a responsive UI that works seamlessly on mobile and desktop.",
    tools: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    features: ["Service-focused layout", "Contact and inquiry sections", "Clean and readable design", "Mobile-first responsiveness"],
    outcome: "Gave the firm a professional online presence that builds trust and makes legal services more accessible.",
    liveLink: "https://rantaoattorneys.lovable.app",
  },
  {
    id: "cheri-auti",
    title: "Cheri Auti Style Muse",
    tagline: "A fashion-focused website showcasing a local clothing brand in Botswana",
    problem: "Local fashion brands in Botswana are expanding through digital platforms, but many lack a polished online presence to showcase their work.",
    solution: "Designed a visually engaging UI with a product-style layout for showcasing clothing. Focused on mobile-friendly browsing and visual appeal.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Visual Design"],
    features: ["Product showcase sections", "Visual-first design", "Clean layout for browsing", "Mobile responsiveness"],
    outcome: "Helped the brand present itself professionally online and reach a wider audience through a strong digital presence.",
    liveLink: "https://cheriauti-style-muse.lovable.app",
  },
  {
    id: "peter-camel",
    title: "Peter Camel Website",
    tagline: "A clean, modern website built to represent a personal brand identity online",
    problem: "Building a personal or brand identity online requires a structured, visually balanced website that communicates clearly.",
    solution: "Designed a structured and visually balanced layout focused on clarity and user experience. Built a responsive interface with modern UI styling.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Branding"],
    features: ["Simple navigation", "Clear content sections", "Responsive design", "Modern UI styling"],
    outcome: "Delivered a polished personal brand website that communicates identity clearly and professionally.",
    liveLink: "https://peter-camel.lovable.app",
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
          Projects & Case Studies
        </h1>
        <p className="text-lg text-muted-foreground font-light tracking-wide mt-4">
          Real projects showing data analysis, business intelligence, and product development in action.
        </p>
      </motion.div>
    </section>

    <section className="section-container py-16">
      <div className="space-y-12">
        {projects.map((p, i) => (
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
                <span className="text-xs font-light text-primary uppercase tracking-[0.2em]">Project {i + 1}</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-wide mt-1">{p.title}</h3>
                <p className="text-muted-foreground font-light mt-1">{p.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-2">
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
                <h4 className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground mb-2">Impact</h4>
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

            {p.id === "autobots" && (
              <>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="aspect-[16/10] rounded-sm overflow-hidden">
                    <img src={teamImage} alt="AutoBots team working together" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[16/10] rounded-sm overflow-hidden">
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
  </div>
);

export default Projects;