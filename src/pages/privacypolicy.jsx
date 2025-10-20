
import React from "react";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-black text-white">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-gradient-to-br from-[#cbe30b]/20 to-[#a8bf0a]/20 rounded-xl mr-6">
              <Shield className="w-12 h-12 text-[#cbe30b]" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-gray-400">Last updated: January 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/50 border border-[#333333] p-8 sm:p-12 rounded-2xl shadow-xl">
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p><strong>Contact Information:</strong> We collect personal information you provide such as name, email address, phone number, company name, and business address when you contact us, request quotes, or sign up for services.</p>
                <p><strong>Technical Information:</strong> We may collect technical specifications about your deployment site, power requirements, and integration needs to properly configure our surveillance equipment.</p>
                <p><strong>SMS Communications:</strong> If you opt in to SMS updates, we collect your phone number and maintain records of your consent and communication preferences.</p>
                <p><strong>Customer Footage and Data:</strong> As part of our surveillance equipment lease and sales business, we may temporarily possess hard drives, storage devices, or other media containing customer surveillance footage during equipment maintenance, upgrades, or technical support services.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide surveillance equipment and related services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process orders and manage equipment deployments</li>
                  <li>Send you important updates about your equipment, deliveries, and service appointments via SMS (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations and industry regulations</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">3. Surveillance Data and Customer Footage</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p><strong>Customer Ownership:</strong> All surveillance footage and data captured by our equipment remains the exclusive property of our customers. Sentinel Towers does not claim ownership of, access, or monitor customer surveillance data under normal operating conditions.</p>
                <p><strong>Temporary Possession:</strong> During equipment maintenance, repairs, upgrades, or technical support, we may temporarily possess hard drives or storage devices containing customer footage. During these periods:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not access, view, copy, or analyze customer footage except as necessary to perform requested technical services</li>
                  <li>All customer data is handled with strict confidentiality and security measures</li>
                  <li>Storage devices are returned promptly upon completion of services</li>
                  <li>We maintain detailed logs of device custody and handling</li>
                </ul>
                <p><strong>Data Security:</strong> We implement industry-standard physical and technical safeguards to protect customer data in our temporary possession, including secured facilities, encrypted storage, and limited access controls.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>We do not sell, rent, or share your personal information with third parties except:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To service providers who assist in our business operations (under strict confidentiality agreements)</li>
                  <li>When required by law, legal process, or government request</li>
                  <li>To protect our rights, property, or safety, or that of our customers or others</li>
                </ul>
                <p><strong>Customer footage and surveillance data is never shared with third parties under any circumstances, except when required by valid legal process or with explicit customer authorization.</strong></p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">5. SMS Messaging Disclosures</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>Sentinel Towers LLC may disclose Personal Data and other information as follows:</p>
                <p><strong>Third Parties that Help Provide the Messaging Service:</strong> We will not share your opt-in to an SMS short code campaign with a third party for purposes unrelated to supporting you in connection with that campaign. We may share your Personal Data with third parties that help us provide the messaging service, including, but not limited to, platform providers, phone companies, and other vendors who assist us in the delivery of text messages.</p>
                <p><strong>Additional Disclosures: Affiliates:</strong> We may disclose the Personal Data to our affiliates or subsidiaries; however, if we do so, their use and disclosure of your Personal Data will be subject to this Policy. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">6. SMS Communications</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>If you opt in to receive SMS updates:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will receive order confirmations, delivery updates, and service notifications</li>
                  <li>Message and data rates may apply based on your mobile carrier plan</li>
                  <li>You can opt out at any time by texting STOP to our number</li>
                  <li>You can get help by texting HELP to our number</li>
                  <li>We do not share your mobile number with third-party marketers</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>We implement comprehensive security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Secure facilities with restricted access</li>
                  <li>Regular security audits and updates</li>
                  <li>Employee training on data protection and confidentiality</li>
                  <li>Compliance with industry security standards and regulations</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Customer surveillance data in our temporary possession is returned or securely destroyed immediately upon completion of requested services.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights</h2>
              <div className="text-gray-300 mb-8 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review the personal information we have about you</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information (subject to legal and contractual obligations)</li>
                  <li>Opt out of SMS communications at any time</li>
                  <li>File a complaint with relevant data protection authorities</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <div className="text-gray-300 mb-8">
                <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
              <div className="text-gray-300 mb-8">
                <p>We may update this privacy policy periodically. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <div className="text-gray-300">
                <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
                <div className="mt-4 p-4 bg-[#1a1a1a] border border-[#333333] rounded-lg">
                  <p><strong>Sentinel Towers</strong></p>
                  <p>223 Nick Fitcheard Rd NW</p>
                  <p>Huntsville, AL 35806</p>
                  <p>Email: privacy@sentineltowers.com</p>
                  <p>Phone: (256) 696-4580</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
