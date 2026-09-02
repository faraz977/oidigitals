import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({
  className = "size-6",
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 1 1 18 0Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </Svg>
  );
}

export function IconWeb({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </Svg>
  );
}

export function IconDesktop({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </Svg>
  );
}

export function IconMobile({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </Svg>
  );
}

export function IconDesign({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 4.5 15.5h15L12 3Z" />
      <path d="M8 21h8" />
    </Svg>
  );
}

export function IconScope({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 6h16M4 12h10M4 18h7" />
      <circle cx="18" cy="16" r="3" />
    </Svg>
  );
}

export function IconBuild({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14" />
    </Svg>
  );
}

export function IconHandoff({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 12h8M12 8v8" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </Svg>
  );
}

export function IconCatalog({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </Svg>
  );
}

export function IconLedger({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 4v16" />
    </Svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

export function IconData({ className }: IconProps) {
  return (
    <Svg className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 3.8h3l1.3 3.4-2 1.2a11 11 0 0 0 5.3 5.3l1.2-2 3.4 1.3v3A2.1 2.1 0 0 1 18 18.2 15.4 15.4 0 0 1 3.8 6.1 2.1 2.1 0 0 1 5.9 3.8H8Z" />
    </Svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  );
}

export function IconGit({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M6 8.2v3.3A4.5 4.5 0 0 0 10.5 16H12M18 8.2v2.2A4.5 4.5 0 0 1 13.5 15H12" />
    </Svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5M12 3.5C9.6 5.8 8.4 8.7 8.4 12s1.2 6.2 3.6 8.5" />
    </Svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.2 19a4.6 4.6 0 0 1 5.3-4.2" />
    </Svg>
  );
}

export function IconTruck({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4.2L21 13.2V16h-7" />
      <circle cx="7.2" cy="17.6" r="1.6" />
      <circle cx="17.2" cy="17.6" r="1.6" />
    </Svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 5 6v6c0 4.4 3 7 7 8.8C16 19 19 16.4 19 12V6l-7-3Z" />
      <path d="m9 12 2.1 2.1L15.4 10" />
    </Svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" />
    </Svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.6A3.7 3.7 0 0 0 7 18Z" />
    </Svg>
  );
}

export function IconTerminal({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </Svg>
  );
}

export function IconLayout({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </Svg>
  );
}

export function IconPalette({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.4-1.9-.3-.7.2-1.5 1-1.5H16a4 4 0 0 0 4-4c0-5.8-3.6-10.6-8-10.6Z" />
      <circle cx="7.5" cy="11" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconCube({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M4.5 7.5 12 12l7.5-4.5M12 12v9" />
    </Svg>
  );
}

export function IconFilm({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4v16M16 4v16M3 9h5M16 9h5M3 15h5M16 15h5" />
    </Svg>
  );
}

export function IconRobot({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="5" y="9" width="14" height="10" rx="2.5" />
      <path d="M12 9V5.5M9.5 5.5h5" />
      <circle cx="9.5" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <path d="M2.5 13v3M21.5 13v3" />
    </Svg>
  );
}

export function IconSpider({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3.4v5.2M12 15.4v5.2M3.4 12h5.2M15.4 12h5.2M6 6l3.6 3.6M18 6l-3.6 3.6M6 18l3.6-3.6M18 18l-3.6-3.6" />
    </Svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 2.5c2.8 1.4 4.6 4.4 4.6 8.3 0 2.4-.8 4.6-2 6.3l-2.6 3.4-2.6-3.4c-1.2-1.7-2-3.9-2-6.3 0-3.9 1.8-6.9 4.6-8.3Z" />
      <circle cx="12" cy="10.5" r="1.7" />
      <path d="M8.5 16.5 6 19M15.5 16.5 18 19" />
    </Svg>
  );
}

export function IconWrench({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.8 2.8-2-2 2.8-2.8Z" />
    </Svg>
  );
}

export function IconTarget({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconCheckCircle({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.3 2.3 2.3 4.7-4.9" />
    </Svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 20.2A8.2 8.2 0 1 0 7.2 18L4 20.4 6.5 17A8.2 8.2 0 0 0 12 20.2Z" />
      <path d="M9.2 9.4c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.6 1.4c.1.3 0 .5-.2.7l-.4.4c-.1.1-.1.3 0 .5.3.6.9 1.2 1.6 1.6.2.1.4.1.5 0l.4-.4c.2-.2.4-.3.7-.2l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7A5.2 5.2 0 0 1 9.2 9.4Z" />
    </Svg>
  );
}
