import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import Link from "next/link";
import {
  Database,
  Server,
  Layers,
  CreditCard,
  Truck,
  Palette,
  ShieldCheck,
  Cpu,
  BarChart3,
  Sliders,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function FeaturesPage() {
  const featureList = [
    {
      icon: Database,
      title: "100% Dedicated Customer Database",
      desc: "Each installation provisions its own isolated database with PostgreSQL / SQLite. No shared multi-tenant tables, ensuring complete data security and compliance.",
    },
    {
      icon: Server,
      title: "VPS & Docker Portability",
      desc: "Deploy on any standard cloud or bare-metal VPS (Ubuntu, Debian, AWS EC2, DigitalOcean, Hetzner). Full root access, customized caching, and zero platform lock-in.",
    },
    {
      icon: CreditCard,
      title: "Private Payment Gateways",
      desc: "Configure Razorpay, PhonePe, and Stripe directly on your server. API keys never touch TECHNEXT central servers. Full support for Cash on Delivery and Bank Transfers.",
    },
    {
      icon: Truck,
      title: "Integrated Courier & Shipping",
      desc: "Direct courier adapters for Shiprocket, Delhivery, and DTDC. Automatic AWB tracking, pincode serviceability checks, and shipping label printing.",
    },
    {
      icon: Palette,
      title: "Live Theme Engine & Customizer",
      desc: "Switch between 3 professionally crafted base themes (Modern Minimal, Boutique Luxury, Tech Apex) or customize colors, fonts, banners, and layout grids with live preview.",
    },
    {
      icon: Sliders,
      title: "Variants & Inventory Matrix",
      desc: "Manage multi-dimensional variants (Size, Color, Material, Capacity) with separate pricing, custom SKUs, stock levels, and low-inventory notification alerts.",
    },
    {
      icon: BarChart3,
      title: "Storefront Analytics & Invoicing",
      desc: "Comprehensive daily, weekly, and monthly sales reports. Download and print tax invoices with one click directly from the back-office order workflow.",
    },
    {
      icon: ShieldCheck,
      title: "Offline Grace Period Protection",
      desc: "Our heartbeat caching protocol provides 72-hour grace intervals so your store never experiences downtime even if your server's outbound connection blips.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNav />

      <main className="flex-grow">
        {/* Header */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Platform Capabilities</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Engineered for E-Commerce Sovereignty
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore the complete architectural features of AVRO by TECHNEXT. Every tool you need to launch, scale, and control your e-commerce empire.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A192F]">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Ready to build on your own server?</h3>
                <p className="text-xs text-slate-300">Choose an AVRO plan and get your license key in minutes.</p>
              </div>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
              >
                View Plans & Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
