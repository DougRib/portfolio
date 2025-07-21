import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center px-4 text-white z-10">
        <div className="space-y-6 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight flex flex-wrap justify-center break-words">
            <span className="opacity-0 animate-fade-in">Olá, sou</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
              Douglas
            </span>{' '}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Ribeiro
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto mb-6 opacity-0 animate-fade-in-delay-3">
            Descubra meus projetos, habilidades, jornada em desenvolvimento web fullstack e análise de dados.
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
