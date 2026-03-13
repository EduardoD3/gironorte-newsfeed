import { useState } from "react";
import GiroHeader from "@/components/GiroHeader";
import NewsCard, { NewsArticle } from "@/components/NewsCard";
import VideoSection from "@/components/VideoSection";
import GiroFooter from "@/components/GiroFooter";
import { MapPin, TrendingUp, Flame } from "lucide-react";

// ===== NEWS DATA (from gironorte.com.br) =====
const allNews: NewsArticle[] = [
  {
    id: 1,
    title: "BR 319 Interditada no trecho Km 301 (04/09)",
    excerpt: "A BR 319 foi novamente interditada. A rodovia que liga Porto Velho a Manaus enfrenta mais um episódio crítico de interdição, afetando centenas de motoristas e transportadoras.",
    category: "Utilidade Pública",
    categoryColor: "primary",
    date: "04 set 2024",
    readTime: "3 min",
    image: "/images/giro-caixas.avif",
    breaking: true,
    featured: true,
  },
  {
    id: 2,
    title: "Condições da BR 319 (Ao Vivo)",
    excerpt: "Verdadeiras condições da BR 319 que liga Porto Velho a Manaus. Acompanhe em tempo real o estado da estrada que é vital para o Norte do Brasil.",
    category: "Utilidade Pública",
    categoryColor: "primary",
    date: "05 set 2024",
    readTime: "2 min",
    image: "/images/giro-mobile.avif",
    featured: false,
  },
  {
    id: 3,
    title: "Queimadas: hoje e 01/09/24 — Boas notícias",
    excerpt: "Exatamente um ano atrás, foram tiradas fotos de drone da cidade de Porto Velho. Hoje, ao encontrar estas fotos, foi possível comparar o mesmo dia deste ano — e há boas notícias.",
    category: "Meio Ambiente",
    categoryColor: "primary",
    date: "01 set 2024",
    readTime: "4 min",
    image: "/images/giro-hero.avif",
    featured: false,
  },
  {
    id: 4,
    title: "Porto Velho: Infraestrutura Urbana e Abastecimento",
    excerpt: "As caixas d'água e torres de distribuição de Porto Velho passam por avaliação. Saiba como a cidade garante o abastecimento de água para seus moradores.",
    category: "Utilidade Pública",
    categoryColor: "primary",
    date: "13 dez 2023",
    readTime: "3 min",
    image: "/images/giro-caixas.avif",
    featured: false,
  },
  {
    id: 5,
    title: "Turismo no Norte: Destinos imperdíveis de Rondônia",
    excerpt: "Rondônia esconde belezas naturais que poucos conhecem. Cachoeiras, rios e florestas que fazem do estado um paraíso ainda inexplorado pelo turismo nacional.",
    category: "Turismo",
    categoryColor: "primary",
    date: "20 ago 2024",
    readTime: "5 min",
    image: "/images/giro-mobile.avif",
    featured: false,
  },
  {
    id: 6,
    title: "Política Regional: O futuro do desenvolvimento do Norte",
    excerpt: "Debates sobre políticas públicas para o desenvolvimento sustentável da Região Norte ganham força. Lideranças locais discutem prioridades para os próximos anos.",
    category: "Política",
    categoryColor: "primary",
    date: "28 ago 2024",
    readTime: "6 min",
    image: "/images/giro-hero.avif",
    featured: false,
  },
];

const trending = [
  "BR 319 Interditada",
  "Queimadas Rondônia",
  "Porto Velho Notícias",
  "Amazônia 2024",
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredNews = activeCategory === "Todas"
    ? allNews
    : allNews.filter(n => n.category === activeCategory || n.category.includes(activeCategory));

  const featuredArticle = filteredNews.find(n => n.featured) ?? filteredNews[0];
  const secondaryNews = filteredNews.filter(n => n.id !== featuredArticle?.id).slice(0, 2);
  const remainingNews = filteredNews.filter(n => n.id !== featuredArticle?.id && !secondaryNews.find(s => s.id === n.id));

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <GiroHeader activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="pb-6">
        {/* Hero section */}
        <section className="px-4 pt-5 pb-4">
          {featuredArticle && (
            <NewsCard article={featuredArticle} variant="featured" />
          )}
        </section>

        {/* Trending topics */}
        <section className="px-4 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-giro-amber" />
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Em Alta</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {trending.map((tag) => (
              <button
                key={tag}
                className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full bg-giro-surface-2 text-muted-foreground hover:text-primary hover:border-primary border border-giro transition-all"
              >
                #{tag.replace(/\s/g, "")}
              </button>
            ))}
          </div>
        </section>

        {/* Secondary news - 2 columns */}
        {secondaryNews.length > 0 && (
          <section className="px-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 gradient-teal rounded-full" />
                <h2 className="font-display text-xl text-foreground tracking-wide">DESTAQUES</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {secondaryNews.map(article => (
                <NewsCard key={article.id} article={article} variant="default" />
              ))}
            </div>
          </section>
        )}

        {/* Location badge */}
        <div className="mx-4 mb-5 flex items-center gap-2 p-3 rounded-xl bg-giro-surface border border-giro">
          <MapPin size={14} className="text-primary flex-shrink-0" />
          <p className="text-xs text-muted-foreground">
            Cobrindo <span className="text-foreground font-semibold">Porto Velho, RO</span> e toda a Região Norte
          </p>
        </div>

        {/* Video section */}
        <VideoSection />

        {/* Latest news - compact list */}
        {remainingNews.length > 0 && (
          <section className="px-4 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Flame size={16} className="text-destructive" />
              <h2 className="font-display text-xl text-foreground tracking-wide">MAIS NOTÍCIAS</h2>
            </div>
            <div className="space-y-2">
              {remainingNews.map(article => (
                <NewsCard key={article.id} article={article} variant="compact" />
              ))}
            </div>
          </section>
        )}

        {/* About banner */}
        <section className="mx-4 rounded-2xl overflow-hidden relative">
          <img
            src="/images/giro-hero.avif"
            alt="Giro Norte"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-background/75 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
            <h3 className="font-display text-2xl text-foreground tracking-wide mb-1">A SUA FONTE MAIS</h3>
            <h3 className="font-display text-2xl text-primary tracking-wide mb-2">SEGURA DE INFORMAÇÕES.</h3>
            <p className="text-xs text-muted-foreground mb-4">Notícias Atuais para Todas as Idades</p>
            <button className="gradient-teal text-primary-foreground font-bold text-xs px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-glow">
              Explore o Blog →
            </button>
          </div>
        </section>
      </main>

      <GiroFooter />
    </div>
  );
}
