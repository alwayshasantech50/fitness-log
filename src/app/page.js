import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          FITLOG
        </h1>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;