import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-reiki.jpg";
import portrait from "@/assets/portrait-ana.jpg";
import reikiImg from "@/assets/service-reiki.jpg";
import fisioImg from "@/assets/service-fisio.jpg";
import aromaImg from "@/assets/service-aroma.jpg";
import { Section, Eyebrow } from "@/components/Section";
import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Luz — Fisioterapia integrativa & Reiki" },
      { name: "description", content: "Cuidado terapêutico que une fisioterapia, Reiki e terapias naturais para devolver leveza ao corpo e à mente." },
      { property: "og:title", content: "Ana Luz — Fisioterapia integrativa & Reiki" },
      { property: "og:description", content: "Equilíbrio entre corpo, mente e energia com Ana Luz." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative z-10">
            <Eyebrow>Bem-estar integrativo</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl text-foreground text-balance leading-[1.05]">
              Equilíbrio entre <em className="text-accent">corpo</em>, mente e energia.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              Sessões que unem fisioterapia, Reiki e terapias naturais para
              acolher você por inteiro — com presença, escuta e cuidado.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm text-accent-foreground hover:bg-accent/90 transition-all shadow-soft hover:shadow-warm"
              >
                Agendar uma sessão <ArrowRight size={16} />
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm text-foreground hover:border-accent/40 hover:text-accent transition-colors"
              >
                Conhecer os serviços
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <div className="font-serif text-2xl text-foreground">+10</div>
                <div>anos de experiência</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-serif text-2xl text-foreground">+500</div>
                <div>vidas tocadas</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-serif text-2xl text-foreground">3</div>
                <div>terapias integradas</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] -rotate-2" />
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-1" />
            <img
              src={heroImg}
              alt="Espaço de cuidado: mesa de tratamento com toalhas, eucalipto e velas"
              width={1920}
              height={1080}
              className="relative rounded-[1.75rem] shadow-warm object-cover w-full aspect-[4/3] grain"
            />
          </div>
        </div>

        {/* decorative blobs */}
        <div aria-hidden className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* PRINCÍPIOS */}
      <Section className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Cuidado humano", text: "Cada sessão é única, modelada pelo seu momento e pelas suas necessidades." },
            { icon: Leaf, title: "Abordagem natural", text: "Técnicas integrativas que respeitam o ritmo do seu corpo e da sua energia." },
            { icon: Sparkles, title: "Equilíbrio profundo", text: "Tratamento físico e energético, para você se sentir inteiro novamente." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card border border-border/60 p-8 shadow-soft hover:shadow-warm transition-shadow">
              <div className="grid place-items-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE PRÉVIA */}
      <Section className="py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative max-w-md mx-auto md:mx-0">
            <div className="absolute -inset-3 bg-primary/10 rounded-[2rem] -rotate-2" />
            <img
              src={portrait}
              alt="Retrato de Ana Luz, fisioterapeuta e terapeuta Reiki"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-[1.75rem] shadow-soft object-cover w-full aspect-[4/5]"
            />
          </div>
          <div>
            <Eyebrow>Sobre Ana</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-balance">
              Uma jornada de <em className="text-accent">presença</em> e cura.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sou fisioterapeuta há mais de uma década, mestra em Reiki e
              estudante eterna das terapias integrativas. Acredito que cuidar
              é também escutar — e que o corpo guarda histórias que merecem ser
              ouvidas com gentileza.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Meu trabalho nasce do encontro entre ciência e sensibilidade,
              entre o toque que alivia e a energia que reorganiza.
            </p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              Conhecer minha história <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* SERVIÇOS PRÉVIA */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-balance">
            Caminhos para o seu <em className="text-accent">bem-estar</em>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Terapias que se complementam, criadas para tratar você como um todo.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { img: reikiImg, title: "Reiki", desc: "Harmonização energética para aliviar o estresse e restaurar o equilíbrio sutil." },
            { img: fisioImg, title: "Fisioterapia integrativa", desc: "Atendimento corporal com olhar holístico, técnicas manuais e escuta atenta." },
            { img: aromaImg, title: "Aromaterapia", desc: "Óleos essenciais selecionados para acolher emoções e potencializar o cuidado." },
          ].map((s) => (
            <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-warm transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all">
            Ver todos os serviços <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 md:p-16 text-center grain">
          <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <Eyebrow>Vamos começar</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance max-w-2xl mx-auto">
            Permita-se um momento só seu.
          </h2>
          <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto">
            Agende uma conversa inicial pelo WhatsApp e descubra qual caminho é
            mais delicado para você nesse momento.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground hover:bg-accent/90 transition-colors shadow-warm"
          >
            Falar no WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </>
  );
}
