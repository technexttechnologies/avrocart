"use client";

import { useEffect, useState } from "react";
import {
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  DollarSign,
  Clock,
  Shield,
  Edit2,
  TrendingUp,
  Zap,
  Trash2,
} from "lucide-react";

export default function SubscriptionsControlPage() {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Upgrade / Edit Subscription modal
  const [targetSub, setTargetSub] = useState<any | null>(null);
  const [subForm, setSubForm] = useState({
    newPlanId: "",
    duration: "YEARLY",
    customAmount: "",
    status: "ACTIVE",
    paymentStatus: "PAID",
    paymentReference: "",
  });
  const [subError, setSubError] = useState<string | null>(null);
  const [subSuccess, setSubSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const openUpgradeModal = (sub: any) => {
    setTargetSub(sub);
    setSubForm({
      newPlanId: sub.planId || "",
      duration: sub.duration || "YEARLY",
      customAmount: String(sub.amount || 0),
      status: sub.status || "ACTIVE",
      paymentStatus: sub.paymentStatus || "PAID",
      paymentReference: sub.paymentReference || "",
    });
    setSubError(null);
    setSubSuccess(null);
  };

  const handleUpgradeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetSub) return;

    setIsSubmitting(true);
    setSubError(null);
    setSubSuccess(null);

    try {
      const res = await fetch("/api/v1/control/subscriptions", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: targetSub.id,
          action: "UPGRADE_PLAN",
          newPlanId: subForm.newPlanId,
          duration: subForm.duration,
          customAmount: subForm.customAmount,
          status: subForm.status,
          paymentStatus: subForm.paymentStatus,
          paymentReference: subForm.paymentReference,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setSubError(data.error || "Failed to update subscription & plan tier.");
      } else {
        setSubSuccess("Subscription & license plan tier updated successfully!");
        loadData();
        setTimeout(() => {
          setTargetSub(null);
        }, 1200);
      }
    } catch (err: any) {
      setSubError(err.message || "Network error updating subscription.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteSubscription = async (id: string) => {
    if (!confirm("Are you sure you want to delete this subscription?")) return;
    try {
      const res = await fetch(`/api/v1/control/subscriptions?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setTargetSub(null);
        loadData();
      }
    } catch (e) {
      alert("Error deleting subscription.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 bg-blue-50 text-[#2563EB]">
          <TrendingUp className="w-3 h-3" />
          Subscription & Tier Controls
        </div>
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
                        onClick={() => openUpgradeModal(sub)}
                        className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold inline-flex items-center gap-1"
                      >
                        <Zap className="w-3 h-3 text-amber-500" />
                        Upgrade / Manage
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

      {/* Upgrade & Edit Subscription Modal */}
      {targetSub && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Upgrade Plan & Subscription</h3>
                  <p className="text-xs text-slate-400">
                    Switch plan tier, adjust contracted pricing, or alter billing terms.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setTargetSub(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
              >
                ✕
              </button>
            </div>

            {subSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{subSuccess}</span>
              </div>
            )}

            {subError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{subError}</span>
              </div>
            )}

            <form onSubmit={handleUpgradeSubmit} className="space-y-3.5 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Subscriber</span>
                <p className="font-bold text-slate-900">
                  {targetSub.customer?.name} ({targetSub.customer?.email})
                </p>
                {targetSub.license && (
                  <p className="text-[11px] text-slate-500 font-mono">
                    Linked License: {targetSub.license.licenseKey} ({targetSub.license.planTier})
                  </p>
                )}
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Select Plan Entitlement Tier</span>
                  <span className="text-[10px] text-blue-600 font-bold uppercase">Upgrade Option</span>
                </label>
                <select
                  value={subForm.newPlanId}
                  onChange={(e) => {
                    const sel = plans.find((p) => p.id === e.target.value);
                    const defaultPrice =
                      sel?.tier === "PLUS" ? "12500" : sel?.tier === "GROW" ? "5750" : "2499";
                    setSubForm({ ...subForm, newPlanId: e.target.value, customAmount: defaultPrice });
                  }}
                  className="w-full px-3 py-2 border border-blue-300 bg-blue-50/40 rounded-xl font-bold text-[#2563EB] focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.tier} Tier)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Billing Duration</label>
                  <select
                    value={subForm.duration}
                    onChange={(e) => setSubForm({ ...subForm, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="MONTHLY">Monthly</option>
                    <option value="SIX_MONTHS">6 Months</option>
                    <option value="YEARLY">Yearly (12 Months)</option>
                    <option value="TWO_YEARS">2 Years</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Contract Amount (₹)</label>
                  <input
                    type="number"
                    required
                    value={subForm.customAmount}
                    onChange={(e) => setSubForm({ ...subForm, customAmount: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subscription Status</label>
                  <select
                    value={subForm.status}
                    onChange={(e) => setSubForm({ ...subForm, status: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="ACTIVE">ACTIVE (Authorized)</option>
                    <option value="SUSPENDED">SUSPENDED</option>
                    <option value="PAST_DUE">PAST_DUE</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment Status</label>
                  <select
                    value={subForm.paymentStatus}
                    onChange={(e) => setSubForm({ ...subForm, paymentStatus: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="PAID">PAID</option>
                    <option value="PENDING">PENDING</option>
                    <option value="FAILED">FAILED</option>
                    <option value="REFUNDED">REFUNDED</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Payment Reference / UTR</label>
                <input
                  type="text"
                  value={subForm.paymentReference}
                  onChange={(e) => setSubForm({ ...subForm, paymentReference: e.target.value })}
                  placeholder="e.g. PAY_RAZOR_... or UTR-..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeleteSubscription(targetSub.id)}
                  className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 hover:underline"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Sub
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTargetSub(null)}
                    className="px-3.5 py-2 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold transition shadow-sm"
                  >
                    {isSubmitting ? "Saving..." : "Apply Plan Upgrade"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
