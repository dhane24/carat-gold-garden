
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <motion.section 
          className="py-12 md:py-16 bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="bg-background p-6 md:p-8 rounded-lg shadow-sm">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                <p>At Carat, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital gold investment app. Please read this policy carefully.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
                <p>We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Financial information (banking details, payment information)</li>
                  <li>Identity verification information</li>
                  <li>Transaction data</li>
                  <li>Usage data and app interaction metrics</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative messages, updates, and security alerts</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with regulatory requirements</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
                <p>Our app may contain links to other websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party services.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@carat.com.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
