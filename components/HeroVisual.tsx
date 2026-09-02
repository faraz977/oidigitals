function HeroPhone({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[124px] sm:w-[144px]">
      <div className="rounded-[30px] bg-zinc-500 p-[6px] shadow-[0_22px_44px_-16px_rgba(0,0,0,0.85)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[24px] bg-black ring-1 ring-black/60">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function HeroWeb({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/70">
      <div className="flex items-center gap-1.5 bg-zinc-100 px-3 py-1.5">
        <span className="size-2 rounded-full bg-zinc-300" />
        <span className="size-2 rounded-full bg-zinc-300" />
        <span className="size-2 rounded-full bg-zinc-300" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          Web
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-zinc-100">
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top brightness-125 contrast-110 saturate-110"
        />
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[320px] w-full max-w-[520px] sm:h-[420px] lg:h-[460px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-4 size-64 rounded-full bg-white/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-0 size-48 rounded-full bg-cyan-300/25 blur-3xl"
      />
      <div className="absolute -right-1 -top-1 w-[78%] rotate-6">
        <HeroWeb src="/work/omer-web-landing.png" />
      </div>
      <div className="absolute -left-1 top-4 w-[64%] -rotate-6 sm:top-6">
        <HeroWeb src="/work/bb-web-landing.png" />
      </div>
      <div className="absolute bottom-[42%] right-0 w-[58%] rotate-2">
        <HeroWeb src="/work/export-web-01.png" />
      </div>
      <div className="absolute bottom-2 left-[4%] z-20">
        <HeroPhone src="/work/ti-phone-trips.png" alt="TrackIFTA" />
      </div>
      <div className="absolute bottom-0 left-[30%] z-30">
        <HeroPhone src="/work/sd-phone-find-trucks.png" alt="ShipperDock" />
      </div>
      <div className="absolute bottom-3 right-[2%] z-10 hidden sm:block">
        <HeroPhone src="/work/tw-phone-on-road.png" alt="TruckerWire" />
      </div>
    </div>
  );
}
