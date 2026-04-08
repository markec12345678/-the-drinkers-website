import React from "react";
import { motion } from "framer-motion";

const tours = [
  { date: "15. MAJ", city: "LITIJA", venue: "Športna dvorana", status: "LEGENDARY" },
  { date: "22. JUN", city: "LJUBLJANA", venue: "Orto Bar", status: "SOLD OUT" },
  { date: "10. AVG", city: "TOLMIN", venue: "Castle Rock", status: "LIVE" },
  { date: "05. SEP", city: "CELJE", venue: "MCC", status: "BOOKED" },
];

export const TourDates = () => {
  return (
    <section id="tour" className="section-xl bg-void relative overflow-hidden">
      <div className="container-premium relative z-10">
        <motion.p
          className="text-label text-amber mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Koncerti
        </motion.p>
        <motion.h2
          className="text-display text-center text-ivory mb-16"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          V ŽIVO
        </motion.h2>

        <div className="max-w-4xl mx-auto border-t border-subtle">
          {tours.map((tour, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-center justify-between py-8 border-b border-subtle group hover:bg-white/5 transition-all px-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="text-display text-amber text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                  {tour.date}
                </div>
                <div>
                  <div className="text-xl text-ivory font-bold">{tour.city}</div>
                  <div className="text-bone/40 text-sm">{tour.venue}</div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`px-4 py-1 rounded-full text-xs font-mono border ${
                  tour.status === "LIVE" ? "border-amber text-amber animate-pulse" : "border-bone/20 text-bone/40"
                }`}>
                  {tour.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-bone/60 mb-8 max-w-lg mx-auto">
            Želite The Drinkers na vašem odru? Rezervirajte koncert za nepozaben Drink'n'Roll večer.
          </p>
          <a href="mailto:booking@thedrinkers.net" className="btn-primary inline-flex">
            REZERVIRAJ KONCERT
          </a>
        </div>
      </div>
    </section>
  );
};
