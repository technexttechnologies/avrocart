import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVRO Storefront — Self-Hosted E-Commerce",
  description: "Powered by AVRO by TECHNEXT TECHNOLOGIES. Independent self-hosted e-commerce software platform.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
        {children}
      </body>
    </html>
  );
}
