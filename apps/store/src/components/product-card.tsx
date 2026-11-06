"use client";

import Link from "next/link";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useState } from "react";

export function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const primaryImg =
    product.images?.[0]?.url ||
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80";

  const effectivePrice = product.salePrice || product.regularPrice;
  const hasDiscount = product.salePrice && product.salePrice < product.regularPrice;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: product.id,
      productId: product.id,
      title: product.title,
      price: effectivePrice,
      sku: product.sku,
      image: primaryImg,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <Link href={`/product/${product.slug}`} className="block relative aspect-square bg-slate-100 overflow-hidden">
        <img
          src={primaryImg}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {hasDiscount && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-600 text-white shadow-sm">
            SALE
          </span>
        )}

        {product.stockQuantity <= 5 && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white shadow-sm">
            ONLY {product.stockQuantity} LEFT
          </span>
        )}
      </Link>

      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
        <div>
          {product.category && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {product.category.name}
            </span>
          )}
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-bold text-xs text-slate-900 group-hover:text-[#2563EB] transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <div>
            <span className="text-sm font-extrabold text-slate-900">
              ₹{effectivePrice.toLocaleString("en-IN")}
            </span>
            {hasDiscount && (
              <span className="text-[11px] text-slate-400 line-through ml-2">
                ₹{product.regularPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            className={`p-2 rounded-xl transition-all ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 hover:bg-[#0A192F] text-slate-800 hover:text-white"
            }`}
            title="Quick add to cart"
          >
            {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
