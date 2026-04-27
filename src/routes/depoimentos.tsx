import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — Quem cuidou conta a história" },
      { name: "description", content: "Histórias reais de quem encontrou alívio e equilíbrio com Camila Pelegrini através do Reiki e da fisioterapia integrativa." },
      { property: "og:title", content: "Depoimentos — Camila Pelegrini" },
      { property: "og:description", content: "Relatos de quem se sentiu acolhido e cuidado." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "Mariana S.",
    role: "Designer, 34 anos",
    text: "Cheguei à Camila com dores no pescoço que pareciam não ter solução. Em poucas sessões, encontrei alívio físico e uma calma que eu não sabia que precisava.",
  },
  {
    name: "Rafael T.",
    role: "Engenheiro, 41 anos",
    text: "O Reiki com a Camila foi uma porta que se abriu. Saí de cada sessão mais leve, dormindo melhor e mais conectado comigo mesmo.",
  },
  {
    name: "Beatriz L.",
    role: "Professora, 52 anos",
    text: "Mais que tratamento, é cuidado. Camila escuta, percebe, acolhe. Recomendo de coração para quem busca um caminho mais gentil.",
  },
  {
    name: "Camila R.",
    role: "Psicóloga, 29 anos",
    text: "A combinação de fisioterapia e terapias energéticas mudou minha relação com o meu corpo. Sou outra pessoa depois desse processo.",
  },
  {
    name: "Pedro M.",
    role: "Músico, 38 anos",
    text: "O ambiente, a presença, o toque — tudo é cuidadosamente pensado. É um espaço de cura no sentido mais bonito da palavra.",
  },
  {
    name: "Júlia A.",
    role: "Estudante, 26 anos",
    text: "Em momentos de muita ansiedade, as sessões com a Camila foram um respiro. Voltei a confiar no meu próprio ritmo.",
  },
];

function TestimonialsPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-24 text-center">
        <Eyebrow>Depoimentos</Eyebrow>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl text-balance max-w-3xl mx-auto">
          Histórias que <em className="text-accent">florescem</em>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Cada relato é um lembrete de por que faço esse trabalho.
        </p>
      </Section>

      <Section className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-warm transition-all"
            >
              <Quote className="text-accent" size={28} />
              <blockquote className="mt-4 text-foreground/85 leading-relaxed text-[15px]">
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <figcaption>
                  <div className="font-serif text-base text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
                <div className="flex gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="rounded-3xl bg-secondary/60 p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-balance max-w-xl mx-auto">
            Sua história também pode começar aqui.
          </h2>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm text-accent-foreground hover:bg-accent/90 transition-colors shadow-soft"
          >
            Conversar comigo
          </Link>
        </div>
      </Section>
    </>
  );
}
