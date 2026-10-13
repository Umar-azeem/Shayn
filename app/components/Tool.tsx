"use client";
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import type { ReactNode, CSSProperties } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Calculator,
  Home,
  TrendingUp,
  PieChart,
  BarChart3,
  Activity,
  Clock,
  MapPin,
  Search,
  Layers,
  DollarSign,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
// import ScheduleCallModal from "./ScheduleCallModal";
// import QuickContactModal from "./QuickContactModal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
);

/* ---------- theme ---------- */
const BLUE = "#460647";
const DEEP = "#0B4A75";
const SKY = "#5DB0E6";
const GOLD = "#F5B942";
const SLATE = "#7C9CB5";
const fmt = (n: number) => "$" + Math.round(n).toLocaleString();
const short = (val: number | string) => {
  const v = Number(val);
  return "$" + (Math.abs(v) >= 1000 ? (v / 1000).toFixed(0) + "k" : v);
};
const ring = { "--tw-ring-color": BLUE } as CSSProperties;
const anim = { duration: 1500, easing: "easeOutQuart" as const };

const Icon = ({ src, size = 20 }: { src: string; size?: number }) => (
  <img src={src} width={size} height={size} alt="" />
);
const icons: Record<string, string> = {
  facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
  instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
  linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
  youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
};

/* ---------- illustrative data (replace with a live feed when you have one) ---------- */
const propertyData: Record<string, { baseValue: number; growth: number }> = {
  "New York": { baseValue: 650000, growth: 0.08 },
  "Los Angeles": { baseValue: 580000, growth: 0.07 },
  Chicago: { baseValue: 320000, growth: 0.05 },
  Houston: { baseValue: 280000, growth: 0.06 },
  Phoenix: { baseValue: 350000, growth: 0.09 },
  Philadelphia: { baseValue: 270000, growth: 0.04 },
  "San Antonio": { baseValue: 250000, growth: 0.07 },
  "San Diego": { baseValue: 620000, growth: 0.08 },
  Dallas: { baseValue: 310000, growth: 0.07 },
  "San Jose": { baseValue: 750000, growth: 0.06 },
};
const HIGH = ["California", "New York", "Massachusetts", "Washington"];
const MID = ["Texas", "Florida", "Arizona", "North Carolina"];
const LOW = ["Ohio", "Pennsylvania", "Michigan", "Indiana"];

const TF: Record<string, [number, number]> = {
  "3M": [3, 1],
  "6M": [6, 1],
  "1Y": [12, 1],
  "5Y": [20, 3],
  "10Y": [20, 6],
}; // [points, months per step]
const buildMarket = (tf: string) => {
  const [n, step] = TF[tf];
  const now = new Date();
  return Array.from({ length: n }, (_, k) => {
    const back = (n - 1 - k) * step;
    const d = new Date(now.getFullYear(), now.getMonth() - back, 1);
    return {
      label: d.toLocaleDateString(undefined, {
        month: "short",
        year: step > 1 ? "numeric" : "2-digit",
      }),
      short: d.toLocaleDateString(undefined, { month: "short" }),
      price: Math.round(
        362450 * Math.pow(1.0035, -back) * (1 + 0.012 * Math.sin(back / 2.3)),
      ),
      rate: +(6.5 - 0.35 * Math.sin(back / 5) + back * 0.004).toFixed(2),
    };
  });
};

const payment = (P: number, rate: number, years: number) => {
  const r = rate / 100 / 12,
    n = years * 12;
  if (P <= 0) return 0;
  return r > 0
    ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    : P / n;
};

/* ---------- motion helpers ---------- */
const useCountUp = (target: number, dur = 900) => {
  const [v, setV] = useState(0);
  const from = useRef(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now(),
      a = from.current;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const cur = a + (target - a) * (1 - Math.pow(1 - p, 3));
      from.current = cur;
      setV(cur);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur]);
  return v;
};

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
};

