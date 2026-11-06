"use client";

import { useEffect, useState, useMemo } from "react";
import {
  ShoppingBag,
  Printer,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Truck,
  RotateCcw,
  XCircle,
  FileText,
  Tag,
  Package,
  Layers,
  ArrowRight,
  TrendingUp,
  CreditCard,
  User,
  CheckSquare,
  Square,
  Send,
  SlidersHorizontal,
} from "lucide-react";
import ShippingLabelModal, { ShippingLabelOrder } from "@/components/admin/shipping-label-modal";

export default function OrdersAdminPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Modals state
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState<any | null>(null);
  const [shippingLabelsToPrint, setShippingLabelsToPrint] = useState<ShippingLabelOrder[] | null>(null);

  // Multi-select for batch actions
  const [selectedOrderIds, setSelectedOrderIds] = useState<string[]>([]);

  // Status and tracking update states
  const [editStatus, setEditStatus] = useState("");
  const [editPaymentStatus, setEditPaymentStatus] = useState("");
  const [editTracking, setEditTracking] = useState("");
  const [editCourier, setEditCourier] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const loadOrders = () => {
    setLoading(true);
    fetch(`/api/admin/orders?status=${statusFilter}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.orders);
          if (selectedOrder) {
            const updated = data.orders.find((o: any) => o.id === selectedOrder.id);
            if (updated) setSelectedOrder(updated);
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadOrders();
  }, [statusFilter]);

  // Filtered orders based on search query
  const filteredOrders = useMemo(() => {
    if (!searchQuery.trim()) return orders;
    const q = searchQuery.toLowerCase();
    return orders.filter(
      (o) =>
        o.orderNumber.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.customerEmail.toLowerCase().includes(q) ||
        (o.trackingNumber && o.trackingNumber.toLowerCase().includes(q))
    );
  }, [orders, searchQuery]);

  // Order summary calculations
  const totalGross = useMemo(() => orders.reduce((sum, o) => sum + (o.total || 0), 0), [orders]);
  const pendingCount = useMemo(
    () => orders.filter((o) => o.orderStatus === "PENDING" || o.orderStatus === "CONFIRMED").length,
    [orders]
  );
  const shippedCount = useMemo(
    () => orders.filter((o) => o.orderStatus === "SHIPPED" || o.orderStatus === "PROCESSING" || o.orderStatus === "PACKED").length,
    [orders]
  );
  const deliveredCount = useMemo(
    () => orders.filter((o) => o.orderStatus === "DELIVERED").length,
    [orders]
  );

  const handleOpenDetail = (order: any) => {
    setSelectedOrder(order);
    setEditStatus(order.orderStatus);
    setEditPaymentStatus(order.paymentStatus);
    setEditTracking(order.trackingNumber || "");
    setEditCourier(order.shippingProvider || "DELHIVERY");
  };

  const handleUpdateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    setIsUpdating(true);

    try {
      await fetch("/api/admin/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedOrder.id,
          orderStatus: editStatus,
          paymentStatus: editPaymentStatus,
          trackingNumber: editTracking,
          shippingProvider: editCourier,
        }),
      });

      loadOrders();
    } finally {
      setIsUpdating(false);
    }
  };

  // Checkbox helpers
  const handleToggleSelectAll = () => {
    if (selectedOrderIds.length === filteredOrders.length) {
      setSelectedOrderIds([]);
    } else {
      setSelectedOrderIds(filteredOrders.map((o) => o.id));
    }
  };

  const handleToggleSelectOne = (id: string) => {
    setSelectedOrderIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Launch batch shipping label printer
  const handlePrintBatchLabels = () => {
    const selected = filteredOrders.filter((o) => selectedOrderIds.includes(o.id));
    if (selected.length > 0) {
      setShippingLabelsToPrint(selected);
    }
  };

  const statuses = [
    { key: "ALL", label: "All Orders" },
    { key: "PENDING", label: "Pending" },
    { key: "CONFIRMED", label: "Confirmed" },
    { key: "PROCESSING", label: "Processing" },
    { key: "PACKED", label: "Packed" },
    { key: "SHIPPED", label: "Shipped" },
    { key: "DELIVERED", label: "Delivered" },
    { key: "CANCELLED", label: "Cancelled" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header & Overview */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">
              Order Fulfillment & Shipping
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#2563EB] border border-blue-200">
              {filteredOrders.length} Orders
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Dispatch customer shipments, print thermal 4"×6" courier labels, generate GST tax invoices, and track parcel delivery.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-3">
          {selectedOrderIds.length > 0 && (
            <button
              onClick={handlePrintBatchLabels}
              className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <Tag className="w-3.5 h-3.5" />
              Print Shipping Labels ({selectedOrderIds.length})
            </button>
          )}
        </div>
      </div>

      {/* Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Gross Sales</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">₹{totalGross.toLocaleString("en-IN")}</p>
          <span className="text-[10px] text-slate-400">Total customer orders placed</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Awaiting Dispatch</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{pendingCount}</p>
          <span className="text-[10px] text-amber-600 font-semibold">Orders ready for packing</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">In Transit & Shipped</span>
            <Truck className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{shippedCount}</p>
          <span className="text-[10px] text-blue-600 font-semibold">Dispatched with active AWB</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Delivered</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{deliveredCount}</p>
          <span className="text-[10px] text-emerald-600 font-semibold">Successfully completed</span>
        </div>
      </div>

      {/* Search Bar & Status Tabs */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Order #, Customer Name, Email, or AWB..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
            />
          </div>

          {/* Batch Selector Bar when rows are selected */}
          {selectedOrderIds.length > 0 && (
            <div className="flex items-center gap-2 p-1.5 px-3 rounded-xl bg-blue-50 border border-blue-200 text-xs">
              <span className="font-bold text-[#2563EB]">{selectedOrderIds.length} Selected</span>
              <button
                onClick={handlePrintBatchLabels}
                className="px-2.5 py-1 rounded-lg bg-[#2563EB] text-white font-bold hover:bg-[#1D4ED8] transition-colors flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                Print Labels
              </button>
              <button
                onClick={() => setSelectedOrderIds([])}
                className="px-2 py-1 rounded-lg text-slate-500 hover:text-slate-800 font-medium"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {statuses.map((st) => (
            <button
              key={st.key}
              onClick={() => setStatusFilter(st.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                statusFilter === st.key
                  ? "bg-[#0A192F] text-white shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-semibold uppercase text-[11px] tracking-wider">
                <th className="py-3.5 px-4 w-10">
                  <button
                    onClick={handleToggleSelectAll}
                    className="p-1 rounded text-slate-400 hover:text-slate-700"
                  >
                    {selectedOrderIds.length === filteredOrders.length && filteredOrders.length > 0 ? (
                      <CheckSquare className="w-4 h-4 text-[#2563EB]" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="py-3.5 px-4">Order #</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Items</th>
                <th className="py-3.5 px-4">Total</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4">Fulfillment Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={9} className="text-center py-12 text-slate-400">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 animate-spin text-[#2563EB]" />
                      <span>Loading store order manifest...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-12 text-slate-400">
                    <Package className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="font-semibold text-slate-600">No orders match this filter.</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Try clearing your search query or selecting "All Orders".</p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((ord) => {
                  const isChecked = selectedOrderIds.includes(ord.id);
                  return (
                    <tr
                      key={ord.id}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isChecked ? "bg-blue-50/40" : ""
                      }`}
                    >
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => handleToggleSelectOne(ord.id)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-[#2563EB]" />
                          ) : (
                            <Square className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-mono font-extrabold text-[#0A192F] block">
                          {ord.orderNumber}
                        </span>
                        {ord.trackingNumber && (
                          <span className="text-[10px] font-mono text-slate-400 block truncate max-w-[120px]">
                            AWB: {ord.trackingNumber}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                        {new Date(ord.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                            {ord.customerName?.slice(0, 2).toUpperCase() || "CU"}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block truncate max-w-[140px]">
                              {ord.customerName}
                            </span>
                            <span className="text-[10px] text-slate-400 block truncate max-w-[140px]">
                              {ord.customerEmail}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        <span className="font-semibold">{ord.items?.length || 0}</span> product(s)
                      </td>
                      <td className="py-3.5 px-4 font-extrabold text-[#0A192F] whitespace-nowrap">
                        ₹{ord.total.toLocaleString("en-IN")}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold block text-slate-800 text-[11px]">
                          {ord.paymentMethod}
                        </span>
                        <span
                          className={`text-[9px] font-extrabold tracking-wider px-1.5 py-0.5 rounded uppercase inline-block mt-0.5 ${
                            ord.paymentStatus === "PAID"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {ord.paymentStatus}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5 ${
                            ord.orderStatus === "DELIVERED"
                              ? "bg-emerald-100 text-emerald-800"
                              : ord.orderStatus === "SHIPPED"
                              ? "bg-blue-100 text-blue-800"
                              : ord.orderStatus === "PACKED"
                              ? "bg-purple-100 text-purple-800"
                              : ord.orderStatus === "PROCESSING"
                              ? "bg-sky-100 text-sky-800"
                              : ord.orderStatus === "CANCELLED"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              ord.orderStatus === "DELIVERED"
                                ? "bg-emerald-600"
                                : ord.orderStatus === "SHIPPED"
                                ? "bg-blue-600 animate-pulse"
                                : "bg-slate-500"
                            }`}
                          />
                          {ord.orderStatus}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                        {/* 4x6 Shipping Label Printing Action */}
                        <button
                          onClick={() => setShippingLabelsToPrint([ord])}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold transition-colors inline-flex items-center gap-1 border border-emerald-200/80 shadow-2xs"
                          title="Print 4x6 Thermal Shipping Label"
                        >
                          <Tag className="w-3 h-3 text-emerald-600" />
                          <span>Label</span>
                        </button>

                        {/* Tax Invoice */}
                        <button
                          onClick={() => setShowInvoiceModal(ord)}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#2563EB] hover:bg-blue-100 font-bold transition-colors inline-flex items-center gap-1 border border-blue-200/80 shadow-2xs"
                          title="Generate Tax Invoice"
                        >
                          <Printer className="w-3 h-3 text-[#2563EB]" />
                          <span>Invoice</span>
                        </button>

                        {/* Order Management Details Drawer */}
                        <button
                          onClick={() => handleOpenDetail(ord)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                        >
                          Details
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

      {/* Order Details & Status Drawer Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-[#0A192F]">
                    Order {selectedOrder.orderNumber}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      selectedOrder.orderStatus === "DELIVERED"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {selectedOrder.orderStatus}
                  </span>
                </div>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Received on {new Date(selectedOrder.createdAt).toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Quick Action Buttons inside Drawer */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShippingLabelsToPrint([selectedOrder])}
                className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <Tag className="w-4 h-4 text-emerald-600" />
                Print 4"×6" Shipping Label
              </button>
              <button
                onClick={() => setShowInvoiceModal(selectedOrder)}
                className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold text-xs border border-blue-200 transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <Printer className="w-4 h-4 text-[#2563EB]" />
                View & Print Tax Invoice
              </button>
            </div>

            {/* Customer & Shipping Summary */}
            <div className="grid grid-cols-2 gap-4 text-xs p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                  Customer Information
                </span>
                <strong className="text-slate-900 block mt-1 text-sm">{selectedOrder.customerName}</strong>
                <p className="text-slate-600">{selectedOrder.customerEmail}</p>
                <p className="text-slate-600">{selectedOrder.customerPhone}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                  Payment Summary
                </span>
                <p className="mt-1 font-semibold text-slate-800">
                  Method: {selectedOrder.paymentMethod}
                </p>
                <p
                  className={`font-bold ${
                    selectedOrder.paymentStatus === "PAID" ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  Status: {selectedOrder.paymentStatus}
                </p>
                <p className="text-slate-600 font-extrabold text-sm mt-1">
                  Total: ₹{selectedOrder.total.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Line Items List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Purchased Items ({selectedOrder.items?.length || 0})
              </h4>
              <div className="border border-slate-200 rounded-2xl divide-y text-xs overflow-hidden">
                {selectedOrder.items?.map((item: any) => (
                  <div key={item.id} className="p-3 flex items-center justify-between bg-white">
                    <div>
                      <strong className="text-slate-800 block text-xs">{item.title}</strong>
                      {item.variantTitle && (
                        <span className="text-[11px] text-slate-500">{item.variantTitle}</span>
                      )}
                      <span className="text-[10px] text-slate-400 font-mono block">SKU: {item.sku}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-slate-700">
                        {item.quantity} × ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      <span className="block font-extrabold text-[#2563EB]">
                        ₹{item.total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Update Form */}
            <form onSubmit={handleUpdateOrder} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Fulfillment & Courier Routing</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Order Status</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-medium focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    {statuses.filter((s) => s.key !== "ALL").map((s) => (
                      <option key={s.key} value={s.key}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment Status</label>
                  <select
                    value={editPaymentStatus}
                    onChange={(e) => setEditPaymentStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-medium focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="PAID">Paid</option>
                    <option value="FAILED">Failed</option>
                    <option value="REFUNDED">Refunded</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Courier Partner</label>
                  <select
                    value={editCourier}
                    onChange={(e) => setEditCourier(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white font-medium focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option value="DELHIVERY">Delhivery Surface / Air</option>
                    <option value="SHIPROCKET">Shiprocket Priority</option>
                    <option value="BLUEDART">Blue Dart Apex</option>
                    <option value="DTDC">DTDC Plus Express</option>
                    <option value="FLAT_RATE">Standard Store Fleet</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tracking / AWB Number</label>
                  <input
                    type="text"
                    value={editTracking}
                    onChange={(e) => setEditTracking(e.target.value)}
                    placeholder="e.g. DL982183921IN"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl font-mono bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-5 py-2.5 bg-[#0A192F] hover:bg-[#1E293B] text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {isUpdating ? "Updating Status..." : "Save Status & Tracking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4x6 Thermal Shipping Label Printing Modal */}
      {shippingLabelsToPrint && (
        <ShippingLabelModal
          orders={shippingLabelsToPrint}
          onClose={() => setShippingLabelsToPrint(null)}
        />
      )}

      {/* Tax Invoice Modal */}
      {showInvoiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <span className="font-extrabold text-2xl text-[#0A192F] tracking-tight">TAX INVOICE</span>
                <p className="text-xs text-slate-400">AVRO Retail Solutions | GST Compliant Tax Document</p>
              </div>
              <button
                onClick={() => setShowInvoiceModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold">Billed To:</span>
                <strong className="text-slate-900 text-sm block mt-0.5">{showInvoiceModal.customerName}</strong>
                <p className="text-slate-600 mt-1">{showInvoiceModal.customerEmail}</p>
                <p className="text-slate-600">{showInvoiceModal.customerPhone}</p>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block font-semibold">Invoice Details:</span>
                <strong className="text-slate-900 block font-mono text-sm mt-0.5">Invoice #{showInvoiceModal.orderNumber}</strong>
                <span className="text-slate-600 block">Date: {new Date(showInvoiceModal.createdAt).toLocaleDateString()}</span>
                <span className="text-slate-600 block">Payment: {showInvoiceModal.paymentMethod} ({showInvoiceModal.paymentStatus})</span>
              </div>
            </div>

            {/* Table of items */}
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 border-b">
                <tr>
                  <th className="p-3">Item Description</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Unit Price</th>
                  <th className="p-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {showInvoiceModal.items?.map((it: any) => (
                  <tr key={it.id}>
                    <td className="p-3">
                      <strong>{it.title}</strong>
                      {it.variantTitle && <span className="text-slate-500 block text-[11px]">{it.variantTitle}</span>}
                    </td>
                    <td className="p-3 font-semibold">{it.quantity}</td>
                    <td className="p-3">₹{it.price.toLocaleString("en-IN")}</td>
                    <td className="p-3 text-right font-extrabold">₹{it.total.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end text-xs">
              <div className="w-56 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal:</span>
                  <strong className="text-slate-800">₹{showInvoiceModal.subtotal.toLocaleString("en-IN")}</strong>
                </div>
                {showInvoiceModal.discount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount:</span>
                    <strong>-₹{showInvoiceModal.discount.toLocaleString("en-IN")}</strong>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping Fee:</span>
                  <strong className="text-slate-800">₹{showInvoiceModal.shippingFee}</strong>
                </div>
                <div className="flex justify-between border-t pt-2 text-base font-extrabold text-[#0A192F]">
                  <span>Total Amount:</span>
                  <span>₹{showInvoiceModal.total.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-[10px] text-slate-400">Powered by AVRO Self-Hosted E-Commerce Platform</span>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-md transition-all"
              >
                <Printer className="w-4 h-4 text-emerald-400" />
                Print Tax Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
