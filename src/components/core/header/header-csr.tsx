"use client";

import { throttle } from "lodash";
import React, { useEffect } from "react";
import Header from "./header";

export const HeaderCSR = () => {
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
  return <Header />;
};
