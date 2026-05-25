import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/providers/CustomCursor";
import NoiseBg from "@/components/ui/NoiseBg";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://shaikhsameer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Shaikh Sameer | Full Stack Engineer — Node.js, React.js/Next.js",
    template: "%s | Shaikh Sameer",
  },
  description:
    "Full Stack Engineer with 4+ years of experience building scalable enterprise applications, SaaS products and backend systems using Node.js and React.js.",
  keywords: [
    "Full Stack Developer",
    "Senior Software Engineer",
    "Node.js",
    "React",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "System Design",
    "Aurangabad",
    "India",
  ],
  authors: [{ name: "Shaikh Sameer", url: siteUrl }],
  creator: "Shaikh Sameer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Shaikh Sameer | Full Stack Engineer",
    description:
      "4+ years building scalable enterprise applications, SaaS products and backend systems. Node.js, React.js, Next.js, TypeScript.",
    siteName: "Shaikh Sameer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaikh Sameer | Full Stack Engineer",
    description:
      "4+ years building scalable enterprise applications and SaaS products. Node.js, React.js, Next.js, TypeScript.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaikh Sameer Shabbir",
  jobTitle: "Full Stack Engineer",
  url: siteUrl,
  email: "samsk7774@gmail.com",
  telephone: "+91-8379843464",
  sameAs: [
    "https://linkedin.com/in/shaikh-sameer07",
    "https://github.com/shaikhsameershabbir",
  ],
  knowsAbout: [
    "Node.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "System Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg font-mono antialiased text-muted">
        <SmoothScroll>
          <NoiseBg />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
