import { motion } from "framer-motion";
import { useState } from "react";

const quotes = [
  {
    quote:
      "O Juan é um guri ainda, jovem, mas com muita maturidade, respeito e profissionalismo que muitos por aí ainda estão buscando. Sempre estudando, se atualizando e encontrando maneiras de melhorar cada treino. Além de professor, se tornou um amigo que incentiva, puxa a orelha quando precisa e celebra cada conquista com a gente. Ele entende e respeita nossos limites, mas sempre nos mostra que somos capazes de um pouquinho mais!",
    name: "Ana P.",
    role: "Aluna · Treinamento Personalizado",
  },
  {
    quote:
      "O que eu mais gosto nos meus treinos é que eu vejo que eu consigo me superar e o Personal Juan me ajuda muito nisso , o acompanhamento do Personal é muito sério e ele se dedica muito a cada treino pra nós chegarmos ao resultado que queremos meu corpo mudou bastante des que comecei ter aulas com ele e me motiva ainda mais em continuar , o atendimento do Personal é exemplar não temos só um Personal temos um amigo isso é muito importante pra que nos sentimos bem na hora do treino",
    name: "Fernanda S.",
    role: "Aluna · Foco em Hipertrofia",
  },
  {
    quote:
      "Bom dia Juan!\nNão sou boa nisso....\nVou tentar ....\nVocê além de personal fisico é uma excelente pessoa. Carismático, sempre de bom humor, compreensivo, entende nossas dificuldades. Nos motiva de muitas formas, seja com premiação, sorteios.\nCom certeza seu treino é gratificante!\nO que senti no meu corpo, sou idosa, sendo assim colabora e se preocupa muito com postura, Equilibrio e compreende minhas limitações!",
    name: "Camila R.",
    role: "Aluna · Bem-estar e Qualidade de Vida",
  },
  {
    quote:
      "Eu gosto de ir embora kkkkkkkkkk. Brincadeira. Eu sempre disse que cada professor tem o aluno que parece com ele e não foi diferente. Existe uma troca muito boa durante os treinos, ajuste dos exercícios puxadas de orelha, você escuta e adequa os exercícios as minhas limitações ou ao cansaço de uma semana intensa de trabalho.\nMudou muito mas ainda não completamente mas por minha culpa mesmo.\n\nEu gosto do atendimento. É leve (não levando em Conta aos kg), engraçado, motivador.",
    name: "Juliana M.",
    role: "Aluna · Saúde e Condicionamento",
  },
  {
    quote:
      "Comecei a treinar em fevereiro de 2023 na Gold, em meados de outubro/novembro de 2023 eu passei a treinar sozinha e com o os treinos e auxílio do Juan, a diferença desses quase 2 anos sendo acompanhada por ele já é enorme! Evoluí muito a força, hoje ergo cargas que até ele mesmo fica impressionado 🙋🏾‍♀️ kkkkk e principalmente a técnica dos exercícios, que ele sempre preza nos alunos. O Juan é o profissional mais completo que eu já conheci, ele tem um interesse natural por melhorar, por saber do que está falando e realmente se importa com a saúde e evolução dos seus alunos. Obrigada pelo apoio de sempre e por ser esse professor atencioso e estudioso ✨💪",
    name: "Marina C.",
    role: "Aluna · Foco em Força e Técnica",
  },
  {
    quote:
      "desde que a gente começou a treinar, eu tenho gostado de tudo de verdade. teu acompanhamento faz muita diferença — tu incentiva, apoia e realmente se importa em ajudar. mesmo sendo recente, já sinto que algo mudou: ir pra academia não parece mais uma obrigação chata, virou algo mais leve, algo que eu quero fazer. e, pra mim, o teu maior ponto forte é acreditar que eu sou capaz. isso motiva muito.",
    name: "Beatriz L.",
    role: "Aluna · Iniciante",
  },
  {
    quote:
      'Oi Juan!\n\nSegue meu depoimento\n\nTreinar com o Juan fez toda a diferença na minha rotina. Ele entende meus limites, respeita meu ritmo e, ao mesmo tempo, me incentiva a superar cada desafio, "Vamos que tu consegue!". Hoje me sinto cada dia mais forte, mais disposta e muito mais confiante. E como digo pra ele, minha Meta é não ter meta, e lá se foram 6kg e uma mudança grande de físico e de treinos. Sou muito grata por ter um profissional tão dedicado ao meu lado.',
    name: "Patricia T.",
    role: "Aluna · Emagrecimento e Saúde",
  },
  {
    quote:
      "O que você mais gosta nos treinos? Eu gosto mais nos treinos com você Juan, você mostrar que sou capaz de fazer cada exercício que na maioria das vezes acho que não vou conseguir! Você motiva e me da apoio e mais força para não desistir\n\n• O seu acompanhamento como personal para mim hoje esta sendo um dos melhores que já tive, você sabe qual aparelho posso e qual devo treinar, vc não fica enrolando no momento do treino, é foco total cada minuto que estamos treinando.\n\nDesde que começamos, você como pessoa amiga e personal me incentiva a não desistir, fala dos benefícios de treinar, você nos passa aqui que estudou e estuda, porque você esta sempre buscando mais conhecimento para aplicar junto aos seus alunos. Não é em vão que seus horários são tão disputados.\n\nO que mais considero um ponto muito forte em seus treinos e a motivação e o incentivo em não desistir de cuidarmos do corpo e da saúde! Você sempre frisa e preza pela saúde e bem estar se seus alunos. Você adapta cada treino conforme é seu aluno. E o que admiro e considero e você fazer rápido uma pecepção de como é cada pessoa e aplica seus conhecimentos com um bom treino que cativa o aluno não deixa virar rotina chata e mesmice! Parabéns pelo seu brilhante trabalho e muito profissionalismo.",
    name: "Renata B.",
    role: "Aluna · Resultados Consistentes",
  },
  {
    quote:
      "Estou gostando bastante de fazer acompanhamento contigo, tu é extremamente atencioso durante os treinos moldando os mesmo para a minha evolução pessoal. Vejo que já estão surgindo algumas melhoras no meu físico como emagrecimento, alguns músculos estão começando a salientar..\nObrigada pelo cuidado! 💗",
    name: "Letícia A.",
    role: "Aluna · Estética Corporal",
  },
  {
    quote:
      " O que eu mais gosto nos treinos é que tu sempre deixa tudo leve, motivador e no meu ritmo, sem pressão. Cada treino é pensado pra mim, e isso faz toda a diferença.\n\nTeu acompanhamento como personal é incrível tu és muito dedicado e sempre presente para auxiliar. Nunca me sinto perdida, porque tu explica tudo com paciência e cuidado.\n\nSobre mudanças, eu já estive melhor na disposição e no ritmo, mas tu está sempre me motivando, puxando minha atenção e não me deixando desistir. E isso faz toda a diferença pra eu continuar evoluindo.\n\nTeu maior ponto forte, pra mim, é a atenção que tu tens com cada detalhe. Tu realmente acompanha, apoia e incentiva. Me sinto acolhida e confiante sempre.\n\nObrigada por tudo! 🙏💪",
    name: "Dona Maria G.",
    role: "Aluna · Terceira Idade e Mobilidade",
  },
];

