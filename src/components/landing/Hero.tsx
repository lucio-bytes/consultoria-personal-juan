import { motion } from "framer-motion";
import heroImage from "@/assets/hero-trainer.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background pt-24">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Juan Carvalho, personal trainer, em treino intenso na academia"
          width={1080}
          height={1920}
          className="h-full w-full object-cover object-[60%_center] opacity-70 md:object-center"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Vagas limitadas · Turma de Maio
            </span>
          </div>

          <h1 className="text-[clamp(3rem,9vw,7.5rem)] leading-[0.85] text-foreground">
            <span className="text-stroke">Treine com</span>
            <br />
            método.
            <br />
            <span className="text-primary">Não no improviso.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Treinamento personalizado com <strong className="text-foreground">Juan Carvalho</strong>{" "}
            — Personal Trainer. Foco em resultados reais, segurança e evolução contínua, respeitando
            seu histórico, sua rotina e seus objetivos.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#planos"
              className="group inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_var(--primary)]"
            >
              Garantir minha vaga
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#resultados"
              className="inline-flex items-center justify-center rounded-sm border border-border bg-background/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              Ver resultados
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "100%", l: "Personalizado", c: "primary" },
              { n: "1:1", l: "Acompanhamento", c: "purple" },
              { n: "+", l: "Evolução real", c: "primary" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className={`font-display text-3xl md:text-4xl ${
                    s.c === "purple" ? "text-purple" : "text-primary"
                  }`}
                >
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
