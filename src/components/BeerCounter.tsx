import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const BeerCounter = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  const playCrackSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
    ); // Beer can opening sound
    audio.volume = 0.4;
    audio.play().catch(() => console.log("Audio play blocked by browser"));
  };

  const incrementBeer = () => {
    setCount((prev) => prev + 1);
    playCrackSound();

    // Shake effect on the whole counter
    controls.start({
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.2 },
    });

    // Create a temporary floating emoji
    const emoji = document.createElement("div");
    emoji.innerHTML = "🍺";
    emoji.style.position = "fixed";
    emoji.style.left = "50%";
    emoji.style.top = "80%";
    emoji.style.fontSize = "2rem";
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = "9999";
    emoji.classList.add("animate-float-up");
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1000);
  };

  return (
    <motion.div
      animate={controls}
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center"
    >
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        onClick={incrementBeer}
        className="w-16 h-16 bg-amber rounded-full shadow-lg shadow-amber/20 flex items-center justify-center text-3xl border-2 border-void hover:border-ivory transition-all"
      >
        🍺
      </motion.button>
      <div className="mt-2 bg-void/80 backdrop-blur-md px-4 py-1 rounded-full border border-amber/20">
        <span className="text-amber font-mono font-bold">{count}</span>
        <span className="text-bone/40 text-xs ml-2 uppercase tracking-widest">
          Piv popitih
        </span>
      </div>

      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) opacity(1);
          }
          100% {
            transform: translateY(-100px) opacity(0);
          }
        }
        .animate-float-up {
          animation: float-up 1s ease-out forwards;
        }
      `}</style>
    </motion.div>
  );
};

export default BeerCounter;
