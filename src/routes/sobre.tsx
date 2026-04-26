import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-ana.jpg";
import { Section, Eyebrow } from "@/components/Section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Ana Luz — Fisioterapeuta & Mestra em Reiki" },
      { name: "description", content: "Conheça a trajetória, a formação e a filosofia de cuidado de Ana Luz." },
      { property: "og:title", content: "Sobre Ana Luz" },
      { property: "og:description", content: "Fisioterapia, Reiki e terapias integrativas com presença e sensibilidade." },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>Sobre mim</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl text-balance">
            Cuidar é, antes de tudo, <em className="text-accent">escutar</em>.
          </h1>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] -rotate-2" />
            <img
              src={portrait}
              alt="Ana Luz, fisioterapeuta e terapeuta Reiki"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-[1.75rem] shadow-warm object-cover w-full aspect-[4/5]"
            />
          </div>

          <div className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground/80">
              Sou Ana Luz, fisioterapeuta formada pela Universidade Federal,
              com mais de dez anos dedicados ao cuidado do corpo. Há sete anos,
              o Reiki entrou na minha vida — e mudou para sempre o modo como
              entendo a saúde.
            </p>
            <p>
              Descobri que tratar não é apenas aliviar uma dor física: é
              acolher a história inteira de quem chega. Por isso busquei
              formação em Reiki Usui (Mestrado), aromaterapia clínica e
              massoterapia integrativa.
            </p>
            <p>
              Hoje meu trabalho acontece nesse encontro: o conhecimento
              científico da fisioterapia somado à delicadeza das terapias
              energéticas. Cada sessão é desenhada com você, no seu tempo, com
              o que o seu corpo está pedindo agora.
            </p>

            <div className="pt-6 grid sm:grid-cols-2 gap-5">
              <ValueCard title="Presença" text="Cada atendimento é um espaço só seu, sem pressa, sem julgamento." />
              <ValueCard title="Integração" text="Corpo, mente e energia caminhando juntos no processo de cura." />
              <ValueCard title="Ética" text="Práticas baseadas em evidências e em formação contínua." />
              <ValueCard title="Gentileza" text="Toque suave, ambiente acolhedor, escuta verdadeira." />
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-12">
        <div className="rounded-3xl bg-secondary/60 p-10 md:p-14">
          <Eyebrow>Formação</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Trajetória de estudo</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-muted-foreground">
            {[
              "Bacharelado em Fisioterapia — UF",
              "Mestrado em Reiki Usui Tradicional",
              "Especialização em Terapia Manual",
              "Aromaterapia Clínica — IFA",
              "Massoterapia Integrativa",
              "Cursos contínuos em Saúde Integrativa",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-balance max-w-xl mx-auto">
          Pronto para começar essa jornada juntos?
        </h2>
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm text-accent-foreground hover:bg-accent/90 transition-colors shadow-soft"
        >
          Entrar em contato <ArrowRight size={16} />
        </Link>
      </Section>
    </>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-5">
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
