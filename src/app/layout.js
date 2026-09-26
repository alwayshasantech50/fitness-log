import { Oswald } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const oswald = Oswald({
  subsets: ["latin"],
});


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Providers>
          {children}

          <ToastContainer
            position="top-center"
            autoClose={2000}
          />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;