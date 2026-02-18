"use client";

import { useI18n } from "@/lib/i18n";

function VillaSolsticeLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 155" fill="none" stroke="#c9b99a" strokeWidth="1.5" strokeLinecap="round" className="w-auto" style={{ height: "52px" }}>
      <line x1="30" y1="80" x2="170" y2="80" />
      <path d="M 65 80 A 35 35 0 0 1 135 80" />
      <line x1="100" y1="40" x2="100" y2="22" />
      <line x1="84" y1="44" x2="78" y2="28" />
      <line x1="116" y1="44" x2="122" y2="28" />
      <line x1="70" y1="54" x2="60" y2="42" />
      <line x1="130" y1="54" x2="140" y2="42" />
      <line x1="58" y1="67" x2="46" y2="58" />
      <line x1="142" y1="67" x2="154" y2="58" />
      <path d="M 50 88 Q 65 83 80 88 Q 95 93 110 88 Q 125 83 140 88" />
      <path d="M 60 96 Q 75 91 90 96 Q 105 101 120 96 Q 135 91 150 96" />
      <text x="100" y="122" textAnchor="middle" fill="#c9b99a" stroke="none" fontFamily="serif" fontSize="13" letterSpacing="0.45em" fontWeight="400">VILLA SOLSTICE</text>
      <text x="100" y="140" textAnchor="middle" fill="#c9b99a" stroke="none" fontFamily="sans-serif" fontSize="5.5" letterSpacing="0.55em" opacity="0.5">HACIENDA PINILLA • GUANACASTE</text>
    </svg>
  );
}

function EventicosLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 50" fill="none" className="w-auto" style={{ height: "34px" }}>
      <text x="0" y="38" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontSize="36" fontWeight="600" letterSpacing="-0.02em" fill="#ffffff">eventicos</text>
      <g transform="translate(107, 2)">
        <path d="M4 0 L4.8 3.2 L8 4 L4.8 4.8 L4 8 L3.2 4.8 L0 4 L3.2 3.2 Z" fill="#d4a843"/>
        <path d="M10 1 L10.4 2.4 L11.8 2.8 L10.4 3.2 L10 4.6 L9.6 3.2 L8.2 2.8 L9.6 2.4 Z" fill="#d4a843" opacity="0.6"/>
      </g>
    </svg>
  );
}

type Client = {
  name: string;
  img?: string;
  imgStyle?: React.CSSProperties;
  inline?: boolean;
};

const clients: Client[] = [
  { name: "MDM Mobiliario", img: "/clients/mdm.jpg",    imgStyle: { height: "52px", width: "auto", objectFit: "contain", borderRadius: "4px" } },
  { name: "Iris Studio",    img: "/clients/iris.png",   imgStyle: { height: "44px", width: "auto", objectFit: "contain" } },
  { name: "Eventicos",      inline: true },
  { name: "Trumix",         img: "/clients/trumix.png", imgStyle: { height: "40px", width: "auto", objectFit: "contain" } },
  { name: "Villa Solstice", inline: true },
];

export function LogosBar() {
  const { t } = useI18n();
  const repeated = [...clients, ...clients, ...clients];

  return (
    <section className="border-y border-white/5 bg-carbon-gray py-10 md:py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="text-center text-sm uppercase tracking-[0.4em] text-white/30 mb-6 md:mb-8 font-mono">{t("logos.label")}</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center animate-scroll gap-14 md:gap-24 w-max">
          {repeated.map((client, i) => {
            const key = `${client.name}-${i}`;

            if (client.inline && client.name === "Villa Solstice") {
              return (
                <div key={key} className="shrink-0 flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity">
                  <VillaSolsticeLogo />
                </div>
              );
            }
            if (client.inline) {
              return (
                <div key={key} className="shrink-0 flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity">
                  <EventicosLogo />
                </div>
              );
            }
            if (client.img) {
              return (
                <div key={key} className="shrink-0 flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity">
                  <img
                    src={client.img}
                    alt={client.name}
                    style={client.imgStyle}
                    loading="lazy"
                  />
                </div>
              );
            }
            return (
              <div key={key} className="shrink-0 flex items-center justify-center h-16">
                <span className="whitespace-nowrap border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-white/40 uppercase tracking-widest">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
