'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlitchText({ text, className, style }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      // Random glitch characters
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█';
      let glitched = text.split('').map((char, i) => {
        if (Math.random() > 0.7) {
          return chars[Math.floor(Math.random() * chars.length)];
        }
        return char;
      }).join('');

      setGlitchText(glitched);

      setTimeout(() => {
        setIsGlitching(false);
        setGlitchText(text);
      }, 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`relative inline-block ${className || ''}`} style={style}>
      {/* Main text */}
      <span className="relative z-10">{isGlitching ? glitchText : text}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 z-0 text-red-500 opacity-70"
            style={{
              transform: 'translate(-2px, 1px)',
              clipPath: 'inset(20% 0 60% 0)',
            }}
          >
            {glitchText}
          </span>
          <span
            className="absolute top-0 left-0 z-0 text-blue-500 opacity-70"
            style={{
              transform: 'translate(2px, -1px)',
              clipPath: 'inset(50% 0 10% 0)',
            }}
          >
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
}
