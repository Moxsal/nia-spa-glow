import VideoCard from "@/components/VideoCard";
import video1 from "@/assets/videos/spa-experience.mp4.asset.json";
import video2 from "@/assets/videos/spa-treatment.mp4.asset.json";
import video3 from "@/assets/videos/spa-facial.mp4.asset.json";
import video4 from "@/assets/videos/spa-relaxation.mp4.asset.json";
import video5 from "@/assets/videos/spa-signature.mp4.asset.json";
import { getHostedAssetUrl } from "@/lib/assets";

const videos = [
  { src: getHostedAssetUrl(video5.url), title: "Our Signature Experience", description: "The Nia Spa difference, in motion" },
  { src: getHostedAssetUrl(video1.url), title: "Inside Nia Spa", description: "A look at our serene Lekki sanctuary" },
  { src: getHostedAssetUrl(video2.url), title: "Signature Treatments", description: "Crafted by our expert therapists" },
  { src: getHostedAssetUrl(video3.url), title: "Facial & Skin Rituals", description: "Glow-restoring care, every visit" },
  { src: getHostedAssetUrl(video4.url), title: "Pure Relaxation", description: "Where you unwind, renew, rejuvenate" },
];

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

const VideoShowcase = ({
  title = "Experience Nia Spa in Motion",
  subtitle = "Step inside our spa through the eyes of our guests — real moments, real results.",
  className = "",
}: Props) => {
  return (
    <section className={`py-20 bg-spa-warm-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-spa-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-spa-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
