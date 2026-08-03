import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import heroImage from "@/assets/loago-hero.jpeg";
import slide1 from "@/assets/loago-slide1.jpeg";
import slide2 from "@/assets/loago-slide2.jpeg";
import slide3 from "@/assets/loago-slide3.jpeg";

const slides = [
  { id: 1, src: heroImage, alt: "Loago Junior Rantao - Portrait", caption: "Loago Junior Rantao" },
  { id: 2, src: slide1, alt: "Loago Junior Rantao - Professional Profile", caption: "BI Analyst & Software Developer" },
  { id: 3, src: slide2, alt: "Loago - Tech & Innovation Exploration", caption: "Building & Innovation" },
  { id: 4, src: slide3, alt: "Loago - Analytics & Development Workspace", caption: "Analytics & Product Development Setup" },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div 
      className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border group bg-secondary/30 shadow-lg"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay for caption readability */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Badge / Caption */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="text-xs font-light tracking-wide text-foreground/90 bg-background/70 backdrop-blur-md px-3 py-1 rounded-sm border border-border/50">
          {slides[currentIndex].caption}
        </span>
        <span className="text-[11px] font-mono text-muted-foreground bg-background/70 backdrop-blur-md px-2 py-0.5 rounded-sm border border-border/50">
          0{currentIndex + 1} / 0{slides.length}
        </span>
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/60 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90 z-20"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/60 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90 z-20"
      >
        <ChevronRight size={18} />
      </button>

      {/* Bottom Indicator Dots + Auto-play toggle */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause auto-slider" : "Play auto-slider"}
          className="p-1.5 rounded-full bg-background/60 backdrop-blur-md text-foreground/80 hover:text-foreground hover:bg-background/90 transition-colors"
          title={isPlaying ? "Auto-sliding active (Click to pause)" : "Auto-sliding paused (Click to play)"}
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
        </button>
      </div>

      {/* Bottom Dots */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
