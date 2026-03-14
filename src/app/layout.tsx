import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://shaikhsameer.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shaikh Sameer | Senior Full Stack Engineer — Node.js, React, System Design",
    template: "%s | Shaikh Sameer",
  },
  description:
    "Senior Full Stack Developer with 8 years of experience. Specialized in Node.js architecture, React, real-time systems, and scalable APIs. Available for opportunities.",
  keywords: [
    "Full Stack Developer",
    "Senior Software Engineer",
    "Node.js",
    "React",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "Microservices",
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
    title: "Shaikh Sameer | Senior Full Stack Engineer",
    description:
      "8 years building scalable backend systems and enterprise web applications. Node.js, React, TypeScript, PostgreSQL.",
    siteName: "Shaikh Sameer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaikh Sameer | Senior Full Stack Engineer",
    description:
      "7+ years building scalable backend systems and enterprise web applications. Node.js, React, TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification",
    // yandex: "your-yandex-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaikh Sameer Shabbir",
  jobTitle: "Senior Full Stack Engineer",
  url: siteUrl,
  email: "samsk7774@gmail.com",
  telephone: "+91-8379843464",
  sameAs: [
    "https://linkedin.com/in/shaikh-sameer-39a584216",
    "https://github.com/shaikhsameershabbir",
  ],
  knowsAbout: [
    "Node.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Microservices",
    "System Design",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Dr. Babasaheb Ambedkar Marathwada University",
    address: "Aurangabad, India",
  },
  workExample: [
    { "@type": "SoftwareSourceCode", name: "StudyPulse" },
    { "@type": "SoftwareSourceCode", name: "Indian Design Editing Platform" },
    { "@type": "SoftwareSourceCode", name: "POST EAT" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased text-[var(--text)]`}
      >
        {children}
      </body>
    </html>
  );
}
