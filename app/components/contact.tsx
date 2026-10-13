"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Clock, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const socialLinks = [
  {
    id: "zillow",
    src: "https://api.iconify.design/simple-icons:zillow.svg?color=%23E46A52",
    alt: "Zillow",
    url: "https://www.zillow.com/lender-profile/ShaynCarlson/",
  },
  {
    id: "gmail",
    src: "https://api.iconify.design/simple-icons:gmail.svg?color=%23E46A52",
    alt: "Gmail",
    url: "mailto:shaync@fairwaymc.com",
  },
  {
    id: "phone",
    src: "https://api.iconify.design/solar:phone-bold.svg?color=%23E46A52",
    alt: "Phone",
    url: "tel:+12088664515",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const state = formData.get("state") as string;
    const primaryGoal = formData.get("primaryGoal") as string;
    const message = formData.get("message") as string;

    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
State: ${state}
Primary Goal: ${primaryGoal}

Message:
${message || "No additional message provided."}

---
This inquiry was sent from the Shayn Carlson Mortgage website.`,
    );

    window.open(
      `mailto:shaync@fairwaymc.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank",
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#460647] flex items-center justify-center ">
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 border border-slate-200 rounded-2xl text-center">
          <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4 rounded-full">
            <CheckCircle2 className="w-8 h-8 text-[#460647]" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Message Ready!
          </h3>
          <p className="text-slate-600 mb-2">
            Your email client has been opened with your message pre-filled.
          </p>
          <p className="text-slate-500 text-sm mb-6">
            If it didn{`'`}t open, please contact us directly at{" "}
            <a
              href="mailto:shaync@fairwaymc.com"
              className="text-[#460647] underline font-medium"
            >
              shaync@fairwaymc.com
            </a>
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="bg-[#011829] hover:bg-[#012029] text-white"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#1f1f1f]">
      <div className="relative rounded-2xl text-white  sm:py-24   text-center overflow-hidden  ">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />

        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#460647] to-[#c000c4]  opacity-65" />

        <div className="relative z-10 max-w-4xl mx-auto  p-13">
          <p className="text-green-300 uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-3">
            Licensed Loan Officer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Contact Shayn Carlson
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Ready for a clear, straightforward mortgage plan? Let&apos;s
            connect.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                A Direct Line to Expert Advice
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                You&apos;re not just filling out a form. You&apos;re starting a
                conversation with an experienced mortgage loan officer dedicated
                to your financial success.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-[#460647]">
                Why Start the Conversation?
              </h3>
              <div className="flex gap-4">
                <CheckCircle2 className="text-[#460647] w-5 h-5 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    Fast, Personalized Response
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Get answers tailored to your situation, not a generic
                    template email.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-[#460647] w-5 h-5 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-sm sm:text-base">
                    No Obligation, No Pressure
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    This is about discovery and planning. I&apos;m here to
                    provide clarity, not a heavy sales pitch.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 space-y-6">
              <h3 className="font-semibold text-lg">Other Ways to Connect</h3>

              <a
                href="tel:+12088664515"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#460647] shrink-0 group-hover:bg-[#460647] group-hover:text-white transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 leading-tight group-hover:text-[#460647] transition">
                    (208) 866-4515
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Call or Text for a Quick Chat, any time, 7 days a week
                  </p>
                </div>
              </a>

              <a
                href="mailto:shaync@fairwaymc.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#460647] shrink-0 group-hover:bg-[#460647] group-hover:text-white transition">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 leading-tight group-hover:text-[#460647] transition break-all">
                    shaync@fairwaymc.com
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Email for Detailed Inquiries
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#460647] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-md text-gray-900 leading-tight">
                    Business Hours
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Mon – Sun: 8:30 AM – 7:00 PM{" "}
                    <span className="text-gray-400 font-medium text-xs block sm:inline sm:ml-1">
                      (Mountain Standard Time)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
                Follow &amp; Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((icon) => (
                  <a
                    key={icon.id}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-[#460647] transition group"
                    aria-label={icon.alt}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={18}
                      height={18}
                      className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all"
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send a Message
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="mailto:shaync@fairwaymc.com"
                  className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  shaync@fairwaymc.com
                </a>

                <a
                  href="tel:+12088664515"
                  className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  (208) 866-4515
                </a>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50 text-slate-900"
                  >
                    <option value="">Select a state...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Primary Goal *
                  </label>
                  <select
                    name="primaryGoal"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50 text-slate-900"
                  >
                    <option value="">Select a goal...</option>
                    <option value="Home Purchase">Home Purchase</option>
                    <option value="Refinance for Lower payment">
                      Refinance for Lower payment
                    </option>
                    <option value="Refinance for Cash out">
                      Refinance for Cash out
                    </option>
                    <option value="Home Equity Line of Credit (HELOC)">
                      Home Equity Line of Credit (HELOC)
                    </option>
                    <option value="Investment Property (Purchase or Refinance)">
                      Investment Property (Purchase or Refinance)
                    </option>
                    <option value="Commercial Real Estate Finance options">
                      Commercial Real Estate Finance options
                    </option>
                    <option value="General Home or Commercial Finance Questions">
                      General Home or Commercial Finance Questions
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#460647] bg-gray-50 resize-none"
                    placeholder="Tell me about your mortgage needs..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#460647] hover:bg-[#f85d3e] text-white font-semibold py-6 rounded-xl disabled:opacity-70 transition transform duration-300 hover:-translate-y-0.5 shadow-md"
                >
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    Your email client will open with your message pre-filled
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-12 text-xs text-gray-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-start gap-x-6 gap-y-2 font-medium text-gray-700 text-sm">
            <span>NMLS ID: 76695</span>
            <Link href="tel:+12088664515" className="flex gap-2 w-full px-4">
              <button className="">(208) 866-4515 </button>
            </Link>
          </div>
          <p className="leading-relaxed">
            <strong>Equal Housing Opportunity:</strong> Shayn Carlson Mortgage
            is an Equal Housing Opportunity lender. We are pledged to the letter
            and spirit of U.S. policy for the achievement of equal housing
            opportunity throughout the Nation.
          </p>
          <p className="text-gray-400 leading-relaxed">
            NMLS # 76695 — Licensed in ID.
          </p>
        </div>
      </footer>
    </div>
  );
}
