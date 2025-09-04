"use client";
import useCustomCursor from "@/hooks/useCustomCursor";

export default function CustomCursor() {
  useCustomCursor(); // hook to move it

  return (
    <div
      id="cursor"
      className="
      flex items-center justify-center 
      fixed top-0 left-0
      border border-neutral-600
      pointer-events-none
      w-8 h-8 rounded-full transform -translate-x-1/2 -translate-y-1/2
      transition-transform duration-[100ms] ease-out
      z-[9999]"
    >
      <div
        id="cursor"
        className="
        fixed top-[50%] left-[50%]
       w-2 h-2  
      bg-neutral-800
      rounded-full
      pointer-events-none 
      transform -translate-x-1/2 -translate-y-1/2 
      transition-transform duration-[40ms] ease-linear
      z-[9999]
      hover:w-3
      "
      />
    </div>
  );
}
