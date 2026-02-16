import { Reveal } from "@/components/Reveal";

const brands = ["Iris Studio", "MDM", "Eventicos", "Villa Solstice", "Ezelandscape", "Trumix"];

export function LogosBar() {
  return (
    <section className="border-y border-black/5 bg-white py-12" aria-label="Marcas aliadas">
      <Reveal className="section-shell">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-black/45">Marcas que confían en nosotros</p>
        <div className="mt-8 flex gap-6 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible">
          {brands.map((brand) => (
            <span
              key={brand}
              className="shrink-0 rounded-full border border-black/10 px-5 py-2 text-sm font-medium text-black/45 transition hover:border-brand-blue/25 hover:text-brand-blue"
            >
              {brand}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
