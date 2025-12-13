import Hero from "@/components/Hero";

import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <section id="products" className="w-full bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive suite of compliance and safety tools designed for modern AI agents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* TrustScore Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">TrustScore</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                The industry standard for AI agent reputation and compliance verification. Our dashboard provides real-time monitoring of regulatory adherence (EU AI Act, GDPR) and assigns a dynamic trust score that users can verify instantly.
              </p>
              <div className="mt-auto">
                <a
                  href="https://agent-trust-protocol-production.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200"
                >
                  View TrustScore Dashboard
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>

            {/* ConvoGuard Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">ConvoGuard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                Real-time safety guardrails for healthcare AI agents. Prevent harmful interactions, block illegal content, and ensure clinical safety compliance. Test our live containment engine against various interaction scenarios.
              </p>
              <div className="mt-auto">
                <a
                  href="https://convo-guard-ai-production.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors duration-200"
                >
                  Try ConvoGuard Demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
