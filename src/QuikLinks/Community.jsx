import React from "react";
import SidebarLayout from "../Common/SideBarLayout";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";

export default function Community() {
  const actions = [
    {
      title: "Join Discussions",
      description:
        "Participate in developer discussions, ask questions, and share your knowledge on our open forums.",
      icon: "💬",
      link: "/forum", // Adjust based on your route
    },
    {
      title: "Contribute to Projects",
      description:
        "Help build open-source APIs, tools, or docs. All skill levels welcome—every contribution matters.",
      icon: "🛠️",
      link: "SubmitProject", // Replace with real GitHub
      external: true,
    },
    {
      title: "Attend Community Events",
      description:
        "Join live workshops, hackathons, or AMA sessions to connect and grow with peers.",
      icon: "🎉",
      // link: "/events", // Adjust based on your route
    },
    {
      title: "Showcase Your Work",
      description:
        "Publish your open-source projects and get featured on Dev-Hubs to inspire others.",
      icon: "🚀",
      // link: "/showcase", // Adjust based on your route
    },
    {
      title: "Report Bugs / Suggest Features",
      description:
        "Help us improve by reporting issues or suggesting new features for the platform.",
      icon: "🐞",
      // link: "/feedback",
    },
    {
      title: "Connect on Social Media",
      description:
        "Follow us on GitHub, Twitter, LinkedIn and stay updated with the latest launches.",
      icon: "🌐",
      // link: "/footer", // You can link to the footer section
    },
  ];

  return (
    <SidebarLayout>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join the Dev-Hubs Community
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you're here to learn, build, teach, or collaborate—there’s a
            place for you in our global developer community.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map(({ title, description, icon, link, external }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 mb-4">{description}</p>
              {external ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit &rarr;
                </a>
              ) : (
                <Link
                  to={link}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Learn More &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Everyone is welcome.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            From beginners to advanced developers—Dev-Hubs is built by and for
            the community. Let’s grow together.
          </p>
        </div>
      </section>
      <Footer/>
    </SidebarLayout>
  );
}
