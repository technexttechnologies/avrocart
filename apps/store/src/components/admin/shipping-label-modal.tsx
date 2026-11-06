"use client";

import React from "react";
import { Printer, X, Download, ShieldCheck, Check, Package, QrCode } from "lucide-react";

export interface ShippingLabelOrder {
  id: string;
  orderNumber: string;
  createdAt: string | Date;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddressJson?: string;
  total: number;
  paymentMethod: string;
  paymentStatus: string;
  shippingProvider?: string;
  trackingNumber?: string;
  items: Array<{
    id: string;
    title: string;
    variantTitle?: string;
    sku: string;
    quantity: number;
    price: number;
  }>;
}

interface ShippingLabelModalProps {
  orders: ShippingLabelOrder[];
  onClose: () => void;
}

export default function ShippingLabelModal({ orders, onClose }: ShippingLabelModalProps) {
  if (!orders || orders.length === 0) return null;

  const handlePrint = () => {
    window.print();
  };

  // Helper to parse address
  const parseAddress = (order: ShippingLabelOrder) => {
    if (order.shippingAddressJson) {
      try {
        const parsed = JSON.parse(order.shippingAddressJson);
        return {
          fullName: parsed.fullName || order.customerName,
          addressLine1: parsed.addressLine1 || "Plot 42, Commercial Avenue",
          addressLine2: parsed.addressLine2 || "",
          city: parsed.city || "New Delhi",
          state: parsed.state || "Delhi",
          postalCode: parsed.postalCode || "110001",
          phone: parsed.phone || order.customerPhone || "+91 98765 43210",
        };
      } catch (e) {
        // fallback
      }
    }
    return {
      fullName: order.customerName,
      addressLine1: "Suite 302, Cyber Tower",
      addressLine2: "Phase 2, Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560038",
      phone: order.customerPhone || "+91 98765 43210",
    };
  };

  // Helper for tracking number & courier
  const getCourierDetails = (order: ShippingLabelOrder) => {
    const courier = (order.shippingProvider || "DELHIVERY").toUpperCase();
    const cleanNum = order.orderNumber.replace(/[^0-9]/g, "");
    const tracking =
      order.trackingNumber && order.trackingNumber.trim().length > 3
        ? order.trackingNumber
        : courier === "SHIPROCKET"
        ? `SR${cleanNum || "9802"}9281IN`
        : courier === "BLUEDART" || courier === "BLUE_DART"
        ? `BD${cleanNum || "4512"}7701IN`
        : courier === "DTDC"
        ? `DT${cleanNum || "3321"}8899IN`
        : `DL${cleanNum || "1029"}3844IN`;

    const routingCode =
      courier === "DELHIVERY"
        ? "DEL / NZ-110001 / A"
        : courier === "SHIPROCKET"
        ? "SR-EXP / BLR-S02"
        : courier === "DTDC"
        ? "DTDC-PRIO / NORTH-1"
        : "BD-APEX / HYD-HUB";

    return { courier, tracking, routingCode };
  };

  return (
    <>
      {/* On-Screen Modal Overlay */}
      <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto no-print">
        <div className="bg-white rounded-3xl border border-slate-200 max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
          {/* Modal Header */}
          <div className="px-6 py-4 bg-[#0A192F] text-white flex items-center justify-between border-b border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <Printer className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-extrabold tracking-tight">
                  E-Commerce Thermal Shipping Labels (4" × 6")
                </h3>
                <p className="text-xs text-slate-300">
                  {orders.length} label{orders.length > 1 ? "s" : ""} prepared for thermal or laser dispatch printing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Print Labels Now
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content - Scrollable Preview */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-100 flex flex-col items-center gap-8">
            <div className="w-full max-w-[420px] text-center text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              <span className="font-semibold text-slate-700">Printing Tip:</span> Compatible with TSC, Zebra, Rollo & standard thermal printers (4"x6" / 100mm×150mm) or A4 sheets.
            </div>

            {orders.map((order, idx) => {
              const address = parseAddress(order);
              const { courier, tracking, routingCode } = getCourierDetails(order);
              const isCOD = order.paymentMethod === "COD" || order.paymentStatus !== "PAID";

              return (
                <div
                  key={order.id}
                  className="bg-white w-full max-w-[420px] border-2 border-black rounded-lg shadow-lg overflow-hidden font-mono text-black text-[11px] leading-tight"
                  style={{ minHeight: "600px" }}
                >
                  {/* Courier & Routing Header */}
                  <div className="p-3 border-b-2 border-black flex items-center justify-between">
                    <div>
                      <span className="text-[14px] font-black tracking-tight block uppercase">
                        {courier === "DELHIVERY"
                          ? "DELHIVERY EXPRESS"
                          : courier === "SHIPROCKET"
                          ? "SHIPROCKET AIR"
                          : courier === "DTDC"
                          ? "DTDC PLUS"
                          : "BLUE DART APEX"}
                      </span>
                      <span className="text-[9px] font-bold text-slate-700">
                        STANDARD SURFACE & AIR LOGISTICS
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[12px] font-black border-2 border-black px-1.5 py-0.5 rounded uppercase">
                        {routingCode}
                      </span>
                      <span className="text-[9px] block text-slate-600 mt-0.5">
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* High-Resolution Simulated Barcode */}
                  <div className="p-3 border-b-2 border-black text-center bg-white space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-full h-12"
                        viewBox="0 0 300 48"
                        preserveAspectRatio="none"
                      >
                        {/* Realistic Code 128 vertical bar pattern */}
                        <g fill="black">
                          <rect x="0" y="0" width="3" height="48" />
                          <rect x="5" y="0" width="2" height="48" />
                          <rect x="10" y="0" width="4" height="48" />
                          <rect x="16" y="0" width="1" height="48" />
                          <rect x="20" y="0" width="5" height="48" />
                          <rect x="28" y="0" width="2" height="48" />
                          <rect x="33" y="0" width="3" height="48" />
                          <rect x="38" y="0" width="4" height="48" />
                          <rect x="45" y="0" width="2" height="48" />
                          <rect x="50" y="0" width="5" height="48" />
                          <rect x="58" y="0" width="2" height="48" />
                          <rect x="63" y="0" width="4" height="48" />
                          <rect x="70" y="0" width="3" height="48" />
                          <rect x="75" y="0" width="1" height="48" />
                          <rect x="80" y="0" width="6" height="48" />
                          <rect x="89" y="0" width="2" height="48" />
                          <rect x="94" y="0" width="4" height="48" />
                          <rect x="101" y="0" width="3" height="48" />
                          <rect x="107" y="0" width="5" height="48" />
                          <rect x="115" y="0" width="2" height="48" />
                          <rect x="120" y="0" width="4" height="48" />
                          <rect x="127" y="0" width="1" height="48" />
                          <rect x="131" y="0" width="6" height="48" />
                          <rect x="140" y="0" width="3" height="48" />
                          <rect x="146" y="0" width="2" height="48" />
                          <rect x="151" y="0" width="5" height="48" />
                          <rect x="159" y="0" width="2" height="48" />
                          <rect x="164" y="0" width="4" height="48" />
                          <rect x="171" y="0" width="3" height="48" />
                          <rect x="177" y="0" width="5" height="48" />
                          <rect x="185" y="0" width="2" height="48" />
                          <rect x="190" y="0" width="4" height="48" />
                          <rect x="197" y="0" width="1" height="48" />
                          <rect x="201" y="0" width="6" height="48" />
                          <rect x="210" y="0" width="3" height="48" />
                          <rect x="216" y="0" width="2" height="48" />
                          <rect x="221" y="0" width="5" height="48" />
                          <rect x="229" y="0" width="2" height="48" />
                          <rect x="234" y="0" width="4" height="48" />
                          <rect x="241" y="0" width="3" height="48" />
                          <rect x="247" y="0" width="5" height="48" />
                          <rect x="255" y="0" width="2" height="48" />
                          <rect x="260" y="0" width="4" height="48" />
                          <rect x="267" y="0" width="1" height="48" />
                          <rect x="271" y="0" width="5" height="48" />
                          <rect x="279" y="0" width="3" height="48" />
                          <rect x="285" y="0" width="2" height="48" />
                          <rect x="290" y="0" width="4" height="48" />
                          <rect x="296" y="0" width="4" height="48" />
                        </g>
                      </svg>

                      {/* QR matrix placeholder */}
                      <div className="w-12 h-12 border-2 border-black p-0.5 flex-shrink-0 flex items-center justify-center">
                        <QrCode className="w-10 h-10 text-black" />
                      </div>
                    </div>
                    <span className="text-[12px] font-black tracking-widest block uppercase mt-1">
                      AWB: {tracking}
                    </span>
                  </div>

                  {/* Payment Type Banner */}
                  <div
                    className={`p-2 border-b-2 border-black text-center font-black uppercase text-[12px] tracking-wider ${
                      isCOD ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {isCOD
                      ? `CASH ON DELIVERY (COD) — COLLECT ₹${order.total.toLocaleString("en-IN")}`
                      : "★ PREPAID SHIPMENT — DO NOT COLLECT CASH ★"}
                  </div>

                  {/* Consignee / Ship-To Details */}
                  <div className="p-3 border-b-2 border-black space-y-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider block text-slate-600">
                      SHIP TO (CONSIGNEE):
                    </span>
                    <strong className="text-[14px] font-black block uppercase tracking-tight">
                      {address.fullName}
                    </strong>
                    <p className="text-[11px] leading-tight font-medium">
                      {address.addressLine1}
                      {address.addressLine2 ? `, ${address.addressLine2}` : ""}
                    </p>
                    <p className="text-[11px] leading-tight font-medium">
                      {address.city}, {address.state}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[14px] font-black tracking-wider bg-black text-white px-2 py-0.5 rounded">
                        PIN: {address.postalCode}
                      </span>
                      <span className="text-[11px] font-bold">
                        TEL: {address.phone}
                      </span>
                    </div>
                  </div>

                  {/* Shipped By / Return To */}
                  <div className="p-3 border-b-2 border-black space-y-0.5 bg-slate-50 text-[10px]">
                    <span className="text-[8px] font-extrabold uppercase tracking-wider block text-slate-500">
                      RETURN ADDRESS (SELLER):
                    </span>
                    <strong className="text-[11px] font-black block uppercase">
                      AVRO OFFICIAL STORE (LOGISTICS WAREHOUSE)
                    </strong>
                    <p>Technext Logistics Hub, Sector 62, Industrial Area</p>
                    <p>Noida, Uttar Pradesh - 201309 | Helpline: 1800-AVRO-SHOP</p>
                    <p className="font-bold">GSTIN: 07AAACT9021M1Z4</p>
                  </div>

                  {/* Package & Product Information */}
                  <div className="p-3 border-b-2 border-black space-y-1">
                    <div className="grid grid-cols-3 gap-2 pb-1 border-b border-black text-[10px]">
                      <div>
                        <span className="text-slate-500 block text-[8px] uppercase">Order #</span>
                        <strong className="font-black">{order.orderNumber}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[8px] uppercase">Gross Weight</span>
                        <strong className="font-black">0.450 KG</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block text-[8px] uppercase">Boxes</span>
                        <strong className="font-black">1 of 1</strong>
                      </div>
                    </div>

                    <div className="pt-1">
                      <span className="text-[8px] font-extrabold text-slate-500 uppercase block mb-0.5">
                        PACKAGE MANIFEST ({order.items?.length || 0} ITEMS):
                      </span>
                      <div className="space-y-0.5">
                        {order.items?.slice(0, 3).map((it) => (
                          <div key={it.id} className="flex justify-between text-[10px]">
                            <span className="truncate max-w-[280px]">
                              {it.quantity}x {it.title} {it.variantTitle ? `(${it.variantTitle})` : ""}
                            </span>
                            <span className="font-mono text-[9px] text-slate-600">{it.sku}</span>
                          </div>
                        ))}
                        {(order.items?.length || 0) > 3 && (
                          <span className="text-[9px] text-slate-500 italic block">
                            + {(order.items?.length || 0) - 3} more line item(s)...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verification & Barcode */}
                  <div className="p-2 text-center text-[9px] bg-white flex items-center justify-between">
                    <span className="font-mono text-slate-500">
                      SECURED BY AVRO DISPATCH ENGINE
                    </span>
                    <span className="font-bold">
                      DELIVERY ATTEMPTS: 3
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal Footer Controls */}
          <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between flex-shrink-0">
            <span className="text-xs text-slate-500">
              Labels will print 1 per page on thermal label rolls or standard sheet.
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
              >
                <Printer className="w-4 h-4 text-emerald-400" />
                Print Shipping Labels
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Print-Only Container (Rendered on window.print()) */}
      <div id="printable-shipping-labels" className="print-only">
        {orders.map((order) => {
          const address = parseAddress(order);
          const { courier, tracking, routingCode } = getCourierDetails(order);
          const isCOD = order.paymentMethod === "COD" || order.paymentStatus !== "PAID";

          return (
            <div
              key={order.id}
              className="shipping-label-sheet font-mono text-black text-[11px] leading-tight"
              style={{
                width: "100mm",
                minHeight: "150mm",
                padding: "4mm",
                margin: "0 auto",
                pageBreakAfter: "always",
                border: "2px solid black",
                boxSizing: "border-box",
              }}
            >
              {/* Courier & Routing Header */}
              <div
                style={{
                  paddingBottom: "3mm",
                  borderBottom: "2px solid black",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "900",
                      display: "block",
                      textTransform: "uppercase",
                    }}
                  >
                    {courier === "DELHIVERY"
                      ? "DELHIVERY EXPRESS"
                      : courier === "SHIPROCKET"
                      ? "SHIPROCKET AIR"
                      : courier === "DTDC"
                      ? "DTDC PLUS"
                      : "BLUE DART APEX"}
                  </span>
                  <span style={{ fontSize: "9px", fontWeight: "700" }}>
                    STANDARD SURFACE & AIR LOGISTICS
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      border: "2px solid black",
                      padding: "2px 4px",
                      display: "inline-block",
                      textTransform: "uppercase",
                    }}
                  >
                    {routingCode}
                  </span>
                  <span
                    style={{
                      fontSize: "9px",
                      display: "block",
                      marginTop: "2px",
                    }}
                  >
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Barcode */}
              <div
                style={{
                  padding: "3mm 0",
                  borderBottom: "2px solid black",
                  textAlign: "center",
                }}
              >
                <svg
                  style={{ width: "90%", height: "42px", margin: "0 auto" }}
                  viewBox="0 0 300 48"
                  preserveAspectRatio="none"
                >
                  <g fill="black">
                    <rect x="0" y="0" width="3" height="48" />
                    <rect x="5" y="0" width="2" height="48" />
                    <rect x="10" y="0" width="4" height="48" />
                    <rect x="16" y="0" width="1" height="48" />
                    <rect x="20" y="0" width="5" height="48" />
                    <rect x="28" y="0" width="2" height="48" />
                    <rect x="33" y="0" width="3" height="48" />
                    <rect x="38" y="0" width="4" height="48" />
                    <rect x="45" y="0" width="2" height="48" />
                    <rect x="50" y="0" width="5" height="48" />
                    <rect x="58" y="0" width="2" height="48" />
                    <rect x="63" y="0" width="4" height="48" />
                    <rect x="70" y="0" width="3" height="48" />
                    <rect x="75" y="0" width="1" height="48" />
                    <rect x="80" y="0" width="6" height="48" />
                    <rect x="89" y="0" width="2" height="48" />
                    <rect x="94" y="0" width="4" height="48" />
                    <rect x="101" y="0" width="3" height="48" />
                    <rect x="107" y="0" width="5" height="48" />
                    <rect x="115" y="0" width="2" height="48" />
                    <rect x="120" y="0" width="4" height="48" />
                    <rect x="127" y="0" width="1" height="48" />
                    <rect x="131" y="0" width="6" height="48" />
                    <rect x="140" y="0" width="3" height="48" />
                    <rect x="146" y="0" width="2" height="48" />
                    <rect x="151" y="0" width="5" height="48" />
                    <rect x="159" y="0" width="2" height="48" />
                    <rect x="164" y="0" width="4" height="48" />
                    <rect x="171" y="0" width="3" height="48" />
                    <rect x="177" y="0" width="5" height="48" />
                    <rect x="185" y="0" width="2" height="48" />
                    <rect x="190" y="0" width="4" height="48" />
                    <rect x="197" y="0" width="1" height="48" />
                    <rect x="201" y="0" width="6" height="48" />
                    <rect x="210" y="0" width="3" height="48" />
                    <rect x="216" y="0" width="2" height="48" />
                    <rect x="221" y="0" width="5" height="48" />
                    <rect x="229" y="0" width="2" height="48" />
                    <rect x="234" y="0" width="4" height="48" />
                    <rect x="241" y="0" width="3" height="48" />
                    <rect x="247" y="0" width="5" height="48" />
                    <rect x="255" y="0" width="2" height="48" />
                    <rect x="260" y="0" width="4" height="48" />
                    <rect x="267" y="0" width="1" height="48" />
                    <rect x="271" y="0" width="5" height="48" />
                    <rect x="279" y="0" width="3" height="48" />
                    <rect x="285" y="0" width="2" height="48" />
                    <rect x="290" y="0" width="4" height="48" />
                    <rect x="296" y="0" width="4" height="48" />
                  </g>
                </svg>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "900",
                    display: "block",
                    letterSpacing: "2px",
                    marginTop: "2mm",
                  }}
                >
                  AWB: {tracking}
                </span>
              </div>

              {/* Payment Type */}
              <div
                style={{
                  padding: "2mm",
                  borderBottom: "2px solid black",
                  textAlign: "center",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  background: isCOD ? "black" : "white",
                  color: isCOD ? "white" : "black",
                }}
              >
                {isCOD
                  ? `CASH ON DELIVERY (COD) — COLLECT ₹${order.total.toLocaleString("en-IN")}`
                  : "★ PREPAID SHIPMENT — DO NOT COLLECT CASH ★"}
              </div>

              {/* Consignee Details */}
              <div
                style={{
                  padding: "3mm 0",
                  borderBottom: "2px solid black",
                }}
              >
                <span style={{ fontSize: "9px", fontWeight: "900", textTransform: "uppercase" }}>
                  SHIP TO (CONSIGNEE):
                </span>
                <strong
                  style={{
                    fontSize: "14px",
                    fontWeight: "900",
                    display: "block",
                    textTransform: "uppercase",
                    marginTop: "1mm",
                  }}
                >
                  {address.fullName}
                </strong>
                <p style={{ fontSize: "11px", margin: "1mm 0" }}>
                  {address.addressLine1}
                  {address.addressLine2 ? `, ${address.addressLine2}` : ""}
                </p>
                <p style={{ fontSize: "11px", margin: "1mm 0" }}>
                  {address.city}, {address.state}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "2mm",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "900",
                      background: "black",
                      color: "white",
                      padding: "1px 5px",
                    }}
                  >
                    PIN: {address.postalCode}
                  </span>
                  <span style={{ fontSize: "11px", fontWeight: "700" }}>
                    TEL: {address.phone}
                  </span>
                </div>
              </div>

              {/* Shipped By */}
              <div
                style={{
                  padding: "2.5mm 0",
                  borderBottom: "2px solid black",
                  fontSize: "10px",
                }}
              >
                <span style={{ fontSize: "8px", fontWeight: "900", textTransform: "uppercase" }}>
                  RETURN ADDRESS (SELLER):
                </span>
                <strong style={{ fontSize: "11px", fontWeight: "900", display: "block" }}>
                  AVRO OFFICIAL STORE (LOGISTICS WAREHOUSE)
                </strong>
                <p style={{ margin: "0.5mm 0" }}>
                  Technext Logistics Hub, Sector 62, Noida, UP - 201309
                </p>
                <p style={{ margin: "0.5mm 0", fontWeight: "700" }}>
                  GSTIN: 07AAACT9021M1Z4
                </p>
              </div>

              {/* Package Meta */}
              <div style={{ padding: "2.5mm 0", borderBottom: "2px solid black" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
                  <span>
                    ORDER: <strong>{order.orderNumber}</strong>
                  </span>
                  <span>
                    WT: <strong>0.450 KG</strong>
                  </span>
                  <span>
                    BOX: <strong>1 of 1</strong>
                  </span>
                </div>
                <div style={{ marginTop: "2mm", fontSize: "9px" }}>
                  <span style={{ fontWeight: "700" }}>ITEMS: </span>
                  {order.items?.map((it) => `${it.quantity}x ${it.title}`).join(", ")}
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  paddingTop: "2mm",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "8px",
                }}
              >
                <span>SECURED BY AVRO LOGISTICS</span>
                <span>ATTEMPTS: 3</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global CSS for Clean Thermal Printing */}
      <style jsx global>{`
        @media print {
          /* Hide everything except printable-shipping-labels */
          body * {
            visibility: hidden !important;
          }
          #printable-shipping-labels,
          #printable-shipping-labels * {
            visibility: visible !important;
          }
          #printable-shipping-labels {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: 100mm 150mm;
            margin: 0;
          }
        }
        @media screen {
          .print-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
