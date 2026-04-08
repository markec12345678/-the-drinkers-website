'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VinylRecordProps {
  albumName: string;
  year: string;
  imageUrl: string;
}

export default function VinylRecord({ albumName, year, imageUrl }: VinylRecordProps) {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div
      className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer group"
      onMouseEnter={() => setIsSpinning(true)}
      onMouseLeave={() => setIsSpinning(false)}
    >
      {/* Vinyl disc */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl"
        animate={{ rotate: isSpinning ? 360 : 0 }}
        transition={{ duration: 2, ease: 'linear', repeat: isSpinning ? Infinity : 0 }}
        style={{
          background: 'radial-gradient(circle at 30% 30%, #333, #000)',
        }}
      >
        {/* Vinyl grooves */}
        <div className="absolute inset-4 rounded-full border border-gray-700/30" />
        <div className="absolute inset-8 rounded-full border border-gray-700/30" />
        <div className="absolute inset-12 rounded-full border border-gray-700/30" />
        <div className="absolute inset-16 rounded-full border border-gray-700/30" />
        <div className="absolute inset-20 rounded-full border border-gray-700/30" />

        {/* Center label with album art */}
        <div className="absolute inset-[30%] rounded-full overflow-hidden border-4 border-gray-800">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>

        {/* Center hole */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-void rounded-full border-2 border-gray-700" />
      </motion.div>

      {/* Album info overlay */}
      <motion.div
        className="absolute -bottom-16 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-bone" style={{ fontFamily: 'var(--font-accent)' }}>
          {albumName}
        </h3>
        <p className="text-sm text-bone/50">{year}</p>
      </motion.div>

      {/* Glow effect when spinning */}
      {isSpinning && (
        <motion.div
          className="absolute -inset-4 rounded-full bg-amber-600/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </div>
  );
}
