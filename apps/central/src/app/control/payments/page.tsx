"use client";

import { useEffect, useState } from "react";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Search,
  Plus,
  Edit2,
  Copy,
  Receipt,
  RotateCcw,
  ShieldAlert,
  ArrowUpRight,
  Filter,
  CheckCheck,
  Building,
  User,
  Trash2,
} from "lucide-react";

export default function PaymentsControlPage() {
  const [payments, setPayments] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalCollected: 0,
    pendingReceivables: 0,
    totalRefunded: 0,
    failedCount: 0,
    totalTransactions: 0,
  });
  const [customers, setCustomers] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [copiedRef, setCopiedRef] = useState<string | null>(null);

  // Record Manual Payment Modal
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [recordForm, setRecordForm] = useState({
    customerId: "",
    planId: "",
    duration: "YEARLY",
    amount: "5750",
    currency: "INR",
    paymentMethod: "Bank Transfer (NEFT/IMPS)",
    paymentReference: "",
    paymentStatus: "PAID",
    hasSetupAssistance: false,
    setupFee: "0",
    generateLicense: true,
  });
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recordSuccess, setRecordSuccess] = useState<string | null>(null);
  const [isSubmittingRecord, setIsSubmittingRecord] = useState(false);

  // Edit Payment Modal
  const [editPaymentTarget, setEditPaymentTarget] = useState<any | null>(null);
  const [editForm, setEditForm] = useState({
    paymentStatus: "PAID",
    paymentReference: "",
    amount: "0",
    currency: "INR",
  });
  const [editError, setEditError] = useState<string | null>(null);
  const [editSuccess, setEditSuccess] = useState<string | null>(null);
  const [isSubmittingEdit, setIsSubmittingEdit] = useState(false);

  const fetchPayments = () => {
    setLoading(true);
    fetch(
      `/api/v1/control/payments?status=${encodeURIComponent(
        statusFilter
      )}&search=${encodeURIComponent(search)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPayments(data.payments);
          setStats(data.stats);
          setCustomers(data.customers);
          setPlans(data.plans);
          if (data.customers?.length > 0 && !recordForm.customerId) {
            setRecordForm((prev) => ({ ...prev, customerId: data.customers[0].id }));
          }
          if (data.plans?.length > 0 && !recordForm.planId) {
            setRecordForm((prev) => ({ ...prev, planId: data.plans[0].id }));
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPayments();
  }, [search, statusFilter]);

  const copyReference = (ref: string) => {
    navigator.clipboard.writeText(ref);
    setCopiedRef(ref);
    setTimeout(() => setCopiedRef(null), 2500);
  };

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingRecord(true);
    setRecordError(null);
    setRecordSuccess(null);

    try {
      const res = await fetch("/api/v1/control/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recordForm),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setRecordError(data.error || "Failed to record payment.");
      } else {
        setRecordSuccess("Payment transaction recorded successfully!");
        fetchPayments();
        setTimeout(() => {
          setIsRecordModalOpen(false);
          setRecordSuccess(null);
        }, 1200);
      }
    } catch (err: any) {
      setRecordError(`Network error: ${err.message}`);
    } finally {
      setIsSubmittingRecord(false);
    }
  };

  const openEditModal = (payment: any) => {
    setEditPaymentTarget(payment);
    setEditForm({
      paymentStatus: payment.paymentStatus || "PAID",
      paymentReference: payment.paymentReference || "",
      amount: String(payment.amount || 0),
      currency: payment.currency || "INR",
    });
    setEditError(null);
    setEditSuccess(null);
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPaymentTarget) return;

    setIsSubmittingEdit(true);
    setEditError(null);
    setEditSuccess(null);

    try {
      const res = await fetch("/api/v1/control/payments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editPaymentTarget.id,
          paymentStatus: editForm.paymentStatus,
          paymentReference: editForm.paymentReference,
          amount: editForm.amount,
          currency: editForm.currency,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setEditError(data.error || "Failed to update payment.");
      } else {
        setEditSuccess("Payment transaction updated successfully!");
        fetchPayments();
        setTimeout(() => {
          setEditPaymentTarget(null);
          setEditSuccess(null);
        }, 1200);
      }
    } catch (err: any) {
      setEditError(err.message || "Network error updating payment.");
    } finally {
      setIsSubmittingEdit(false);
    }
  };

  const handleQuickStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/v1/control/payments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, paymentStatus: newStatus }),
      });
      if (res.ok) fetchPayments();
    } catch (err) {
      // ignore
    }
  };

  const handleDeletePayment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this payment record and associated subscription?")) {
      return;
    }
    try {
      const res = await fetch(`/api/v1/control/payments?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEditPaymentTarget(null);
        fetchPayments();
      }
    } catch (err) {
      alert("Error deleting payment.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Top Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 bg-emerald-50 text-emerald-700">
            <Receipt className="w-3 h-3" />
            Central Payment & Invoicing Hub
          </div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Payment Management</h1>
          <p className="text-xs text-slate-500 mt-1">
            Track subscription payments, manual wire deposits, payment references, and refunds across all clients.
          </p>
        </div>

        <button
          onClick={() => setIsRecordModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          Record Manual Payment
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Total Revenue Collected
          </span>
          <p className="text-2xl font-black text-slate-900">
            ₹{stats.totalCollected.toLocaleString("en-IN")}
          </p>
          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Settled Payments
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Pending Receivables
          </span>
          <p className="text-2xl font-black text-amber-600">
            ₹{stats.pendingReceivables.toLocaleString("en-IN")}
          </p>
          <span className="text-[11px] font-semibold text-slate-400">
            Awaiting client settlement / wire
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Refunds & Cancellations
          </span>
          <p className="text-2xl font-black text-slate-700">
            ₹{stats.totalRefunded.toLocaleString("en-IN")}
          </p>
          <span className="text-[11px] font-semibold text-slate-400">
            Reversed software licenses
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Total Transactions
          </span>
          <p className="text-2xl font-black text-[#2563EB]">
            {stats.totalTransactions}
          </p>
          <span className="text-[11px] font-semibold text-slate-400">
            Recorded billing events
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Payment Reference, Customer, Company, or Plan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {["ALL", "PAID", "PENDING", "REFUNDED", "FAILED"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                statusFilter === st
                  ? "bg-[#0A192F] text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {st === "ALL" ? "All Payments" : st}
            </button>
          ))}
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3.5 px-4">Payment Reference</th>
                <th className="py-3.5 px-4">Customer & Brand</th>
                <th className="py-3.5 px-4">Plan & Tier</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Billing Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    Loading payments and transactions...
                  </td>
                </tr>
              ) : payments.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    No payment transactions matching your filter.
                  </td>
                </tr>
              ) : (
                payments.map((p) => {
                  const isPaid = p.paymentStatus === "PAID";
                  const isPending = p.paymentStatus === "PENDING";
                  const isRefunded = p.paymentStatus === "REFUNDED";

                  return (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <code className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                            {p.paymentReference || `TXN_${p.id.slice(-8)}`}
                          </code>
                          <button
                            type="button"
                            onClick={() => copyReference(p.paymentReference || p.id)}
                            className="text-slate-400 hover:text-slate-600 p-0.5"
                            title="Copy Reference ID"
                          >
                            {copiedRef === (p.paymentReference || p.id) ? (
                              <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-slate-900 block">{p.customer?.name}</span>
                        <span className="text-[10px] text-slate-400">
                          {p.customer?.companyName ? `${p.customer.companyName} • ` : ""}
                          {p.customer?.email}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                          {p.plan?.name || "AVRO Plan"}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {p.duration}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        ₹{p.amount?.toLocaleString("en-IN")}
                        {p.setupFee > 0 && (
                          <span className="text-[10px] text-emerald-600 block font-normal">
                            +₹{p.setupFee} Setup Fee
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {new Date(p.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isPaid
                              ? "bg-emerald-50 text-emerald-700"
                              : isPending
                              ? "bg-amber-50 text-amber-700"
                              : isRefunded
                              ? "bg-slate-100 text-slate-600"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          {p.paymentStatus}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1 whitespace-nowrap">
                        <button
                          onClick={() => openEditModal(p)}
                          className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold inline-flex items-center gap-1"
                        >
                          <Edit2 className="w-3 h-3" />
                          Edit
                        </button>

                        {!isPaid && (
                          <button
                            onClick={() => handleQuickStatusUpdate(p.id, "PAID")}
                            className="px-2 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold"
                          >
                            Mark Paid
                          </button>
                        )}

                        {isPaid && (
                          <button
                            onClick={() => handleQuickStatusUpdate(p.id, "REFUNDED")}
                            className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold"
                          >
                            Refund
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* RECORD MANUAL PAYMENT MODAL */}
      {isRecordModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Record Manual Payment</h3>
                  <p className="text-xs text-slate-400">
                    Record bank wire transfers, offline deposits, or custom enterprise settlements.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsRecordModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
              >
                ✕
              </button>
            </div>

            {recordSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{recordSuccess}</span>
              </div>
            )}

            {recordError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{recordError}</span>
              </div>
            )}

            <form onSubmit={handleRecordPayment} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Customer Account *</label>
                  <select
                    value={recordForm.customerId}
                    onChange={(e) => setRecordForm({ ...recordForm, customerId: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {customers.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Plan Entitlement Tier *</label>
                  <select
                    value={recordForm.planId}
                    onChange={(e) => {
                      const selected = plans.find((p) => p.id === e.target.value);
                      const defaultAmt =
                        selected?.tier === "PLUS" ? "12500" : selected?.tier === "GROW" ? "5750" : "2499";
                      setRecordForm({
                        ...recordForm,
                        planId: e.target.value,
                        amount: defaultAmt,
                      });
                    }}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {plans.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.tier})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Duration</label>
                  <select
                    value={recordForm.duration}
                    onChange={(e) => setRecordForm({ ...recordForm, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="MONTHLY">Monthly</option>
                    <option value="SIX_MONTHS">6 Months</option>
                    <option value="YEARLY">Yearly (12 Months)</option>
                    <option value="TWO_YEARS">2 Years</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Amount (₹) *</label>
                  <input
                    type="number"
                    required
                    value={recordForm.amount}
                    onChange={(e) => setRecordForm({ ...recordForm, amount: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment Status</label>
                  <select
                    value={recordForm.paymentStatus}
                    onChange={(e) => setRecordForm({ ...recordForm, paymentStatus: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="PAID">PAID (Completed)</option>
                    <option value="PENDING">PENDING (Awaiting Wire)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment Method</label>
                  <select
                    value={recordForm.paymentMethod}
                    onChange={(e) => setRecordForm({ ...recordForm, paymentMethod: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Bank Transfer (NEFT/IMPS)">Bank Transfer (NEFT/IMPS/RTGS)</option>
                    <option value="UPI Direct">UPI Direct (GPay / PhonePe / Paytm)</option>
                    <option value="Razorpay Offline">Razorpay Offline</option>
                    <option value="Stripe Wire">Stripe Wire / Credit Card</option>
                    <option value="Cash / Cheque">Cash / Company Cheque</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Reference / UTR / Transaction ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. UTR-HDFC-99182312 or PAY-2026-001"
                    value={recordForm.paymentReference}
                    onChange={(e) => setRecordForm({ ...recordForm, paymentReference: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={recordForm.generateLicense}
                    onChange={(e) => setRecordForm({ ...recordForm, generateLicense: e.target.checked })}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Automatically mint & link active license key for customer</span>
                </label>
                <p className="text-[11px] text-slate-500 pl-5">
                  Generates an authorized cryptographic license key corresponding to the selected plan tier.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsRecordModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingRecord}
                  className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold transition shadow-sm"
                >
                  {isSubmittingRecord ? "Recording..." : "Record Payment & Subscription"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT PAYMENT MODAL */}
      {editPaymentTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                  <Edit2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Edit Payment Transaction</h3>
                  <p className="text-xs text-slate-400">
                    Modify payment status, amount, or transaction reference ID.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEditPaymentTarget(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
              >
                ✕
              </button>
            </div>

            {editSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{editSuccess}</span>
              </div>
            )}

            {editError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{editError}</span>
              </div>
            )}

            <form onSubmit={handleSaveEdit} className="space-y-3.5 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Customer & Plan</span>
                <p className="font-bold text-slate-900">
                  {editPaymentTarget.customer?.name} ({editPaymentTarget.customer?.email})
                </p>
                <p className="text-[11px] text-slate-500">
                  Plan: {editPaymentTarget.plan?.name} • Duration: {editPaymentTarget.duration}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment Status</label>
                  <select
                    value={editForm.paymentStatus}
                    onChange={(e) => setEditForm({ ...editForm, paymentStatus: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="PAID">PAID (Settled)</option>
                    <option value="PENDING">PENDING (Awaiting Payment)</option>
                    <option value="REFUNDED">REFUNDED (Reversed)</option>
                    <option value="FAILED">FAILED (Rejected)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    required
                    value={editForm.amount}
                    onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Payment Reference / UTR</label>
                <input
                  type="text"
                  required
                  value={editForm.paymentReference}
                  onChange={(e) => setEditForm({ ...editForm, paymentReference: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeletePayment(editPaymentTarget.id)}
                  className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 hover:underline"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Record
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditPaymentTarget(null)}
                    className="px-3.5 py-2 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingEdit}
                    className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold transition shadow-sm"
                  >
                    {isSubmittingEdit ? "Saving..." : "Save Changes"}
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
