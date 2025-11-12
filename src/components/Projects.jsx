import { IconArrowAutofitRight, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Fotógrafo",
    description:
      "Portfólio para Fotógrafo com tela de dashboard para configuração do site, seções, serviços, contato, um site completo e moderno.",
    image: "/projects/fotografo.png",
    tags: ["Typescript", "TailwindCSS", "React", "Next.js", "Prisma"],
    link: "#",
    github: "https://github.com/DougRib/fotografo-portfolio",
  },
  {
    id: 2,
    title: "Análise de Dados em Python",
    description:
      "Exploração de dados usando Python, com foco em limpeza, transformação e geração de insights iniciais. Organização de métricas usando planilhas evisualizações simples.",
    image: "/projects/analise.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "#",
    github: "https://github.com/DougRib/desafio_alura_data_science",
  },
  {
    id: 3,
    title: "Blog Application",
    description:
      "A blogging platform with features like post creation, commenting, and user profiles, built with Next.js and Tailwind CSS.",
    image: "/projects/pexels-luis-gomes-166706-546819.jpg",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className=" mx-auto max-w-5xl">
        <h2 className="text-3xl p-5 md:text-4xl gradient-text bg-clip-text text-transparent mb-5 text-center opacity-0 animate-fade-in-delay-1">
          Meus Projetos
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-12 opacity-0 animate-fade-in-delay-2">
          Nesta seção apresento alguns dos projetos que desenvolvi, aplicando na
          prática meus conhecimentos em desenvolvimento web e análise de dados.
          Todos os
          repositórios estão disponíveis para consulta e contribuem diretamente
          para minha evolução profissional.
        </p>

        <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fade-in-delay-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="neon-card bg-card transition-all duration-400 bg-gradient-to-br from-gray-700 hover:from-gray-500 shadow-primary/60 hover:shadow-xl rounded-lg "
            >
              <div className="relative overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl  w-full h-48"
                />
              </div>
              <div className="p-4 text-center justify-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/70 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 ">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-foreground/80 hover:text-blue-600 transition-colors duration-300"
                    >
                      <IconExternalLink size={25} />
                    </a>
                    <a
                      href={project.github}
                      className="text-foreground/80 hover:text-purple-600 transition-colors duration-300"
                    >
                      <IconBrandGithub size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in-delay-3">
          <a
            href="https://github.com/DougRib"
            target="_blank"
            className="cosmic-btn img-effect w-fit flex transition-all duration-400 items-center mx-auto gap-2"
          >
            Ver mais em GitHub
            <IconArrowAutofitRight size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};
