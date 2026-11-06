"use client";

import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, Layers, CreditCard, ShoppingBag } from "lucide-react";

export default function ReportsAdminPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/reports")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) setData(res);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Generating sales reports...</div>;
  }

  const { totalRevenue, orderCount, paymentMethods = {}, statusCounts = {}, topProducts = [] } = data || {};

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-[#0A192F]">Sales & Performance Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Detailed sales breakdowns, payment channel distribution, and high-velocity product reports.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gross Sales Realized</span>
          <p className="text-3xl font-extrabold text-[#0A192F]">₹{totalRevenue?.toLocaleString("en-IN")}</p>
          <span className="text-xs text-emerald-600 font-semibold">{orderCount} confirmed orders</span>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Order Value (AOV)</span>
          <p className="text-3xl font-extrabold text-[#2563EB]">
            ₹{orderCount > 0 ? Math.round(totalRevenue / orderCount).toLocaleString("en-IN") : 0}
          </p>
          <span className="text-xs text-slate-500">Per completed transaction</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Methods Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#2563EB]" />
            Revenue by Payment Method
          </h3>

          <div className="space-y-3 pt-2 text-xs">
            {Object.entries(paymentMethods).map(([pm, amt]: any) => (
              <div key={pm} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <span className="font-bold text-slate-800">{pm}</span>
                <span className="font-extrabold text-slate-900">₹{amt.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Products */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-600" />
            Top Products by Revenue
          </h3>

          <div className="space-y-3 pt-2 text-xs">
            {topProducts.length === 0 ? (
              <p className="text-slate-400">No product sales yet.</p>
            ) : (
              topProducts.map((p: any, i: number) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <div>
                    <strong className="text-slate-900 block line-clamp-1">{p.title}</strong>
                    <span className="text-[10px] text-slate-500">{p.count} units sold</span>
                  </div>
                  <span className="font-extrabold text-[#0A192F]">₹{p.revenue.toLocaleString("en-IN")}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
