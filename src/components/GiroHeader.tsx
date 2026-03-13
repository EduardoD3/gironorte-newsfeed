import { useState } from "react";
import { Menu, X, Search, Bell } from "lucide-react";

const categories = ["Todas", "Política", "Esporte", "Lazer", "Turismo", "Utilidade Pública"];

export default function GiroHeader({ activeCategory, onCategoryChange }: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Breaking news ticker */}
      <div className="gradient-breaking px-4 py-1.5 overflow-hidden relative">
        <div className="flex items-center gap-2">
          <span className="bg-foreground text-destructive text-[10px] font-black uppercase px-2 py-0.5 rounded-sm flex-shrink-0 animate-pulse-dot">
            AO VIVO
          </span>
          <div className="overflow-hidden flex-1">
            <span className="animate-ticker text-foreground text-xs font-semibold">
              BR 319 Interditada no trecho Km 301 &nbsp;•&nbsp; Condições das estradas ao vivo &nbsp;•&nbsp; Queimadas: comparativo de um ano &nbsp;•&nbsp; Giro Norte — A sua fonte mais segura de informações &nbsp;•&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-giro">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-teal flex items-center justify-center">
              <span className="font-display text-primary-foreground text-sm leading-none">GN</span>
            </div>
            <div>
              <span className="font-display text-xl text-foreground tracking-wide leading-none block">GIRO NORTE</span>
              <span className="text-[9px] text-giro-teal font-semibold uppercase tracking-widest leading-none">Notícias do Norte</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search size={18} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Categories scroll */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-giro-surface text-muted-foreground hover:text-foreground hover:bg-giro-surface-2"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-giro shadow-card animate-fade-in-up">
            <nav className="px-4 py-4 space-y-1">
              {["Início", "Blog", "Política", "Esporte", "Lazer", "Turismo", "Utilidade Pública", "Sobre"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left py-3 px-3 text-foreground font-medium hover:text-primary hover:bg-giro-surface rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="px-4 pb-4 pt-2 border-t border-giro mt-2">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 Giro Norte · A sua fonte mais segura
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
