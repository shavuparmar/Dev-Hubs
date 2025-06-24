import React from "react";
import SidebarLayout from "../Common/SideBarLayout";
import Footer from "../Pages/Footer";

export default function TermsConditions() {
  return (
    <SidebarLayout>
      <section className="max-w-5xl mx-auto mb-10 px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Welcome to <strong>Dev-Hubs</strong>. By accessing or using our platform,
          you agree to comply with and be bound by the following terms and
          conditions. Please read them carefully before using our services.
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          {/* 1. Use of Service */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Use of Service</h2>
            <p>
              Dev-Hubs offers access to a collection of open-source APIs, software,
              and AI tools intended to support developers and learners. You agree to use
              the platform responsibly and lawfully, respecting all applicable laws and
              regulations.
            </p>
          </section>

          {/* 2. Account Responsibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Account Responsibility</h2>
            <p>
              If you create an account on Dev-Hubs, you are responsible for maintaining
              the confidentiality of your login information and all activities under
              your account. Notify us immediately if you suspect unauthorized access.
            </p>
          </section>

          {/* 3. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
            <p>
              All content, software, logos, and trademarks on Dev-Hubs are the property of
              their respective owners. You may not use, reproduce, or distribute any
              material without explicit permission, except as permitted under open-source licenses.
            </p>
          </section>

          {/* 4. User Content */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. User Content</h2>
            <p>
              By submitting content (comments, code, or feedback) on Dev-Hubs, you grant
              us a non-exclusive, royalty-free, worldwide license to use, reproduce,
              modify, and distribute your content as part of the platform.
            </p>
          </section>

          {/* 5. Prohibited Conduct */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Prohibited Conduct</h2>
            <p>
              You agree not to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Engage in any unlawful or harmful activities.</li>
                <li>Distribute malware, spam, or harmful code.</li>
                <li>Violate intellectual property rights or privacy of others.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
              </ul>
            </p>
          </section>

          {/* 6. Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Third-Party Links</h2>
            <p>
              Dev-Hubs may contain links to third-party websites or services. We do not
              control or endorse these sites and are not responsible for their content,
              privacy practices, or terms.
            </p>
          </section>

          {/* 7. Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Disclaimer of Warranties</h2>
            <p>
              Dev-Hubs is provided "as is" without warranties of any kind, either express
              or implied. We do not guarantee the accuracy, reliability, or availability
              of the platform at all times.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Dev-Hubs and its affiliates shall
              not be liable for any direct, indirect, incidental, consequential, or punitive
              damages arising from your use of the platform.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to Dev-Hubs at any
              time without notice if you violate these Terms & Conditions or engage in
              harmful behavior.
            </p>
          </section>

          {/* 10. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions occasionally. Continued use of
              Dev-Hubs after changes constitutes acceptance of the updated terms. We
              encourage you to review this page periodically.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws
              of the jurisdiction where Dev-Hubs operates, without regard to conflict of
              law principles.
            </p>
          </section>

          {/* 12. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact Information</h2>
            <p>
              If you have questions or concerns about these Terms & Conditions, please
              contact us at:
            </p>
            <p className="mt-2 font-mono text-blue-600">
              privacy@dev-hubs.org
            </p>
          </section>
        </div>
      </section>
      <Footer/>
    </SidebarLayout>
  );
}
