"use client";

import {
  Handshake,
  FileCheck,
  Calculator,
  FileText,
  PenTool,
  ClipboardList,
  CreditCard,
  Home,
  Building2,
  BadgeCheck,
  CircleCheck,
  ArrowRight,
  Phone,
  Clock,
  Scale,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoanProcessPage() {
  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#460647] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <BadgeCheck className="w-4 h-4" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
                Loan Process
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-white/80 font-light mb-6 sm:mb-8">
                Below are the steps to secure a loan
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="https://wa.me/19047351895"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#460647] px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-lg text-sm sm:text-base"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-white/30 transition-transform hover:-translate-y-1 border border-white/30 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Happy Homeowner"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl" />
      </section>

      {/* Quick Stats */}
      <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-[#460647] text-2xl sm:text-3xl font-bold">
                10+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Years Experience
              </div>
            </div>
            {/* <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-[#460647] text-2xl sm:text-3xl font-bold">
                4,000+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Loans Closed
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-[#460647] text-2xl sm:text-3xl font-bold">
                14-21
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Days to Close
              </div>
            </div> */}
            <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-[#460647] text-2xl sm:text-3xl font-bold">
                580+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                A+ Credit Score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Visual Timeline */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
              Your Path to <span className="text-[#460647]">Homeownership</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
              A simple, transparent process from start to finish
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#460647]/20 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot - Desktop */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#460647] border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-3 top-5 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-[#460647] border-2 border-white shadow" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 w-full md:w-[calc(50%-30px)] ${
                      index % 2 === 0
                        ? "md:pr-4 lg:pr-8 md:text-right"
                        : "md:pl-4 lg:pl-8"
                    }`}
                  >
                    <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div
                        className={`flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 ${
                          index % 2 === 0 && "md:flex-row-reverse"
                        }`}
                      >
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#460647]/10 text-[#460647] flex items-center justify-center flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-[#460647]">
                            Step {index + 1}
                          </span>
                          <h3 className="text-base lg:text-lg font-bold text-gray-800 leading-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-[calc(50%-30px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
              Understanding the{" "}
              <span className="text-[#460647]">Loan Process</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              A comprehensive guide to each stage of your mortgage journey
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 border-b border-gray-100 bg-gray-50/50">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#460647]/10 text-[#460647] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="text-xs sm:text-sm text-gray-500">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-4 sm:p-6 space-y-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Score Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#460647]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-[#460647]/10 text-[#460647] px-3 py-1.5 rounded-full text-xs font-semibold mb-3 sm:mb-4">
                <Scale className="w-4 h-4" />
                Credit Scores Explained
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 sm:mb-4">
                Understanding Your{" "}
                <span className="text-[#460647]">Credit Score</span>
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Your credit score is one of the most important factors in
                determining your loan eligibility and interest rate. Here's what
                you need to know:
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      680+ (A+ Borrower)
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Lowest interest rates, fastest approval, close in days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      620–680
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500">
                      May require additional documentation, still eligible for
                      "A" pricing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      Below 620
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500">
                      May need sub-prime lending, less favorable terms
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-xl border border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold">FICO Score Factors:</span> 35%
                  Payment History, 30% Amounts Owed, 15% Credit History Length,
                  10% New Credit, 10% Credit Mix
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                    Credit Score Range
                  </h4>
                  <span className="text-xs sm:text-sm text-gray-500">
                    FICO Score
                  </span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">Excellent</span>
                      <span className="text-[#460647] font-bold">740+</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">Good</span>
                      <span className="text-[#460647] font-bold">670–739</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">Fair</span>
                      <span className="text-[#460647] font-bold">580–669</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span className="font-medium">Poor</span>
                      <span className="text-[#460647] font-bold">
                        Below 580
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#460647]/5 rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <span className="font-semibold">Tip:</span> Pay bills on
                    time, keep balances low, and limit credit applications to
                    improve your score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#460647]/10 text-[#460647] px-3 py-1.5 rounded-full text-xs font-semibold mb-3 sm:mb-4">
            <Clock className="w-4 h-4" />
            Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 sm:mb-4">
            How Long Does It Take?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            A typical "A" mortgage transaction takes between 14–21 business days
            to complete. With automated underwriting, this process speeds up
            greatly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center"
              >
                <div className="text-[#460647] text-xl sm:text-2xl font-bold">
                  {item.days}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#460647]/5 rounded-2xl border border-[#460647]/10">
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Ready to get started?</span>{" "}
              Contact one of our experienced Loan Officers today to discuss your
              particular mortgage needs.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-[#460647] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold hover:bg-[#460647] transition-transform hover:-translate-y-1 shadow-lg text-sm sm:text-base"
              >
                Apply Online
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#460647] px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold border border-[#460647]/30 hover:bg-gray-50 transition-transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#460647] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
              Ready to Start Your Home Loan Journey?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
              Get pre-qualified today and take the first step toward
              homeownership.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#460647] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-xl text-sm sm:text-base"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-white/30 transition-transform hover:-translate-y-1 border border-white/30 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- Data ----------

const steps = [
  {
    icon: <PenTool className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Pre-Qualification",
    description:
      "Gather information about your income and debts to determine how much you can borrow. Get pre-qualified for each loan type you may qualify for.",
  },
  {
    icon: <Calculator className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Mortgage Programs & Rates",
    description:
      "Evaluate which mortgage program best fits your needs. Consider how long you plan to keep the loan and compare rates, points, and fees.",
  },
  {
    icon: <FileText className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "The Application",
    description:
      "Complete the loan application with your mortgage professional and provide all requested documentation, including income, SSN, property address, and loan amount.",
  },
  {
    icon: <FileCheck className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Loan Estimate",
    description:
      "Receive a three-page form with important details about your loan, including estimated interest rate, monthly payment, and total closing costs.",
  },
  {
    icon: <Handshake className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Intent to Proceed",
    description:
      "Notify us in writing or by phone that you want to move forward. Lenders are required to honor the terms of the Loan Estimate for 10 business days.",
  },
  {
    icon: <ClipboardList className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Processing",
    description:
      "The processor orders credit reports, appraisal, and title report. Verifies information on the application and examines property issues.",
  },
  {
    icon: <ScrollText className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Required Documents",
    description:
      "Provide W-2s, pay-stubs, tax returns, bank statements, and other documentation specific to your loan type and situation.",
  },
  {
    icon: <CreditCard className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Credit Reports",
    description:
      "Your credit profile is analyzed to assess risk. FICO scores consider payment history, amounts owed, credit history length, new credit, and credit mix.",
  },
  {
    icon: <Building2 className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Appraisal Basics",
    description:
      "An appraiser evaluates the property using cost, comparison, and income approaches to determine the market value of the home.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Underwriting",
    description:
      "The underwriter reviews the complete package to determine if the loan is acceptable. Additional information may be requested if the loan is put into 'suspense.'",
  },
  {
    icon: <FileCheck className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Closing Disclosure",
    description:
      "Receive a five-page form with final loan details, projected monthly payments, and closing costs. You must receive this at least 3 business days before closing.",
  },
  {
    icon: <Home className="w-5 h-5 lg:w-6 lg:h-6" />,
    title: "Closing",
    description:
      "Sign loan documents, bring a cashier's check for down payment and closing costs, and provide identification and proof of insurance.",
  },
];

const sections = [
  {
    icon: <PenTool className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Pre-Qualification",
    subtitle: "Starting the loan process",
    content: (
      <>
        <p>
          Pre-qualification starts the loan process. Once a lender has gathered
          information about a borrower's income and debts, a determination can
          be made as to how much the borrower can pay for a house. Since
          different loan programs can cause different valuations a borrower
          should get pre-qualified for each loan type the borrower may qualify
          for.
        </p>
        <p>
          In attempting to approve homebuyers for the type and amount of
          mortgage they want, mortgage companies look at two key factors. First,
          the borrower's ability to repay the loan and, second, the borrower's
          willingness to repay the loan.
        </p>
        <p>
          Ability to repay the mortgage is verified by your current employment
          and total income. Generally speaking, mortgage companies prefer for
          you to have been employed at the same place for at least two years, or
          at least be in the same line of work for a few years.
        </p>
        <p>
          The borrower's willingness to repay is determined by examining how the
          property will be used. For instance, will you be living there or just
          renting it out? Willingness is also closely related to how you have
          fulfilled previous financial commitments, thus the emphasis on the
          Credit Report and/or your rental payment history.
        </p>
        <p>
          It is important to remember that there are no rules carved in stone.
          Each applicant is handled on a case-by-case basis. So even if you come
          up a little short in one area, your stronger point could make up for
          the weak one. Mortgage companies could not stay in business if they
          did not generate loan business, so it is in everyone's best interest
          to see that you qualify.
        </p>
      </>
    ),
  },
  {
    icon: <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Mortgage Programs and Rates",
    subtitle: "Choosing the right loan for you",
    content: (
      <>
        <p>
          To properly analyze a mortgage program, the borrower needs to think
          about how long he plans to keep the loan. If you plan to sell the
          house in a few years, an adjustable or balloon loan may make more
          sense. If you plan to keep the house for a longer period, a fixed loan
          may be more suitable.
        </p>
        <p>
          With so many programs from which to choose, each with different rates,
          points and fees, shopping for a loan can be time consuming and
          frustrating. An experienced mortgage professional can evaluate a
          borrower's situation and recommend the most suitable mortgage program,
          thus allowing the borrower to make an informed decision.
        </p>
      </>
    ),
  },
  {
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "The Application",
    subtitle: "Formalizing your loan request",
    content: (
      <>
        <p>
          The application is the next step of the loan process. With the aid of
          a mortgage professional, the borrower completes the application and
          provides all Requested Documentation.
        </p>
        <p>
          A loan application is not considered complete until you have given us
          at least the following information: (1) Your name, (2) Your income,
          (3) Your Social Security number (and authorization to check your
          credit), (4) The address of the home you plan to purchase or
          refinance, (5) An estimate of the home's value and (6) The loan amount
          you want to borrow.
        </p>
      </>
    ),
  },
  {
    icon: <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "The Loan Estimate",
    subtitle: "Understanding your loan terms",
    content: (
      <>
        <p>
          A Loan Estimate is a three-page form that you receive after applying
          for a mortgage. The Loan Estimate tells you important details about
          the loan you have requested. We will deliver this to you within 3 days
          of your fully completed loan application.
        </p>
        <p>
          The Loan Estimate provides you with important information, including
          the estimated interest rate, monthly payment, and total closing costs
          for the loan. The Loan Estimate also gives you information about the
          estimated costs of taxes and insurance, and how the interest rate and
          payments may change in the future.
        </p>
        <p>
          In addition, the Loan Estimate will also indicate if the loan has
          special features that you will want to be aware of, like penalties for
          paying off the loan early (a prepayment penalty) or increases to the
          mortgage loan balance even if payments are made on time (negative
          amortization).
        </p>
        <p>
          The form uses clear language and is designed to help you better
          understand the terms of the mortgage loan you've applied for. All
          lenders are required to use the same standard Loan Estimate form. This
          makes it easier for you to compare mortgage loans so that you can
          choose the one that is right for you. When you receive a Loan Estimate
          it does not mean that your loan has been approved or denied. The Loan
          Estimate shows you what loan terms we can offer you if you decide to
          move forward.
        </p>
      </>
    ),
  },
  {
    icon: <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "The Intent to Proceed",
    subtitle: "Moving forward with your application",
    content: (
      <>
        <p>
          After you receive your Loan Estimate, it is up to you to decide
          whether to move forward with us or not. If you decide not to proceed
          with an application for a particular loan, you don't need to do
          anything further.
        </p>
        <p>
          If you do intend to proceed with us, you must take the next step and
          tell us in writing or by phone that you want to move forward with the
          application for that loan. All lenders are required to honor the terms
          of the Loan Estimate for 10 business days. So if you decide to move
          forward more than 10 business days after you receive a Loan Estimate,
          please realize that market conditions may make it necessary to revise
          the terms and estimated costs and provide you with a revised Loan
          Estimate.
        </p>
      </>
    ),
  },
  {
    icon: <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Processing",
    subtitle: "Verifying your information",
    content: (
      <>
        <p>
          Once the application has been submitted, the processing of the
          mortgage begins. The Processor orders the Credit Report, Appraisal and
          Title Report. The information on the application, such as bank
          deposits and payment histories, are then verified.
        </p>
        <p>
          Any credit derogatories, such as late payments, collections and/or
          judgments require a written explanation. The processor examines the
          Appraisal and Title Report checking for property issues that may
          require further investigation. The entire mortgage package is then put
          together for submission to the lender.
        </p>
      </>
    ),
  },
  {
    icon: <ScrollText className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Required Documents",
    subtitle: "What you'll need to provide",
    content: (
      <>
        <p>
          Once you have completed the loan application, accepted the loan
          estimate and indicated your intent to proceed we will request
          documents from you in order to obtain your loan approval. The
          following statements are not a complete list of what will be needed
          but are intended to give you some idea of what we will need from you.
        </p>
        <p>
          If you are purchasing or refinancing your home, and you are salaried,
          you will need to provide the past two-years W-2s and one month of
          pay-stubs. If you are self-employed you will need to provide the past
          two-years tax returns. If you own rental property you will need to
          provide Rental Agreements and the past two-years' tax returns.
        </p>
        <p>
          If you wish to speed up the approval process, you should also provide
          the past three months' bank, stock and mutual fund account statements.
          Provide the most recent copies of any stock brokerage or IRA/401k
          accounts that you might have.
        </p>
        <p>
          If you are requesting cash-out, you will need a "Use of Proceeds"
          letter of explanation. Provide a copy of the divorce decree if
          applicable. If you are not a US citizen, provide a copy of your green
          card (front and back), or if you are NOT a permanent resident provide
          your H-1 or L-1 visa.
        </p>
        <p>
          If you are applying for a Home Equity Loan you will need, in addition
          to the above documents, to provide a copy of your first mortgage note
          and deed of trust. These items will normally be found in your mortgage
          closing documents.
        </p>
      </>
    ),
  },
  {
    icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Credit Reports",
    subtitle: "Understanding your credit profile",
    content: (
      <>
        <p>
          Most people applying for a home mortgage need not worry about the
          effects of their credit history during the mortgage process. However,
          you can be better prepared if you get a copy of your Credit Report
          before you apply for your mortgage. That way, you can take steps to
          correct any negatives before making your application.
        </p>
        <p>
          A Credit Profile refers to a consumer credit file, which is made up of
          various consumer credit reporting agencies. It is a picture of how you
          paid back the companies you have borrowed money from, or how you have
          met other financial obligations.
        </p>
        <p>
          <span className="font-semibold">
            Five categories of information on a credit profile:
          </span>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Identifying Information</li>
          <li>Employment Information</li>
          <li>Credit Information</li>
          <li>Public Record Information</li>
          <li>Inquiries</li>
        </ul>
        <p>
          <span className="font-semibold">NOT included</span> on your credit
          profile is race, religion, health, driving record, criminal record,
          political preference, or income.
        </p>
        <p>
          If you have had credit problems, be prepared to discuss them honestly
          with a mortgage professional who will assist you in writing your
          "Letter of Explanation." Knowledgeable mortgage professionals know
          there can be legitimate reasons for credit problems, such as
          unemployment, illness, or other financial difficulties. If you had
          problems that have been corrected (reestablishment of credit), and
          your payments have been on time for a year or more, your credit may be
          considered satisfactory.
        </p>
      </>
    ),
  },
  {
    icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Appraisal Basics",
    subtitle: "Determining property value",
    content: (
      <>
        <p>
          An appraisal of real estate is the valuation of the rights of
          ownership. The appraiser must define the rights to be appraised. The
          appraiser does not create value, the appraiser interprets the market
          to arrive at a value estimate.
        </p>
        <p>
          As the appraiser compiles data pertinent to a report, consideration
          must be given to the site and amenities as well as the physical
          condition of the property. Considerable research and collection of
          data must be completed prior to the appraiser arriving at a final
          opinion of value.
        </p>
        <p>
          <span className="font-semibold">
            Three common approaches to value:
          </span>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold">Cost Approach:</span> What it would
            cost to replace existing improvements, less depreciation.
          </li>
          <li>
            <span className="font-semibold">Comparison Approach:</span> Uses
            other "bench mark" properties (comps) of similar size, quality and
            location that have recently sold.
          </li>
          <li>
            <span className="font-semibold">Income Approach:</span> Used for
            rental properties, based on the net income the property produces.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Underwriting",
    subtitle: "Final loan review",
    content: (
      <>
        <p>
          Once the processor has put together a complete package with all
          verifications and documentation, the file is sent to the lender. The
          underwriter is responsible for determining whether the package is
          deemed an acceptable loan.
        </p>
        <p>
          If more information is needed, the loan is put into "suspense" and the
          borrower is contacted to supply more information and/or documentation.
          If the loan is acceptable as submitted, the loan is put into an
          "approved" status.
        </p>
      </>
    ),
  },
  {
    icon: <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Closing Disclosure",
    subtitle: "Final loan terms",
    content: (
      <>
        <p>
          The Closing Disclosure is a five-page form that provides final details
          about the mortgage loan you have selected. It includes the loan terms,
          your projected monthly payments, and how much you will pay in fees and
          other costs to get your mortgage (closing costs).
        </p>
        <p>
          We are required by law to give you the Closing Disclosure at least
          three business days before you close on your mortgage loan. This
          three-day window allows you time to compare your final terms and costs
          to those estimated in the Loan Estimate that you previously received
          from us. The three days also gives you time to ask us any questions
          before you go to the closing table.
        </p>
      </>
    ),
  },
  {
    icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Closing",
    subtitle: "Finalizing your loan",
    content: (
      <>
        <p>
          Once the loan is approved, the file is transferred to the closing and
          funding department. The funding department notifies the broker and
          closing attorney of the approval and verifies broker and closing fees.
          The closing attorney then schedules a time for the borrower to sign
          the loan documentation.
        </p>
        <p>
          <span className="font-semibold">
            At the closing the borrower should:
          </span>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Bring a cashier's check for your down payment and closing costs if
            required. Personal checks are normally not accepted.
          </li>
          <li>
            Review the final loan documents. Make sure that the interest rate
            and loan terms are what you agreed upon. Also, verify that the names
            and address on the loan documents are accurate.
          </li>
          <li>Sign the loan documents.</li>
          <li>Bring identification and proof of insurance.</li>
        </ul>
        <p>
          After the documents are signed, the closing attorney returns the
          documents to the lender who examines them and, if everything is in
          order, arranges for the funding of the loan. Once the loan has funded,
          the closing attorney arranges for the mortgage note and deed of trust
          to be recorded at the county recorder's office.
        </p>
      </>
    ),
  },
];

const timelineItems = [
  { days: "1-3", label: "Application & Estimate" },
  { days: "3-7", label: "Processing" },
  { days: "7-14", label: "Underwriting" },
  { days: "14-21", label: "Closing" },
];
