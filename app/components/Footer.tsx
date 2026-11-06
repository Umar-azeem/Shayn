"use client";

import Link from "next/link";
import Image from "next/image";
import FooterText from "./FooterText";
import { ChevronUp } from "lucide-react";

export default function   Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Replace with the states Shayn is actually licensed in
  const licensedStates = ["CA", "TX", "FL", "ID", "OR"];

  return (
    <div className="bg-[#1c1c1c] text-white rounded-t-3xl px-6 py-10 md:px-10 w-full mx-auto mt-10">
      {/* Top CTA Section */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Ready To Apply For Your <br className="hidden sm:block" /> Home Loan?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link href="/contact-us">
            <button className="bg-[#460647] px-6 py-3 rounded-xl transition-transform duration-300 hover:translate-y-1 w-full sm:w-auto">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Main Content Columns */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
        {/* Contact Info Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <p className="mb-2 flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
              alt="Phone"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0"
              unoptimized
            />
            <Link
              href="tel:+12088664515"
              className="hover:text-gray-300 transition-colors"
            >
              (208) 866-4515
            </Link>
          </p>

          <p className="mb-2 flex flex-row items-start gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b81_mail-white.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0"
              unoptimized
            />
            <Link
              href="mailto:shaync@fairwaymc.com"
              className="break-all hover:text-gray-300 transition-colors"
            >
              shaync@fairwaymc.com
            </Link>
          </p>
          <p className="mb-4 flex flex-row justify-start items-start gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b96_location-on-white.svg"
              alt="Location"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              unoptimized
            />
            <a
              href="https://maps.google.com/?q=7639+W+Riverside+Dr+Suite+100+Boise+ID+83714"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              7639 W Riverside Dr Suite 100
              <br />
              Boise, ID 83714
            </a>
          </p>

<div className="flex gap-3 mb-6">
  {[
    {
      src: "https://cdn.simpleicons.org/zillow/white",
      alt: "Zillow",
      href: "https://www.zillow.com/lender-profile/ShaynCarlson/",
    },
    {
      src: "https://cdn.simpleicons.org/gmail/white",
      alt: "Gmail",
      href: "mailto:shaync@fairwaymc.com",
    },
    
  ].map(({ src, alt, href }) => (
    <Link
      key={alt}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 hover:bg-gray-500 transition-colors"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="w-5 h-5"
        unoptimized
      />
    </Link>
  ))}
</div>
        </div>

        {/* Logo + Compliance Logos + Scroll-to-top Column */}
        <div className="flex flex-row-reverse md:flex-col items-center md:items-end justify-between md:justify-end gap-6 md:gap-0">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-[#460647] flex items-center justify-center flex-shrink-0 transition-transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </button>

          <div className="flex flex-col items-center md:mt-20 gap-4">
            <Image
              src="/img/logo.png"
              alt="Shayn Carlson logo"
              width={100}
              height={100}
              className="w-32 h-auto"
              unoptimized
            />

            {/* NMLS Consumer Access Logo + Hyperlink */}
            <a
              href="http://nmlsconsumeraccess.org/EntityDetails.aspx/company/2289"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NMLS Consumer Access"
            >
              <Image
                src="/img/logo.png"
                alt="NMLS Consumer Access"
                width={120}
                height={40}
                className="w-28 h-auto"
                unoptimized
              />
            </a>

            {/* Equal Housing Opportunity Logo */}
            <Image
              src="/img/logo.png"
              alt="Equal Housing Opportunity"
              width={80}
              height={80}
              className="w-16 h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* ===== COMPLIANCE / LEGAL BLOCK (Jessica's checklist) ===== */}
      <hr className="border-gray-700 my-8" />

      <div className="text-xs md:text-sm text-gray-300 flex flex-col gap-3">
        {/* Customer Service / Complaints */}
        <p>
          Complaints may be directed to:{" "}
          <Link
            href="tel:+18776990353"
            className="underline hover:text-white transition-colors"
          >
            (877) 699-0353
          </Link>{" "}
          or Email us:{" "}
          <Link
            href="mailto:customerservice@fairwaymc.com"
            className="underline hover:text-white transition-colors"
          >
            customerservice@fairwaymc.com
          </Link>
        </p>

        {/* Privacy Policy / Terms of Use */}
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="https://www.fairway.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://www.fairway.com/legal/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Terms Of Use
          </Link>
        </p>

        {/* State Licensing Verbiage */}
        <p>
          Licensed In: {licensedStates.join(", ")} -{" "}
          <Link
            href="https://www.fairway.com/legal/legal-disclosures"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Legal Disclosures
          </Link>
        </p>

        {/* Equal Housing Opportunity text statement (optional but recommended) */}
        <p className="flex items-center gap-2">
          <span>Equal Housing Opportunity</span>
        </p>
      </div>

      <FooterText />
    </div>
  );
}