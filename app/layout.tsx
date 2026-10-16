import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marlon Samot | Senior Web Developer",
  description:
    "Professional resume of Marlon Samot, a Senior Web Developer based in Metro Manila, Philippines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
