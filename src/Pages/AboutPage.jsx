import React from "react";
import SidebarLayout from "../Common/SideBarLayout";
import Footer from "./Footer";
import Shavu from "../assets/images/Shavu.jpg"
import Dhruv from "../assets/images/Dhruv.jpg"
import Vedmehta from "../assets/images/VedMehta.jpg"





export default function AboutPage() {
  return (
    <SidebarLayout>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          About Dev-Hubs
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10 text-center">
          <strong>Dev-Hubs</strong> is your centralized open-source platform, created to empower developers and learners by providing easy access to
          APIs, software tools, artificial intelligence resources, and much more — all in one place.
        </p>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is to foster innovation and collaboration in the developer community by offering a comprehensive hub of open-source projects,
            tools, and resources that are freely accessible to everyone. We believe in breaking barriers and building a supportive environment for
            learning and growth.
          </p>
        </section>

        {/* Our Vision */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            To be the go-to platform for developers and learners worldwide seeking high-quality, open-source APIs, software, and AI tools — all while
            nurturing a vibrant community of contributors and innovators.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {/* Example team member */}
            <div className="w-48 text-center">
              <img
                src={Shavu}
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">Shavu Parmar</h3>
              <p className="text-gray-600 text-sm">Founder & Lead Developer</p>
            </div>
            <div className="w-48 text-center">
              <img
                src={Dhruv}
                alt="Dhruv Yadav"
                className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">Dhruv Yadav</h3>
              <p className="text-gray-600 text-sm">Community Manager</p>
            </div>
            <div className="w-48 text-center">
              <img
                src={Vedmehta}
                alt="Robert Brown"
                className="w-32 h-32 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-900">Ved Mehta</h3>
              <p className="text-gray-600 text-sm">Open Source Advocate</p>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Community Involvement</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            At Dev-Hubs, community is key. We host regular virtual meetups, webinars, and coding events to encourage collaboration and knowledge sharing.
            We also actively maintain open communication channels through Discord, GitHub discussions, and social media to ensure every voice is heard.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're a beginner or an expert, there’s a place for you here to learn, contribute, and grow.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Ready to be part of a thriving open-source community? Explore our projects, contribute your skills, and connect with fellow developers today.
          </p>
          <a
            href="/community"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Visit Community Page
          </a>
        </section>
      </section>
      <Footer/>
    </SidebarLayout>
  );
}
