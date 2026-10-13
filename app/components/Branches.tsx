"use client";

import { useState, useMemo } from "react";
import {
  Search,
  X,
  Phone,
  Mail,
  Users,
  ExternalLink,
  Building2,
} from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Builds the cfmtg.com profile photo URL from a person's name.
// Pattern: https://cfmtg.com/wp-content/uploads/photo/FirstName-LastName-150x150.jpg
// You can override per-person with the `photo` field if the auto URL doesn't work.
function buildPhotoUrl(name: string): string {
  const slug = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents (René → Rene)
    .replace(/[^a-zA-Z\s]/g, "") // strip punctuation
    .trim()
    .split(/\s+/)
    .join("-");
  return `https://cfmtg.com/wp-content/uploads/photo/${slug}-150x150.jpg`;
}

const avatarColors = [
  "#460647",
  "#004a25",
  "#1a7a4a",
  "#2d8a5e",
  "#3d9970",
  "#0a5c2e",
  "#155c3a",
  "#0d6e40",
];
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
function getAvatarColor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return avatarColors[Math.abs(h) % avatarColors.length];
}

// ─── Avatar with auto-image + initials fallback ───────────────────────────
function Avatar({ name, photo }: { name: string; photo?: string }) {
  const [err, setErr] = useState(false);
  const src = photo || buildPhotoUrl(name);
  if (!err) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setErr(true)}
        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover object-top flex-shrink-0 border border-gray-200"
        style={{ borderRadius: 4 }}
      />
    );
  }
  return (
    <div
      className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex items-center justify-center text-white font-bold text-3xl flex-shrink-0"
      style={{ backgroundColor: getAvatarColor(name), borderRadius: 4 }}
    >
      {getInitials(name)}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// `photo` is optional — leave out or set "" to use auto-generated URL.
// Override with the exact URL if the auto one is wrong for someone.
const branchesData = [
  {
    name: "Antonio Borges",
    title: "Branch Manager",
    nmls: "160123",
    office: "(904) 735-1895",
    cell: "(302) 319-1111",
    email: "ABorges@cfmtg.com",
  },
  {
    name: "Adriana Clapper",
    title: "Branch Manager",
    nmls: "376370",
    office: "(904) 735-1895",
    cell: "(240) 603-5698",
    email: "aclapper@cfmtg.com",
  },
  {
    name: "Brian Benton",
    title: "Branch Manager",
    nmls: "220756",
    office: "",
    cell: "(630) 802-4433",
    email: "bbenton@cfmtg.com",
  },
  {
    name: "Ben Nihart",
    title: "Branch Manager",
    nmls: "1167633",
    office: "(904) 735-1895",
    cell: "(225) 892-8911",
    email: "bnihart@cfmtg.com",
  },
  {
    name: "Michael Liguori",
    title: "Branch Manager",
    nmls: "1819838",
    office: "(904) 735-1895",
    cell: "(516) 509-9062",
    email: "mliguori@moderndaylending.com",
  },
  {
    name: "Tim Moreno",
    title: "Branch Manager",
    nmls: "632697",
    office: "",
    cell: "(951) 897-5457",
    email: "TMoreno@cfmtg.com",
  },
  {
    name: "Jared White",
    title: "Branch Manager",
    nmls: "298917",
    office: "",
    cell: "(281) 615-1482",
    email: "jared@luxfilending.com",
  },
  {
    name: "Mason Kerth",
    title: "Branch Manager",
    nmls: "1976533",
    office: "(904) 735-1895",
    cell: "(205) 283-7624",
    email: "mason.kerth@cfmtg.com",
  },
  {
    name: "Brian Lynch",
    title: "Branch Manager",
    nmls: "376696",
    office: "(904) 735-1895",
    cell: "(251) 597-9750",
    email: "BLynch@cfmtg.com",
  },
  {
    name: "Teri Knight",
    title: "Branch Manager",
    nmls: "325808",
    office: "",
    cell: "(305) 978-8817",
    email: "tknight@cfmtg.com",
  },
  {
    name: "Jim Ross",
    title: "Branch Manager",
    nmls: "260705",
    office: "(904) 735-1895",
    cell: "(602) 740-5719",
    email: "JRoss@cfmtg.com",
  },
  {
    name: "Sean Cahan",
    title: "President",
    nmls: "309034",
    office: "",
    cell: "619-519-3780",
    email: "scahan@cfmtg.com",
  },
  {
    name: "Matt Erickson",
    title: "Branch Manager",
    nmls: "1373349",
    office: "",
    cell: "(309) 530-0088",
    email: "merickson@cfmtg.com",
  },
  {
    name: "Mike Romano",
    title: "Market Leader",
    nmls: "641558",
    office: "",
    cell: "(937) 401-0025",
    email: "MRomano@cfmtg.com",
  },
  {
    name: "Tim Sturtevant",
    title: "Branch Manager",
    nmls: "6772",
    office: "(904) 735-1895",
    cell: "(508) 982-3056",
    email: "tim@cfmtg.com",
  },
  {
    name: "Daniel Molinari",
    title: "Branch Manager",
    nmls: "1966441",
    office: "",
    cell: "(732) 902-1761",
    email: "DMolinari@cfmtg.com",
  },
  {
    name: "Jose Gomez",
    title: "Branch Manager",
    nmls: "1068401",
    office: "",
    cell: "(305) 282-6416",
    email: "jose@cfmtg.com",
  },
  {
    name: "James Bullock",
    title: "Branch Manager",
    nmls: "2006364",
    office: "",
    cell: "(480) 798-2756",
    email: "JBullock@cfmtg.com",
  },
  {
    name: "Derek Tubbs",
    title: "Branch Manager",
    nmls: "325456",
    office: "",
    cell: "(602) 465-4844",
    email: "DTubbs@cfmtg.com",
  },
  {
    name: "Nauris Tankevicius",
    title: "Branch Manager",
    nmls: "227831",
    office: "",
    cell: "(312) 498-3753",
    email: "Nauris@cfmtg.com",
  },
  {
    name: "Clayton Salazar",
    title: "Branch Manager",
    nmls: "1988759",
    office: "(904) 735-1895",
    cell: "(407) 497-9948",
    email: "CSalazar@cfmtg.com",
  },
  {
    name: "Chad Hampton",
    title: "Branch Manager",
    nmls: "2012651",
    office: "",
    cell: "(601) 624-7163",
    email: "champton@cfmtg.com",
  },
  {
    name: "Vince Caicedo",
    title: "Branch Manager",
    nmls: "390038",
    office: "",
    cell: "(904) 729-7007",
    email: "vince@imathgroup.com",
  },
  {
    name: "Kimberly Richards",
    title: "Branch Manager",
    nmls: "175666",
    office: "",
    cell: "(423) 285-9005",
    email: "KRichards@cfmtg.com",
  },
  {
    name: "Dee Ann Harper",
    title: "Branch Manager",
    nmls: "1323537",
    office: "(904) 735-1895",
    cell: "(405) 824-8320",
    email: "DHarper@cfmtg.com",
  },
  {
    name: "Dave Brown",
    title: "Branch Manager",
    nmls: "216112",
    office: "",
    cell: "(913) 314-6656",
    email: "dave@davebrownmortgage.com",
  },
  {
    name: "Stas Tsiperson",
    title: "Area Manager",
    nmls: "862597",
    office: "",
    cell: "(216) 526-0998",
    email: "stas@mcmtg.com",
  },
  {
    name: "Martin Witzburg",
    title: "Branch Manager",
    nmls: "202853",
    office: "(904) 735-1895",
    cell: "(908) 294-0433",
    email: "mwitzburg@cfmtg.com",
  },
  {
    name: "Caton Del Rosario",
    title: "Branch Manager",
    nmls: "1410686",
    office: "",
    cell: "(619) 403-6571",
    email: "Caton@cfmtg.com",
  },
  {
    name: "Brett Jerhoff",
    title: "Production Manager",
    nmls: "307368",
    office: "(904) 735-1895 x 1021",
    cell: "(619) 847-6196",
    email: "bjerhoff@cfmtg.com",
  },
  {
    name: "Jeremiah Claramunt",
    title: "Branch Manager",
    nmls: "33184",
    office: "",
    cell: "(734) 536-7722",
    email: "JClaramunt@cfmtg.com",
  },
  {
    name: "Marla Loggins",
    title: "Branch Manager",
    nmls: "148503",
    office: "706-367-2970",
    cell: "(706) 215-4517",
    email: "mloggins@cfmtg.com",
  },
  {
    name: "Adam MacBride",
    title: "Branch Manager",
    nmls: "1218352",
    office: "(904) 735-1895",
    cell: "(410) 271-6470",
    email: "amacbride@moderndaylending.com",
  },
  {
    name: "Matt Webber",
    title: "Branch Manager",
    nmls: "1115146",
    office: "",
    cell: "(480) 270-0804",
    email: "Matt.Webber@cfmtg.com",
  },
  {
    name: "Raisa Fudim",
    title: "Branch Manager",
    nmls: "1416438",
    office: "",
    cell: "(916) 809-6216",
    email: "RFudim@cfmtg.com",
  },
  {
    name: "Rick Sidley",
    title: "Branch Manager",
    nmls: "202503",
    office: "",
    cell: "858-722-9489",
    email: "rsidley@cfmtg.com",
  },
  {
    name: "Chase Zinkil",
    title: "Loan Officer",
    nmls: "1316812",
    office: "",
    cell: "(949) 287-1652",
    email: "czinkil@cfmtg.com",
  },
  {
    name: "Scott Middleton",
    title: "Branch Manager",
    nmls: "1452433",
    office: "",
    cell: "(936) 499-0509",
    email: "scott@goodfellaslending.com",
  },
  {
    name: "Justin Miller",
    title: "Branch Manager",
    nmls: "321737",
    office: "",
    cell: "(754) 214-7449",
    email: "JMiller@cfmtg.com",
  },
  {
    name: "David Keblaitis",
    title: "Branch Manager",
    nmls: "167980",
    office: "(904) 735-1895",
    cell: "(734) 891-4348",
    email: "davek@cfmtg.com",
  },
  {
    name: "Keith Converse",
    title: "Co-Branch Manager",
    nmls: "1892686",
    office: "(904) 735-1895",
    cell: "(931) 368-4044",
    email: "KConverse@cfmtg.com",
  },
  {
    name: "Michael Fornerette",
    title: "Branch Manager",
    nmls: "121193",
    office: "",
    cell: "(206) 687-5640",
    email: "michael@theforneretteteam.com",
  },
  {
    name: "Tony Casteel",
    title: "Branch Manager",
    nmls: "1844704",
    office: "(904) 735-1895",
    cell: "(770) 309-4154",
    email: "TCasteel@cfmtg.com",
  },
  {
    name: "Adam DeSantis",
    title: "Branch Manager",
    nmls: "870107",
    office: "(904) 735-1895",
    cell: "(443) 465-1050",
    email: "adesantis@cfmtg.com",
  },
  {
    name: "Jeremy Castille",
    title: "Branch Manager",
    nmls: "1421097",
    office: "",
    cell: "(337) 230-1536",
    email: "jeremy@castillemortgage.com",
  },
  {
    name: "Mike Pavlovich",
    title: "Branch Manager",
    nmls: "967442",
    office: "",
    cell: "(702) 875-6453",
    email: "MikePavlovich@cfmtg.com",
  },
  {
    name: "Eric Bryan",
    title: "Branch Manager",
    nmls: "1641760",
    office: "",
    cell: "(269) 512-5905",
    email: "EBryan@cfmtg.com",
  },
  {
    name: "Constantino Bovino",
    title: "Branch Manager",
    nmls: "1276236",
    office: "",
    cell: "(908) 303-9171",
    email: "CBovino@cfmtg.com",
  },
  {
    name: "Ethan Wilson",
    title: "Senior Vice President",
    nmls: "156741",
    office: "(253) 200-3255",
    cell: "(408) 449-9703",
    email: "EthanW@futurefirstmtg.com",
  },
  {
    name: "Chuck Clapper",
    title: "Branch Manager",
    nmls: "376378",
    office: "(904) 735-1895",
    cell: "(240) 602-5511",
    email: "CClapper@cfmtg.com",
  },
  {
    name: "Christie Elliott",
    title: "Branch Manager",
    nmls: "1998136",
    office: "(904) 735-1895",
    cell: "(678) 300-6913",
    email: "christie.elliott@cfmtg.com",
  },
  {
    name: "Stan Bukriy",
    title: "Branch Manager",
    nmls: "2587434",
    office: "",
    cell: "(773) 606-4488",
    email: "SBukriy@cfmtg.com",
  },
  {
    name: "Barry Sharif",
    title: "Branch Manager",
    nmls: "528759",
    office: "(757) 586-3500",
    cell: "(631) 463-8583",
    email: "bsharif@cfmtg.com",
  },
  {
    name: "James Waite",
    title: "Branch Operations Manager",
    nmls: "1286031",
    office: "(904) 735-1895",
    cell: "(813) 967-8343",
    email: "jwaite@goodwinmg.com",
  },
  {
    name: "Clint Madison",
    title: "Loan Officer",
    nmls: "219274",
    office: "(904) 735-1895",
    cell: "(415) 606-2244",
    email: "CMadison@cfmtg.com",
  },
  {
    name: "Rafael Aguilera",
    title: "Branch Manager",
    nmls: "1134478",
    office: "",
    cell: "(305) 297-5104",
    email: "raguilera@cfmtg.com",
  },
  {
    name: "Tom Banducci",
    title: "Branch Manager",
    nmls: "290222",
    office: "(904) 735-1895",
    cell: "(415) 606-7850",
    email: "tbanducci@cfmtg.com",
  },
  {
    name: "Tara Rodgers",
    title: "Branch Manager",
    nmls: "118034",
    office: "",
    cell: "(318) 218-8525",
    email: "tara.rodgers@cfmtg.com",
  },
  {
    name: "Leighton Johnson",
    title: "Branch Manager",
    nmls: "319563",
    office: "(912) 342-2400",
    cell: "(912) 270-2000",
    email: "Leighton@cfmtg.com",
  },
  {
    name: "Marc Kade",
    title: "Branch Manager",
    nmls: "231670",
    office: "(904) 735-1895",
    cell: "(614) 354-9424",
    email: "marc.kade@cfmtg.com",
  },
  {
    name: "Scott Lake",
    title: "Branch Manager",
    nmls: "110347",
    office: "(253) 200-3255",
    cell: "(360) 649-2445",
    email: "slake@futurefirstmtg.com",
  },
  {
    name: "Marc Phayne",
    title: "Branch Manager",
    nmls: "384598",
    office: "(833) 913-5626 ext. 413",
    cell: "",
    email: "mphayne@cfmtg.com",
  },
  {
    name: "Chris Cliburn",
    title: "Branch Manager",
    nmls: "1522933",
    office: "",
    cell: "(985) 956-2523",
    email: "ccliburn@cfmtg.com",
  },
  {
    name: "Mike Bernhart",
    title: "Branch Manager",
    nmls: "403902",
    office: "",
    cell: "(330) 760-9609",
    email: "mike.bernhart@armormortgage.com",
  },
  {
    name: "Luke Veronica",
    title: "Originating Branch Manager",
    nmls: "1484084",
    office: "",
    cell: "(530) 448-3416",
    email: "Luke.Veronica@cfmtg.com",
  },
  {
    name: "Matthew Arana",
    title: "Branch Manager",
    nmls: "347921",
    office: "",
    cell: "314-680-6048",
    email: "marana@cfmtg.com",
  },
  {
    name: "Jason Reedy",
    title: "Branch Manager",
    nmls: "365437",
    office: "",
    cell: "(937) 673-1870",
    email: "JReedy@cfmtg.com",
  },
  {
    name: "Tim Regan",
    title: "Branch Manager",
    nmls: "200865",
    office: "(904) 735-1895",
    cell: "(732) 895-3210",
    email: "tregan@cfmtg.com",
  },
  {
    name: "Randy Zachary",
    title: "Branch Manager",
    nmls: "1157911",
    office: "",
    cell: "775-387-0008",
    email: "randy.zachary@cfmtg.com",
  },
  {
    name: "Zac Cook",
    title: "Branch Manager",
    nmls: "2111496",
    office: "(904) 735-1895",
    cell: "(480) 406-2016",
    email: "Zac@cfmtg.com",
  },
  {
    name: "Drew Brenner",
    title: "Branch Manager & SVP",
    nmls: "298139",
    office: "",
    cell: "(214) 282-6387",
    email: "Drew@cfmtg.com",
  },
  {
    name: "René Stone",
    title: "Branch Manager",
    nmls: "227334",
    office: "(904) 735-1895",
    cell: "(732) 245-9559",
    email: "rstone@cfmtg.com",
  },
  {
    name: "Joe Girmonde",
    title: "Branch Manager",
    nmls: "845225",
    office: "",
    cell: "(480) 734-5094",
    email: "JG@cfmtg.com",
  },
  {
    name: "Matthew Carmody",
    title: "Branch Manager",
    nmls: "880675",
    office: "(904) 735-1895",
    cell: "(515) 321-8059",
    email: "MCarmody@cfmtg.com",
  },
  {
    name: "Jim Lesmerises",
    title: "Branch Manager",
    nmls: "48032",
    office: "",
    cell: "(603) 682-4832",
    email: "JimL@cfmtg.com",
  },
  {
    name: "David Cloe",
    title: "Branch Manager",
    nmls: "487430",
    office: "",
    cell: "(509) 294-2892",
    email: "DCloe@cfmtg.com",
  },
  {
    name: "Martin Quiroz",
    title: "Sr. Loan Officer",
    nmls: "181138",
    office: "",
    cell: "(619) 813-1287",
    email: "Martin@cfmtg.com",
  },
  {
    name: "Cayne Harrelson",
    title: "Branch Manager",
    nmls: "1747652",
    office: "",
    cell: "(334) 488-0524",
    email: "charrelson@cfmtg.com",
  },
  {
    name: "Hunter Zinkil",
    title: "Regional Manager",
    nmls: "990612",
    office: "",
    cell: "(949) 510-0219",
    email: "hzinkil@cfmtg.com",
  },
  {
    name: "Richie Jercha",
    title: "Branch Manager",
    nmls: "633479",
    office: "",
    cell: "(408) 887-5582",
    email: "Richie@cfmtg.com",
  },
  {
    name: "Isaiah Blas",
    title: "Branch Manager",
    nmls: "2125132",
    office: "(904) 735-1895",
    cell: "(858) 652-0789",
    email: "iblas@cfmtg.com",
  },
  {
    name: "Travis Genta",
    title: "Branch Manager",
    nmls: "65995",
    office: "(904) 735-1895",
    cell: "(801) 420-5600",
    email: "travis.genta@cfmtg.com",
  },
  {
    name: "Keila Santos",
    title: "Branch Manager",
    nmls: "442267",
    office: "",
    cell: "813-495-4619",
    email: "ksantos@cfmtg.com",
  },
  {
    name: "Jason Grubba",
    title: "Regional Manager",
    nmls: "273104",
    office: "(904) 735-1895",
    cell: "(262) 490-3923",
    email: "JGrubba@cfmtg.com",
  },
  {
    name: "Jessica Hobbs",
    title: "Branch Manager",
    nmls: "1253599",
    office: "",
    cell: "(615) 681-6848",
    email: "jmhobbs@cfmtg.com",
  },
  {
    name: "Robert MacDougall",
    title: "Branch Manager",
    nmls: "294901",
    office: "",
    cell: "(305) 401-1679",
    email: "RMacDougall@cfmtg.com",
  },
  {
    name: "Jon Fuller",
    title: "Branch Manager",
    nmls: "2009329",
    office: "(904) 735-1895",
    cell: "(619) 672-9318",
    email: "jon.fuller@cfmtg.com",
  },
  {
    name: "Flavia Portal",
    title: "Area Sales Manager",
    nmls: "766633",
    office: "",
    cell: "(941) 587-1517",
    email: "flavia.portal@lendufinance.us",
  },
  {
    name: "Joshua Goodwin",
    title: "Branch Manager",
    nmls: "1082520",
    office: "",
    cell: "(813) 230-5982",
    email: "jgoodwin@goodwinmg.com",
  },
  {
    name: "Dwaine Chapdelaine",
    title: "Branch Manager",
    nmls: "428131",
    office: "",
    cell: "(269) 779-3881",
    email: "dwainec@cfmtg.com",
  },
  {
    name: "Mike Certo",
    title: "Branch Manager",
    nmls: "260555",
    office: "(904) 735-1895",
    cell: "(480) 296-6513",
    email: "MCerto@cfmtg.com",
  },
  {
    name: "Russell Bonasso",
    title: "Branch Manager",
    nmls: "427548",
    office: "(304) 345-LOAN",
    cell: "(304) 741-5049",
    email: "RBonasso@cfmtg.com",
  },
  {
    name: "Mickey Zugheri",
    title: "Branch Manager",
    nmls: "179379",
    office: "",
    cell: "(713) 562-5404",
    email: "mzugheri@cfmtg.com",
  },
  {
    name: "Tom Schwab",
    title: "Branch Manager",
    nmls: "77107",
    office: "(904) 735-1895",
    cell: "(206) 817-1400",
    email: "tschwab@cfmtg.com",
  },
  {
    name: "Emmanuel R. Fajardo",
    title: "National Manager",
    nmls: "890310",
    office: "",
    cell: "954-770-0626",
    email: "efajardo@cfmtg.com",
  },
  {
    name: "Ashlee Cameron",
    title: "Branch Manager",
    nmls: "1377661",
    office: "(253) 200-3255",
    cell: "(360) 900-9590",
    email: "ACameron@futurefirstmtg.com",
  },
  {
    name: "Keith Trueblood",
    title: "Branch Manager",
    nmls: "655230",
    office: "",
    cell: "(812) 360-7882",
    email: "KTrueblood@cfmtg.com",
  },
  {
    name: "Juan Babani",
    title: "Branch Manager",
    nmls: "1411844",
    office: "(904) 735-1895",
    cell: "(305) 915-6625",
    email: "babani@cfmtg.com",
  },
];

const uniqueRoles = Array.from(
  new Set(branchesData.map((b) => b.title)),
).sort();

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Branches() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(15);

  const filtered = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const seen = new Set<string>();
    return branchesData.filter((b) => {
      const key = `${b.name}-${b.email}`;
      if (seen.has(key)) return false;
      seen.add(key);
      const matchSearch =
        !term ||
        b.name.toLowerCase().includes(term) ||
        b.title.toLowerCase().includes(term) ||
        b.email.toLowerCase().includes(term) ||
        (b.cell || "").includes(term);
      const matchFilter =
        activeFilters.length === 0 || activeFilters.includes(b.title);
      return matchSearch && matchFilter;
    });
  }, [searchTerm, activeFilters]);

  const visible = filtered.slice(0, visibleCount);

  const toggleFilter = (role: string) => {
    setActiveFilters((p) =>
      p.includes(role) ? p.filter((r) => r !== role) : [...p, role],
    );
    setVisibleCount(15);
  };
  const clearAll = () => {
    setActiveFilters([]);
    setSearchTerm("");
    setVisibleCount(15);
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b rounded-2xl from-[#460647] to-[#004a25] text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-green-200 mb-6">
            <Building2 className="w-4 h-4" /> Nationwide Network
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find Your Branch
          </h1>
          <p className="text-xl text-green-200 mb-3">
            Local experts. National reach.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Connect directly with a licensed mortgage professional near you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Stats */}
        <div className="bg-green-50 rounded-2xl p-6 border border-green-200 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="bg-[#460647] p-2 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {branchesData.length}+
                </p>
                <p className="text-sm text-gray-600">Branch Managers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#460647] p-2 rounded-full">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Nationwide</p>
                <p className="text-sm text-gray-600">Coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#460647] p-2 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Direct</p>
                <p className="text-sm text-gray-600">Contact Access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, role, or email…"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(15);
              }}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-white text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            {uniqueRoles.map((role) => (
              <button
                key={role}
                onClick={() => toggleFilter(role)}
                className={`px-3 py-1 text-xs rounded-full border transition ${activeFilters.includes(role) ? "bg-[#460647] text-white border-[#460647]" : "bg-white text-gray-600 border-gray-300 hover:border-[#460647]"}`}
              >
                {role}
              </button>
            ))}
            {(activeFilters.length > 0 || searchTerm) && (
              <button
                onClick={clearAll}
                className="text-xs text-red-600 hover:text-red-800 font-medium"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Showing {Math.min(visibleCount, filtered.length)} of {filtered.length}{" "}
          branches
        </p>

        {/* Branch list — 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((branch, idx) => (
            <div
              key={`${branch.name}-${idx}`}
              className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <Avatar name={branch.name} />

              {/* Info */}
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="font-bold text-[#1a3a6b] text-base uppercase tracking-wide leading-tight">
                  {branch.name}
                </h3>
                <p className="text-sm text-gray-700 font-medium mt-0.5">
                  {branch.title} |{" "}
                  <span className="font-normal text-gray-600">
                    NMLS# {branch.nmls}
                  </span>
                </p>

                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  {(branch.office || branch.cell) && (
                    <p>
                      {branch.office && (
                        <>
                          <span className="font-bold text-gray-900">O:</span>{" "}
                          {branch.office}{" "}
                        </>
                      )}
                      {branch.cell && (
                        <>
                          <span className="font-bold text-gray-900">C:</span>{" "}
                          {branch.cell}
                        </>
                      )}
                    </p>
                  )}
                  <p className="text-gray-600">{branch.email}</p>
                </div>

                <a
                  href="https://cfmtg.com/branch-finder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[#E87722] hover:underline"
                >
                  View Branch
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-xl">
            <p className="text-gray-500">No branches found.</p>
            <button
              onClick={clearAll}
              className="mt-3 text-[#460647] font-medium hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleCount((v) => v + 15)}
              className="bg-[#460647] hover:bg-[#003B1A] text-white px-8 py-3 rounded-xl font-semibold transition shadow-md"
            >
              Load More
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-[#460647] rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">
            Not sure which branch to contact?
          </h3>
          <p className="text-green-200 mb-6 text-sm">
            Reach our main line and we'll connect you with the right loan
            professional.
          </p>
          <a
            href="tel:7068293294"
            className="inline-flex items-center gap-2 bg-white text-[#460647] font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition"
          >
            <Phone className="w-5 h-5" /> (904) 735-1895
          </a>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            All loan officers are licensed mortgage professionals. Loan
            approvals are subject to underwriting guidelines. Equal Housing
            Lender.
          </p>
        </div>
      </div>
    </div>
  );
}
