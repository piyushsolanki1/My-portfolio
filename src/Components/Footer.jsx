import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center py-10 ">
          <div className="flex justify-center items-center gap-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#61DBFB] to-[#F97316] bg-clip-text text-transparent">
            PS
          </span>
          <h3>Piyush Solanki</h3>
          </div>
          <div>
          <p className="p-2">Frontend Developer • React & JavaScript Enthusiast</p>
          <p className="text-gray-400">Built with React + Tailwind CSS • © 2025 Piyush Solanki</p>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Footer;
