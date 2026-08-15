import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/posts", label: "Posts" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted"
      >
        {open ? <FiX size={18} /> : <FiMenu size={18} />}
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-border bg-surface px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink hover:text-brand-500"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
