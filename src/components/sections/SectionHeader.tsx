import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 sm:mb-12", align === "center" && "text-center", className)}>
      {subtitle && (
        <span
          className={cn(
            "badge mb-4",
            light ? "badge-tan bg-white/10 text-tan-light border-white/20" : "badge-tan"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-[family-name:var(--font-montserrat)] text-2xl font-bold sm:text-3xl md:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy"
        )}
      >
        {light ? (
          title
        ) : (
          <>
            {title.split(" ").length > 2 ? (
              <>
                {title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-tan-dark">{title.split(" ").slice(-2).join(" ")}</span>
              </>
            ) : (
              <>
                {title.split(" ")[0]}{" "}
                <span className="text-tan-dark">{title.split(" ").slice(1).join(" ")}</span>
              </>
            )}
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            light ? "text-white/80" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-tan via-accent-amber to-accent-emerald",
          align === "center" && "mx-auto",
          light && "from-tan-light via-white/60 to-tan"
        )}
      />
    </div>
  );
}
