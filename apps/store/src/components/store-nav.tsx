"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ShoppingBag, ShieldCheck, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useState } from "react";
import { AVRO_THEMES, AvroThemeDefinition } from "@/lib/themes-registry";

export function StoreNav({ theme }: { theme?: any }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const previewParam = searchParams?.get("theme") || searchParams?.get("previewTheme");
  const matchingThemeDef = AVRO_THEMES.find(
    (t) =>
      t.id === previewParam ||
      t.code === previewParam ||
      t.code === theme?.activeTheme ||
      t.id === theme?.activeTheme
  ) || AVRO_THEMES[12];

  const brandName = theme?.brandName || `${matchingThemeDef.name} Store`;
  const announcementText =
    theme?.announcementBarText || matchingThemeDef.announcementBar.text;
  const showAnnouncement = theme?.showAnnouncementBar ?? true;

  const isDarkNav = matchingThemeDef.palette.headerBg === "#090D16" || matchingThemeDef.palette.headerBg === "#09090B" || matchingThemeDef.palette.headerBg === "#0A0A0A";

  return (
    <header
      className="sticky top-0 z-40 transition-colors duration-300 border-b"
      style={{
        backgroundColor: matchingThemeDef.palette.headerBg,
        borderColor: matchingThemeDef.palette.border,
      }}
    >
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div
          className="py-1.5 px-4 text-center text-xs font-semibold tracking-wide transition-colors"
          style={{
            backgroundColor: matchingThemeDef.announcementBar.bg,
            color: matchingThemeDef.announcementBar.textColor,
          }}
        >
          {announcementText}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-lg border border-slate-200/80 shadow-xs flex-shrink-0">
            <img
              src="/avro-logo.png"
              alt="AVROCART by TECHNEXT"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div>
            <span
              className={`font-extrabold text-base tracking-tight block leading-tight ${
                isDarkNav ? "text-white" : "text-slate-900"
              }`}
              style={{ fontFamily: matchingThemeDef.typography.fontFamily }}
            >
              {brandName}
            </span>
            <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase block">
              {matchingThemeDef.industry}
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === "/"
                ? "text-blue-500 font-bold"
                : isDarkNav
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`transition-colors ${
              pathname === "/shop"
                ? "text-blue-500 font-bold"
                : isDarkNav
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Shop Catalog
          </Link>
          <Link
            href="/track"
            className={`transition-colors ${
              pathname === "/track"
                ? "text-blue-500 font-bold"
                : isDarkNav
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Track Order
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === "/about"
                ? "text-blue-500 font-bold"
                : isDarkNav
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className={`relative p-2.5 rounded-xl transition-colors flex items-center ${
              isDarkNav
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-white text-[11px] font-bold flex items-center justify-center shadow"
                style={{ backgroundColor: matchingThemeDef.palette.accent }}
              >
                {itemCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isDarkNav ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
