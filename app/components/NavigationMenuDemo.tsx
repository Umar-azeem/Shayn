"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  Info,
  Phone,
  Home as HomeIcon,
  Shield,
  Building2,
  TrendingUp,
  RefreshCw,
  Landmark,
  BarChart3,
  FileText as FileTextIcon,
  Activity,
  PhoneCall,
  SquareArrowOutUpRight,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/* =========================================================
   DATA — add/remove items here, UI adapts automatically
========================================================= */
const loanPrograms = [
  {
    title: "FHA Loans",
    href: "/loan-programs?program=fha",
    description:
      "FHA loans are mortgages insured by the Federal Housing Administration (FHA).",
    icon: HomeIcon,
  },
  {
    title: "VA Home Loans",
    href: "/loan-programs?program=va",
    description:
      "VA Loans offer options for veterans, service members, and their surviving spouses.",
    icon: Shield,
  },
  {
    title: "DPA Loans",
    href: "/loan-programs?program=dpa",
    description:
      "A Down Payment Assistance (DPA) loan helps cover a portion of the down payment on a home.",
    icon: Building2,
  },
  {
    title: "Jumbo Loans",
    href: "/loan-programs?program=jumbo",
    description: "Financing solutions for high-value properties.",
    icon: TrendingUp,
  },
  {
    title: "Refinance",
    href: "/loan-programs?program=refinance",
    description:
      "Refinance and cash-out refinance loans can be beneficial for clients by potentially.",
    icon: RefreshCw,
  },
  {
    title: "Non-QM",
    href: "/loan-programs?program=non-qm",
    description:
      "A Non-QM loan, or Non-Qualified Mortgage loan, is a type of mortgage loan that does not meet the standards set by the government-sponsored.",
    icon: Landmark,
  },
  {
    title: "Rehab Loans",
    href: "/loan-programs?program=rehab",
    description:
      "A rehab loan, also known as a renovation loan, is a type of loan used to finance the purchase and renovation of a property",
    icon: BarChart3,
  },
  {
    title: "USDA Loans",
    href: "/loan-programs?program=usda",
    description:
      "USDA loans are designed to help low- and moderate-income individuals and families buy homes in rural areas.",
    icon: FileTextIcon,
  },
  {
    title: "Adjustable-Rate (ARM) Loans",
    href: "/loan-programs?program=arm",
    description: "Start with lower rates that adjust over time.",
    icon: Activity,
  },
  {
    title: "Fixed-Rate (FRM) Loans",
    href: "/loan-programs?program=fixed-rate",
    description: "Start with lower rates that adjust over time.",
    icon: Activity,
  },
];

/* Desktop nav links — add/remove here and the layout stays even */
const desktopLinks = [
  { href: "/about", label: "About" },
  { href: "/Loan-Process", label: "Loan Process" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-of-use", label: "Terms" },
];

/* Mobile nav links (non-loan) */
const mobileNavLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/terms-of-use", label: "Terms of Use", icon: FileTextIcon },
  { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
  { href: "/contact-us", label: "Contact", icon: Phone },
];

const mobileLoanLinks = loanPrograms.map((p) => ({
  href: p.href,
  label: p.title,
  icon: p.icon,
}));

/* =========================================================
   Component
========================================================= */
function NavigationMenuDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileLoanOpen, setMobileLoanOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="animated-navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-3 py-2
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[#460647] shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* ================= MOBILE ================= */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-1 rounded-full text-[#460647] h-9 w-9"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <div className="flex flex-row gap-2 mx-2">
            <Link href="/contact-us">
              <Button
                variant="default"
                size="icon"
                className="lg:hidden bg-white hover:bg-white my-1 rounded-full text-[#460647] h-9 w-9"
              >
                <SquareArrowOutUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-1 rounded-full text-[#460647] h-9 w-9"
            >
              <a
                href="tel:+12088664515"
                className="flex gap-2 justify-center w-full"
              >
                <PhoneCall className="w-4 h-4 text-[#460647]" />
              </a>
            </Button>
          </div>

          <SheetContent
            side="left"
            className="w-[300px] sm:w-[420px] bg-[#460647] text-white border-white/10 p-0 overflow-y-auto"
          >
            <div className="flex h-24 items-center border-b border-white/10 px-3">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-40 h-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <nav className="flex flex-col gap-1 p-3">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <link.icon className="h-4 w-4 text-white" />
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setMobileLoanOpen(!mobileLoanOpen)}
                  className="flex items-center justify-between w-full gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon className="h-4 w-4 text-white" />
                    Loan Programs
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileLoanOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileLoanOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/20 pl-3">
                    {mobileLoanLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        rel="noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <link.icon className="h-4 w-4 text-white flex-shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="lg:hidden flex flex-col w-full items-center gap-2 text-white px-3 pb-4">
              <Link
                href="tel:+12088664515"
                className="flex gap-2 justify-center w-full"
              >
                <button className="bg-white flex justify-center gap-2 text-[#460647] px-4 w-full py-2.5 rounded-lg text-sm font-semibold transition transform duration-300 hover:-translate-y-1">
                  (208) 866-4515
                </button>
              </Link>
              <Link href="/Loan-Process" className="w-full">
                <button className="bg-white text-[#460647] px-4 w-full py-2.5 rounded-lg text-sm font-semibold transition transform duration-300 hover:-translate-y-1">
                  Apply Online
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0.5">
              {/* Logo */}
              <div className="flex items-center pr-2">
                <Link href="/">
                  <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-36 h-auto object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop text links — auto-rendered from array */}
              {desktopLinks.map((link) => (
                <NavigationMenuItem
                  key={link.href}
                  className="text-white text-md font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 block whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Loan Programs dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white text-sm font-medium px-3 py-2">
                  Loan Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[560px] grid-cols-2 gap-1 p-3 lg:w-[720px] lg:grid-cols-3">
                    {loanPrograms.map((program) => (
                      <li key={program.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={program.href}
                            rel="noreferrer"
                            className="flex items-start gap-2.5 rounded-lg p-2.5 text-xs transition-colors hover:bg-[#460647]/5 group"
                          >
                            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[#460647]/10 text-[#460647] group-hover:bg-[#460647] group-hover:text-white transition-colors">
                              <program.icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <div className="font-semibold leading-none text-[#460647] text-sm">
                                {program.title}
                              </div>
                              <div className="line-clamp-2 leading-snug text-[#460647]/70 text-[11px]">
                                {program.description}
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 text-white">
          <Link
            href="tel:+12088664515"
            className="flex items-center gap-1.5 text-sm font-medium hover:text-white/80 transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="whitespace-nowrap">208-866-4515</span>
          </Link>
          <Link href="/Loan-Process">
            <button className="bg-white mr-2 text-[#460647] px-4 py-2 rounded-lg text-sm font-semibold transition transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenuDemo;