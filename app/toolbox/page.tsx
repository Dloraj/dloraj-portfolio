"use client";

import { useEffect } from "react";

export default function ToolboxRedirect() {
  useEffect(() => {
    window.location.replace("/#toolbox");
  }, []);
  return null;
}
