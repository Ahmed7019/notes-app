import Link from "next/link";

export default function Navigation() {
  const links = [
    {
      url: "/",
      title: "home",
    },
    {
      url: "/notes",
      title: "notes",
    },
    {
      url: "/about",
      title: "about",
    },
  ];
  return (
    <nav className="flex items-center gap-2 p-4 w-full justify-center bg-white/80 shadow-sm sticky top-0 z-20">
      {links.map((link) => (
        <Link
          href={link.url}
          key={link.title}
          className="underline underline-offset-4 capitalize"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
