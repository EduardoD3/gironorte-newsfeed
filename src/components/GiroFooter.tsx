import { Instagram, Youtube, Twitter, Facebook, MapPin, Mail } from "lucide-react";

export default function GiroFooter() {
  return (
    <footer className="bg-giro-surface border-t border-giro">
      {/* CTA banner */}
      <div className="gradient-teal px-6 py-10 text-center">
        <h3 className="font-display text-4xl text-primary-foreground tracking-wide mb-2">
          JUNTE-SE A NÓS!
        </h3>
        <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto leading-relaxed">
          Bem-vindo ao Giro Notícias.<br />
          O nosso maior compromisso é com a verdade.
        </p>
        <button className="bg-primary-foreground text-primary font-bold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg">
          Explore Agora →
        </button>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center shadow-glow">
                <span className="font-display text-primary-foreground text-sm">GN</span>
              </div>
              <div>
                <span className="font-display text-xl text-foreground tracking-wide leading-none block">GIRO NORTE</span>
                <span className="text-[9px] text-primary font-semibold uppercase tracking-widest leading-none">Notícias do Norte</span>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Notícias Atuais para Todas as Idades. Política · Esporte · Lazer · Turismo · Utilidade Pública.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={11} className="text-primary" />
              Porto Velho, Rondônia · Brasil
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-display text-sm text-foreground tracking-wide mb-4">SEÇÕES</h4>
            <ul className="space-y-2">
              {["Início", "Blog", "Política", "Esporte", "Lazer", "Turismo", "Utilidade Pública"].map(item => (
                <li key={item}>
                  <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <h4 className="font-display text-sm text-foreground tracking-wide mb-4">CONECTE-SE</h4>
            <div className="flex gap-3 mb-5">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-giro-surface-2 text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all border border-giro hover:border-primary"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Mail size={11} className="text-primary" />
              contato@gironorte.com.br
            </div>
          </div>
        </div>

        <div className="border-t border-giro pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-muted-foreground text-xs">
            © 2024 Giro Norte · Todos os direitos reservados
          </p>
          <p className="text-muted-foreground/50 text-[10px]">
            Feito com ❤️ para o Norte do Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
