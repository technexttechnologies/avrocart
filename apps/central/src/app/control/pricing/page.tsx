"use client";

import { useEffect, useState } from "react";
import {
  BadgePercent,
  CheckCircle2,
  Save,
  Plus,
  Trash2,
  Sparkles,
  Tag,
  Palette,
  Wrench,
  AlertCircle,
} from "lucide-react";

export default function PricingControlPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Editable states
  const [tiers, setTiers] = useState<any[]>([]);
  const [setupFee, setSetupFee] = useState("1499");
  const [setupEnabled, setSetupEnabled] = useState("true");
  const [newPromo, setNewPromo] = useState({ code: "", discountPercent: "15", maxDiscount: "500" });

  const loadData = () => {
    setLoading(true);
    fetch("/api/v1/control/pricing")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res);
          const allTiers: any[] = [];
          res.plans.forEach((p: any) => {
            p.pricingTiers.forEach((pt: any) => {
              allTiers.push({ ...pt, planName: p.name, tier: p.tier });
            });
          });
          setTiers(allTiers);
          if (res.settings.setup_assistance_price) {
            setSetupFee(res.settings.setup_assistance_price);
          }
          if (res.settings.setup_assistance_enabled) {
            setSetupEnabled(res.settings.setup_assistance_enabled);
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleTierChange = (id: string, field: string, val: string) => {
    setTiers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: val } : t))
    );
  };

  const handleSaveTiersAndSettings = async () => {
    setErrorMsg("");
    setSaveSuccess(false);

    try {
      const res = await fetch("/api/v1/control/pricing", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "UPDATE_TIERS",
          tierUpdates: tiers,
        }),
      });

      await fetch("/api/v1/control/pricing", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "UPDATE_SETTINGS",
          settingUpdates: {
            setup_assistance_price: setupFee,
            setup_assistance_enabled: setupEnabled,
          },
        }),
      });

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to update pricing engine.");
    }
  };

  const handleAddPromotion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromo.code) return;

    await fetch("/api/v1/control/pricing", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "ADD_PROMO",
        newPromo,
      }),
    });

    setNewPromo({ code: "", discountPercent: "15", maxDiscount: "500" });
    loadData();
  };

  const handleTogglePromo = async (promoId: string) => {
    await fetch("/api/v1/control/pricing", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "TOGGLE_PROMO",
        togglePromoId: promoId,
      }),
    });
    loadData();
  };

  if (loading) {
    return <div className="text-sm text-slate-500 py-12">Loading pricing engine matrix...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Dynamic Pricing Engine</h1>
          <p className="text-xs text-slate-500 mt-1">
            Centrally configure plan rates, interval discounts, promotional coupon codes, and optional setup assistance.
          </p>
        </div>
        <button
          onClick={handleSaveTiersAndSettings}
          className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save All Changes
        </button>
      </div>

      {saveSuccess && (
        <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Pricing rules persisted to database! The public website and checkout reflect these values immediately.
        </div>
      )}

      {/* Plans & Durations Matrix Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
          <BadgePercent className="w-4 h-4 text-[#2563EB]" />
          Plan Tier & Billing Duration Matrix (Zero Hardcoding)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3 px-4">Plan Name</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Display Price (₹)</th>
                <th className="py-3 px-4">Original Rate (₹)</th>
                <th className="py-3 px-4">Discount Applied (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tiers.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4">
                    <span className="font-bold text-slate-900">{t.planName}</span>
                    <span className="text-[10px] text-slate-400 block">{t.tier}</span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-700">
                    {t.duration}
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      value={t.price}
                      onChange={(e) => handleTierChange(t.id, "price", e.target.value)}
                      className="w-28 px-2.5 py-1 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2563EB] font-bold"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      value={t.originalPrice || t.price}
                      onChange={(e) => handleTierChange(t.id, "originalPrice", e.target.value)}
                      className="w-28 px-2.5 py-1 text-xs border border-slate-300 rounded-md focus:outline-none"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={t.discountPercent}
                        onChange={(e) => handleTierChange(t.id, "discountPercent", e.target.value)}
                        className="w-16 px-2 py-1 text-xs border border-slate-300 rounded-md focus:outline-none"
                      />
                      <span className="text-slate-400">%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Setup Assistance & Add-on Charges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
            <Wrench className="w-4 h-4 text-purple-600" />
            Initial Setup Assistance Fee
          </h3>
          <p className="text-xs text-slate-500">
            Optional setup service fee presented to customers on checkout. Configurable or waivable at any time.
          </p>

          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Setup Assistance Price (₹)</label>
              <input
                type="number"
                value={setupFee}
                onChange={(e) => setSetupFee(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Offer Status</label>
              <select
                value={setupEnabled}
                onChange={(e) => setSetupEnabled(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none"
              >
                <option value="true">Enabled (Shown on Public Pricing & Checkout)</option>
                <option value="false">Disabled (Free Setup or Off)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Promotional Offers & Coupons */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-600" />
            Promotional Coupons & Discounts
          </h3>

          <form onSubmit={handleAddPromotion} className="flex gap-2">
            <input
              type="text"
              placeholder="CODE (e.g. SUMMER20)"
              value={newPromo.code}
              onChange={(e) => setNewPromo({ ...newPromo, code: e.target.value })}
              className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg uppercase"
            />
            <input
              type="number"
              placeholder="% Off"
              value={newPromo.discountPercent}
              onChange={(e) => setNewPromo({ ...newPromo, discountPercent: e.target.value })}
              className="w-20 px-2 py-1.5 text-xs border border-slate-300 rounded-lg"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-[#0A192F] text-white text-xs font-bold"
            >
              Add Promo
            </button>
          </form>

          <div className="space-y-2 pt-2">
            {data?.promotions?.map((pr: any) => (
              <div
                key={pr.id}
                className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between text-xs"
              >
                <div>
                  <code className="font-bold text-slate-900">{pr.code}</code>
                  <span className="text-[11px] text-slate-500 ml-2">
                    {pr.discountPercent}% off (Max ₹{pr.maxDiscount || "No limit"})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleTogglePromo(pr.id)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    pr.isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {pr.isActive ? "ACTIVE" : "DISABLED"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 13 Built-in Industry Themes Catalog */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
              <Palette className="w-4 h-4 text-indigo-600" />
              13 Built-in Industry Themes Catalog
            </h3>
            <p className="text-xs text-slate-500">
              Manage licensing availability, pricing, and distribution for all 13 official AVRO industry themes.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
            {data?.themes?.length || 13} Themes Configured
          </span>
        </div>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                <th className="py-2.5 px-3">Theme Name</th>
                <th className="py-2.5 px-3">Code</th>
                <th className="py-2.5 px-3">Industry Vertical</th>
                <th className="py-2.5 px-3">Licensing Model</th>
                <th className="py-2.5 px-3">Price</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {data?.themes?.map((th: any) => (
                <tr key={th.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900">{th.name}</td>
                  <td className="py-3 px-3 font-mono text-slate-500 text-[11px]">{th.themeCode}</td>
                  <td className="py-3 px-3 text-slate-600 text-[11px] max-w-xs truncate">{th.description}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {th.isPremium ? "Premium Add-on" : "Included in Base Plan"}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-slate-800">
                    {th.price > 0 ? `₹${th.price}` : "Free"}
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
