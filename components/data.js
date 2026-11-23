// ALL PLACEHOLDER CONTENT — edit here to change text site-wide.
// Free Unsplash photos (unsplash.com/license). Seeds map to driving-themed photos; swap IDs for your own later.
const U = {
  hero: "1516862523118-a3724eb136d7", drivinghero: "1516862523118-a3724eb136d7", learnercar: "1516862523118-a3724eb136d7",
  pkg1: "1630406144797-821be1f35d75", pkg2: "1584672202732-1308a6e909cf", pkg3: "1572401611152-cf63d874b019", pkg4: "1578041262130-633307b3bfd6",
  les1: "1578041262130-633307b3bfd6", les2: "1630406144797-821be1f35d75", les3: "1527593167147-e9c94a5883e6",
  instructor: "1773063449875-332dff62b6e3", steering: "1764588224022-ef99db06bde0", og: "1551952237-954a0e68786c",
};
const ROAD = ["1667020854803-0305af085242", "1635965453398-121ed3ea7c24", "1764588224022-ef99db06bde0", "1537211790624-e6f568af4b13", "1777620659283-58b88ac292de", "1515086828834-023d61380316", "1521706887145-1c0edacadb25", "1593153121623-3180d7e37775", "1760096905034-e3ca78eb7f81", "1611508106567-6218ae6c5f6a", "1768590237847-ebc94f180def", "1615563164538-89e1da13fcc4", "1589828155685-83225f7d91f3", "1553782097-130fef5d3e27", "1780558143087-c60c284a3ccb", "1605602560252-2d23ec73d48a"];
export const img = (seed, w = 800, h = 600) => {
  const r = /^road(\d+)$/.exec(seed);
  const id = U[seed] || (r ? ROAD[+r[1] % ROAD.length] : U.og);
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;
};
export const brand = { name: "DriveRight", full: "DriveRight Driving School", phone: "0400 000 000", email: "hello@example.com", city: "Your City", whatsapp: "#" };

export const nav = [["Home", "/"], ["Book a Lesson", "/book"], ["Packages", "/packages"], ["About", "/about"], ["Gallery", "/gallery"], ["FAQ", "/faq"], ["Contact", "/contact"]];

export const stats = [["$XX", "per hour"], ["$0", "pickup & drop-off"], ["7", "days a week"], ["1-on-1", "dual-control auto"]];

export const packages = [
  { t: "Final Test Preparation", h: "5 Hours", p: "$XXX", s: "pkg1", f: ["Driving skills review", "Test route tour", "Mock test with feedback", "Parking practice", "Test-day tips", "Extra confidence time"], d: "Mock tests on real test routes with detailed feedback.", pop: true },
  { t: "Final Test Preparation", h: "3 Hours", p: "$XXX", s: "pkg2", f: ["Skills assessment", "Test route tour", "Mock test", "Test-day strategies", "Confidence building"], d: "A focused refresh before your test day." },
  { t: "Upgrade Parking Skills", h: "2 Hours", p: "$XXX", s: "pkg3", f: ["Reverse parking (90°)", "Parallel parking", "Front-in & reverse-in", "Mirror & blind-spot checks", "Vehicle positioning"], d: "Parallel, reverse and angle parking mastered." },
  { t: "Beginner Package", h: "10 Hours", p: "$XXX", s: "pkg4", f: ["Basic vehicle control", "Road rules", "Intersections & roundabouts", "Parking technique", "Lane changes", "Progress report"], d: "From your very first drive to road-ready." },
];

export const lessons = [
  { slug: "beginner-driving-lessons", t: "Beginner lessons", s: "les1", d: "Never driven before? Start calm and build skills step by step." },
  { slug: "driving-test-preparation", t: "Test preparation", s: "les2", d: "Practise test routes and manoeuvres until they feel easy." },
  { slug: "refresher-driving-lessons", t: "Refresher lessons", s: "les3", d: "Back behind the wheel after a break, or new to the area." },
];

export const why = [
  { i: "✔", t: "Accredited & Insured", d: "Licensed instructor, fully insured dual-control vehicle." },
  { i: "1:1", t: "The Same Instructor Each Time", d: "Consistency that builds trust and faster progress." },
  { i: "TEST", t: "Test Preparation", d: "We know the local test routes and what examiners look for." },
];

export const facts = [["Price", "$XX per hour"], ["Pickup", "Free from home, work or school"], ["Transmission", "Automatic, dual-control"], ["Hours", "7 days, early to late"], ["Service area", "Your City & surrounding suburbs"], ["Base", "Your Suburb"], ["Phone", brand.phone], ["Booking", "Online, 24/7"]];

export const faqs = [
  ["How much do driving lessons cost?", "Placeholder answer about pricing and package savings."],
  ["Do you offer pickup and drop-off?", "Placeholder answer — free pickup from home, work or school."],
  ["Which areas do you cover?", "Placeholder answer listing your service areas."],
  ["Automatic or manual?", "Placeholder answer about transmission type."],
  ["How many lessons will I need?", "Placeholder answer — depends on experience and confidence."],
  ["How long is each lesson?", "Placeholder answer about lesson lengths."],
];

// Placeholder reviews: [name, text, lesson type, passed test?]
export const reviews = [
  ["Alex P.", "I was so nervous before my first lesson, but my instructor was incredibly patient. The test-route practice made the real test feel like just another lesson. Passed first go!", "Final Test Prep", true],
  ["Sam K.", "Every lesson built my confidence a little more. Clear feedback, no pressure.", "Beginner Package", false],
  ["Jordan L.", "Free pickup from home made it so easy to fit lessons around work and uni.", "Beginner Package", true],
  ["Taylor M.", "Parallel parking was my nightmare — two hours later I was doing it in one go. Worth every cent.", "Parking Skills", false],
  ["Riley S.", "Booked the 10-hour package and it was the best decision. Structured, friendly and always on time. I'd recommend it to anyone starting out.", "Beginner Package", true],
  ["Casey D.", "Back behind the wheel after 6 years overseas. Calm, professional refresher that got me road-ready fast.", "Refresher", false],
];

export const steps = [["Pick a time", "Choose a slot online that fits your week."], ["Hop in", "We pick you up — just bring your learner licence."], ["Pass with pride", "Walk into your test calm and fully prepared."]];

export const areas = ["Area One", "Area Two", "Area Three", "Area Four", "Area Five"].map((n, i) => ({ slug: `driving-lessons-area-${i + 1}`, t: `Driving lessons in ${n}`, n }));
export const guides = [{ slug: "driver-licence-guide", t: "Driver licence guide" }, { slug: "driving-test-guide", t: "Driving test guide" }];
export const legal = [{ slug: "privacy", t: "Privacy Policy" }, { slug: "terms", t: "Terms of Service" }, { slug: "refund", t: "Refund Policy" }];

// Site URL for SEO (sitemap, canonical, OG). Set NEXT_PUBLIC_SITE_URL in env per environment.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
export const socials = [["Facebook", "https://facebook.com/", "f"], ["TikTok", "https://tiktok.com/", "♪"], ["Instagram", "https://instagram.com/", "◎"]];
export const mapQuery = "Sydney NSW"; // placeholder — set to your address // used for the Google Maps embed on /contact
export const pagePaths = ["/", "/book", "/packages", "/about", "/gallery", "/faq", "/contact"];
