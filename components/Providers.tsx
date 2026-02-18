"use client";

import { I18nProvider } from "@/lib/i18n";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <ScrollProgress />
      {children}
    </I18nProvider>
  );
}
