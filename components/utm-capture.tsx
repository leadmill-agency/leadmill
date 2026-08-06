"use client";

import { useEffect } from "react";
import { persistUtms } from "@/lib/track";

export function UtmCapture() {
  useEffect(() => {
    persistUtms();
  }, []);
  return null;
}
