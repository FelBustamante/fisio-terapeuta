import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center">
          <span className="font-serif font-bold text-2xl md:text-3xl tracking-wide text-black">
            Camila <span className="text-black">Pelegrini</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-accent font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5512998818988?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm text-accent-foreground hover:bg-accent/90 transition-colors shadow-soft"
        >
          Agendar
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
                activeProps={{ className: "text-accent font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5512998818988"
              className="mt-2 inline-flex justify-center rounded-full bg-accent px-5 py-3 text-sm text-accent-foreground"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
