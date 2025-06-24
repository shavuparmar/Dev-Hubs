import React from "react";
import SidebarLayout from "../Common/SideBarLayout";
import Footer from "../Pages/Footer";

export default function Docs() {
  return (
    <SidebarLayout>
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Dev-Hubs Documentation
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10">
          Welcome to the official Dev-Hubs documentation. Here you’ll find everything you need to get started,
          use our APIs, contribute to open source projects, and integrate with our platform.
        </p>

        {/* Docs sections */}
        <section className="space-y-10">
          {/* Getting Started */}
          <article>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Getting Started</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Learn how to set up your account, navigate the platform, and start using Dev-Hubs effectively.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-600 max-w-3xl">
              <li>Creating an account and profile</li>
              <li>Exploring available APIs and tools</li>
              <li>Managing your dashboard and preferences</li>
            </ul>
          </article>

          {/* API Documentation */}
          <article>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">API Documentation</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Comprehensive reference for all Dev-Hubs APIs including endpoints, authentication, and usage examples.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-600 max-w-3xl">
              <li>Authentication methods (API keys, OAuth)</li>
              <li>Endpoint descriptions and parameters</li>
              <li>Response formats and error handling</li>
            </ul>
          </article>

          {/* Open Source Contribution */}
          <article>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Open Source Contribution</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Guidelines on how to contribute to Dev-Hubs projects, submit pull requests, and collaborate with the community.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-600 max-w-3xl">
              <li>Code of conduct</li>
              <li>Branching and pull request workflow</li>
              <li>Reporting issues and feature requests</li>
            </ul>
          </article>

          {/* FAQ */}
          <article>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Frequently Asked Questions (FAQ)</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Answers to common questions about the platform, usage policies, and technical support.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-600 max-w-3xl">
              <li>How to reset your password?</li>
              <li>Where to find API keys?</li>
              <li>How to report bugs?</li>
            </ul>
          </article>
        </section>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="/community"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Join Our Community
          </a>
        </div>
      </main>
      <Footer/>
    </SidebarLayout>
  );
}
