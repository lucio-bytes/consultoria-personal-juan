import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "Já tinha tentado app, treino de academia e personal genérico. Com o Juan foi a primeira vez que senti um plano feito pra mim. Em 4 meses mudei completamente.",
    name: "Daniel L.",
    role: "Aluno · Foco em emagrecimento",
  },
  {
    quote:
      "Eu travei por mais de um ano sem evoluir. O Juan reorganizou meu treino, mexeu na periodização e em 8 semanas voltei a quebrar PR.",
    name: "Sara M.",
    role: "Aluna · Foco em força",
  },
  {
    quote:
      "Profissional sério de verdade. Ajusta o treino conforme você responde, cobra do jeito certo e explica o porquê de cada coisa.",
    name: "Michael T.",
    role: "Aluno · Hipertrofia",
  },
  {
    quote:
      "Sou mãe, trabalho fora, tempo curto. O Juan montou algo que eu consigo cumprir. 6 meses depois, mais forte do que aos 25.",
    name: "Jasmine W.",
    role: "Aluna · Recomposição",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Quem já treina
          </span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            Eles fizeram. <br />
            <span className="text-primary">Você também faz.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => {
            const isPurple = i % 2 === 1;
            return (
              <motion.figure
                key={q.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-md border bg-background p-8 transition-colors md:p-10 ${
                  isPurple
                    ? "border-secondary/30 hover:border-secondary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`font-display text-6xl leading-none ${
                    isPurple ? "text-secondary/60" : "text-primary/40"
                  }`}
                >
                  "
                </div>
                <blockquote className="mt-2 text-lg leading-relaxed text-foreground">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-bold text-foreground">{q.name}</div>
                  <div
                    className={`mt-0.5 text-xs uppercase tracking-wider ${
                      isPurple ? "text-purple" : "text-muted-foreground"
                    }`}
                  >
                    {q.role}
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
