"use client";

import { useEffect, useState } from "react";
import {
  Palette,
  Eye,
  CheckCircle2,
  Save,
  Sparkles,
  ExternalLink,
  Check,
  Zap,
  Sliders,
  ChevronRight,
} from "lucide-react";
import { AVRO_THEMES, AvroThemeDefinition } from "@/lib/themes-registry";

export default function ThemesAdminPage() {
  const [themeConfig, setThemeConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activatingCode, setActivatingCode] = useState<string | null>(null);

  const categories = [
    { key: "ALL", label: "All 13 Industry Themes" },
    { key: "Fashion & Apparel", label: "Fashion" },
    { key: "Consumer Electronics & Gadgets", label: "Electronics" },
    { key: "Grocery & Daily Fresh", label: "Grocery" },
    { key: "Cosmetics & Skincare", label: "Cosmetics" },
    { key: "Fine Jewelry & Heirlooms", label: "Jewelry" },
    { key: "Fitness & Athletic Performance", label: "Fitness" },
    { key: "Home Decor & Furnishings", label: "Home" },
    { key: "Baby, Kids & Nursery", label: "Kids" },
    { key: "Artisan Crafts & Handmade Ceramics", label: "Crafts" },
    { key: "Outdoor, Hiking & Travel Gear", label: "Travel & Outdoor" },
    { key: "Pet Supplies, Food & Accessories", label: "Pets" },
    { key: "Mobiles, Cases & Tech Accessories", label: "Mobiles" },
  ];

  const loadTheme = () => {
    setLoading(true);
    fetch("/api/admin/themes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setThemeConfig(data.theme);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const handleApplyPreset = async (preset: AvroThemeDefinition) => {
    setActivatingCode(preset.code);
    const newConfig = {
      ...themeConfig,
      activeTheme: preset.code,
      brandName: `${preset.name} Store`,
      primaryColor: preset.palette.primary,
      accentColor: preset.palette.accent,
      fontFamily: preset.typography.fontFamily,
      bannerHeadline: `${preset.hero.headline} ${preset.hero.headlineHighlight || ""}`.trim(),
      bannerSubheadline: preset.hero.subheadline,
      bannerImageUrl: preset.hero.imageUrl,
      announcementBarText: preset.announcementBar.text,
      showAnnouncementBar: true,
    };

    setThemeConfig(newConfig);

    try {
      const res = await fetch("/api/admin/themes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newConfig),
      });

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 4000);
      }
    } finally {
      setActivatingCode(null);
    }
  };

  const handleSaveTheme = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(false);

    const res = await fetch("/api/admin/themes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(themeConfig),
    });

    if (res.ok) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
  };

  const filteredThemes =
    selectedFilter === "ALL"
      ? AVRO_THEMES
      : AVRO_THEMES.filter((t) => t.industry === selectedFilter);

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Loading AVRO Theme Engine...</div>;
  }

  const activeThemeObj = AVRO_THEMES.find(
    (t) => t.code === themeConfig?.activeTheme || t.id === themeConfig?.activeTheme
  ) || AVRO_THEMES[12];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] text-[11px] font-bold mb-1">
            <Sparkles className="w-3 h-3" />
            13 Industry Archetypes Available
          </div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Storefront Theme Engine</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Switch between 13 industry-tested designs matching our reference ecosystem, or fine-tune bespoke branding.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            Live Preview Storefront
          </a>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Theme settings successfully saved and deployed! Visit your storefront to view the transformation.</span>
          </div>
          <a
            href="/"
            target="_blank"
            className="underline hover:text-emerald-950 flex items-center gap-1 text-[11px]"
          >
            Open Storefront <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Currently Active Banner */}
      <div className="bg-gradient-to-r from-[#0A192F] to-[#1E293B] rounded-2xl p-6 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/10">
            <img
              src={activeThemeObj.hero.imageUrl}
              alt={activeThemeObj.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/30 text-blue-300 border border-blue-400/30">
                CURRENTLY ACTIVE
              </span>
              <span className="text-xs text-slate-400">{activeThemeObj.industry}</span>
            </div>
            <h2 className="text-lg font-bold text-white mt-1">{activeThemeObj.name} Theme</h2>
            <p className="text-xs text-slate-300 line-clamp-1">{themeConfig?.bannerHeadline || activeThemeObj.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
            <span
              className="w-3.5 h-3.5 rounded-full border border-white/20"
              style={{ backgroundColor: themeConfig?.primaryColor }}
              title="Primary"
            />
            <span
              className="w-3.5 h-3.5 rounded-full border border-white/20"
              style={{ backgroundColor: themeConfig?.accentColor }}
              title="Accent"
            />
            <span className="text-[11px] font-mono text-slate-300 ml-1">
              {themeConfig?.primaryColor}
            </span>
          </div>

          <a
            href="/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow"
          >
            <Eye className="w-3.5 h-3.5" />
            View Live
          </a>
        </div>
      </div>

      {/* 13 Industry Themes Chooser */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-[#0A192F]">Choose An Industry Theme Preset</h3>
            <p className="text-xs text-slate-500">
              Clicking &ldquo;Activate Theme&rdquo; updates your storefront colors, typography, hero banner, announcement bar, and badges instantly.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {categories.map((c) => {
            const active = selectedFilter === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setSelectedFilter(c.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  active
                    ? "bg-[#0A192F] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* 13 Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThemes.map((th) => {
            const isActive =
              themeConfig?.activeTheme === th.code ||
              themeConfig?.activeTheme === th.id;
            const isActivating = activatingCode === th.code;

            return (
              <div
                key={th.id}
                className={`rounded-2xl bg-white border overflow-hidden shadow-sm transition-all relative flex flex-col justify-between ${
                  isActive
                    ? "border-[#2563EB] ring-2 ring-[#2563EB]/20 shadow-md"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="h-44 bg-slate-100 overflow-hidden relative group">
                    <img
                      src={th.hero.imageUrl}
                      alt={th.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-sm">
                        {th.industry}
                      </span>
                      {isActive && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#2563EB] text-white flex items-center gap-1 shadow-sm">
                          <Check className="w-3 h-3" /> ACTIVE
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h4 className="font-extrabold text-base tracking-tight">{th.name}</h4>
                      <p className="text-[11px] text-slate-200 truncate">{th.tagline}</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {th.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2 text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-semibold">Reference</span>
                        <a
                          href={th.referenceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2563EB] font-mono hover:underline flex items-center gap-1"
                        >
                          {th.referenceDisplay}
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-semibold">Palette</span>
                        <div className="flex items-center gap-1">
                          <span
                            className="w-3 h-3 rounded-full border border-black/10"
                            style={{ backgroundColor: th.palette.primary }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-black/10"
                            style={{ backgroundColor: th.palette.accent }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-black/10"
                            style={{ backgroundColor: th.palette.cardBg }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  {isActive ? (
                    <div className="w-full py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center border border-emerald-200 flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Active On Storefront
                    </div>
                  ) : (
                    <button
                      type="button"
                      disabled={isActivating}
                      onClick={() => handleApplyPreset(th)}
                      className="w-full py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      {isActivating ? (
                        <span>Activating Theme...</span>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          Activate {th.name} Theme
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual Customizer Form */}
      <form
        onSubmit={handleSaveTheme}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#2563EB]" />
              Fine-Tune Active Branding & Colors
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Customize or override specific properties of your active theme.
            </p>
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            Save Overrides
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Brand / Store Name</label>
            <input
              type="text"
              value={themeConfig.brandName}
              onChange={(e) => setThemeConfig({ ...themeConfig, brandName: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Font Family Preset</label>
            <input
              type="text"
              value={themeConfig.fontFamily}
              onChange={(e) => setThemeConfig({ ...themeConfig, fontFamily: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Primary Brand Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={themeConfig.primaryColor}
                onChange={(e) => setThemeConfig({ ...themeConfig, primaryColor: e.target.value })}
                className="w-10 h-9 p-0.5 border rounded cursor-pointer"
              />
              <input
                type="text"
                value={themeConfig.primaryColor}
                onChange={(e) => setThemeConfig({ ...themeConfig, primaryColor: e.target.value })}
                className="flex-1 px-3 py-2 border rounded-lg font-mono focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Accent Button Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={themeConfig.accentColor}
                onChange={(e) => setThemeConfig({ ...themeConfig, accentColor: e.target.value })}
                className="w-10 h-9 p-0.5 border rounded cursor-pointer"
              />
              <input
                type="text"
                value={themeConfig.accentColor}
                onChange={(e) => setThemeConfig({ ...themeConfig, accentColor: e.target.value })}
                className="flex-1 px-3 py-2 border rounded-lg font-mono focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="pt-4 border-t border-slate-100 space-y-4 text-xs">
          <h4 className="font-bold text-slate-900">Homepage Hero Banner</h4>

          <div className="space-y-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Main Banner Headline</label>
              <input
                type="text"
                value={themeConfig.bannerHeadline}
                onChange={(e) => setThemeConfig({ ...themeConfig, bannerHeadline: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Subheadline Description</label>
              <input
                type="text"
                value={themeConfig.bannerSubheadline}
                onChange={(e) => setThemeConfig({ ...themeConfig, bannerSubheadline: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Hero Image URL</label>
              <input
                type="text"
                value={themeConfig.bannerImageUrl || ""}
                onChange={(e) => setThemeConfig({ ...themeConfig, bannerImageUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Announcement Bar */}
        <div className="pt-4 border-t border-slate-100 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Top Announcement Bar</h4>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={themeConfig.showAnnouncementBar}
                onChange={(e) => setThemeConfig({ ...themeConfig, showAnnouncementBar: e.target.checked })}
                className="rounded text-[#2563EB]"
              />
              <span className="font-medium text-slate-700">Display Announcement Bar</span>
            </label>
          </div>

          <input
            type="text"
            value={themeConfig.announcementBarText || ""}
            onChange={(e) => setThemeConfig({ ...themeConfig, announcementBarText: e.target.value })}
            placeholder="e.g. Free shipping on orders over ₹999"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Publish All Theme Settings
          </button>
        </div>
      </form>
    </div>
  );
}
