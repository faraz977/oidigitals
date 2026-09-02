import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const description =
  "OI Digitals is a software house. We build software, AI, apps, and design for companies that need a product in people's hands.";

export const metadata: Metadata = {
  metadataBase: new URL("https://oidigitals.net"),
  title: {
    default: "OI Digitals",
    template: "%s · OI Digitals",
  },
  description,
  applicationName: "OI Digitals",
  authors: [{ name: "OI Digitals", url: "https://oidigitals.net" }],
  creator: "OI Digitals",
  keywords: [
    "software house",
    "OI Digitals",
    "web development",
    "mobile apps",
    "AI",
    "ShipperDock",
    "TrackIFTA",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oidigitals.net",
    siteName: "OI Digitals",
    title: "OI Digitals",
    description,
  },
  twitter: {
    card: "summary",
    title: "OI Digitals",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  description,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://shipperdock.com",
    "https://trackifta.com",
    "https://fmcsaready.com",
    "https://bizbill.pk",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
