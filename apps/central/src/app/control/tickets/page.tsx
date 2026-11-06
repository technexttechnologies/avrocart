"use client";

import { useEffect, useState } from "react";
import { LifeBuoy, Send, MessageSquare, AlertCircle, CheckCircle2, Clock, User } from "lucide-react";

export default function TicketsControlPage() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTicket, setActiveTicket] = useState<any | null>(null);
  const [replyText, setReplyText] = useState("");

  const loadTickets = () => {
    setLoading(true);
    fetch("/api/v1/control/tickets")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setTickets(res.tickets);
          if (res.tickets.length > 0 && !activeTicket) {
            setActiveTicket(res.tickets[0]);
          } else if (activeTicket) {
            const updated = res.tickets.find((t: any) => t.id === activeTicket.id);
            if (updated) setActiveTicket(updated);
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTicket || !replyText.trim()) return;

    await fetch("/api/v1/control/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticketId: activeTicket.id,
        message: replyText,
      }),
    });

    setReplyText("");
    loadTickets();
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    await fetch("/api/v1/control/tickets", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    loadTickets();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-[#0A192F]">Customer Support Tickets</h1>
        <p className="text-xs text-slate-500 mt-1">
          Respond to customer inquiries, resolve setup questions, and manage SLA priorities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[600px] overflow-hidden">
        {/* Left Column: Tickets List */}
        <div className="lg:col-span-4 border-r border-slate-200 flex flex-col">
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Active Ticket Queues ({tickets.length})
            </span>
          </div>

          <div className="divide-y divide-slate-100 flex-1 overflow-y-auto max-h-[600px]">
            {loading ? (
              <div className="p-6 text-xs text-slate-400 text-center">Loading ticket queue...</div>
            ) : tickets.length === 0 ? (
              <div className="p-6 text-xs text-slate-400 text-center">No active support tickets.</div>
            ) : (
              tickets.map((t) => {
                const isSelected = activeTicket?.id === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTicket(t)}
                    className={`w-full text-left p-4 transition-colors block ${
                      isSelected ? "bg-blue-50/60 border-l-4 border-l-[#2563EB]" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold text-slate-400">{t.ticketNumber}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                          t.status === "OPEN"
                            ? "bg-amber-100 text-amber-800"
                            : t.status === "RESOLVED"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-blue-100 text-[#2563EB]"
                        }`}
                      >
                        {t.status}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{t.subject}</h4>
                    <p className="text-[11px] text-slate-500 mt-1">{t.customer?.name} ({t.category})</p>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Ticket Thread & Reply */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          {activeTicket ? (
            <>
              {/* Ticket Top bar */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-slate-400">{activeTicket.ticketNumber}</span>
                    <h3 className="text-sm font-bold text-slate-900">{activeTicket.subject}</h3>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Client: <strong>{activeTicket.customer?.name}</strong> ({activeTicket.customer?.email}) | Priority: {activeTicket.priority}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={activeTicket.status}
                    onChange={(e) => handleUpdateStatus(activeTicket.id, e.target.value)}
                    className="text-xs px-2.5 py-1 border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="RESOLVED">Resolved</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </div>
              </div>

              {/* Messages Thread */}
              <div className="p-6 space-y-4 flex-1 overflow-y-auto max-h-[420px]">
                {activeTicket.messages?.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-8">No message thread history.</p>
                ) : (
                  activeTicket.messages?.map((m: any) => {
                    const isAdmin = m.senderType === "ADMIN";
                    return (
                      <div
                        key={m.id}
                        className={`flex flex-col ${isAdmin ? "items-end" : "items-start"}`}
                      >
                        <div
                          className={`max-w-lg p-3.5 rounded-2xl text-xs space-y-1 ${
                            isAdmin
                              ? "bg-[#0A192F] text-white rounded-br-none"
                              : "bg-slate-100 text-slate-800 rounded-bl-none"
                          }`}
                        >
                          <span className={`block text-[10px] font-bold ${isAdmin ? "text-blue-300" : "text-slate-500"}`}>
                            {m.senderName} ({new Date(m.createdAt).toLocaleTimeString()})
                          </span>
                          <p className="leading-relaxed whitespace-pre-wrap">{m.message}</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Reply Box */}
              <form onSubmit={handleSendReply} className="p-4 border-t border-slate-200 bg-white flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Type an official TECHNEXT administrative reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  Reply
                </button>
              </form>
            </>
          ) : (
            <div className="p-12 text-center text-xs text-slate-400 flex flex-col items-center justify-center h-full">
              <LifeBuoy className="w-8 h-8 mb-2 text-slate-300" />
              Select a ticket to view conversation thread.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
