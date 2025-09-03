"use client";
import useCustomCursor from "@/hooks/useCustomCursor";

export default function CustomCursor() {
  useCustomCursor(); // hook to move it

  return (
    <div
      id="cursor"
      className="
        fixed top-0 left-0 w-4 h-4 
        bg-neutral-700 rounded-full 
        pointer-events-none 
        transform -translate-x-1/2 -translate-y-1/2
        transition-transform duration-75 ease-linear
        z-[9999]
        hover:w-3
      "
    />
  );
}
