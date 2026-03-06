import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CJ Harvey | Elite Personal Trainer — Oxford, UK",
  description:
    "High-end personal training with CJ Harvey. Expert coaching in strength, Hyrox, boxing, cycling, and athletic performance. In-person in Oxford, UK and global online coaching.",
  openGraph: {
    title: "CJ Harvey | Elite Personal Trainer",
    description:
      "High-end personal training for every body. Build strength, prevent injuries, and redefine your everyday limits.",
    type: "website",
    locale: "en_GB",
    siteName: "CJ Harvey",
  },
  twitter: {
    card: "summary_large_image",
    title: "CJ Harvey | Elite Personal Trainer",
    description:
      "High-end personal training for every body. Build strength, prevent injuries, and redefine your everyday limits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${syncopate.variable} bg-onyx text-titanium font-sans antialiased selection:bg-gold/30 selection:text-gold`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
