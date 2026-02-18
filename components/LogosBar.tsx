"use client";

import { useI18n } from "@/lib/i18n";

type Client = {
  name: string;
  img?: string;
  imgClass?: string;
};

const clients: Client[] = [
  { name: "MDM Mobiliario", img: "/clients/mdm.jpg", imgClass: "h-14 md:h-16 w-auto object-contain rounded" },
  { name: "Trumix", img: "/clients/trumix.png", imgClass: "h-10 md:h-12 w-auto object-contain" },
  { name: "Iris Studio", img: "/clients/iris.png", imgClass: "h-10 md:h-12 w-auto object-contain" },
  { name: "Eventicos", img: "/clients/eventicos.svg", imgClass: "h-8 md:h-10 w-auto object-contain" },
  { name: "Villa Solstice" },
  { name: "Ezelandscape" },
];

export function LogosBar() {
  const { t } = useI18n();

  // Triple the array for smooth infinite scroll with no gap
  const repeated = [...clients, ...clients, ...clients];

  return (
    <section className="border-y border-white/5 bg-carbon-gray py-10 md:py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="text-center text-sm uppercase tracking-[0.4em] text-white/30 mb-6 md:mb-8 font-mono">{t("logos.label")}</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center animate-scroll gap-12 md:gap-20 w-max">
          {repeated.map((client, i) =>
            client.img ? (
              <img
                key={`${client.name}-${i}`}
                src={client.img}
                alt={client.name}
                className={`shrink-0 ${client.imgClass} opacity-70 hover:opacity-100 transition-opacity`}
              />
            ) : (
              <span
                key={`${client.name}-${i}`}
                className="shrink-0 whitespace-nowrap border border-white/10 bg-white/5 px-6 md:px-8 py-2.5 md:py-3 text-xs font-bold text-white/40 uppercase tracking-luxury"
              >
                {client.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
