import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          With over 20 years of experience in residential mortgage lending, I
          {`'`}m passionate about helping individuals and families navigate the
          home financing process with confidence and clarity. Before entering
          the mortgage industry, I proudly served in the U.S. Navy, where I
          developed a strong sense of discipline, attention to detail, and a
          commitment to follow through. I currently live in Idaho with my wife
          and two amazing boys.
        </p>

        <p className="mt-6">For Licensing Information go to:</p>

        <p className="mt-6">
          © {currentYear} ShaynCarlson.com. | All Rights Reserved. Shayn Carlson
          NMLS# 76695 & Fairway Independent Mortgage Corporation NMLS # 2289
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logo.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;