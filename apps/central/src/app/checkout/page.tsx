"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import {
  CheckCircle2,
  ShieldCheck,
  Key,
  Copy,
  Download,
  ArrowRight,
  Terminal,
  Loader2,
  AlertCircle,
  Tag,
} from "lucide-react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "GROW";
  const initialDuration = searchParams.get("duration") || "YEARLY";
  const initialSetup = searchParams.get("setup") === "true";

  const [planTier, setPlanTier] = useState(initialPlan);
  const [duration, setDuration] = useState(initialDuration);
  const [hasSetup, setHasSetup] = useState(initialSetup);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState<string | null>(null);

  // Form fields
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("Password@123");

  // State
  const [pricingData, setPricingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderResult, setOrderResult] = useState<any>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    fetch("/api/v1/pricing")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPricingData(data);
        }
      });
  }, []);

  // Compute live totals
  const currentPlan = pricingData?.plans?.find((p: any) => p.tier === planTier);
  const basePrice = currentPlan?.pricing?.[duration]?.price || 0;
  const setupFee = hasSetup ? pricingData?.setupAssistance?.price || 1499 : 0;
  let discountAmount = 0;
  if (promoApplied === "TECHNEXT10") {
    discountAmount = basePrice * 0.1;
  } else if (promoApplied === "LAUNCH50") {
    discountAmount = Math.min(1000, basePrice * 0.5);
  }
  const totalAmount = Math.max(0, basePrice - discountAmount + setupFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === "TECHNEXT10" || clean === "LAUNCH50") {
      setPromoApplied(clean);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid promotional code. Try 'TECHNEXT10' or 'LAUNCH50'");
    }
  };

  const handleCompleteOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/v1/checkout/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planTier,
          duration,
          hasSetupAssistance: hasSetup,
          promoCode: promoApplied,
          customerName,
          customerEmail,
          companyName,
          phone,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to process subscription.");
      }

      setOrderResult(data.orderSummary);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PublicNav />

      <main className="flex-grow py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {orderResult ? (
            /* SUCCESS & LICENSE PRESENTATION SCREEN */
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 animate-fadeIn">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-extrabold text-[#0A192F]">Subscription Activated!</h1>
                <p className="text-slate-600 text-sm max-w-lg mx-auto">
                  Thank you, <strong>{orderResult.customer.name}</strong>. Your AVRO license has been generated and registered with TECHNEXT Central.
                </p>
              </div>

              {/* License Key Card */}
              <div className="p-6 rounded-xl bg-slate-900 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    <Key className="w-4 h-4" />
                    Your Master AVRO License Key
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-base text-emerald-400">
                  <span className="select-all break-all">{orderResult.licenseKey}</span>
                  <button
                    onClick={() => copyToClipboard(orderResult.licenseKey)}
                    className="ml-4 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-sans font-medium flex items-center gap-1.5 transition-colors"
                  >
                    {copiedKey ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedKey ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <div>
                    <span className="block text-slate-500">Plan</span>
                    <strong className="text-white">{orderResult.plan}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-500">Duration</span>
                    <strong className="text-white">{orderResult.duration}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-500">Registered Email</span>
                    <strong className="text-white">{orderResult.customer.email}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-500">Valid Until</span>
                    <strong className="text-white">{new Date(orderResult.expiresAt).toLocaleDateString()}</strong>
                  </div>
                </div>
              </div>

              {/* Next Steps Guide */}
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 space-y-4">
                <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#2563EB]" />
                  Installation & Activation Steps on Your Server
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-xs text-slate-700 leading-relaxed">
                  <li>Deploy the AVRO software package to your hosting server or Docker VM.</li>
                  <li>Visit your domain or server URL (e.g. <code>http://your-domain.com/setup</code>).</li>
                  <li>Enter the license key above: <code>{orderResult.licenseKey}</code>.</li>
                  <li>The setup wizard will contact TECHNEXT Central, verify your entitlement, and bind your domain!</li>
                </ol>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/how-it-works"
                    className="px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                  >
                    View Server Setup Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/docs"
                    className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                  >
                    Developer Documentation
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* ORDER FORM & SUMMARY */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#0A192F]">Complete Subscription</h1>
                  <p className="text-xs text-slate-500 mt-1">
                    Enter your organization details. Your AVRO software license is generated instantly upon verification.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleCompleteOrder} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="vikram@company.com"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Store Name</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Horizon Retailers"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 00000"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Plan & Duration Adjustment */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Selected Plan</label>
                      <select
                        value={planTier}
                        onChange={(e) => setPlanTier(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none"
                      >
                        <option value="BASIC">AVRO Basic</option>
                        <option value="GROW">AVRO Grow (Recommended)</option>
                        <option value="PLUS">AVRO Plus</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Billing Interval</label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none"
                      >
                        <option value="MONTHLY">Monthly</option>
                        <option value="SIX_MONTHS">6 Months (10% Off)</option>
                        <option value="YEARLY">1 Year (20% Off)</option>
                        <option value="TWO_YEARS">2 Years (30% Off)</option>
                      </select>
                    </div>
                  </div>

                  {/* Setup Assistance Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasSetup}
                        onChange={(e) => setHasSetup(e.target.checked)}
                        className="w-4 h-4 text-[#2563EB] rounded border-slate-300"
                      />
                      <span className="text-xs text-slate-700">
                        Include optional setup assistance (+₹{pricingData?.setupAssistance?.price || 1499})
                      </span>
                    </label>
                  </div>

                  {/* Payment Simulator Note */}
                  <div className="p-3 rounded-lg bg-slate-100 text-[11px] text-slate-600 space-y-1">
                    <p className="font-semibold text-slate-800">Secure Payment Verification</p>
                    <p>In accordance with TECHNEXT policy, server verifies payment confirmation before automatically minting the software license.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying & Generating License...
                      </>
                    ) : (
                      <>
                        Pay & Generate License (₹{totalAmount.toLocaleString("en-IN")})
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Column: Order Summary & Coupon Code */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
                  <h3 className="text-base font-bold text-[#0A192F]">Order Summary</h3>

                  <div className="space-y-3 text-xs border-b border-slate-100 pb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">{currentPlan?.name || "AVRO Plan"} ({duration})</span>
                      <strong className="text-slate-900">₹{basePrice.toLocaleString("en-IN")}</strong>
                    </div>

                    {hasSetup && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Setup Assistance Fee</span>
                        <strong className="text-slate-900">₹{setupFee.toLocaleString("en-IN")}</strong>
                      </div>
                    )}

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Promo Discount ({promoApplied})</span>
                        <strong>-₹{discountAmount.toLocaleString("en-IN")}</strong>
                      </div>
                    )}
                  </div>

                  {/* Promo Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. TECHNEXT10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </form>

                  {/* Total */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-bold text-slate-800">Final Total</span>
                    <span className="text-2xl font-extrabold text-[#0A192F]">₹{totalAmount.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Instant Cryptographic License Generation</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
