import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import Link from "next/link";
import { CheckCircle2, Server, ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Select an AVRO Subscription Plan",
      desc: "Choose between AVRO Basic, Grow, or Plus according to your business needs and preferred billing cycle. Your master license key is issued automatically upon payment confirmation.",
    },
    {
      num: "02",
      title: "Provision Your Domain and Hosting",
      desc: "Unlike restrictive SaaS builders, TECHNEXT empowers you to choose your own host. Purchase a domain from any registrar (e.g. GoDaddy, Namecheap) and a standard VPS (Ubuntu/Debian) or cloud VM.",
    },
    {
      num: "03",
      title: "Run the Automated 5-Minute Setup Wizard",
      desc: "Deploy the AVRO application code or launch via Docker. Navigate to your domain, paste your master license key, and the setup wizard initializes your database schema and verifies domain binding.",
    },
    {
      num: "04",
      title: "Configure Gateways & Launch Your Store",
      desc: "Enter your private Razorpay, PhonePe, or Stripe keys. Set up shipping adapters, select your theme, add products, and start processing customer orders with 0% platform commissions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicNav />

      <main className="flex-grow">
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Self-Hosted Workflow</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              How AVRO Works
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Clear, transparent, and completely under your control. Learn how TECHNEXT powers your independent e-commerce deployment.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-8">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0A192F] text-white flex items-center justify-center font-extrabold text-2xl flex-shrink-0">
                    {s.num}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-xl font-bold text-[#0A192F]">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Comparison Table */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-[#0A192F] text-center">
                AVRO Self-Hosted vs. Traditional Hosted SaaS
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-300 text-slate-500 uppercase tracking-wider">
                      <th className="py-3 px-4">Feature</th>
                      <th className="py-3 px-4 text-[#2563EB] font-bold">AVRO by TECHNEXT</th>
                      <th className="py-3 px-4 text-slate-500">Shared Multi-Tenant SaaS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-800">Database Storage</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">100% Dedicated & Private</td>
                      <td className="py-3 px-4 text-slate-500">Shared with thousands of merchants</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-800">Transaction Fees</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">0% (Zero platform commission)</td>
                      <td className="py-3 px-4 text-rose-600">0.5% to 2.0% per transaction</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-800">Payment Gateway Secrets</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">Stored only on your server</td>
                      <td className="py-3 px-4 text-slate-500">Stored on 3rd-party SaaS servers</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-800">Server & Cloud Choice</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">Any VPS, AWS, Hetzner, etc.</td>
                      <td className="py-3 px-4 text-slate-500">Proprietary locked infrastructure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
