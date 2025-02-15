"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Split by newlines first, then by words
  const sentences = text.split('\n').map(sentence => sentence.trim());
  const words = sentences.join(' ').split(' ');

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <p className="max-w-4xl text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word 
                key={i} 
                progress={scrollYProgress} 
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-[0.25em] inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-foreground"
      >
        {children}
      </motion.span>
    </span>
  );
};
