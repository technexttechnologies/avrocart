import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import Link from "next/link";
import { Wrench, Code2, Cpu, FileCheck, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function AddonsPage() {
  const services = [
    {
      title: "Bespoke Homepage & UI Design",
      desc: "Custom-tailored storefront layouts crafted by TECHNEXT UI designers to match your brand's unique identity guidelines.",
      pricing: "One-time Quote",
    },
    {
      title: "Custom Checkout & ERP Integrations",
      desc: "Connect your self-hosted AVRO instance directly to custom ERPs (SAP, Tally, Zoho Books, Microsoft Dynamics) or internal warehousing software.",
      pricing: "One-time Quote",
    },
    {
      title: "Private Carrier & Gateway Adapters",
      desc: "Require an international gateway or localized regional courier not included in standard builds? TECHNEXT engineers develop dedicated adapters.",
      pricing: "One-time Quote",
    },
    {
      title: "Complete Server Migration & Hardening",
      desc: "Turnkey migration from Shopify, WooCommerce, or Magento to your independent AVRO server. Includes database import, SSL, and Nginx caching tuning.",
      pricing: "From ₹4,999 One-time",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNav />

      <main className="flex-grow">
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Professional Engineering</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Add-ons & Custom Engineering
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Customization is billed as transparent, one-time fees—never recurring subscription lock-ins. Our dedicated engineering team builds features tailored to your operational workflows.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A192F]">{srv.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{srv.pricing}</span>
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1"
                    >
                      Request Quotation <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quotation Workflow Banner */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#0A192F]">Have a specific business requirement?</h4>
                <p className="text-xs text-slate-600 max-w-xl">
                  Submit your scope of work. TECHNEXT prepares a formal itemized quotation for your review. After approval, work is executed cleanly and delivered directly to your instance.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm whitespace-nowrap"
              >
                Submit Customization Request
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
