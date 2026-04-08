import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  label?: string;
}

export const CountdownTimer = ({ targetDate, label = "Naslednji koncert čez" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsPast(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (isPast) {
    return (
      <div className="text-center py-4">
        <p className="text-amber text-sm uppercase tracking-widest">Koncert je potekel</p>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "DNI" },
    { value: timeLeft.hours, label: "UR" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEK" },
  ];

  return (
    <motion.div
      className="text-center py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-amber/60 text-xs uppercase tracking-widest mb-6">{label}</p>
      <div className="flex justify-center gap-4 md:gap-6">
        {units.map((unit, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-ivory" style={{ fontFamily: "var(--font-display)" }}>
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-bone/40 uppercase tracking-widest mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
