import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveStars from "@/components/InteractiveStars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Anandu Ajithkumar | Creative Editor & Full-Stack Developer Portfolio",
  description: "Explore the premium dark-themed portfolio of Anandu Ajithkumar, combining cinematic video editing showcases, social media management metrics, and high-performance full-stack web applications.",
  keywords: [
    "Anandu Ajithkumar", "Anandu", "Video Editor Portfolio", "Creative Editor", "Full Stack Developer", 
    "Capcut Editor", "Django React Developer", "Instagram SMM Dashboard", "Kerala Video Editor"
  ],
  authors: [{ name: "Anandu Ajithkumar" }],
  openGraph: {
    title: "Anandu Ajithkumar | Creative Editor & Full-Stack Developer",
    description: "Bridging the gap between cinematic storytelling and complex software engineering. Check out editing analytics and code projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anandu Ajithkumar | Creative Editor & Developer",
    description: "Cinematic video showcases + high-performance full-stack web applications.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col justify-between overflow-x-hidden relative bg-[#030014] text-slate-100 antialiased selection:bg-purple-600/30 selection:text-white">
        <PortfolioProvider>
          {/* Glowing particle canvas background */}
          <InteractiveStars />
          
          {/* Global floating header */}
          <Navbar />
          
          {/* Main content body with custom spacer for floating header */}
          <main className="w-full relative z-10 flex-grow pt-28 pb-12 flex flex-col">
            {children}
          </main>
          
          {/* Global footer */}
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
