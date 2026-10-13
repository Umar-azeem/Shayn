"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
}

const Loan: React.FC = () => {
  const socialIcons: SocialIcon[] = [
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

  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#460647] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            A Team You Can Trust
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Meet Shayn Carlson,
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            With over 20 years of experience in residential mortgage lending,
            I{`'`}m passionate about helping individuals and families navigate
            the home financing process with confidence and clarity. Before
            entering the mortgage industry, I proudly served in the U.S. Navy,
            where I developed a strong sense of discipline, attention to detail,
            and a commitment to follow through. I{`'`}ve been happily married
            for nearly as long as I{`'`}ve been in the business, and I
            {`'`}m the proud father of two amazing boys. As a family, we love
            all things outdoors—from hiking and camping to exploring the
            mountains and rivers of our beautiful home state of Idaho. I
            {`'`}m honored to support clients from all walks of life, including
            fellow veterans, and I{`'`}m committed to delivering a lending
            experience that{`'`}s smooth, transparent, and tailored to your
            goals.
          </p>

          <Link href="/about">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#460647] hover:bg-[#460647]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              About me
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative ">
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1 ">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[400px] md:max-w-[500px] aspect-[4/5]  md:h-[550px] bg-[#460647] rounded-[20px]" />
            <Image
              src="/img/dp.png"
              alt="Shayn Carlson"
              width={480}
              height={680}
              className="absolute -bottom-[10px] h-[60%] bottom-[2px]  w-full max-w-[550px] object-contain object-bottom sm:h-[500px] sm:w-[550px] rounded-[20px]"
              priority
              unoptimized
            />
            <div className="md:hidden  absolute top-6 md:bottom-1 md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0  sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Shayn Carlson
              </h3>
              <p className="text-gray-800 mt-2 text-xs">Loan Officer</p>

              <p className="text-gray-800 text-xs mt-2">NMLS# 76695</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 ">
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#460647] border border-[#460647] flex items-center justify-center hover:bg-[#460647] transition group"
                aria-label={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 group-hover:brightness-0 text-[#460647] group-hover:invert transition-all"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;