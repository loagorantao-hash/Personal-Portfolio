import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 mt-12">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-light tracking-wide">
        © {new Date().getFullYear()} Loago Junior Rantao
      </p>
      <div className="flex items-center gap-6">
        <a href="https://github.com/loagojunior" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/feed" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:loagorantao@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
