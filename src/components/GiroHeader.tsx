import { useState } from "react";
import { Menu, X, Search, Bell, Tv2 } from "lucide-react";

const categories = ["Todas", "Política", "Esporte", "Lazer", "Turismo", "Utilidade Pública", "Meio Ambiente"];

export default function GiroHeader({ activeCategory, onCategoryChange }: {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Breaking news ticker */}
      <div className="gradient-breaking px-4 py-1.5 overflow-hidden relative">
        <div className="flex items-center gap-2 max-w-screen-xl mx-auto">
          <span className="bg-foreground text-destructive text-[10px] font-black uppercase px-2 py-0.5 rounded-sm flex-shrink-0 animate-pulse-dot">
            AO VIVO
          </span>
          <div className="overflow-hidden flex-1">
            <span className="animate-ticker text-foreground text-xs font-semibold">
              BR 319 Interditada no trecho Km 301 &nbsp;•&nbsp; Condições das estradas ao vivo &nbsp;•&nbsp; Queimadas: comparativo de um ano &nbsp;•&nbsp; Giro Norte — A sua fonte mais segura de informações &nbsp;•&nbsp; Porto Velho: Infraestrutura em avaliação &nbsp;•&nbsp;
            </span>
          </div>
          {/* Live TV link — visible on desktop */}
          <a
            href="https://www.youtube.com/@gironorte"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-foreground/20 hover:bg-foreground/30 text-foreground text-[10px] font-black uppercase px-3 py-1 rounded-full transition-all flex-shrink-0"
          >
            <Tv2 size={11} />
            TV Ao Vivo
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-giro">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-8 h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center shadow-glow">
              <span className="font-display text-primary-foreground text-sm leading-none">GN</span>
            </div>
            <div>
              <span className="font-display text-2xl text-foreground tracking-wide leading-none block">GIRO NORTE</span>
              <span className="text-[9px] text-primary font-semibold uppercase tracking-widest leading-none">Notícias do Norte</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {["Início", "Blog", "Política", "Esporte", "Turismo", "Sobre"].map((item) => (
              <button
                key={item}
                className="text-sm text-muted-foreground hover:text-foreground font-medium px-3 py-1.5 rounded-lg hover:bg-giro-surface transition-all"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search bar — desktop */}
            {searchOpen ? (
              <div className="hidden md:flex items-center gap-2 bg-giro-surface border border-giro rounded-xl px-3 py-1.5 animate-fade-in-up">
                <Search size={14} className="text-muted-foreground" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Buscar notícias..."
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-44"
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-giro-surface"
              >
                <Search size={18} />
              </button>
            )}

            <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-giro-surface relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>

            {/* Live TV button — desktop */}
            <a
              href="https://www.youtube.com/@gironorte"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 gradient-breaking text-foreground font-black text-xs uppercase px-4 py-2 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
              Ao Vivo
            </a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Categories scroll */}
        <div className="flex gap-2 px-4 lg:px-8 pb-3 overflow-x-auto scrollbar-hide max-w-screen-xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
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
          <div className="absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-giro shadow-card animate-fade-in-up lg:hidden">
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
            {/* Mobile live TV CTA */}
            <div className="px-4 pb-4">
              <a
                href="https://www.youtube.com/@gironorte"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full gradient-breaking text-foreground font-black text-sm py-3 rounded-xl"
              >
                <Tv2 size={16} />
                Assistir TV Ao Vivo
              </a>
            </div>
            <div className="px-4 pb-4 pt-1 border-t border-giro">
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
