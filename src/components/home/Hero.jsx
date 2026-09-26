import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="overflow-hidden rounded-3xl border border-[#1b2130] bg-[#0b1220]">
        <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[3px] text-lime-400">
              WORKOUT LIBRARY
            </p>

            <h1 className="mb-6 text-5xl font-bold uppercase leading-none md:text-7xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY <br />SET.
            </h1>

            <p className="mb-8 max-w-xl text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, <br /> and watch the week's work add up.
            </p>

            <a
              href="#library"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              BROWSE WORKOUTS
              <FaArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/images/banner.png"
              alt="Workout illustration"
              width={650}
              height={650}
              priority
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;