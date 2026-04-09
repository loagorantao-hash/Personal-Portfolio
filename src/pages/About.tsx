import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutImage from "@/assets/loago-about.jpeg";
import casualImage from "@/assets/loago-casual.jpeg";

const journey = [
  { year: "Foundation", title: "Data Analysis & Reporting", desc: "Started with SQL, Excel, and Power BI. Learned how to turn raw data into insights that actually help businesses make decisions." },
  { year: "Growth", title: "Financial Data & Dashboards", desc: "Worked with real financial datasets, building dashboards for transaction analysis and monthly reporting." },
  { year: "Evolution", title: "Product Building", desc: "Got interested in building tools, not just analyzing data. Started learning React, TypeScript, and modern web development." },
  { year: "Now", title: "Building & Founding", desc: "Co-founding startups, building RantaoX, and working at the intersection of data and product development." },
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
          The Person Behind the Data
        </h1>
        <p className="text-lg text-muted-foreground font-light tracking-wide mt-4">
          Business Intelligence · Product Building · Botswana
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
          <div className="aspect-[3/4] rounded-sm overflow-hidden">
            <img src={aboutImage} alt="Loago overlooking the city" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[16/10] rounded-sm overflow-hidden">
            <img src={casualImage} alt="Loago casual" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-3xl font-light tracking-wide">Loago Junior Rantao</h2>
          <div className="w-12 h-px bg-primary" />
          <p className="text-base font-light leading-relaxed">
            A Business Intelligence and Data Analytics student with real experience working with financial data and building dashboards.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            I started with data analysis and reporting, working with real financial datasets to create insights that help businesses make better decisions. Over time, I got hooked on not just analyzing data, but actually building the tools and products that put data to work.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            Right now, I'm focused on bridging the gap between data analysis and product development. I'm learning modern web development, co-founding startup ventures, and building RantaoX, all with a focus on solving practical problems for businesses in Botswana.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            I believe in learning by doing, solving real problems with data, and building things that actually make a difference.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Journey */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Journey" title="How I Got Here" />
      <div className="space-y-4 max-w-3xl">
        {journey.map((j, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 items-start py-5 border-b border-border last:border-0"
          >
            <span className="text-xs font-light text-primary tracking-[0.15em] uppercase whitespace-nowrap min-w-[80px] pt-1">{j.year}</span>
            <div>
              <h3 className="font-heading font-light text-lg tracking-wide mb-1">{j.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{j.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Learning Journey */}
    <section className="section-container py-16 border-t border-border">
      <SectionHeading label="Growth" title="Learning Journey" description="Growing from data analyst to product builder, picking up design thinking and modern dev skills along the way." />
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { title: "Frontend Development", desc: "Learning React, TypeScript, and how to build modern web apps with clean, reusable components." },
          { title: "UI/UX Principles", desc: "Focusing on usability, clean design, and always thinking about the person using the product." },
          { title: "Design Thinking", desc: "Understanding what users actually need and building solutions that work for them." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border rounded-sm"
          >
            <h3 className="font-heading font-light text-lg tracking-wide mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
