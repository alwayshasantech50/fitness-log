import Image from "next/image";


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#0b1220] border border-[#1b2130] rounded-3xl overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16">

          
          
          
          <div>
            <p className="text-lime-400 text-sm font-semibold tracking-[3px] mb-5">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
              TRAIN WITH
              <br />
              INTENT.
              <br />
              LOG EVERY
              <br />
              SET.
            </h1>

            <p className="text-gray-400 max-w-xl mb-8">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today's plan,
              and watch the week's work add up.
            </p>

            <a
              href="library"
              className="btn bg-lime-400 hover:bg-lime-300 text-black border-none rounded-full"
            >
              Browse Workouts
              
            </a>
          </div>

          
          

          <div className="relative flex justify-center">

        
            <Image
              src="/images/banner.png"
              alt="Workout Hero"
              width={650}
              height={650}
              priority
              className="relative z-10"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;