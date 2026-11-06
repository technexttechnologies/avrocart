"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  TrendingUp,
  Clock,
  PackageCheck,
  Layers,
  AlertTriangle,
  Users,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Truck,
  Tag,
  Package,
  Plus,
  Sliders,
  CreditCard,
  Printer,
  Sparkles,
} from "lucide-react";

export default function StoreDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) setData(res);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="flex items-center gap-3 text-slate-500 text-sm">
          <Clock className="w-5 h-5 text-[#2563EB] animate-spin" />
          <span>Synchronizing store telemetry & inventory...</span>
        </div>
      </div>
    );
  }

  const { stats, recentOrders, license } = data || {};

  return (
    <div className="space-y-8">
      {/* Welcome header & Quick Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">
              Store Operations Center
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live & Accepting Orders
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time sales tracking, dispatch pipeline, customer fulfillments, and product catalog.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/admin/orders"
            className="px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5"
          >
            <Tag className="w-3.5 h-3.5 text-emerald-600" />
            Print Shipping Labels
          </Link>
          <Link
            href="/admin/products"
            className="px-4 py-2 rounded-xl bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 text-blue-400" />
            Add Product
          </Link>
        </div>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Total Sales Volume</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">₹{stats?.totalSales?.toLocaleString("en-IN")}</p>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-emerald-600 font-semibold">Today: ₹{stats?.todaySales?.toLocaleString("en-IN")}</span>
            <span className="text-slate-400">100% direct revenue</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Orders Processed</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{stats?.totalOrders}</p>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-blue-600 font-semibold">{stats?.processingOrders} in packaging</span>
            <span className="text-slate-400">Zero commission</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Catalog SKUs</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-[#0A192F]">{stats?.totalProducts} Products</p>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-purple-600 font-semibold">Active Variants</span>
            <span className="text-slate-400">Local DB Storage</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Inventory Status</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-amber-600">{stats?.lowStockProducts} Low Stock</p>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-amber-700 font-semibold">Threshold &le; 10 units</span>
            <Link href="/admin/inventory" className="text-[#2563EB] hover:underline font-bold">
              Restock &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Fulfillment Pipeline Strip */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-extrabold text-[#0A192F] uppercase tracking-wider">
              Order Dispatch & Delivery Pipeline
            </h3>
            <p className="text-xs text-slate-400">Current live order distribution across fulfillment milestones.</p>
          </div>
          <Link href="/admin/orders" className="text-xs text-[#2563EB] font-bold hover:underline flex items-center gap-1">
            Dispatch Queue <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-amber-800 font-bold uppercase tracking-wider">
                Awaiting Fulfillment
              </span>
              <p className="text-2xl font-extrabold text-amber-950">{stats?.pendingOrders}</p>
              <span className="text-[10px] text-amber-700">Orders ready to print shipping labels</span>
            </div>
            <Clock className="w-8 h-8 text-amber-600 opacity-40" />
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-blue-800 font-bold uppercase tracking-wider">
                Packed & Dispatched
              </span>
              <p className="text-2xl font-extrabold text-blue-950">{stats?.processingOrders}</p>
              <span className="text-[10px] text-blue-700">Shipped with carrier tracking</span>
            </div>
            <Truck className="w-8 h-8 text-blue-600 opacity-40" />
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider">
                Delivered Customers
              </span>
              <p className="text-2xl font-extrabold text-emerald-950">{stats?.completedOrders}</p>
              <span className="text-[10px] text-emerald-700">Doorstep delivery confirmed</span>
            </div>
            <PackageCheck className="w-8 h-8 text-emerald-600 opacity-40" />
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-[#0A192F]">Recent Store Orders</h3>
            <p className="text-xs text-slate-500">Customer transactions placed directly on your self-hosted storefront.</p>
          </div>
          <Link href="/admin/orders" className="text-xs text-[#2563EB] font-bold hover:underline flex items-center gap-1">
            View All Orders ({stats?.totalOrders}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[11px] tracking-wider">
                <th className="pb-3">Order #</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Fulfillment</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders?.map((ord: any) => (
                <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 font-mono font-bold text-[#0A192F]">
                    {ord.orderNumber}
                  </td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-[9px] flex-shrink-0">
                        {ord.customerName?.slice(0, 2).toUpperCase() || "CU"}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">{ord.customerName}</span>
                        <span className="text-[10px] text-slate-400">{ord.customerEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 font-extrabold text-[#0A192F]">₹{ord.total.toLocaleString("en-IN")}</td>
                  <td className="py-3.5">
                    <span className="font-semibold text-slate-700 block">{ord.paymentMethod}</span>
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
                  <td className="py-3.5">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ${
                        ord.orderStatus === "DELIVERED"
                          ? "bg-emerald-100 text-emerald-800"
                          : ord.orderStatus === "SHIPPED"
                          ? "bg-blue-100 text-blue-800"
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
                  <td className="py-3.5 text-right whitespace-nowrap space-x-1.5">
                    <Link
                      href="/admin/orders"
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold border border-emerald-200/80 shadow-2xs inline-flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3 text-emerald-600" />
                      Label
                    </Link>
                    <Link
                      href="/admin/orders"
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
