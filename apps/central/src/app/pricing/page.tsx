"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import {
  Check,
  X,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Headphones,
  Wrench,
} from "lucide-react";

export default function PricingPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [setupAssistance, setSetupAssistance] = useState({ enabled: true, price: 1499 });
  const [duration, setDuration] = useState("YEARLY");
  const [includeSetup, setIncludeSetup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/pricing")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPlans(data.plans);
          if (data.setupAssistance) {
            setSetupAssistance(data.setupAssistance);
          }
        }
      })
      .catch((err) => console.error("Failed to load pricing:", err))
      .finally(() => setLoading(false));
  }, []);

  const durations = [
    { key: "MONTHLY", label: "Monthly", badge: "" },
    { key: "SIX_MONTHS", label: "6 Months", badge: "10% OFF" },
    { key: "YEARLY", label: "1 Year", badge: "20% OFF — Recommended" },
    { key: "TWO_YEARS", label: "2 Years", badge: "30% OFF — Best Value" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PublicNav />

      <main className="flex-grow py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/60 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Dynamic Central Pricing Engine
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Invest in Independence.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg">
              One predictable subscription. No sales commissions, no traffic limits, and total server sovereignty.
            </p>

            {/* Duration Selector */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
              {durations.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDuration(d.key)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
                    duration === d.key
                      ? "bg-[#0A192F] text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {d.label}
                  {d.badge && (
                    <span className="ml-1.5 text-[10px] text-emerald-400 font-extrabold">
                      ({d.badge.split(" ")[0]})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Optional Setup Assistance Add-on Toggle */}
            {setupAssistance.enabled && (
              <div className="pt-4 max-w-md mx-auto">
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm cursor-pointer hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Add Optional Setup Assistance</p>
                      <p className="text-[11px] text-slate-500">Database & domain config assistance (+₹{setupAssistance.price})</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeSetup}
                    onChange={(e) => setIncludeSetup(e.target.checked)}
                    className="w-4 h-4 text-[#2563EB] rounded border-slate-300 focus:ring-[#2563EB]"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Pricing Cards */}
          {loading ? (
            <div className="text-center py-16 text-slate-500 font-medium">Loading subscription plans...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => {
                const tierPricing = plan.pricing[duration] || {
                  price: 0,
                  originalPrice: 0,
                  discountPercent: 0,
                };
                const finalCardPrice = tierPricing.price + (includeSetup ? setupAssistance.price : 0);
                const isGrow = plan.tier === "GROW";

                return (
                  <div
                    key={plan.id}
                    className={`rounded-2xl bg-white border p-8 flex flex-col justify-between shadow-sm relative transition-all hover:shadow-lg ${
                      isGrow ? "border-[#2563EB] ring-2 ring-[#2563EB]/20" : "border-slate-200"
                    }`}
                  >
                    {plan.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          isGrow ? "bg-[#2563EB] text-white" : "bg-slate-800 text-white"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A192F]">{plan.name}</h3>
                        <p className="text-xs text-slate-500 mt-1 min-h-[36px]">{plan.description}</p>
                      </div>

                      <div className="pt-2 pb-4 border-b border-slate-100">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-extrabold text-[#0A192F]">₹{finalCardPrice.toLocaleString("en-IN")}</span>
                          <span className="text-xs text-slate-500 font-medium">
                            / {duration === "MONTHLY" ? "mo" : duration.toLowerCase().replace("_", " ")}
                          </span>
                        </div>
                        {includeSetup && (
                          <p className="text-[11px] text-blue-600 font-medium mt-1">
                            Includes ₹{setupAssistance.price} one-time setup assistance
                          </p>
                        )}
                        {tierPricing.discountPercent > 0 && (
                          <p className="text-xs text-emerald-600 font-semibold mt-1">
                            {tierPricing.discountPercent}% Duration Savings Applied
                          </p>
                        )}
                      </div>

                      {/* Feature Checklist */}
                      <ul className="space-y-3 text-xs text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Independent self-hosted deployment</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Unlimited products & inventory items</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Cash on Delivery & Bank Transfer</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          {plan.entitlements.paymentGateways ? (
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={plan.entitlements.paymentGateways ? "font-semibold text-slate-900" : "text-slate-400"}>
                            Online Gateways (Razorpay, PhonePe, Stripe)
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          {plan.entitlements.courierIntegrations ? (
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={plan.entitlements.courierIntegrations ? "font-semibold text-slate-900" : "text-slate-400"}>
                            Automated Couriers (Shiprocket, Delhivery, DTDC)
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          {plan.entitlements.customThemes ? (
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={plan.entitlements.customThemes ? "font-medium" : "text-slate-400"}>
                            Live Theme Customizer & Branding Engine
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          {plan.entitlements.prioritySupport ? (
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={plan.entitlements.prioritySupport ? "font-medium text-emerald-700" : "text-slate-400"}>
                            Priority 24/7 SLA Support
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Admin Seats: <strong>{plan.entitlements.maxAdminUsers} user{plan.entitlements.maxAdminUsers > 1 ? "s" : ""}</strong></span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-8">
                      <Link
                        href={`/checkout?plan=${plan.tier}&duration=${duration}&setup=${includeSetup}`}
                        className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block transition-all ${
                          isGrow
                            ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md hover:shadow-lg"
                            : "bg-[#0A192F] hover:bg-[#1E293B] text-white"
                        }`}
                      >
                        Choose {plan.name}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Guarantee Box */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-[#0A192F] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                TECHNEXT Software Quality Guarantee
              </h4>
              <p className="text-xs text-slate-500 max-w-xl">
                Every customer installation includes regular security patches, bug fixes, and verified adapter updates. Never get locked into proprietary hosting ecosystems.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors whitespace-nowrap"
            >
              Enterprise & Custom Quotes
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
