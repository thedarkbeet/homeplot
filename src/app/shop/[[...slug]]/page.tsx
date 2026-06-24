import React from "react";

type ShopPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;

  const currentSlug = slug || [];

  const [category, brand, model] = currentSlug;

  return (
    <div className="p-10 font-sans bg-white min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
          {category ? `Catalog / ${category}` : "Main Store"}
        </h1>
        <p className="text-zinc-400 font-medium">
          {brand ? `Exploring ${brand} collection` : "Browse all brands"}
        </p>
      </header>

      <nav className="flex items-center gap-3 mb-10">
        <span className="text-zinc-400 font-medium">Shop</span>
        {currentSlug.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-zinc-300">/</span>
            <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-bold text-zinc-800 capitalize">{s}</span>
          </div>
        ))}
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {!category && (
          <div className="max-w-2xl p-8 bg-zinc-900 rounded-4xl text-white shadow-2xl transition-all hover:scale-[1.01]">
            <h2 className="text-2xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">Welcome to the store</h2>
            <p className="text-zinc-400">Select a category to get started</p>
          </div>
        )}

        {category && (
          <div className="p-8 bg-zinc-50 rounded-4xl text-zinc-800 shadow-2xl">
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">Active Filter</p>
            <div className="space-y-2">
              <p>
                <strong>Category:</strong>
                {" "}
                {category}
              </p>
              {brand && (
                <p>
                  <strong>Brand:</strong>
                  {" "}
                  {brand}
                </p>
              )}
              {model && (
                <p>
                  <strong>Model:</strong>
                  {" "}
                  {model}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 text-[10px] text-zinc-400 font-mono bg-zinc-50 p-3 rounded border border-zinc-100 inline-block">
        [DEBUG] Raw segments array:
        {" "}
        {JSON.stringify(currentSlug)}
      </div>
    </div>
  );
}
