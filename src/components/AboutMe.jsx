import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Analitics
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              I am a passionate web developer with a focus on creating dynamic
              and responsive web applications.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in web development started with a curiosity for how
              websites work, and it has grown into a full-fledged passion for
              building user-friendly and efficient web solutions.
            </p>

            <div className="flex flex-col justify-center sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="cosmic-btn bg-secondary hover:bg-secondary/90 text-white"
              >
                Contact Me
              </a>
              <a
                href=""
                className="px-6 py-2 text-primary border border-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building responsive and dynamic web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">User Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Focusing on user-friendly interfaces and experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Professional Experience
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Over 3 years of experience in web development and analytics.
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
