import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            We Build <span className="gradient-text">Digital Experiences</span> That Drive Results
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl">
            A performance-focused digital agency specializing in web development, 
            digital marketing, and creative solutions for ambitious brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact" className="cta-button inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/case-studies" className="border border-border hover:bg-muted px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
