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
    <section id="personal-trainer" className="relative bg-surface pb-24 md:py-32">
      <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12 lg:gap-16 md:items-start">
          {/* Mobile Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:hidden"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Conheça seu personal trainer
            </span>
            <h2 className="mt-4 text-4xl text-foreground">
              Juan Henrique <span className="text-purple">Argenta Carvalho</span>
            </h2>
          </motion.div>

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 lg:col-span-4 md:sticky md:top-24"
          >
            <div className="relative mx-auto max-w-md md:max-w-full overflow-hidden rounded-md border border-border bg-background">
              <img
                src={personalJuanImage}
                alt="Foto do personal trainer Juan Henrique"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-7 lg:col-span-8"
          >
            {/* Desktop Title */}
            <div className="hidden md:block mb-8 lg:mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Conheça seu personal trainer
              </span>
              <h2 className="mt-4 text-5xl lg:text-6xl text-foreground">
                Juan Henrique <span className="text-purple">Argenta Carvalho</span>
              </h2>
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

            <div className="mt-12 md:mt-16">
              <div className="mb-6 md:mb-8">
                <h3 className="text-3xl text-foreground md:text-4xl">Formação e Especializações</h3>
              </div>

              <div className="grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2">
                {specializations.map((item, index) => (
                  <article
                    key={item.title}
                    className="bg-background p-6 md:p-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        {item.subtitle}
                      </div>
                      <h4 className="mt-4 text-xl text-foreground md:text-2xl">{item.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </motion.div>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
