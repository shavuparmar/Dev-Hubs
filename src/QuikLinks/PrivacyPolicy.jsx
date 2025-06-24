import React from 'react';
import SidebarLayout from '../Common/SideBarLayout';
import Footer from '../Pages/Footer';

export default function PrivacyPolicy() {
  return (
    <SidebarLayout>
      <div className="max-w-7xl  mx-auto px-2 py-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 -mt-5 text-gray-950">
          Privacy Policy
        </h1>
        <p className="text-sm text-center mb-10 text-gray-900">
          Last updated: June 24, 2025
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
            <p>
              <strong>Dev-Hubs</strong> is an open-source platform that provides
              developers and learners with centralized access to tools, APIs,
              software, and artificial intelligence resources. Our mission is to
              empower innovation and community collaboration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. What Information We Collect</h2>
            <p>We collect minimal personal information to provide you with the best experience. This includes:</p>
            <ul className="list-disc pl-6">
              <li><strong>Email address</strong> (only if you subscribe or register)</li>
              <li><strong>Username</strong> (if you create an account or comment)</li>
              <li><strong>Feedback or messages</strong> you send us</li>
              <li><strong>Log data</strong>: IP address, browser type, OS, referring pages</li>
              <li><strong>Cookies and usage data</strong> to improve functionality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>Improve platform performance and user experience</li>
              <li>Maintain and secure the platform</li>
              <li>Respond to inquiries or feedback</li>
              <li>Send optional updates (only if you opt in)</li>
            </ul>
            <p className="mt-2 font-medium text-red-600">
              We do <u>not</u> sell, trade, or rent your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6">
              <li>Store user preferences</li>
              <li>Enable site analytics</li>
              <li>Enhance performance and accessibility</li>
            </ul>
            <p className="mt-2">
              You can disable cookies in your browser settings, but this may impact functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
            <p>We may use third-party services like:</p>
            <ul className="list-disc pl-6">
              <li>GitHub (repo integration)</li>
              <li>Google Analytics or other open analytics tools</li>
              <li>External APIs and libraries</li>
            </ul>
            <p className="mt-2">
              These services may collect data per their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p>
              We use industry-standard methods to protect stored data. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
            <p>
              Dev-Hubs is not directed toward children under 13. We do not knowingly collect
              personal data from minors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6">
              <li>Access the data we hold about you</li>
              <li>Request corrections or deletions</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">
              Contact us at: <a href="mailto:privacy@dev-hubs.org" className="text-blue-600 underline">privacy@dev-hubs.org</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy. Changes will be posted on this page with the
              updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>If you have questions, reach out to:</p>
            <p className="mt-1">
              📧 <a href="mailto:privacy@dev-hubs.org" className="text-blue-600 underline">privacy@dev-hubs.org</a>
              <br />
              🌐 <a href="https://dev-hubs.vercel.app" target="_blank" rel="noreferrer" className="text-blue-600 underline">https://dev-hubs.vercel.app</a>
            </p>
          </div>

          <div className="text-center mt-10 font-medium text-gray-700">
            Thank you for trusting Dev-Hubs. Together, we build the future of open-source.
          </div>
        </section>
      </div>
      <Footer/>
    </SidebarLayout>
  );
}
