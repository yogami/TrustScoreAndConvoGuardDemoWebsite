import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <section id="demo-videos" className="w-full bg-gray-50 dark:bg-gray-800 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Live Product Demos</h2>
          <p className="text-gray-500 dark:text-gray-400">Live generated demos of our compliance engine.</p>
        </div>
        <VideoDemo
          src="/videos/trustscore_dashboard.webp"
          title="TrustScore: Dashboard & Verification"
        />
        <VideoDemo
          src="/videos/convoguard_prod.webp"
          title="ConvoGuard: Real-time Safety Filter"
        />
      </section>

      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
