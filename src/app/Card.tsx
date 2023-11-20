"use client";

import clsx from "clsx";
import React from "react";
import { Variant, motion } from "framer-motion";

type TCard = {
  tag: string;
  title: string;
  color: string;
  graphic: string;
  onChange: (card: TCard | undefined) => void;
};

const variants = {
  closed: {},
  open: {},
};

export const Card = (card: TCard) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const onOpen = () => {
    card.onChange(card);
    setIsOpen(true);
    videoRef.current?.play();
  };
  const onClose = () => {
    card.onChange(undefined);
    setIsOpen(false);
    videoRef.current?.pause();
  };

  return (
    <div className="w-[265px] h-[437px]">
      {/* <motion.div
        hidden={!isOpen}
        className={clsx(
          "absolute top-[120px] bg-white left-0 w-[1042px] h-full rounded-2xl z-20"
        )}
        variants={{
          open: {
            x: [0, 800, 0],
            y: [0, 250, 0],
            width: [265, 265, 1042],
            left: 0,
            top: 120,
            rotateY: [0, 0, 180],
          },
        }}
      /> */}

      <motion.button
        layout
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: {
            rotateY: 0,
            transition: {
              duration: 0.1,
            },
          },
          open: {
            x: [0, 800, 0],
            y: [0, 250, 0],
            width: [265, 265, 1042],
            zIndex: 1,
            left: 0,
            top: 120,
            rotateY: [0, 0, 180, 360],
          },
        }}
        // whileHover={{
        //   scale: 1.01,
        //   y: -10,
        //   shadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        //   transition: { duration: 0.2 },
        // }}
        type="button"
        className={clsx("absolute bg-white rounded-2xl w-[265px] p-4 ")}
        onClick={() => {
          if (isOpen) {
            onClose();
            return;
          }
          onOpen();
        }}
      >
        <div
          className={clsx(
            `px-6 text-sm font-semibold rounded-2xl text-white w-fit`
          )}
          style={{
            backgroundColor: card.color,
          }}
        >
          {card.tag}
        </div>

        <h2 className="mt-6 text-3xl font-medium tracking-wide text-left">
          {card.title}
        </h2>

        <div className="mt-4">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="bg-transparent"
            src={card.graphic}
          />
        </div>
      </motion.button>
    </div>
  );
};
