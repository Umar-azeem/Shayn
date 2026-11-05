"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------------------------------------------------------
   Social icons as inline SVGs (Font Awesome paths)
--------------------------------------------------------- */
type SocialIcon = {
  id: string;
  label: string;
  url: string;
  brandColor: string;
  svg: React.ReactNode;
};

const socialIcons: SocialIcon[] = [
  {
    id: "zillow",
    label: "Zillow",
    url: "https://www.zillow.com/lender-profile/ShaynCarlson/",
    brandColor: "#006AFF",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.477 18.34h-2.114v-3.53h-2.86v3.53H8.39v-4.512l-1.37 1.013-.978-1.323L12 8.31l5.957 4.85-.977 1.323-1.503-1.116v4.973z" />
      </svg>
    ),
  },
  {
    id: "gmail",
    label: "Gmail",
    url: "mailto:shaync@fairwaymc.com",
    brandColor: "#EA4335",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    url: "tel:+12088664515",
    brandColor: "#460647",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z" />
      </svg>
    ),
  },
];

const Loan: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* ---------------- LEFT: TEXT ---------------- */}
        <div className="text-center lg:text-left">
          <p className="text-[#460647] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            A Team You Can Trust
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Meet Shayn Carlson,
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            With over 20 years of experience in residential mortgage lending,
            I&apos;m passionate about helping individuals and families navigate
            the home financing process with confidence and clarity. Before
            entering the mortgage industry, I proudly served in the U.S. Navy,
            where I developed a strong sense of discipline, attention to detail,
            and a commitment to follow through. I&apos;ve been happily married
            for nearly as long as I&apos;ve been in the business, and I&apos;m
            the proud father of two amazing boys. As a family, we love all things
            outdoors—from hiking and camping to exploring the mountains and
            rivers of our beautiful home state of Idaho. I&apos;m honored to
            support clients from all walks of life, including fellow veterans,
            and I&apos;m committed to delivering a lending experience that&apos;s
            smooth, transparent, and tailored to your goals.
          </p>

          <Link href="/about">
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#460647] hover:bg-[#460647]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              About me
            </button>
          </Link>
        </div>

        {/* ---------------- RIGHT: IMAGE + SOCIALS ---------------- */}
        <div className="flex flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative">
            {/* decorative dots */}
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>

            <div className="w-full max-w-[400px] md:max-w-[500px] aspect-[4/5] md:h-[550px] bg-[#460647] rounded-[20px]" />

            <Image
              src="/img/dp.png"
              alt="Shayn Carlson"
              width={480}
              height={680}
              className="absolute -bottom-[10px] h-[60%] bottom-[2px] w-full max-w-[550px] object-contain object-bottom sm:h-[500px] sm:w-[550px] rounded-[20px]"
              priority
              unoptimized
            />

            {/* name card (mobile only) */}
            <div className="md:hidden absolute top-6 md:bottom-1 md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Shayn Carlson
              </h3>
              <p className="text-gray-800 mt-2 text-xs">Loan Officer</p>
              <p className="text-gray-800 text-xs mt-2">NMLS# 76695</p>
            </div>
          </div>

          {/* SOCIAL BUTTONS — brand-colored, SVG icons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                aria-label={icon.label}
                target={icon.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  icon.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                style={
                  {
                    "--brand": icon.brandColor,
                  } as React.CSSProperties
                }
                className="group w-10 h-10 rounded-full flex items-center justify-center text-[var(--brand)] border border-[var(--brand)] bg-white transition-all duration-300 hover:bg-[var(--brand)] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[var(--brand)]/25"
              >
                {icon.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;