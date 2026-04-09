import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-10"
  >
    <span className="text-xs font-light text-primary uppercase tracking-[0.2em]">{label}</span>
    <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-wide mt-2">{title}</h2>
    {description && <p className="text-muted-foreground font-light mt-3 max-w-2xl">{description}</p>}
  </motion.div>
);

export default SectionHeading;
