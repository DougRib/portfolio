import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills, built with modern web technologies.",
    image: "/projects/pexels-pixabay-356056.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication and payment integration.",
    image: "/projects/pexels-cookiecutter-1148820.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Blog Application",
    description:
      "A blogging platform with features like post creation, commenting, and user profiles.",
    image: "/projects/pexels-luis-gomes-166706-546819.jpg",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
          Here are some of the projects I have worked on. Each project showcases
          my skills in web development and my ability to create dynamic,
          responsive applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-110 "
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
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
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={25} />
                  </a>
                  <a
                    href={project.github}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/DougRib"
            target="_blank"
            className="cosmic-btn w-fit flex items-center mx-auto gap-2"
          >
            View More on GitHub
            <ArrowRight size={25} />
          </a>
        </div>
      </div>
    </section>
  );
};
