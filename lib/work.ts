import { galleryFor, shotKind } from "@/lib/shots";

export type WorkKind = "product" | "client" | "tool";
export type ShotKind = "phone" | "web";

export type WorkItem = {
  slug: string;
  name: string;
  kind: WorkKind;
  role: string;
  oneLiner: string;
  story?: string[];
  scope: string[];
  stack: string;
  live?: string;
  cover?: string;
  coverKind?: ShotKind;
  gallery?: string[];
  logo?: string;
  photo?: string;
  confidential: boolean;
};

export function workSurface(item: WorkItem): "app" | "web" {
  if (item.slug === "shipperdock") return "app";
  if (item.slug === "shipperdock-site") return "web";
  if (item.scope.some((part) => /ios|android|mobile/i.test(part))) return "app";
  return "web";
}

export function kindLabel(item: WorkItem): string {
  if (item.kind === "client" && item.scope.includes("AI")) {
    return "Client chatbot";
  }
  if (item.scope.includes("AI")) return "AI";
  if (item.scope.includes("Desktop") && item.scope.includes("Web")) {
    return "Web and desktop";
  }
  if (item.confidential) return "Private";
  if (item.kind === "tool") return "Tool";
  if (item.slug === "bizbill") return "Web app";
  return workSurface(item) === "app" ? "App" : "Website";
}

export function appWork(): WorkItem[] {
  return workList().filter(
    (item) => workSurface(item) === "app" && item.kind !== "tool",
  );
}

export function webWork(): WorkItem[] {
  return workList().filter(
    (item) => workSurface(item) === "web" && item.kind !== "tool",
  );
}

export function hydrate(item: WorkItem): WorkItem {
  const gallery = galleryFor(item);
  return {
    ...item,
    gallery,
    cover: item.cover ?? gallery[0],
  };
}

export function getWork(slug: string): WorkItem | undefined {
  const item = WORK.find((entry) => entry.slug === slug);
  return item ? hydrate(item) : undefined;
}

export function workList(): WorkItem[] {
  return WORK.map(hydrate);
}

export function isPhoneShot(src: string) {
  return shotKind(src) === "phone";
}

export function isDeskShot(src: string) {
  return /desk/i.test(src);
}

export function splitGallery(gallery: string[] = []) {
  return {
    phones: gallery.filter(isPhoneShot),
    desks: gallery.filter((src) => !isPhoneShot(src) && isDeskShot(src)),
    webs: gallery.filter((src) => !isPhoneShot(src) && !isDeskShot(src)),
  };
}

export function hasShots(item: WorkItem) {
  return (item.gallery?.length ?? 0) > 0;
}

/**
 * Adding a project later:
 * 1. Add an object to WORK (slug, name, copy, logo if you have one).
 * 2. Put screenshots in public/work/{slug}/:
 *    phone-01.png → same phone size on every page
 *    web-01.png   → same 16/10 web size
 *    desk-01.png  → same 16/10 desktop size
 * 3. You can still list paths in gallery[] for older files in public/work/.
 */
export const FEATURED = ["shipperdock", "trackifta", "truckerwire"] as const;

export const WEBSITE_FRONTS = [
  {
    name: "ShipperDock",
    href: "https://shipperdock.com",
    src: "/work/sd-web-marketing.png",
  },
  {
    name: "GTS Dispatch",
    href: "https://gtsdispatch.us",
    src: "/work/gts-web-landing.png",
  },
  {
    name: "FMCSAReady",
    href: "https://fmcsaready.com",
    src: "/work/fmcsa-web-landing.png",
  },
  {
    name: "BizBill.pk",
    href: "https://bizbill.pk",
    src: "/work/bb-web-landing.png",
  },
  {
    name: "Imaginers Technologies",
    src: "/work/imaginers-web-landing.png",
  },
  {
    name: "YZ Enterprises",
    href: "https://www.yzenterprisespk.com",
    src: "/work/export-web-01.png",
  },
  {
    name: "Omer International",
    href: "https://www.omerinternational.com",
    src: "/work/omer-web-landing.png",
  },
] as const;

