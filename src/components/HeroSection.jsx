import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center text-white z-10">
        <div className="space-y-6 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="opacity-0 animate-fade-in">Olá </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Douglas
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Ribeiro
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto mb-6 opacity-0 animate-fade-in-delay-3">
            Discover my projects, skills, and journey in web development.
          </p>
          <div className="flex justify-center space-x-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-btn">
              View My Projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
