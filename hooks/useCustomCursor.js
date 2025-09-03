"use client";
import { useEffect } from "react";

export default function useCustomCursor(cursorId = "cursor") {
  useEffect(() => {
    const cursor = document.getElementById(cursorId);
    if (!cursor) return;

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [cursorId]);
}
