"use client";

import { throttle } from "lodash";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { AppNavLinks, SocialNavLinks } from "./header";

export const HeaderCSR = () => {
  const pathname = usePathname();

  useEffect(() => {
    const $header = document.getElementById("header");
    const threshold = 68;

    const callback = throttle(() => {
      const scrollTop = window.scrollY;
      if (!$header) return;

      if (scrollTop >= threshold) {
        $header.classList.add(
          "-translate-y-14",
          "transition-all",
          "duration-1000",
          "ease-linear",
        );
      } else {
        $header.classList.remove("-translate-y-14");
      }
    }, 168);

    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div id="header" className="px-4% py-1% bg-[#18181C] text-white">
      <div className="flex flex-row justify-between gap-5">
        <SocialNavLinks />
        <AppNavLinks ssr={false} />
      </div>
    </div>
  );
};
