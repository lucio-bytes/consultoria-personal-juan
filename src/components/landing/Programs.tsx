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
    <section id="para-quem" className="relative overflow-hidden bg-surface pb-24 md:py-32">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-7xl md:px-6 px-4">
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
          <h2 className="mt-4 text-4xl text-balance text-foreground md:text-5xl lg:text-6xl">
            Independente do <br />
            seu nível, <span className="text-purple">tem espaço aqui.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {profiles.map((p, i) => (
            <div
              key={p.tag}
              className="group relative flex flex-col rounded-md border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_-15px_var(--primary)] md:p-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex h-full flex-col"
              >
                <div className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {p.tag}
                </div>
                <h3 className="mt-6 text-2xl text-foreground md:text-3xl">{p.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-xs font-bold uppercase tracking-widest text-primary transition-transform group-hover:translate-x-1">
                  Esse é você?
                  <span>→</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
