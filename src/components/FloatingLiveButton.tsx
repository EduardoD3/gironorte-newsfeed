import { useState } from "react";
import { X, Tv2, Radio } from "lucide-react";

export default function FloatingLiveButton() {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Dismiss on mobile when expanded */}
      {expanded && (
        <button
          onClick={() => setDismissed(true)}
          className="w-7 h-7 rounded-full bg-giro-surface-2 border border-giro text-muted-foreground hover:text-foreground flex items-center justify-center transition-all"
          aria-label="Fechar"
        >
          <X size={12} />
        </button>
      )}

      {/* Expanded card */}
      {expanded && (
        <div className="bg-card border border-giro rounded-2xl shadow-card overflow-hidden animate-fade-in-up w-64">
          {/* Header */}
          <div className="gradient-breaking px-4 py-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-foreground rounded-full animate-pulse flex-shrink-0" />
            <span className="text-foreground font-black text-xs uppercase tracking-wider">Canal ao Vivo</span>
          </div>
          {/* Body */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 gradient-teal rounded-xl flex items-center justify-center flex-shrink-0">
                <Tv2 size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-foreground font-bold text-sm">Giro Norte TV</p>
                <p className="text-muted-foreground text-[11px]">Notícias ao vivo · 24h</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
              Acompanhe a cobertura ao vivo das principais notícias de Porto Velho e Rondônia.
            </p>
            <a
              href="https://www.youtube.com/@gironorte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full gradient-breaking text-foreground font-black text-xs px-4 py-2.5 rounded-xl hover:opacity-90 transition-all active:scale-95"
            >
              <Radio size={13} />
              ASSISTIR AGORA
            </a>
          </div>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Canal ao Vivo"
        className={`
          relative flex items-center gap-2.5 rounded-full shadow-card
          transition-all duration-300 ease-out active:scale-95
          ${expanded
            ? "gradient-teal text-primary-foreground pl-4 pr-5 py-3"
            : "gradient-breaking text-foreground pl-4 pr-5 py-3 hover:scale-105"
          }
        `}
      >
        {/* Pulse ring */}
        {!expanded && (
          <span className="absolute inset-0 rounded-full gradient-breaking opacity-60 animate-ping" />
        )}
        {/* Live dot */}
        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${expanded ? "bg-primary-foreground" : "bg-foreground animate-pulse"}`} />
        <span className="font-black text-xs uppercase tracking-wide whitespace-nowrap">
          {expanded ? "Fechar" : "📺 Ao Vivo"}
        </span>
      </button>
    </div>
  );
}
