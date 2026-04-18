import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "Treinos personalizados",
    body: "Programados de acordo com o seu objetivo — emagrecer, ganhar massa, força ou condicionamento. Nada de planilha pronta.",
  },
  {
    n: "02",
    title: "Periodização do treino",
    body: "Planejamento e organização semana a semana, mês a mês. Você sabe exatamente para onde está indo e por quê.",
  },
  {
    n: "03",
    title: "Ajustes contínuos",
    body: "O treino evolui junto com você. Carga, volume e intensidade ajustados conforme sua resposta real.",
  },
  {
    n: "04",
    title: "Orientação técnica",
    body: "Correções de execução para você fazer cada exercício do jeito certo — mais resultado, menos risco de lesão.",
  },
  {
    n: "05",
    title: "Segurança e eficiência",
    body: "Acompanhamento profissional que respeita histórico de treino, limitações físicas e o seu momento.",
  },
  {
    n: "06",
    title: "Constância de verdade",
    body: "Estrutura, método e cobrança certa. O segredo do resultado nunca foi motivação — sempre foi consistência.",
  },
];

export function Benefits() {
  return (
    <section id="metodo" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            O que você recebe
          </span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            Tudo que você precisa <span className="text-stroke">para sair</span>{" "}
            do treino genérico.
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const isPurple = i % 2 === 1;
            return (
              <motion.div
                key={it.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-surface p-8 transition-colors hover:bg-surface-elevated md:p-10"
              >
                <div
                  className={`font-display text-5xl transition-colors ${
                    isPurple
                      ? "text-secondary/40 group-hover:text-secondary"
                      : "text-primary/30 group-hover:text-primary"
                  }`}
                >
                  {it.n}
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {it.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
