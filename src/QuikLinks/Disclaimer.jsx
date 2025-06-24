import React from 'react';
import SidebarLayout from '../Common/SideBarLayout';
import Footer from '../Pages/Footer';

export default function Disclaimer() {
  return (
    <SidebarLayout>
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-950">
          Disclaimer
        </h1>
        <p className="text-sm text-center mb-10 text-gray-500">
          Last updated: June 24, 2025
        </p>

        <section className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold mb-2">1. General Information</h2>
            <p>
              The content on <strong>Dev-Hubs</strong> is provided for general informational purposes only.
              While we strive to keep everything up to date and accurate, we make no representations or warranties of any kind regarding the accuracy, reliability, or completeness of any content, tools, or APIs provided.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Open Source Nature</h2>
            <p>
              Dev-Hubs is an open-source community platform. Many tools and APIs are community-contributed.
              As such, we cannot guarantee that all resources are secure, maintained, or error-free.
              Use all content and tools at your own discretion and review individual open-source licenses where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. External Links</h2>
            <p>
              Our platform may contain links to external websites or services.
              We do not control or endorse the content of any third-party websites and are not responsible for their content, privacy policies, or practices.
              Always review their terms before using external services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. No Professional Advice</h2>
            <p>
              All material on Dev-Hubs is for learning and development purposes only. It should not be considered professional, legal, or technical advice.
              Always seek the advice of a qualified expert for any such concerns.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              Under no circumstances shall Dev-Hubs, its team, or contributors be held liable for any direct or indirect damages
              arising from the use or misuse of any content, software, or services accessed through this platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. User Responsibility</h2>
            <p>
              Users are responsible for how they use the content, APIs, and tools on this platform.
              It is the user’s responsibility to validate and test any code, software, or AI models before using them in production environments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Changes to This Disclaimer</h2>
            <p>
              We may update this disclaimer at any time. Updates will be reflected on this page with a revised date.
              Continued use of the platform means you accept these terms.
            </p>
          </div>

          <div className="text-center mt-10 font-medium text-gray-700">
            Thank you for using Dev-Hubs. Contribute responsibly, and always build with integrity.
          </div>
        </section>
      </div>
      <Footer/>
    </SidebarLayout>
  );
}
