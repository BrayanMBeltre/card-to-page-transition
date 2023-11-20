"use client";

import Image from "next/image";
import { useState } from "react";

import clsx from "clsx";
import { Card } from "./Card";
import { Variant, motion } from "framer-motion";

const card = {
  tag: "The web can",
  title: "Interact seamlessly with local files",
  color: "#E24236",
  graphic: "/03.mp4",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const defaultBackgroundColor = "#0073E6";

const overlayVariants = (color?: string) => ({
  close: {
    with: 0,
  },
  open: {
    backgroundColor: color,
    transition: {
      duration: 0.5,
    },
  },
});

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    defaultBackgroundColor
  );
  return (
    <main
      className={`min-h-screen relative`}
      style={{
        backgroundColor: defaultBackgroundColor,
      }}
    >
      <motion.div
        animate={backgroundColor === defaultBackgroundColor ? "close" : "open"}
        variants={{
          close: {
            marginInline: "50%",
            borderRadius: "40%",
            marginBlock: "0.5%",
            width: "10%",
          },
          open: {
            backgroundColor,
            borderRadius: "40%",
            scale: 2,
            width: "100%",
          },
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="absolute inset-0 "
      />

      <motion.ul
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-12 w-fit px-4 mx-auto pt-[120px]"
      >
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <motion.li key={i} variants={itemVariants}>
              <Card
                onChange={(card) =>
                  setBackgroundColor(card?.color || defaultBackgroundColor)
                }
                {...card}
              />
            </motion.li>
          ))}
      </motion.ul>
    </main>
  );
}