function TestimonialCard({
  q,
  i,
  isPurple,
}: {
  q: (typeof quotes)[0];
  i: number;
  isPurple: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = q.quote.length > 160;

  return (
    <figure
      className={`relative rounded-md border bg-background p-8 transition-colors md:p-10 ${
        isPurple
          ? "border-secondary/30 hover:border-secondary"
          : "border-border hover:border-primary/50"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
        className="flex h-full flex-col"
      >
        <div
          className={`font-display text-6xl leading-none ${
            isPurple ? "text-secondary/60" : "text-primary/40"
          }`}
        >
          "
        </div>
        <div className="mb-6 flex-grow">
          <blockquote
            className={`mt-2 whitespace-pre-line text-lg leading-relaxed text-foreground transition-all duration-300 ${
              !isExpanded && isLong ? "line-clamp-4" : ""
            }`}
          >
            {q.quote}
          </blockquote>
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
            >
              {isExpanded ? "Ler menos" : "Ler mais"}
            </button>
          )}
        </div>
        <figcaption className="mt-auto border-t border-border pt-5">
          <div className="font-bold text-foreground">{q.name}</div>
          <div
            className={`mt-0.5 text-xs uppercase tracking-wider ${
              isPurple ? "text-purple" : "text-muted-foreground"
            }`}
          >
            {q.role}
          </div>
        </figcaption>
      </motion.div>
    </figure>
  );
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedQuotes = showAll ? quotes : quotes.slice(0, 3);

  return (
    <section id="resultados" className="relative overflow-hidden bg-surface pb-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
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
          <h2 className="mt-4 text-4xl text-balance text-foreground md:text-5xl lg:text-6xl">
            Eles fizeram. <br />
            <span className="text-primary">Você também faz.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {displayedQuotes.map((q, i) => {
            const isPurple = i % 2 === 1;
            return <TestimonialCard key={q.name} q={q} i={i} isPurple={isPurple} />;
          })}
        </div>

        {!showAll && quotes.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="rounded-md border border-primary bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_var(--primary)]"
            >
              Ver mais depoimentos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
