import {
  Box,
  ChevronRight,
  Instagram,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  Timer,
  WandSparkles,
} from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "./product-card";
export function ShopSection() {
  return (
    <section id="shop" className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow">The collection / 006 objects</div>
          <h2 className="serif mt-3 text-4xl tracking-[-.035em] sm:text-5xl">
            Explore our <em className="text-cyan">creations.</em>
          </h2>
        </div>
        <a
          href="#shop-grid"
          className="flex items-center gap-1 text-sm text-slate-300 hover:text-cyan"
        >
          View all products <ChevronRight size={15} />
        </a>
      </div>
      <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
        {categories.slice(0, 8).map((cat, i) => (
          <button
            key={cat}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs transition ${i === 0 ? "border-cyan bg-cyan text-black" : "line text-slate-400 hover:border-white/30 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        id="shop-grid"
        className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-6"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
export function HowItWorks() {
  const steps = [
    {
      icon: WandSparkles,
      no: "01",
      title: "Upload your photo",
      text: "Share a memory, a face, a pet, or an idea.",
    },
    {
      icon: Palette,
      no: "02",
      title: "Choose your style",
      text: "Tune the form, finish, color, and personal details.",
    },
    {
      icon: Box,
      no: "03",
      title: "We create",
      text: "Our studio turns your configuration into a real object.",
    },
    {
      icon: PackageCheck,
      no: "04",
      title: "Arrives with care",
      text: "Packed safely and sent from our lab to your door.",
    },
  ];
  return (
    <section id="how" className="border-y line bg-[#10151d] py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="max-w-[600px]">
          <div className="eyebrow">The process / no guesswork</div>
          <h2 className="serif mt-3 text-4xl tracking-[-.035em] sm:text-5xl">
            From a tiny idea to <em className="text-cyan">something real.</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map(({ icon: Icon, no, title, text }) => (
            <div key={no} className="relative border-t border-white/15 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-cyan">{no}</span>
                <Icon size={20} className="text-slate-500" />
              </div>
              <h3 className="mt-7 font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Collections() {
  const cards = [
    { name: "Couples", img: products[0].image },
    { name: "Pets", img: products[2].image },
    { name: "Characters", img: products[3].image },
    { name: "Home décor", img: products[5].image },
  ];
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <div className="eyebrow">Curated by feeling</div>
          <h2 className="serif mt-3 text-4xl tracking-[-.035em] sm:text-5xl">
            Made for your <em className="text-cyan">memories.</em>
          </h2>
        </div>
        <Sparkles className="hidden text-violet sm:block" />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.name}
            className="group relative aspect-[.82] overflow-hidden rounded-2xl"
          >
            <img
              src={card.img}
              alt={card.name}
              className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-sm font-medium">
              {card.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function WhyUs() {
  const items = [
    {
      icon: Sparkles,
      title: "High detail",
      text: "Precision-focused printing for small things that feel special.",
    },
    {
      icon: WandSparkles,
      title: "Custom made",
      text: "Every personalized model is built around your story.",
    },
    {
      icon: ShieldCheck,
      title: "Premium materials",
      text: "Finishes chosen for color, character, and longevity.",
    },
    {
      icon: PackageCheck,
      title: "Packed with care",
      text: "Thoughtful protection from our studio to your shelf.",
    },
  ];
  return (
    <section id="about" className="border-y line bg-[#10151d] py-20">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <div className="eyebrow">Why printify</div>
            <h2 className="serif mt-3 text-4xl tracking-[-.035em]">
              Small objects.
              <br />
              <em className="text-cyan">Big meaning.</em>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 shrink-0 text-cyan" size={20} />
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function SocialProof() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="eyebrow">Studio notes / customer love</div>
          <h2 className="serif mt-3 text-4xl tracking-[-.035em] sm:text-5xl">
            Loved by the <em className="text-cyan">people</em> behind the
            photos.
          </h2>
        </div>
        <a
          href="https://www.instagram.com/printify_creationss/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan"
        >
          <Instagram size={16} /> @printify_creationss
        </a>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          [
            "Aarav & Meera",
            "“The little details were perfect. It feels like our favorite photo, just... tangible.”",
            "Custom Couple Figurine",
          ],
          [
            "Ritika Sharma",
            "“Such a beautiful gift. The packaging and the finish both felt incredibly thoughtful.”",
            "Memory Figurine",
          ],
          [
            "Nikhil Rao",
            "“Sent a photo of my dog and got a tiny version of him that made everyone smile.”",
            "Custom Pet Model",
          ],
        ].map(([name, review, product]) => (
          <div key={name} className="rounded-2xl border line bg-[#10151d] p-6">
            <div className="flex gap-1 text-cyan">★★★★★</div>
            <p className="mt-5 text-sm leading-6 text-slate-300">{review}</p>
            <div className="mt-7 border-t line pt-4">
              <div className="text-sm font-medium">{name}</div>
              <div className="mt-1 text-xs text-muted">{product}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer id="contact" className="border-t line bg-[#090c11]">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan/10 text-cyan">
              <Box size={17} />
            </span>
            Printify <span className="text-cyan">Creations</span>
          </div>
          <p className="mt-5 max-w-[260px] text-sm leading-6 text-muted">
            Turning imagination and memories into 3D creations.
          </p>
        </div>
        {[
          ["Shop", "All Products", "Custom Models", "Figurines", "Gifts"],
          ["Help", "How It Works", "Shipping", "Returns", "FAQ"],
          ["Company", "About", "Instagram", "Contact", "Careers"],
        ].map(([title, ...links]) => (
          <div key={title}>
            <div className="eyebrow">{title}</div>
            <div className="mt-5 space-y-3 text-sm text-muted">
              {links.map((link) => (
                <a
                  key={link}
                  className="block hover:text-cyan"
                  href={
                    link === "Instagram"
                      ? "https://www.instagram.com/printify_creationss/"
                      : "#"
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-3 border-t line px-5 py-5 text-xs text-muted sm:flex-row lg:px-8">
        <span>© 2026 Printify Creations. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <Timer size={13} /> Made in small batches, with care.
        </span>
      </div>
    </footer>
  );
}
