"use client";

import { useEffect, useState } from "react";
import {
  Radio,
  Bell,
  AlertTriangle,
  Info,
  ShieldAlert,
  Send,
  Trash2,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

export default function SystemBroadcastsPage() {
  const [broadcasts, setBroadcasts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusMsg, setStatusMsg] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [newSeverity, setNewSeverity] = useState<"INFO" | "WARNING" | "CRITICAL">("INFO");
  const [newTargetTier, setNewTargetTier] = useState("ALL");
  const [submitting, setSubmitting] = useState(false);

  const loadBroadcasts = () => {
    setLoading(true);
    fetch("/api/v1/control/broadcasts")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBroadcasts(data.broadcasts);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadBroadcasts();
  }, []);

  const handleCreateBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/v1/control/broadcasts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          message: newMessage,
          severity: newSeverity,
          targetTier: newTargetTier,
        }),
      });

      const resData = await res.json();
      if (resData.success) {
        setStatusMsg("Broadcast dispatched to connected stores!");
        setNewTitle("");
        setNewMessage("");
        loadBroadcasts();
        setTimeout(() => setStatusMsg(""), 3500);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggle = async (id: string) => {
    await fetch("/api/v1/control/broadcasts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadBroadcasts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this broadcast notification?")) return;
    await fetch(`/api/v1/control/broadcasts?id=${id}`, { method: "DELETE" });
    loadBroadcasts();
  };

  if (loading) {
    return <div className="text-xs text-slate-500 py-12">Loading system broadcasts...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1 bg-amber-50 text-amber-700 border border-amber-200">
          <Radio className="w-3 h-3 text-amber-600 animate-pulse" />
          Network-Wide Push Notification Engine
        </div>
        <h1 className="text-2xl font-extrabold text-[#0A192F]">Store Network Broadcasts</h1>
        <p className="text-xs text-slate-500 mt-1">
          Publish maintenance windows, security patch bulletins, and announcements directly to customer Store Admin panels.
        </p>
      </div>

      {statusMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          {statusMsg}
        </div>
      )}

      {/* Main Grid: Broadcast Form & Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Authoring Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
            <Bell className="w-4 h-4 text-blue-600" />
            Dispatch New Broadcast Bulletin
          </h3>

          <form onSubmit={handleCreateBroadcast} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Bulletin Headline</label>
              <input
                type="text"
                required
                placeholder="e.g. Scheduled Central Maintenance: Nov 15th at 02:00 AM IST"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Detailed Announcement</label>
              <textarea
                rows={3}
                required
                placeholder="Explain the update, impact on offline checkout grace period, or recommended merchant steps..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Severity Level</label>
                <select
                  value={newSeverity}
                  onChange={(e) => setNewSeverity(e.target.value as any)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                >
                  <option value="INFO">Informational (Blue)</option>
                  <option value="WARNING">Important Notice (Amber)</option>
                  <option value="CRITICAL">Critical Alert (Red)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Audience Plan Tier</label>
                <select
                  value={newTargetTier}
                  onChange={(e) => setNewTargetTier(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                >
                  <option value="ALL">All Connected Stores (Basic, Grow, Plus)</option>
                  <option value="BASIC">Basic Plan Only</option>
                  <option value="GROW">Grow Plan Only</option>
                  <option value="PLUS">Plus Plan Only</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                {submitting ? "Broadcasting..." : "Dispatch Push Notice"}
              </button>
            </div>
          </form>
        </div>

        {/* Live Preview Container */}
        <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 text-white space-y-4 border border-slate-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Live Preview
            </span>
            <h4 className="font-bold text-sm text-slate-200">Merchant Store Admin Banner Appearance</h4>
          </div>

          <div
            className={`p-4 rounded-xl border text-xs space-y-1.5 transition-all ${
              newSeverity === "CRITICAL"
                ? "bg-rose-950/80 border-rose-600 text-rose-200"
                : newSeverity === "WARNING"
                ? "bg-amber-950/80 border-amber-600 text-amber-200"
                : "bg-blue-950/80 border-blue-600 text-blue-200"
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs">
              {newSeverity === "CRITICAL" ? (
                <ShieldAlert className="w-4 h-4 text-rose-400" />
              ) : newSeverity === "WARNING" ? (
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              ) : (
                <Info className="w-4 h-4 text-blue-400" />
              )}
              <span>{newTitle || "Example Bulletin Title"}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              {newMessage ||
                "This announcement will automatically appear on the store dashboard for all merchants matching the target subscription tier."}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
            <p>• Dispatched instantaneously via the Central Licensing heartbeat channel.</p>
            <p>• Automatically expires upon set date or admin manual dismissal.</p>
          </div>
        </div>
      </div>

      {/* Dispatched Broadcasts List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h3 className="text-base font-bold text-[#0A192F]">Active & Past Bulletins</h3>

        <div className="space-y-3">
          {broadcasts.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No broadcast notices dispatched yet.</p>
          ) : (
            broadcasts.map((b) => (
              <div
                key={b.id}
                className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs transition-colors ${
                  !b.isActive ? "bg-slate-50 border-slate-200 opacity-60" : "bg-white border-slate-200"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                        b.severity === "CRITICAL"
                          ? "bg-rose-100 text-rose-800"
                          : b.severity === "WARNING"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {b.severity}
                    </span>
                    <strong className="font-bold text-slate-900 text-xs">{b.title}</strong>
                    <span className="text-[10px] text-slate-400">Target: {b.targetTier} Tier</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{b.message}</p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => handleToggle(b.id)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                      b.isActive
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {b.isActive ? "ACTIVE" : "INACTIVE"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(b.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
