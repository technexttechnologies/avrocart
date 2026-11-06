"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  CreditCard,
  Key,
  TrendingUp,
  Server,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Radio,
  FileText,
  Bell,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";

export default function CentralDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/control/dashboard")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="flex items-center gap-3 text-slate-500 text-sm">
          <Activity className="w-5 h-5 text-[#2563EB] animate-spin" />
          <span>Synchronizing AVRO Central command metrics...</span>
        </div>
      </div>
    );
  }

  const { stats, planStats, recentLogs, recentCustomers, fleet, quotes, broadcasts, recentAuditLogs } =
    data || {};

  return (
    <div className="space-y-8">
      {/* Active Broadcast Announcement Banner (if any) */}
      {broadcasts?.latest && (
        <div
          className={`p-4 rounded-2xl border text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm ${
            broadcasts.latest.severity === "CRITICAL"
              ? "bg-rose-50 border-rose-200 text-rose-950"
              : broadcasts.latest.severity === "WARNING"
              ? "bg-amber-50 border-amber-200 text-amber-950"
              : "bg-blue-50 border-blue-200 text-blue-950"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-xl text-white ${
                broadcasts.latest.severity === "CRITICAL"
                  ? "bg-rose-600"
                  : broadcasts.latest.severity === "WARNING"
                  ? "bg-amber-600"
                  : "bg-blue-600"
              }`}
            >
              <Bell className="w-4 h-4 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wide uppercase text-[10px]">
                  ACTIVE SYSTEM BROADCAST ({broadcasts.latest.targetTier} TIER)
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {new Date(broadcasts.latest.createdAt).toLocaleTimeString()}
                </span>
              </div>
              <p className="font-bold text-slate-900 mt-0.5">{broadcasts.latest.title}</p>
              <p className="text-slate-600 line-clamp-1">{broadcasts.latest.message}</p>
            </div>
          </div>
          <Link
            href="/control/broadcasts"
            className="flex-shrink-0 px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-800 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            Manage Broadcasts
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Top Welcome & Notification */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-[#0A192F]">Central Command Center</h1>
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-blue-50 text-[#2563EB] border border-blue-200 rounded-full">
              ENTERPRISE v1.2
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Global governance of customer subscriptions, cryptographic licenses, fleet telemetry, and client deployments.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/control/telemetry"
            className="px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Radio className="w-3.5 h-3.5" />
            Live Telemetry ({fleet?.healthy || 0} Online)
          </Link>
          <Link
            href="/control/licenses"
            className="px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Key className="w-3.5 h-3.5 text-amber-400" />
            Issue License
          </Link>
          <Link
            href="/control/quotes"
            className="px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            Quotes Studio
          </Link>
        </div>
      </div>

      {/* Primary KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Total Revenue</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">₹{stats?.totalRevenue?.toLocaleString("en-IN")}</p>
          <span className="text-[11px] text-emerald-600 font-semibold">MRR: ₹{stats?.mrr?.toLocaleString("en-IN")}/mo</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Active Subscriptions</span>
            <CreditCard className="w-4 h-4 text-[#2563EB]" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{stats?.activeSubscriptions}</p>
          <span className="text-[11px] text-slate-500">
            {stats?.expiredSubscriptions} expired / past due
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Active Licenses</span>
            <Key className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{stats?.activeLicenses}</p>
          <span className="text-[11px] text-amber-600 font-semibold">
            {stats?.suspendedLicenses} suspended licenses
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-bold uppercase tracking-wider">Active Deployments</span>
            <Server className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{stats?.totalDeployments}</p>
          <span className="text-[11px] text-emerald-600 font-semibold">Bound to customer domains</span>
        </div>
      </div>

      {/* Advanced Enterprise Operations Strip */}
      <div className="bg-[#0A192F] text-white rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              FLEET TELEMETRY & SECURITY MATRIX
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Customer Node Health & Bespoke Pipeline
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Real-time cryptographic verification tracking across all distributed AVROCART runtimes. Zero multi-tenancy architecture with decentralized customer autonomy.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-300">Healthy Nodes</span>
              <p className="text-2xl font-extrabold text-white">{fleet?.healthy || 0}</p>
              <span className="text-[10px] text-slate-400">Ping &le; 48h</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-300">Grace Period</span>
              <p className="text-2xl font-extrabold text-white">{fleet?.grace || 0}</p>
              <span className="text-[10px] text-slate-400">48h - 72h buffer</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-300">Quotes Pipeline</span>
              <p className="text-2xl font-extrabold text-white">₹{((quotes?.pipelineValue || 0) / 1000).toFixed(0)}k</p>
              <span className="text-[10px] text-slate-400">{quotes?.pending || 0} pending review</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center space-y-1">
              <span className="text-[10px] uppercase font-bold text-blue-300">Security Stream</span>
              <p className="text-2xl font-extrabold text-white">{recentAuditLogs?.length || 0}</p>
              <span className="text-[10px] text-slate-400">Recent audit ops</span>
            </div>
          </div>
        </div>

        {/* Quick Launch Buttons */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
          <Link
            href="/control/telemetry"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-all text-slate-200 hover:text-white border border-white/5"
          >
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-400" />
              <span>Fleet Telemetry</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>

          <Link
            href="/control/quotes"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-all text-slate-200 hover:text-white border border-white/5"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Quotes & Invoicing</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>

          <Link
            href="/control/broadcasts"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-all text-slate-200 hover:text-white border border-white/5"
          >
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <span>Push Broadcasts</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>

          <Link
            href="/control/security"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold transition-all text-slate-200 hover:text-white border border-white/5"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-400" />
              <span>Audit Vault</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Plan Breakdown & Bespoke Quotes Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Plan Distribution */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <h3 className="text-base font-bold text-[#0A192F] flex items-center justify-between">
            <span>Subscription Distribution</span>
            <Link href="/control/subscriptions" className="text-xs text-[#2563EB] hover:underline font-semibold">
              View All
            </Link>
          </h3>

          <div className="space-y-4">
            {planStats?.map((p: any) => (
              <div key={p.tier} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-700 font-bold">{p.name} ({p.tier})</span>
                  <span className="text-slate-900 font-extrabold">{p.count} active</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      p.tier === "PLUS"
                        ? "bg-purple-600"
                        : p.tier === "GROW"
                        ? "bg-[#2563EB]"
                        : "bg-slate-600"
                    }`}
                    style={{
                      width: `${stats?.activeSubscriptions ? (p.count / stats.activeSubscriptions) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Self-Hosting Infrastructure Policy</p>
            <p>TECHNEXT enforces zero multi-tenancy. Every active subscription links to an independent software runtime.</p>
          </div>
        </div>

        {/* Customization Quotes Pipeline */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2563EB]" />
                <span>Bespoke Engineering Pipeline</span>
              </h3>
              <p className="text-xs text-slate-500">Custom enterprise features, integrations, and statements of work.</p>
            </div>
            <Link href="/control/quotes" className="text-xs text-[#2563EB] hover:underline font-bold flex items-center gap-1">
              Customization Studio
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Pipeline Value</span>
              <p className="text-xl font-extrabold text-[#0A192F]">₹{quotes?.pipelineValue?.toLocaleString("en-IN")}</p>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pending Quotes</span>
              <p className="text-xl font-extrabold text-amber-600">{quotes?.pending} Quotes</p>
            </div>
            <Link
              href="/control/quotes"
              className="px-3 py-1.5 rounded-lg bg-[#0A192F] text-white text-xs font-bold hover:bg-[#1E293B] transition-colors"
            >
              + Create Quote
            </Link>
          </div>

          {/* Recent Customers Table */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase">
                  <th className="pb-2">Customer</th>
                  <th className="pb-2">Company</th>
                  <th className="pb-2">Active Plan</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentCustomers?.slice(0, 4).map((c: any) => {
                  const activeSub = c.subscriptions?.[0];
                  return (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5">
                        <span className="font-bold text-slate-900 block">{c.name}</span>
                        <span className="text-[11px] text-slate-400">{c.email}</span>
                      </td>
                      <td className="py-2.5 text-slate-600">{c.companyName || "—"}</td>
                      <td className="py-2.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                          {activeSub?.plan?.name || "No Plan"}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            c.status === "ACTIVE"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Telemetry Validations & Security Audit Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Heartbeat Validation Logs */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-600" />
                <span>Live Node Pings & Heartbeats</span>
              </h3>
              <p className="text-xs text-slate-500">Real-time pings and heartbeat checks from customer-hosted servers.</p>
            </div>
            <Link href="/control/telemetry" className="text-xs text-[#2563EB] font-bold hover:underline">
              Inspect Telemetry
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase">
                  <th className="pb-2">Timestamp</th>
                  <th className="pb-2">License Key</th>
                  <th className="pb-2">Domain</th>
                  <th className="pb-2">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentLogs?.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-slate-400">
                      No validation events recorded yet.
                    </td>
                  </tr>
                ) : (
                  recentLogs?.slice(0, 5).map((log: any) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 text-slate-500 font-mono">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="py-2.5 font-mono font-semibold text-slate-800">{log.licenseKey}</td>
                      <td className="py-2.5 font-mono text-slate-600">{log.domain || "—"}</td>
                      <td className="py-2.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            log.outcome === "SUCCESS"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {log.outcome}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Cryptographic Audit Stream */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-600" />
                <span>Security Audit Vault</span>
              </h3>
              <p className="text-xs text-slate-500">HMAC-SHA256 signature events & operator actions.</p>
            </div>
            <Link href="/control/security" className="text-xs text-[#2563EB] font-bold hover:underline">
              View Audit Log
            </Link>
          </div>

          <div className="space-y-3">
            {recentAuditLogs?.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">No operator actions logged yet.</p>
            ) : (
              recentAuditLogs?.map((log: any) => (
                <div
                  key={log.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-slate-800 font-mono text-[11px]">{log.action}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-slate-600 line-clamp-1">{log.details}</p>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                    <span>{log.adminEmail}</span>
                    <span className="font-mono">{log.ipAddress}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
