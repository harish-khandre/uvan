import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const merri = Merriweather({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Uvan Tech",
    template: "%s | Uvan Tech",
  },
  description:
    "All Updates about CSC, Maha-E Seva, Adhar Card, Mahadbt, Farmer, Mahadbt, Sarkari Yojna, Aple Sarkar, shetkari sathi nav navinYojna, Maharashtra Government Scheme's, New Updates, CSC Related, Aaple Sarkar, Online forms fillup process & online information about scheme, on our site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={merri.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
