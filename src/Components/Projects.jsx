import React from "react";
import ProjectsData from "../assets/Data/ProjectsData";
import { GithubIcon } from "lucide-react";
const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900 dark:text-white font-semibold">
            Featured <span className="text-[#F97316]">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my recent React projects demonstrating design,
            interactivity, and performance-focused development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm font-mono bg-[#61DBFB]/10 text-[#61DBFB] hover:bg-[#61DBFB]/20 transition-colors duration-200 p-2 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4 items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-[#F97316] px-3 py-1.5 rounded-md hover:bg-[#ea580c] transition-all p"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
         <div className="flex justify-center ">
         <a 
         href= "https://github.com/piyushsolanki1"
            variant="outline"
            className="border-[#61DBFB] text-[#61DBFB] hover:bg-[#61DBFB] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 flex items-center border-1"
          >
            <GithubIcon className="w-5 h-5 mr-2" />
            View All on GitHub
          </a>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
