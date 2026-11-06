"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  DollarSign,
  Plus,
  CheckCircle2,
  Clock,
  Send,
  Printer,
  X,
  Search,
  ExternalLink,
  Tag,
  Building,
  User,
  Check,
} from "lucide-react";

export default function QuotesManagementPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [viewInvoice, setViewInvoice] = useState<any>(null);
  const [statusMsg, setStatusMsg] = useState("");

  // Create Form State
  const [formData, setFormData] = useState({
    customerId: "",
    title: "",
    scopeDescription: "",
    quotedAmount: "",
    status: "SENT",
  });

  const loadData = () => {
    setLoading(true);
    fetch("/api/v1/control/quotes")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res);
          if (res.customers?.length > 0 && !formData.customerId) {
            setFormData((prev) => ({ ...prev, customerId: res.customers[0].id }));
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/control/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const resData = await res.json();
      if (resData.success) {
        setShowCreateModal(false);
        setStatusMsg("New customization quotation created successfully!");
        setFormData({
          customerId: data?.customers?.[0]?.id || "",
          title: "",
          scopeDescription: "",
          quotedAmount: "",
          status: "SENT",
        });
        loadData();
        setTimeout(() => setStatusMsg(false as any), 3500);
      }
    } catch (err: any) {
      alert("Error creating quotation.");
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/v1/control/quotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const resData = await res.json();
      if (resData.success) {
        setStatusMsg(resData.message);
        loadData();
        setTimeout(() => setStatusMsg(""), 3000);
      }
    } catch (err: any) {
      alert("Error updating quote.");
    }
  };

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Loading quotes pipeline...</div>;
  }

  const quotes = data?.quotes || [];
  const customers = data?.customers || [];
  const stats = data?.stats || { totalQuoted: 0, paidAmount: 0, acceptedAmount: 0, pendingCount: 0 };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 bg-purple-50 text-purple-700 border border-purple-200">
            <DollarSign className="w-3 h-3" />
            Bespoke Development & Services Billing
          </div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Customization Quotes & Invoices</h1>
          <p className="text-xs text-slate-500 mt-1">
            Author and manage custom feature quotations, ERP integrations, migration assistance, and service fees for AVRO clients.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create New Quotation
        </button>
      </div>

      {statusMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          {statusMsg}
        </div>
      )}

      {/* Pipeline KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Total Quoted Pipeline</span>
            <strong className="text-2xl font-extrabold text-slate-900">
              ₹{stats.totalQuoted.toLocaleString("en-IN")}
            </strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">{quotes.length} total quotations</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Paid & Completed</span>
            <strong className="text-2xl font-extrabold text-emerald-600">
              ₹{stats.paidAmount.toLocaleString("en-IN")}
            </strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Realized customization revenue</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Accepted (Pending Pay)</span>
            <strong className="text-2xl font-extrabold text-blue-600">
              ₹{stats.acceptedAmount.toLocaleString("en-IN")}
            </strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Approved client deliverables</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Send className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">In Review / Draft</span>
            <strong className="text-2xl font-extrabold text-amber-600">
              {stats.pendingCount} Quotes
            </strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Awaiting customer signoff</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quotations List Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Custom Work Statements & Quotations</h3>
          <span className="text-xs text-slate-500">{quotes.length} total entries</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                <th className="py-3 px-4">Deliverable Title & Scope</th>
                <th className="py-3 px-4">Client / Merchant</th>
                <th className="py-3 px-4">Quoted Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date Issued</th>
                <th className="py-3 px-4 text-right">Workflow Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {quotes.map((q: any) => {
                const isPaid = q.status === "PAID";
                const isAccepted = q.status === "ACCEPTED";
                const isSent = q.status === "SENT";

                return (
                  <tr key={q.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 max-w-sm">
                      <div className="space-y-1">
                        <strong className="font-bold text-slate-900 block text-xs">{q.title}</strong>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {q.scopeDescription}
                        </p>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="space-y-0.5">
                        <strong className="font-bold text-slate-800 block text-xs">
                          {q.customer?.companyName || q.customer?.name}
                        </strong>
                        <span className="text-[11px] text-slate-500 block">{q.customer?.email}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <strong className="text-sm font-extrabold text-slate-900">
                        ₹{q.quotedAmount.toLocaleString("en-IN")}
                      </strong>
                    </td>

                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                          isPaid
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : isAccepted
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : isSent
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {q.status}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-slate-500 text-[11px]">
                      {new Date(q.createdAt).toLocaleDateString()}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setViewInvoice(q)}
                          className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 text-[11px] flex items-center gap-1 font-semibold"
                          title="View / Print Quotation"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>

                        {isSent && (
                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(q.id, "ACCEPTED")}
                            className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 text-[11px] font-bold"
                          >
                            Mark Accepted
                          </button>
                        )}

                        {isAccepted && (
                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(q.id, "PAID")}
                            className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 text-[11px] font-bold"
                          >
                            Mark Paid
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE QUOTATION MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                <Plus className="w-4 h-4 text-blue-600" />
                Issue Customization Statement & Quotation
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateQuote} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Target Customer</label>
                <select
                  value={formData.customerId}
                  onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl bg-white"
                  required
                >
                  {customers.map((c: any) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.companyName || c.email})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Quotation Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Custom Multi-Warehouse Inventory ERP Bridge"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Scope & Deliverables</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail the technical milestones, webhook endpoints, and deliverables..."
                  value={formData.scopeDescription}
                  onChange={(e) => setFormData({ ...formData, scopeDescription: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Quoted Amount (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 45000"
                    value={formData.quotedAmount}
                    onChange={(e) => setFormData({ ...formData, quotedAmount: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Initial Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl bg-white"
                  >
                    <option value="SENT">Sent to Customer</option>
                    <option value="DRAFT">Internal Draft</option>
                    <option value="ACCEPTED">Customer Accepted</option>
                    <option value="PAID">Paid in Full</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold shadow-md"
                >
                  Issue Quotation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PRINTABLE INVOICE / STATEMENT VIEW MODAL */}
      {viewInvoice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <img src="/avro-logo.png" alt="AVROCART by TECHNEXT" className="h-8 w-auto object-contain" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1">
                  Official Statement of Work & Fee Quotation
                </span>
              </div>
              <button
                onClick={() => setViewInvoice(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 text-xs text-slate-600">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">ISSUED BY</span>
                <strong className="block text-slate-900 font-extrabold mt-0.5">TECHNEXT TECHNOLOGIES</strong>
                <p>AVRO Core Engineering Division</p>
                <p>Bengaluru & Delhi, India</p>
                <p className="text-blue-600">billing@technext.co</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">QUOTED FOR</span>
                <strong className="block text-slate-900 font-extrabold mt-0.5">
                  {viewInvoice.customer?.companyName || viewInvoice.customer?.name}
                </strong>
                <p>{viewInvoice.customer?.name}</p>
                <p>{viewInvoice.customer?.email}</p>
                <p className="font-mono text-[11px] text-slate-500">REF ID: {viewInvoice.id}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <strong className="text-slate-900 font-bold block">{viewInvoice.title}</strong>
              <p className="text-slate-600 leading-relaxed">{viewInvoice.scopeDescription}</p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs">
              <div>
                <span className="text-slate-400 block">Status</span>
                <strong className="text-emerald-700 font-bold uppercase">{viewInvoice.status}</strong>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block">Total Quoted Fee</span>
                <strong className="text-2xl font-extrabold text-slate-900">
                  ₹{viewInvoice.quotedAmount.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Print Statement
              </button>
              <button
                type="button"
                onClick={() => setViewInvoice(null)}
                className="px-5 py-2 rounded-xl bg-[#0A192F] text-white text-xs font-bold"
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
