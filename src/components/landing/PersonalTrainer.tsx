import { motion } from "framer-motion";
import personalJuanImage from "@/assets/personal-juan.png";

const specializations = [
  {
    title: "Licenciatura e Bacharelado",
    subtitle: "Educação Física",
    body: "Fundamentos sólidos para atuação profissional.",
  },
  {
    title: "Bodybuilding e Estética Corporal",
    subtitle: "Pós-graduação",
    body: "Formação focada em transformação estética e definição muscular.",
  },
  {
    title: "Hormonização, Nutrição e Treinamento Feminino",
    subtitle: "Pós-graduação",
    body: "Especialização nas necessidades únicas do corpo feminino.",
  },
  {
    title: "Biomecânica e Reabilitação",
    subtitle: "Pós-graduação em andamento",
    body: "Técnicas avançadas de correção postural e recuperação de lesões.",
  },
];

export function PersonalTrainer() {
  return (
    <section id="personal-trainer" className="relative bg-surface pb-24 md:pb-32">
      <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-start"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Conheça seu personal trainer
            </span>
            <h2 className="mt-4 text-4xl text-foreground md:text-6xl">
              Juan Henrique <span className="text-purple">Argenta Carvalho</span>
            </h2>

            <div className="relative mt-8 max-w-md overflow-hidden rounded-md border border-border bg-background">
              <img
                src={personalJuanImage}
                alt="Foto do personal trainer Juan Henrique"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 md:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              26 anos, apaixonado por ajudar mulheres a transformarem suas vidas através do
              exercício físico.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Licenciado e Bacharel em Educação Física, com formação completa para atender suas
              necessidades de estética e bem-estar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <div className="mb-8">
            <h3 className="text-3xl text-foreground md:text-4xl">Formação e Especializações</h3>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-2">
            {specializations.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background p-8 md:p-10"
              >
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  {item.subtitle}
                </div>
                <h4 className="mt-4 text-2xl text-foreground md:text-3xl">{item.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
