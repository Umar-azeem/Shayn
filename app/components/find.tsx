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
  User,
  MapPin,
} from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Builds the cfmtg.com profile photo URL from a person's name.
function buildPhotoUrl(name: string): string {
  const slug = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z\s]/g, "")
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
const loanOfficersData = [
  {
    name: "Nicole Alamrew",
    title: "Branch Loan Processor",
    nmls: "1172554",
    office: "",
    cell: "(972) 807-3350",
    email: "nicole@mcmtg.com",
  },
  {
    name: "Ryan Blomberg",
    title: "Loan Officer",
    nmls: "283487",
    office: "",
    cell: "(952) 334-5441",
    email: "rblomberg@goodwinmg.com",
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
    name: "Harold Ciccia",
    title: "Loan Officer",
    nmls: "2443361",
    office: "(253) 200-3255",
    cell: "(253) 222-0740",
    email: "Hciccia@futurefirstmtg.com",
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
    name: "Dave Freeman",
    title: "Loan Officer",
    nmls: "1409839",
    office: "",
    cell: "(802) 380-4866",
    email: "dfreeman@cfmtg.com",
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
    name: "Ethan Wilson",
    title: "Senior Vice President",
    nmls: "156741",
    office: "(253) 200-3255",
    cell: "(408) 449-9703",
    email: "EthanW@futurefirstmtg.com",
  },
  {
    name: "Colby Rae Campbell",
    title: "Loan Officer",
    nmls: "1705632",
    office: "",
    cell: "(814) 771-6012",
    email: "colby@atlasmortgagegrp.com",
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
    name: "Ansar Khan",
    title: "Loan Officer",
    nmls: "1636580",
    office: "(904) 735-1895",
    cell: "(814) 270-8354",
    email: "AKhan@cfmtg.com",
  },
  {
    name: "Terrah White",
    title: "Branch Manager",
    nmls: "2261097",
    office: "",
    cell: "(325) 232-4718",
    email: "TWhite@cfmtg.com",
  },
  {
    name: "Mark Saftich",
    title: "Sr. Loan Officer",
    nmls: "115868",
    office: "",
    cell: "(360) 241-6240",
    email: "MSaftich@cfmtg.com",
  },
  {
    name: "Jenna Tolman",
    title: "Loan Officer",
    nmls: "999566",
    office: "",
    cell: "949-702-0532",
    email: "jtolman@cfmtg.com",
  },
  {
    name: "Jeremy Fenstermaker",
    title: "Loan Officer",
    nmls: "625915",
    office: "",
    cell: "(480) 433-0955",
    email: "jeremy@cfmtg.com",
  },
  {
    name: "Silvana Fertig",
    title: "Loan Officer",
    nmls: "1364285",
    office: "",
    cell: "(954) 515-6018",
    email: "sfertig@cfmtg.com",
  },
  {
    name: "Mike Chmielewski",
    title: "Loan Officer",
    nmls: "2722662",
    office: "",
    cell: "(517) 936-8503",
    email: "MChmi@cfmtg.com",
  },
  {
    name: "Nathan Werdowatz",
    title: "Loan Officer",
    nmls: "2559541",
    office: "(904) 735-1895",
    cell: "(858) 688-3254",
    email: "Nathan.Werdowatz@cfmtg.com",
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
    name: "Donesha Avance",
    title: "Senior Mortgage Specialist",
    nmls: "1644512",
    office: "(904) 735-1895",
    cell: "(470) 617-4470",
    email: "davance@cfmtg.com",
  },
  {
    name: "Rubens Vaz",
    title: "Loan Officer",
    nmls: "2119764",
    office: "",
    cell: "(407) 617-3749",
    email: "Rubens.Vaz@lendufinance.us",
  },
  {
    name: "Mercia Sousa",
    title: "Loan Officer",
    nmls: "2086491",
    office: "",
    cell: "(407) 929-8058",
    email: "Mercia@lendufinance.us",
  },
  {
    name: "Sean Lane",
    title: "Loan Officer",
    nmls: "1595071",
    office: "",
    cell: "(561) 578-9249",
    email: "slane@moderndaylending.com",
  },
  {
    name: "Chris Nooney",
    title: "Area Manager",
    nmls: "179371",
    office: "",
    cell: "",
    email: "cnooney@cfmtg.com",
  },
  {
    name: "John Paul Ryan",
    title: "Loan Officer",
    nmls: "1145241",
    office: "",
    cell: "(949) 776-1873",
    email: "JRyan@cfmtg.com",
  },
  {
    name: "Ned Silverman",
    title: "Branch Manager",
    nmls: "1514667",
    office: "",
    cell: "(231) 397-8381",
    email: "nsilverman@cfmtg.com",
  },
  {
    name: "Craig Grossman",
    title: "Loan Officer",
    nmls: "2810694",
    office: "",
    cell: "(360) 510-2420",
    email: "CGrossman@cfmtg.com",
  },
  {
    name: "Tony Dutton",
    title: "Branch Manager",
    nmls: "1171041",
    office: "",
    cell: "(612) 490-4174",
    email: "tdutton@cfmtg.com",
  },
  {
    name: "Liam Baker",
    title: "Loan Officer",
    nmls: "1834524",
    office: "",
    cell: "(516) 477-1194",
    email: "lbaker@moderndaylending.com",
  },
  {
    name: "Richard Terzo",
    title: "Loan Officer",
    nmls: "1017874",
    office: "(904) 735-1895",
    cell: "(843) 503-3023",
    email: "RTerzo@cfmtg.com",
  },
  {
    name: "Eddie Cardenas",
    title: "Loan Officer",
    nmls: "519576",
    office: "",
    cell: "(760) 886-5555",
    email: "ecardenas@cfmtg.com",
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
    name: "Jose Gomez",
    title: "Branch Manager",
    nmls: "1068401",
    office: "",
    cell: "(305) 282-6416",
    email: "jose@cfmtg.com",
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
    name: "Kate Cline",
    title: "Loan Officer",
    nmls: "213052",
    office: "",
    cell: "(210) 912-9588",
    email: "kcline@mcmtg.com",
  },
  {
    name: "Jessica Rose Elliott",
    title: "Loan Officer",
    nmls: "2508656",
    office: "(205) 471-7787",
    cell: "(404) 831-8235",
    email: "jelliott@cfmtg.com",
  },
  {
    name: "Elijah Aldinger",
    title: "SVP Branch Manager",
    nmls: "244976",
    office: "(904) 735-1895",
    cell: "(714) 914-3661",
    email: "Elijah@cfmtg.com",
  },
  {
    name: "Lance Tulacro",
    title: "Branch Manager",
    nmls: "284500",
    office: "",
    cell: "(618) 799-8421",
    email: "LTulacro@cfmtg.com",
  },
  {
    name: "Brandon Goodwin",
    title: "Branch Manager",
    nmls: "1141201",
    office: "",
    cell: "(623) 910-5292",
    email: "BG@cfmtg.com",
  },
  {
    name: "Edgar Ornes",
    title: "Loan Officer",
    nmls: "2641553",
    office: "",
    cell: "(480) 799-8550",
    email: "EOrnes@cfmtg.com",
  },
  {
    name: "Beth Johnson",
    title: "Loan Partner",
    nmls: "872376",
    office: "",
    cell: "(330) 592-9080",
    email: "Beth.Johnson@armormortgage.com",
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
    name: "Chris Manocke",
    title: "Loan Officer",
    nmls: "2093336",
    office: "",
    cell: "(269) 743-8708",
    email: "chrism@cfmtg.com",
  },
  {
    name: "Robert Krowel",
    title: "Branch Sales Manager",
    nmls: "213875",
    office: "(904) 735-1895",
    cell: "(951) 756-3748",
    email: "RKrowel@cfmtg.com",
  },
  {
    name: "John Blackburn",
    title: "Loan Officer",
    nmls: "365287",
    office: "",
    cell: "8149371240",
    email: "jblackburn@cfmtg.com",
  },
  {
    name: "Amy Jacoby",
    title: "Loan Officer",
    nmls: "674942",
    office: "",
    cell: "(937) 672-0994",
    email: "AJacoby@cfmtg.com",
  },
  {
    name: "Maricarmen Aponte",
    title: "Loan Officer",
    nmls: "1874292",
    office: "(904) 735-1895",
    cell: "(689) 309-9009",
    email: "MAponte@cfmtg.com",
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
    name: "Adam Jaroszewski",
    title: "Loan Officer",
    nmls: "1192000",
    office: "",
    cell: "(954) 348-5157",
    email: "Adamj@cfmtg.com",
  },
  {
    name: "Steve Layne",
    title: "Branch Operations Manager",
    nmls: "1177959",
    office: "",
    cell: "(734) 363-1594",
    email: "slayne@youfihomeloans.com",
  },
  {
    name: "AJ Frandanisa",
    title: "Loan Officer",
    nmls: "2349986",
    office: "(253) 200-3255",
    cell: "(253) 439-7357",
    email: "AnthonyF@futurefirstmtg.com",
  },
  {
    name: "Rhett Grant",
    title: "Loan Officer",
    nmls: "2456098",
    office: "",
    cell: "(478) 447-0431",
    email: "rgrant@cfmtg.com",
  },
  {
    name: "Rick Strubel",
    title: "Senior Loan Officer",
    nmls: "91114",
    office: "",
    cell: "(503) 804-6012",
    email: "RStrubel@cfmtg.com",
  },
  {
    name: "Wanda Leung",
    title: "Loan Officer",
    nmls: "2669730",
    office: "",
    cell: "(626) 543-3360",
    email: "wleung@cfmtg.com",
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
    name: "David Trbovich",
    title: "Senior Loan Officer",
    nmls: "1332192",
    office: "(904) 735-1895",
    cell: "(480) 776-7649",
    email: "DavidT@cfmtg.com",
  },
  {
    name: "Sandra Diaz",
    title: "Loan Officer",
    nmls: "1489556",
    office: "",
    cell: "(407) 692-4369",
    email: "SDiaz@cfmtg.com",
  },
  {
    name: "Geremy Reese",
    title: "Loan Officer",
    nmls: "2025788",
    office: "",
    cell: "(662) 871-8005",
    email: "GReese@cfmtg.com",
  },
  {
    name: "Bill Beresford",
    title: "Loan Officer",
    nmls: "1852468",
    office: "",
    cell: "(303) 944-5060",
    email: "WBeresford@cfmtg.com",
  },
  {
    name: "Linda Mokeski",
    title: "Loan Officer",
    nmls: "981590",
    office: "",
    cell: "(702) 902-6917",
    email: "lmokeski@cfmtg.com",
  },
  {
    name: "Kendall Stevens",
    title: "Sr. Loan Officer",
    nmls: "2384354",
    office: "",
    cell: "(864) 529-7422",
    email: "KStevens@cfmtg.com",
  },
  {
    name: "Jennifer Gonzalez",
    title: "TheCondoLendingTeam | Senior Loan Officer",
    nmls: "410251",
    office: "(904) 735-1895",
    cell: "(786) 879-0383",
    email: "jennifer@cfmtg.com",
  },
  {
    name: "Jim Stephens",
    title: "Loan Officer",
    nmls: "781588",
    office: "",
    cell: "(623) 663-0766",
    email: "JStephens@cfmtg.com",
  },
  {
    name: "Tom Scott",
    title: "Loan Officer",
    nmls: "989514",
    office: "",
    cell: "(817) 905-7397",
    email: "TScott@cfmtg.com",
  },
  {
    name: "Javier Rodriguez",
    title: "Loan Officer",
    nmls: "1597733",
    office: "",
    cell: "(954) 815-4937",
    email: "JavierR@cfmtg.com",
  },
  {
    name: "Ena Ajdimovski",
    title: "Loan Officer",
    nmls: "1789374",
    office: "",
    cell: "(515) 418-7336",
    email: "ena@cfmtg.com",
  },
  {
    name: "Reggie Sequeira",
    title: "Loan Officer",
    nmls: "1824815",
    office: "(904) 735-1895",
    cell: "(714) 206-5504",
    email: "rsequeira@cfmtg.com",
  },
  {
    name: "Jorge Vasallo",
    title: "Loan Officer",
    nmls: "2629075",
    office: "",
    cell: "(786) 356-9508",
    email: "jorge@constantlending.net",
  },
  {
    name: "Ruben Romero",
    title: "Branch Manager",
    nmls: "263947",
    office: "(904) 735-1895",
    cell: "(818) 253-5795",
    email: "RRomero@cfmtg.com",
  },
  {
    name: "Joe Omahen",
    title: "Loan Officer",
    nmls: "273689",
    office: "",
    cell: "858-336-7486",
    email: "jomahen@cfmtg.com",
  },
  {
    name: "Lucia Hreso",
    title: "Loan Officer Assistant",
    nmls: "2507647",
    office: "(904) 735-1895",
    cell: "(719) 231-2270",
    email: "Lucia@cfmtg.com",
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
    name: "Nagib Aboud",
    title: "Loan Officer",
    nmls: "1014227",
    office: "",
    cell: "(305) 684-5723",
    email: "NAboud@cfmtg.com",
  },
  {
    name: "Toddre Coleman",
    title: "Senior Loan Officer",
    nmls: "2156637",
    office: "",
    cell: "(678) 429-7792",
    email: "TColeman@cfmtg.com",
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
    name: "Chuck Clapper",
    title: "Branch Manager",
    nmls: "376378",
    office: "(904) 735-1895",
    cell: "(240) 602-5511",
    email: "CClapper@cfmtg.com",
  },
  {
    name: "Shusil Regmi",
    title: "Loan Officer Assistant",
    nmls: "173855",
    office: "(513) 399-6474",
    cell: "(234) 303-9541",
    email: "sregmi@cfmtg.com",
  },
  {
    name: "Kelsie Archer",
    title: "Loan Officer",
    nmls: "2698305",
    office: "",
    cell: "(512) 264-4524",
    email: "karcher@cfmtg.com",
  },
  {
    name: "Jimmar Harris",
    title: "Loan Officer",
    nmls: "2412613",
    office: "",
    cell: "(608) 575-7944",
    email: "JHarris@cfmtg.com",
  },
  {
    name: "Zulema Ruiz",
    title: "Branch Manager",
    nmls: "387854",
    office: "(904) 735-1895",
    cell: "(305) 815-2003",
    email: "zulema@constantlending.net",
  },
  {
    name: "Robbie Ballance",
    title: "Senior Mortgage Advisor",
    nmls: "70392",
    office: "",
    cell: "(919) 524-6651",
    email: "RBallance@cfmtg.com",
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
    name: "Joe Girmonde",
    title: "Branch Manager",
    nmls: "845225",
    office: "",
    cell: "(480) 734-5094",
    email: "JG@cfmtg.com",
  },
  {
    name: "Cathy Lilly",
    title: "Senior Reverse Mortgage Advisor",
    nmls: "475808",
    office: "",
    cell: "(951) 385-9517",
    email: "cathy@cfmtg.com",
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
    name: "Steve Deeds",
    title: "Loan Officer",
    nmls: "121238",
    office: "(904) 735-1895",
    cell: "(206) 387-3268",
    email: "SDeeds@cfmtg.com",
  },
  {
    name: "Luke Denos",
    title: "Loan Officer",
    nmls: "2809148",
    office: "",
    cell: "(619) 396-0026",
    email: "LDenos@cfmtg.com",
  },
  {
    name: "Michael Fawver",
    title: "Branch Sales Manager",
    nmls: "231994",
    office: "(904) 735-1895",
    cell: "(562) 754-4744",
    email: "MFawver@cfmtg.com",
  },
  {
    name: "Tony Farias",
    title: "Loan Officer",
    nmls: "329077",
    office: "",
    cell: "(954) 695-2039",
    email: "TFarias@cfmtg.com",
  },
  {
    name: "Ralph Maza",
    title: "Loan Officer",
    nmls: "1210315",
    office: "(904) 735-1895",
    cell: "(808) 855-8685",
    email: "rmaza@cfmtg.com",
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
    name: "Luke St. Clair",
    title: "Loan Officer",
    nmls: "1577959",
    office: "",
    cell: "(765) 278-4711",
    email: "LClair@cfmtg.com",
  },
  {
    name: "Jenn Wagner",
    title: "Loan Officer",
    nmls: "2075644",
    office: "(904) 735-1895",
    cell: "(858) 945-7152",
    email: "jenn.wagner@cfmtg.com",
  },
  {
    name: "Brian Coutu",
    title: "Branch Sales Manager",
    nmls: "1200844",
    office: "",
    cell: "(954) 330-3793",
    email: "BCoutu@cfmtg.com",
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
    name: "Ben Rife",
    title: "Loan Officer",
    nmls: "1972547",
    office: "",
    cell: "(937) 212-1957",
    email: "BRife@cfmtg.com",
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
    name: "Edwin Rivera",
    title: "Branch Manager",
    nmls: "945540",
    office: "",
    cell: "(407) 222-0626",
    email: "edwin.rivera@cfmtg.com",
  },
  {
    name: "Tom Colburn",
    title: "Loan Officer",
    nmls: "339415",
    office: "",
    cell: "(312) 799-9375",
    email: "TColburn@cfmtg.com",
  },
];

