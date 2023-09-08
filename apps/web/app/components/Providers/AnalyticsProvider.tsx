"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { init, type Config, type Mixpanel } from "mixpanel-browser";
import { Environment } from "@/types/enums";

const MIXPANEL_EVENT_NAME = "Pageview";
const GA4_EVENT_NAME = "virtualPageView";

export const MixpanelContext = createContext<Mixpanel | undefined>(undefined);

export const useMixpanel = () => useContext(MixpanelContext);

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isProduction =
    process.env.NEXT_PUBLIC_VERCEL_ENV === Environment.Production;

  const mixpanel = useMemo(() => {
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) return;

    const config: Partial<Config> = {
      ignore_dnt: !isProduction,
      debug: !isProduction,
      persistence: "localStorage",
    };

    return init(token, config, "mixpanel-browser");
  }, [isProduction]);

  useEffect(() => {
    if (mixpanel) {
      mixpanel.track(MIXPANEL_EVENT_NAME, {
        Pathname: pathname,
        SearchParams: searchParams.toString() || null,
        Referrer: document.referrer || null,
      });
    }

    // Google Analytics GA4 - https://twitter.com/jakubhavej/status/1691155461708328960?s=20
    if (window.dataLayer) {
      window.dataLayer.push({
        event: GA4_EVENT_NAME,
        pageUrl: window.location.href,
        pageTitle: document.title,
      });
    }
  }, [pathname, searchParams, isProduction, mixpanel]);

  return (
    <MixpanelContext.Provider value={mixpanel}>
      <VercelAnalytics />
      {children}
    </MixpanelContext.Provider>
  );
};
