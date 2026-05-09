import { motion } from "framer-motion";
import { ClipboardList, Camera, Activity, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Check-in & Anamnese",
    description:
      "Você receberá um questionário detalhado via WhatsApp para mapearmos seu histórico, restrições e objetivos de forma aprofundada.",
  },
  {
    icon: Camera,
    title: "Análise Postural e Física",
    description:
      "Avaliação completa de desvios posturais e da sua composição física atual através do envio de fotos específicas.",
  },
  {
    icon: Activity,
    title: "Guia de Execução",
    description:
      "Disponibilizamos um guia exclusivo ensinando o passo a passo para tirar as fotos na angulação correta, garantindo precisão máxima na análise.",
  },
  {
    icon: CalendarCheck,
    title: "Entrega do Protocolo",
    description:
      "Em até 7 dias, você recebe seu treino 100% individualizado, estruturado milimetricamente com base em todos os dados coletados.",
  },
];

export const StepsSection = () => {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-surface pb-24 md:py-32">
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
            Metodologia
          </span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            O que acontece <br />
            <span className="text-purple">após a compra?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Independente do plano escolhido, todos os nossos alunos passam por essa montagem
            criteriosa e individualizada.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-md border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_-15px_var(--primary)] md:p-10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Passo 0{index + 1}
                  </div>
                  <Icon className="text-primary opacity-80" size={24} />
                </div>

                <h3 className="mt-2 text-xl text-foreground md:text-2xl">{step.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