export const WORK: WorkItem[] = [
  {
    slug: "shipperdock",
    name: "ShipperDock",
    kind: "product",
    role: "Load board app",
    oneLiner:
      "iPhone and Android load board: find trucks, post loads, and reach carriers.",
    story: [
      "ShipperDock is a load board for the US freight market. Shippers, carriers, and brokers each sign in to the same network: post a load, post a truck, or search the other side.",
      "The mobile apps are built for field work. Find trucks, find loads, and post equipment with origin, destination, deadhead radius, equipment type, and dates. Sign-in is email, Google, or Apple.",
      "The desk web app is the same product on a browser: search trucks, search carriers and brokers, post loads, and a dashboard for training and support.",
    ],
    scope: ["iOS", "Android", "Web app"],
    stack: "Expo, Firebase, Next.js",
    live: "https://shipperdock.com",
    logo: "/logos/shipperdock.png",
    photo: "/photos/trucks.jpg",
    cover: "/work/sd-phone-find-trucks.png",
    coverKind: "phone",
    gallery: [
      "/work/sd-phone-find-trucks.png",
      "/work/sd-phone-signin.png",
      "/work/shipperdock-loads.png",
      "/work/shipperdock-post-truck.png",
      "/work/shipperdock-trucks.png",
      "/work/sd-web-dashboard.png",
      "/work/sd-web-search.png",
      "/work/sd-web-signin.png",
    ],
    confidential: false,
  },
  {
    slug: "shipperdock-site",
    name: "ShipperDock.com",
    kind: "product",
    role: "Product website",
    oneLiner:
      "Marketing site for the load board: market, features, and a path to sign in.",
    story: [
      "A separate website from the mobile app. It explains the US load board, the market, and how shippers, carriers, and brokers start.",
    ],
    scope: ["Web"],
    stack: "Next.js",
    live: "https://shipperdock.com",
    logo: "/logos/shipperdock.png",
    cover: "/work/sd-web-marketing.png",
    coverKind: "web",
    gallery: ["/work/sd-web-marketing.png"],
    confidential: false,
  },
  {
    slug: "trackifta",
    name: "TrackIFTA",
    kind: "product",
    role: "USA fuel tax reporting",
    oneLiner:
      "IFTA trip and fuel logging that becomes the quarterly return, plus truck and driver reports.",
    story: [
      "TrackIFTA is for US truckers who file IFTA. Drivers log trips and fuel. The software turns that into the quarterly return, plus truck profitability and driver pay.",
      "On the phone, a driver adds a route by date with multiple stops (city or ZIP), marks if a trailer was towed, saves the trip, and later opens IFTA, truck, or driver-pay reports. Sign-in is Apple or Google.",
      "The same product runs on the web at trackifta.com: saved trips by truck, CSV upload, and IFTA, truck, and driver-pay reports.",
    ],
    scope: ["iOS", "Android", "Web"],
    stack: "Expo, FastAPI, Supabase, Stripe",
    live: "https://trackifta.com",
    logo: "/logos/trackifta.png",
    photo: "/photos/highway.jpg",
    cover: "/work/ti-phone-trips.png",
    coverKind: "phone",
    gallery: [
      "/work/ti-phone-login.png",
      "/work/ti-phone-add-trip.png",
      "/work/ti-phone-trips.png",
      "/work/ti-phone-reports.png",
      "/work/ti-web-trips.png",
      "/work/ti-web-reports.png",
      "/work/trackifta-web.png",
    ],
    confidential: false,
  },
  {
    slug: "bizbill",
    name: "BizBill.pk",
    kind: "product",
    role: "FBR digital invoicing",
    oneLiner:
      "FBR-compliant sales invoicing for Pakistani businesses. Register in IRIS, then create and submit invoices through the official PRAL gateway.",
    story: [
      "BizBill.pk is invoicing for shops, distributors, and consultants in Pakistan. A company registers in IRIS, then raises sales invoices in BizBill. The app validates in real time through the official PRAL gateway and returns an FBR invoice number plus a PDF.",
      "Each business has one login for the whole office. The team keeps customers, products, and company profile in one place, then connects a sandbox token from IRIS before going live with a production token.",
      "Day-to-day billing does not require the FBR portal. Official PRAL API, real-time FBR validation, invoice number and PDF, one login per company.",
    ],
    scope: ["Web", "FBR / PRAL"],
    stack: "Next.js, Supabase, PRAL",
    live: "https://bizbill.pk",
    logo: "/logos/bizbill.png",
    cover: "/work/bb-web-landing.png",
    coverKind: "web",
    gallery: ["/work/bb-web-landing.png", "/work/bb-web-fbr.png"],
    confidential: false,
  },
  {
    slug: "accounting-ops",
    name: "Abdul Ghani Sons",
    kind: "client",
    role: "Accounting system",
    oneLiner:
      "Web and desktop accounting: purchase, sale, ledgers, bank, weights, and reports.",
    story: [
      "A daily system for Abdul Ghani Sons: sales and purchase entries, payments, claims, returns, expenses, customer ledgers, and inventory by weight.",
      "The web app is a color-coded portal. Purchase is orange, the customer ledger is violet, bank and cash is red. Terminal sign-in keeps a station locked to one operator.",
      "The desktop app is the same work at a desk: entries, opening balances, customer filters, and export to PDF or Excel.",
    ],
    scope: ["Web", "Desktop"],
    stack: "React, desktop",
    cover: "/work/acct-web-purchase.png",
    coverKind: "web",
    gallery: [
      "/work/acct-web-purchase.png",
      "/work/acct-web-ledger-v2.png",
      "/work/acct-web-bank.png",
      "/work/acct-web-sale.png",
      "/work/acct-web-login.png",
      "/work/acct-desk-entry.png",
      "/work/acct-desk-balances.png",
      "/work/acct-desk-customer.png",
      "/work/acct-desk-filters.png",
      "/work/acct-desk-report.png",
    ],
    confidential: false,
  },
  {
    slug: "fmcsaready",
    name: "FMCSAReady",
    kind: "product",
    role: "FMCSA compliance",
    oneLiner:
      "Third-party compliance assistance for new motor carriers: authority activation, BOC-3, UCR, and structured onboarding.",
    story: [
      "FMCSAReady helps new motor carriers become broker-ready. The site walks them through required federal registrations and authority activation with structured professional compliance support.",
      "Services include DOT and MC authority filing assistance, BOC-3 process agent coordination, UCR registration assistance, drug and alcohol consortium coordination, Clearinghouse registration guidance, authority activation monitoring, and broker onboarding eligibility review.",
    ],
    scope: ["Web"],
    stack: "React, Python, Flask",
    live: "https://fmcsaready.com",
    logo: "/logos/fmcsaready.png",
    cover: "/work/fmcsa-web-landing.png",
    coverKind: "web",
    gallery: ["/work/fmcsa-web-landing.png"],
    confidential: false,
  },
  {
    slug: "truckerwire",
    name: "TruckerWire",
    kind: "product",
    role: "Trucker network",
    oneLiner:
      "America's trucker wire: rooms, CB-style radio, highway reports, and driver jobs on iPhone and Android.",
    story: [
      "TruckerWire is a mobile network for US truckers. Drivers share what they see on the road, join rooms, send CB-style voice notes, and browse companies hiring drivers and owner operators.",
      "On the road reports cover accidents, weigh stations, closures, traffic, weather, parking, and fuel tips, with highway, state, and mile markers. Weather alerts sit at the top of the app.",
    ],
    scope: ["iOS", "Android"],
    stack: "Expo, Supabase, Firebase",
    logo: "/logos/truckerwire.png",
    cover: "/work/tw-phone-radio.png",
    coverKind: "phone",
    gallery: [
      "/work/tw-phone-radio.png",
      "/work/tw-phone-jobs.png",
      "/work/tw-phone-on-road.png",
    ],
    confidential: false,
  },
  {
    slug: "gts-dispatch",
    name: "GTS Dispatch",
    kind: "product",
    role: "Dispatch company site",
    oneLiner:
      "Truck dispatch company website, rebuilt from WordPress on Next.js.",
    story: [
      "We rebuilt the GTS Dispatch company site from WordPress onto Next.js so pages load fast and content is easy to keep current. It is the public marketing site for a US truck dispatch operation.",
    ],
    scope: ["Web"],
    stack: "Next.js",
    live: "https://gtsdispatch.us",
    logo: "/logos/gts.png",
    cover: "/work/gts-web-landing.png",
    coverKind: "web",
    gallery: ["/work/gts-web-landing.png"],
    confidential: false,
  },
  {
    slug: "family-birds",
    name: "Family Birds",
    kind: "product",
    role: "Private app for one family",
    oneLiner:
      "A closed nest for one family and their relatives. Something just for family. Not a public social network.",
    story: [
      "Family Birds was built for one family as their private app. Relatives share a closed nest. There is no public feed and no open signup.",
      "The splash says the brief: something just for family. A private family nest. New people join only when someone already inside trusts them.",
      "It runs on iPhone, Android, and the web. Memories stay in the nest.",
    ],
    gallery: [
      "/work/family-birds/phone-01.png",
      "/work/family-birds/phone-02.png",
    ],
    scope: ["iOS", "Android", "Web"],
    stack: "Expo, React, Supabase",
    logo: "/logos/family-birds.png",
    confidential: false,
  },
  {
    slug: "truckstation",
    name: "TruckStation",
    kind: "product",
    role: "Pakistan trucking marketplace",
    oneLiner:
      "Marketplace for carriers, shippers, and drivers in Pakistan, with live GPS tracking.",
    story: [
      "TruckStation is a Pakistan trucking marketplace. Carriers, shippers, and drivers each have an app. Search available trucks, share a live tracking link, and watch the fleet on a map.",
      "Carriers manage equipment. Drivers share background GPS. Shippers search and book from the same network. Sign-in is phone OTP. There is a web admin panel for the operation.",
    ],
    scope: ["Mobile", "Admin", "Maps"],
    stack: "Flutter, Expo, Flask, PostgreSQL",
    logo: "/logos/truckstation.svg",
    confidential: false,
  },
  {
    slug: "email-tool",
    name: "Email tool",
    kind: "tool",
    role: "Outbound mail",
    oneLiner:
      "Outbound email: templated sends, multi-brand campaigns, and tracking.",
    story: [
      "A web panel sends personalized HTML through Gmail. A hosted engine runs sequences, tracks clicks, and keeps leads on a spreadsheet.",
      "A desktop console can run several brands at once: templates, daily quotas, bounce checks, and SendGrid, Gmail, or Mailgun as the sender. Contacts come from Google Sheets.",
    ],
    scope: ["Web", "Desktop", "Sheets"],
    stack: "Python, React, Gmail API, SendGrid",
    logo: "/logos/email-tool.png",
    confidential: false,
  },
  {
    slug: "scrapers",
    name: "Scrapers",
    kind: "tool",
    role: "Public data collection",
    oneLiner:
      "Browser scrapers that pull public directory listings into Google Sheets.",
    story: [
      "Browser scrapers open public freight and registry directories, collect the fields needed, and write a clean list into Google Sheets.",
      "The toolkit is menu-driven, runs in a real browser, and can sit behind a sheet-triggered job. Those lists feed the email tool and other desk work. We do not publish client lists or sell scraped data.",
    ],
    scope: ["Desktop", "Sheets"],
    stack: "Python, Playwright, Google Sheets",
    logo: "/logos/scrapers.svg",
    confidential: false,
  },
  {
    slug: "messaging",
    name: "Messaging",
    kind: "tool",
    role: "Load-desk threads",
    oneLiner:
      "In-app messaging for freight desks: threads on a load or a truck, plus structured offers.",
    story: [
      "The messaging system is the conversation layer next to a load board. Brokers and carriers open a thread on a specific load or posted truck, send messages, and pass a rate as an offer card that can be accepted or rejected.",
      "The layout is a list of loads or trucks, company threads, and the chat. Unread counts sit in the header. Built so a desk can negotiate without leaving the product.",
    ],
    scope: ["Web"],
    stack: "React",
    logo: "/logos/messaging.svg",
    confidential: false,
  },
  {
    slug: "whatsapp-checker",
    name: "WhatsApp checker",
    kind: "tool",
    role: "Number check",
    oneLiner:
      "Reads phone numbers from a sheet, checks which ones are on WhatsApp, and opens Business chats.",
    story: [
      "A desk tool for outreach lists. It pulls numbers from Google Sheets, checks which accounts are on WhatsApp, and opens the Business chat so staff do not type each number by hand.",
      "Built for volume work next to the email tool. The sheet stays the source of truth.",
    ],
    scope: ["Android", "Sheets"],
    stack: "Android, API, Google Sheets",
    logo: "/logos/whatsapp-checker.svg",
    confidential: false,
  },
  {
    slug: "social-poster",
    name: "Social poster",
    kind: "tool",
    role: "Desk posting",
    oneLiner:
      "Posts to Facebook, LinkedIn, and Instagram groups from saved browser profiles.",
    story: [
      "A desk tool that opens saved Chrome profiles and posts into groups on Facebook, LinkedIn, and Instagram.",
      "Used when a brand needs the same update in many rooms without pasting by hand each time.",
    ],
    scope: ["Desktop"],
    stack: "Python, Chrome profiles",
    logo: "/logos/social-poster.svg",
    confidential: false,
  },
  {
    slug: "auto-brand-mailer",
    name: "Auto Brand Mailer",
    kind: "tool",
    role: "Google Sheets mailer",
    oneLiner:
      "A Google Sheets script that sends branded HTML from Gmail on a daily schedule.",
    story: [
      "Auto Brand Mailer is a Google Apps Script we wrote so outreach runs from a spreadsheet. One tab per brand, shared Templates, Config, and Log tabs. Paste contacts, save HTML, and the sheet sends on an hourly trigger during the day.",
      "Mail goes out through a workspace inbox the market already trusts. No extra server to keep up. Each brand tab marks a row sent so the same person is not mailed twice.",
    ],
    scope: ["Google Sheets", "Gmail"],
    stack: "Google Apps Script",
    logo: "/logos/auto-brand-mailer.svg",
    confidential: false,
  },
  {
    slug: "cutstudio",
    name: "CutStudio",
    kind: "product",
    role: "Browser video editor",
    oneLiner:
      "Browser editor for timed scripts and voiceover on product demo videos.",
    story: [
      "CutStudio records narration against a video with timestamps on every keystroke. It started as a tool for TrackIFTA demo videos and is now its own editor.",
      "It runs in the browser.",
    ],
    scope: ["Web"],
    stack: "React, ffmpeg",
    logo: "/logos/cutstudio.svg",
    cover: "/work/cutstudio-web.png",
    coverKind: "web",
    gallery: ["/work/cutstudio-web.png"],
    confidential: false,
  },
  {
    slug: "meridian-assist",
    name: "Meridian Assist",
    kind: "client",
    role: "Company chatbot",
    oneLiner:
      "A site chatbot we designed and built for a trading company: catalog answers, order intake, and a staff transcript.",
    story: [
      "Meridian Assist is a company chatbot we designed and built for a trading firm. Visitors ask about stock, deliveries, and invoices without waiting on a desk.",
      "The bot lives on their site under their name. It is trained on their catalog and house rules. A question about a commodity, a city, or a due date becomes a short answer plus a row the desk can open later.",
      "Staff get a private admin: conversations, order-intake rows, and the documents the bot is allowed to use. The visitor never sees that desk.",
      "We shipped the chat UI, the source documents, the transcript log, and the repository. The company owns the code and the data.",
    ],
    scope: ["Web", "AI"],
    stack: "React, company data",
    cover: "/work/meridian-assist-web.png",
    coverKind: "web",
    gallery: ["/work/meridian-assist-web.png"],
    confidential: false,
  },
  {
    slug: "yz-enterprises",
    name: "YZ Enterprises",
    kind: "client",
    role: "Export company website",
    oneLiner:
      "Public site for a textile and apparel buying house: products, buyers, and quote requests.",
    story: [
      "YZ Enterprises needed a public website for international buyers: home textiles, apparel, and a path to request a quote.",
      "We designed and built the site, the product catalog, and the inquiry inbox. The company owns the work.",
    ],
    scope: ["Web"],
    stack: "Next.js",
    live: "https://www.yzenterprisespk.com",
    cover: "/work/export-web-01.png",
    coverKind: "web",
    gallery: ["/work/export-web-01.png"],
    confidential: false,
  },
  {
    slug: "omer-international",
    name: "Omer International",
    kind: "client",
    role: "Export company website",
    oneLiner:
      "Company website for a textile and apparel manufacturer and trader: divisions, process, and quote requests.",
    story: [
      "Omer International is a buying house site we designed and built for international buyers. Home textiles, apparel, and industrial textiles sit on the public site.",
      "Buyers can read the export process, open a division, and send a quote request. An admin keeps products and inquiries current. The company owns the repository.",
    ],
    scope: ["Web"],
    stack: "Next.js",
    live: "https://www.omerinternational.com",
    cover: "/work/omer-web-landing.png",
    coverKind: "web",
    gallery: ["/work/omer-web-landing.png"],
    confidential: false,
  },
  {
    slug: "imaginers",
    name: "Imaginers Technologies",
    kind: "product",
    role: "Company site",
    oneLiner:
      "Company website for a software studio: services, how we work, and contact.",
    story: [
      "A marketing site for a software studio. Home, services, how we work, contact, and about, with a live chat widget on the page.",
    ],
    scope: ["Web"],
    stack: "Web",
    cover: "/work/imaginers-web-landing.png",
    coverKind: "web",
    gallery: ["/work/imaginers-web-landing.png"],
    confidential: false,
  },
];
