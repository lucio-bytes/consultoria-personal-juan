import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Sou totalmente iniciante. Esse acompanhamento é pra mim?",
    a: "Sim. O trabalho é individualizado e respeita o seu ponto de partida. Quem nunca treinou recebe uma base técnica antes de qualquer carga pesada.",
  },
  {
    q: "Eu treino na academia, em casa ou ao ar livre. Funciona?",
    a: "Funciona. O treino é montado de acordo com o equipamento que você tem disponível e com a sua rotina, sem depender de uma academia específica.",
  },
  {
    q: "Qual a diferença pra um app de treino genérico?",
    a: "App não olha sua execução, não ajusta seu treino quando você estaciona, não respeita lesão, rotina ou objetivo. Aqui é acompanhamento profissional de verdade, com método por trás.",
  },
  {
    q: "Tenho alguma limitação física / lesão antiga. Posso entrar?",
    a: "Pode. O histórico é levantado antes de começar e o treino é estruturado em torno das suas limitações para gerar progresso com segurança.",
  },
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Disposição e técnica melhoram nas primeiras semanas. Mudanças visuais e de performance começam a aparecer de forma consistente entre 6 e 12 semanas, dependendo do objetivo e do nível de constância.",
  },
  {
    q: "Como funciona pra começar?",
    a: "Você preenche o formulário aqui embaixo, conversamos sobre o seu objetivo e seu momento, e a partir daí o plano é estruturado de forma individual.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple">FAQ</span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            Dúvidas que aparecem <br className="md:hidden" />
            <span className="text-purple">antes de começar.</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-md border border-border bg-surface px-6"
            >
              <AccordionTrigger className="text-left text-base font-bold text-foreground hover:text-purple hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
