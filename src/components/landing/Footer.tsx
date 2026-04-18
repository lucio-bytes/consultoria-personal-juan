import logo from "@/assets/logo-juan.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Juan Carvalho — Personal Trainer"
            className="h-12 w-auto"
          />
        </a>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Juan Carvalho · Personal Trainer
        </div>
        <div className="flex gap-5 text-xs uppercase tracking-wider text-muted-foreground">
          <a href="#" className="transition-colors hover:text-primary">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            WhatsApp
          </a>
          <a href="#planos" className="transition-colors hover:text-primary">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
