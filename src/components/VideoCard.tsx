import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoCardProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
  className?: string;
  aspect?: "portrait" | "video" | "square";
}

const VideoCard = ({
  src,
  poster,
  title,
  description,
  className = "",
  aspect = "portrait",
}: VideoCardProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Auto play/pause based on viewport visibility
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.load();
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
      ? "aspect-square"
      : "aspect-[9/16]";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-spa-medium hover:shadow-spa-strong transition-spa bg-spa-sage-dark ${className}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className={`w-full h-full object-cover ${aspectClass}`}
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute top-3 right-3 p-2 rounded-full bg-spa-sage-dark/60 backdrop-blur-sm text-spa-warm-white opacity-0 group-hover:opacity-100 transition-spa-fast"
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-spa-sage-dark/90 to-transparent pointer-events-none">
        <h3 className="text-spa-warm-white font-semibold">{title}</h3>
        {description && (
          <p className="text-spa-cream/80 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
