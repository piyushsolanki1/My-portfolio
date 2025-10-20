import React from 'react'

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-orange-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-orange-900/20">
 <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          <span className="block text-gray-900 dark:text-white">Frontend Developer</span>
          <span className="block bg-gradient-to-r from-[#61DBFB] to-[#F97316] bg-clip-text text-transparent">
            React & JavaScript Enthusiast
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          I build modern, responsive, and interactive web applications that bring ideas to life through clean code and thoughtful design.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-[#61DBFB] hover:bg-[#61DBFB]/90 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#61DBFB]/25"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </button>
        </div>
      </div>
      </section>  )
}

export default Hero