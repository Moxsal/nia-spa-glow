import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  src: string;
  poster?: string;
  title: string;
  description?: string;
  className?: string;
}

const VideoCard = ({ src, poster, title, description, className = "" }: VideoCardProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

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
        preload="metadata"
        autoPlay={inView}
        className="w-full h-full object-cover aspect-[9/16] md:aspect-video"
        onClick={toggle}
      />
      {!playing && (
        <button
          aria-label={`Play ${title}`}
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-spa-sage-dark/70 via-transparent to-transparent"
        >
          <span className="p-5 rounded-full bg-spa-gold/90 text-spa-text-primary shadow-spa-strong group-hover:scale-110 transition-spa">
            <Play size={28} fill="currentColor" />
          </span>
        </button>
      )}
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
