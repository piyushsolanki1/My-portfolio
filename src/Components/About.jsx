import React from "react";
import { BookOpenText, BriefcaseBusiness, Hammer, Rocket } from "lucide-react";
import profileImage from "../assets/ProfileImage.jpg";
const About = () => {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900 dark:text-white font-semibold">
            About <span className="text-[#F97316]">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate frontend developer on a mission to create exceptional
            web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="order-2 lg:order-1 justify-start">
            <div className="p-8 bg-white dark:bg-gray-800 border-0 shadow-xl rounded-2xl">
              <div className="flex gap-5 ">
                <span>
                  <img
                    src={profileImage}
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">Piyush solanki</h3>
                  <p className="bg-[#61DBFB] text-white rounded-md mt-2">
                    FrontEnd Developer
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed mt-5">
                  I'm Piyush, a frontend developer focused on React and
                  JavaScript. I enjoy turning ideas into fully functional and
                  user-friendly web applications. My passion lies in creating
                  clean, efficient code that delivers exceptional user
                  experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Currently building real-world projects while mastering
                  advanced frontend skills. I believe in continuous learning and
                  staying up-to-date with the latest web technologies and best
                  practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-mono bg-[#61DBFB]/10 text-[#61DBFB] hover:bg-[#61DBFB]/20 transition-colors duration-200 p-2 rounded-xl">
                  React Enthusiast
                </span>
                <span className="text-sm font-mono bg-[#61DBFB]/10 text-[#61DBFB] hover:bg-[#61DBFB]/20 transition-colors duration-200 p-2 rounded-xl">
                  Problem Solver
                </span>
                <span className="text-sm font-mono bg-[#61DBFB]/10 text-[#61DBFB] hover:bg-[#61DBFB]/20 transition-colors duration-200 p-2 rounded-xl">
                  Continuous Learner
                </span>
              </div>
              <div className="flex">
                <div className=" p-4 font-mono text-sm m-auto">
                  <div className="text-gray-500 dark:text-gray-400">
                    // Developer signature
                  </div>
                  <div className="text-[#61DBFB]">const</div>{" "}
                  <span className="text-gray-900 dark:text-white">
                    developer
                  </span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-green-600">{"{"}</span>
                  <br />
                  <span className="ml-4 text-gray-900 dark:text-white">
                    name:
                  </span>{" "}
                  <span className="text-orange-500">'Piyush Solanki'</span>,
                  <br />
                  <span className="ml-4 text-gray-900 dark:text-white">
                    passion:
                  </span>{" "}
                  <span className="text-orange-500">
                    'Frontend Development'
                  </span>
                  <br />
                  <span className="text-green-600">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 justify-center flex">
            <img
              src={profileImage}
              alt=""
              className="w-80 h-80 rounded-2xl mt-30"
            />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-semibold">
            Development <span className="text-[#61DBFB]">Journey</span>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 max-w-7xl mx-auto mt-12">
              <div className="flex flex-col items-center border-[#61DBFB] border-2 rounded-xl p-8 gap-2 shadow-sm hover:shadow-xl transition-all duration-300">
                <span>
                  <BookOpenText />
                </span>
                <span className="text-sm font-mono bg-[#61DBFB] text-white rounded-md mt-2 transition-colors duration-200 p-1">
                  Learning
                </span>
                <h3 className="text-xl">Foundation Building</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Mastering HTML, CSS, JavaScript fundamentals and mern
                  concepts
                </p>
              </div>
              <div className="flex flex-col items-center border-[#61DBFB] border-2 rounded-xl p-8 gap-2 shadow-sm hover:shadow-xl transition-all duration-300">
                <span>
                  <Hammer />
                </span>
                <span className="text-sm font-mono bg-[#61DBFB] text-white rounded-md mt-2 transition-colors duration-200 p-1">
                Building Projects
                </span>
                <h3 className="text-xl">Hands-On Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Creating real-world applications to solidify skills and explore new technologies
                </p>
              </div>
              <div className="flex flex-col items-center border-[#61DBFB] border-2 rounded-xl p-8 gap-2 shadow-sm hover:shadow-xl transition-all duration-300">
                <span>
                  <BriefcaseBusiness />
                </span>
                <span className="text-sm font-mono bg-[#61DBFB] text-white rounded-md mt-2 transition-colors duration-200 p-1">
                Freelancing
                </span>
                <h3 className="text-xl">Client Work
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Taking on freelance projects to gain professional experience
                </p>
              </div>
              <div className="flex flex-col items-center border-[#61DBFB] border-2 rounded-xl p-8 gap-2 shadow-sm hover:shadow-xl transition-all duration-300">
                <span>
                  <Rocket />
                </span>
                <span className="text-sm font-mono bg-[#61DBFB] text-white rounded-md mt-2 transition-colors duration-200 p-1">
                Full-Time Dev
                </span>
                <h3 className="text-xl">Career Goal
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Securing a full-time Mern developer position with growth opportunities
                </p>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
