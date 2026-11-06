"use client";

import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, DollarSign, PieChart, Layers, ArrowUpRight } from "lucide-react";

export default function AnalyticsControlPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/control/dashboard")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) setStats(res);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Loading financial analytics...</div>;
  }

  const { stats: s, planStats } = stats || {};

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-[#0A192F]">Financial & Growth Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Revenue reports, MRR breakdowns, subscription velocity, and setup fee performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gross Contracted Revenue</span>
          <p className="text-3xl font-extrabold text-[#0A192F]">₹{s?.totalRevenue?.toLocaleString("en-IN")}</p>
          <span className="text-xs text-emerald-600 font-semibold">100% Collected Online</span>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Normalized MRR</span>
          <p className="text-3xl font-extrabold text-[#2563EB]">₹{s?.mrr?.toLocaleString("en-IN")}</p>
          <span className="text-xs text-slate-500">Monthly recurring software run-rate</span>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Deployments</span>
          <p className="text-3xl font-extrabold text-purple-700">{s?.totalDeployments}</p>
          <span className="text-xs text-slate-500">Live independent self-hosted nodes</span>
        </div>
      </div>

      {/* Plan Performance Breakdown Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#2563EB]" />
          Plan-Wise License Volume & Contribution
        </h3>

        <div className="space-y-4 pt-2">
          {planStats?.map((p: any) => (
            <div key={p.tier} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
              <div>
                <strong className="text-slate-900 block text-sm">{p.name} ({p.tier})</strong>
                <span className="text-slate-500">Active customer deployments using this tier</span>
              </div>
              <div className="text-right">
                <span className="text-base font-extrabold text-[#0A192F]">{p.count} Instances</span>
                <span className="block text-[10px] text-emerald-600 font-bold">In Good Standing</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
