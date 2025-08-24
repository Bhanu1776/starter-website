import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app relative z-10">
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
