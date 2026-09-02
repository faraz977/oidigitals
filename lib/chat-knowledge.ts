import { SITE } from "@/lib/site";

export type Knowledge = {
  q: string;
  a: string;
  tags?: string;
};

export const ABOUT_US = [
  `${SITE.name} is a software house. We design and ship mobile apps, websites, platforms, desktop software, and company assistants. We deliver worldwide.`,
  `Studio: ${SITE.city}. ${SITE.remote}.`,
  `Email: ${SITE.email}. Phone and WhatsApp: ${SITE.phone}. Site: ${SITE.domain}.`,
  "A project starts with a brief, then a first working slice in a private repository. You own the work at handoff. Named work is on the Work page.",
].join(" ");

export const PHONE = `The studio phone is ${SITE.phone}. WhatsApp uses the same number. The green button on this chat opens it. Email ${SITE.email}.`;

export const EMAIL = `Write ${SITE.email}. Phone and WhatsApp: ${SITE.phone}. Or send a brief on Contact.`;

export const WHERE = `The studio is in ${SITE.city}. ${SITE.remote}. We deliver for teams worldwide. Phone ${SITE.phone}. Email ${SITE.email}.`;

export const START = `Send a short brief on Contact or write ${SITE.email}. Tell us what to build, who will use it, and when you need a first version. Phone and WhatsApp: ${SITE.phone}.`;

export const PROCESS = [
  "If you want software built, start with a brief on Contact: what it should do, who will use it, and when you need a first working version.",
  "We design the interface, ship a first slice in a private repository, then grow it. You own the work at handoff.",
  `Email ${SITE.email}. Phone and WhatsApp: ${SITE.phone}.`,
].join(" ");

