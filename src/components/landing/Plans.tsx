import { motion } from "framer-motion";

const plans = [
  {
    name: "Trimestral",
    duration: "3 meses",
    description:
      "Para quem quer testar o método e construir uma base sólida de treino com acompanhamento real.",
    highlights: [
      "Treinos personalizados para seu objetivo",
      "Periodização e ajustes ao longo dos 3 meses",
      "Orientação técnica de execução",
      "Acompanhamento profissional contínuo",
    ],
    cta: "Começar trimestral",
    url: "https://sun.eduzz.com/39ZQZEKE9E",
    featured: false,
    badge: "Comece aqui",
  },
  {
    name: "Semestral",
    duration: "6 meses",
    description:
      "O ponto ideal entre tempo e resultado. Tempo suficiente para evoluir de verdade, com método e constância.",
    highlights: [
      "Tudo do plano trimestral",
      "6 meses de periodização estratégica",
      "Reavaliação e ajuste de objetivos no meio do ciclo",
      "Resultados visíveis e sustentáveis",
    ],
    cta: "Quero o semestral",
    url: "https://sun.eduzz.com/60EE8N8803",
    featured: true,
    badge: "Mais escolhido",
  },
  {
    name: "Anual",
    duration: "12 meses",
    description:
      "Para quem quer transformação real e consistente. O plano de quem entendeu que treino é jornada, não evento.",
    highlights: [
      "Tudo do plano semestral",
      "12 meses de evolução planejada",
      "Periodização completa com fases de força, hipertrofia e condicionamento",
      "Melhor custo-benefício por mês",
    ],
    cta: "Quero o anual",
    url: "https://sun.eduzz.com/Q9N5BVEZ01",
    featured: false,
    badge: "Melhor valor",
  },
];

export function Plans() {
  return (
    <section id="planos" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Planos da consultoria
          </span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            Escolha o tempo de <br />
            <span className="text-primary">jornada</span> ideal pra você.
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Todos os planos incluem treino individualizado, periodização, ajustes contínuos e
            acompanhamento profissional direto comigo.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-md border bg-surface p-8 transition-all md:p-10 ${
                plan.featured
                  ? "border-primary shadow-[0_0_60px_-15px_var(--primary)] md:scale-[1.03]"
                  : "border-secondary/40 hover:border-secondary hover:shadow-[0_0_40px_-15px_var(--secondary)]"
              }`}
            >
              <div
                className={`inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                  plan.featured
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-secondary/60 bg-secondary/15 text-purple"
                }`}
              >
                {plan.badge}
              </div>

              <h3 className="mt-6 text-3xl text-foreground md:text-4xl">{plan.name}</h3>
              <p
                className={`mt-1 text-xs font-bold uppercase tracking-widest ${
                  plan.featured ? "text-primary" : "text-purple"
                }`}
              >
                Duração · {plan.duration}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                    <span
                      className={`mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                        plan.featured ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-sm py-4 text-sm font-bold uppercase tracking-wider transition-all hover:scale-[1.01] ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_40px_var(--primary)]"
                    : "border border-secondary bg-secondary/10 text-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_30px_var(--secondary)]"
                }`}
              >
                {plan.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-xs uppercase tracking-widest text-muted-foreground"
        >
          Pagamento seguro via Eduzz · Garantia conforme plataforma
        </motion.p>
      </div>
    </section>
  );
}
