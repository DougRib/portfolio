import { IconBrain, IconChartBar, IconCode } from "@tabler/icons-react";


export const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl gradient-text bg-clip-text text-transparent mb-12 text-center opacity-0 animate-fade-in-delay-1">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-delay-2">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Web e Analista de Dados
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Sou estudante de Ciência da Computação com foco em Desenvolvimento
              Web Fullstack e Análise de Dados com Python. Tenho me dedicado à
              criação de interfaces modernas e intuitivas, aplicando tecnologias
              como React, Next.js e TailwindCSS, além de ferramentas para
              análise como Pandas e Matplotlib. 
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Minha trajetória no
              desenvolvimento começou pela curiosidade de entender como as
              aplicações funcionam e evoluiu para uma paixão em construir
              soluções web funcionais, eficientes e centradas no usuário.
            </p>

            <div className="flex flex-col justify-center sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="cosmic-btn img-effect bg-secondary hover:bg-secondary/90 text-white"
              >
                Contact Me
              </a>
              <a
                href="/DOUGLAS RIBEIRO.pdf"
                download="Currículo DOUGLAS RIBEIRO.pdf"
                className="img-effect px-6 py-2 text-primary border border-primary rounded-full shadow-lg hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all duration-400"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 opacity-0 animate-fade-in-delay-3 ">
            <div className="gradient-border gradient-bd p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IconCode className="h-6 w-6 text-black" />
                </div>
                <div className="text-left ">
                  <h4 className="text-lg font-semibold">
                    Desenvolvimento Fullstack
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvimento de aplicações com tecnologias como React, Next.js, TailwindCSS, Node.js
                    e banco de dados SQL e NoSQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border gradient-bd p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IconChartBar className="h-6 w-6 text-black" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Análise de Dados</h4>
                  <p className="text-sm text-muted-foreground">
                    Análise de dados, visualização e relatórios utilizando
                    ferramentas como Python, Pandas, NumPy, Matplotlib e Seaborn.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border gradient-bd p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IconBrain className="h-6 w-6 text-black" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Projetos e Aprendizado Contínuo
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sempre buscando evoluir por meio de projetos pessoais e
                    estudos constantes nas áreas de tecnologia e dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
