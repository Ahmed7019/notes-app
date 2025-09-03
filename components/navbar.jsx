import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-2 p-4 bg-accent-foreground w-full text-white justify-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Notes</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Contact</Link>
    </nav>
  );
}
