import { useEffect, useState } from "react";
import logo from "@/assets/logo-juan.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/45 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between md:px-6 px-4 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Juan Carvalho — Personal Trainer" className="h-12 w-auto md:h-14" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#metodo", label: "Método" },
            { href: "#personal-trainer", label: "Personal" },
            { href: "#para-quem", label: "Para quem" },
            { href: "#metodologia", label: "Metodologia" },
            { href: "#resultados", label: "Resultados" },
            { href: "#faq", label: "FAQ" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#planos"
          className="rounded-sm bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105 shadow-[0_0_40px_var(--primary)]"
        >
          Quero treinar
        </a>
      </div>
    </header>
  );
}
