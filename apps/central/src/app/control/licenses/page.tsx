"use client";

import { useEffect, useState } from "react";
import {
  Key,
  Plus,
  Shield,
  ShieldAlert,
  Server,
  Globe,
  Clock,
  RotateCw,
  Copy,
  CheckCircle2,
  AlertTriangle,
  History,
  Store,
  Link2,
} from "lucide-react";

export default function LicensesControlPage() {
  const [licenses, setLicenses] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // New license state
  const [newLicCustomerId, setNewLicCustomerId] = useState("");
  const [newLicPlan, setNewLicPlan] = useState("GROW");
  const [newLicDays, setNewLicDays] = useState("365");

  // Rebind domain modal
  const [rebindTarget, setRebindTarget] = useState<any | null>(null);
  const [rebindDomain, setRebindDomain] = useState("");

  // Connect to Store State
  const [connectStoreTarget, setConnectStoreTarget] = useState<any | null>(null);
  const [targetStoreUrl, setTargetStoreUrl] = useState("http://localhost:3001");
  const [isConnectingStore, setIsConnectingStore] = useState(false);
  const [connectSuccessMsg, setConnectSuccessMsg] = useState<string | null>(null);
  const [connectErrorMsg, setConnectErrorMsg] = useState<string | null>(null);

  const handleConnectToStore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!connectStoreTarget || !targetStoreUrl) return;

    setIsConnectingStore(true);
    setConnectSuccessMsg(null);
    setConnectErrorMsg(null);

    try {
      const res = await fetch("/api/v1/control/licenses/connect-store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          licenseId: connectStoreTarget.id,
          licenseKey: connectStoreTarget.licenseKey,
          storeUrl: targetStoreUrl,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setConnectErrorMsg(data.error || "Failed to connect license to store.");
      } else {
        setConnectSuccessMsg(data.message || "License successfully deployed to store!");
        setTimeout(() => {
          loadData();
        }, 1500);
      }
    } catch (err: any) {
      setConnectErrorMsg(`Network error: ${err.message}`);
    } finally {
      setIsConnectingStore(false);
    }
  };

  const loadData = () => {
    setLoading(true);
    fetch("/api/v1/control/licenses")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setLicenses(res.licenses);
          setLogs(res.validationLogs);
          setCustomers(res.customers);
          if (res.customers?.length > 0) {
            setNewLicCustomerId(res.customers[0].id);
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAction = async (id: string, action: string, extra?: any) => {
    await fetch("/api/v1/control/licenses", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action, ...extra }),
    });
    loadData();
  };

  const handleGenerateLicense = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/v1/control/licenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerId: newLicCustomerId,
        planTier: newLicPlan,
        durationDays: newLicDays,
      }),
    });
    if (res.ok) {
      setIsGenerateModalOpen(false);
      loadData();
    }
  };

  const handleRebindDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rebindTarget) return;
    await handleAction(rebindTarget.id, "REBIND_DOMAIN", { newDomain: rebindDomain });
    setRebindTarget(null);
    setRebindDomain("");
  };

  const copyText = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedKey(txt);
    setTimeout(() => setCopiedKey(null), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Cryptographic License Management</h1>
          <p className="text-xs text-slate-500 mt-1">
            Generate, validate, bind domains, and monitor heartbeats for customer-deployed AVRO stores.
          </p>
        </div>
        <button
          onClick={() => setIsGenerateModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          Generate License Key
        </button>
      </div>

      {/* Licenses Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3.5 px-4">Master License Key</th>
                <th className="py-3.5 px-4">Licensee / Customer</th>
                <th className="py-3.5 px-4">Plan Tier</th>
                <th className="py-3.5 px-4">Bound Domain</th>
                <th className="py-3.5 px-4">Expires On</th>
                <th className="py-3.5 px-4">Last Heartbeat</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-slate-400">
                    Loading license registry...
                  </td>
                </tr>
              ) : licenses.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-slate-400">
                    No issued licenses found.
                  </td>
                </tr>
              ) : (
                licenses.map((lic) => (
                  <tr key={lic.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <code className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded select-all">
                          {lic.licenseKey}
                        </code>
                        <button
                          onClick={() => copyText(lic.licenseKey)}
                          title="Copy license key"
                          className="text-slate-400 hover:text-slate-600"
                        >
                          {copiedKey === lic.licenseKey ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-800 block">{lic.customer?.name}</span>
                      <span className="text-[10px] text-slate-400">{lic.customer?.email}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                        {lic.planTier}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {lic.boundDomain ? (
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span className="font-mono text-slate-700">{lic.boundDomain}</span>
                        </div>
                      ) : (
                        <span className="text-amber-600 font-semibold text-[11px]">Unbound (Ready for /setup)</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {new Date(lic.expiresAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                      {lic.lastHeartbeatAt ? new Date(lic.lastHeartbeatAt).toLocaleTimeString() : "Never"}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          lic.status === "ACTIVE"
                            ? "bg-emerald-50 text-emerald-700"
                            : lic.status === "SUSPENDED"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {lic.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-1 whitespace-nowrap">
                      {lic.status === "ACTIVE" ? (
                        <button
                          onClick={() => handleAction(lic.id, "SUSPEND")}
                          className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 hover:bg-amber-100 font-semibold"
                        >
                          Suspend
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAction(lic.id, "ACTIVATE")}
                          className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold"
                        >
                          Activate
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setConnectStoreTarget(lic);
                          setTargetStoreUrl("http://localhost:3001");
                          setConnectSuccessMsg(null);
                          setConnectErrorMsg(null);
                        }}
                        className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold border border-emerald-200"
                        title="Connect this license directly to a remote store URL"
                      >
                        Connect Store
                      </button>
                      <button
                        onClick={() => {
                          setRebindTarget(lic);
                          setRebindDomain(lic.boundDomain || "");
                        }}
                        className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                      >
                        Rebind Domain
                      </button>
                      <button
                        onClick={() => handleAction(lic.id, "EXTEND", { extendDays: 30 })}
                        className="px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] hover:bg-blue-100 font-semibold"
                      >
                        +30 Days
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Validation Telemetry History Log */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
          <History className="w-4 h-4 text-slate-500" />
          License Validation Telemetry & Remote Audit History
        </h3>
        <p className="text-xs text-slate-500">
          Every ping from a customer installation is cryptographically logged with incoming domain, client IP, store version, and resolution.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 font-semibold uppercase">
                <th className="py-2.5 px-3">Time</th>
                <th className="py-2.5 px-3">License Key</th>
                <th className="py-2.5 px-3">Customer</th>
                <th className="py-2.5 px-3">Target Domain</th>
                <th className="py-2.5 px-3">Store Version</th>
                <th className="py-2.5 px-3">IP Address</th>
                <th className="py-2.5 px-3">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((l) => (
                <tr key={l.id} className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 text-slate-500">
                    {new Date(l.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-800">{l.licenseKey}</td>
                  <td className="py-2.5 px-3 text-slate-600">{l.license?.customer?.name || "—"}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">{l.domain || "—"}</td>
                  <td className="py-2.5 px-3 text-slate-500">{l.storeVersion || "v1.1.0"}</td>
                  <td className="py-2.5 px-3 font-mono text-slate-500">{l.ipAddress || "127.0.0.1"}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        l.outcome === "SUCCESS"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {l.outcome}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Generate License Modal */}
      {isGenerateModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-[#0A192F]">Mint New AVRO License Key</h3>
            <form onSubmit={handleGenerateLicense} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Assign to Customer Account</label>
                <select
                  value={newLicCustomerId}
                  onChange={(e) => setNewLicCustomerId(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none"
                >
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.email})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Plan Entitlement Tier</label>
                <select
                  value={newLicPlan}
                  onChange={(e) => setNewLicPlan(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none"
                >
                  <option value="BASIC">AVRO Basic</option>
                  <option value="GROW">AVRO Grow</option>
                  <option value="PLUS">AVRO Plus</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Duration Validity</label>
                <select
                  value={newLicDays}
                  onChange={(e) => setNewLicDays(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none"
                >
                  <option value="30">30 Days (Monthly)</option>
                  <option value="180">180 Days (6 Months)</option>
                  <option value="365">365 Days (1 Year)</option>
                  <option value="730">730 Days (2 Years)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsGenerateModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg border font-semibold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#0A192F] text-white font-bold"
                >
                  Mint Key
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Rebind Domain Modal */}
      {rebindTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-[#0A192F]">Domain Re-Binding & Transfer</h3>
            <p className="text-xs text-slate-500">
              Update the authorized domain for license <code>{rebindTarget.licenseKey}</code>.
            </p>
            <form onSubmit={handleRebindDomain} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Target Host / Domain</label>
                <input
                  type="text"
                  required
                  value={rebindDomain}
                  onChange={(e) => setRebindDomain(e.target.value)}
                  placeholder="e.g. store.clientbrand.com or localhost:3001"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => handleAction(rebindTarget.id, "UNBIND_DOMAIN")}
                  className="text-xs text-rose-600 hover:underline font-semibold"
                >
                  Unbind Completely
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setRebindTarget(null)}
                    className="px-3 py-1.5 rounded-lg border font-semibold text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-[#2563EB] text-white font-bold"
                  >
                    Save Binding
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Connect to Store Modal */}
      {connectStoreTarget && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Connect License to Store</h3>
                  <p className="text-xs text-slate-400">Deploy license key directly to a running AVRO Store.</p>
                </div>
              </div>
              <button onClick={() => setConnectStoreTarget(null)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                ✕
              </button>
            </div>

            {connectSuccessMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{connectSuccessMsg}</span>
              </div>
            )}

            {connectErrorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>{connectErrorMsg}</span>
              </div>
            )}

            <form onSubmit={handleConnectToStore} className="space-y-4 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">License Key</span>
                  <span className="px-2 py-0.2 rounded-full text-[10px] font-black bg-blue-50 text-blue-700">
                    {connectStoreTarget.planTier} Plan
                  </span>
                </div>
                <p className="font-mono font-bold text-slate-900">{connectStoreTarget.licenseKey}</p>
                <p className="text-[11px] text-slate-500">Customer: {connectStoreTarget.customer?.name} ({connectStoreTarget.customer?.email})</p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Target Store Base URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={targetStoreUrl}
                    onChange={(e) => setTargetStoreUrl(e.target.value)}
                    placeholder="e.g. http://localhost:3001 or https://mystore.com"
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-300 font-mono text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setTargetStoreUrl("http://localhost:3001")}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px]"
                  >
                    Local 3001
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Central will POST directly to <code>{targetStoreUrl}/api/admin/license/connect</code>
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setConnectStoreTarget(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isConnectingStore}
                  className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold transition flex items-center gap-2 shadow-sm"
                >
                  <Link2 className="w-3.5 h-3.5" />
                  <span>{isConnectingStore ? "Connecting Store..." : "Deploy License to Store"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
