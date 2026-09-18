"use client";
import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import { Product } from "@/types/product";
import { useStore } from "./store-provider";
const money = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export function ProductCard({ product }: { product: Product }) {
  const { addProduct } = useStore();
  return (
    <article className="group">
      <div className="relative aspect-[.88] overflow-hidden rounded-2xl border line bg-[#131821]">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="focus-ring absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition hover:text-cyan"
        >
          <Heart size={16} />
        </button>
        <button
          onClick={() => addProduct(product)}
          aria-label={`Add ${product.name} to cart`}
          className="focus-ring absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-cyan text-black opacity-0 shadow-lg transition group-hover:opacity-100"
        >
          <Plus size={18} />
        </button>
        {product.personalization && (
          <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-cyan backdrop-blur">
            CUSTOMIZABLE
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <Link
            href={`/product/${product.slug}`}
            className="font-medium hover:text-cyan"
          >
            {product.name}
          </Link>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted">
            <Star size={12} className="fill-cyan text-cyan" /> {product.rating}{" "}
            <span className="mx-1">·</span> {product.category}
          </div>
        </div>
        <span className="whitespace-nowrap text-sm font-semibold">
          {money(product.price)}
        </span>
      </div>
    </article>
  );
}
