"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import {
  Server,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Database,
  Cpu,
  Palette,
  CreditCard,
  Truck,
  Terminal,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const [pricingData, setPricingData] = useState<any[]>([]);
  const [selectedDuration, setSelectedDuration] = useState("YEARLY");
  const [loadingPricing, setLoadingPricing] = useState(true);

  useEffect(() => {
    fetch("/api/v1/pricing")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.plans) {
          setPricingData(data.plans);
        }
      })
      .catch((err) => console.error("Error loading pricing:", err))
      .finally(() => setLoadingPricing(false));
  }, []);

  const durationLabels: Record<string, string> = {
    MONTHLY: "Monthly",
    SIX_MONTHS: "6 Months (-10%)",
    YEARLY: "1 Year (-20%)",
    TWO_YEARS: "2 Years (-30%)",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PublicNav />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 pt-16 pb-20 lg:pt-24 lg:pb-32">
          {/* Subtle background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                AVRO Self-Hosted E-Commerce Platform
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
                Your Store. Your Server. <br className="hidden sm:inline" />
                <span className="text-[#2563EB]">Your Rules.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Build and manage your own e-commerce store with AVRO, the self-hosted e-commerce software by <strong className="text-slate-800">TECHNEXT</strong>. Zero platform transaction cuts, total database sovereignty, and independent VPS deployment.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/features"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-base font-semibold shadow-sm hover:border-slate-400 transition-all"
                >
                  Explore Features
                </Link>
                <a
                  href="http://localhost:3001"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] border border-blue-200 text-base font-semibold transition-all flex items-center gap-1.5"
                >
                  Live Storefront Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Value prop pills */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Dedicated Customer Database</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Self-Hosted On Any Host or Cloud</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Modular Razorpay, PhonePe & Stripe</span>
              </div>
            </div>

            {/* Dashboard & Storefront Mockup Preview */}
            <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-slate-900/5 p-3 border border-slate-300 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-500">https://your-store.com/admin</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Independent Installation</span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50">
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs text-slate-500 font-medium">Today's Revenue</span>
                    <p className="text-2xl font-bold text-slate-900">₹48,250.00</p>
                    <span className="text-xs text-emerald-600 font-semibold">↑ 18.4% from yesterday</span>
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs text-slate-500 font-medium">Active Orders</span>
                    <p className="text-2xl font-bold text-slate-900">34 Pending / Shipped</p>
                    <span className="text-xs text-blue-600 font-semibold">Full fulfillment workflow</span>
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-2">
                    <span className="text-xs text-slate-500 font-medium">Gateway Integrations</span>
                    <p className="text-sm font-bold text-slate-900">Razorpay, PhonePe & COD</p>
                    <span className="text-xs text-slate-500">Secrets locked in your server</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PILLARS / ARCHITECTURE HIGHLIGHTS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Software Architecture</span>
              <h2 className="text-3xl font-extrabold text-[#0A192F]">Why AVRO is Built Differently</h2>
              <p className="text-slate-600 text-base">
                Unlike traditional multi-tenant SaaS builders where your business is trapped in a shared database, AVRO gives you genuine digital sovereignty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F]">Independent Database</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every AVRO customer gets a standalone database. Your customers, financial transactions, products, and order histories are never co-mingled with anyone else.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F]">Your Host & Domain</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  TECHNEXT does not force expensive proprietary hosting. Host AVRO on AWS, DigitalOcean, Hetzner, Contabo, or any standard Linux VPS with complete root access.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F]">Private Gateway Secrets</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your Razorpay, PhonePe, and Stripe API keys reside strictly inside your local server environment. TECHNEXT Central never sees or stores your credentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC PRICING SHOWCASE */}
        <section className="py-20 bg-slate-50 border-y border-slate-200" id="pricing-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Transparent Subscription Plans</span>
              <h2 className="text-3xl font-extrabold text-[#0A192F]">Simple, Predictable Software Licenses</h2>
              <p className="text-slate-600 text-base">
                All prices are loaded dynamically from TECHNEXT Central Management. Choose your preferred billing cycle to unlock substantial discounts.
              </p>

              {/* Duration Switcher */}
              <div className="inline-flex p-1 rounded-xl bg-white border border-slate-300 shadow-sm mt-4">
                {["MONTHLY", "SIX_MONTHS", "YEARLY", "TWO_YEARS"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDuration(d)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      selectedDuration === d
                        ? "bg-[#0A192F] text-white shadow"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {durationLabels[d]}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {loadingPricing ? (
                <div className="col-span-3 text-center py-12 text-slate-500 font-medium">
                  Loading dynamic pricing engine...
                </div>
              ) : (
                pricingData.map((plan) => {
                  const pricing = plan.pricing[selectedDuration] || {
                    price: 0,
                    originalPrice: 0,
                    discountPercent: 0,
                  };
                  const isGrow = plan.tier === "GROW";

                  return (
                    <div
                      key={plan.id}
                      className={`relative rounded-2xl bg-white border p-8 flex flex-col justify-between shadow-sm transition-all hover:shadow-md ${
                        isGrow
                          ? "border-[#2563EB] ring-2 ring-[#2563EB]/20"
                          : "border-slate-200"
                      }`}
                    >
                      {plan.badge && (
                        <span
                          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                            isGrow
                              ? "bg-[#2563EB] text-white"
                              : "bg-slate-800 text-white"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      )}

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-[#0A192F]">{plan.name}</h3>
                          <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.description}</p>
                        </div>

                        {/* Price Display */}
                        <div className="pt-2 pb-4 border-b border-slate-100">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold text-[#0A192F]">₹{pricing.price.toLocaleString("en-IN")}</span>
                            <span className="text-xs font-medium text-slate-500">
                              / {selectedDuration === "MONTHLY" ? "month" : selectedDuration.toLowerCase().replace("_", " ")}
                            </span>
                          </div>
                          {pricing.discountPercent > 0 && (
                            <p className="text-xs text-emerald-600 font-semibold mt-1">
                              Save {pricing.discountPercent}% off regular rate!
                            </p>
                          )}
                        </div>

                        {/* Entitlements */}
                        <ul className="space-y-3 text-xs text-slate-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            Full Standalone Storefront & Admin
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            Unlimited Products, Orders & Inventory
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            Cash on Delivery & Bank Transfer
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 ${
                                plan.entitlements.paymentGateways
                                  ? "text-emerald-600"
                                  : "text-slate-300"
                              }`}
                            />
                            <span className={plan.entitlements.paymentGateways ? "font-medium text-slate-800" : "text-slate-400"}>
                              Online Gateways (Razorpay, PhonePe, Stripe)
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 ${
                                plan.entitlements.courierIntegrations
                                  ? "text-emerald-600"
                                  : "text-slate-300"
                              }`}
                            />
                            <span className={plan.entitlements.courierIntegrations ? "font-medium text-slate-800" : "text-slate-400"}>
                              Integrated Shipping (Shiprocket, Delhivery, DTDC)
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            Admin Staff Seats: {plan.entitlements.maxAdminUsers} User{plan.entitlements.maxAdminUsers > 1 ? "s" : ""}
                          </li>
                        </ul>
                      </div>

                      <div className="pt-8">
                        <Link
                          href={`/checkout?plan=${plan.tier}&duration=${selectedDuration}`}
                          className={`w-full py-3 rounded-xl font-semibold text-sm text-center block transition-all ${
                            isGrow
                              ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md hover:shadow-lg"
                              : "bg-[#0A192F] hover:bg-[#1E293B] text-white"
                          }`}
                        >
                          Select {plan.name}
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Workflow</span>
              <h2 className="text-3xl font-extrabold text-[#0A192F]">Four Steps to Launch</h2>
              <p className="text-slate-600 text-base">
                Self-hosting without the headaches. Our 5-minute setup wizard takes care of database initialization and license verification automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0A192F] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  1
                </div>
                <h4 className="font-bold text-lg text-slate-900">Get Your License</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Purchase an AVRO subscription. Receive your unique cryptographic license key instantly in your dashboard.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0A192F] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  2
                </div>
                <h4 className="font-bold text-lg text-slate-900">Prepare Server</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provision your domain and any standard Linux VPS (Ubuntu/Debian) or Docker host of your choice.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0A192F] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  3
                </div>
                <h4 className="font-bold text-lg text-slate-900">Run Setup Wizard</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Access your server URL, enter your license key to activate, and set up your master store administrator account.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  4
                </div>
                <h4 className="font-bold text-lg text-slate-900">Sell Online</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Upload products, configure your payment gateway credentials, and start processing orders on your own domain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Got Questions?</span>
              <h2 className="text-3xl font-extrabold text-[#0A192F]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="font-bold text-base text-slate-900">Does TECHNEXT provide domain and hosting?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No. TECHNEXT develops and maintains the AVRO software. Customers independently purchase their own domain and hosting. This ensures you maintain 100% control over your infrastructure and operational assets.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="font-bold text-base text-slate-900">How do software updates work for self-hosted instances?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As long as your AVRO subscription is active, your store automatically detects new releases and security patches from TECHNEXT Central. Updates can be applied cleanly via Docker or automated git-pull scripts.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="font-bold text-base text-slate-900">Can I transfer my license to another domain?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes! If your brand rebrands or changes domain names, you can request a domain re-binding through the TECHNEXT Central Control Panel or customer support.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="font-bold text-base text-slate-900">Are there any transaction fees?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zero. TECHNEXT never charges transaction commissions on your sales. You only pay your chosen AVRO subscription tier and standard payment gateway processing fees directly to Razorpay, PhonePe, or Stripe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
