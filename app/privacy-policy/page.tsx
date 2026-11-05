"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =========================================================
   Scroll reveal hook
========================================================= */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* =========================================================
   Reading progress
========================================================= */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#460647] via-[#7b2a7d] to-[#b26fb4] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* =========================================================
   Section wrapper
========================================================= */
function Section({
  index,
  title,
  subtitle,
  icon,
  children,
}: {
  index: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={`section-${index}`}
      className={[
        "group relative rounded-2xl border border-gray-200 bg-white p-6 md:p-8",
        "shadow-sm hover:shadow-md transition-all duration-500",
        "before:absolute before:left-0 before:top-6 before:bottom-6 before:w-1 before:rounded-full before:bg-[#460647]/0",
        "hover:before:bg-[#460647] before:transition-colors before:duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        "transition-[opacity,transform] duration-700 ease-out",
      ].join(" ")}
      style={{ transitionDelay: `${Math.min(index * 30, 180)}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#460647]/10 text-[#460647] flex items-center justify-center group-hover:bg-[#460647] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-widest text-[#460647]/70 uppercase">
            Section {String(index).padStart(2, "0")}
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="text-[15px] leading-relaxed text-gray-700 space-y-3">
        {children}
      </div>
    </section>
  );
}

/* =========================================================
   Inline SVG icons
========================================================= */
const icons = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  user: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
    </svg>
  ),
  share: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
      <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
    </svg>
  ),
  eyeOff: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  link: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
    </svg>
  ),
  lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  sliders: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
  ),
  child: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3" />
    </svg>
  ),
  refresh: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  ),
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  cookie: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9 4 4 0 0 0 4 4 4 4 0 0 0 4 4 4 4 0 0 0 1 1z" />
      <circle cx="9" cy="9" r=".8" />
      <circle cx="15" cy="11" r=".8" />
      <circle cx="10" cy="15" r=".8" />
      <circle cx="16" cy="16" r=".8" />
    </svg>
  ),
  cookie2: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="9" r=".8" />
      <circle cx="15" cy="10" r=".8" />
      <circle cx="10" cy="15" r=".8" />
    </svg>
  ),
  tag: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12 12 4H4v8l8 8z" />
      <circle cx="8" cy="8" r="1.2" />
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  california: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  ),
  phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9z" />
    </svg>
  ),
  message: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  smsOff: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  ),
};

/* =========================================================
   Page
========================================================= */
export default function PrivacyPolicyPage() {
  const sections = [
    { id: "intro", title: "Privacy Policy Overview", subtitle: "Why we collect data and how we handle it", icon: icons.shield },
    { id: "personal-info", title: "Personal Information", subtitle: "What we collect and how", icon: icons.user },
    { id: "use", title: "How We May Use Personal Information", subtitle: "Business purposes and essential uses", icon: icons.database },
    { id: "disclose", title: "How Personal Information May Be Disclosed", subtitle: "Third parties and joint venture partners", icon: icons.share },
    { id: "dnt", title: "Do Not Track", subtitle: "Our DNT position", icon: icons.eyeOff },
    { id: "third-party", title: "Third-Party Sites", subtitle: "Links, social platforms, and external policies", icon: icons.link },
    { id: "security", title: "Security", subtitle: "NIST controls, Encompass, encryption", icon: icons.lock },
    { id: "choices", title: "Your Choices and Access Rights", subtitle: "Retention, children’s privacy, updates", icon: icons.sliders },
    { id: "contact", title: "Contacting Us", subtitle: "Privacy questions and requests", icon: icons.mail },
    { id: "cookie", title: "Cookie Policy", subtitle: "What cookies are and how we use them", icon: icons.cookie },
    { id: "cookie-types", title: "What Kind of Cookies Do We Use?", subtitle: "Necessary, performance, functional, targeting, social", icon: icons.cookie2 },
    { id: "ccpa", title: "California Consumer Privacy Act (CCPA)", subtitle: "Right to Know, Right to Delete, other rights", icon: icons.california },
    { id: "ccpa-faq", title: "CCPA FAQs", subtitle: "Common questions answered", icon: icons.globe },
    { id: "sms", title: "SMS Privacy Policy", subtitle: "Messaging data and consent", icon: icons.message },
    { id: "sms-terms", title: "SMS Terms of Service", subtitle: "Opt-in, opt-out, carriers, rates", icon: icons.smsOff },
  ];

  return (
    <>
      <ReadingProgress />

      {/* ============ HERO ============ */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#460647] via-[#5a0b5c] to-[#2a032b] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-fuchsia-300/20 blur-3xl animate-pulse [animation-delay:1.2s]" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-white/5 blur-2xl animate-pulse [animation-delay:2s]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide ring-1 ring-white/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Privacy · NMLS #76695
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Privacy{" "}
            <span className="bg-gradient-to-r from-fuchsia-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
            Shayn Carlson — NMLS #76695 · Fairway Independent Mortgage
            Corporation. Your trust is central to what we do. This policy
            explains what we collect, how we use it, and the choices you have.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#section-1"
              className="group inline-flex items-center gap-2 rounded-xl bg-white text-[#460647] px-5 py-3 font-semibold shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Read sections
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <Link
              href="https://www.fairway.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              Fairway Privacy
            </Link>
          </div>
        </div>
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </header>

      {/* ============ BODY ============ */}
      <main className="mx-auto max-w-4xl px-6 pb-24 -mt-2">
        {/* Table of contents */}
        <nav className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6">
          <p className="text-[11px] font-semibold tracking-widest text-[#460647] uppercase mb-3">
            On this page
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#section-${i + 1}`}
                  className="group flex items-baseline gap-2 text-gray-700 hover:text-[#460647] transition-colors"
                >
                  <span className="text-[11px] font-mono text-[#460647]/60 group-hover:text-[#460647]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline decoration-[#460647]/40 underline-offset-4">
                    {s.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6">
          {/* 1 — Overview */}
          <Section index={1} title={sections[0].title} subtitle={sections[0].subtitle} icon={sections[0].icon}>
            <p>
              By continuing to use and browse this site, you agree to Fairway
              Independent Mortgage Corporation&apos;s Privacy Policy.
            </p>
            <p>
              As a company built on customer service, we know a thing or two
              about privacy. Our mission is to act as a trusted advisor, and we
              can&apos;t do that without your trust. This Privacy Policy explains
              what information we collect about you, why we collect the
              information, as well as how we collect and use the information so
              that we can deliver the best experience that we can.
            </p>
            <p>
              This Privacy Policy is intended for individuals that reside in the
              United States. By using any of our websites and mobile
              applications in the United States (collectively, &quot;Sites&quot;)
              or otherwise providing Personal Information to us, you agree to
              this Privacy Policy.
            </p>
          </Section>

          {/* 2 — Personal Information */}
          <Section index={2} title={sections[1].title} subtitle={sections[1].subtitle} icon={sections[1].icon}>
            <p>
              &quot;Personal Information&quot; generally means any information
              that identifies you as an individual, and any other information we
              associate with it. We collect a few categories of information, from
              a few different sources. Information that is passively collected
              when you use the Sites, such as by our web servers and by third
              party analytics tools we use.
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                Our system logs may record certain information about visitors to
                our Sites, including the web request, Internet Protocol
                (&quot;IP&quot;) address, device and mobile ad identifiers,
                browser information, interaction with the Sites, pages viewed,
                app usage, and other such information; we may collect similar
                information from emails you receive from us that can help us
                track which emails are opened and which links are clicked by
                recipients.
              </li>
              <li>
                We use certain cookies, pixel tags and other technologies to help
                us understand how you use the Sites and enable us to personalize
                your experience. To learn more about cookies, please visit{" "}
                <a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#460647] underline underline-offset-4">
                  allaboutcookies.org
                </a>
                . To learn more about Fairway&apos;s use of cookies, please see
                our Cookie Policy. We may ask advertisers or other third party
                partners to serve ads or services to your devices, which rely on
                cookies or similar technologies placed on our Sites.
              </li>
              <li>
                We may detect the physical location of your device by, for
                example, using GPS information collected by mobile apps or
                location information shared by your web browser. We collect this
                information for purposes of enhancing or facilitating our
                services, such as enabling certain functionalities of the Sites
                that can provide you with information about promotions or
                relevant product information near you. Should you wish to opt out
                of the collection of this information, please adjust the settings
                of your device so that information about your physical location
                is not sent to us or third parties by (a) disabling location
                services within the device settings; or (b) denying certain
                websites or mobile applications permission to access location
                information by changing the relevant preferences and permissions
                in your mobile device or browser settings. Please note that your
                location may be derived from your WiFi, Bluetooth, and other
                device settings. Please consult your device settings for further
                information.
              </li>
            </ul>
          </Section>

          {/* 3 — Use */}
          <Section index={3} title={sections[2].title} subtitle={sections[2].subtitle} icon={sections[2].icon}>
            <p>We may use Personal Information as permitted by law, for the following business purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>to respond to your inquiries and fulfill your requests</li>
              <li>to send administrative information to you, such as about your account or loan or respond to your inquiries and requests for information</li>
              <li>to communicate with you about loans, services, promotions, campaigns, programs, contests, and accounts</li>
              <li>to inform you about our loan products, promotions, events or other promotional purpose</li>
              <li>to re-contact you if we have not heard from you in a while</li>
              <li>to send you advertising/promotional material from any of our affiliates, and on behalf of our promotional and strategic partners</li>
              <li>to improve your experience with our products and services, such as by personalizing your experience with us</li>
            </ul>
            <p>We may also use Personal Information as we believe to be necessary or appropriate for certain essential purposes, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>to comply with applicable law and legal process</li>
              <li>to respond to requests from public and government authorities, including public and government authorities outside your country of residence</li>
              <li>to detect, prevent, or investigate potential security incidents or fraud</li>
              <li>to facilitate the functionality of our mobile applications and websites</li>
              <li>to provide important product safety information and notice of product recalls</li>
              <li>to enforce our terms and conditions</li>
              <li>to protect our operations or those of our affiliates</li>
              <li>to protect our rights, privacy, safety or property, security and/or that of our affiliates, you or other</li>
              <li>to allow us to pursue available remedies or limit the damages that we may sustain</li>
            </ul>
          </Section>

          {/* 4 — Disclosure */}
          <Section index={4} title={sections[3].title} subtitle={sections[3].subtitle} icon={sections[3].icon}>
            <p>To the extent permitted by law, all of your Personal Information may be disclosed to the following categories of third parties:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>to our affiliates for the purposes described in this Privacy Policy</li>
              <li>in connection with the essential purposes described above (e.g., to comply with legal obligations)</li>
            </ul>
            <p className="font-semibold text-gray-900">
              Information Sharing With Joint Venture Partners.
            </p>
            <p>
              We may participate with another company or individual for purposes
              of jointly promoting our products, services, promotions or contests
              or their products, services, promotions, or contests. We reserve
              the right to disclose your personal information and usage data that
              you generate to them for purposes of (i) compensation, transaction
              processing, fulfillment, and support, and (ii) for purposes of
              offering you other products, services, promotions, and contests.
              These joint venture marketing partners may also contact you
              regarding other products, services, promotions, or contests.
            </p>
          </Section>

          {/* 5 — DNT */}
          <Section index={5} title={sections[4].title} subtitle={sections[4].subtitle} icon={sections[4].icon}>
            <p>
              We do not monitor or follow &quot;Do Not Track&quot; (DNT) signals
              because there is no standard interpretation or practice for DNT
              signals. Therefore, we handle all user information consistent with
              this Privacy Policy.
            </p>
          </Section>

          {/* 6 — Third Party Sites */}
          <Section index={6} title={sections[5].title} subtitle={sections[5].subtitle} icon={sections[5].icon}>
            <p>
              The Sites may link to other web sites and online services. We have
              no control over such third parties and therefore cannot be
              responsible for the content, availability, or security of such
              linked third-party websites, so please read their privacy policies
              carefully. Third parties may use your information for their own
              purposes, including behavioral or advertising purposes. This
              Privacy Policy does not address the privacy and data security
              practices of any third parties. The inclusion of a link on the
              Sites does not imply endorsement of the linked third-party website
              or their products and services, and is provided for your
              convenience only. If you decide to access any of the third-party
              websites linked to our Sites, you do so subject to the terms and
              conditions of use for such third-party websites.
            </p>
            <p>
              We are also not responsible for the privacy and data security
              practices of other organizations, such as Facebook, Instagram,
              Apple, Google, Microsoft, Twitter or any other app developer, app
              provider, social media platform provider, operating system
              provider, wireless service provider or device manufacturer. Please
              read their privacy policies and consider customized settings on
              your browser or through your mobile phone to limit disclosure of
              certain information, such as location data.
            </p>
            <p>
              Any Personal Information that you provide through these third-party
              websites, mobile applications, or social platforms will be subject
              to the privacy policy of its operator, and not this Privacy Policy.
            </p>
          </Section>

          {/* 7 — Security */}
          <Section index={7} title={sections[6].title} subtitle={sections[6].subtitle} icon={sections[6].icon}>
            <p>
              With recent events and regulatory changes, our customers and
              business partners are increasingly asking how Fairway protects the
              sensitive information entrusted to us. We recognize that this is a
              significant trust and one that we don&apos;t take lightly.
              Information Security is a very complex subject, and the technical
              details are beyond the scope of this document. However, this
              document will provide a general overview of the Information
              Security Controls in place and operating at Fairway.
            </p>
            <p>
              The Fairway Information Security Program relies on the National
              Institute of Standards and Technology (NIST) 800 series of
              standards as the primary framework for our control design,
              implementation and operation. Those controls include Physical,
              Technical, Administrative and Procedural controls. We continually
              invest in and enhance these controls to meet new threats and
              vulnerabilities. We work with several leading Information Security
              firms which assist us in the implementation, operation and review
              of our security controls. This includes periodic assessments and
              testing.
            </p>
            <p>
              A significant part of our strategy is our implementation of
              application virtualization technology throughout Fairway. This
              technology significantly reduces the potential attack points by
              centralizing the location of borrower data within our datacenters.
              We replicate data between servers in our primary and secondary data
              centers – data is never put on tape or other physical media for
              transport.
            </p>
            <p>
              Additionally, all of our associates are provided training on the
              protection of borrower information and are engaged in an active,
              continual Information Security Awareness program that keeps
              Information Security in focus all throughout the year.
            </p>
            <p>
              Fairway&apos;s primary tool for loan processing is the Encompass
              Loan Origination system by Ellie Mae. Additional services (Credit
              Reporting, Anti-fraud, etc…) are provided by third party
              organizations via the Ellie Mae Network. Data movement between
              Ellie Mae software clients to the central server is encrypted
              throughout transmission. Borrower information stored on the central
              server is also encrypted while &quot;at rest&quot;. Similarly,
              information passed through the Ellie Mae Network is encrypted
              throughout transit.
            </p>
            <p>
              Secure exchange of information between borrowers and Fairway Loan
              Officers and associates is facilitated by the Encompass eFolder
              functionality. Additionally, our email system is configured to
              automatically establish Transport Layer Security with any
              correspondent email systems that support this encryption
              mechanism. Finally, we have an Encrypted Email system for
              communications with those that don&apos;t have access to a secure
              email system.
            </p>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-[13px] text-amber-900/90 leading-relaxed">
              We use standard physical, technical and administrative measures
              designed to reduce the risk of loss, misuse, unauthorized access,
              disclosure or modification of your Personal Information.
              Unfortunately, no system or network can be guaranteed to be 100%
              secure. If you have reason to believe that your interaction with us
              is no longer secure (for example, if you feel that the security of
              any account you might have with us has been compromised), please
              immediately notify us in accordance with the &quot;Contacting
              Us&quot; section below.
            </div>
          </Section>

          {/* 8 — Choices */}
          <Section index={8} title={sections[7].title} subtitle={sections[7].subtitle} icon={sections[7].icon}>
            <p className="font-semibold text-gray-900">Retention Period</p>
            <p>
              We will retain your Personal Information for the period necessary
              to fulfill the purposes outlined in this Privacy Policy unless a
              longer retention period is required or permitted by for legal,
              auditing, or compliance purposes.
            </p>
            <p className="font-semibold text-gray-900 mt-4">Children&apos;s Privacy</p>
            <p>
              We do not intend for our websites or other online services to
              knowingly collect or solicit any information from anyone under the
              age of 13 or knowingly allow minors under the age of 13 to disclose
              their Personal Information to us through the Sites. The Sites are
              directed to individuals who are permitted to share their Personal
              Information without parental consent. If you believe that we might
              have any information from a child under the age of 13, please
              contact us as directed below in the &quot;Contacting Us&quot;
              section. You may mark your inquiry &quot;COPPA Information
              Request.&quot;
            </p>
            <p className="font-semibold text-gray-900 mt-4">Updates to This Privacy Policy</p>
            <p>
              We may periodically update this Privacy Policy. Any changes to this
              Privacy Policy will become effective when we post the revised
              Privacy Policy on our Sites. Your use of the Sites following these
              changes means that you accept the revised Privacy Policy.
            </p>
          </Section>

          {/* 9 — Contact */}
          <Section index={9} title={sections[8].title} subtitle={sections[8].subtitle} icon={sections[8].icon}>
            <p>
              We welcome your questions, comments, and concerns about privacy. If
              you have any questions about this Privacy Policy or our data
              practices, please contact us as follows:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:privacy@fairwaymc.com" className="text-[#460647] underline underline-offset-4">
                  privacy@fairwaymc.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+18776990353" className="text-[#460647] underline underline-offset-4">
                  (877) 699-0353
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Please note that email communications are not always secure, so
              please do not include credit card information or other sensitive
              information in any emails to us.
            </p>
          </Section>

          {/* 10 — Cookie Policy */}
          <Section index={10} title={sections[9].title} subtitle={sections[9].subtitle} icon={sections[9].icon}>
            <p>
              When you use our websites, mobile applications, and online services
              (the &quot;Site&quot;), we may store cookies on your web browser.
              Other third parties you choose to visit may do the same. This
              Cookie Policy explains what a cookie is, how you can manage your
              cookies, and what kind of cookies may be on our sites.
            </p>
            <p className="font-semibold text-gray-900">What Is a Cookie and Why Do We Use Them?</p>
            <p>
              Cookies are small pieces of text. They are provided by most
              websites and stored by your web browser on the computer, phone, or
              other device that you are using. Cookies serve many purposes. They
              can help a website remember your preferences, learn which areas of
              the website are useful and which areas need improvement, and
              provide you with targeted advertisements or personalized content.
              Sometimes, cookies are enabled when pixels are placed on a website.
              Pixels are also referred to as web beacons, clear gifs, and tags.
              They enable websites to read and place cookies.
            </p>
            <p className="font-semibold text-gray-900">First-Party and Third-Party Cookies</p>
            <p>
              Cookies can be first-party or third-party. A first-party cookie is
              one that you receive directly from Fairway when visiting our Site.
              A third-party cookie is one that you have received from another
              party, such as Google or Facebook. We do not control what third
              parties do on other sites. However, we may work with certain
              third-party providers such as Google or Facebook to permit their
              cookies to function through our Site so we can learn more about
              your web experience on our Site and better personalize our services
              for you.
            </p>
            <p className="font-semibold text-gray-900">Persistent and Session Cookies</p>
            <p>
              A persistent cookie is a cookie that is stored by the web browser
              on your device until it expires or you delete it. The expiration of
              a persistent cookie is determined by the creator of the cookie and
              can be upon a certain date or after a length of session time has
              passed. This means that, for the cookie&apos;s entire lifespan, its
              information will be transmitted to the creator&apos;s server every
              time the user visits the website that it belongs to or another
              website configured to check for that cookie. For this reason,
              persistent cookies are also called &quot;tracking cookies.&quot;
            </p>
            <p>
              A session cookie is created temporarily on your device for use by a
              website during your visit. This type of cookie may store
              information you enter and track your activity within the website. A
              session cookie is deleted after you leave the website or when the
              web browser is closed.
            </p>
            <p className="font-semibold text-gray-900">How Do I Manage Cookies?</p>
            <p>
              Most web browsers let you choose whether to accept cookies. Most
              also let you delete cookies already set. The choices available, and
              the mechanism used, will vary from browser to browser. Such browser
              settings are typically found in the &quot;options&quot;,
              &quot;tools&quot; or &quot;preferences&quot; menu. There are online
              tools available for clearing all cookies left behind by the
              websites you have visited, such as{" "}
              <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#460647] underline underline-offset-4">
                allaboutcookies.org
              </a>
              .
            </p>
          </Section>

          {/* 11 — Cookie Types */}
          <Section index={11} title={sections[10].title} subtitle={sections[10].subtitle} icon={sections[10].icon}>
            <p>
              The Site may use Strictly Necessary Cookies, Performance Cookies,
              Functional Cookies, Targeting Cookies and Social Media Cookies. Any
              of these may be first-party cookies or third-party cookies,
              persistent or session.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold text-gray-900">Strictly Necessary Cookies:</span> These are cookies without which you would not be able to use this Site. Strictly Necessary Cookies do not store any Personal Information.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Performance Cookies:</span> We may use these cookies to count visits and traffic sources, to measure and improve Site performance. Performance Cookies do not store any Personal Information.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Functional Cookies:</span> These cookies allow the Site to remember choices you make and provide enhanced functionality and more personalized features. Depending on context, Functional Cookies may store certain types of Personal Information as needed to provide functionality.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Targeting Cookies:</span> Targeting cookies help us manage and display our advertisements, based on your activity on the Site and other sites; this is known as interest-based advertising. Opting out of interest-based advertising does not mean you will no longer see advertising online, but it does mean that the companies from which you opt out will no longer show ads that have been tailored to your interests.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Social Media Cookies:</span> Social Media Cookies make social sharing easier for you, provide you with tools to connect with the Site, and help us better understand both the audience for the Site and the effectiveness of our social media outreach. These are third-party cookies.
              </li>
            </ul>
            <p>
              We may change this Cookie Policy at any time. Any changes in this
              Cookie Policy will become effective when the revised Cookie Policy
              is available on or through the Site. If you have any further
              questions, please contact us by calling{" "}
              <a href="tel:+18776990353" className="text-[#460647] underline underline-offset-4">
                (877) 699-0353
              </a>
              .
            </p>
          </Section>

          {/* 12 — CCPA */}
          <Section index={12} title={sections[11].title} subtitle={sections[11].subtitle} icon={sections[11].icon}>
            <p>
              This Privacy Notice for California Residents supplements the
              information contained in the Privacy Policy of Fairway Independent
              Mortgage Corporation and its subsidiaries (collectively,
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and applies
              solely to visitors, users, and others who reside in the State of
              California (&quot;consumers&quot; or &quot;you&quot;). We adopt this
              notice to comply with the California Consumer Privacy Act of 2018
              (&quot;CCPA&quot;) and other California privacy laws. Any terms
              defined in the CCPA have the same meaning when used in this notice.
            </p>
            <p>
              The California Consumer Privacy Act provides some California
              residents with additional rights. To exercise these rights, call{" "}
              <a href="tel:+18776990353" className="text-[#460647] underline underline-offset-4">
                (877) 699-0353
              </a>
              .
            </p>

            <p className="font-semibold text-gray-900 mt-4">Right to Know</p>
            <p>You have the right to know and see what data we have collected about you over the past 12 months, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The categories of Personal Information we have collected about you;</li>
              <li>The categories of sources from which the Personal Information is collected;</li>
              <li>The business or commercial purpose for collecting your Personal Information;</li>
              <li>The categories of third parties with whom we have shared your Personal Information; and</li>
              <li>The specific pieces of Personal Information we have collected about you.</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Right to Delete</p>
            <p>
              You have the right to request that we delete the Personal
              Information we have collected from you. There are a number of
              exceptions, however, that include, but are not limited to, when the
              information is necessary for us or a third party to do any of the
              following:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Complete your transaction;</li>
              <li>Provide you a good or service;</li>
              <li>Perform a contract between us and you;</li>
              <li>Protect your security and prosecute those responsible for breaching it;</li>
              <li>Fix our system in the case of a bug;</li>
              <li>Protect the free speech rights of you or other users;</li>
              <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et seq.);</li>
              <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interests that adheres to all other applicable ethics and privacy laws;</li>
              <li>Comply with a legal obligation; or</li>
              <li>Make other internal and lawful uses of the information that are compatible with the context in which you provided it.</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Other Rights</p>
            <p>You also have the right not to be discriminated against for exercising any of your rights.</p>

            <p className="font-semibold text-gray-900 mt-4">How to Exercise Your California Privacy Rights</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">Website</span> — You may visit our online request form to authenticate and exercise your rights.</li>
              <li><span className="font-semibold">Phone</span> — You may dial our Customer Service at <a href="tel:+18776990353" className="text-[#460647] underline underline-offset-4">(877) 699-0353</a>.</li>
              <li><span className="font-semibold">Other Designated Methods</span> — We only have two designated methods for submitting your verifiable consumer request, and currently we do not accept requests via US mail. This is to protect you – and us – from fraudulent activity.</li>
              <li><span className="font-semibold">Response Timing and Format</span> — We aim to respond to a consumer request for access or deletion within 45 days of receiving that request. If we require more time, we will inform you of the reason and extension period in writing.</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Security Info</p>
            <p>
              Fairway has implemented critical physical, organizational and
              technical measures to guard against unauthorized or unlawful access
              to the personal information we manage and store, including secure
              office premises, locked filing cabinets and secure shredding
              practices, encryption, robust authentication processes, limited
              employee access, and data centers with effective physical and
              logical data security controls.
            </p>
          </Section>

          {/* 13 — CCPA FAQs */}
          <Section index={13} title={sections[12].title} subtitle={sections[12].subtitle} icon={sections[12].icon}>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">What is &quot;Personal Information&quot; as defined in the California regulation?</p>
                <p>
                  Personal Information is practically anything that identifies,
                  relates to, describes or could be associated with you. Beyond
                  your name, phone number, or email address, it includes the kind
                  of device you&apos;re using to read this or which web browser.
                  Personal Information also includes biometric data, your
                  geolocation and even your perceived preferences. It does not
                  include publicly available information.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Do you sell my Personal Information?</p>
                <p>
                  No, we do not. In order to sell your information, we would need
                  to first disclose to you our sale practices AND provide you
                  with an easy &quot;DO NOT SELL MY INFO&quot; button on our
                  website for you to opt-out of future sales of your Personal
                  Information. But rest assured, we do not sell your Personal
                  Information.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">How and where do you collect Personal Information?</p>
                <p>
                  That depends. We collected most of this information directly
                  from you — either during a mortgage application or as we
                  service your mortgage loan. Such Personal Information includes
                  social security number, employment history and bank account
                  numbers. We collect and secure all of this information in
                  accordance with federal regulations. We also may receive
                  information from other sources, such as an internet advertiser,
                  a mortgage lead generator, your prior mortgage servicer, or
                  government entities from which public records are maintained.
                  And we gather information using cookies and other online tools
                  and technology.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Will you delete my information if I request you do so?</p>
                <p>
                  The short answer is maybe. The CCPA requires businesses that
                  collect Personal Information directly from consumers to delete
                  such information upon request, unless the deletion request is
                  subject to an exception or exemption. Information we collect,
                  store, or share in connection with providing you a financial
                  product or service is exempt because your financial information
                  is already regulated by federal law. Even if you&apos;re not a
                  customer of ours, we might need to keep some of your information
                  to complete a transaction, prevent or detect fraud, or comply
                  with a legal obligation.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Can I request a copy of what you collected or shared?</p>
                <p>
                  In some cases, yes and in some cases, no. The CCPA refers to
                  this as your &quot;Right to Know&quot;. But like we mentioned
                  above, the CCPA does not apply to most of the information that
                  we collect or share in our role as a financial institution. To
                  submit a request, call us at{" "}
                  <a href="tel:+18776990353" className="text-[#460647] underline underline-offset-4">
                    (877) 699-0353
                  </a>{" "}
                  or navigate to our online request form.
                </p>
              </div>
            </div>
          </Section>

          {/* 14 — SMS Privacy */}
          <Section index={14} title={sections[13].title} subtitle={sections[13].subtitle} icon={sections[13].icon}>
            <p>
              Fairway Independent Mortgage Corporation (&quot;Fairway&quot;) is
              committed to protecting your privacy. This SMS Privacy Policy
              (&quot;Policy&quot;) explains how we collect, use, protect, and
              disclose the personal information we receive in connection with our
              SMS messaging services (&quot;Service&quot;), which are provided
              through a trusted third-party service provider. This Policy is
              incorporated into and forms part of our Terms of Service.
            </p>
            <p>
              By using the Service or opting in to receive SMS messages from
              Fairway, you agree to the terms of this Policy. Fairway may update
              this Policy from time to time. Any changes become effective when
              posted to our website, and your continued use of the Service
              constitutes acceptance of those changes.
            </p>

            <p className="font-semibold text-gray-900 mt-4">Definitions</p>
            <p>
              &quot;Personal Information&quot; is information that individually
              identifies you, such as your mobile phone number or user/screen
              name, as well as any Personal Information that you choose to include
              in messages you send through the Service.
            </p>

            <p className="font-semibold text-gray-900 mt-4">What Personal Information Is Collected About You</p>
            <p>
              Through the use of the Service, Fairway will receive the following
              information from our third party service provider: your mobile
              phone number when you send a text message to us, the text of
              messages that you send to other users of the Service, any user or
              screen name that you select in connection with the Service, as well
              as any comments or feedback regarding the Service that you send to
              us.
            </p>

            <p className="font-semibold text-gray-900 mt-4">How Fairway Uses Personal Information About You</p>
            <p>
              We use Personal Information to (a) provide you with the Service, (b)
              process and respond to inquiries, (c) improve the Service, (d) if
              necessary, contact you with important announcements or messages, (e)
              conduct research, and (f) provide anonymous reporting for internal
              and external clients and partners. Each message that you send
              through the Service is stored on our servers. Fairway utilizes
              servers and services owned by third parties.
            </p>

            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-[13px] text-emerald-900/90 leading-relaxed">
              <p className="font-semibold mb-1">SMS Consent</p>
              <p>
                Your SMS consent and mobile phone number are used solely for the
                purpose of delivering the SMS communications you have requested.
                SMS consent is not shared with third parties or affiliates for
                marketing or promotional purposes. No mobile information will be
                shared with third parties or affiliates for marketing or
                promotional purposes. All categories of personal information
                described in this Policy exclude text messaging originator opt-in
                data and consent. This information will not be shared with any
                third parties except as necessary to provide the SMS messaging
                service you have requested or as otherwise required by law.
              </p>
            </div>

            <p className="font-semibold text-gray-900 mt-4">Disclosure of Your Information</p>
            <p>We will not sell your Personal Information to other companies or individuals. We may use or disclose such information in any of the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We have your consent.</li>
              <li>We provide such information to trusted businesses or persons for the sole purpose of processing Personal Information on our behalf, subject to agreements that oblige those parties to process such information only on our instructions and in compliance with this Policy and appropriate confidentiality and security measures.</li>
              <li>We provide such information to third parties who have entered into non-disclosure agreements with us.</li>
              <li>We provide such information to a company controlled by, or under common control with, Fairway for any purpose permitted by this Policy.</li>
              <li>We respond to subpoenas, court orders, or legal process, or to establish or exercise our legal rights, or the legal rights of others, or defend against legal claims.</li>
              <li>We believe it is necessary to share Personal Information to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Fairway&apos;s Terms of Service, or as otherwise required by law.</li>
              <li>We may share aggregated information with others without further notice.</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Security</p>
            <p>
              Fairway takes precautions to ensure the security of your Personal
              Information, including ensuring that our third-party service
              providers protect the security of your Personal Information.
              However, we cannot guarantee that hackers or unauthorized personnel
              will not gain access to your Personal Information despite our
              efforts. You should note that in using the Service, your information
              will travel through third party infrastructures which are not under
              our control (such as a third-party SMS delivery platform or your
              carrier network). We cannot protect, nor does this Policy apply to,
              any information that you transmit to other users. You should never
              transmit personal or identifying information to other users.
            </p>

            <p className="font-semibold text-gray-900 mt-4">Opting In</p>
            <p>A mobile user might opt-in by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Entering a phone number online,</li>
              <li>Filling out an online form that includes their phone number, or</li>
              <li>Signing up at a point-of-sale.</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-4">Opting Out</p>
            <p>
              Fairway&apos;s third-party service provider gives you the ability to
              opt out of the Service for any reason. You can opt out by replying
              &quot;STOP&quot; to the text message(s) you receive. We reserve the
              right to send you certain communications relating to the Service,
              such as announcements and administrative messages, without offering
              you the opportunity to opt-out of receiving them.
            </p>

            <p className="font-semibold text-gray-900 mt-4">Children</p>
            <p>
              The Service is not intended for children under 13, and Fairway does
              not knowingly collect information from children under the age of
              13. Children aged 13 or older should not submit any Personal
              Information without the permission of their parents or guardians. By
              using the Service, you are representing that you are at least 18, or
              that you are at least 13 years old and have your parents&apos;
              permission to use the service.
            </p>

            <p className="font-semibold text-gray-900 mt-4">Intended Audience</p>
            <p>Fairway requires that users of this service be limited to US residents only.</p>

            <p className="font-semibold text-gray-900 mt-4">Questions or Concerns?</p>
            <p>
              If you have any additional questions regarding this Policy, please
              feel free to contact us anytime by sending an email to{" "}
              <a href="mailto:privacy@fairwaymc.com" className="text-[#460647] underline underline-offset-4">
                privacy@fairwaymc.com
              </a>
              .
            </p>
          </Section>

          {/* 15 — SMS Terms */}
          <Section index={15} title={sections[14].title} subtitle={sections[14].subtitle} icon={sections[14].icon}>
            <p>
              Use of the Fairway Independent Mortgage Corporation
              (&quot;Fairway&quot;) text message-based services (the
              &quot;Service&quot;) is subject to the following Terms of Service.
              These terms constitute a legal agreement (the &quot;Agreement&quot;).
              Please read them carefully.
            </p>
            <p>
              Fairway will allow several different opportunities, such as entering
              a phone number online, to opt-in to SMS services. By opting into SMS
              from a web form or other medium, you are providing express written
              consent to receive SMS messages from Fairway Independent Mortgage
              Corporation. This includes SMS messages for account notifications,
              customer care, and marketing.
            </p>
            <p>
              You can cancel the Service at any time. Just reply with
              &quot;STOP&quot; to any text message you receive. After you send the
              SMS message &quot;STOP&quot; to us, we will send you an SMS message
              to confirm that you have been unsubscribed. After this, you will no
              longer receive SMS messages from us. If you want to join again, just
              sign up as you did the first time, and we will start sending SMS
              messages to you again.
            </p>
            <p>
              We are able to deliver messages to various mobile phone carriers.
              Major carriers include: AT&amp;T, Verizon Wireless, Sprint,
              T-Mobile, MetroPCS, U.S. Cellular, Alltel, Boost Mobile, Nextel, and
              Virgin Mobile. As always, message and data rates may apply for any
              messages sent to you from us and to us from you, and Fairway is not
              liable for the cost of any such messages. Message frequency varies.
              If you have any questions about your text plan or data plan, it is
              best to contact your wireless provider. For assistance, reply HELP
              to any message or contact us at{" "}
              <a href="mailto:privacy@fairwaymc.com" className="text-[#460647] underline underline-offset-4">
                privacy@fairwaymc.com
              </a>
              .
            </p>
            <p>
              You understand that anyone with access to your mobile phone may be
              able to view the messages you receive when using the Service, and
              you agree that Fairway will not be liable to you if this occurs.
              Consent to receive SMS messages is not a condition of purchasing any
              goods or services from Fairway.
            </p>
            <p>
              By agreeing to these Terms of Service and providing us with your
              mobile phone number when you opt in to the Service, you authorize
              Fairway to contact you by text message at your mobile phone number
              using an automatic telephone dialing system or device, or any other
              computer assisted technology as applicable. If you have any
              questions regarding privacy, please read our Privacy Policy above.
            </p>
          </Section>
        </div>

        {/* ============ COMPLIANCE FOOTER ============ */}
        <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#460647] text-white flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <p className="text-[11px] font-semibold tracking-widest text-[#460647] uppercase">
              Compliance Information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">
                Shayn Carlson · NMLS #76695
              </p>
              <p>Fairway Independent Mortgage Corporation · NMLS #2289</p>
              <p>
                Complaints may be directed to:{" "}
                <a href="tel:+18776990353" className="text-[#460647] underline underline-offset-4">
                  (877) 699-0353
                </a>{" "}
                or Email us:{" "}
                <a href="mailto:customerservice@fairwaymc.com" className="text-[#460647] underline underline-offset-4">
                  customerservice@fairwaymc.com
                </a>
              </p>
              <p className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                <Link href="https://www.fairway.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#460647] underline underline-offset-4">
                  Privacy Policy
                </Link>
                <Link href="https://www.fairway.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-[#460647] underline underline-offset-4">
                  Terms Of Use
                </Link>
                <Link href="https://www.fairway.com/legal/legal-disclosures" target="_blank" rel="noopener noreferrer" className="text-[#460647] underline underline-offset-4">
                  Legal Disclosures
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-4 md:justify-end">
              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-gray-300 bg-white text-gray-700">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11 12 4l9 7" />
                  <path d="M5 10v9h14v-9" />
                  <path d="M10 19v-5h4v5" />
                </svg>
                <span className="text-[8px] font-semibold mt-1 text-center leading-tight">
                  EQUAL HOUSING<br />OPPORTUNITY
                </span>
              </div>
              <a
                href="http://nmlsconsumeraccess.org/EntityDetails.aspx/company/2289"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-gray-300 bg-white text-gray-700 hover:border-[#460647] hover:text-[#460647] transition-colors"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 15V9l4 4 4-4v6" />
                </svg>
                <span className="text-[8px] font-semibold mt-1 text-center leading-tight">
                  NMLS<br />CONSUMER ACCESS
                </span>
              </a>
            </div>
          </div>

          <p className="mt-6 pt-4 border-t border-gray-200 text-[11px] text-gray-500">
            © {new Date().getFullYear()} Fairway Independent Mortgage
            Corporation. All rights reserved. Equal Housing Opportunity.
          </p>
        </section>
      </main>
    </>
  );
}