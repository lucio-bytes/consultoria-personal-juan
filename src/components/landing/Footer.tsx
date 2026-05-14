import logo from "@/assets/logo-juan.png";

const instagramLink = "https://www.instagram.com/personaljuan_/";
const whatsappLink =
  "https://wa.me/5551993641222?text=Ol%C3%A1,%20vim%20do%20site!%20Gostaria%20de%20saber%20mais%20sobre%20sua%20consultoria%20personalizada*";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:px-6 md:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Juan Carvalho — Personal Trainer" className="h-12 w-auto" />
        </a>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Juan Carvalho · Personal Trainer
        </div>
        <div className="flex gap-5 text-xs uppercase tracking-wider text-muted-foreground">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Instagram
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