// children may be a function(seen) so charts only mount (and animate) once scrolled into view
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode | ((seen: boolean) => ReactNode);
  delay?: number;
  className?: string;
}) => {
  const [ref, seen] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? "none" : "translateY(28px)",
        transition: `all .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {typeof children === "function" ? children(seen) : children}
    </div>
  );
};

const Tilt = ({
  children,
  max = 8,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateZ(8px)`;
  };
  const leave = () => {
    ref.current!.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={className}
      style={{
        transition: "transform .25s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

/* ---------- small UI pieces ---------- */
const Styles = () => (
  <style>{`
    @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
    .orb{position:absolute;border-radius:9999px;filter:blur(46px);animation:floaty 8s ease-in-out infinite}
    .sk-side{position:absolute;top:0;left:100%;width:10px;height:100%;background:${DEEP};transform-origin:top left;transform:skewY(-45deg)}
    .sk-top{position:absolute;bottom:100%;left:0;width:100%;height:10px;background:${SKY};transform-origin:bottom left;transform:skewX(-45deg)}
    @media (prefers-reduced-motion:reduce){.orb{animation:none}}
  `}</style>
);

const Card = ({
  icon: I,
  title,
  right,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white rounded-2xl p-6 border transition-shadow hover:shadow-xl ${className}`}
    style={{
      borderColor: "#DCEBF6",
      boxShadow: "0 10px 30px -14px rgba(20,112,175,.25)",
    }}
  >
    <div className="flex items-center justify-between mb-5 gap-3">
      <div className="flex items-center gap-3">
        <span className="p-2 rounded-lg" style={{ background: "#E8F3FB" }}>
          <I className="h-5 w-5" style={{ color: BLUE }} />
        </span>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      {right}
    </div>
    {children}
  </div>
);

const StatCard = ({
  label,
  value,
  format,
  delta,
  good,
  icon: I,
}: {
  label: string;
  value: number;
  format: (v: number) => ReactNode;
  delta: string;
  good?: boolean;
  icon: LucideIcon;
}) => {
  const v = useCountUp(value);
  return (
    <Tilt max={10}>
      <div
        className="bg-white rounded-2xl p-6 border"
        style={{
          borderColor: "#DCEBF6",
          boxShadow: "0 18px 30px -18px rgba(20,112,175,.45)",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{format(v)}</p>
            <p
              className={`text-sm ${good ? "text-green-600" : "text-red-500"}`}
            >
              {delta}
            </p>
          </div>
          <div
            className="p-3 rounded-xl"
            style={{ background: "#E8F3FB", transform: "translateZ(30px)" }}
          >
            <I className="h-6 w-6" style={{ color: BLUE }} />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Slider = ({
  label,
  value,
  set,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="font-bold" style={{ color: BLUE }}>
        {format(value)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => set(Number(e.target.value))}
      className="w-full"
      style={{ accentColor: BLUE }}
    />
  </div>
);

// 3D-look skyline: each bar is a box with front, side and top faces that grow when scrolled into view
const Skyline3D = ({ data }: { data: ReturnType<typeof buildMarket> }) => {
  const [ref, seen] = useReveal();
  const vals = data.map((d) => d.price);
  const min = Math.min(...vals),
    max = Math.max(...vals);
  return (
    <div
      ref={ref}
      className="h-72 flex items-end justify-center gap-3 sm:gap-4 pb-8 pr-4"
    >
      {data.map((d, i) => {
        const h = 25 + ((d.price - min) / (max - min || 1)) * 75;
        return (
          <div
            key={i}
            className="group relative w-5 sm:w-7 h-56 flex items-end"
          >
            <div
              className="relative w-full"
              style={{
                height: seen ? `${h}%` : "0%",
                transition: `height 1.1s cubic-bezier(.2,.8,.2,1) ${i * 90}ms`,
                background: `linear-gradient(${BLUE},${DEEP})`,
              }}
            >
              <span className="sk-side" />
              <span className="sk-top" />
              <span
                className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs font-semibold bg-white shadow rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10"
                style={{ color: BLUE }}
              >
                {fmt(d.price)}
              </span>
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
              {d.short}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ---------- main ---------- */
const Tool = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const [price, setPrice] = useState(400000);
  const [down, setDown] = useState(80000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [annualTax, setAnnualTax] = useState(5200);
  const [annualIns, setAnnualIns] = useState(1000);
  const [tf, setTf] = useState<string>("1Y");

  const [address, setAddress] = useState("");
  const [estimate, setEstimate] = useState<{
    value: number;
    growth: number;
  } | null>(null);
  const [status, setStatus] = useState<{
    t: "ok" | "warn" | "err";
    m: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const dp = Math.min(down, price);

  const calc = useMemo(() => {
    const P = Math.max(0, price - dp),
      r = rate / 100 / 12,
      n = term * 12;
    const pi = payment(P, rate, term);
    const tax = annualTax / 12,
      ins = annualIns / 12;
    const pmi = price > 0 && dp / price < 0.2 ? (P * 0.005) / 12 : 0;
    let bal = P,
      ci = 0;
    const years = [0],
      balance = [Math.round(P)],
      interest = [0];
    for (let m = 1; m <= n; m++) {
      const i = bal * r;
      ci += i;
      bal = Math.max(0, bal - (pi - i));
      if (m % 12 === 0) {
        years.push(m / 12);
        balance.push(Math.round(bal));
        interest.push(Math.round(ci));
      }
    }
    return {
      P,
      pi,
      tax,
      ins,
      pmi,
      total: pi + tax + ins + pmi,
      years,
      balance,
      interest,
      totalInterest: ci,
    };
  }, [price, dp, rate, term, annualTax, annualIns]);

  const terms = useMemo(
    () =>
      [15, 20, 30].map((y) => {
        const pay = payment(calc.P, rate, y);
        return { y, pay, interest: pay * y * 12 - calc.P };
      }),
    [calc.P, rate],
  );

  const market = useMemo(() => buildMarket(tf), [tf]);
  const yearMarket = useMemo(() => buildMarket("1Y"), []);
  const totalAnim = useCountUp(calc.total);
  const estAnim = useCountUp(estimate?.value || 0);

  const history = useMemo(() => {
    if (!estimate) return null;
    const y = new Date().getFullYear();
    return Array.from({ length: 8 }, (_, i) => ({
      year: String(y - 7 + i),
      value: Math.round(estimate.value / Math.pow(1 + estimate.growth, 7 - i)),
    }));
  }, [estimate]);

  const handleEstimate = useCallback(async () => {
    if (address.trim().length < 3) {
      setStatus({ t: "err", m: "Enter a city, ZIP code or full address." });
      return;
    }
    setLoading(true);
    setStatus(null);
    let base = 320000,
      growth = 0.05;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1&limit=1`,
      );
      const data = (await res.json()) as Array<{
        address?: Record<string, string>;
      }>;
      if (data[0]) {
        const a = data[0].address || {};
        const city = a.city || a.town || a.village || a.county || "";
        const key = Object.keys(propertyData).find((k) =>
          city.toLowerCase().includes(k.toLowerCase()),
        );
        if (key) ({ baseValue: base, growth } = propertyData[key]);
        else if (HIGH.includes(a.state)) base = 500000;
        else if (MID.includes(a.state)) base = 350000;
        else if (LOW.includes(a.state)) base = 250000;
        setStatus({
          t: "ok",
          m: `Location found: ${[city, a.state].filter(Boolean).join(", ")}`,
        });
      } else
        setStatus({
          t: "warn",
          m: "Location not found. Using a national average.",
        });
    } catch {
      setStatus({
        t: "warn",
        m: "Location service unavailable. Using a national average.",
      });
    }
    const h = [...address.toLowerCase()].reduce(
      (s, c) => (s * 31 + c.charCodeAt(0)) % 1000,
      7,
    );
    setEstimate({
      value: Math.round(base * (0.92 + (h / 1000) * 0.16)),
      growth,
    });
    setLoading(false);
  }, [address]);

  const getMyLocation = useCallback(() => {
    if (!navigator.geolocation)
      return setStatus({
        t: "err",
        m: "Your browser doesn't support location.",
      });
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const r = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json&addressdetails=1`,
          );
          const d = (await r.json()) as { address?: Record<string, string> };
          const a = d.address || {};
          setAddress(
            `${a.city || a.town || a.village || ""}, ${a.state || ""}`.trim(),
          );
        } catch {
          setStatus({ t: "err", m: "Couldn't look up your location." });
        }
      },
      () =>
        setStatus({
          t: "err",
          m: "Location blocked. Enter your address instead.",
        }),
    );
  }, []);

  /* chart configs */
  const donut = {
    labels: ["Principal & interest", "Property tax", "Insurance", "PMI"],
    datasets: [
      {
        data: [calc.pi, calc.tax, calc.ins, calc.pmi].map((v) => Math.round(v)),
        backgroundColor: [BLUE, SKY, GOLD, SLATE],
        borderWidth: 3,
        borderColor: "#fff",
        hoverOffset: 14,
      },
    ],
  };
  const amort = {
    labels: calc.years.map((y) => `Yr ${y}`),
    datasets: [
      {
        label: "Loan balance",
        data: calc.balance,
        borderColor: BLUE,
        backgroundColor: "rgba(20,112,175,.18)",
        fill: true,
        tension: 0.35,
        pointRadius: 0,
      },
      {
        label: "Interest paid",
        data: calc.interest,
        borderColor: GOLD,
        backgroundColor: "rgba(245,185,66,.12)",
        fill: true,
        tension: 0.35,
        pointRadius: 0,
      },
    ],
  };
  const termBar = {
    labels: terms.map((t) => `${t.y} yr`),
    datasets: [
      {
        label: "Total interest",
        data: terms.map((t) => Math.round(t.interest)),
        backgroundColor: terms.map((t) => (t.y === term ? BLUE : "#A9D3F0")),
        borderRadius: 12,
      },
    ],
  };
  const trend = {
    labels: market.map((d) => d.label),
    datasets: [
      {
        label: "Average home price",
        data: market.map((d) => d.price),
        borderColor: BLUE,
        backgroundColor: "rgba(20,112,175,.15)",
        fill: true,
        tension: 0.4,
        yAxisID: "y",
        pointRadius: 3,
      },
      {
        label: "Mortgage rate (%)",
        data: market.map((d) => d.rate),
        borderColor: GOLD,
        borderDash: [6, 5],
        tension: 0.4,
        yAxisID: "y1",
        pointRadius: 2,
      },
    ],
  };
  const noGrid = { grid: { display: false } };

  const statusColor: Record<string, string> = {
    ok: "#15803d",
    warn: "#b45309",
    err: "#b91c1c",
  };

  return (
    <div className="min-h-screen" style={{ background: "#F2F8FC" }}>
      <Styles />
      <div className="max-w-7xl mx-auto">
        {/* ---------- HERO ---------- */}

        <div className="px-4 sm:px-0">
          <div className="text-center mb-10 mt-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Mortgage & Real Estate Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Move the sliders and watch your payment, balance and the market
              react in real time.
            </p>
          </div>

          {/* ---------- STATS ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard
              label="Average Home Price"
              value={362450}
              format={fmt}
              delta="↑ 4.2% this year"
              good
              icon={Home}
            />
            <StatCard
              label="Average Interest Rate"
              value={6.5}
              format={(v) => v.toFixed(2) + "%"}
              delta="↑ 0.25% this month"
              good
              icon={TrendingUp}
            />
            <StatCard
              label="Active Listings"
              value={1247}
              format={(v) => Math.round(v).toLocaleString()}
              delta="↑ 8% from last month"
              good
              icon={BarChart3}
            />
            <StatCard
              label="Days on Market"
              value={32}
              format={(v) => Math.round(v)}
              delta="↓ 5 days from last month"
              good
              icon={Clock}
            />
          </div>

          {/* ---------- CALCULATOR + DONUT ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Reveal>
              <Card
                icon={Calculator}
                title="Mortgage Calculator"
                className="h-full"
              >
                <div className="space-y-5">
                  <Slider
                    label="Home price"
                    value={price}
                    set={setPrice}
                    min={100000}
                    max={2000000}
                    step={5000}
                    format={fmt}
                  />
                  <Slider
                    label={`Down payment (${price ? Math.round((dp / price) * 100) : 0}%)`}
                    value={dp}
                    set={setDown}
                    min={0}
                    max={price}
                    step={1000}
                    format={fmt}
                  />
                  <Slider
                    label="Interest rate"
                    value={rate}
                    set={setRate}
                    min={2}
                    max={10}
                    step={0.05}
                    format={(v) => v.toFixed(2) + "%"}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Loan term
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {[15, 20, 30].map((y) => (
                        <button
                          key={y}
                          onClick={() => setTerm(y)}
                          className="py-2 rounded-lg font-semibold border transition"
                          style={
                            term === y
                              ? {
                                  background: BLUE,
                                  color: "#fff",
                                  borderColor: BLUE,
                                }
                              : {
                                  background: "#fff",
                                  color: DEEP,
                                  borderColor: "#BBD9EE",
                                }
                          }
                        >
                          {y} years
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {(
                      [
                        ["Annual property tax", annualTax, setAnnualTax],
                        ["Annual insurance", annualIns, setAnnualIns],
                      ] as [string, number, (n: number) => void][]
                    ).map(([l, v, s]) => (
                      <div key={l}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {l}
                        </label>
                        <input
                          type="number"
                          value={v}
                          onChange={(e) => s(Number(e.target.value))}
                          className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                          style={ring}
                        />
                      </div>
                    ))}
                  </div>
                  {calc.pmi > 0 && (
                    <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                      Down payment is under 20%, so an estimated PMI of{" "}
                      {fmt(calc.pmi)}/mo is included.
                    </p>
                  )}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              {(seen) => (
                <Card
                  icon={PieChart}
                  title="Payment Breakdown"
                  className="h-full"
                >
                  <div className="relative h-64">
                    {seen && (
                      <Doughnut
                        data={donut}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          cutout: "68%",
                          animation: {
                            ...anim,
                            animateRotate: true,
                            animateScale: true,
                          },
                          plugins: {
                            legend: { display: false },
                            tooltip: {
                              callbacks: {
                                label: (c) =>
                                  ` ${c.label}: ${fmt(c.parsed)}/mo`,
                              },
                            },
                          },
                        }}
                      />
                    )}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-xs text-gray-500">
                        Monthly payment
                      </span>
                      <span
                        className="text-3xl font-bold"
                        style={{ color: BLUE }}
                      >
                        {fmt(totalAnim)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                    {donut.labels.map((l, i) => (
                      <div key={l} className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: donut.datasets[0].backgroundColor[i],
                          }}
                        />
                        <span>
                          {l}: {fmt(donut.datasets[0].data[i])}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </Reveal>
          </div>

          {/* ---------- AMORTIZATION + TERM COMPARE ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Reveal>
              {(seen) => (
                <Card
                  icon={Activity}
                  title="Loan Balance vs Interest"
                  className="h-full"
                >
                  <div className="h-64">
                    {seen && (
                      <Line
                        data={amort}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          animation: anim,
                          interaction: { mode: "index", intersect: false },
                          plugins: {
                            legend: { position: "bottom" },
                            tooltip: {
                              callbacks: {
                                label: (c) =>
                                  ` ${c.dataset.label}: ${fmt(c.parsed.y ?? 0)}`,
                              },
                            },
                          },
                          scales: {
                            y: { ticks: { callback: short } },
                            x: { ...noGrid, ticks: { maxTicksLimit: 8 } },
                          },
                        }}
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Over {term} years you'd pay{" "}
                    <b style={{ color: BLUE }}>{fmt(calc.totalInterest)}</b> in
                    interest on a {fmt(calc.P)} loan.
                  </p>
                </Card>
              )}
            </Reveal>

            <Reveal delay={120}>
              {(seen) => (
                <Card
                  icon={Layers}
                  title="15 vs 20 vs 30 Year"
                  className="h-full"
                >
                  <div className="h-64">
                    {seen && (
                      <Bar
                        data={termBar}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          animation: {
                            ...anim,
                            delay: (c) => c.dataIndex * 150,
                          },
                          plugins: {
                            legend: { display: false },
                            tooltip: {
                              callbacks: {
                                label: (c) =>
                                  ` Total interest: ${fmt(c.parsed.y ?? 0)}`,
                                afterLabel: (c) =>
                                  ` Monthly P&I: ${fmt(terms[c.dataIndex].pay)}`,
                              },
                            },
                          },
                          scales: {
                            y: { ticks: { callback: short } },
                            x: noGrid,
                          },
                        }}
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Shorter terms cost more each month but save a lot of
                    interest. Your current pick is highlighted.
                  </p>
                </Card>
              )}
            </Reveal>
          </div>

          {/* ---------- MARKET TRENDS ---------- */}
          <Reveal className="mb-8">
            {(seen) => (
              <Card
                icon={TrendingUp}
                title="Market Trends"
                right={
                  <div
                    className="flex gap-1 p-1 rounded-xl"
                    style={{ background: "#E8F3FB" }}
                  >
                    {Object.keys(TF).map((k) => (
                      <button
                        key={k}
                        onClick={() => setTf(k)}
                        className="px-3 py-1 rounded-lg text-sm font-semibold transition"
                        style={
                          tf === k
                            ? { background: BLUE, color: "#fff" }
                            : { color: DEEP }
                        }
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                }
              >
                <div className="h-72">
                  {seen && (
                    <Line
                      data={trend}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: anim,
                        interaction: { mode: "index", intersect: false },
                        plugins: { legend: { position: "bottom" } },
                        scales: {
                          y: { position: "left", ticks: { callback: short } },
                          y1: {
                            position: "right",
                            grid: { display: false },
                            ticks: { callback: (v) => v + "%" },
                          },
                          x: { ...noGrid, ticks: { maxTicksLimit: 10 } },
                        },
                      }}
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Illustrative data. Connect a live housing and rate feed before
                  publishing real market numbers.
                </p>
              </Card>
            )}
          </Reveal>

          {/* ---------- 3D SKYLINE + ESTIMATOR ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <Reveal>
              <Tilt max={5} className="h-full">
                <Card
                  icon={BarChart3}
                  title="Price Skyline, last 12 months"
                  className="h-full"
                >
                  <Skyline3D data={yearMarket} />
                  <p className="text-xs text-gray-500">
                    Hover a tower to see the average price for that month.
                  </p>
                </Card>
              </Tilt>
            </Reveal>

            <Reveal delay={120}>
              {(seen) => (
                <Card
                  icon={Home}
                  title="Home Value Estimator"
                  className="h-full"
                >
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleEstimate()}
                        placeholder="City, ZIP or full address"
                        className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                        style={ring}
                      />
                      <button
                        onClick={getMyLocation}
                        className="px-3 py-2 rounded-lg hover:brightness-95 transition"
                        style={{ background: "#E8F3FB" }}
                        title="Use my location"
                        aria-label="Use my location"
                      >
                        <MapPin className="h-5 w-5" style={{ color: BLUE }} />
                      </button>
                    </div>
                    <button
                      onClick={handleEstimate}
                      disabled={loading}
                      className="w-full text-white py-2.5 rounded-lg font-semibold transition hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-2"
                      style={{ background: BLUE }}
                    >
                      {loading ? (
                        "Estimating…"
                      ) : (
                        <>
                          <Search className="h-4 w-4" /> Estimate home value
                        </>
                      )}
                    </button>
                    {status && (
                      <div
                        className="text-sm p-2 rounded-lg bg-gray-50"
                        style={{ color: statusColor[status.t] }}
                      >
                        {status.m}
                      </div>
                    )}
                    {estimate && (
                      <div
                        className="rounded-xl p-4"
                        style={{ background: "#E8F3FB" }}
                      >
                        <p className="text-sm text-gray-600">
                          Estimated home value
                        </p>
                        <p
                          className="text-3xl font-bold"
                          style={{ color: BLUE }}
                        >
                          {fmt(estAnim)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Illustrative estimate from regional averages. It isn't
                          an appraisal.
                        </p>
                      </div>
                    )}
                    {history && seen && (
                      <div className="h-44">
                        <Bar
                          key={estimate?.value}
                          data={{
                            labels: history.map((h) => h.year),
                            datasets: [
                              {
                                label: "Value history",
                                data: history.map((h) => h.value),
                                backgroundColor: history.map((_, i) =>
                                  i === history.length - 1 ? BLUE : "#A9D3F0",
                                ),
                                borderRadius: 8,
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            animation: {
                              ...anim,
                              delay: (c) => c.dataIndex * 90,
                            },
                            plugins: { legend: { display: false } },
                            scales: {
                              y: { ticks: { callback: short } },
                              x: noGrid,
                            },
                          }}
                        />
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </Reveal>
          </div>

          {/* ---------- LEARN ---------- */}
          <Reveal>
            <Card icon={DollarSign} title="Learn From Experience">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  [
                    "Should I save 20% down?",
                    "20% down avoids PMI, but many loan programs allow much less.",
                  ],
                  [
                    "Fixed vs adjustable rate",
                    "See how each option changes your payment over time, then pick what fits your plans.",
                  ],
                  [
                    "What is PMI?",
                    "Private mortgage insurance protects the lender when you put less than 20% down.",
                  ],
                ].map(([t, p]) => (
                  <Tilt key={t} max={6}>
                    <div
                      className="rounded-xl p-4 h-full"
                      style={{ background: "#E8F3FB" }}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{t}</h3>
                      <p className="text-sm text-gray-600">{p}</p>
                      <a
                        href="/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 font-semibold text-sm hover:underline"
                        style={{ color: BLUE }}
                      >
                        Ask Tristan →
                      </a>
                    </div>
                  </Tilt>
                ))}
              </div>
            </Card>
          </Reveal>

          <div className="mt-8 pb-10 text-center text-sm text-gray-500">
            <p>
              * All estimates are for informational purposes only. Please
              consult a licensed professional for accurate information.
            </p>
            <p className="mt-1">
              Data updated as of {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* <ScheduleCallModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} onConfirm={(d: unknown) => console.log("Appointment confirmed:", d)} /> */}
    </div>
  );
};

export default Tool;
