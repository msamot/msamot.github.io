import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://msamot.github.io"),
  title: {
    default: "Marlon Samot | Senior Web Developer",
    template: "%s | Marlon Samot",
  },
  description:
    "Portfolio of Marlon Samot, a Senior Web Developer in Metro Manila building reliable web platforms and business systems.",
  applicationName: "Marlon Samot Portfolio",
  authors: [{ name: "Marlon Samot", url: "https://msamot.github.io" }],
  creator: "Marlon Samot",
  publisher: "Marlon Samot",
  keywords: [
    "Marlon Samot",
    "Senior Web Developer",
    "Full-Stack Web Development",
    "PHP",
    "TypeScript",
    "Next.js",
    "Metro Manila",
    "Philippines",
  ],
  alternates: { canonical: "https://msamot.github.io/" },
  openGraph: {
    type: "profile",
    url: "https://msamot.github.io/",
    title: "Marlon Samot | Senior Web Developer",
    description:
      "Portfolio of Marlon Samot, a Senior Web Developer building reliable web platforms and business systems.",
    siteName: "Marlon Samot Portfolio",
    locale: "en_PH",
    images: [{ url: "/marlon-samot-logo.png", width: 512, height: 512, alt: "Marlon Samot logo" }],
    firstName: "Marlon",
    lastName: "Samot",
    username: "marlon-samot",
  },
  twitter: {
    card: "summary",
    title: "Marlon Samot | Senior Web Developer",
    description:
      "Portfolio of Marlon Samot, a Senior Web Developer building reliable web platforms and business systems.",
    images: ["/marlon-samot-logo.png"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
  robots: { index: true, follow: true },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://msamot.github.io/#person",
      name: "Marlon Samot",
      jobTitle: "Senior Web Developer",
      url: "https://msamot.github.io/",
      image: "https://msamot.github.io/marlon-samot-logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Metro Manila",
        addressCountry: "PH",
      },
      worksFor: { "@type": "Organization", name: "GMA New Media, Inc." },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Bestlink College of the Philippines",
      },
      knowsAbout: [
        "Full-Stack Web Development",
        "Database Design and Architecture",
        "Frontend Development",
        "Data Analysis",
        "AI and Automation",
        "Software Engineering",
      ],
      sameAs: [
        "https://www.linkedin.com/in/marlon-samot/",
        "https://github.com/msamot",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://msamot.github.io/#website",
      url: "https://msamot.github.io/",
      name: "Marlon Samot Portfolio",
      description:
        "Professional portfolio of Marlon Samot, a Senior Web Developer based in Metro Manila, Philippines.",
      publisher: { "@id": "https://msamot.github.io/#person" },
      inLanguage: "en-PH",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }}
        />
      </body>
    </html>
  );
}
