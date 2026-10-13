// app/data/loanPrograms.ts

export interface LoanProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features?: string[];
  idealFor?: string[];
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

export const loanPrograms: LoanProgram[] = [
  {
    id: "fha",
    title: "FHA Loans",
    subtitle: "FHA loans are mortgages insured by the Federal Housing Administration (FHA).",
    description: "FHA loans are a popular option for first-time homebuyers because of their low down payment requirements and more lenient credit and income qualifications.",
    longDescription: "FHA loans are mortgages insured by the Federal Housing Administration (FHA). They are a popular option for first-time homebuyers because of their low down payment requirements and more lenient credit and income qualifications. FHA loans provide a clear path forward with competitive terms and tailored conditions for borrowers who may not qualify for conventional financing.",
    icon: "Home",
    benefits: [
      "FHA loans typically have great interest rates",
      "Less than perfect credit: A FICO score as low as 580 may be accepted for a 3.5% down payment",
      "Low down payment: Borrowers with a credit score of 580+ can qualify for as little as 3.5% down",
      "Ask about our Down Payment Assistance programs",
      "Closing costs can be factored into the Contract as Seller Concession"
    ],
    features: [
      "Down payment as low as 3.5%",
      "Credit scores as low as 580 may qualify",
      "Competitive, fixed interest rates",
      "Can be used for single-family homes, multi-unit properties, and more"
    ],
    idealFor: [
      "First-time home buyers",
      "Borrowers with limited savings for a down payment",
      "Those with credit scores below 700"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our FHA loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!"
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the FHA loan options and found the perfect fit. I couldn't be happier."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for an FHA loan?",
        answer: "FHA loans are available to borrowers with a credit score of 580 or higher and a down payment of at least 3.5%. Borrowers with lower credit scores may still qualify with a higher down payment."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income (pay stubs, W-2s, or tax returns), bank statements, identification, and information about your employment history."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "va",
    title: "VA Home Loans",
    subtitle: "VA Loans offer options for veterans, service members, and their surviving spouses.",
    description: "The VA Loan is a Zero Down Payment loan for eligible veterans. Purchase or refinance up to 100% of your homes value with no monthly mortgage insurance.",
    longDescription: "VA Loans offer options for veterans, service members, and their surviving spouses. The VA Loan is a Zero Down Payment loan for eligible veterans. Purchase or refinance up to 100% of your homes value with no monthly mortgage insurance. This exclusive benefit provides competitive rates and flexible credit guidelines for those who have served our country.",
    icon: "Shield",
    benefits: [
      "VA loans typically have great interest rates",
      "VA Loans have $0 down payment up to the Veteran's remaining VA eligibility",
      "Less than perfect credit: A FICO score as low as 580 may be accepted",
      "No PMI so the monthly mortgage payment for Veterans is lower than traditional loans",
      "Closing costs can be factored into the Contract as Seller Concession"
    ],
    features: [
      "Zero down payment required",
      "No private mortgage insurance (PMI)",
      "Competitive interest rates",
      "Limited closing costs"
    ],
    idealFor: [
      "Active-duty service members",
      "Veterans",
      "Eligible surviving spouses"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Michael T.",
        text: "As a veteran, the VA loan process was seamless. Billy understood the unique requirements and made sure everything went smoothly. I'm now in my dream home with zero down."
      },
      {
        name: "Sarah & James K.",
        text: "We were able to purchase our home with no down payment and no PMI. Billy's expertise with VA loans was invaluable throughout the entire process."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a VA loan?",
        answer: "Active-duty service members, veterans, and eligible surviving spouses may qualify for VA loans. You'll need a Certificate of Eligibility from the VA."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need your DD-214, Certificate of Eligibility, proof of income, bank statements, and identification."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "dpa",
    title: "DPA Loans",
    subtitle: "A Down Payment Assistance (DPA) loan helps cover a portion of the down payment on a home.",
    description: "DPA loans are often provided by government agencies, non-profits, or private lenders with favorable terms and can lower the amount needed for a down payment.",
    longDescription: "A Down Payment Assistance (DPA) loan helps cover a portion of the down payment on a home, making homeownership easier for the borrower. DPA loans are often provided by government agencies, non-profits, or private lenders with favorable terms and can lower the amount needed for a down payment. This assistance can be structured as a grant, forgivable loan, or deferred payment loan.",
    icon: "Building2",
    benefits: [
      "Reduces the amount of cash needed to purchase a home",
      "Can be used in combination with FHA, VA, and conventional loans",
      "May be available as a grant that doesn't need to be repaid",
      "Helps make homeownership more accessible for first-time buyers",
      "Can be structured as a forgivable or deferred payment loan"
    ],
    features: [
      "Covers a portion of the down payment",
      "Often provided by government agencies or non-profits",
      "Favorable terms available",
      "Can be combined with other loan programs"
    ],
    idealFor: [
      "First-time homebuyers with limited savings",
      "Borrowers who qualify for a mortgage but lack down payment funds",
      "Low-to-moderate income families"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Emily R.",
        text: "The DPA program was a lifesaver. I never thought I could afford a home, but with down payment assistance, I'm now a proud homeowner!"
      },
      {
        name: "David & Maria L.",
        text: "We had the income for a mortgage but not the savings for a down payment. Billy found us a DPA program that made everything possible."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for DPA loans?",
        answer: "Eligibility varies by program but typically includes first-time homebuyers, low-to-moderate income borrowers, and those with good credit."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income, bank statements, tax returns, and identification. Additional documentation may be required for the DPA program."
      }
    ],
    ctaText: "Learn More About DPA",
    ctaLink: "/contact"
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    subtitle: "Financing solutions for high-value properties that exceed conforming loan limits.",
    description: "A jumbo loan is a great option for someone who is looking to finance a high-end property that exceeds the conforming loan limit and requires a loan amount larger than what is typically offered by government-sponsored enterprises.",
    longDescription: "A jumbo loan is a great option for someone who is looking to finance a high-end property that exceeds the conforming loan limit and requires a loan amount larger than what is typically offered by government-sponsored enterprises. These loans are ideal for borrowers who have a strong financial profile, including a high credit score and a significant down payment, and who are looking for a loan that offers a competitive interest rate and flexible terms.",
    icon: "TrendingUp",
    benefits: [
      "Finances high-value properties beyond conventional limits",
      "Competitive interest rates for qualified borrowers",
      "Flexible terms available",
      "Ideal for luxury homes and expensive markets"
    ],
    features: [
      "Financing for high-value properties",
      "Competitive interest rates available",
      "Flexible loan terms",
      "Strong financial profile required"
    ],
    idealFor: [
      "Buyers purchasing luxury homes",
      "Those in high-cost real estate markets",
      "Borrowers with strong credit and significant assets"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Robert H.",
        text: "Purchasing our luxury home required a jumbo loan. Billy's expertise made the process smooth and stress-free."
      },
      {
        name: "Jennifer W.",
        text: "We needed financing that exceeded conventional limits. Billy found us a great jumbo loan with competitive terms."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a jumbo loan?",
        answer: "Borrowers with excellent credit, significant assets, and a larger down payment typically qualify for jumbo loans."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need extensive documentation including tax returns, bank statements, proof of assets, and detailed employment history."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "refinance",
    title: "Refinance",
    subtitle: "Refinance and cash-out refinance loans can be beneficial for clients by potentially lowering their monthly payments, decreasing their interest rate, and providing access to additional cash.",
    description: "A mortgage refinance is the replacement of an existing mortgage with another mortgage under different terms. Mortgage refinancing can lower your rate, which can add up to significant savings.",
    longDescription: "A mortgage refinance is the replacement of an existing mortgage with another mortgage under different terms. Mortgage refinancing can lower your rate, which can add up to significant savings. By refinancing your existing loan, the total finance charges may be higher over the life of the loan, but the monthly savings can provide immediate relief and financial flexibility.",
    icon: "RefreshCw",
    benefits: [
      "Lower your interest rate",
      "Reduce your monthly payment",
      "Shorten your loan term",
      "Access cash for home improvements or debt consolidation"
    ],
    features: [
      "Lower your interest rate",
      "Reduce your monthly payment",
      "Shorten your loan term",
      "Access cash for home improvements or debt consolidation"
    ],
    idealFor: [
      "Homeowners looking to save money with a lower rate",
      "Those wanting to consolidate high-interest debt",
      "Borrowers who need to access home equity"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Mark & Lisa D.",
        text: "Refinancing with Billy saved us hundreds of dollars a month. The process was quick and easy!"
      },
      {
        name: "Carol S.",
        text: "I was able to access my home equity for renovations. Billy made the cash-out refinance process simple and transparent."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for refinancing?",
        answer: "Homeowners with sufficient equity and good credit typically qualify for refinancing. Lenders will evaluate your debt-to-income ratio and home value."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need recent pay stubs, tax returns, bank statements, and information about your current mortgage."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "cash-out-refinance",
    title: "Cash Out Refinance",
    subtitle: "A loan in which the borrower takes out a new loan to pay off the original mortgage and also receive extra cash in hand.",
    description: "A cash-out refinance is a good option for homeowners who have built up equity in their homes and want to use some of that equity to pay off high-interest debt, make home improvements, or have additional funds for other expenses.",
    longDescription: "A loan in which the borrower takes out a new loan to pay off the original mortgage and also receive extra cash in hand. It is a good option for homeowners who have built up equity in their homes and want to use some of that equity to pay off high-interest debt, make home improvements, or have additional funds for other expenses. By refinancing at a lower interest rate, homeowners can also lower their monthly mortgage payments.",
    icon: "CreditCard",
    benefits: [
      "Access cash from your home equity",
      "Pay off high-interest debt",
      "Make home improvements and increase property value",
      "Potential tax benefits (consult a tax advisor)",
      "Consolidate multiple debts into one payment"
    ],
    features: [
      "Access your home equity",
      "Consolidate high-interest debts",
      "Fund home improvements",
      "Flexible use of cash"
    ],
    idealFor: [
      "Homeowners with significant equity",
      "Those with high-interest debt to consolidate",
      "Borrowers planning major home improvements"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Thomas R.",
        text: "Cash-out refinance allowed me to consolidate all my high-interest debt and save money every month."
      },
      {
        name: "Patricia M.",
        text: "Used the cash to renovate our kitchen and bathroom. The increased home value was an added bonus!"
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a cash-out refinance?",
        answer: "Homeowners with sufficient equity and good credit typically qualify. Most lenders require you to maintain at least 20% equity after the cash-out."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income, bank statements, tax returns, and information about your current mortgage."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "non-qm",
    title: "Non-QM",
    subtitle: "A Non-QM loan is a type of mortgage loan that does not meet the standards set by government-sponsored enterprises.",
    description: "A Non-QM loan is a type of mortgage loan that does not meet the standards set by government-sponsored enterprises (GSEs) for a qualified mortgage. This type of loan is ideal for borrowers who do not meet the strict guidelines of a qualified mortgage.",
    longDescription: "A Non-QM loan, or Non-Qualified Mortgage loan, is a type of mortgage loan that does not meet the standards set by the government-sponsored enterprises (GSEs) for a qualified mortgage. This type of loan is ideal for borrowers who do not meet the strict guidelines of a qualified mortgage, such as those with irregular income or a high debt-to-income ratio. Non-QM loans offer flexible underwriting and alternative documentation options.",
    icon: "Landmark",
    benefits: [
      "Flexible qualification guidelines",
      "Alternative income verification options",
      "Ideal for self-employed and irregular income borrowers",
      "Higher debt-to-income ratios may be accepted",
      "Bank statement and asset-based qualification available"
    ],
    features: [
      "Flexible qualification guidelines",
      "Alternative income verification",
      "Higher DTI accepted",
      "Ideal for borrowers with irregular income"
    ],
    idealFor: [
      "Self-employed borrowers",
      "Borrowers with irregular income",
      "Those with high debt-to-income ratios"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "David K.",
        text: "As a self-employed business owner, I thought I couldn't qualify for a mortgage. Billy found me a Non-QM solution that worked perfectly."
      },
      {
        name: "Rachel M.",
        text: "Non-QM was the answer for my irregular income situation. Billy explained everything clearly and made it work."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a Non-QM loan?",
        answer: "Borrowers who don't meet traditional qualified mortgage guidelines, including self-employed individuals, investors, and those with unique income situations."
      },
      {
        question: "What documents do I need?",
        answer: "Documentation varies by program but may include bank statements, asset verification, or alternative income proof."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "rehab",
    title: "Rehab Loans",
    subtitle: "A rehab loan is used to finance the purchase and renovation of a property.",
    description: "A rehab loan, also known as a renovation loan, is a type of loan used to finance the purchase and renovation of a property. It is a good option for someone who wants to buy a fixer-upper or an older property in need of repairs and upgrades.",
    longDescription: "A rehab loan, also known as a renovation loan, is a type of loan used to finance the purchase and renovation of a property. It is a good option for someone who wants to buy a fixer-upper or an older property in need of repairs and upgrades, as it allows them to combine the cost of the purchase and the renovation into one loan. Rehab loans typically offer flexible terms and may include various options for financing the renovation, making it a convenient and cost-effective way to finance a home renovation project.",
    icon: "BarChart3",
    benefits: [
      "Finances both purchase and renovation costs",
      "One loan for the entire project",
      "Flexible terms available",
      "Suitable for fixer-uppers and older properties",
      "Streamlined renovation financing"
    ],
    features: [
      "Purchase and renovation in one loan",
      "Available for various property types",
      "Flexible terms and options",
      "Suitable for fixer-uppers"
    ],
    idealFor: [
      "Buyers looking at fixer-uppers",
      "Those wanting to renovate an older property",
      "Investors seeking value-add opportunities"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Sarah J.",
        text: "The rehab loan allowed us to buy our dream fixer-upper and renovate it exactly how we wanted."
      },
      {
        name: "Tom & Lisa R.",
        text: "We couldn't have afforded both the purchase and renovation separately. The rehab loan made it all possible."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a rehab loan?",
        answer: "Borrowers looking to purchase and renovate a property with good credit and sufficient income qualify for rehab loans."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income, bank statements, renovation plans and estimates, and property information."
      }
    ],
    ctaText: "Learn More About Rehab Loans",
    ctaLink: "/contact"
  },
  {
    id: "usda",
    title: "USDA Loans",
    subtitle: "USDA loans are designed to help low- and moderate-income individuals and families buy homes in rural areas.",
    description: "USDA loans are designed to help low- and moderate-income individuals and families buy homes in rural areas. They are particularly well-suited for first-time homebuyers who have limited savings.",
    longDescription: "USDA loans are designed to help low- and moderate-income individuals and families buy homes in rural areas. They are particularly well-suited for first-time homebuyers who have limited savings or who are unable to secure conventional financing. These government-backed loans offer zero down payment options and competitive rates for eligible borrowers in designated rural areas.",
    icon: "FileText",
    benefits: [
      "Zero down payment required",
      "Low interest rates",
      "Flexible credit requirements",
      "Designed for rural and suburban areas",
      "No private mortgage insurance"
    ],
    features: [
      "Zero down payment available",
      "Low interest rates",
      "Flexible credit guidelines",
      "No PMI required"
    ],
    idealFor: [
      "Low-to-moderate income families",
      "First-time homebuyers",
      "Those purchasing in rural areas"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Elizabeth H.",
        text: "The USDA loan made it possible for us to buy our first home with zero down payment."
      },
      {
        name: "Michael & Sarah T.",
        text: "We didn't have a lot of savings, but USDA made homeownership possible for our family."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a USDA loan?",
        answer: "Low-to-moderate income individuals and families purchasing homes in eligible rural areas typically qualify."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income, bank statements, tax returns, and property eligibility verification."
      }
    ],
    ctaText: "Check USDA Eligibility",
    ctaLink: "/contact"
  },
  {
    id: "arm",
    title: "Adjustable-Rate (ARM) Loans",
    subtitle: "Start with lower rates that adjust over time.",
    description: "An adjustable rate loan offers lower initial interest rates and monthly payments, making it a good option for those willing to accept the risk of rising interest rates and not staying in their home long-term.",
    longDescription: "An adjustable rate loan offers lower initial interest rates and monthly payments, making it a good option for those willing to accept the risk of rising interest rates and not staying in their home long-term. Good for borrowers expecting income growth who can afford higher monthly payments if interest rates increase. This flexible mortgage solution features rate adjustment periods and provides a clear path forward with terms tailored to your needs.",
    icon: "Activity",
    benefits: [
      "Lower initial interest rates compared to fixed-rate mortgages",
      "Reduced monthly payments during the initial fixed period",
      "Ideal for borrowers planning to sell or refinance before rate adjustments",
      "Potential to benefit from falling interest rates over time",
      "More purchasing power with lower initial payments"
    ],
    features: [
      "Lower initial interest rate",
      "Lower initial monthly payments",
      "Rate adjusts periodically after the initial fixed period",
      "Can be a good fit for short-term ownership"
    ],
    idealFor: [
      "Homeowners who plan to move within 3-7 years",
      "Borrowers expecting significant income growth",
      "Those who want lower payments in the near term"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Jennifer K.",
        text: "The ARM was perfect for our situation since we knew we'd be moving in 5 years. The lower initial payment helped us afford more house."
      },
      {
        name: "Brian & Christine L.",
        text: "We wanted lower payments now while we grow our income. Billy explained the ARM options clearly and we felt confident in our choice."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for an ARM loan?",
        answer: "Borrowers who plan to sell or refinance within the initial fixed period typically benefit most from ARM loans."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income, bank statements, tax returns, and identification."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  },
  {
    id: "fixed-rate",
    title: "Fixed Rate Mortgage",
    subtitle: "A fixed rate loan provides stability with a set interest rate that remains unchanged for the life of the loan.",
    description: "A fixed rate loan provides stability with a set interest rate that remains unchanged for the life of the loan, offering a predictable monthly payment. Good for borrowers who want stability and security in their monthly housing costs, especially those staying in their home long-term.",
    longDescription: "A fixed rate loan provides stability with a set interest rate that remains unchanged for the life of the loan, offering a predictable monthly payment. Good for borrowers who want stability and security in their monthly housing costs, especially those staying in their home long-term. With consistent monthly payments throughout the loan term, fixed-rate loans provide a clear path forward with terms and conditions tailored to your needs.",
    icon: "Lock",
    benefits: [
      "Predictable monthly payments that never change throughout the loan term",
      "Protection against rising interest rates in the market",
      "Easier budgeting and financial planning with consistent payments",
      "Available in 15-year and 30-year terms to fit your financial goals",
      "Competitive interest rates for qualified borrowers"
    ],
    features: [
      "Fixed interest rate for the life of the loan",
      "Predictable monthly payments",
      "Available in various terms (10, 15, 20, 30 years)",
      "Ideal for long-term financial planning"
    ],
    idealFor: [
      "Homeowners who prefer payment stability",
      "Those planning to stay in their home long-term",
      "Borrowers who want to lock in a low rate"
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We start with a conversation to understand your goals and financial picture."
      },
      {
        step: 2,
        title: "Application & Documentation",
        description: "Complete the online application and provide necessary financial documents."
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description: "Our team reviews your file to issue a final loan approval."
      },
      {
        step: 4,
        title: "Closing",
        description: "Sign the final documents and get instant access to your funds."
      }
    ],
    testimonials: [
      {
        name: "Karen M.",
        text: "I love knowing exactly what my mortgage payment will be every month for the next 30 years. The fixed rate gave me peace of mind."
      },
      {
        name: "James & Emily P.",
        text: "We locked in a great rate and now we can budget with confidence. Billy made the process simple and transparent."
      }
    ],
    faqs: [
      {
        question: "Who is eligible for a fixed-rate loan?",
        answer: "Most borrowers with good credit and stable income qualify for fixed-rate loans. Terms vary based on the lender and your financial profile."
      },
      {
        question: "What documents do I need?",
        answer: "You'll need proof of income, bank statements, tax returns, and identification."
      }
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us"
  }
];