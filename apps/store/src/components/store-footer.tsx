"use client";

import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, CreditCard, Award, Heart, Check, Shield } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AVRO_THEMES } from "@/lib/themes-registry";

function renderTrustIcon(icon: string) {
  switch (icon) {
    case "truck":
      return <Truck className="w-5 h-5" />;
    case "shield":
      return <ShieldCheck className="w-5 h-5" />;
    case "award":
      return <Award className="w-5 h-5" />;
    case "refresh":
      return <RotateCcw className="w-5 h-5" />;
    case "heart":
      return <Heart className="w-5 h-5" />;
    case "check":
    default:
      return <Check className="w-5 h-5" />;
  }
}

export default function StoreFooter({ theme }: { theme?: any }) {
  const searchParams = useSearchParams();
  const previewParam = searchParams?.get("theme") || searchParams?.get("previewTheme");
  const matchingThemeDef = AVRO_THEMES.find(
    (t) =>
      t.id === previewParam ||
      t.code === previewParam ||
      t.code === theme?.activeTheme ||
      t.id === theme?.activeTheme ||
      (theme?.activeTheme === "TALIM_DEFAULT" && t.code === "AVRO_SIGNATURE")
  ) || AVRO_THEMES[12];

  const brandName = theme?.brandName || `${matchingThemeDef.name} Store`;
  const footerText =
    theme?.footerText || `© 2026 ${brandName}. Powered by AVRO by TECHNEXT.`;

  const isDarkFooter =
    matchingThemeDef.palette.footerBg === "#000000" ||
    matchingThemeDef.palette.footerBg === "#030712" ||
    matchingThemeDef.palette.footerBg === "#030303" ||
    matchingThemeDef.palette.footerBg === "#09090B" ||
    matchingThemeDef.palette.footerBg === "#020617" ||
    matchingThemeDef.palette.footerBg === "#0A192F" ||
    matchingThemeDef.palette.footerBg === "#052E16" ||
    matchingThemeDef.palette.footerBg === "#4C0519" ||
    matchingThemeDef.palette.footerBg === "#431407" ||
    matchingThemeDef.palette.footerBg === "#0C4A6E" ||
    matchingThemeDef.palette.footerBg === "#291305" ||
    matchingThemeDef.palette.footerBg === "#451A03" ||
    matchingThemeDef.palette.footerBg === "#14532D";

  return (
    <footer
      className="border-t pt-14 pb-12 transition-colors duration-300"
      style={{
        backgroundColor: matchingThemeDef.palette.footerBg,
        borderColor: matchingThemeDef.palette.border,
        color: isDarkFooter ? "#E2E8F0" : "#475569",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Industry Trust Badges Strip */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b text-xs"
          style={{ borderColor: isDarkFooter ? "rgba(255,255,255,0.1)" : "#E2E8F0" }}
        >
          {matchingThemeDef.trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0"
                style={{
                  backgroundColor: matchingThemeDef.palette.badgeBg,
                  color: matchingThemeDef.palette.badgeText,
                }}
              >
                {renderTrustIcon(badge.icon)}
              </div>
              <div>
                <strong
                  className="block font-bold"
                  style={{ color: isDarkFooter ? "#FFFFFF" : "#0F172A" }}
                >
                  {badge.title}
                </strong>
                <span className={isDarkFooter ? "text-slate-400" : "text-slate-500"}>
                  {badge.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3">
            <strong
              className="uppercase font-bold tracking-wider"
              style={{ color: isDarkFooter ? "#FFFFFF" : "#0F172A" }}
            >
              Collections
            </strong>
            <ul className="space-y-2">
              {matchingThemeDef.sampleCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/shop?category=${c.slug}`}
                    className={`hover:underline ${
                      isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <strong
              className="uppercase font-bold tracking-wider"
              style={{ color: isDarkFooter ? "#FFFFFF" : "#0F172A" }}
            >
              Customer Care
            </strong>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/track"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <strong
              className="uppercase font-bold tracking-wider"
              style={{ color: isDarkFooter ? "#FFFFFF" : "#0F172A" }}
            >
              Compliance & Legal
            </strong>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={isDarkFooter ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}
                >
                  About {matchingThemeDef.name}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <strong
              className="uppercase font-bold tracking-wider"
              style={{ color: isDarkFooter ? "#FFFFFF" : "#0F172A" }}
            >
              AVRO Deployment
            </strong>
            <div
              className="p-3 rounded-xl space-y-1 text-[11px] border"
              style={{
                backgroundColor: isDarkFooter ? "rgba(255,255,255,0.05)" : "#F1F5F9",
                borderColor: isDarkFooter ? "rgba(255,255,255,0.1)" : "#E2E8F0",
              }}
            >
              <span className="font-bold block" style={{ color: isDarkFooter ? "#FFFFFF" : "#0F172A" }}>
                Theme: {matchingThemeDef.name} ({matchingThemeDef.industry})
              </span>
              <p className={isDarkFooter ? "text-slate-400" : "text-slate-500"}>
                Self-hosted store engine. Verified license by TECHNEXT TECHNOLOGIES.
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-xs gap-4"
          style={{
            borderColor: isDarkFooter ? "rgba(255,255,255,0.1)" : "#F1F5F9",
            color: isDarkFooter ? "#94A3B8" : "#94A3B8",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="bg-white px-2.5 py-1 rounded-lg shadow-2xs">
              <img
                src="/avro-logo.png"
                alt="AVROCART by TECHNEXT"
                className="h-5 w-auto object-contain"
              />
            </div>
            <p>{footerText}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Secured by AVRO by TECHNEXT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