const uniqueRoles = Array.from(
  new Set(loanOfficersData.map((b) => b.title)),
).sort();

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Find() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(15);

  const filtered = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const seen = new Set<string>();
    return loanOfficersData.filter((b) => {
      const key = `${b.name}-${b.email}`;
      if (seen.has(key)) return false;
      seen.add(key);
      const matchSearch =
        !term ||
        b.name.toLowerCase().includes(term) ||
        b.title.toLowerCase().includes(term) ||
        b.email.toLowerCase().includes(term) ||
        (b.cell || "").includes(term) ||
        (b.office || "").includes(term);
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
            <Users className="w-4 h-4" /> Find Your Loan Officer
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Search by Location
          </h1>
          <p className="text-xl text-green-200 mb-3">
            Search by loan officer's name
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter Name"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(15);
                }}
                className="w-full pl-12 pr-10 py-4 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
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
                  {loanOfficersData.length}+
                </p>
                <p className="text-sm text-gray-600">Loan Officers</p>
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

        {/* Filters */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              Filter by Role:
            </span>
            {uniqueRoles.slice(0, 10).map((role) => (
              <button
                key={role}
                onClick={() => toggleFilter(role)}
                className={`px-3 py-1 text-xs rounded-full border transition ${
                  activeFilters.includes(role)
                    ? "bg-[#460647] text-white border-[#460647]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#460647]"
                }`}
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
          loan officers
        </p>

        {/* Loan Officer List - 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visible.map((officer, idx) => (
            <div
              key={`${officer.name}-${idx}`}
              className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <Avatar name={officer.name} />

              {/* Info */}
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="font-bold text-[#1a3a6b] text-base uppercase tracking-wide leading-tight">
                  {officer.name}
                </h3>
                <p className="text-sm text-gray-700 font-medium mt-0.5">
                  {officer.title} |{" "}
                  <span className="font-normal text-gray-600">
                    NMLS# {officer.nmls}
                  </span>
                </p>

                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  {(officer.office || officer.cell) && (
                    <p>
                      {officer.office && (
                        <>
                          <span className="font-bold text-gray-900">O:</span>{" "}
                          {officer.office}{" "}
                        </>
                      )}
                      {officer.cell && (
                        <>
                          <span className="font-bold text-gray-900">C:</span>{" "}
                          {officer.cell}
                        </>
                      )}
                    </p>
                  )}
                  <p className="text-gray-600 break-all">{officer.email}</p>
                </div>

                <div className="flex gap-2 mt-3">
                  <a
                    href={`mailto:${officer.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-[#460647] rounded-lg hover:bg-[#004a25] transition"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                  {officer.cell && (
                    <a
                      href={`tel:${officer.cell.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#460647] bg-green-50 rounded-lg hover:bg-green-100 transition"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-xl">
            <p className="text-gray-500">No loan officers found.</p>
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
            Not sure which loan officer to contact?
          </h3>
          <p className="text-green-200 mb-6 text-sm">
            Reach our main line and we'll connect you with the right mortgage
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
