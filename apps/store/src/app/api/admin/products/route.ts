import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase();

    const products = await prisma.product.findMany({
      where: search
        ? {
            OR: [
              { title: { contains: search } },
              { sku: { contains: search } },
            ],
          }
        : undefined,
      include: {
        category: true,
        images: { orderBy: { sortOrder: "asc" } },
        variants: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const categories = await prisma.category.findMany();

    return NextResponse.json({ success: true, products, categories });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      shortDescription,
      description,
      regularPrice,
      salePrice,
      sku,
      stockQuantity = 0,
      categoryId,
      imageUrl,
      variants = [],
    } = body;

    const cleanSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const product = await prisma.product.create({
      data: {
        title,
        slug: cleanSlug,
        shortDescription,
        description: description || title,
        regularPrice: parseFloat(regularPrice),
        salePrice: salePrice ? parseFloat(salePrice) : null,
        sku: sku.trim().toUpperCase(),
        stockQuantity: parseInt(stockQuantity),
        categoryId: categoryId || null,
        status: "PUBLISHED",
        images: imageUrl
          ? {
              create: [{ url: imageUrl, isPrimary: true, sortOrder: 1 }],
            }
          : undefined,
        variants:
          variants.length > 0
            ? {
                create: variants.map((v: any) => ({
                  title: v.title,
                  sku: v.sku || `${sku}-${Math.random().toString(36).substring(7).toUpperCase()}`,
                  price: parseFloat(v.price || regularPrice),
                  stockQuantity: parseInt(v.stockQuantity || stockQuantity),
                  attributesJson: JSON.stringify(v.attributes || {}),
                })),
              }
            : undefined,
      },
      include: { images: true, variants: true },
    });

    // Record initial inventory log
    await prisma.inventoryLog.create({
      data: {
        productId: product.id,
        changeAmount: product.stockQuantity,
        resultingStock: product.stockQuantity,
        reason: "RESTOCK",
        notes: "Initial inventory provisioning during product creation.",
      },
    });

    return NextResponse.json({ success: true, product });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, regularPrice, salePrice, stockQuantity, status, categoryId } = body;

    const product = await prisma.product.update({
      where: { id },
      data: {
        title,
        regularPrice: regularPrice !== undefined ? parseFloat(regularPrice) : undefined,
        salePrice: salePrice !== undefined ? (salePrice ? parseFloat(salePrice) : null) : undefined,
        stockQuantity: stockQuantity !== undefined ? parseInt(stockQuantity) : undefined,
        status,
        categoryId: categoryId || undefined,
      },
    });

    return NextResponse.json({ success: true, product });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "ID required" }, { status: 400 });

    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Product deleted" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
