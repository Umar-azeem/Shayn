// app/loan-programs/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { loanPrograms, LoanProgram } from "@/app/data/loanPrograms";

// Helper function to safely get icon component
const getIconComponent = (
  iconName: string,
): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Shield: Icons.Shield,
    Star: Icons.Star,
    Building: Icons.Building,
    Building2: Icons.Building2,
    Home: Icons.Home,
    RefreshCw: Icons.RefreshCw,
    LineChart: Icons.LineChart,
    TrendingDown: Icons.TrendingDown,
    FileText: Icons.FileText,
    Users: Icons.Users,
    CreditCard: Icons.CreditCard,
    Lock: Icons.Lock,
    TrendingUp: Icons.TrendingUp,
    HelpCircle: Icons.HelpCircle,
    Activity: Icons.Activity,
    BarChart3: Icons.BarChart3,
    Calculator: Icons.Calculator,
    Landmark: Icons.Landmark,
    ArrowRight: Icons.ArrowRight,
    CheckCircle: Icons.CheckCircle,
    X: Icons.X,
    ChevronDown: Icons.ChevronDown,
    ArrowLeft: Icons.ArrowLeft,
  };
  return iconMap[iconName] || Icons.HelpCircle;
};

function LoanProgramsLoading() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main content component
function LoanProgramsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("program");

  const selectedProgram = loanPrograms.find((p) => p.id === selectedId);

  const handleProgramClick = (program: LoanProgram) => {
    router.push(`/loan-programs?program=${program.id}`, { scroll: false });
  };

  const clearSelection = () => {
    router.push("/loan-programs", { scroll: false });
  };

  return (
    <div>
      {/* Program Cards Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanPrograms.map((program) => {
          const Icon = getIconComponent(program.icon);
          return (
            <div
              key={program.id}
              onClick={() => handleProgramClick(program)}
              className={`bg-white p-6 rounded-xl shadow-sm border transition-all cursor-pointer group hover:shadow-md hover:border-[#460647] ${
                selectedProgram?.id === program.id 
                  ? 'border-[#460647] shadow-md ring-2 ring-[#460647]/20' 
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-8 h-8 text-[#460647]" />
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#460647] transition">
                  {program.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          );
        })}
      </div> */}

      {/* Detailed Program View - Full Page Context */}
      {selectedProgram && (
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 relative animate-fadeIn">
          <button
            onClick={clearSelection}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label="Close details"
          >
            <Icons.X className="w-6 h-6" />
          </button>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[#460647]/10 rounded-full">
              {(() => {
                const Icon = getIconComponent(selectedProgram.icon);
                return <Icon className="w-8 h-8 text-[#460647]" />;
              })()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedProgram.title}
              </h2>
              <p className="text-gray-600">{selectedProgram.subtitle}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {selectedProgram.longDescription || selectedProgram.description}
            </p>

            {/* Benefits */}
            {selectedProgram.benefits &&
              selectedProgram.benefits.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                    {selectedProgram.benefits.map(
                      (benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <Icons.CheckCircle className="w-5 h-5 text-[#460647] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

            {/* Features */}
            {selectedProgram.features &&
              selectedProgram.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProgram.features.map(
                      (feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                        >
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

            {/* Ideal For */}
            {selectedProgram.idealFor &&
              selectedProgram.idealFor.length > 0 && (
                <div className="mt-6 p-4 bg-[#F0F7F3] rounded-lg border border-[#460647]/20">
                  <h3 className="text-md font-semibold text-[#460647] mb-3">
                    Who This Loan Is For
                  </h3>
                  <ul className="flex flex-wrap gap-2 list-none p-0">
                    {selectedProgram.idealFor.map(
                      (item: string, idx: number) => (
                        <li
                          key={idx}
                          className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

            {/* Steps */}
            {selectedProgram.steps && selectedProgram.steps.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {selectedProgram.steps.map((step) => (
                    <div key={step.step} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#460647] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {selectedProgram.testimonials &&
              selectedProgram.testimonials.length > 0 && (
                <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What Our Clients Say
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProgram.testimonials
                      .slice(0, 2)
                      .map((testimonial, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-4 rounded-lg border border-gray-200"
                        >
                          <p className="text-gray-700 italic">
                            "{testimonial.text}"
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-2">
                            - {testimonial.name}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

            {/* FAQs */}
            {selectedProgram.faqs && selectedProgram.faqs.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {selectedProgram.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <details className="group">
                        <summary className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-medium text-gray-900">
                          <span>{faq.question}</span>
                          <Icons.ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="p-4 text-gray-700 border-t border-gray-200">
                          {faq.answer}
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={selectedProgram.ctaLink || "/contact-us"}
                className="inline-flex items-center px-6 py-3 bg-[#460647] hover:bg-[#004d26] text-white font-semibold rounded-lg transition"
              >
                {selectedProgram.ctaText || "Get Started"}
                <Icons.ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-lg transition"
              >
                Use Our Tools
                <Icons.Calculator className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default function LoanProgramsPage() {
  return (
    <Suspense fallback={<LoanProgramsLoading />}>
      <LoanProgramsContent />
    </Suspense>
  );
}
