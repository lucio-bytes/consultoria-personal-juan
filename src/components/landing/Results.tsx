import { motion } from "framer-motion";
import t1 from "@/assets/transformation-1.jpg";
import t2 from "@/assets/transformation-2.jpg";
import t3 from "@/assets/transformation-3.jpg";

const results = [
  {
    img: t1,
    name: "Rafael S.",
    age: 34,
    program: "Foco · Emagrecimento",
    stats: [
      { l: "Peso", v: "−19 kg" },
      { l: "% gordura", v: "−14%" },
      { l: "Disposição", v: "↑↑↑" },
    ],
  },
  {
    img: t2,
    name: "Priscila M.",
    age: 29,
    program: "Foco · Recomposição",
    stats: [
      { l: "Peso", v: "−11 kg" },
      { l: "% gordura", v: "−11%" },
      { l: "Postura", v: "Recuperada" },
    ],
  },
  {
    img: t3,
    name: "André T.",
    age: 27,
    program: "Foco · Hipertrofia",
    stats: [
      { l: "Massa magra", v: "+8 kg" },
      { l: "% gordura", v: "−6%" },
      { l: "Agachamento", v: "+60 kg" },
    ],
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Alunos reais · Números reais
            </span>
            <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
              Resultado <br />
              é o que <span className="text-primary">fala mais alto.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sem filtro. Sem foto só de músculo contraído. Pessoas reais que
            apareceram, fizeram o trabalho e mudaram a relação com o corpo.
          </p>
        </motion.div>

        <div className="space-y-8">
          {results.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid items-stretch gap-6 overflow-hidden rounded-md border border-border bg-surface md:grid-cols-[1.6fr_1fr]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-background md:aspect-auto">
                <img
                  src={r.img}
                  alt={`Transformação corporal de ${r.name}, antes e depois`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-secondary/70" />
                <div className="absolute left-4 top-4 rounded-sm border border-secondary/40 bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-purple backdrop-blur-sm">
                  Antes
                </div>
                <div className="absolute right-4 top-4 rounded-sm bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Depois
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">
                    {r.program}
                  </div>
                  <h3 className="mt-3 text-3xl text-foreground">
                    {r.name}, <span className="text-muted-foreground">{r.age}</span>
                  </h3>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {r.stats.map((s) => (
                    <div key={s.l}>
                      <div className="font-display text-2xl text-primary md:text-3xl">
                        {s.v}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
