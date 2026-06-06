"use client";

import { useEffect } from "react";

export default function GuestbookRedirect() {
  useEffect(() => {
    window.location.replace("/#guestbook");
  }, []);
  return null;
}
