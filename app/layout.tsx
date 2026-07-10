import type { Metadata, Viewport } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";

const BASE_URL = "https://timiodusanya.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Timi Odusanya | Senior Full Stack & AI Engineer",
    template: "%s | Timi Odusanya",
  },

  description:
    "Timilehin Odusanya (Timi Odusanya) — Senior Full Stack & AI Engineer with 6+ years building production-grade, AI-powered platforms at scale. Expert in React, Next.js, TypeScript, Node.js, Python, NestJS, and AWS. Based in Lagos, Nigeria. Available for remote roles globally.",

  keywords: [
    "Timi Odusanya",
    "Timilehin Odusanya",
    "TimiOdusanya",
    "Timi Odusanya Portfolio",
    "Timilehin Odusanya Portfolio",
    "Timi Odusanya Software Engineer",
    "Timi Odusanya Developer",
    "Senior Full Stack Engineer",
    "Senior Full Stack Developer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Full Stack Developer Nigeria",
    "Full Stack Engineer Lagos",
    "Frontend Developer Nigeria",
    "Frontend Developer",
    "Backend Developer Nigeria",
    "Backend Developer",
    "AI Engineer Nigeria",
    "AI Engineer",
    "Senior AI Engineer",
    "React Developer Nigeria",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Python Developer",
    "NestJS Developer",
    "Software Engineer Lagos Nigeria",
    "Remote Full Stack Engineer",
    "Full Stack Engineer Africa",
    "AWS Developer",
    "AI Product Engineer",
    "LLM Developer",
    "Fintech Engineer",
    "HRTech Developer",
    "TravelTech Engineer",
    "React Native Developer",
    "PostgreSQL Developer",
    "Full Stack Software Engineer",
    "Portfolio Timilehin Odusanya",
  ],

  authors: [{ name: "Timilehin Odusanya", url: BASE_URL }],
  creator: "Timilehin Odusanya",
  publisher: "Timilehin Odusanya",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Timi Odusanya — Senior Full Stack & AI Engineer",
    title: "Timi Odusanya | Senior Full Stack & AI Engineer",
    description:
      "Timilehin Odusanya — Senior Full Stack & AI Engineer with 6+ years shipping AI-powered, production-grade platforms. React, Next.js, TypeScript, Node.js, Python, AWS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timi Odusanya — Senior Full Stack & AI Engineer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Timi Odusanya | Senior Full Stack & AI Engineer",
    description:
      "Senior Full Stack & AI Engineer with 6+ years building AI-powered platforms. React, Next.js, TypeScript, Node.js, Python, AWS.",
    creator: "@timi_odusanya",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: BASE_URL,
  },

  category: "technology",

  other: {
    "google-site-verification": "", // paste your Google Search Console token here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/jsm-logo.png" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
