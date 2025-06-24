import React from "react";
import SidebarLayout from "../Common/SideBarLayout";
import Footer from "../Pages/Footer";

export default function OpenSource() {
  return (
    <SidebarLayout>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Open Source at Dev-Hubs
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10 text-center">
          At <strong>Dev-Hubs</strong>, open source is at the heart of everything we do. We believe
          in transparency, collaboration, and empowering developers worldwide by providing
          access to high-quality APIs, software, and tools — all freely available.
        </p>

        {/* Why Open Source */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Open Source?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
            <li>Fosters innovation through community collaboration.</li>
            <li>Ensures transparency and trust.</li>
            <li>Enables developers to learn, contribute, and grow.</li>
            <li>Supports software freedom and accessibility.</li>
          </ul>
        </section>

        {/* Our Repositories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Repositories</h2>
          <p className="mb-4 text-gray-700 max-w-3xl mx-auto">
            Explore our curated collection of open source repositories hosted on GitHub. We welcome
            contributions, bug reports, and feature requests to help us improve continuously.
          </p>

          <ul className="space-y-4 max-w-3xl mx-auto">
            <li>
              <a
                href="https://github.com/dev-hubs/api-collection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
                aria-label="Dev-Hubs API Collection Repository"
              >
                Dev-Hubs API Collection
              </a>
              <p className="text-gray-600 text-sm">
                A growing library of open-source APIs for developers.
              </p>
            </li>
            <li>
              <a
                href="https://github.com/dev-hubs/dev-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
                aria-label="Dev-Hubs Developer Tools Repository"
              >
                Dev-Hubs Developer Tools
              </a>
              <p className="text-gray-600 text-sm">
                Essential software and utilities crafted by the Dev-Hubs community.
              </p>
            </li>
            <li>
              <a
                href="https://github.com/dev-hubs/ai-resources"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
                aria-label="Dev-Hubs AI Resources Repository"
              >
                Dev-Hubs AI Resources
              </a>
              <p className="text-gray-600 text-sm">
                Collection of AI models, datasets, and integrations open to all developers.
              </p>
            </li>
          </ul>
        </section>

        {/* How to Contribute */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Contribute</h2>
          <p className="mb-4 text-gray-700 max-w-3xl mx-auto">
            We welcome all levels of contribution. Here’s how you can get involved:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
            <li>Fork our repositories and submit pull requests.</li>
            <li>Report issues and suggest features via GitHub.</li>
            <li>Participate in community discussions and events.</li>
            <li>Help document projects and improve tutorials.</li>
          </ul>
        </section>

        {/* Join the Community */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join the Community</h2>
          <p className="mb-4 text-gray-700 max-w-3xl mx-auto">
            Connect with other developers, share your ideas, and grow together. Join our
            forums, chat rooms, and social media channels:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
            <li>
              <a
                href="https://discord.gg/dev-hubs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Discord Server
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dev-hubs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dev-hubs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Organization
              </a>
            </li>
          </ul>
        </section>
      </section>
      <Footer/>
    </SidebarLayout>
  );
}
