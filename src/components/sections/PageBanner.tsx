import Image from "next/image";

interface PageBannerProps {
  subtitle: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
}

export function PageBanner({ subtitle, title, description, image, imageAlt }: PageBannerProps) {
  return (
    <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px] md:min-h-[360px]">
      <Image
        src={image}
        alt={imageAlt ?? title}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* No blue layer — light black gradient for text only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[280px] items-center justify-center px-4 py-24 text-center text-white sm:min-h-[320px] sm:py-28 md:min-h-[360px] md:py-32">
        <div className="mx-auto max-w-3xl">
          <span className="badge mb-4 border-white/30 bg-black/30 text-tan-light backdrop-blur-sm">
            {subtitle}
          </span>
          <h1 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] md:text-lg">
              {description}
            </p>
          )}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-tan via-accent-amber to-accent-emerald shadow-sm" />
        </div>
      </div>
    </section>
  );
}
