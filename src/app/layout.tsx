import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Shaikh Sameer - Full Stack Developer",
  description: "Full Stack Developer specializing in MERN stack. Building modern web applications with clean, efficient code.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "MongoDB", "TypeScript", "Next.js"],
  authors: [{ name: "Shaikh Sameer" }],
  creator: "Shaikh Sameer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shaikhsameer.dev",
    title: "Shaikh Sameer - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack. Building modern web applications with clean, efficient code.",
    siteName: "Shaikh Sameer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaikh Sameer - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack. Building modern web applications with clean, efficient code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased bg-gray-900 text-white`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
