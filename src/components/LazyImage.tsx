import React, { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  filter?: string;
}

export const LazyImage = ({ src, alt, className = "", style, filter }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = () => setLoaded(true);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-smoke animate-pulse" />
      )}

      {/* Actual image */}
      {inView && (
        <div
          className={`w-full h-full bg-cover bg-center transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${src})`,
            filter: filter || "none",
          }}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};
