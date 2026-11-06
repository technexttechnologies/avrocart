import prisma from "@/lib/prisma";
import { ShieldCheck, Truck } from "lucide-react";

export default async function AboutPage() {
  const theme = await prisma.storeThemeSetting.findFirst();
  const brandName = theme?.brandName || "AVRO Store";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Brand Heritage</span>
        <h1 className="text-4xl font-extrabold text-[#0A192F] tracking-tight">About {brandName}</h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Crafting durable, thoughtful, and high-performance essentials for intentional living.
        </p>
      </div>

      <div className="prose prose-slate text-xs text-slate-600 leading-relaxed space-y-4">
        <p>
          Welcome to {brandName}. Our brand was created on the philosophy that everyday items—from the electronics we rely on for work to the clothing we wear daily—should be crafted with uncompromised attention to material purity, structural durability, and clean aesthetic minimalism.
        </p>
        <p>
          Unlike mass-market fast consumer products, our catalog is curated in focused production runs. Every piece is thoroughly inspected, backed by warranty, and dispatched directly from our dedicated warehouse to your doorstep.
        </p>
        <p>
          Powered by <strong>AVRO by TECHNEXT</strong>, our store operates on independent infrastructure, ensuring your personal order data, payment information, and transaction histories remain 100% private and protected.
        </p>
      </div>
    </div>
  );
}