export const KNOWLEDGE: Knowledge[] = [
  {
    q: "who are you what is this chatbot oi chatbot",
    tags: "identity name hello helper",
    a: `I am OI Chatbot, the studio helper on this site. I can answer about ${SITE.name}, our work, how a project starts, or a general question. WhatsApp is next to this chat if you want a person.`,
  },
  {
    q: "about us about oi digitals who is oi digitals company profile tell me about the studio",
    tags: "about company studio us",
    a: ABOUT_US,
  },
  {
    q: "what does oi digitals do software house services what do you build",
    tags: "company studio services",
    a: `${SITE.name} is a software house. We design and ship mobile apps, websites, platforms, desktop software, and company assistants. Brand and interface first, then the build. We deliver worldwide.`,
  },
  {
    q: "oi digitals phone number call mobile telephone contact number",
    tags: "phone call mobile number",
    a: PHONE,
  },
  {
    q: "email address hello@ write to you mail",
    tags: "email hello mail",
    a: EMAIL,
  },
  {
    q: "whatsapp message chat wa.me",
    tags: "whatsapp",
    a: `WhatsApp is ${SITE.phone}. Tap the green WhatsApp button on this chat. Same number as the phone line.`,
  },
  {
    q: "where are you located address city karachi nazimabad pakistan studio location office",
    tags: "address location karachi nazimabad pakistan office",
    a: WHERE,
  },
  {
    q: "do you work worldwide remote international clients pakistan",
    tags: "worldwide delivery remote",
    a: `Yes. We deliver for teams worldwide. The studio is in ${SITE.city}. ${SITE.remote}.`,
  },
  {
    q: "how do we start hire you begin a project brief get in touch",
    tags: "start contact hire",
    a: START,
  },
  {
    q: "how to create software make an app build a website develop a product",
    tags: "create build make software process",
    a: PROCESS,
  },
  {
    q: "who do you work with clients industries",
    tags: "clients industries",
    a: "Companies that need software in people's hands: products, sites, operations tools, and assistants. Logistics, compliance, billing, and company sites. We deliver worldwide.",
  },
  {
    q: "do we get the source code repository git ownership",
    tags: "git repo handoff own",
    a: "Yes. The project is a private repository from the first commit. At handoff you receive the repository and the accounts. The work is yours.",
  },
  {
    q: "how long timeline first demo weeks months process",
    tags: "timeline speed demo process",
    a: "We read a brief the same working day when we can, then reply with questions, a scope, and a first demo date. Work starts in a private repository after you agree that scope in writing.",
  },
  {
    q: "price cost quote budget fee charges how much",
    tags: "price money quote",
    a: `We scope first, then we quote. Email ${SITE.email} or use Contact with what you need and when. Phone ${SITE.phone}.`,
  },
  {
    q: "can you show prior work portfolio examples case studies",
    tags: "work portfolio",
    a: "Some clients allow screens on this site. Open Work for the full list: apps, websites, a client chatbot, accounting, and tools.",
  },
  {
    q: "mobile app ios android iphone expo",
    tags: "mobile app",
    a: "Yes. We ship iOS and Android apps. See ShipperDock, TrackIFTA, TruckerWire, Family Birds, and TruckStation on Work.",
  },
  {
    q: "website web portal company site",
    tags: "web site",
    a: "Yes. We design product sites, company sites, and admin portals. See Work for ShipperDock.com, BizBill.pk, GTS Dispatch, Omer International, YZ Enterprises, and more.",
  },
  {
    q: "desktop software accounting ledger",
    tags: "desktop",
    a: "Yes. We build desktop and web tools for daily entries, ledgers, and reports. See Abdul Ghani Sons on Work.",
  },
  {
    q: "design brand interface ui ux",
    tags: "design brand",
    a: "Yes. Brand, pages, and product interface first. Then we build what you approved.",
  },
  {
    q: "ai chatbot assistant for my company meridians",
    tags: "ai chatbot client",
    a: "We design and build company chatbots trained on a catalog and house rules. Meridian Assist on Work is one we shipped.",
  },
  {
    q: "shipperdock load board",
    tags: "shipperdock",
    a: "ShipperDock is a US load board for shippers, carriers, and brokers. Mobile and web. See Work or shipperdock.com.",
  },
  {
    q: "trackifta ifta fuel tax",
    tags: "trackifta",
    a: "TrackIFTA is IFTA trip and fuel logging that becomes the quarterly return, plus truck and driver reports. See Work or trackifta.com.",
  },
  {
    q: "truckerwire trucker network cb radio",
    tags: "truckerwire",
    a: "TruckerWire is a mobile network for US truckers: rooms, highway reports, and driver jobs. See Work.",
  },
  {
    q: "bizbill fbr invoicing pakistan",
    tags: "bizbill",
    a: "BizBill.pk is FBR-compliant sales invoicing for Pakistani businesses. See Work or bizbill.pk.",
  },
  {
    q: "fmcsaready compliance boc ucr",
    tags: "fmcsaready",
    a: "FMCSAReady helps new motor carriers become broker-ready: authority, BOC-3, UCR, and onboarding. See Work or fmcsaready.com.",
  },
  {
    q: "gts dispatch website",
    tags: "gts",
    a: "GTS Dispatch is a truck dispatch company site we rebuilt on a modern stack. See Work or gtsdispatch.us.",
  },
  {
    q: "family birds private family app",
    tags: "family birds",
    a: "Family Birds is a private app built for one family and their relatives. A closed nest. Not a public social network. See Work.",
  },
  {
    q: "truckstation findtruck pakistan marketplace",
    tags: "truckstation findtruck",
    a: "TruckStation is a Pakistan trucking marketplace for carriers, shippers, and drivers, with live GPS. See Work.",
  },
  {
    q: "abdul ghani sons accounting",
    tags: "ags accounting",
    a: "Abdul Ghani Sons is a web and desktop accounting system: purchase, sale, ledgers, bank, weights, and reports. See Work.",
  },
  {
    q: "omer international textile export website",
    tags: "omer international export",
    a: "Omer International is a company website we built for a textile and apparel buying house. Live at omerinternational.com. See Work.",
  },
  {
    q: "yz enterprises textile export website",
    tags: "yz enterprises export",
    a: "YZ Enterprises is a company website we built for a textile and apparel buying house. Live at yzenterprisespk.com. See Work.",
  },
  {
    q: "cutstudio video editor",
    tags: "cutstudio",
    a: "CutStudio is a browser editor for timed scripts and voiceover on product videos. See Work.",
  },
  {
    q: "imaginers technologies",
    tags: "imaginers",
    a: "Imaginers Technologies is a company site we built for a software studio. See Work.",
  },
  {
    q: "email tool scrapers messaging mailer whatsapp checker social poster",
    tags: "tools",
    a: "Studio tools on Work include the email tool, scrapers, messaging, WhatsApp checker, social poster, and Auto Brand Mailer.",
  },
  {
    q: "dock run game how to play",
    tags: "game play dock",
    a: "Dock Run is the browser game on Home. Arrow keys or WASD. Collect crates and miss cones. Speed climbs with time.",
  },
  {
    q: "privacy nda confidential client data source",
    tags: "privacy nda",
    a: "We do not publish another company's source, admin, or customer data. Enquiries stay private. We will not add your project to Work unless you ask in writing. See Privacy.",
  },
  {
    q: "pdf work list print brochure",
    tags: "pdf print",
    a: "A printable work list is on the Work list PDF page in the footer. Use it when you want a file to send.",
  },
  {
    q: "domain website url oidigitals.net",
    tags: "domain site",
    a: `The public site is ${SITE.domain}. Email ${SITE.email}.`,
  },
  {
    q: "what languages do you speak urdu english",
    tags: "language urdu",
    a: `This chat is in English. Write ${SITE.email} or WhatsApp ${SITE.phone} if you prefer another language with a person.`,
  },
  {
    q: "thank you thanks shukria",
    tags: "thanks",
    a: "You are welcome. Send a brief when you are ready.",
  },
  {
    q: "who founded owner faraz",
    tags: "founder personal",
    a: `OI Digitals is the studio. For a person, WhatsApp ${SITE.phone} or write ${SITE.email}.`,
  },
];
