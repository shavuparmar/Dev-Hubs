import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DevHubsLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on navigation
    };
    links.forEach((link) => link.addEventListener("click", smoothScroll));
    return () => links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);

  return (
    <main className="min-h-full bg-black text-white font-sans overflow-x-hidden scroll-smooth">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 backdrop-blur-md flex justify-center ${
          scrolled ? "bg-black/90 border-white/30 shadow-lg" : "bg-black/50 border-white/10"
        }`}
      >
        <div className="max-w-7xl w-full flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold tracking-wide select-none">DevHubs</h1>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Nav Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-black/90 border-t border-white/10 md:border-none md:bg-transparent md:static md:flex md:space-x-6 text-sm md:text-base flex-wrap justify-end transition-all duration-300`}
          >
            {["home", "about", "features", "tools", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block px-6 py-2 md:px-0 md:py-0 hover:underline hover:text-white font-semibold"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
          <Link to={"/login"} className="ml-5 bg-slate-400 hover:bg-gray-600 px-5 py-1 rounded-xl text-lg">Login</Link>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 md:pt-32 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-5 max-w-4xl leading-tight animate-fade-in-up">
          All Developer Tools in One Place
        </h2>
        <p className="text-gray-400 max-w-3xl mb-12 md:text-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          DevHubs is your one-stop destination for open-source APIs, software tools, and development resources — completely free and curated for creators.
        </p>
        <Link
          to="/dashboard"
          className="px-10 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 font-semibold animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Explore Dashboard
        </Link>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 animate-fade-in-up">About DevHubs</h3>
        <p className="text-gray-400 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          DevHubs centralizes the best open-source developer tools and APIs, giving you access to everything from project scaffolds to hosted services. Our goal is to accelerate your development journey.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 text-center max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-12 animate-fade-in-up">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-black bg-opacity-40 rounded-xl p-8 border border-white/10 hover:border-white/40 transition-all glass-effect cursor-default animate-fade-in-up"
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-24 px-6 text-center max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-12 animate-fade-in-up">Available Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-black bg-opacity-40 border border-white/10 p-6 rounded-xl glass-effect hover:border-white/40 cursor-default animate-fade-in-up"
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
              <p className="text-gray-400 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center border-t border-white/10 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 animate-fade-in-up">Get In Touch</h3>
        <p className="text-gray-400 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Have an open-source tool to contribute or a suggestion? Reach out and let's collaborate.
        </p>
        <a
          href="mailto:contact@devhubs.io"
          className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition font-semibold"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-10 border-t border-white/10 select-none">
        &copy; {new Date().getFullYear()} DevHubs. Built for developers.
      </footer>

      {/* Styles */}
      <style>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: saturate(180%) blur(8px);
          -webkit-backdrop-filter: saturate(180%) blur(8px);
          box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}

// Data
const features = [
  { title: "All-in-One Platform", description: "APIs, tools, software links — all under one roof." },
  { title: "Open Source Friendly", description: "Every tool and resource listed is open and free to use." },
  { title: "No Clutter", description: "Clean, minimal design for focused browsing." },
];

const tools = [
  { name: "API Directory", description: "Handpicked free APIs for every purpose." },
  { name: "Toolkits", description: "Curated sets of developer productivity tools." },
  { name: "Framework Resources", description: "Quick links to docs, templates, and community repos." },
];
