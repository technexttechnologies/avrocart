"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Key,
  BadgePercent,
  Cpu,
  LifeBuoy,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  LogOut,
  Radio,
  FileText,
  Bell,
  Lock,
} from "lucide-react";

export default function ControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { label: "Overview Dashboard", href: "/control", icon: LayoutDashboard },
    { label: "Fleet Telemetry & Nodes", href: "/control/telemetry", icon: Radio },
    { label: "Customer Accounts", href: "/control/customers", icon: Users },
    { label: "Subscriptions", href: "/control/subscriptions", icon: CreditCard },
    { label: "License Keys & Domains", href: "/control/licenses", icon: Key },
    { label: "Customization Quotes", href: "/control/quotes", icon: FileText },
    { label: "System Broadcasts", href: "/control/broadcasts", icon: Bell },
    { label: "Dynamic Pricing Engine", href: "/control/pricing", icon: BadgePercent },
    { label: "Software Releases", href: "/control/versions", icon: Cpu },
    { label: "Support Tickets", href: "/control/tickets", icon: LifeBuoy },
    { label: "Financial Analytics", href: "/control/analytics", icon: BarChart3 },
    { label: "Security & Audit Vault", href: "/control/security", icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col md:flex-row font-sans text-slate-800">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0A192F] text-slate-300 flex-shrink-0 flex flex-col justify-between border-r border-slate-800">
        <div>
          {/* Logo & Header */}
          <div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
            <Link href="/control" className="flex flex-col gap-1.5">
              <div className="bg-white px-2.5 py-1 rounded-lg inline-block shadow-xs">
                <img
                  src="/avro-logo.png"
                  alt="AVROCART by TECHNEXT"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase">
                CENTRAL CONTROL PANEL
              </span>
            </Link>
          </div>

          {/* Admin badge */}
          <div className="px-6 py-4 border-b border-slate-800/60 bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                TN
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">Technext Master Admin</span>
                <span className="text-[10px] text-slate-400">admin@technext.co</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom utility links */}
        <div className="p-4 border-t border-slate-800 space-y-2 text-xs">
          <Link
            href="/"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <span>Public Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/docs"
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-950/60 text-blue-400 hover:text-blue-300 hover:bg-blue-900/60 transition-colors"
          >
            <span>System Documentation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-16 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>TECHNEXT TECHNOLOGIES</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-slate-800">
              {menuItems.find((i) => i.href === pathname)?.label || "Administration"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Central Licensing Authority Live
            </span>
          </div>
        </header>

        <div className="p-6 sm:p-8 flex-1">{children}</div>
      </main>
    </div>
  );
}
