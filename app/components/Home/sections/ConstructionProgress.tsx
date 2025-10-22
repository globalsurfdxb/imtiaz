// components/ConstructionProgress.tsx
"use client";

import React, { useRef, useEffect } from "react";

const ConstructionProgress: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = "/images/home/work-progress/progress.mp4";
  const posterSrc = "/images/home/work-progress/progress.jpg";

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {}); // autoplay when in viewport
          } else {
            videoEl.pause(); // pause when out of viewport
          }
        });
      },
      { threshold: 0.5 } // play when 50% visible
    );

    observer.observe(videoEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white flex flex-col items-center py-[75px]">
      {/* Heading */}
      <h2 className="text-[50px] font-[optima] font-[400] text-primary mb-[32px] leading-[110%]">
        CONSTRUCTION PROGRESS
      </h2>

      {/* Subtitle */}
      <p className="text-center text-[20px] font-[avenir] font-[400] text-black/80 max-w-[57ch] mb-[24px] leading-[110%]">
        Watch our projects turn from concept to reality and witness the future
        of real estate unfold at every milestone.
      </p>

      {/* Button */}
      <button className="p-[15px] leading-[1.444444444444444] font-[avenir] font-[400] text-[18px] border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-[169px]">
        CONSTRUCTION UPDATE
      </button>

      {/* Video with poster, hover controls */}
      <div className="w-full mt-[64px] relative">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          className="w-full h-auto 2xl:h-[905px] object-cover"
          muted
          loop
        >
          {/* Fallback for old browsers */}
          <img
            src={posterSrc}
            alt="Construction Progress"
            className="w-full h-auto max-h-[905px] object-cover"
          />
        </video>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 26.45%, rgba(0, 0, 0, 0.75) 86.84%)",
          }}
          className="absolute inset-0"
        />
      </div>
    </section>
  );
};

export default ConstructionProgress;
