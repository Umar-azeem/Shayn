"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ---------------------------------------------
   Scroll reveal hook (no external deps)
--------------------------------------------- */
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/* ---------------------------------------------
   Reading progress bar
--------------------------------------------- */
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

/* ---------------------------------------------
   Section wrapper with reveal + icon
--------------------------------------------- */
function Section({
  index,
  title,
  icon,
  children,
}: {
  index: number;
  title: string;
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
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        "transition-[opacity,transform] duration-700 ease-out",
      ].join(" ")}
      style={{ transitionDelay: `${Math.min(index * 40, 200)}ms` }}
    >
      <div className="flex items-start gap-4 mb-3">
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
        </div>
      </div>
      <div className="text-[15px] leading-relaxed text-gray-700 space-y-3">
        {children}
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Inline SVG icons (no image files)
--------------------------------------------- */
const icons = {
  doc: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
  edit: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  link: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
    </svg>
  ),
  ban: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  upload: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
  alert: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  stop: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  ),
  copyright: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9.5a4 4 0 1 0 0 5" />
    </svg>
  ),
  gavel: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14 13-7 7-3-3 7-7" />
      <path d="m21 6-3-3-9 9 3 3 9-9z" />
      <path d="m16 8 3-3" />
    </svg>
  ),
};

/* ---------------------------------------------
   Page
--------------------------------------------- */
export default function TermsOfUsePage() {
  const sections = [
    { id: "agreement", title: "Agreement Between User and Fairway Independent Mortgage Corporation", icon: icons.doc },
    { id: "modification", title: "Modification of These Terms of Use", icon: icons.edit },
    { id: "no-offer", title: "No Offer, No Loan Approval", icon: icons.shield },
    { id: "links", title: "Links to Third-Party Sites", icon: icons.link },
    { id: "lawful", title: "No Unlawful or Prohibited Use", icon: icons.ban },
    { id: "comm", title: "Use of Communication Services", icon: icons.chat },
    { id: "materials", title: "Materials Provided to Fairway or Posted on the Site", icon: icons.upload },
    { id: "liability", title: "Liability Disclaimer", icon: icons.alert },
    { id: "contact", title: "Service Contact", icon: icons.mail },
    { id: "termination", title: "Termination / Access Restriction", icon: icons.stop },
    { id: "copyright", title: "Copyright and Trademark Notices", icon: icons.copyright },
    { id: "dmca", title: "Notices and Procedure for Making Claims of Copyright Infringement", icon: icons.gavel },
  ];

  return (
    <>
      <ReadingProgress />

      {/* HERO */}
      <header className="relative overflow-hidden  bg-gradient-to-br from-[#460647] via-[#5a0b5c] to-[#2a032b] text-white">
        {/* floating decorative shapes */}
        <div className="pointer-events-none  absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-fuchsia-300/20 blur-3xl animate-pulse [animation-delay:1.2s]" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-white/5 blur-2xl animate-pulse [animation-delay:2s]" />
        </div>

        {/* subtle grid */}
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
            Legal · NMLS #76695
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Terms of{" "}
            <span className="bg-gradient-to-r from-fuchsia-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              Use
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
            Shayn Carlson — NMLS #76695 · Fairway Independent Mortgage
            Corporation. Please read these terms carefully before using this
            website.
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
              href="https://www.fairway.com/legal/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              Fairway Terms
            </Link>
          </div>
        </div>

        {/* bottom curve */}
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </header>

      {/* BODY */}
      <main className="mx-auto max-w-4xl px-6 pb-24 -mt-2">
        {/* Table of contents */}
        <nav className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6">
          <p className="text-[11px] font-semibold tracking-widest  text-[#460647] uppercase mb-3">
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
          {/* 1 */}
          <Section index={1} title={sections[0].title} icon={sections[0].icon}>
            <p>
              This website (the &quot;Site&quot;) is operated by Fairway
              Independent Mortgage Corporation (&quot;Fairway&quot; or
              &quot;we&quot;) on behalf of Shayn Carlson, a licensed Mortgage
              Loan Originator (NMLS #76695). The Site is comprised of various web
              pages operated by Fairway. The Site is offered to you conditioned
              on your acceptance without modification of the terms, conditions,
              and notices contained herein. Your use of the Site constitutes your
              agreement to all such terms, conditions, and notices.
            </p>
          </Section>

          {/* 2 */}
          <Section index={2} title={sections[1].title} icon={sections[1].icon}>
            <p>
              Fairway reserves the right to change the terms, conditions, and
              notices under which the Site is offered, including but not limited
              to any charges associated with the use of the Site. Any changes
              will be posted on this page and are effective upon posting.
            </p>
          </Section>

          {/* 3 */}
          <Section index={3} title={sections[2].title} icon={sections[2].icon}>
            <p>
              Nothing on this Site constitutes a loan application, a commitment
              to lend, or an offer to lend. Rates, payment estimates, calculator
              results, and market data shown on this Site are for informational
              and illustrative purposes only and are not a guarantee of credit
              availability or terms. All loans are subject to credit approval,
              underwriting, program guidelines, and applicable law. Actual rates
              and terms may vary based on your specific circumstances.
            </p>
          </Section>

          {/* 4 */}
          <Section index={4} title={sections[3].title} icon={sections[3].icon}>
            <p>
              The Site may contain links to other websites (&quot;Linked
              Sites&quot;). The Linked Sites are not under the control of
              Fairway and Fairway is not responsible for the contents of any
              Linked Site, including without limitation any link contained in a
              Linked Site, or any changes or updates to a Linked Site. Fairway is
              not responsible for webcasting or any other form of transmission
              received from any Linked Site. Fairway is providing these links to
              you only as a convenience, and the inclusion of any link does not
              imply endorsement by Fairway of the site or any association with
              its operators.
            </p>
          </Section>

          {/* 5 */}
          <Section index={5} title={sections[4].title} icon={sections[4].icon}>
            <p>
              As a condition of your use of the Site, you warrant to Fairway
              that you will not use the Site for any purpose that is unlawful or
              prohibited by these terms, conditions, and notices. You may not use
              the Site in any manner which could damage, disable, overburden, or
              impair the Site or interfere with any other party&apos;s use and
              enjoyment of the Site. You may not obtain or attempt to obtain any
              materials or information through any means not intentionally made
              available or provided for through the Site.
            </p>
          </Section>

          {/* 6 */}
          <Section index={6} title={sections[5].title} icon={sections[5].icon}>
            <p>
              The Site may contain bulletin board services, chat areas, contact
              forms, testimonial areas, and/or other message or communication
              facilities designed to enable you to communicate with the public at
              large or with a group (collectively, &quot;Communication
              Services&quot;). You agree to use the Communication Services only
              to post, send and receive messages and material that are proper and
              related to the particular Communication Service. By way of example,
              and not as a limitation, you agree that when using a Communication
              Service, you will not:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.</li>
              <li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information.</li>
              <li>Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy or publicity) unless you own or control the rights thereto or have received all necessary consents.</li>
              <li>Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another&apos;s computer.</li>
              <li>Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages.</li>
              <li>Conduct or forward surveys, contests, pyramid schemes or chain letters.</li>
              <li>Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.</li>
              <li>Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</li>
              <li>Restrict or inhibit any other user from using and enjoying the Communication Services.</li>
              <li>Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</li>
              <li>Harvest or otherwise collect information about others, including e-mail addresses, without their consent.</li>
              <li>Violate any applicable laws or regulations.</li>
            </ul>
            <p>
              Fairway has no obligation to monitor the Communication Services.
              However, Fairway reserves the right to review materials posted to a
              Communication Service and to remove any materials in its sole
              discretion. Fairway reserves the right to terminate your access to
              any or all of the Communication Services at any time without notice
              for any reason whatsoever.
            </p>
            <p>
              Always use caution when giving out any personally identifying
              information about yourself or your children in any Communication
              Service. Fairway does not control or endorse the content, messages
              or information found in any Communication Service and, therefore,
              specifically disclaims any liability with regard to the
              Communication Services and any actions resulting from your
              participation in any Communication Service.
            </p>
          </Section>

          {/* 7 */}
          <Section index={7} title={sections[6].title} icon={sections[6].icon}>
            <p>
              Fairway does not claim ownership of the materials you provide to
              Fairway (including feedback and suggestions) or post, upload, input
              or submit to the Site or its associated services (collectively
              &quot;Submissions&quot;). However, by posting, uploading,
              inputting, providing or submitting your Submission you are granting
              Fairway, its affiliated companies and necessary sublicensees
              permission to use your Submission in connection with the operation
              of their Internet businesses including, without limitation, the
              rights to: copy, distribute, transmit, publicly display, publicly
              perform, reproduce, edit, translate and reformat your Submission;
              and to publish your name in connection with your Submission.
            </p>
            <p>
              No compensation will be paid with respect to the use of your
              Submission, as provided herein. Fairway is under no obligation to
              post or use any Submission you may provide and may remove any
              Submission at any time in Fairway&apos;s sole discretion.
            </p>
            <p>
              By posting, uploading, inputting, providing or submitting your
              Submission you warrant and represent that you own or otherwise
              control all of the rights to your Submission as described in this
              section including, without limitation, all the rights necessary for
              you to provide, post, upload, input or submit the Submissions.
            </p>
          </Section>

          {/* 8 */}
          <Section index={8} title={sections[7].title} icon={sections[7].icon}>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-[13px] text-amber-900/90 space-y-2 uppercase tracking-wide leading-relaxed">
              <p>
                The information, software, products, and services included in or
                available through the Site may include inaccuracies or
                typographical errors. Changes are periodically added to the
                information herein. Fairway and/or its suppliers may make
                improvements and/or changes in the Site at any time. Advice
                received via the Site should not be relied upon for personal,
                medical, legal or financial decisions and you should consult an
                appropriate professional for specific advice tailored to your
                situation.
              </p>
              <p>
                Fairway and/or its suppliers make no representations about the
                suitability, reliability, availability, timeliness, and accuracy
                of the information, software, products, services and related
                graphics contained on the Site for any purpose. To the maximum
                extent permitted by applicable law, all such information,
                software, products, services and related graphics are provided
                &quot;as is&quot; without warranty or condition of any kind.
                Fairway and/or its suppliers hereby disclaim all warranties and
                conditions with regard to this information, software, products,
                services and related graphics, including all implied warranties
                or conditions of merchantability, fitness for a particular
                purpose, title and non-infringement.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event
                shall Fairway and/or its suppliers be liable for any direct,
                indirect, punitive, incidental, special, consequential damages or
                any damages whatsoever including, without limitation, damages for
                loss of use, data or profits, arising out of or in any way
                connected with the use or performance of the Site. Because some
                states/jurisdictions do not allow the exclusion or limitation of
                liability for consequential or incidental damages, the above
                limitation may not apply to you. If you are dissatisfied with any
                portion of the Site, or with any of these Terms of Use, your sole
                and exclusive remedy is to discontinue using the Site.
              </p>
            </div>
          </Section>

          {/* 9 */}
          <Section index={9} title={sections[8].title} icon={sections[8].icon}>
            <p>
              Questions about these Terms of Use may be directed to{" "}
              <a href="mailto:legal@fairwaymc.com" className="font-medium text-[#460647] underline underline-offset-4 hover:text-[#5a0b5c]">
                legal@fairwaymc.com
              </a>
              .
            </p>
          </Section>

          {/* 10 */}
          <Section index={10} title={sections[9].title} icon={sections[9].icon}>
            <p>
              Fairway reserves the right, in its sole discretion, to terminate
              your access to the Site and the related services or any portion
              thereof at any time, without notice. To the maximum extent
              permitted by law, this agreement is governed by the laws of the
              State of Washington, U.S.A. and you hereby consent to the exclusive
              jurisdiction and venue of courts in San Mateo County, California,
              U.S.A. in all disputes arising out of or relating to the use of the
              Site. If any part of this agreement is determined to be invalid or
              unenforceable pursuant to applicable law, then the invalid or
              unenforceable provision will be deemed superseded by a valid,
              enforceable provision that most closely matches the intent of the
              original provision and the remainder of the agreement shall
              continue in effect. This agreement constitutes the entire agreement
              between the user and Fairway with respect to the Site and it
              supersedes all prior or contemporaneous communications and
              proposals, whether electronic, oral or written.
            </p>
          </Section>

          {/* 11 */}
          <Section index={11} title={sections[10].title} icon={sections[10].icon}>
            <p>
              All contents of the Site are © Fairway Independent Mortgage
              Corporation and/or its suppliers. All rights reserved. The names of
              actual companies and products mentioned herein may be the
              trademarks of their respective owners. Any rights not expressly
              granted herein are reserved.
            </p>
          </Section>

          {/* 12 */}
          <Section index={12} title={sections[11].title} icon={sections[11].icon}>
            <p>
              Pursuant to Title 17, United States Code, Section 512(c)(2),
              notifications of claimed copyright infringement under United States
              copyright law should be sent to Service Provider&apos;s Designated
              Agent. All inquiries not relevant to the following procedure will
              receive no response. See Notice and Procedure for Making Claims of
              Copyright Infringement.
            </p>
          </Section>
        </div>

        {/* COMPLIANCE FOOTER BLOCK */}
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

            {/* Badges — inline SVG placeholders. Swap with real approved assets */}
            <div className="flex items-center gap-4 md:justify-end">
              {/* EHO badge */}
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

              {/* NMLS badge */}
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