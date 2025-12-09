import Hero from "@/components/Hero";
import TrustScoreDemo from "@/components/TrustScoreDemo";
import ConvoGuardDemo from "@/components/ConvoGuardDemo";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <TrustScoreDemo />
      <ConvoGuardDemo />
      <Pricing />
      <CTA />
    </main>
  );
}
