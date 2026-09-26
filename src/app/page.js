import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Library from "@/components/home/Library";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="space-y-8">
        <Hero />
        <Library />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;