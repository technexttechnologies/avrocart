"use client";

import { useState } from "react";
import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import Link from "next/link";
import {
  Sparkles,
  ExternalLink,
  Eye,
  CheckCircle2,
  Filter,
  Layers,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { AVRO_THEMES } from "@/lib/themes-registry";

export default function ThemesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { key: "ALL", label: "All 13 Themes" },
    { key: "Fashion & Apparel", label: "Fashion & Streetwear" },
    { key: "Consumer Electronics & Gadgets", label: "Electronics" },
    { key: "Grocery & Daily Fresh", label: "Grocery & Fresh" },
    { key: "Cosmetics & Skincare", label: "Beauty & Skincare" },
    { key: "Fine Jewelry & Heirlooms", label: "Jewelry" },
    { key: "Fitness & Athletic Performance", label: "Fitness & Gym" },
    { key: "Home Decor & Furnishings", label: "Home & Living" },
    { key: "Baby, Kids & Nursery", label: "Kids & Babies" },
    { key: "Artisan Crafts & Handmade Ceramics", label: "Artisan Crafts" },
    { key: "Outdoor, Hiking & Travel Gear", label: "Travel & Outdoor" },
    { key: "Pet Supplies, Food & Accessories", label: "Pet Supplies" },
    { key: "Mobiles, Cases & Tech Accessories", label: "Mobiles & Tech" },
  ];

  const filteredThemes =
    selectedCategory === "ALL"
      ? AVRO_THEMES
      : AVRO_THEMES.filter((t) => t.industry === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <PublicNav />

      <main className="flex-grow py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              13 Handcrafted Industry Themes
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Pre-Engineered for Every Vertical
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Every AVRO self-hosted installation includes access to all 13 industry archetypes.
              Whether selling luxury fashion, tech hardware, farm produce, or jewelry, activate your tailored theme in one click from your Store Admin.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((c) => {
              const active = selectedCategory === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setSelectedCategory(c.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    active
                      ? "bg-[#0A192F] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map((theme) => (
              <div
                key={theme.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Theme Preview Card Top */}
                  <div className="h-56 bg-slate-100 relative overflow-hidden">
                    <img
                      src={theme.hero.imageUrl}
                      alt={theme.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
                        {theme.industry}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white backdrop-blur-md">
                        Included In All Plans
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-xl font-extrabold tracking-tight drop-shadow-sm">
                        {theme.name}
                      </div>
                      <div className="text-xs text-slate-200 font-medium line-clamp-1">
                        {theme.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">
                      {theme.description}
                    </p>

                    {/* Color Swatches & Reference Link */}
                    <div className="pt-2 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-500 uppercase tracking-wider">
                          Palette
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: theme.palette.primary }}
                            title="Primary Color"
                          />
                          <span
                            className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: theme.palette.accent }}
                            title="Accent Color"
                          />
                          <span
                            className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: theme.palette.cardBg }}
                            title="Card Background"
                          />
                          <span
                            className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                            style={{ backgroundColor: theme.palette.background }}
                            title="Page Background"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-500 uppercase tracking-wider">
                          Reference Site
                        </span>
                        <a
                          href={theme.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[#2563EB] hover:underline flex items-center gap-1 truncate max-w-[190px]"
                        >
                          {theme.referenceDisplay}
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </a>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-500 uppercase tracking-wider">
                          Hero Archetype
                        </span>
                        <span className="font-mono text-slate-700 uppercase text-[10px] bg-slate-100 px-2 py-0.5 rounded">
                          {theme.hero.style}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`http://localhost:3001?previewTheme=${theme.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Live Preview
                    </a>
                    <a
                      href={theme.referenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Reference
                    </a>
                  </div>

                  <Link
                    href="/checkout?plan=grow"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 group-hover:bg-[#2563EB]"
                  >
                    Deploy With This Theme
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Banner */}
          <div className="bg-[#0A192F] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Zero Vendor Lock-In · Self-Hosted Core
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Want to build your own custom storefront theme?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                AVRO gives you full ownership of your store frontend. Built with Next.js, React, and Tailwind CSS, you can customize components, hook into our REST API, or use our visual Theme Engine in the Store Admin panel.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="px-6 py-3 rounded-xl bg-white text-[#0A192F] font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  Read Theme Engine Docs
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
                >
                  Request Bespoke Theme Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
