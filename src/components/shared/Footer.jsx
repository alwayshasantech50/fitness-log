import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#1b2130] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog"
            width={22}
            height={22}
          />

          <span className="font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;