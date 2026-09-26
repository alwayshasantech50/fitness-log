import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="space-y-8">
        <Hero />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;