"use client";

import { useState } from "react";
import { PublicNav } from "@/components/public-nav";
import { PublicFooter } from "@/components/public-footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PublicNav />

      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Get in Touch</span>
            <h1 className="text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Contact TECHNEXT TECHNOLOGIES
            </h1>
            <p className="text-slate-600 text-sm">
              Inquire about enterprise deployments, bespoke customization quotations, or technical partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-[#0A192F] text-white p-8 rounded-2xl space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">Office & Support</h3>
                  <p className="text-xs text-slate-400 mt-1">TECHNEXT TECHNOLOGIES PVT LTD</p>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                    <span>support@technext.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#2563EB]" />
                    <span>+91 98765 43210 (Mon-Sat, 9am - 7pm IST)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                    <span>Connaught Place, New Delhi & Indiranagar, Bengaluru</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                <p className="font-semibold text-white mb-1">Direct Engineering SLA</p>
                <p>Guaranteed response within 4 hours for AVRO Plus license subscribers and 12 hours for Grow licenses.</p>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Delivered</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. A TECHNEXT engineering representative will respond to <strong>{formData.email}</strong> within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Aditya Sharma"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aditya@domain.com"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none"
                    >
                      <option value="General Inquiry">General Product Inquiry</option>
                      <option value="Customization Quotation">Bespoke Customization Quotation</option>
                      <option value="Setup Assistance">Hosting & Setup Assistance</option>
                      <option value="License Domain Transfer">License Domain Transfer Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, server environment, or operational questions..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
                  >
                    Send Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
