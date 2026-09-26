import { Oswald } from "next/font/google";
import "./globals.css";


const oswald = Oswald({
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={oswald.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
