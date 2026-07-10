"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { gridItems, skillCategories } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="about" className="mb-20">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>

      {/* ─── Skills Section ─── */}
      <div className="flex flex-col items-center mt-8 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading mb-4"
        >
          Technical <span className="text-purple">Arsenal</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white-200 text-sm md:text-base text-center mb-10 max-w-xl"
        >
          Over 6 years of production experience - from AI-native platforms to
          cloud-native architectures at scale.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${
                  activeCategory === cat.id
                    ? "text-white border-transparent shadow-lg scale-105"
                    : "text-white/50 border-white/10 hover:text-white/80 hover:border-white/20"
                }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activePill"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${cat.gradient} opacity-90`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <div className="w-full max-w-5xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
            >
              {active.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className={`group relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl
                    border border-white/[0.08] cursor-default
                    bg-gradient-to-b from-[#0d0f1f] to-[#0a0b18]
                    hover:border-white/20 hover:shadow-lg ${active.glow}
                    transition-all duration-300`}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${active.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon or Abbrev Badge */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    {skill.img ? (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-8 h-8 object-contain drop-shadow-lg"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold leading-none">
                          {skill.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 3)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Skill Name */}
                  <span className="relative text-[11px] md:text-xs font-medium text-white/70 group-hover:text-white/95 text-center leading-tight transition-colors duration-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating tech strip (decorative) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 w-full overflow-hidden"
        >
          <div className="flex gap-4 animate-scroll-x whitespace-nowrap">
            {[
              ...skillCategories.flatMap((c) => c.skills),
              ...skillCategories.flatMap((c) => c.skills),
            ].map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 text-xs font-medium shrink-0"
              >
                {skill.img && (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-3.5 h-3.5 object-contain opacity-60"
                  />
                )}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;
