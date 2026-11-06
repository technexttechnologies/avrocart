"use client";

import { useEffect, useState } from "react";
import { Cpu, Plus, ShieldCheck, Download, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function VersionsControlPage() {
  const [releases, setReleases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newVersion, setNewVersion] = useState({
    version: "v1.2.0",
    changelog: "",
    isSecurityUpdate: false,
    downloadUrl: "https://releases.technext.co/avro/avro-v1.2.0.zip",
    isLatest: true,
  });

  const loadReleases = () => {
    setLoading(true);
    fetch("/api/v1/control/versions")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) setReleases(res.releases);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadReleases();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/v1/control/versions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVersion),
    });
    if (res.ok) {
      setIsModalOpen(false);
      loadReleases();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Software Releases & Updates</h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish core AVRO updates, security patches, and release notes for self-hosted instances.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          Publish New Version
        </button>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="text-xs text-slate-500 py-8">Loading versions...</div>
        ) : (
          releases.map((rel) => (
            <div
              key={rel.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-extrabold text-lg text-slate-900">{rel.version}</span>
                  {rel.isLatest && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      CURRENT STABLE RELEASE
                    </span>
                  )}
                  {rel.isSecurityUpdate && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                      CRITICAL SECURITY PATCH
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400">
                  Released: {new Date(rel.releaseDate).toLocaleDateString()}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-mono bg-slate-50 p-3 rounded-lg border border-slate-100 whitespace-pre-wrap">
                {rel.changelog}
              </p>

              {rel.downloadUrl && (
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Binary Artifact: <code>{rel.downloadUrl}</code></span>
                  <a
                    href={rel.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2563EB] hover:underline font-bold flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Archive
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-[#0A192F]">Publish New AVRO Release</h3>
            <form onSubmit={handleCreate} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Version String (SemVer)</label>
                <input
                  type="text"
                  required
                  value={newVersion.version}
                  onChange={(e) => setNewVersion({ ...newVersion, version: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Changelog & Release Notes</label>
                <textarea
                  required
                  rows={4}
                  value={newVersion.changelog}
                  onChange={(e) => setNewVersion({ ...newVersion, changelog: e.target.value })}
                  placeholder="Summarize new features, bug fixes, and security patches..."
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Package Download URL</label>
                <input
                  type="text"
                  value={newVersion.downloadUrl}
                  onChange={(e) => setNewVersion({ ...newVersion, downloadUrl: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg"
                />
              </div>
              <div className="space-y-2 pt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newVersion.isLatest}
                    onChange={(e) => setNewVersion({ ...newVersion, isLatest: e.target.checked })}
                    className="rounded text-[#2563EB]"
                  />
                  <span>Mark as Latest Official Stable Release</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={newVersion.isSecurityUpdate}
                    onChange={(e) => setNewVersion({ ...newVersion, isSecurityUpdate: e.target.checked })}
                    className="rounded text-rose-600"
                  />
                  <span className="text-rose-700 font-semibold">Flag as Critical Security Advisory</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg border font-semibold text-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#0A192F] text-white font-bold"
                >
                  Publish Release
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
