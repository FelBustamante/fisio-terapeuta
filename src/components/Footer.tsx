import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl text-foreground">
            Ana <span className="italic text-accent">Luz</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Fisioterapia integrativa e Reiki para o equilíbrio entre corpo,
            mente e energia.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-accent">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/depoimentos" className="hover:text-accent">Depoimentos</Link></li>
            <li><Link to="/contato" className="hover:text-accent">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 text-accent" />
              <span>Rua das Flores, 123 — São Paulo, SP</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-accent" />
              <a href="https://wa.me/5511999999999" className="hover:text-accent">(11) 99999-9999</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-accent" />
              <a href="mailto:contato@analuz.com" className="hover:text-accent">contato@analuz.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram size={16} className="text-accent" />
              <a href="https://instagram.com" className="hover:text-accent">@analuz.terapias</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Ana Luz Terapias Integrativas.</span>
          <span>Feito com cuidado e intenção.</span>
        </div>
      </div>
    </footer>
  );
}
