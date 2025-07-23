import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center px-4 z-10">
        <div className="flex flex-col items-center ">
          <img
            src="/projects/dr.jpg"
            alt="Douglas Ribeiro"
            className="w-[200px] cursor-pointer mx-auto rounded-full shadow-lg shadow-primary/60 transition-all duration-300 hover:-translate-y-1 hover:scale-101 hover:shadow-2xl hover:shadow-primary/60 md:w-[230px] opacity-0 animate-fade-in-delay-2"
          />
        </div>
        <div className="space-y-6 bg-opacity-50 p-4 rounded-lg ">
          <h1 className="text-4xl pb-3 md:text-7xl font-light mb-4 tracking-tight flex flex-wrap gradient-text bg-clip-text text-transparent animate-fade-in justify-center break-words">
            Douglas Ribeiro
          </h1>
          <h3 className="text-2xl md:text-4xl font-light mx-auto mb-1 tracking-tight flex flex-wrap gradient-text bg-clip-text text-transparent justify-center break-words opacity-0 animate-fade-in-delay-3">
            Desenvolvedor Web 
          </h3>
          <h3 className="text-2xl md:text-4xl font-light mb-4 tracking-tight flex flex-wrap gradient-text bg-clip-text text-transparent animate-fade-in-delay-3 justify-center break-words">
            Analista de Dados
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto mb-4 opacity-0 animate-fade-in-delay-3">
            Descubra meus projetos, habilidades, jornada em desenvolvimento web
            fullstack e análise de dados.
          </p>
          <div className="flex justify-center space-x-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-btn img-effect">
              View My Projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
