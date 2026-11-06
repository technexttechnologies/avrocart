"use client";

import { useEffect, useState } from "react";
import { CreditCard, CheckCircle2, AlertTriangle, ArrowUpRight, DollarSign, Clock, Shield } from "lucide-react";

export default function SubscriptionsControlPage() {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Upgrade modal
  const [targetSub, setTargetSub] = useState<any | null>(null);
  const [newPlanId, setNewPlanId] = useState("");
  const [customPriceVal, setCustomPriceVal] = useState("");

  const loadData = () => {
    setLoading(true);
    fetch("/api/v1/control/subscriptions")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setSubscriptions(res.subscriptions);
          setPlans(res.plans);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAction = async (id: string, action: string, extra?: any) => {
    await fetch("/api/v1/control/subscriptions", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action, ...extra }),
    });
    loadData();
  };

  const handleUpgradeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetSub || !newPlanId) return;
    await handleAction(targetSub.id, "UPGRADE_PLAN", { newPlanId });
    setTargetSub(null);
  };

  const handleCustomPriceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetSub || !customPriceVal) return;
    await handleAction(targetSub.id, "CUSTOM_PRICE", { customAmount: customPriceVal });
    setTargetSub(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-[#0A192F]">Subscription Management</h1>
        <p className="text-xs text-slate-500 mt-1">
          Monitor recurring subscriptions, apply custom enterprise billing terms, manage expiry, or upgrade plan tiers.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Plan & Tier</th>
                <th className="py-3.5 px-4">Duration</th>
                <th className="py-3.5 px-4">Billed Amount</th>
                <th className="py-3.5 px-4">Validity Range</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">Loading subscriptions...</td>
                </tr>
              ) : subscriptions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">No subscriptions on record.</td>
                </tr>
              ) : (
                subscriptions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-900 block">{sub.customer?.name}</span>
                      <span className="text-[10px] text-slate-400">{sub.customer?.email}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                        {sub.plan?.name}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-700">{sub.duration}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      ₹{sub.amount.toLocaleString("en-IN")}
                      {sub.hasSetupAssistance && (
                        <span className="text-[10px] text-blue-600 block">+Setup (₹{sub.setupFee})</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {new Date(sub.startDate).toLocaleDateString()} — <strong>{new Date(sub.endDate).toLocaleDateString()}</strong>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          sub.status === "ACTIVE"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {sub.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-1 whitespace-nowrap">
                      <button
                        onClick={() => {
                          setTargetSub(sub);
                          setNewPlanId(sub.planId);
                          setCustomPriceVal(String(sub.amount));
                        }}
                        className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                      >
                        Manage / Upgrade
                      </button>
                      <button
                        onClick={() => handleAction(sub.id, "EXTEND", { extendDays: 30 })}
                        className="px-2 py-1 rounded bg-blue-50 text-[#2563EB] hover:bg-blue-100 font-semibold"
                      >
                        +30 Days
                      </button>
                      {sub.status === "ACTIVE" ? (
                        <button
                          onClick={() => handleAction(sub.id, "SUSPEND")}
                          className="px-2 py-1 rounded bg-amber-50 text-amber-700 hover:bg-amber-100 font-semibold"
                        >
                          Suspend
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAction(sub.id, "ACTIVATE")}
                          className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold"
                        >
                          Activate
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade & Custom Pricing Modal */}
      {targetSub && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl space-y-5">
            <h3 className="text-base font-bold text-[#0A192F]">
              Modify Subscription for {targetSub.customer?.name}
            </h3>

            {/* Change Plan Form */}
            <form onSubmit={handleUpgradeSubmit} className="space-y-3 text-xs border-b pb-4">
              <label className="block font-bold text-slate-700">Change Plan Entitlement Tier</label>
              <div className="flex gap-2">
                <select
                  value={newPlanId}
                  onChange={(e) => setNewPlanId(e.target.value)}
                  className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                >
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.tier})
                    </option>
                  ))}
                </select>
                <button type="submit" className="px-3 py-1.5 bg-[#0A192F] text-white rounded-lg font-bold">
                  Switch Plan
                </button>
              </div>
            </form>

            {/* Custom Pricing Override Form */}
            <form onSubmit={handleCustomPriceSubmit} className="space-y-3 text-xs border-b pb-4">
              <label className="block font-bold text-slate-700">Custom Customer Pricing Override (₹)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={customPriceVal}
                  onChange={(e) => setCustomPriceVal(e.target.value)}
                  className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg"
                />
                <button type="submit" className="px-3 py-1.5 bg-[#2563EB] text-white rounded-lg font-bold">
                  Save Custom Price
                </button>
              </div>
            </form>

            <div className="flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => handleAction(targetSub.id, "CANCEL")}
                className="text-rose-600 font-semibold hover:underline"
              >
                Cancel Subscription & Revoke License
              </button>
              <button
                type="button"
                onClick={() => setTargetSub(null)}
                className="px-3 py-1.5 rounded-lg border font-semibold text-slate-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
