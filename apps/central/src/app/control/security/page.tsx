"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Key,
  Download,
  AlertTriangle,
  RotateCw,
  Terminal,
  Clock,
  CheckCircle2,
  Lock,
  Globe,
  Radio,
  FileSpreadsheet,
} from "lucide-react";

export default function SecurityAuditVaultPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"VALIDATIONS" | "ADMIN_EVENTS">("VALIDATIONS");

  const loadData = () => {
    setLoading(true);
    fetch("/api/v1/control/security")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) setData(res);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Decrypting security audit logs...</div>;
  }

  const stats = data?.stats || {
    totalValidations: 0,
    successfulValidations: 0,
    failedValidations: 0,
    successRate: 100,
    adminEventCount: 0,
    cryptographicSignature: "HMAC-SHA256",
    vaultStatus: "ONLINE",
  };

  const validationLogs = data?.validationLogs || [];
  const adminLogs = data?.adminLogs || [];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Lock className="w-3 h-3 text-emerald-600" />
            Zero-Trust Cryptographic Subsystem
          </div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Security & Cryptographic Audit Vault</h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time audit log of all incoming license heartbeats, HMAC token issuances, domain mismatch flags, and administrative control events.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/api/v1/control/security?format=csv"
            download
            className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            Export Audit CSV
          </a>
          <button
            onClick={loadData}
            className="p-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
            title="Refresh stream"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Security Telemetry KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#0A192F] text-white shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 block mb-1">Cryptographic Engine</span>
            <strong className="text-lg font-mono text-emerald-400 block">{stats.cryptographicSignature}</strong>
            <span className="text-[10px] text-slate-300 block mt-0.5">Hardware entropy signature</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
            <Key className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Total Handshakes</span>
            <strong className="text-2xl font-extrabold text-slate-900">{stats.totalValidations}</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Verification requests logged</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Radio className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Verification Integrity</span>
            <strong className="text-2xl font-extrabold text-emerald-600">{stats.successRate}%</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">{stats.failedValidations} rejected attempts</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Audit Trail Events</span>
            <strong className="text-2xl font-extrabold text-purple-600">{stats.adminEventCount}</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Technext operator actions</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab("VALIDATIONS")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "VALIDATIONS"
              ? "bg-[#0A192F] text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Incoming License Handshake Stream ({validationLogs.length})
        </button>
        <button
          onClick={() => setActiveTab("ADMIN_EVENTS")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "ADMIN_EVENTS"
              ? "bg-[#0A192F] text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Technext Admin Audit Log ({adminLogs.length})
        </button>
      </div>

      {/* Tab 1: Validation Stream */}
      {activeTab === "VALIDATIONS" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Cryptographic Heartbeat Handshakes</h3>
            <span className="text-xs text-slate-400">Live 50 events stream</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">License Key</th>
                  <th className="py-3 px-4">Domain & IP</th>
                  <th className="py-3 px-4">Store Engine Version</th>
                  <th className="py-3 px-4 text-right">Verification Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-mono">
                {validationLogs.map((log: any) => {
                  const isSuccess = log.outcome === "SUCCESS";
                  const isExpired = log.outcome === "EXPIRED";

                  return (
                    <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 text-slate-500 text-[11px]">
                        {new Date(log.timestamp).toLocaleString()}
                      </td>

                      <td className="py-3 px-4">
                        <strong className="text-slate-800 text-xs block">{log.licenseKey}</strong>
                        {log.license?.customer && (
                          <span className="font-sans text-[11px] text-slate-400">
                            {log.license.customer.name}
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-4">
                        <span className="text-slate-700 block">{log.domain || "unbound"}</span>
                        <span className="text-[10px] text-slate-400 block">{log.ipAddress || "127.0.0.1"}</span>
                      </td>

                      <td className="py-3 px-4 text-slate-600 font-sans">
                        {log.storeVersion || "v1.1.0"}
                      </td>

                      <td className="py-3 px-4 text-right font-sans">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                            isSuccess
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : isExpired
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-rose-50 text-rose-700 border border-rose-200"
                          }`}
                        >
                          {log.outcome}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Admin Audit Trail */}
      {activeTab === "ADMIN_EVENTS" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Operator Administrative Actions</h3>
            <span className="text-xs text-slate-400">Audited Technext Operator events</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Target Entity</th>
                  <th className="py-3 px-4">Operator</th>
                  <th className="py-3 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {adminLogs.map((log: any) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>

                    <td className="py-3 px-4">
                      <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {log.action}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-bold text-slate-800">
                      {log.target}
                    </td>

                    <td className="py-3 px-4 text-slate-600 text-[11px]">
                      {log.adminEmail}
                    </td>

                    <td className="py-3 px-4 text-right text-slate-500 text-[11px]">
                      {log.details || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
