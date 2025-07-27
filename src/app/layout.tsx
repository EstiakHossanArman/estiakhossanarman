import {siteConfig} from "@/config/site";
import "@/styles/globals.css";
import type {Metadata, Viewport} from "next";
import {Oswald} from "next/font/google";
import {Providers} from "./providers";
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  other: {
    "google-site-verification": "755fhCCBs2v3FlIqESp5F3gm4WHRQLtJzc0qOmCGd8I",
  },
  keywords: [
    "Estiak Hossan Arman Portfolio",
    "Freelance Web Developer",
    "Full Stack Developer for Hire",
    "React Developer Fiverr",
    "Next.js Developer Upwork",
    "MERN Stack Developer",
    "JavaScript and TypeScript Expert",
    "Backend Developer Express.js Nest.js",
    "Frontend UI UX Designer",
    "E-commerce Web Development",
    "Freelance Software Engineer",
    "Custom Web Application Development",
    "AWS Cloud & DevOps Engineer",
    "MongoDB PostgreSQL MySQL Developer",
    "Hire Remote Web Developer",
    "GitHub Open Source Contributor",
    "SEO Optimized Web Solutions",
    "Google Ranking Web Developer",
    "Portfolio Website Development",
    "Professional Software Engineer",
    "Hire a Full Stack Developer",
    "Web App Security and Performance",
    "Freelancer Fiverr Upwork Web Development",
    "Best Web Developer in Bangladesh",
    "Remote Developer Job Opportunities",
    "Custom API Development",
    "RESTful API & GraphQL Development",
    "SaaS Web Application Development",
    "Secure Authentication JWT OAuth",
    "Real-time Web Applications",
    "AI-Powered Blogging Platform",
    "Job Portal System Development",
    "Online Learning Platform Development",
    "E-commerce Store with Payment Gateway",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "muhammadasifcse",
      url: "https://x.com/muhammadasifcse",
    },
  ],
  creator: "estiakhossanarman-about",
  alternates: {
    canonical: "https://estiakhossanarman.vercel.app/about",
    types: {
      "application/rss+xml": [{url: "https://estiakhossanarman.vercel.app", title: "Estiak Hossan Arman"}],
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
