"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ---------- Types ----------
interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  youtubeId: string;
}

// ---------- Video Data (9 items) ----------
const VIDEO_DATA: Video[] = [
  {
    id: "1",
    title: "Sarah Mitchell",
    description: "Why I Chose This Mortgage Advisor",
    duration: "6:15",
    youtubeId: "_T8LenZ2bZ4",
  },
  {
    id: "2",
    title: "Your Home is Sitting on Money ",
    description: "The Most Important Thing to Homebuyers",
    duration: "4:32",
    youtubeId: "jEZVGCVxZec",
  },
  {
    id: "3",
    title: "First-Time",
    description: "First-Time Homebuyer Success Story",
    duration: "5:48",
    youtubeId: "vF01D7iyox0",
  },
  {
    id: "4",
    title: "Navigating",
    description: "Navigating the Mortgage Process with Ease",
    duration: "7:02",
    youtubeId: "i6cU3bhLuj4",
  },
  {
    id: "5",
    title: "Refinancing",
    description: "Refinancing Made Simple & Stress-Free",
    duration: "3:55",
    youtubeId: "VTEO9-2yunw",
  },
  {
    id: "6",
    title: "Building Wealth",
    description: "Building Wealth Through Real Estate",
    duration: "8:20",
    youtubeId: "yA07k-BOMVI",
  },
  {
    id: "7",
    title: "Expert Advice",
    description: "Expert Advice for First-Time Investors",
    duration: "5:10",
    youtubeId: "hWUCv0DN9q8",
  },
  {
    id: "8",
    title: "Mortgage Journey",
    description: "A Mortgage Journey to Remember",
    duration: "4:45",
    youtubeId: "jEZVGCVxZec",
  },
  {
    id: "9",
    title: "Perfect Loan",
    description: "Finding the Perfect Loan Solution",
    duration: "5:30",
    youtubeId: "hWUCv0DN9q8",
  },
];

// ---------- Icons (SVG) ----------
const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ---------- Video Card (Instagram Reels Style) ----------
const ReelCard = ({
  video,
  onClick,
}: {
  video: Video;
  onClick: (v: Video) => void;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = () => {
    onClick(video);
  };

  return (
    <div
      className="reel-card relative flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleCardClick}
      style={{ aspectRatio: "9 / 16" }}
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
        alt={video.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to lower quality thumbnail if maxres doesn't exist
          (e.target as HTMLImageElement).src =
            `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
            <PlayIcon className="w-5 h-5 ml-0.5" />
          </div>
        </div>
      )}

      <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10">
        {video.duration}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
        <h4 className="text-white font-bold text-sm truncate leading-tight">
          {video.title}
        </h4>
        <p className="text-white/70 text-[11px] truncate mt-0.5 leading-tight">
          {video.description}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#460647" }}
          />
          <span className="text-[10px] text-white/50 font-medium tracking-wide uppercase">
            Reel
          </span>
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "inset 0 0 0 2px rgba(20, 112, 175, 0.5)" }}
      />
    </div>
  );
};

// ---------- Video Modal ----------
const VideoModal = ({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="aspect-[9/16] w-full bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-12 pointer-events-none">
          <h3 className="text-white font-bold text-lg">{video.title}</h3>
          <p className="text-white/70 text-sm mt-0.5">{video.description}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[#460647] text-xs font-semibold uppercase tracking-wider">
              {video.duration}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/40 text-xs">Client Story</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Carousel Component ----------
export default function VideoCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const checkScroll = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);

    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector(".reel-card")?.getBoundingClientRect().width || 200;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * (direction === "left" ? -2 : 2);
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const openVideo = (video: Video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const el = rowRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: percent * maxScroll, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span
              className="w-1 h-8 rounded-full"
              style={{ background: "#460647" }}
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              Mortgage <span style={{ color: "#460647" }}>Insights</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 ml-4 pl-0.5">
            Tristan breaks down mortgages, rates & the home-buying process —
            straight from the field
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200/60 self-start sm:self-auto">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "#460647" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "#460647" }}
            />
          </span>
          <span className="text-xs font-medium text-slate-600">
            {VIDEO_DATA.length} Videos
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          disabled={!showLeftArrow}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg -ml-4 ${
            showLeftArrow
              ? "bg-white text-slate-700 hover:bg-slate-50 hover:scale-105 border border-slate-200"
              : "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
          }`}
          aria-label="Scroll left"
          style={{
            boxShadow: showLeftArrow ? "0 4px 12px rgba(0,0,0,0.08)" : "none",
          }}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <div
          ref={rowRef}
          className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-1 scrollbar-brand custom-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {VIDEO_DATA.map((video) => (
            <div key={video.id} className="snap-start">
              <ReelCard video={video} onClick={openVideo} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!showRightArrow}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg -mr-4 ${
            showRightArrow
              ? "bg-white text-[#460647] hover:bg-slate-50 hover:scale-105 border border-slate-200"
              : "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50"
          }`}
          aria-label="Scroll right"
          style={{
            boxShadow: showRightArrow ? "0 4px 12px rgba(0,0,0,0.08)" : "none",
          }}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Scroller */}
      <div className="mt-6 px-2">
        <div
          ref={trackRef}
          className="relative w-full h-2 bg-[#460647]/20 rounded-full cursor-pointer overflow-visible"
          onClick={handleTrackClick}
        >
          {/* Filled progress */}
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
            style={{
              width: `${scrollProgress * 100}%`,
              background: "#460647",
            }}
          />

          {/* Tick marks */}
          {VIDEO_DATA.map((_, i) => {
            const position = i / (VIDEO_DATA.length - 1);
            return (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-1 h-4 rounded-full transition-colors duration-200"
                style={{
                  left: `${position * 100}%`,
                  background: "#460647",
                  transform: "translateX(-50%) translateY(-50%)",
                }}
              />
            );
          })}
        </div>
        {/* Labels */}
        <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-medium px-0.5">
          {VIDEO_DATA.map((video, i) => (
            <span
              key={i}
              className="text-center"
              style={{ width: `${100 / VIDEO_DATA.length}%` }}
            >
              {video.duration}
            </span>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeModal} />
      )}
    </div>
  );
}
