"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Server,
  Globe,
  CheckCircle2,
  AlertTriangle,
  RotateCw,
  Search,
  ExternalLink,
  ShieldAlert,
  Zap,
  Terminal,
  Unlink,
  Radio,
  Clock,
  Layers,
} from "lucide-react";

export default function FleetTelemetryPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const loadData = () => {
    setLoading(true);
    fetch("/api/v1/control/telemetry")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) setData(res);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleNodeAction = async (action: string, licenseId: string) => {
    setActionNotice(null);
    try {
      const res = await fetch("/api/v1/control/telemetry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, licenseId }),
      });
      const resData = await res.json();
      if (resData.success) {
        setActionNotice(resData.message);
        loadData();
        setTimeout(() => setActionNotice(null), 3500);
      }
    } catch (err: any) {
      setActionNotice("Error performing action.");
    }
  };

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Querying self-hosted fleet nodes...</div>;
  }

  const nodes = data?.nodes || [];
  const stats = data?.stats || { totalNodes: 0, healthyNodes: 0, graceNodes: 0, offlineNodes: 0 };

  const filteredNodes = nodes.filter((n: any) => {
    const matchesSearch =
      n.boundDomain.toLowerCase().includes(search.toLowerCase()) ||
      n.customerName.toLowerCase().includes(search.toLowerCase()) ||
      n.licenseKey.toLowerCase().includes(search.toLowerCase()) ||
      n.companyName.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" ? true : n.healthStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Radio className="w-3 h-3 animate-pulse text-emerald-600" />
            Live Deployment Fleet Telemetry
          </div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Fleet Nodes & Remote Health</h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time status monitoring, domain bindings, heartbeat verifications, and remote maintenance across all independent AVRO installations.
          </p>
        </div>

        <button
          onClick={loadData}
          className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <RotateCw className="w-3.5 h-3.5 text-blue-600" />
          Poll All Fleet Nodes
        </button>
      </div>

      {actionNotice && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* Fleet KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Total Deployments</span>
            <strong className="text-2xl font-extrabold text-slate-900">{stats.totalNodes}</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Self-hosted customer stores</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
            <Server className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Healthy & Online</span>
            <strong className="text-2xl font-extrabold text-emerald-600">{stats.healthyNodes}</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Heartbeat &lt; 48 hours</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">In 72h Grace Buffer</span>
            <strong className="text-2xl font-extrabold text-amber-600">{stats.graceNodes}</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Offline resilient active</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-1">Offline / Suspended</span>
            <strong className="text-2xl font-extrabold text-rose-600">{stats.offlineNodes}</strong>
            <span className="text-[11px] text-slate-400 block mt-0.5">Expired or manual block</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <ShieldAlert className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search domain, customer, or license..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {["ALL", "HEALTHY", "GRACE_PERIOD", "OFFLINE", "SUSPENDED"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === st
                  ? "bg-[#0A192F] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {st === "ALL"
                ? "All Nodes"
                : st === "HEALTHY"
                ? "Healthy"
                : st === "GRACE_PERIOD"
                ? "In Grace"
                : st === "OFFLINE"
                ? "Offline"
                : "Suspended"}
            </button>
          ))}
        </div>
      </div>

      {/* Nodes Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                <th className="py-3 px-4">Node & Domain</th>
                <th className="py-3 px-4">Customer & Merchant</th>
                <th className="py-3 px-4">Plan & Version</th>
                <th className="py-3 px-4">Health Status</th>
                <th className="py-3 px-4">Last Ping & IP</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredNodes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    No fleet installations match the selected query.
                  </td>
                </tr>
              ) : (
                filteredNodes.map((node: any) => {
                  const isHealthy = node.healthStatus === "HEALTHY";
                  const isGrace = node.healthStatus === "GRACE_PERIOD";
                  const isSuspended = node.healthStatus === "SUSPENDED";

                  return (
                    <tr key={node.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <strong className="font-mono text-slate-900 font-bold text-xs">
                              {node.boundDomain}
                            </strong>
                            {node.boundDomain !== "Unbound (Awaiting Setup)" && (
                              <a
                                href={node.boundDomain.startsWith("http") ? node.boundDomain : `http://${node.boundDomain}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                          <code className="text-[10px] text-slate-400 block font-mono">
                            {node.licenseKey}
                          </code>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5">
                          <strong className="font-bold text-slate-800 block">{node.companyName}</strong>
                          <span className="text-[11px] text-slate-500 block">{node.customerName}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-50 text-[#2563EB] border border-blue-200">
                            AVRO {node.planTier}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 block">
                            {node.storeVersion}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        {isHealthy ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            HEALTHY (Online)
                          </span>
                        ) : isGrace ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <AlertTriangle className="w-3 h-3 text-amber-500" />
                            72H GRACE ({node.hoursSincePing}h ago)
                          </span>
                        ) : isSuspended ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                            <ShieldAlert className="w-3 h-3 text-rose-500" />
                            SUSPENDED (Locked)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                            OFFLINE ({node.hoursSincePing}h ago)
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5 text-[11px]">
                          <span className="text-slate-700 block font-medium">
                            {node.lastHeartbeatAt
                              ? new Date(node.lastHeartbeatAt).toLocaleString()
                              : "No ping recorded"}
                          </span>
                          <span className="font-mono text-slate-400 text-[10px]">
                            IP: {node.latestIp}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleNodeAction("FORCE_PING", node.id)}
                            title="Acknowledge Heartbeat"
                            className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-[11px]"
                          >
                            <RotateCw className="w-3.5 h-3.5" />
                          </button>

                          {node.boundDomain !== "Unbound (Awaiting Setup)" && (
                            <button
                              type="button"
                              onClick={() => handleNodeAction("UNBIND_DOMAIN", node.id)}
                              title="Unbind Domain for Server Migration"
                              className="px-2.5 py-1 rounded-lg border border-amber-200 text-amber-800 bg-amber-50 hover:bg-amber-100 text-[11px] font-bold flex items-center gap-1"
                            >
                              <Unlink className="w-3 h-3" />
                              Unbind
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleNodeAction("TOGGLE_SUSPEND", node.id)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                              isSuspended
                                ? "bg-emerald-600 text-white hover:bg-emerald-500"
                                : "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100"
                            }`}
                          >
                            {isSuspended ? "Restore" : "Suspend"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
