import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "CSS", icon: "/svg/css.svg", category: "frontend" },
  { name: "HTML", icon: "/svg/html.svg", category: "frontend" },
  { name: "React", icon: "/svg/react-dark.svg", category: "frontend" },
  { name: "TypeScript", icon: "/svg/ts.svg", category: "frontend" },
  {
    name: "Tailwind Css",
    icon: "/svg/tailwindcss-dark.svg",
    category: "frontend",
  },
  { name: "Next.js", icon: "/svg/nextjs-dark.svg", category: "frontend" },

  { name: "Node.js", icon: "/svg/nodejs-dark.svg", category: "backend" },
  { name: "Python", icon: "/svg/python-dark.svg", category: "backend" },

  { name: "Git/GitHub", icon: "/svg/github.svg", category: "tolls" },
  { name: "Docker", icon: "/svg/docker.svg", category: "tolls" },
  { name: "VsCode", icon: "/svg/vscode-dark.svg", category: "tolls" },
];

const categories = ["all", "frontend", "backend", "tolls"];

export const Skills = () => {
  const [activeCategory, setIsCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto  w-full  max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center opacity-0 animate-fade-in-delay-1">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in-delay-2">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setIsCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full hover:text-primary-hover transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg-gap-3 xl:gap-2 place-items-center p-5 opacity-0 animate-fade-in-delay-3">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg w-32 h-32 flex-shrink-0 gradient-bd marquee-item hover:-translate-y-3 transition-all duration-700 bg-gradient-to-br from-gray-700 hover:shadow-[0_0_10px_#e76f51] "
            >
              <div className="flex relative overflow-hidden items-center ">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20  mx-auto"
                  />
                )}
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
};
{
  /*gradient-border marquee-item hover:-translate-y-3 transition-all duration-700
   */
}
