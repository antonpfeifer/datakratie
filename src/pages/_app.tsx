import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/hero.css";

import { api } from "~/utils/api";


const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => setIsNavigating(true);
    const handleRouteDone = () => setIsNavigating(false);

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

  return (
    <div className={geist.className}>
      <div
        className={`transform-gpu transition-all duration-300 ease-out ${
          isNavigating ? "translate-y-1" : "translate-y-0"
        }`}
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);