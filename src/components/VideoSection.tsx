import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    src: "/videos/giro-video1.mp4",
    title: "BR 319 — Condições da estrada ao vivo",
    description: "Acompanhe as verdadeiras condições da BR 319 que liga Porto Velho a Manaus.",
    category: "Utilidade Pública",
  },
  {
    id: 2,
    src: "/videos/giro-video2.mp4",
    title: "Queimadas: comparativo de um ano",
    description: "Imagens de drone comparam Porto Velho hoje e no mesmo dia de um ano atrás.",
    category: "Meio Ambiente",
  },
];

export default function VideoSection() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 gradient-teal rounded-full" />
          <h2 className="font-display text-2xl text-foreground tracking-wide">VÍDEOS</h2>
        </div>
        <button className="text-xs text-primary font-semibold hover:underline">Ver todos →</button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="rounded-2xl overflow-hidden bg-giro-surface shadow-card group">
            <div className="relative aspect-video bg-background overflow-hidden">
              <video
                id={`vid-${video.id}`}
                src={video.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                playsInline
                controls={playing === video.id}
                muted
                loop
                onPlay={() => setPlaying(video.id)}
                onPause={() => setPlaying(null)}
              />
              {playing !== video.id && (
                <button
                  onClick={() => {
                    const el = document.getElementById(`vid-${video.id}`) as HTMLVideoElement;
                    setPlaying(video.id);
                    el?.play();
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-background/40 group/play"
                >
                  <div className="w-14 h-14 rounded-full gradient-teal flex items-center justify-center shadow-glow group-hover/play:scale-110 transition-transform">
                    <Play className="text-primary-foreground ml-1" size={22} fill="currentColor" />
                  </div>
                </button>
              )}
              <div className="absolute top-2 left-2">
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                  {video.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-extrabold text-foreground text-sm leading-tight mb-1">{video.title}</h3>
              <p className="text-muted-foreground text-xs">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
