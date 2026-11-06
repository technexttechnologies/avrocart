"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import {
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
  Heart,
} from "lucide-react";

export function ProductViewClient({ product }: { product: any }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isSaved = isInWishlist(product.id);

  const [selectedImg, setSelectedImg] = useState(
    product.images?.[0]?.url ||
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  );

  const [selectedVariant, setSelectedVariant] = useState<any | null>(
    product.variants?.length > 0 ? product.variants[0] : null
  );

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const currentPrice = selectedVariant
    ? selectedVariant.price
    : product.salePrice || product.regularPrice;

  const currentSku = selectedVariant ? selectedVariant.sku : product.sku;
  const currentStock = selectedVariant
    ? selectedVariant.stockQuantity
    : product.stockQuantity;

  const handleAddToCart = () => {
    addToCart(
      {
        id: selectedVariant ? selectedVariant.id : product.id,
        productId: product.id,
        variantId: selectedVariant ? selectedVariant.id : null,
        title: product.title,
        variantTitle: selectedVariant ? selectedVariant.title : null,
        price: currentPrice,
        sku: currentSku,
        image: selectedImg,
      },
      qty
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Gallery */}
      <div className="lg:col-span-7 space-y-4">
        <div className="aspect-square bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <img
            src={selectedImg}
            alt={product.title}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {product.images?.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((img: any, idx: number) => (
              <button
                key={img.id || idx}
                onClick={() => setSelectedImg(img.url)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                  selectedImg === img.url ? "border-[#2563EB] shadow-sm" : "border-slate-200 hover:border-slate-400"
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Details */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          {product.category && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
              {product.category.name}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
            {product.title}
          </h1>
          <span className="text-xs text-slate-400 font-mono block mt-1">SKU: {currentSku}</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 pb-4 border-b border-slate-200">
          <span className="text-3xl font-extrabold text-slate-900">
            ₹{currentPrice.toLocaleString("en-IN")}
          </span>
          {product.salePrice && (
            <span className="text-sm text-slate-400 line-through">
              ₹{product.regularPrice.toLocaleString("en-IN")}
            </span>
          )}
          <span className="text-xs text-emerald-600 font-bold ml-2">Inclusive of all taxes</span>
        </div>

        {/* Short description */}
        {product.shortDescription && (
          <p className="text-xs text-slate-600 leading-relaxed">{product.shortDescription}</p>
        )}

        {/* Variants Selector */}
        {product.variants?.length > 0 && (
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">Choose Option / Variant:</label>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v: any) => {
                const isSelected = selectedVariant?.id === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      isSelected
                        ? "bg-[#0A192F] text-white border-[#0A192F] shadow-sm"
                        : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    {v.title}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Stock status */}
        <div className="text-xs">
          {currentStock > 0 ? (
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              In Stock ({currentStock} available for instant dispatch)
            </span>
          ) : (
            <span className="text-rose-600 font-bold">Currently Out of Stock</span>
          )}
        </div>

        {/* Quantity and Actions */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
              >
                -
              </button>
              <span className="px-3 py-2 font-bold text-xs text-slate-900 min-w-[2rem] text-center">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-[#0A192F] hover:bg-[#1E293B] text-white"
              }`}
            >
              {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className={`p-3 rounded-xl border transition-all ${
                isSaved
                  ? "bg-rose-50 border-rose-300 text-rose-600"
                  : "border-slate-300 bg-white hover:bg-slate-50 text-slate-700"
              }`}
              title={isSaved ? "Saved in Wishlist" : "Save to Wishlist"}
            >
              <Heart className={`w-5 h-5 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
            </button>
          </div>

          <button
            type="button"
            onClick={handleBuyNow}
            className="w-full py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider transition-all shadow"
          >
            Buy Now with 1-Click
          </button>
        </div>

        {/* Service assurances */}
        <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-4 text-[11px] text-slate-600">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#2563EB]" />
            <span>Fast Express Courier</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-purple-600" />
            <span>7-Day Return Policy</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Secure Server Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Instant Dispatch</span>
          </div>
        </div>

        {/* Detailed description */}
        <div className="pt-6 border-t border-slate-200 space-y-2 text-xs text-slate-600 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-sm">Product Specifications</h4>
          <p className="whitespace-pre-line">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
