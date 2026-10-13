"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What credit score do I need to buy a home?",
    answer:
      "Credit score requirements vary by loan program. Some options are available with lower scores, and others focus more on overall financial profile than a single number. We have solutions even for low score or no score borrowers, and resources to improve your score fast when needed.",
  },
  {
    question: "Do you charge an origination fee?",
    answer:
      "In many cases, we do not charge any lender origination fee. Fees can vary depending on the loan program and scenario, but we're always transparent upfront so there are no surprises.",
  },
  {
    question: "Are you a direct lender or a broker?",
    answer:
      "We combine the best of both worlds. We operate as a direct lender while offering the same loan programs and flexibility people associate with brokers. That means underwriting and processing are handled in-house, so you get better communication and faster decisions, without the layered broker points and fees that can come with some brokers.",
  },
  {
    question: "Can I get approved if I'm self-employed or 1099?",
    answer:
      "Yes. There are loan programs designed for self-employed and 1099 borrowers that don't rely solely on traditional tax returns.",
  },
  {
    question: "How much do I need for a down payment?",
    answer:
      "Down payment requirements depend on the loan program. Some options allow for 0% down or low down payments, and we have assistance programs available for qualified buyers which in many cases eliminate the need for a downpayment.",
  },
  {
    question: "How long does the mortgage process usually take?",
    answer:
      "Most transactions take 2–4 weeks once under contract, though timelines can vary depending on the loan type and how quickly documentation is provided.",
  },
  {
    question: "What if I've already been denied by another lender?",
    answer:
      "A denial doesn't always mean there are no options. Different lenders and programs have different guidelines, and a second look often changes the outcome. We never turn someone away just because they were denied elsewhere.",
  },
  {
    question: "Do you work with investors as well as homeowners?",
    answer:
      "Yes. Many investors trust us as a long-term financing partner. We have many loan programs that are ideal for investors.",
  },
  {
    question: "Can I use gift funds for my down payment?",
    answer:
      "Yes. In most cases, gift funds from family are allowed. We can help guide you in the best way to receive and use gift funds.",
  },
  {
    question: "Do you work with first-time homebuyers?",
    answer: "Yes, we have many options available for first time home buyers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#460647] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* 3D Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-white font-bold uppercase text-center tracking-widest text-sm sm:text-base drop-shadow-lg">
          FAQ
        </p>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mt-3 mb-8 sm:mb-12"
          style={{
            textShadow:
              "0 1px 0 #0d4a73, 0 2px 0 #0d4a73, 0 3px 0 #0d4a73, 0 4px 0 #0d4a73, 0 5px 0 #0d4a73, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/15"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start sm:items-center gap-3 sm:gap-4 text-left"
              >
                {openIndex === index ? (
                  <Minus className="text-white w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0 drop-shadow-md" />
                ) : (
                  <Plus className="text-white w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0 drop-shadow-md" />
                )}

                <span
                  className="text-base sm:text-xl font-bold text-white drop-shadow-md"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 sm:mt-4 ml-8 sm:ml-11 text-sm sm:text-base text-white/90 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
