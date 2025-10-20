import React from "react";
import { GithubIcon, GitGraphIcon, Rocket, Laptop2Icon, LanguagesIcon, Palette, CodeXml, Frame} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Web",
      description: "Foundation technologies",
      skills: [
        { name: "HTML5", description: "Semantic markup and accessibility", icon: <CodeXml /> },
        { name: "CSS3", description: "Modern styling and animations", icon: <Palette /> },
        { name: "JavaScript (ES6+)", description: "Modern JS features and patterns", icon: <LanguagesIcon />},
      ],
    },
    {
      title: "Frontend Tools",
      description: "React ecosystem",
      skills: [
        { name: "React", description: "Component-based UI library", icon: <Frame /> },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: "💨" },
        { name: "Vite", description: "Fast build tool and dev server", icon: <Rocket />},
      ],
    },
    {
      title: "Other Tools",
      description: "Development workflow",
      skills: [
        { name: "Git", description: "Version control and collaboration", icon: <GitGraphIcon /> },
        { name: "GitHub", description: "Code hosting and CI/CD", icon: <GithubIcon />},
        { name: "VS Code", description: "Primary development environment", icon: <Laptop2Icon/> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900 dark:text-white font-semibold pt-12">
            Skills & <span className="text-[#61DBFB]">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications,
            organized like React components with clear props and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Header */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-[#F97316] shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg text-gray-900 dark:text-white font-mono">
                    &lt;{category.title.replace(" ", "")} /&gt;
                  </h3>
                  {/* <span className="text-[#F97316] font-semibold">{category.skills.length}</span> */}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{category.description}</p>
              </div>

              {/* Skills Cards */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="p-4 hover:shadow-md transition-all duration-300 transform border-2 border-[#61DBFB] bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-gray-900 dark:text-white font-mono text-sm">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;