"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function WhyAdding() {
  const { t } = useI18n();

  return (
    <section id="hub" className="bg-carbon-gray py-32 md:py-60 border-y border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-center">
          {/* Terminal */}
          <Reveal variant="left" threshold={0.1} className="lg:col-span-7">
            <div className="bg-matte-black border border-white/10 shadow-2xl overflow-hidden relative card-glow">
              <div className="h-10 bg-industrial-gray border-b border-white/10 flex items-center px-4 md:px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-yellow/20 border border-accent-yellow/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary/40" />
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">ADDING_OS_TERMINAL_V.2.0</span>
              </div>
              <div className="p-5 md:p-8 font-mono text-xs md:text-sm leading-relaxed">
                <div className="flex gap-4 mb-2">
                  <span className="text-primary/60">[SYSTEM]</span>
                  <span className="text-white/80">{t("hub.line1")}</span>
                </div>
                <div className="flex gap-4 mb-2">
                  <span className="text-primary/60">[STITCH]</span>
                  <span className="text-white/80">{t("hub.line2")} <span className="text-accent-yellow">SUCCESS</span></span>
                </div>
                <div className="flex gap-4 mb-6">
                  <span className="text-primary/60">[DATA]</span>
                  <span className="text-primary">STREAMING: 1,422 events/sec</span>
                </div>
                <div className="bg-white/5 p-4 md:p-6 mb-6 border-l-2 border-primary/40 overflow-x-auto">
                  <code className="text-white/60 block text-xs">
                    {`function processStitchNode(event) {`}<br />
                    {`  const attribution = event.path.map(n => n.id);`}<br />
                    {`  return {`}<br />
                    {`    status: "VERIFIED",`}<br />
                    {`    roi_delta: +0.428,`}<br />
                    {`    timestamp: Date.now()`}<br />
                    {`  };`}<br />
                    {`}`}
                  </code>
                </div>
                <div className="grid grid-cols-4 gap-2 md:gap-4">
                  {["NODE_A", "NODE_B", "NODE_C", "NODE_D"].map((node, i) => (
                    <div key={node} className={`h-16 md:h-20 relative border ${i === 1 ? "bg-accent-yellow/10 border-accent-yellow/20" : i === 3 ? "bg-white/5 border-white/10" : "bg-primary/10 border-primary/20"}`}>
                      <div className={`absolute bottom-0 left-0 w-full ${i === 0 ? "h-1/2 bg-primary/20" : i === 1 ? "h-3/4 bg-accent-yellow/20" : i === 2 ? "h-1/4 bg-primary/20" : "h-1/3 bg-white/10"}`} />
                      <div className={`absolute inset-0 flex items-center justify-center text-xs md:text-xs ${i === 1 ? "text-accent-yellow" : i === 3 ? "text-white/40" : "text-primary"}`}>{node}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal variant="right" className="lg:col-span-5 space-y-8 md:space-y-12">
            <div>
              <span className="text-2xl font-black tracking-[0.4em] text-primary">{t("why.label")}</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mt-4 md:mt-6">{t("why.title")}</h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mt-6 md:mt-8 font-light tracking-tight-luxury">
                {t("why.subtitle")}
              </p>
            </div>
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-6 md:gap-8 group">
                <div className="w-12 h-12 flex-shrink-0 border border-primary/20 flex items-center justify-center bg-white/5">
                  <span className="material-symbols-outlined text-primary text-2xl">security</span>
                </div>
                <div>
                  <h4 className="text-base font-bold mb-2">{t("why.p1.title")}</h4>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{t("why.p1.desc")}</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8 group">
                <div className="w-12 h-12 flex-shrink-0 border border-primary/20 flex items-center justify-center bg-white/5">
                  <span className="material-symbols-outlined text-primary text-2xl">schema</span>
                </div>
                <div>
                  <h4 className="text-base font-bold mb-2">{t("why.p2.title")}</h4>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{t("why.p2.desc")}</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-white text-matte-black px-12 py-5 text-xs font-black tracking-luxury hover:bg-primary hover:text-white transition-all">
              {t("nav.hablemos")}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
