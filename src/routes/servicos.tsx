import { createFileRoute } from "@tanstack/react-router";
import reikiImg from "@/assets/service-reiki.jpg";
import fisioImg from "@/assets/service-fisio.jpg";
import aromaImg from "@/assets/service-aroma.jpg";
import { Section, Eyebrow } from "@/components/Section";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Reiki, Fisioterapia & Terapias Integrativas" },
      { name: "description", content: "Reiki, fisioterapia integrativa, aromaterapia e massoterapia. Sessões individuais e pacotes personalizados." },
      { property: "og:title", content: "Serviços de Ana Luz" },
      { property: "og:description", content: "Reiki, fisioterapia e terapias complementares para o seu equilíbrio." },
      { property: "og:image", content: reikiImg },
      { name: "twitter:image", content: reikiImg },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: reikiImg,
    title: "Reiki",
    duration: "60 min",
    desc: "Técnica japonesa de imposição das mãos que canaliza energia vital, promovendo profundo relaxamento e harmonização dos centros energéticos.",
    benefits: [
      "Reduz estresse e ansiedade",
      "Melhora a qualidade do sono",
      "Apoia processos de cura",
      "Restaura o equilíbrio emocional",
    ],
  },
  {
    img: fisioImg,
    title: "Fisioterapia integrativa",
    duration: "50 min",
    desc: "Avaliação e tratamento corporal com técnicas manuais, mobilizações e escuta atenta. Une ciência da reabilitação a uma abordagem que considera você por inteiro.",
    benefits: [
      "Alívio de dores crônicas",
      "Recuperação funcional",
      "Postura e consciência corporal",
      "Liberação de tensões profundas",
    ],
  },
  {
    img: aromaImg,
    title: "Aromaterapia",
    duration: "45 min",
    desc: "Uso terapêutico de óleos essenciais puros para acolher emoções, equilibrar o sistema nervoso e potencializar outros tratamentos.",
    benefits: [
      "Apoio emocional",
      "Relaxamento profundo",
      "Combinada a outras terapias",
      "Blend personalizado",
    ],
  },
];

const packages = [
  {
    name: "Sessão única",
    price: "R$ 180",
    note: "por sessão",
    items: ["Avaliação inicial", "60 minutos de cuidado", "Recomendações personalizadas"],
  },
  {
    name: "Pacote equilíbrio",
    price: "R$ 480",
    note: "3 sessões",
    items: ["3 sessões integrativas", "Acompanhamento próximo", "10% de desconto"],
    featured: true,
  },
  {
    name: "Jornada completa",
    price: "R$ 900",
    note: "6 sessões",
    items: ["6 sessões personalizadas", "Plano integrativo", "15% de desconto", "Suporte entre sessões"],
  },
];

function ServicesPage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>Serviços</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl text-balance">
            Terapias que se <em className="text-accent">entrelaçam</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Cada caminho pode ser percorrido sozinho ou combinado com os outros,
            de acordo com o que faz sentido para você nesse momento.
          </p>
        </div>
      </Section>

      <Section className="py-16 space-y-20">
        {services.map((s, i) => (
          <article key={s.title} className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className={`absolute -inset-3 bg-accent/10 rounded-[2rem] ${i % 2 === 0 ? "-rotate-2" : "rotate-2"}`} />
              <img
                src={s.img}
                alt={s.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-[1.75rem] object-cover w-full aspect-[4/3] shadow-soft"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-accent">{s.duration}</span>
              <h2 className="mt-3 font-serif text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-accent/15 text-accent">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Section>

      {/* PACOTES */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Pacotes</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-balance">
            Escolha o seu <em className="text-accent">caminho</em>.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border transition-all ${
                p.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-warm scale-[1.02]"
                  : "bg-card border-border/60 shadow-soft hover:shadow-warm"
              }`}
            >
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-4xl">{p.price}</span>
                <span className={`text-xs ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.note}
                </span>
              </div>
              <ul className={`mt-6 space-y-3 text-sm ${p.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <Check size={14} className={p.featured ? "text-accent mt-1" : "text-accent mt-1"} />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511999999999"
                className={`mt-8 inline-flex items-center gap-2 w-full justify-center rounded-full px-5 py-3 text-sm transition-colors ${
                  p.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-border hover:border-accent/40 hover:text-accent"
                }`}
              >
                Agendar <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Valores referenciais. Atendimento presencial em São Paulo.
        </p>
      </Section>
    </>
  );
}
