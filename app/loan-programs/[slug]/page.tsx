// app/loan-programs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { loanPrograms } from "@/app/data/loanPrograms";

export async function generateStaticParams() {
  return loanPrograms.map((program) => ({
    slug: program.id,
  }));
}

export default function LoanProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = loanPrograms.find((p) => p.id === params.slug);

  if (!program) {
    notFound();
  }

  const IconComponent = Icons[
    program.icon as keyof typeof Icons
  ] as unknown as LucideIcon;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/loan-programs"
          className="inline-flex items-center text-[#460647] hover:text-[#004d26] font-medium mb-8 transition group"
        >
          <Icons.ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition" />
          Back to All Programs
        </Link>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#460647]/10 rounded-full">
              {IconComponent && (
                <IconComponent className="w-8 h-8 text-[#460647]" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {program.title}
              </h1>
              <p className="text-gray-600">{program.subtitle}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {program.longDescription}
            </p>

            {/* Benefits */}
            {program.benefits && program.benefits.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                  {program.benefits.map((benefit: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <Icons.CheckCircle className="w-5 h-5 text-[#460647] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            {program.features && program.features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.features.map((feature: string, idx: number) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                    >
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ideal For */}
            {program.idealFor && program.idealFor.length > 0 && (
              <div className="mt-6 p-4 bg-[#F0F7F3] rounded-lg border border-[#460647]/20">
                <h3 className="text-md font-semibold text-[#460647] mb-3">
                  Who This Loan Is For
                </h3>
                <ul className="flex flex-wrap gap-2 list-none p-0">
                  {program.idealFor.map((item: string, idx: number) => (
                    <li
                      key={idx}
                      className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps */}
            {program.steps && program.steps.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {program.steps.map((step) => (
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
            {program.testimonials && program.testimonials.length > 0 && (
              <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What Our Clients Say
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.testimonials.slice(0, 2).map((testimonial, idx) => (
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
            {program.faqs && program.faqs.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {program.faqs.map((faq, idx) => (
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
            <div className="mt-8 flex flex-wrap gap-4 border-t border-gray-200 pt-8">
              <Link
                href={program.ctaLink || "/contact"}
                className="inline-flex items-center px-6 py-3 bg-[#460647] hover:bg-[#004d26] text-white font-semibold rounded-lg transition"
              >
                {program.ctaText || "Get Started"}
                <Icons.ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-lg transition"
              >
                Calculate Payments
                <Icons.Calculator className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
