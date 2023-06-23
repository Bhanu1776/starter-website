import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
