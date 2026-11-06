"use client";

import { useEffect, useState } from "react";
import {
  Layers,
  Plus,
  Search,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Image as ImageIcon,
  Sliders,
  Tag,
} from "lucide-react";

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New product form
  const [newProd, setNewProd] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    description: "",
    regularPrice: "",
    salePrice: "",
    sku: "",
    stockQuantity: "25",
    categoryId: "",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    variants: [] as any[],
  });

  const [tempVariant, setTempVariant] = useState({ title: "", sku: "", price: "", stockQuantity: "10" });

  const loadProducts = () => {
    setLoading(true);
    fetch(`/api/admin/products?search=${encodeURIComponent(search)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
          setCategories(data.categories);
          if (data.categories.length > 0 && !newProd.categoryId) {
            setNewProd((prev) => ({ ...prev, categoryId: data.categories[0].id }));
          }
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProducts();
  }, [search]);

  const handleAddVariant = () => {
    if (!tempVariant.title) return;
    setNewProd((prev) => ({
      ...prev,
      variants: [...prev.variants, tempVariant],
    }));
    setTempVariant({ title: "", sku: "", price: "", stockQuantity: "10" });
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProd),
    });
    if (res.ok) {
      setIsAddModalOpen(false);
      setNewProd({
        title: "",
        slug: "",
        shortDescription: "",
        description: "",
        regularPrice: "",
        salePrice: "",
        sku: "",
        stockQuantity: "25",
        categoryId: categories[0]?.id || "",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        variants: [],
      });
      loadProducts();
    }
  };

  const handleToggleStatus = async (product: any) => {
    const nextStatus = product.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    await fetch("/api/admin/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id, status: nextStatus }),
    });
    loadProducts();
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await fetch(`/api/admin/products?id=${id}`, { method: "DELETE" });
    loadProducts();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0A192F]">Products & Variants</h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage your store's multi-variant merchandise, pricing, multi-image galleries, and inventory.
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-[#1E293B] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Product
        </button>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search products by title or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase">
                <th className="py-3.5 px-4">Product Details</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">SKU</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Stock</th>
                <th className="py-3.5 px-4">Variants</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-slate-400">Loading products...</td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-slate-400">No products found.</td>
                </tr>
              ) : (
                products.map((p) => {
                  const primaryImg = p.images?.[0]?.url;
                  return (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                            {primaryImg ? (
                              <img src={primaryImg} alt={p.title} className="w-full h-full object-cover" />
                            ) : (
                              <ImageIcon className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block line-clamp-1">{p.title}</span>
                            <span className="text-[10px] text-slate-400">/{p.slug}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">{p.category?.name || "Uncategorized"}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-700">{p.sku}</td>
                      <td className="py-3.5 px-4">
                        <strong className="text-slate-900">₹{p.regularPrice.toLocaleString("en-IN")}</strong>
                        {p.salePrice && (
                          <span className="text-[10px] text-emerald-600 block font-semibold">
                            Sale: ₹{p.salePrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`font-extrabold ${
                            p.stockQuantity <= 5
                              ? "text-rose-600"
                              : p.stockQuantity <= 15
                              ? "text-amber-600"
                              : "text-slate-700"
                          }`}
                        >
                          {p.stockQuantity} units
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {p.variants?.length > 0 ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#2563EB]">
                            {p.variants.length} variant{p.variants.length > 1 ? "s" : ""}
                          </span>
                        ) : (
                          <span className="text-slate-400">None</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(p)}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            p.status === "PUBLISHED"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-slate-200 text-slate-700"
                          }`}
                        >
                          {p.status}
                        </button>
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1">
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="p-1 rounded text-slate-400 hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
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

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-[#0A192F]">Create New Store Product</h3>
            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={newProd.title}
                    onChange={(e) => setNewProd({ ...newProd, title: e.target.value })}
                    placeholder="e.g. Ergonomic Office Chair"
                    className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Master SKU *</label>
                  <input
                    type="text"
                    required
                    value={newProd.sku}
                    onChange={(e) => setNewProd({ ...newProd, sku: e.target.value })}
                    placeholder="e.g. CHR-001"
                    className="w-full px-3 py-1.5 border rounded-lg focus:outline-none font-mono uppercase"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Regular Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={newProd.regularPrice}
                    onChange={(e) => setNewProd({ ...newProd, regularPrice: e.target.value })}
                    placeholder="9999"
                    className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sale Price (Optional)</label>
                  <input
                    type="number"
                    value={newProd.salePrice}
                    onChange={(e) => setNewProd({ ...newProd, salePrice: e.target.value })}
                    placeholder="8499"
                    className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Stock Quantity</label>
                  <input
                    type="number"
                    value={newProd.stockQuantity}
                    onChange={(e) => setNewProd({ ...newProd, stockQuantity: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={newProd.categoryId}
                    onChange={(e) => setNewProd({ ...newProd, categoryId: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded-lg bg-white focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Primary Image URL</label>
                  <input
                    type="text"
                    value={newProd.imageUrl}
                    onChange={(e) => setNewProd({ ...newProd, imageUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Short Summary</label>
                <input
                  type="text"
                  value={newProd.shortDescription}
                  onChange={(e) => setNewProd({ ...newProd, shortDescription: e.target.value })}
                  placeholder="Single line product hook..."
                  className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Description</label>
                <textarea
                  rows={3}
                  value={newProd.description}
                  onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
                  placeholder="Detailed material, dimensions, specs, and features..."
                  className="w-full px-3 py-1.5 border rounded-lg focus:outline-none"
                />
              </div>

              {/* Variants Builder */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <span className="font-bold text-slate-800 block">Product Variants (Size, Color, etc.)</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Variant (e.g. Size: XL, Color: Navy)"
                    value={tempVariant.title}
                    onChange={(e) => setTempVariant({ ...tempVariant, title: e.target.value })}
                    className="flex-1 px-2.5 py-1 text-xs border rounded-lg bg-white"
                  />
                  <input
                    type="number"
                    placeholder="Price Override"
                    value={tempVariant.price}
                    onChange={(e) => setTempVariant({ ...tempVariant, price: e.target.value })}
                    className="w-24 px-2 py-1 text-xs border rounded-lg bg-white"
                  />
                  <input
                    type="number"
                    placeholder="Qty"
                    value={tempVariant.stockQuantity}
                    onChange={(e) => setTempVariant({ ...tempVariant, stockQuantity: e.target.value })}
                    className="w-16 px-2 py-1 text-xs border rounded-lg bg-white"
                  />
                  <button
                    type="button"
                    onClick={handleAddVariant}
                    className="px-3 py-1 bg-slate-800 text-white font-bold rounded-lg"
                  >
                    + Add
                  </button>
                </div>

                {newProd.variants.length > 0 && (
                  <div className="space-y-1">
                    {newProd.variants.map((v, i) => (
                      <div key={i} className="flex items-center justify-between p-1.5 bg-white border rounded text-[11px]">
                        <span><strong>{v.title}</strong> — ₹{v.price || newProd.regularPrice} ({v.stockQuantity} units)</span>
                        <button
                          type="button"
                          onClick={() => setNewProd({ ...newProd, variants: newProd.variants.filter((_, idx) => idx !== i) })}
                          className="text-rose-600 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-1.5 border rounded-lg text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#0A192F] text-white font-bold rounded-lg"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
