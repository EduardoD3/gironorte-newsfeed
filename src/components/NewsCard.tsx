import { Clock, Tag } from "lucide-react";

export type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  breaking?: boolean;
};

export default function NewsCard({ article, variant = "default" }: {
  article: NewsArticle;
  variant?: "featured" | "default" | "compact";
}) {
  if (variant === "featured") {
    return (
      <article className="relative w-full overflow-hidden rounded-2xl shadow-card cursor-pointer group">
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 gradient-card" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {article.breaking && (
              <span className="gradient-breaking text-foreground text-[10px] font-black uppercase px-2.5 py-1 rounded-full animate-pulse-dot">
                🔴 Urgente
              </span>
            )}
            <span
              className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full"
              style={{ background: `hsl(var(--${article.categoryColor}))`, color: "hsl(var(--primary-foreground))" }}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-foreground font-extrabold text-lg leading-tight line-clamp-2 mb-2">
            {article.title}
          </h2>
          <p className="text-foreground/70 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-foreground/60 text-xs">
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {article.date}
            </span>
            <span>•</span>
            <span>{article.readTime} de leitura</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="flex gap-3 p-3 rounded-xl bg-giro-surface hover:bg-giro-surface-2 transition-colors cursor-pointer group">
        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-bold uppercase tracking-wider text-primary mb-1 block">
            {article.category}
          </span>
          <h3 className="text-foreground font-bold text-sm leading-tight line-clamp-2 mb-1.5">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Clock size={10} />
            <span>{article.date}</span>
          </div>
        </div>
      </article>
    );
  }

  // Default card
  return (
    <article className="rounded-2xl overflow-hidden bg-giro-surface shadow-card cursor-pointer group hover:shadow-glow transition-all duration-300">
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 gradient-card" />
        <div className="absolute top-2 left-2">
          <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-foreground font-extrabold text-base leading-snug line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Tag size={10} />
            {article.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
