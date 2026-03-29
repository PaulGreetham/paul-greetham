export const typography = {
  h1: "scroll-m-20 text-5xl font-bold tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-normal lg:text-5xl",
  h3: "scroll-m-20 text-xl font-semibold tracking-normal md:text-2xl",
  h4: "scroll-m-20 text-lg font-semibold tracking-normal md:text-xl",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  nav: "text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
} as const 