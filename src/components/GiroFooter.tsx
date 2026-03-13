import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

export default function GiroFooter() {
  return (
    <footer className="bg-giro-surface border-t border-giro mt-8">
      {/* CTA */}
      <div className="gradient-teal px-6 py-8 text-center">
        <h3 className="font-display text-3xl text-primary-foreground tracking-wide mb-2">
          JUNTE-SE A NÓS!
        </h3>
        <p className="text-primary-foreground/80 text-sm mb-4">
          Bem-vindo ao Giro Notícias.<br />
          O nosso maior compromisso é com a verdade.
        </p>
        <button className="bg-primary-foreground text-primary font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          Explore Agora
        </button>
      </div>

      {/* Social & info */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg gradient-teal flex items-center justify-center">
            <span className="font-display text-primary-foreground text-xs">GN</span>
          </div>
          <div>
            <span className="font-display text-lg text-foreground tracking-wide leading-none block">GIRO NORTE</span>
            <span className="text-[9px] text-primary font-semibold uppercase tracking-widest leading-none">Notícias do Norte</span>
          </div>
        </div>

        <p className="text-muted-foreground text-xs mb-5 leading-relaxed">
          Notícias Atuais para Todas as Idades. Política · Esporte · Lazer · Turismo · Utilidade Pública.
        </p>

        {/* Social */}
        <div className="flex gap-3 mb-6">
          {[
            { Icon: Facebook, label: "Facebook" },
            { Icon: Instagram, label: "Instagram" },
            { Icon: Youtube, label: "YouTube" },
            { Icon: Twitter, label: "Twitter" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-9 h-9 rounded-xl bg-giro-surface-2 text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        <div className="border-t border-giro pt-4">
          <p className="text-muted-foreground text-xs text-center">
            © 2024 Giro Norte · Todos os direitos reservados
          </p>
          <p className="text-muted-foreground/50 text-[10px] text-center mt-1">
            Porto Velho, Rondônia · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
