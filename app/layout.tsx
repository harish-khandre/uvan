import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

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
        <head>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2173260918120839"
            crossOrigin="anonymous"
          />
          <Script 
         async src="https://fundingchoicesmessages.google.com/i/pub-2173260918120839?ers=1" nonce="ZOV-PhkPMVOV67FUzxWeAg" />
          <Script nonce="ZOV-PhkPMVOV67FUzxWeAg">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})() />
        </head>
        <body className={merri.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
