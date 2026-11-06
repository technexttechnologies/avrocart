import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVRO by TECHNEXT — Self-Hosted E-Commerce Platform",
  description:
    "Your Store. Your Server. Your Rules. Build and manage your independent e-commerce business with AVRO by TECHNEXT TECHNOLOGIES.",
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
