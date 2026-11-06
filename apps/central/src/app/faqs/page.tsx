import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FaqsPage() {
  const faqs = [
    {
      q: "What does self-hosted e-commerce mean?",
      a: "Self-hosted means that the AVRO software application runs directly on your own server or cloud VPS with your own database. Unlike Shopify, BigCommerce, or Wix, you are not leasing a tenancy on a shared system. You own the operating environment and retain total control of customer data.",
    },
    {
      q: "Does TECHNEXT provide hosting or domains?",
      a: "No. TECHNEXT develops and maintains the AVRO software. Customers independently purchase their domain and hosting. We can guide you on setup through optional setup assistance, but you remain the primary account owner of your infrastructure.",
    },
    {
      q: "How are software updates delivered?",
      a: "When your subscription is active, your AVRO Store Admin notifies you of updates. You can trigger updates with a simple Docker restart or automated update script without breaking your custom database data.",
    },
    {
      q: "Can I use Razorpay, PhonePe, or Stripe without sharing credentials?",
      a: "Yes! This is a core architectural requirement of AVRO. Your payment gateway keys and webhook secrets are saved exclusively in your local server database and are never transmitted to TECHNEXT Central.",
    },
    {
      q: "What happens if my server loses internet connection to TECHNEXT?",
      a: "AVRO uses a resilient 72-hour offline grace period cache. Storefront customer browsing and orders continue processing smoothly. Once your server's outbound network connection is restored, heartbeat re-validates automatically in the background.",
    },
    {
      q: "Can I upgrade my plan from Basic to Grow or Plus?",
      a: "Yes. You can upgrade your plan at any time through the customer portal or TECHNEXT support. Once upgraded, your new feature entitlements (e.g. online payment gateways or couriers) unlock immediately on your next heartbeat sync.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNav />

      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Knowledge Base</span>
            <h1 className="text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-sm">
              Everything you need to know about AVRO self-hosted architecture, licensing, and deployment.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-[#0A192F]">{faq.q}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-4">Have another question not answered here?</p>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-[#0A192F] text-white text-xs font-bold hover:bg-[#1E293B] transition-colors inline-flex items-center gap-2"
            >
              Contact TECHNEXT Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
