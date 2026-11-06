"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import { ShieldCheck, Store, Key, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@technext.co");
  const [password, setPassword] = useState("admin123");
  const [userRole, setUserRole] = useState<"ADMIN" | "CUSTOMER">("ADMIN");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRole === "ADMIN") {
      router.push("/control/login");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PublicNav />

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-1">
              <img
                src="/avro-logo.png"
                alt="AVROCART by TECHNEXT"
                className="h-12 w-auto object-contain"
              />
            </div>
            <h1 className="text-2xl font-extrabold text-[#0A192F]">Platform Sign In</h1>
            <p className="text-xs text-slate-500">
              Access the TECHNEXT Central Control Panel or your customer license account.
            </p>
          </div>

          {/* Quick role selection tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setUserRole("ADMIN");
                setEmail("admin@technext.co");
                setPassword("admin123");
              }}
              className={`py-2 rounded-md transition-colors ${
                userRole === "ADMIN" ? "bg-white text-slate-900 shadow-sm font-bold" : "text-slate-500"
              }`}
            >
              Technext Admin
            </button>
            <button
              type="button"
              onClick={() => {
                setUserRole("CUSTOMER");
                setEmail("rajesh@apexretail.in");
                setPassword("customer123");
              }}
              className={`py-2 rounded-md transition-colors ${
                userRole === "CUSTOMER" ? "bg-white text-slate-900 shadow-sm font-bold" : "text-slate-500"
              }`}
            >
              Store Licensee
            </button>
          </div>

          {userRole === "ADMIN" ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>High-Security 2FA Gateway Active</span>
                </div>
                <p className="text-blue-800 leading-relaxed text-[11px]">
                  Central Control requires multi-factor authentication, anti-brute-force rate limiting, and 2FA PIN verification.
                </p>
              </div>

              <Link
                href="/control/login"
                className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group"
              >
                <span>Launch Master Security Portal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>Enter License Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
