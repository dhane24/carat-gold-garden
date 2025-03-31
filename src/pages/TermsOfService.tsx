
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="bg-background p-6 md:p-8 rounded-lg shadow-sm">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using the Carat app and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
                <p>Carat provides a digital platform for investing in gold through regular savings. Our service allows users to purchase digital gold in small increments, track their investments, and potentially convert their digital gold to physical gold products.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
                <p>To use certain features of our service, you must register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">4. Investment Risks</h2>
                <p>Gold investments, like all investments, carry risks. The value of gold can fluctuate based on market conditions, and we do not guarantee any returns on your investment. You should carefully consider your financial situation and risk tolerance before investing.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">5. Fees and Charges</h2>
                <p>Carat may charge fees for certain services, which will be clearly disclosed before any transaction. We reserve the right to modify our fee structure with proper notice to users.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
                <p>The Carat app, content, and all related intellectual property rights belong to us or our licensors. You may not copy, modify, distribute, or create derivative works based on our content without express written permission.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">7. Termination</h2>
                <p>We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Carat shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of these Terms.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at legal@carat.com.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
