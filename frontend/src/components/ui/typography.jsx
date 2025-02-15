import { cn } from "@/lib/utils";

export function TypographyH1({ children, className, color }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      style={{ color }}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className, color }) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      style={{ color }}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className, color }) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      style={{ color }}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className, color }) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      style={{ color }}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className, color }) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      style={{ color }}
    >
      {children}
    </p>
  );
}

export function TypographySmall({ children, className, color }) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      style={{ color }}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className, color = "gray" }) {
  return (
    <p className={cn("text-sm", className)} style={{ color }}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className, color }) {
  return (
    <div className={cn("text-lg font-semibold", className)} style={{ color }}>
      {children}
    </div>
  );
}

export function TypographyLead({ children, className, color }) {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      style={{ color }}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className, color }) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      style={{ color }}
    >
      {children}
    </blockquote>
  );
}
