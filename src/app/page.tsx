import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import TrustScoreDemo from "@/components/TrustScoreDemo";
import ConvoGuardDemo from "@/components/ConvoGuardDemo";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <section id="demo-videos" className="w-full bg-gray-50 dark:bg-gray-800 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">See it in Action</h2>
          <p className="text-gray-500 dark:text-gray-400">Live generated demos of our compliance engine.</p>
        </div>
        <VideoDemo
          src="/videos/trustscore_home_v3.webp"
          title="TrustScore: Instant Readiness Check"
        />
        <VideoDemo
          src="/videos/convoguard_v3.webp"
          title="ConvoGuard: Real-time Safety Filter"
        />
      </section>

      <TrustScoreDemo />
      <ConvoGuardDemo />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
