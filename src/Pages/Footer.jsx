import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer  className="bg-gray-100 mt-50 text-black pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Brand and description */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3 select-none">Dev-Hubs</h2>
          <p className="text-gray-600 leading-relaxed">
            Centralized hub for open source APIs and tools, fostering innovation
            and community collaboration worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <nav>
          <h3 className="mb-4 font-semibold text-gray-800">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              { name: "Features", href: "/features" },
              { name: "Docs", href: "/docs" },
              { name: "Community", href: "/community" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms & Conditions", href: "/terms-condition" },
              { name: "Disclaimer", href: "/disclaimer" },
              { name: "Open Source", href: "/open-soruce" },
              { name: "About", href: "/about" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <nav>
          <h3 className="mb-4 font-semibold text-gray-800">Connect</h3>
          <ul className="flex space-x-6 text-black">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} OpenSourceHub. All rights reserved.
      </div>
    </footer>
  );
}

// Icons with full SVG paths
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753
      -1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
      3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.335-5.466-5.933 
      0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 
      0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404 
      c1.02.004 2.048.138 3.003.404 2.29-1.552 3.296-1.23 
      3.296-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 
      1.235 3.22 0 4.61-2.807 5.63-5.48 5.922.43.372.815 
      1.103.815 2.222 0 1.604-.015 2.896-.015 3.286 
      0 .322.217.694.825.576C20.565 21.796 24 17.3 24 
      12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.954 4.569a10 10 0 01-2.825.775 
      4.932 4.932 0 002.163-2.723 9.865 9.865 0 01-3.127 1.196 
      4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149 
      4.902 4.902 0 001.523 9.723a4.9 4.9 0 01-2.228-.616v.06 
      a4.915 4.915 0 003.946 4.814 4.996 4.996 0 01-2.224.084 
      4.922 4.922 0 004.59 3.417 9.867 9.867 0 01-6.102 2.105 
      c-.395 0-.79-.023-1.175-.069a13.945 13.945 0 007.548 2.209 
      c9.142 0 14.307-7.721 14.307-14.41 0-.22 0-.439-.015-.656A10.286 
      10.286 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452H16.9v-5.569c0-1.328-.027-3.038-1.849-3.038
      -1.849 0-2.133 1.445-2.133 2.937v5.67H9.358V9h3.415v1.561h.049
      c.477-.9 1.637-1.848 3.37-1.848 3.6 0 4.266 2.367 
      4.266 5.446v6.293zM5.337 7.433a1.98 1.98 0 11.003-3.96 
      1.98 1.98 0 01-.003 3.96zm1.722 13.02H3.615V9h3.444v11.453zM22.225 
      0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 
      1.771 24h20.451c.98 0 1.778-.774 1.778-1.727V1.727C24 
      .774 23.205 0 22.225 0z"/>
  </svg>
);
