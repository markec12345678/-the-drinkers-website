import React from "react";
import { motion } from "framer-motion";

export const StreamingPlatforms = () => {
  const platforms = [
    { name: "Spotify", url: "https://open.spotify.com/artist/3jXW5M9" },
    { name: "YouTube", url: "https://www.youtube.com/@thedrinkers" },
    { name: "Apple Music", url: "https://music.apple.com/artist/thedrinkers" },
    { name: "Deezer", url: "https://www.deezer.com/artist/thedrinkers" }
  ];

  return (
    <section className="py-12 bg-charcoal border-y border-subtle">
      <div className="container-premium">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/30 hover:text-amber transition-colors text-sm font-mono tracking-widest uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {platform.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
