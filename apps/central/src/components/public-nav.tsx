"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Server, ArrowRight, ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export function PublicNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Themes", href: "/themes" },
    { label: "Add-ons", href: "/addons" },
    { label: "Docs", href: "/docs" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/avro-logo.png"
            alt="AVROCART by TECHNEXT"
            className="h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
          <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200">
            Self-Hosted
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#2563EB] font-semibold"
                    : "text-slate-600 hover:text-[#0A192F]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-[#0A192F] px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0A192F] hover:bg-[#1E293B] text-white text-sm font-semibold shadow-sm transition-all hover:shadow"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-6 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-[#2563EB]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-medium text-slate-700"
            >
              Sign In
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-[#0A192F] text-white text-center font-semibold text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
