import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/Section";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Agende sua sessão com Camila Pelegrini" },
      { name: "description", content: "Agende sua sessão de Reiki ou fisioterapia integrativa em Cruzeiro, SP. Atendimento pelo WhatsApp." },
      { property: "og:title", content: "Contato — Camila Pelegrini" },
      { property: "og:description", content: "Vamos conversar? Estou pronta para te receber." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section className="pt-16 pb-12 md:pt-24">
        <div className="max-w-2xl">
          <Eyebrow>Contato</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl text-balance">
            Vamos <em className="text-accent">conversar</em>?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            O primeiro passo é o mais leve. Me envie uma mensagem e a gente
            encontra juntos o melhor caminho para você.
          </p>
        </div>
      </Section>

      <Section className="pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* WHATSAPP CARD - principal */}
          <a
            href="https://wa.me/5512998818988?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-accent text-accent-foreground p-7 md:p-12 shadow-warm hover:shadow-warm transition-all hover:-translate-y-1 grain"
          >
            <div aria-hidden className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent-foreground/10 blur-2xl" />
            <MessageCircle size={36} />
            <h2 className="mt-6 font-serif text-3xl">Agende pelo WhatsApp</h2>
            <p className="mt-3 text-accent-foreground/85 max-w-sm">
              Respondo pessoalmente, com atenção, geralmente em poucas horas.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-foreground/15 px-5 py-2.5 text-sm group-hover:bg-accent-foreground/25 transition-colors">
              (12) 99881-8988
            </div>
          </a>

          <div className="rounded-3xl bg-card border border-border/60 p-7 md:p-12 space-y-6">
            <h2 className="font-serif text-3xl">Outros canais</h2>

            <ContactRow icon={Phone} label="Telefone">
              <a href="tel:+5512998818988" className="hover:text-accent">(12) 99881-8988</a>
            </ContactRow>
            <ContactRow icon={Mail} label="E-mail">
              <a href="mailto:contato@camilapelegrini.com" className="hover:text-accent break-all">contato@camilapelegrini.com</a>
            </ContactRow>
            <ContactRow icon={Instagram} label="Instagram">
              <a href="https://instagram.com/dra.camilapelegrini" className="hover:text-accent" target="_blank" rel="noopener noreferrer">@dra.camilapelegrini</a>
            </ContactRow>
            <ContactRow icon={MapPin} label="Endereço">
              <span>Cruzeiro, SP</span>
            </ContactRow>
            <ContactRow icon={Clock} label="Atendimento">
              <span>Segunda a sexta — 9h às 19h<br />Sábado — 9h às 13h</span>
            </ContactRow>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="rounded-3xl overflow-hidden border border-border/60 shadow-soft aspect-video md:aspect-16/8">
          <iframe
            title="Localização do consultório"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-44.980%2C-22.585%2C-44.940%2C-22.555&layer=mapnik"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid place-items-center w-11 h-11 rounded-full bg-accent/10 text-accent shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-foreground/90 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
