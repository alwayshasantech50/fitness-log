import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center">
        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-lime-400">
          ERROR 404
        </p>

        <h1 className="text-4xl font-bold uppercase sm:text-6xl">
          PAGE NOT FOUND
        </h1>

        <p className="mt-4 max-w-md text-gray-400">
          This page or workout could not be found. Head back to the
          library to pick your next lift.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
        >
          Go to workouts
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;