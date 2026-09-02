
// "use client";

// import { Logo } from "@/components/Logo";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/services", label: "Services" },
//   { href: "/work", label: "Work" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];

// function isActive(pathname: string, href: string) {
//   if (href === "/") return pathname === "/";
//   return pathname === href || pathname.startsWith(`${href}/`);
// }

// export function Header() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 no-print transition-all duration-500 ${
//         scrolled ? "px-3 pt-3 md:px-6" : "px-3 pt-3 md:px-6"
//       }`}
//     >
//       {/* ONE SINGLE GLASS NAVBAR */}
//       <div
//         className={`mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 md:px-7 transition-all duration-500 ${
//           scrolled
//             ? "rounded-2xl border border-cyan-400/[0.12] bg-[#0b0f18]/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
//             : "rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
//         }`}
//       >
//         {/* Logo */}
//         <div className="relative z-10 shrink-0">
//           <Logo />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center md:flex">
//           {/* Navigation Links */}
//           <div className="flex items-center gap-1">
//             {links.map((link) => {
//               const active = isActive(pathname, link.href);

//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`group relative rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
//                     active
//                       ? "bg-white/[0.08] text-white"
//                       : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
//                   }`}
//                 >
//                   {link.label}

//                   {/* Active + Hover Underline */}
//                   <span
//                     className={`absolute bottom-[4px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 ${
//                       active
//                         ? "w-4 opacity-100"
//                         : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Divider */}
//           <span className="mx-4 h-7 w-px bg-white/[0.08]" />

//           {/* Start Project Button */}
//           <Link
//             href="/contact"
//             className="group flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-[13px] font-semibold text-[#061018] shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]"
//           >
//             <span>Start a project</span>

//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             >
//               <path
//                 d="M5 12H19M13 6L19 12L13 18"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] md:hidden"
//           aria-expanded={open}
//           aria-controls="mobile-nav"
//           aria-label={open ? "Close menu" : "Open menu"}
//           onClick={() => setOpen((v) => !v)}
//         >
//           <div className="flex w-4 flex-col gap-[5px]">
//             <span
//               className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
//                 open ? "translate-y-[3.25px] rotate-45" : ""
//               }`}
//             />

//             <span
//               className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
//                 open ? "opacity-0" : ""
//               }`}
//             />

//             <span
//               className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
//                 open ? "-translate-y-[3.25px] -rotate-45" : ""
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <nav
//         id="mobile-nav"
//         className={`mx-3 mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0f18]/95 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 md:hidden ${
//           open
//             ? "max-h-[30rem] translate-y-0 opacity-100"
//             : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
//         }`}
//       >
//         <ul className="space-y-1 p-3">
//           {links.map((link) => {
//             const active = isActive(pathname, link.href);

//             return (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
//                     active
//                       ? "border border-cyan-400/10 bg-white/[0.08] text-white"
//                       : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
//                   }`}
//                 >
//                   <span>{link.label}</span>

//                   <span
//                     className={`absolute bottom-1.5 left-4 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300 ${
//                       active
//                         ? "w-4 opacity-100"
//                         : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
//                     }`}
//                   />
//                 </Link>
//               </li>
//             );
//           })}

//           <li className="pt-2">
//             <Link
//               href="/contact"
//               onClick={() => setOpen(false)}
//               className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-[#061018] shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
//             >
//               Start a project

//               <svg
//                 width="14"
//                 height="14"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M5 12H19M13 6L19 12L13 18"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 no-print transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-400/[0.10]"
          : "border-b border-white/[0.06]"
      }`}
    >
      {/* ========================================================= */}
      {/* MAIN NAVBAR */}
      {/* ========================================================= */}

      <div
        className={`mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between px-5 md:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0f18]/85 shadow-[0_8px_35px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
            : "bg-white/[0.025] backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <div className="relative z-10 shrink-0">
          <Logo />
        </div>

        {/* ========================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ========================================================= */}

        <nav className="hidden items-center gap-2 md:flex">
          {/* Navigation Links */}
          
            {links.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-white/[0.08] text-white"
                      : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* Hover + Active Underline */}
                  <span
                    className={`absolute bottom-[4px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 ${
                      active
                        ? "w-4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          

          {/* Divider */}
          <span className="mx-4 h-7 w-px bg-white/[0.08]" />

          {/* Start Project */}
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-[13px] font-semibold text-[#061018] shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]"
          >
            <span>Start a project</span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </nav>

        {/* ========================================================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ========================================================= */}

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-4 flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
                open ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-4 bg-white transition-all duration-300 ${
                open ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ========================================================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================================================= */}

      <nav
        id="mobile-nav"
        className={`mx-3 mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0f18]/95 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-[30rem] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <ul className="space-y-1 p-3">
          {links.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border border-cyan-400/10 bg-white/[0.08] text-white"
                      : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Mobile underline */}
                  <span
                    className={`absolute bottom-1.5 left-4 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300 ${
                      active
                        ? "w-4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}

          {/* Mobile CTA */}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-[#061018] shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              Start a project

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}