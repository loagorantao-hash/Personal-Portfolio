import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  tagline: string;
  tools: string[];
  link: string;
  index: number;
}

const ProjectCard = ({ title, tagline, tools, link, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Link to={link} className="block card-elevated p-6 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-heading text-xl font-normal tracking-wide group-hover:text-primary transition-colors">{title}</h3>
        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <p className="text-muted-foreground text-sm font-light mb-4 leading-relaxed">{tagline}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="skill-badge text-xs">{t}</span>
        ))}
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;
