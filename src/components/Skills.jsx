import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 45, category: "frontend" },
  { name: "React", level: 30, category: "frontend" },
  { name: "TypeScript", level: 30, category: "frontend" },
  { name: "Tailwind Css", level: 50, category: "frontend" },
  { name: "Next.js", level: 30, category: "frontend" },

  { name: "Node.js", level: 50, category: "backend" },
  { name: "PostgreSQL", level: 30, category: "backend" },
  { name: "Python", level: 30, category: "backend" },

  { name: "Git/GitHub", level: 40, category: "tolls" },
  { name: "Docker", level: 30, category: "tolls" },
  { name: "VsCode", level: 60, category: "tolls" },
];

const categories = ["all", "frontend", "backend", "tolls"];

export const Skills = () => {
  const [activeCategory, setIsCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg  card-hover bg-gradient-to-br from-gray-700 hover:from-gray-500 hover:shadow-[0_0_10px_#e76f51]"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
