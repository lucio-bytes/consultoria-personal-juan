import { motion } from "framer-motion";
import { DumbbellIcon } from "lucide-react";

const profiles = [
  {
    tag: "Iniciante",
    title: "Quer começar do jeito certo",
    body: "Você nunca treinou ou está voltando depois de muito tempo. Aqui a base é construída com técnica, sem queimar etapas e sem se machucar.",
  },
  {
    tag: "Intermediário",
    title: "Estagnou e precisa evoluir",
    body: "Você já treina há um tempo, mas o resultado parou. Falta estratégia, periodização e olhar técnico para destravar a próxima fase.",
  },
  {
    tag: "Estratégico",
    title: "Quer treinar com método",
    body: "Você está cansado de treino aleatório, app genérico e treino que muda toda semana sem critério. Você quer um plano com cabeça por trás.",
  },
];

export function Programs() {
  return (
    <section id="para-quem" className="relative overflow-hidden bg-surface pb-24 md:pb-32">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Para quem é
          </span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            Independente do <br />
            seu nível, <span className="text-purple">tem espaço aqui.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-md border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_-15px_var(--primary)] md:p-10"
            >
              <div className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                {p.tag}
              </div>
              <h3 className="mt-6 text-2xl text-foreground md:text-3xl">{p.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-xs font-bold uppercase tracking-widest text-primary transition-transform group-hover:translate-x-1">
                Esse é você?
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-md border border-primary/30 bg-background p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
            <div className="font-display text-7xl text-primary md:text-8xl">
              <DumbbellIcon className="size-12" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Diferencial
              </span>
              <p className="mt-3 text-xl leading-snug text-foreground md:text-2xl">
                O foco não é apenas passar exercícios. É estruturar um{" "}
                <span className="text-primary">método de treino</span> que gere constância,
                progresso e resultados sustentáveis ao longo do tempo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
