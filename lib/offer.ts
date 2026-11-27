// The offer, its proof figures and the FAQ, shared by the homepage and the booking page (/apply).
// Change a figure here and both pages change. Sources for every figure: 16_CASE_STUDIES.md.

export const faqItems = [
  {
    q: "What does Leadmill do?",
    a: "Marketing for sign shops, done for you. Core is a website that turns visitors into quote requests, SEO, ChatGPT and AI search, and a CRM and project tracker. Growth adds Facebook, Instagram and Google ads. You don't log in to anything or manage a campaign.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing for the first 14 days. Then Core is $399 a month, or Growth is $800 a month and includes everything in Core. Your card is charged 14 days after you enter it, unless you cancel by email before then. On Growth you also pay Facebook and Google directly for your ads. There are no setup fees and no hourly billing.",
  },
  {
    q: "Is there a contract?",
    a: "No. It is month to month. Pause or cancel any time.",
  },
  {
    q: "How fast does it start?",
    a: "The website is built in weeks 1 and 2, and you review it before it goes live. SEO and AI search start in week 3. On Growth, ads go live in week 1.",
  },
  {
    q: "Who is it built for?",
    a: "Sign shops: channel letters, monuments, vehicle wraps, banners and print. Your customers can be businesses, homeowners or both. Leadmill started inside a working sign shop.",
  },
  {
    q: "What do I have to do?",
    a: "Answer the leads, quote and sell the job, and send us photos and videos of finished signs. On Growth, you pay Facebook and Google directly for the ads.",
  },
  {
    q: "Who owns the leads and the accounts?",
    a: "You do. The ads run in your own ad account, and every lead goes to you and nobody else. Your domain name, Facebook page, ad account and leads are always yours.",
  },
  {
    q: "Who owns the website?",
    a: "It becomes yours with your first payment after the trial. Until then Leadmill owns the website code and the ads. We host the site as part of the plan, and if you cancel after that we hand it over. We can also work alongside the person who already runs your site.",
  },
  {
    q: "What does the CRM and project tracker do?",
    a: "The CRM puts every lead in one list with its status, so none gets lost between the ad and the quote. The project tracker follows each job you win until it is finished. We set both up for you.",
  },
  {
    q: "What results do clients see?",
    a: "A four-person sign and wrap shop sold about $24,000 in jobs from $603 in ads. A window tint company got 40 leads in its trial from about $465 in ads. A Houston sign company sold $74,799 in signs from 90 days of Facebook leads.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you. You get 14 days of full work free, so you can judge the leads before you pay us anything.",
  },
  {
    q: "Do you build signs too?",
    a: "Yes. Any sign shop can order wholesale fabrication: channel letters, halo-lit letters, cabinet signs and monument faces. Each job is quoted on its own, with a 50% deposit and about 4 weeks from the approved proof. You sell the sign under your own name, set the price and install it.",
  },
  {
    q: "Do you take a percentage of my sale?",
    a: "No. The customer, the price and every dollar of the job are yours.",
  },
  {
    q: "I own a franchise location. Can I still work with you?",
    a: "Yes. Franchise sign shop owners use us for local ads, alongside what corporate already provides.",
  },
];

// Sources in 16_CASE_STUDIES.md ("Homepage totals"). $12M is Rameel's figure (11/15). Ad return:
// 7.6x, about 40x and 7x across the three case studies. Leads a year: the three clients run at
// about 130, 46 and 24 a month, a mean of 67 a month (about 800 a year); the middle one is about 550.
export const heroStats = [
  { n: "$12M", l: "in client pipeline" },
  { n: "7x", l: "return on ad spend" },
  { n: "750+", l: "leads sent to our clients" },
];

// The four parts of the plan, each with a label. Shown as the "What you get" panel.
export const whatWeDo = [
  {
    t: "Found on Google and named by ChatGPT",
    d: "A page for every sign you make and every town you serve, so buyers find you when they search.",
    chip: "First page on Google within 3 months",
  },
  {
    t: "A website that turns visitors into sign quotes",
    d: "Your best signs up front, and a quote request in one step: sign type, size, location and photos.",
    chip: "Pages for every sign type and town",
  },
  {
    t: "A CRM and project tracker so no quote gets lost",
    d: "Every lead in one list with its status, and every job tracked from proof to install.",
    chip: "$74,799 in won jobs tracked for one shop",
  },
  {
    t: "Ads that bring sign leads every week (Growth)",
    d: "Facebook, Instagram and Google ads made from your own signs, in your own ad accounts.",
    chip: "Average 42 leads in month one",
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
    l: "in his first 21 days",
    who: "Danial",
    role: "Owner of DK Tint Solutions, window tint",
  },
  {
    photo: "/work/elite.jpg",
    alt: "Exterior sign made by Houston Sign Crafters",
    n: "$74,799",
    l: "in jobs from 90 days of leads",
    who: "Kashir",
    role: "Houston Sign Crafters",
  },
];
