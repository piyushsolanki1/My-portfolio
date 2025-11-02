import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhlqk9s", //  EmailJS service ID
        "template_xi9e46d", //  EmailJS template ID
        form.current,
        "DtMXzMC7XQ03RpcHT" // EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/piyushsolanki1",
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "View my code",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/piyush-solanki-075456225",
      color: "hover:text-blue-600",
      description: "Connect professionally",
    },
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:solankipiyush6264@gmail.com",
      color: "hover:text-red-500",
      description: "Send direct email",
    },
  ];

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-gray-900 dark:text-white font-semibold">
            Let’s <span className="text-[#F97316]">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to turn your ideas into reality? Let’s build something amazing together.
          </p>
          <p className="bg-gradient-to-r from-[#61DBFB]/10 to-[#F97316]/10 rounded-full max-w-2xl mx-auto text-gray-700 dark:text-gray-300 p-3 mt-4 text-lg flex gap-3 justify-center items-center">
            <MessageCircle className="w-6 h-6 text-[#F97316]" />
            Available for freelance projects and full-time opportunities
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="shadow-xl text-left p-8 rounded-xl bg-gray-50 dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Send a Message
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fill out the form below — I’ll get back to you within 24 hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="border border-[#61DBFB] rounded w-full p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="border border-[#61DBFB] rounded w-full p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Your message..."
                  rows="4"
                  className="border border-[#61DBFB] rounded w-full p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-[#61DBFB] to-[#F97316] text-white font-semibold hover:from-[#61DBFB]/90 hover:to-[#F97316]/90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social + Info */}
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-6">
            <div className="text-left p-8 rounded-xl shadow-xl bg-gray-50 dark:bg-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Connect with me on
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center p-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-6 h-6 mr-4 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h4 className="text-gray-900 dark:text-white group-hover:text-current transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="text-left p-8 rounded-xl shadow-xl bg-gray-50 dark:bg-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Let’s Work Together
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#61DBFB] rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-1">
                      Response Time
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-1">
                      Availability
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Open to freelance projects and full-time roles
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white mb-1">
                      Specialties
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      React, JavaScript, Frontend Development, UI/UX Implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
