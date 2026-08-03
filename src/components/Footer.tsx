import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 mt-12">
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-light tracking-wide">
        © {new Date().getFullYear()} Loago Junior Rantao · Autobots Dev (Pty) Ltd.
      </p>
      <div className="flex items-center gap-6">
        <a href="https://github.com/loagorantao-hash" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="GitHub">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/loago-rantao-190324257/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:loagorantao@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" title="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
