"use client";
import Link from "next/link";
import { useState } from "react";

const Icon = ({
  src,
  size = 20,
  className = "",
}: {
  src: string;
  size?: number;
  className?: string;
}) => <img src={src} width={size} height={size} className={className} alt="" />;

const ZillowIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.006 0 1.5 6.634v4.42l4.657-2.834v3.727H4.34v6.462h2.308v-4.516h1.086v4.516h2.29v-6.462H7.734V8.63L12.006 6.03l4.272 2.6v3.317h-2.29v6.462h2.29v-4.516h1.086v4.516h2.308v-6.462h-1.817V8.22l4.657 2.834v-4.42L12.006 0Zm-1.89 21.32h-.995v-2.512h.996v2.512Zm5.79 0h-.995v-2.512h.995v2.512Z" />
  </svg>
);

const MailIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const PhoneIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MortgageLandingPage = () => {
  const icons = {
    phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
    chevronDown: "https://img.icons8.com/ios/50/ffffff/expand-arrow.png",
    calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
    arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
  };

  return (
    <div className="">
      <div className="rounded-3xl bg-[#460647] text-white font-sans overflow-hidden relative ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block"></div>

        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 pt-28 pb-20 gap-10">
          <div className="flex-1  max-w-2xl w-full text-center lg:text-left">
            <div className="hidden md:flex flex-col ">
              <p className=" text-md font-bold tracking-[0.2em] mb-6 uppercase">
                Hi, I{`'`}m Shayn Carlson
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Your Mortgage
                <br />
                Loan Officer
              </h1>
            </div>
            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              With over 20 years of experience in residential mortgage lending,
              I{`'`}m passionate about helping individuals and families navigate
              the home financing process with confidence and clarity. Whether
              you{`'`}re buying your first home, refinancing, or exploring
              investment opportunities, I bring a steady hand, honest guidance,
              and creative solutions to every step of the journey. Before
              entering the mortgage industry, I proudly served in the U.S. Navy.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <Link href="/about">
                {" "}
                <button className="w-full sm:w-auto flex items-center border-2 border-white/30 justify-center gap-3  px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1">
                  Start Application{" "}
                  <img
                    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
                    alt="arrow"
                  />
                </button>
              </Link>
              <a href="/contact-us">
                <button className="w-full sm:w-auto flex items-center bg-white text-black justify-center gap-3  px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  Quick Contact
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="absolute hidden -top-2 sm:top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2"></div>

            <div className="  relative w-full max-w-[450px]">
              <div className="flex flex-col text-center p-1 md:hidden">
                <p className="text-md font-bold tracking-[0.2em] mb-2 uppercase">
                  Hi, I{`'`}m Shayn Carlson{" "}
                </p>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-24">
                  Your Mortgage
                  <br />
                  Loan Officer{" "}
                </h1>
              </div>
              <div className="absolute md:hidden   top-26 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2"></div>
              <img
                src="/img/dp.png"
                alt="Shayn Carlson"
                className="w-full h-[400px] sm:h-[580px] lg:h-[550px] object-cover object-top rounded-2xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              <div className="absolute -bottom-6 sm:bottom-10 right-0 md:right-22 left-0 sm:left-auto mx-auto sm:mx-0 bg-white text-gray-900 p-5 sm:p-6 rounded-2xl shadow-2xl w-[60%] sm:w-72">
                <h3 className="text-xl font-bold mb-2">Shayn Carlson</h3>
                <p className="text-gray-600 text-sm mb-1">Loan Officer</p>
                <p className="text-gray-500 text-xs mb-1">NMLS# 76695</p>
                <div className="flex items-center gap-3 w-full">
                  <a
                    href="https://www.zillow.com/lender-profile/ShaynCarlson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Zillow Profile"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
                  >
                    <ZillowIcon size={18} />
                  </a>
                  <a
                    href="mailto:shaync@fairwaymc.com"
                    aria-label="Email Shayn Carlson"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
                  >
                    <MailIcon size={18} />
                  </a>
                  <a
                    href="tel:2088664515"
                    aria-label="Call Shayn Carlson"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
                  >
                    <PhoneIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MortgageLandingPage;