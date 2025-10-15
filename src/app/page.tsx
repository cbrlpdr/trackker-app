import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
