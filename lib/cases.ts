// The three case studies. One source for the homepage, the trade pages and the results pages.
// Every figure is in 16_CASE_STUDIES.md with its source. Do not add a figure that is not there.

export type CaseStudy = {
  slug: string;
  trade: "sign" | "tint";
  name: string;
  photo: string;
  photoAlt: string;
  logo: string;
  logoW: number;
  logoH: number;
  what: string;
  story: string;
  quote: string;
  who: string;
  big: { n: string; l: string };
  rest: { n: string; l: string }[];
  // The results page for this company.
  page: {
    title: string;
    description: string;
    question: string;
    answer: string;
    facts: { n: string; l: string }[];
    sections: { h: string; p: string[] }[];
    faq: { q: string; a: string }[];
    extra?: { src: string; alt: string; w: number; h: number; caption: string };
  };
};

export const cases: CaseStudy[] = [
  {
    slug: "class-1-graphics",
    trade: "sign",
    name: "Class 1 Graphics",
    photo: "/cases/class1-sign.jpg",
    photoAlt: "Monument sign for Living Hope Church, made by Class 1 Graphics",
    logo: "/cases/class1-logo.png",
    logoW: 700,
    logoH: 248,
    what: "Signs and vehicle wraps · Palmyra, Pennsylvania",
    story:
      "The ads brought this four-person shop a $16,000 sign job and about $8,000 in wrap jobs. He paused them once he was booked through the end of the year.",
    quote: "This is the best results we've had so far with advertising… especially for the price.",
    who: "Brendan Moyer, owner",
    big: { n: "$24,000", l: "in jobs sold from $603 in ads" },
    rest: [
      { n: "24", l: "leads in the first month" },
      { n: "$19.51", l: "a lead on the best ad" },
    ],
    page: {
      title: "Class 1 Graphics: $24,000 in jobs from $603 in ads",
      description:
        "What happened when Class 1 Graphics, a four-person sign and wrap shop in Palmyra, Pennsylvania, ran Facebook and Instagram ads with Leadmill: 24 leads in the first month and about $24,000 in jobs sold.",
      question: "What happened when a four-person sign shop ran Facebook ads?",
      answer:
        "Class 1 Graphics is a four-person sign and vehicle wrap shop in Palmyra, Pennsylvania. In its first month with Leadmill it spent $603 on Facebook and Instagram ads and got 24 leads. Those leads became about $24,000 in jobs: a $16,000 sign job and about $8,000 in wrap jobs. The best ad, for vehicle wraps, brought leads at $19.51 each. The owner, Brendan Moyer, paused the ads in late October because the shop was booked through the end of the year.",
      facts: [
        { n: "$24,000", l: "in jobs sold from $603 in ads" },
        { n: "$16,000", l: "the largest job, a sign" },
        { n: "24", l: "leads in the first month" },
        { n: "$19.51", l: "a lead on the wrap ad" },
      ],
      sections: [
        {
          h: "Who is Class 1 Graphics?",
          p: [
            "Class 1 Graphics makes signs and vehicle wraps in Palmyra, Pennsylvania. It is a four-person shop, and Brendan Moyer owns it.",
          ],
        },
        {
          h: "What did Leadmill run for the shop?",
          p: [
            "We ran Facebook and Instagram ads built from the shop's own signs and wraps. The ads ran in the shop's own ad account, and every lead went to Class 1 Graphics and nobody else.",
            "Brendan paid Facebook directly for the ads. In the first month that came to $603.",
          ],
        },
        {
          h: "What were the results?",
          p: [
            "The first month brought 24 leads, about $25 each. The vehicle wrap ad did best: it spent $312 and brought 16 leads, which is $19.51 a lead.",
            "The leads turned into about $24,000 in jobs. One was a sign job worth $16,000. The rest was about $8,000 in wrap jobs.",
          ],
        },
        {
          h: "Why did the shop pause its ads?",
          p: [
            "Brendan paused the ads in late October because the shop was booked through the end of the year. He plans to start again in January.",
          ],
        },
      ],
      faq: [
        {
          q: "How much did Class 1 Graphics spend on ads?",
          a: "It spent $603 in the first month. The money went straight to Facebook from the shop's own ad account.",
        },
        {
          q: "Which ad worked best for Class 1 Graphics?",
          a: "The vehicle wrap ad. It spent $312 and brought 16 leads, which is $19.51 a lead.",
        },
        {
          q: "What did the leads turn into?",
          a: "About $24,000 in jobs: a $16,000 sign job and about $8,000 in vehicle wrap jobs.",
        },
      ],
    },
  },
  {
    slug: "dk-tint-solutions",
    trade: "tint",
    name: "DK Tint Solutions",
    photo: "/cases/dk-install.jpg",
    photoAlt: "DK Tint Solutions installers applying window film inside a restaurant",
    logo: "/cases/dk-logo.png",
    logoW: 400,
    logoH: 400,
    what: "Commercial window tinting · Greater Houston",
    story:
      "Four jobs inside the free trial brought in $3,271 from about $465 in ads. When he asked for more commercial work, we built a campaign for it, with leads at $8.07 each.",
    quote: "The amount of leads has been crazy bro I love it.",
    who: "Danial, owner",
    big: { n: "40 leads", l: "in the 21-day trial, from about $465 in ads" },
    rest: [
      { n: "$3,271", l: "from 4 jobs done inside the trial" },
      { n: "$8.07", l: "a lead on the commercial ad" },
    ],
    page: {
      title: "DK Tint Solutions: 40 leads in a 21-day trial",
      description:
        "What happened when DK Tint Solutions, a window tinting company in Greater Houston, ran Facebook and Instagram ads with Leadmill: 40 leads in the 21-day trial and $3,271 from four jobs.",
      question: "What happened when a window tint company ran Facebook ads?",
      answer:
        "DK Tint Solutions is a commercial window tinting company in Greater Houston with a one-man sales operation. In its free 21-day trial with Leadmill it got 40 leads from about $465 in ads. Four jobs done inside the trial brought in $3,271. When the owner, Danial, asked for more commercial work, we built a campaign for it, and those leads came in at $8.07 each.",
      facts: [
        { n: "40", l: "leads in the 21-day trial" },
        { n: "~$465", l: "spent on ads in the trial" },
        { n: "$3,271", l: "from 4 jobs done inside the trial" },
        { n: "$8.07", l: "a lead on the commercial ad" },
      ],
      sections: [
        {
          h: "Who is DK Tint Solutions?",
          p: [
            "DK Tint Solutions installs commercial window film in Greater Houston. Danial owns the company and handles the sales himself.",
          ],
        },
        {
          h: "What did Leadmill run for the company?",
          p: [
            "We ran Facebook and Instagram ads in the company's own ad account. Every lead went to DK Tint Solutions and nobody else.",
            "Danial paid Facebook directly for the ads. Over the 21-day trial that came to about $465.",
          ],
        },
        {
          h: "What were the results in the trial?",
          p: [
            "The trial brought 40 leads, about $12 each. Danial completed four jobs from those leads before the trial ended, and they brought in $3,271.",
          ],
        },
        {
          h: "What happened when he asked for more commercial work?",
          p: [
            "In October we built a separate campaign aimed at businesses. Between October 9 and 13 it spent $96.89 and brought 12 leads. That is $8.07 a lead.",
          ],
        },
      ],
      faq: [
        {
          q: "How much did DK Tint Solutions spend on ads in the trial?",
          a: "About $465 over 21 days. The money went straight to Facebook from the company's own ad account.",
        },
        {
          q: "Did the trial pay for itself?",
          a: "Four jobs done inside the 21-day trial brought in $3,271, from about $465 in ads.",
        },
        {
          q: "What did commercial window tint leads cost?",
          a: "The commercial campaign spent $96.89 between October 9 and 13 and brought 12 leads, which is $8.07 a lead.",
        },
      ],
    },
  },
  {
    slug: "houston-sign-crafters",
    trade: "sign",
    name: "Houston Sign Crafters",
    photo: "/work/elite.jpg",
    photoAlt: "Exterior sign for Elite Career Institute of Texas, made by Houston Sign Crafters",
    logo: "/cases/hsc-logo.png",
    logoW: 700,
    logoH: 142,
    what: "Commercial signs · Houston",
    story:
      "Leadmill started here: we built the system for this Houston sign company. In 90 days, its Facebook leads turned into 11 signed jobs.",
    quote: "",
    who: "",
    big: { n: "$74,799", l: "in signs sold from 90 days of Facebook leads" },
    rest: [
      { n: "144", l: "leads in 30 days" },
      { n: "~$23", l: "a lead" },
    ],
    page: {
      title: "Houston Sign Crafters: $74,799 from 90 days of Facebook leads",
      description:
        "How Houston Sign Crafters, the sign company where Leadmill started, turned 90 days of Facebook leads into 11 signed jobs worth $74,799.",
      question: "How did a Houston sign company get $74,799 from Facebook leads?",
      answer:
        "Houston Sign Crafters is a commercial sign company in Houston, and it is where Leadmill started. It is my brother's sign company, and I run its marketing. In 90 days, 390 Facebook leads turned into 11 signed jobs worth $74,799. In one 30-day stretch, from July 24 to August 22, the ads brought 144 leads at about $23 each, from $3,326 in ad spend.",
      facts: [
        { n: "$74,799", l: "in signs sold from 90 days of leads" },
        { n: "11", l: "jobs signed from 390 leads" },
        { n: "144", l: "leads in 30 days" },
        { n: "~$23", l: "a lead" },
      ],
      sections: [
        {
          h: "What is Houston Sign Crafters?",
          p: [
            "Houston Sign Crafters makes commercial signs in Houston. It is my brother's company, not an outside client. I run the marketing there, and it is where we built the system Leadmill now runs for other companies.",
          ],
        },
        {
          h: "What did we run?",
          p: [
            "We ran Facebook and Instagram ads that show the shop's finished signs. Each lead was tracked in the shop's CRM from the first call to the signed job.",
            "We also rebuilt the website. The new site took 42 quote requests in its first month.",
          ],
        },
        {
          h: "What were the results?",
          p: [
            "Over 90 days, 390 Facebook leads turned into 11 signed jobs worth $74,799. Because every lead was tracked, those jobs trace back to the ads.",
            "In the 30 days from July 24 to August 22, the shop spent $3,326 on ads and got 144 leads. That is about $23 a lead.",
          ],
        },
        {
          h: "Does the system still run there?",
          p: ["Yes. It runs at Houston Sign Crafters every week, and it is the same system we set up for other companies."],
        },
      ],
      faq: [
        {
          q: "Is Houston Sign Crafters a Leadmill client?",
          a: "No. It is the founder's brother's sign company, and it is where Leadmill built its system. The figures come from the shop's own ad account and CRM.",
        },
        {
          q: "How much did Houston Sign Crafters spend on ads?",
          a: "It spent $3,326 in the 30 days from July 24 to August 22. That brought 144 leads at about $23 each.",
        },
        {
          q: "How many leads became jobs?",
          a: "Over 90 days, 390 Facebook leads turned into 11 signed jobs worth $74,799.",
        },
      ],
      extra: {
        src: "/proof-meta-30d.png",
        alt: "Meta Ads Manager totals for Houston Sign Crafters over 30 days, showing 144 leads",
        w: 1600,
        h: 612,
        caption: "The shop's Meta Ads Manager, July 24 to August 22.",
      },
    },
  },
];

export const caseBySlug = (slug: string) => cases.find((c) => c.slug === slug);
