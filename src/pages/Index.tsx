import { useState } from "react";
import GiroHeader from "@/components/GiroHeader";
import NewsCard, { NewsArticle } from "@/components/NewsCard";
import VideoSection from "@/components/VideoSection";
import GiroFooter from "@/components/GiroFooter";
import FloatingLiveButton from "@/components/FloatingLiveButton";
import { MapPin, TrendingUp, Flame, Rss } from "lucide-react";

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
  {
    id: 7,
    title: "Amazônia: Biodiversidade em foco",
    excerpt: "Pesquisadores detalham novas descobertas sobre a flora e fauna amazônica, reforçando a importância da preservação ambiental na região Norte do Brasil.",
    category: "Meio Ambiente",
    categoryColor: "primary",
    date: "15 ago 2024",
    readTime: "5 min",
    image: "/images/giro-hero.avif",
    featured: false,
  },
];

const trending = [
  "BR 319 Interditada",
  "Queimadas Rondônia",
  "Porto Velho",
  "Amazônia 2024",
  "Turismo RO",
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredNews = activeCategory === "Todas"
    ? allNews
    : allNews.filter(n => n.category === activeCategory || n.category.includes(activeCategory));

  const featuredArticle = filteredNews.find(n => n.featured) ?? filteredNews[0];
  const secondaryNews = filteredNews.filter(n => n.id !== featuredArticle?.id).slice(0, 3);
  const remainingNews = filteredNews.filter(n => n.id !== featuredArticle?.id && !secondaryNews.find(s => s.id === n.id));

  return (
    <div className="min-h-screen bg-background">
      <GiroHeader activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="max-w-screen-xl mx-auto px-4 lg:px-8 pb-16 pt-2">

        {/* ====== DESKTOP GRID LAYOUT ====== */}
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-8">

          {/* === MAIN COLUMN === */}
          <div>
            {/* Hero section */}
            <section className="pt-5 pb-5">
              {featuredArticle && (
                <NewsCard article={featuredArticle} variant="featured" />
              )}
            </section>

            {/* Trending topics */}
            <section className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={15} className="text-giro-amber" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Em Alta</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {trending.map((tag) => (
                  <button
                    key={tag}
                    className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-giro-surface text-muted-foreground hover:text-primary hover:border-primary border border-giro transition-all"
                  >
                    #{tag.replace(/\s/g, "")}
                  </button>
                ))}
              </div>
            </section>

            {/* Secondary news grid */}
            {secondaryNews.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 gradient-teal rounded-full" />
                    <h2 className="font-display text-xl text-foreground tracking-wide">DESTAQUES</h2>
                  </div>
                  <button className="text-xs text-primary font-semibold hover:underline">Ver todos →</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {secondaryNews.map(article => (
                    <NewsCard key={article.id} article={article} variant="default" />
                  ))}
                </div>
              </section>
            )}

            {/* Location badge */}
            <div className="mb-6 flex items-center gap-2 p-3 rounded-xl bg-giro-surface border border-giro">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                Cobrindo <span className="text-foreground font-semibold">Porto Velho, RO</span> e toda a Região Norte
              </p>
            </div>

            {/* Video section */}
            <VideoSection />

            {/* Latest news — compact list */}
            {remainingNews.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Flame size={16} className="text-destructive" />
                  <h2 className="font-display text-xl text-foreground tracking-wide">MAIS NOTÍCIAS</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {remainingNews.map(article => (
                    <NewsCard key={article.id} article={article} variant="compact" />
                  ))}
                </div>
              </section>
            )}

            {/* About banner */}
            <section className="rounded-2xl overflow-hidden relative">
              <img
                src="/images/giro-hero.avif"
                alt="Giro Norte"
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-3xl lg:text-4xl text-foreground tracking-wide mb-1">A SUA FONTE MAIS</h3>
                <h3 className="font-display text-3xl lg:text-4xl text-primary tracking-wide mb-2">SEGURA DE INFORMAÇÕES.</h3>
                <p className="text-sm text-muted-foreground mb-5">Notícias Atuais para Todas as Idades</p>
                <button className="gradient-teal text-primary-foreground font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-glow">
                  Explore o Blog →
                </button>
              </div>
            </section>
          </div>

          {/* === SIDEBAR (desktop only) === */}
          <aside className="hidden lg:block space-y-6 pt-5">
            {/* Live TV CTA */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="gradient-breaking p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-foreground/20 flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                  <span className="text-2xl">📺</span>
                </div>
                <h3 className="font-display text-xl text-foreground tracking-wide mb-1">TV AO VIVO</h3>
                <p className="text-foreground/80 text-xs mb-4">Assista agora ao canal Giro Norte ao vivo</p>
                <a
                  href="https://www.youtube.com/@gironorte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-destructive font-black text-xs px-5 py-2.5 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse inline-block" />
                  ASSISTIR AGORA
                </a>
              </div>
            </div>

            {/* Trending sidebar */}
            <div className="bg-giro-surface rounded-2xl p-4 border border-giro">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={14} className="text-giro-amber" />
                <h3 className="font-display text-base text-foreground tracking-wide">MAIS LIDAS</h3>
              </div>
              <div className="space-y-3">
                {allNews.slice(0, 5).map((article, i) => (
                  <div key={article.id} className="flex gap-3 items-start cursor-pointer group">
                    <span className="font-display text-2xl text-primary/30 leading-none w-6 flex-shrink-0 group-hover:text-primary transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-primary block mb-0.5">
                        {article.category}
                      </span>
                      <p className="text-foreground text-xs font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-giro-surface-2 rounded-2xl p-5 border border-giro">
              <div className="flex items-center gap-2 mb-3">
                <Rss size={14} className="text-primary" />
                <h3 className="font-display text-base text-foreground tracking-wide">NEWSLETTER</h3>
              </div>
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                Receba as principais notícias do Norte diretamente no seu e-mail.
              </p>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-background border border-giro rounded-xl px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors mb-3"
              />
              <button className="w-full gradient-teal text-primary-foreground font-bold text-xs py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                Inscrever-se
              </button>
            </div>

            {/* Social links */}
            <div className="bg-giro-surface rounded-2xl p-4 border border-giro">
              <h3 className="font-display text-base text-foreground tracking-wide mb-4">SIGA-NOS</h3>
              <div className="space-y-2">
                {[
                  { name: "YouTube", icon: "📺", sub: "Assista ao vivo", color: "text-destructive", href: "https://www.youtube.com/@gironorte" },
                  { name: "Instagram", icon: "📸", sub: "@gironorte", color: "text-giro-amber", href: "#" },
                  { name: "Facebook", icon: "👥", sub: "Giro Norte Notícias", color: "text-primary", href: "#" },
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-giro-surface-2 transition-colors group"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <div className="flex-1">
                      <p className={`text-xs font-bold ${social.color}`}>{social.name}</p>
                      <p className="text-[10px] text-muted-foreground">{social.sub}</p>
                    </div>
                    <span className="text-muted-foreground text-xs group-hover:text-primary transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <GiroFooter />
      <FloatingLiveButton />
    </div>
  );
}
