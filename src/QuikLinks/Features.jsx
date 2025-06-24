import React from "react";
import SidebarLayout from "../Common/SideBarLayout";
import Footer from "../Pages/Footer";

export default function Features() {
  const features = [
    {
      title: "Open Source APIs",
      description:
        "Access a growing library of free, open-source APIs across categories like weather, AI, data, authentication, and more.",
      icon: "🌐",
    },
    {
      title: "AI Tools Directory",
      description:
        "Explore curated AI tools for code generation, content creation, and machine learning. All in one central hub.",
      icon: "🤖",
    },
    {
      title: "Developer Utilities",
      description:
        "Discover handy utilities like JSON formatters, mock data generators, regex testers, and online editors.",
      icon: "🧰",
    },
    {
      title: "Community Contributions",
      description:
        "Anyone can submit APIs or tools to grow the ecosystem. Peer-reviewed and open to everyone.",
      icon: "🤝",
    },
    {
      title: "Documentation & Tutorials",
      description:
        "Learn from in-depth docs, use-case tutorials, and integration examples to build faster and better.",
      icon: "📚",
    },
    {
      title: "Fast Search & Filters",
      description:
        "Quickly find the resources you need with smart search and category filters.",
      icon: "⚡",
    },
  ];

  return (
    <SidebarLayout>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Platform Features
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover everything Dev-Hubs offers to supercharge your development
            journey—whether you're a beginner, hobbyist, or pro.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            And we're just getting started...
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Dev-Hubs is constantly evolving. Join our community to contribute,
            suggest features, or collaborate on open-source innovation.
          </p>
        </div>
      </section>
      <Footer/>
    </SidebarLayout>
  );
}
