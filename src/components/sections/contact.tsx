"use client"

import { forwardRef, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { AnimatedBeam } from "@/components/ui/animated-beam"
import { DotPattern } from "@/components/ui/dot-pattern"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"

interface CircleProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  tooltip?: string;
}

const Circle = forwardRef<HTMLAnchorElement, CircleProps>(
  ({ className, children, href, tooltip }, ref) => {
    const content = (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className={cn(
          "z-10 flex size-24 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition-transform hover:scale-110 cursor-pointer",
          className
        )}
      >
        {children}
      </a>
    );

    if (tooltip) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {content}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    return content;
  }
);

Circle.displayName = "Circle";

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const centerRef = useRef<HTMLAnchorElement>(null);
  const githubRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const twitterRef = useRef<HTMLAnchorElement>(null);
  const instagramRef = useRef<HTMLAnchorElement>(null);

  return (
    <TooltipProvider>
      <section 
        id="contact" 
        className="relative h-screen flex items-center justify-center bg-background scroll-margin-top-20 px-4 md:px-0" 
        ref={containerRef}
      >
        <div className="relative flex size-full max-h-[400px] max-w-xl flex-col items-stretch justify-between gap-10 mx-4 md:mx-0">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={githubRef} href="https://github.com/PaulGreetham" tooltip="Check out my GitHub">
              <FaGithub className="size-12" />
            </Circle>
            <Circle ref={linkedinRef} href="https://www.linkedin.com/in/paul-greetham/" tooltip="Connect on LinkedIn">
              <FaLinkedin className="size-12" />
            </Circle>
          </div>

          <div className="flex flex-row items-center justify-between">
            <Circle ref={emailRef} href="mailto:pgreetham@protonmail.com" tooltip="Send me an email">
              <FaEnvelope className="size-12" />
            </Circle>
            <Circle ref={centerRef} className="size-32">
              <span className={typography.h4}>Contact /<br />Connect</span>
            </Circle>
            <Circle ref={phoneRef} href="tel:+31(0)6-83674176" tooltip="+31 (0)6-83674176">
              <FaPhone className="size-12" />
            </Circle>
          </div>

          <div className="flex flex-row items-center justify-between">
            <Circle ref={twitterRef} href="https://twitter.com/mygameweather" tooltip="Follow me on Twitter">
              <FaXTwitter className="size-12" />
            </Circle>
            <Circle ref={instagramRef} href="https://instagram.com/paulgreetham_" tooltip="Follow me on Instagram">
              <FaInstagram className="size-12" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={githubRef} 
          toRef={centerRef} 
          curvature={-10}
          duration={16}
          delay={0}
          reverse={true}
        />
        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={linkedinRef} 
          toRef={centerRef} 
          curvature={10}
          duration={16}
          delay={2}
          reverse={true}
        />
        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={emailRef} 
          toRef={centerRef} 
          curvature={0}
          duration={16}
          delay={4}
          reverse={true}
        />
        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={phoneRef} 
          toRef={centerRef} 
          curvature={0}
          duration={16}
          delay={6}
          reverse={true}
        />
        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={twitterRef} 
          toRef={centerRef} 
          curvature={10}
          duration={16}
          delay={8}
          reverse={true}
        />
        <AnimatedBeam 
          containerRef={containerRef} 
          fromRef={instagramRef} 
          toRef={centerRef} 
          curvature={-10}
          duration={16}
          delay={10}
          reverse={true}
        />

        <DotPattern 
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          width={16}
          height={16}
          cx={1}
          cy={1}
          cr={1}
        />
      </section>
    </TooltipProvider>
  );
} 