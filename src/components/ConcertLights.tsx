import React from "react";

/**
 * CSS-based concert lights - bright and visible
 */
export const ConcertLights = () => {
  const lights = [
    { left: "20%", color: "rgba(255, 61, 0, 0.7)", dur: "4s", delay: "0s" },
    { left: "50%", color: "rgba(255, 0, 87, 0.7)", dur: "5s", delay: "-1s" },
    { left: "80%", color: "rgba(178, 0, 255, 0.7)", dur: "4.5s", delay: "-2s" },
    { left: "30%", color: "rgba(255, 215, 0, 0.6)", dur: "6s", delay: "-0.5s" },
    {
      left: "70%",
      color: "rgba(220, 20, 60, 0.65)",
      dur: "5.5s",
      delay: "-1.5s",
    },
    { left: "10%", color: "rgba(0, 200, 255, 0.6)", dur: "4.8s", delay: "-3s" },
    {
      left: "90%",
      color: "rgba(255, 100, 0, 0.62)",
      dur: "5.2s",
      delay: "-2.5s",
    },
  ];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lights.map((light, i) => (
          <div
            key={i}
            className="absolute top-0 origin-top"
            style={{
              left: light.left,
              width: "8px",
              height: "150vh",
              background: `linear-gradient(180deg, ${light.color} 0%, ${light.color.replace(/[\d.]+\)$/, "0.15)")} 50%, transparent 80%)`,
              transform: `rotate(-25deg)`,
              animation: `lightSway${i} ${light.dur} ease-in-out ${light.delay} infinite`,
            }}
          />
        ))}

        {/* Light source dots */}
        {lights.map((light, i) => (
          <div
            key={`dot-${i}`}
            className="absolute top-[-4px] w-5 h-5 rounded-full"
            style={{
              left: `calc(${light.left} - 10px)`,
              background: light.color.replace(/[\d.]+\)$/, "1)"),
              boxShadow: `0 0 40px ${light.color}, 0 0 80px ${light.color.replace(/[\d.]+\)$/, "0.6)")}`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes lightSway0 {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes lightSway1 {
          0%, 100% { transform: rotate(-25deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes lightSway2 {
          0%, 100% { transform: rotate(-35deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes lightSway3 {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(30deg); }
        }
        @keyframes lightSway4 {
          0%, 100% { transform: rotate(-28deg); }
          50% { transform: rotate(22deg); }
        }
        @keyframes lightSway5 {
          0%, 100% { transform: rotate(-32deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes lightSway6 {
          0%, 100% { transform: rotate(-22deg); }
          50% { transform: rotate(28deg); }
        }
      `}</style>
    </>
  );
};

export default ConcertLights;
