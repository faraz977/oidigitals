/**
 * Phone  →  9 / 19.5. File name includes "phone".
 * Web    →  16 / 10 browser chrome.
 * Images sit inside the frame (object-contain). Nothing is cropped.
 */
const PHONE =
  "relative w-[120px] shrink-0 overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-950 p-[5px] sm:w-[140px] md:w-[160px]";
const PHONE_STAGE = "aspect-[9/19.5] overflow-hidden rounded-[1.35rem] bg-zinc-900";
const WEB_SHELL = "overflow-hidden rounded-xl border border-white/10 bg-zinc-950";
const WEB_STAGE = "relative aspect-[16/10] overflow-hidden bg-zinc-900";

function ShotImg({
  src,
  alt,
  soft = false,
}: {
  src: string;
  alt: string;
  soft?: boolean;
}) {
  return (
    <img
      src={src}
      alt={soft ? "" : alt}
      className={
        soft
          ? "absolute inset-0 h-full w-full object-contain opacity-60 blur-[5px]"
          : "absolute inset-0 h-full w-full object-contain"
      }
    />
  );
}

export function PhoneShot({
  src,
  alt,
  className = "",
  soft = false,
}: {
  src: string;
  alt: string;
  className?: string;
  soft?: boolean;
}) {
  return (
    <div className={`${PHONE} ${className}`}>
      <div className={PHONE_STAGE}>
        <ShotImg src={src} alt={alt} soft={soft} />
      </div>
    </div>
  );
}

export function WebShot({
  src,
  alt,
  desk = false,
  soft = false,
}: {
  src: string;
  alt: string;
  desk?: boolean;
  soft?: boolean;
}) {
  return (
    <div className={WEB_SHELL}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2 rounded-full bg-zinc-700" />
        <span className="size-2 rounded-full bg-zinc-700" />
        <span className="size-2 rounded-full bg-zinc-700" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-zinc-600">
          {desk ? "Desktop" : "Web"}
        </span>
      </div>
      <div className={WEB_STAGE}>
        <ShotImg src={src} alt={alt} soft={soft} />
      </div>
    </div>
  );
}

export function ShotRow({
  phones,
  webs,
  desks = [],
  name,
  preview = false,
  soft = false,
  maxWebShots,
  caseStudy = false,
}: {
  phones: string[];
  webs: string[];
  desks?: string[];
  name: string;
  preview?: boolean;
  soft?: boolean;
  maxWebShots?: number;
  caseStudy?: boolean;
}) {
  const showPhones = preview ? phones.slice(0, 3) : phones;
  const showWebs = preview
    ? webs.slice(0, maxWebShots ?? (phones.length ? 2 : 3))
    : webs;
  const showDesks = preview ? desks.slice(0, 3) : desks;

  return (
    <div className="space-y-3 sm:space-y-4">
      {showPhones.length > 0 ? (
        <div
          className={`flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-2 ${caseStudy ? "lg:flex-nowrap" : ""}`}
        >
          {showPhones.map((src) => (
            <PhoneShot key={src} src={src} alt={name} soft={soft} />
          ))}
        </div>
      ) : null}
      {showWebs.length > 0 ? (
        <div
          className={
            showWebs.length > 1
              ? `grid w-full gap-2.5 sm:gap-3 md:gap-4 sm:grid-cols-2 ${caseStudy && showWebs.length % 2 === 1 ? "oi-center-last" : ""}`
              : `grid gap-2.5 sm:gap-3 md:gap-4 ${preview ? "w-full" : "mx-auto max-w-2xl"}`
          }
        >
          {showWebs.map((src) => (
            <WebShot
              key={src}
              src={src}
              alt={`${name} screen`}
              soft={soft}
            />
          ))}
        </div>
      ) : null}
      {showDesks.length > 0 ? (
        <div
          className={
            showDesks.length > 1
              ? `grid w-full gap-2.5 sm:gap-3 md:gap-4 sm:grid-cols-2 ${caseStudy && showDesks.length % 2 === 1 ? "oi-center-last" : ""}`
              : `grid gap-2.5 sm:gap-3 md:gap-4 ${preview ? "w-full" : "mx-auto max-w-2xl"}`
          }
        >
          {showDesks.map((src) => (
            <WebShot
              key={src}
              src={src}
              alt={`${name} desktop`}
              desk
              soft={soft}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
