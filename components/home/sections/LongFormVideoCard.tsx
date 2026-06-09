"use client";

import { useRef, useState } from "react";
import {
  FaClosedCaptioning,
  FaCog,
  FaExpand,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { MdForward10, MdReplay10 } from "react-icons/md";

type LongFormVideoCardProps = {
  src: string;
  poster?: string;
  caption: string;
  hoverCaption?: string;
};

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function LongFormVideoCard({
  src,
  poster,
  caption,
  hoverCaption,
}: LongFormVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const syncProgress = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    video.muted = true;
    setIsMuted(true);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const enableSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seekBy = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + delta));
    syncProgress();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * video.duration;
    syncProgress();
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen?.();
    }
  };

  return (
    <article
      className="group relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/[0.12] bg-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] md:rounded-[34px] lg:aspect-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onTimeUpdate={syncProgress}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Default caption pill */}
      <div
        className={`pointer-events-none absolute bottom-6 left-1/2 z-[2] max-w-[90%] -translate-x-1/2 transition-opacity duration-300 md:bottom-7 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="inline-block rounded-lg bg-black/90 px-5 py-2.5 text-center text-sm leading-snug text-white md:px-6 md:py-3 md:text-base">
          {caption}
        </span>
      </div>

      {/* Hover player chrome */}
      <div
        className={`absolute inset-0 z-[3] flex flex-col bg-gradient-to-t from-black/85 via-black/20 to-black/50 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {isMuted && (
          <button
            type="button"
            onClick={enableSound}
            className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-lg border border-white/25 bg-black/70 px-3.5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/90 md:left-6 md:top-6"
          >
            <FaVolumeMute className="text-sm" />
            Enable sound
          </button>
        )}

        <div className="mt-auto px-5 pb-5 pt-12 md:px-6 md:pb-6">
          <div className="mb-4 flex justify-center">
            <span className="inline-block max-w-full rounded-lg bg-black/90 px-4 py-2.5 text-center text-sm leading-snug text-white md:px-5 md:py-3 md:text-base">
              {hoverCaption ?? caption}
            </span>
          </div>

          <div
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            tabIndex={0}
            onClick={handleProgressClick}
            className="mb-4 h-1.5 cursor-pointer rounded-full bg-white/25"
          >
            <div
              className="relative h-full rounded-full bg-[var(--accent)] transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            >
              <span className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--accent)] ring-2 ring-white/30" />
            </div>
          </div>

          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3 md:gap-3.5">
              <button
                type="button"
                aria-label="Rewind 10 seconds"
                onClick={(e) => seekBy(e, -10)}
                className="text-xl opacity-90 transition-opacity hover:opacity-100"
              >
                <MdReplay10 />
              </button>
              <button
                type="button"
                aria-label={isPlaying ? "Pause" : "Play"}
                onClick={togglePlay}
                className="text-lg opacity-90 transition-opacity hover:opacity-100"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button
                type="button"
                aria-label="Forward 10 seconds"
                onClick={(e) => seekBy(e, 10)}
                className="text-xl opacity-90 transition-opacity hover:opacity-100"
              >
                <MdForward10 />
              </button>
              <button
                type="button"
                aria-label={isMuted ? "Unmute" : "Mute"}
                onClick={toggleMute}
                className="text-base opacity-90 transition-opacity hover:opacity-100"
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <span className="text-sm tabular-nums text-white/90">
                {formatTime(currentTime)}
              </span>
            </div>

            <div className="flex items-center gap-3 text-base opacity-90 md:gap-3.5">
              <FaClosedCaptioning aria-hidden />
              <FaCog aria-hidden />
              <button
                type="button"
                aria-label="Fullscreen"
                onClick={toggleFullscreen}
                className="transition-opacity hover:opacity-100"
              >
                <FaExpand />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
