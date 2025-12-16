import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Features from '@/components/Features';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Admissions from '@/components/Admissions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Programs />
      <Features />
      <About />
      <Gallery />
      <Admissions />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
