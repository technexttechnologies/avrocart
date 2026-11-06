"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Search,
  Plus,
  Shield,
  Eye,
  Edit2,
  Key,
  ExternalLink,
  CheckCircle2,
  XCircle,
  FileText,
  Trash2,
  Lock,
  Building,
  Phone,
  Mail,
  AlertTriangle,
} from "lucide-react";

export default function CustomersControlPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Edit Customer State
  const [editCustomer, setEditCustomer] = useState<any | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    status: "ACTIVE",
    password: "",
    internalNotes: "",
  });
  const [editError, setEditError] = useState<string | null>(null);
  const [editSuccess, setEditSuccess] = useState<string | null>(null);
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  // New customer form
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    internalNotes: "",
  });

  const fetchCustomers = () => {
    setLoading(true);
    fetch(`/api/v1/control/customers?search=${encodeURIComponent(search)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCustomers(data.customers);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCustomers();
  }, [search]);

  const handleCreateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/v1/control/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCustomer),
    });
    if (res.ok) {
      setIsAddModalOpen(false);
      setNewCustomer({ name: "", email: "", companyName: "", phone: "", internalNotes: "" });
      fetchCustomers();
    }
  };

  const openEditModal = (c: any) => {
    setEditCustomer(c);
    setEditForm({
      name: c.name || "",
      email: c.email || "",
      companyName: c.companyName || "",
      phone: c.phone || "",
      status: c.status || "ACTIVE",
      password: "",
      internalNotes: c.internalNotes || "",
    });
    setEditError(null);
    setEditSuccess(null);
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editCustomer) return;
    setIsSavingEdit(true);
    setEditError(null);
    setEditSuccess(null);

    try {
      const payload: any = {
        id: editCustomer.id,
        name: editForm.name,
        email: editForm.email,
        companyName: editForm.companyName,
        phone: editForm.phone,
        status: editForm.status,
        internalNotes: editForm.internalNotes,
      };
      if (editForm.password.trim()) {
        payload.password = editForm.password.trim();
      }

      const res = await fetch("/api/v1/control/customers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setEditError(data.error || "Failed to update customer account.");
      } else {
        setEditSuccess("Customer account updated successfully!");
        fetchCustomers();
        setTimeout(() => {
          setEditCustomer(null);
        }, 1200);
      }
    } catch (err: any) {
      setEditError(err.message || "Network error updating customer.");
    } finally {
      setIsSavingEdit(false);
    }
  };

  const handleDeleteCustomer = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to permanently delete customer '${name}' and all associated subscriptions and licenses?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/v1/control/customers?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEditCustomer(null);
        setSelectedCustomer(null);
        fetchCustomers();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete customer.");
      }
    } catch (err: any) {
      alert(`Error deleting customer: ${err.message}`);
    }
  };

  const handleToggleStatus = async (customer: any) => {
    const newStatus = customer.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
    const res = await fetch("/api/v1/control/customers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: customer.id, status: newStatus }),
    });
    if (res.ok) {
      fetchCustomers();
      if (selectedCustomer?.id === customer.id) {
        setSelectedCustomer({ ...selectedCustomer, status: newStatus });
      }
    }
  };

  const handleUpdateNotes = async (id: string, notes: string) => {
    await fetch("/api/v1/control/customers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, internalNotes: notes }),
    });
    fetchCustomers();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Customer Accounts</h1>
          <p className="text-xs text-slate-500 mt-1">
            Registered AVRO store buyers, organization profiles, and deployment assignments.
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Customer
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, or company name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Company</th>
                <th className="py-3.5 px-4">Phone</th>
                <th className="py-3.5 px-4">Subscriptions</th>
                <th className="py-3.5 px-4">Licenses / Domains</th>
                <th className="py-3.5 px-4">Account Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    Loading customer accounts...
                  </td>
                </tr>
              ) : customers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    No matching customer accounts found.
                  </td>
                </tr>
              ) : (
                customers.map((c) => {
                  const activeSub = c.subscriptions?.[0];
                  const activeLicense = c.licenses?.[0];

                  return (
                    <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-slate-900 block">{c.name}</span>
                        <span className="text-[11px] text-slate-400">{c.email}</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">{c.companyName || "—"}</td>
                      <td className="py-3.5 px-4 text-slate-600">{c.phone || "—"}</td>
                      <td className="py-3.5 px-4">
                        {activeSub ? (
                          <div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                              {activeSub.plan?.name}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              {activeSub.duration} ({activeSub.status})
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-400">No active sub</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
                        {activeLicense ? (
                          <div>
                            <code className="text-[10px] font-mono text-slate-800 bg-slate-100 px-1 py-0.5 rounded">
                              {activeLicense.licenseKey.slice(0, 16)}...
                            </code>
                            <span className="text-[10px] text-slate-500 block mt-0.5">
                              {activeLicense.boundDomain || "Pending Binding"}
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-400">No license</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
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
                      <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => openEditModal(c)}
                          className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold inline-flex items-center gap-1"
                        >
                          <Edit2 className="w-3 h-3" />
                          Edit
                        </button>
                        <button
                          onClick={() => setSelectedCustomer(c)}
                          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleToggleStatus(c)}
                          className={`px-2 py-1 rounded font-semibold ${
                            c.status === "ACTIVE"
                              ? "bg-rose-50 text-rose-700 hover:bg-rose-100"
                              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          }`}
                        >
                          {c.status === "ACTIVE" ? "Suspend" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Customer Modal */}
      {editCustomer && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                  <Edit2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Edit Customer Account</h3>
                  <p className="text-xs text-slate-400">Update account credentials, profile, and authorization status.</p>
                </div>
              </div>
              <button
                onClick={() => setEditCustomer(null)}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company / Brand</label>
                  <input
                    type="text"
                    value={editForm.companyName}
                    onChange={(e) => setEditForm({ ...editForm, companyName: e.target.value })}
                    placeholder="e.g. Apex Retail Solutions"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Account Status</label>
                  <select
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="ACTIVE">ACTIVE (Authorized)</option>
                    <option value="SUSPENDED">SUSPENDED (Locked)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Reset Password <span className="text-slate-400 font-normal">(Leave blank to keep)</span>
                  </label>
                  <input
                    type="password"
                    value={editForm.password}
                    onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Internal Confidential Notes</label>
                <textarea
                  rows={2}
                  value={editForm.internalNotes}
                  onChange={(e) => setEditForm({ ...editForm, internalNotes: e.target.value })}
                  placeholder="Notes about custom terms, VIP merchant status, or SLAs..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleDeleteCustomer(editCustomer.id, editCustomer.name)}
                  className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 hover:underline"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete Customer
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditCustomer(null)}
                    className="px-3.5 py-2 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingEdit}
                    className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold transition shadow-sm"
                  >
                    {isSavingEdit ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Customer Detail Drawer Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-xl space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-lg font-bold text-[#0A192F]">{selectedCustomer.name}</h3>
                <p className="text-xs text-slate-400">{selectedCustomer.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const c = selectedCustomer;
                    setSelectedCustomer(null);
                    openEditModal(c);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#2563EB] hover:bg-blue-100 font-bold text-xs flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  Edit Account
                </button>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-slate-400 hover:text-slate-600 font-bold p-1"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-400 block mb-1">Company / Organization</span>
                <strong className="text-slate-800">{selectedCustomer.companyName || "N/A"}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-400 block mb-1">Contact Phone</span>
                <strong className="text-slate-800">{selectedCustomer.phone || "N/A"}</strong>
              </div>
            </div>

            {/* Subscriptions & Licenses */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Issued Licenses & Domains
              </h4>
              {selectedCustomer.licenses?.length === 0 ? (
                <p className="text-xs text-slate-400">No licenses linked to this account.</p>
              ) : (
                selectedCustomer.licenses?.map((lic: any) => (
                  <div key={lic.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
                    <div>
                      <code className="font-mono font-bold text-slate-900">{lic.licenseKey}</code>
                      <span className="block text-[11px] text-slate-500">
                        Domain: <strong>{lic.boundDomain || "Unbound"}</strong> | Expires: {new Date(lic.expiresAt).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {lic.status}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Internal Notes */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">Internal Admin Notes</label>
              <textarea
                defaultValue={selectedCustomer.internalNotes || ""}
                onBlur={(e) => handleUpdateNotes(selectedCustomer.id, e.target.value)}
                placeholder="Add confidential customer notes or deployment specs..."
                rows={3}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none"
              />
              <span className="text-[10px] text-slate-400 block">Notes save automatically when you click outside the box.</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-[#0A192F]">Register New Customer Account</h3>
            <form onSubmit={handleCreateCustomer} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Customer Name *</label>
                <input
                  type="text"
                  required
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Store Name</label>
                <input
                  type="text"
                  value={newCustomer.companyName}
                  onChange={(e) => setNewCustomer({ ...newCustomer, companyName: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg border text-xs font-semibold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#0A192F] text-white text-xs font-bold"
                >
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
