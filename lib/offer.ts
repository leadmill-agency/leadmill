// The offer, its proof figures and the FAQ, shared by the homepage and the booking page (/apply).
// Change a figure here and both pages change. Sources for every figure: 16_CASE_STUDIES.md.

export const faqItems = [
  {
    q: "What does Leadmill do?",
    a: "Five things for one flat fee: Facebook and Instagram ads, a rebuilt website, SEO, ChatGPT and AI search, and a CRM and project tracker. All five aim at one result: more jobs. It is done for you. You don't log in to anything or manage a campaign.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing for the first 21 days. Then $1,000 a month, flat. You also pay Facebook directly for your ads, at least $25 a day. There are no setup fees and no hourly billing.",
  },
  {
    q: "Is there a contract?",
    a: "No. It is month to month. Pause or cancel any time.",
  },
  {
    q: "How fast does it start?",
    a: "Ads go live in week 1. The website is built in weeks 1 and 2, and you review it before it goes live. SEO and AI search start in week 3.",
  },
  {
    q: "Who is it built for?",
    a: "Contractors and trades with a crew: landscapers, painters, remodelers, fence companies, window tinters, sign companies and others. Your customers can be homeowners, businesses or both.",
  },
  {
    q: "What do I have to do?",
    a: "Answer the leads, quote and sell the job, send us photos and videos of finished work, and pay Facebook directly for the ads.",
  },
  {
    q: "Who owns the leads and the accounts?",
    a: "You do. The ads run in your own ad account, and every lead goes to you and nobody else. Your domain name, Facebook page, ad account and leads are always yours.",
  },
  {
    q: "Who owns the website?",
    a: "You do. We build it and host it as part of the plan, and if you cancel we hand it over to you. We can also work alongside the person who already runs your site.",
  },
  {
    q: "What does the CRM and project tracker do?",
    a: "The CRM puts every lead in one list with its status, so none gets lost between the ad and the quote. The project tracker follows each job you win until it is finished. We set both up for you.",
  },
  {
    q: "What results do clients see?",
    a: "A four-person sign and wrap shop sold about $24,000 in jobs from $603 in ads. A window tint company got 40 leads in its 21-day trial from about $465 in ads. A Houston sign company sold $74,799 in signs from 90 days of Facebook leads.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you. You get 21 days of full work free, so you can judge the leads before you pay us anything.",
  },
  {
    q: "Do you take a percentage of my sale?",
    a: "No. The customer, the price and every dollar of the job are yours.",
  },
  {
    q: "I own a franchise location. Can I still work with you?",
    a: "Yes. Franchise owners use us for Facebook and Instagram ads, alongside what corporate already provides.",
  },
];

// Sources in 16_CASE_STUDIES.md ("Homepage totals"). $12M is Rameel's figure (11/15). Ad return:
// 7.6x, about 40x and 7x across the three case studies. Leads a year: the three clients run at
// about 130, 46 and 24 a month, a mean of 67 a month (about 800 a year); the middle one is about 550.
export const heroStats = [
  { n: "$12M", l: "in client pipeline" },
  { n: "5x+", l: "return on ad spend" },
  { n: "530+", l: "average leads a year per client" },
];

// Each row: the benefit as the headline, how we do it, then one fact that backs it.
export const whatWeDo = [
  {
    t: "Ads that bring quote requests every week",
    d: "Facebook and Instagram ads made from your own jobs, in your own ad account. Every lead goes only to you.",
    chip: "Average 30+ leads in month one",
  },
  {
    t: "A website that turns visitors into quote requests",
    d: "Rebuilt so a visitor sees your work and asks for a quote in one step.",
    chip: "42 quote requests in month one",
  },
  {
    t: "Found on Google and named by ChatGPT",
    d: "Service pages, blog posts and links, so customers find you when they search.",
    chip: "4.5x the Google visits",
  },
  {
    t: "A CRM and project tracker so no lead gets lost",
    d: "Every lead in one list with its status, and every job tracked to the finish.",
    chip: "Average $34,000 in jobs won",
  },
];

// One card per case study, Owner.com style: photo, one big number, who it is.
export const ownerCards = [
  {
    photo: "/cases/class1-sign.jpg",
    alt: "Monument sign made by Class 1 Graphics",
    n: "$24,000",
    l: "in jobs from $603 in ads",
    who: "Brendan Moyer",
    role: "Owner of Class 1 Graphics",
  },
  {
    photo: "/cases/dk-install.jpg",
    alt: "DK Tint Solutions installers applying window film",
    n: "40 leads",
    l: "in a 21-day trial",
    who: "Danial",
    role: "Owner of DK Tint Solutions",
  },
  {
    photo: "/work/elite.jpg",
    alt: "Exterior sign made by Houston Sign Crafters",
    n: "$74,799",
    l: "in jobs from 90 days of leads",
    who: "Houston Sign Crafters",
    role: "Where Leadmill started",
  },
];
