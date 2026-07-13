export const SITE = {
  name: "Tanseer Sofa Repair And Home Service",
  shortName: "Tanseer",
  tagline: "Sofa Repair Gurgaon & Gurugram — Doorstep Home Service",
  location: "Gurugram",
  phone: "+91 91704 63193",
  phoneRaw: "919170463193",
  email: "tanseermohd81@gmail.com",
  whatsapp: "919170463193",
  instagram:
    "https://www.instagram.com/tanseermohd81?utm_source=qr&igsh=dmM3OWphc3dtdmUx",
  facebook: "https://www.facebook.com/share/1HUu1ida1v/",
  youtube: "https://youtube.com/@tanseer9170?si=sBVou7_qSAb49WxG",
  address: "Block - C1, Palam Vihar, Gurugram - 122017",
  mapUrl: "https://maps.app.goo.gl/XQSZtDW4tc8Jsgws5?g_st=ac",
  hours: "Mon - Sat: 8:00 AM - 8:00 PM",
  description:
    "Professional doorstep sofa repair, dining chair, bed & furniture repair, upholstery and restoration in Gurgaon & Gurugram. Trusted craftsmanship with premium materials.",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.instagram },
  { label: "Facebook", href: SITE.facebook },
  { label: "YouTube", href: SITE.youtube },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Sofa Repair & Restoration",
    description:
      "Complete sofa repair including frame fixing, spring replacement, and structural reinforcement at your home.",
    icon: "sofa",
    image: "/chesterdfield/chesterfield-design-10.jpg",
  },
  {
    title: "Upholstery Services",
    description:
      "Premium fabric and leather reupholstery with expert stitching and luxury finishes for all sofa types.",
    icon: "fabric",
    image: "/sofa sets/3317809dad91b6726a9aa1fa45a10c5b.jpg",
  },
  {
    title: "Recliner Repair",
    description:
      "Recliner mechanism, motor, and comfort restoration for single, double & electric recliners.",
    icon: "recliner",
    image: "/Recliner/recliner-2-seater.jpg",
  },
  {
    title: "Dining Chair Set Repair",
    description:
      "Dining chair upholstery, frame fixing, cushion replacement and polish for 4, 6 & 8 seater sets.",
    icon: "chair",
    image: "/chesterdfield/0268ab02c7f618da243a068841aaa90b.jpg",
  },
  {
    title: "Bed Repair & Upholstery",
    description:
      "Platform, storage and upholstered bed frame repair with fabric, leather and headboard restoration.",
    icon: "bed",
    image: "/beds/upholstered/UB1.jpg",
  },
  {
    title: "Headboard Repair",
    description:
      "Headboard reupholstery, padding replacement, tufting and structural repair for all bed sizes.",
    icon: "headboard",
    image: "/beds/upholstered/UB3.jpg",
  },
  {
    title: "Cushion & Foam Replacement",
    description:
      "High-density foam and cushion replacement to restore comfort, shape, and support.",
    icon: "cushion",
    image: "/sofa cum bed/sofa-cum-bed-design-11.jpg",
  },
  {
    title: "Leather Sofa Repair",
    description:
      "Leather tear repair, color matching, scratch removal, and professional conditioning.",
    icon: "leather",
    image: "/chesterdfield/9d8fe63ba442201e30b974a58410fdbc.jpg",
  },
  {
    title: "L-Shape & Sectional Repair",
    description:
      "Specialized repair for L-shape, U-shape, and modular sectional sofas.",
    icon: "wood",
    image: "/L shape/L shaped.jpg",
  },
  {
    title: "Sofa Cum Bed Repair",
    description:
      "Mechanism repair and upholstery for convertible sofa beds with smooth operation.",
    icon: "foam",
    image: "/sofa cum bed/3936e44ed9a2c37e2b31da4507e95dda.jpg",
  },
  {
    title: "Dining Wall Panels",
    description:
      "Elegant dining-area wall panels, moulding and fluted designs that elevate your dining space.",
    icon: "restore",
    image: "/wall-panels/dining/D1.png",
  },
  {
    title: "Living Room Wall Panels",
    description:
      "Premium living-room wall panels, fluted wood, marble accents and feature walls for a luxury finish.",
    icon: "mattress",
    image: "/wall-panels/living-room-panels-2.png",
  },
] as const;

export const STATS = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "hr", label: "Quick Service" },
  { value: 100, suffix: "%", label: "Satisfaction" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Expert Craftsmanship",
    description: "Master upholsterers with 10+ years in luxury furniture restoration.",
    icon: "craft",
  },
  {
    title: "Doorstep Service",
    description: "We visit your home in Gurgaon & NCR — no transport hassle.",
    icon: "doorstep",
  },
  {
    title: "Premium Materials",
    description: "Finest fabrics, leathers, and foams from trusted suppliers.",
    icon: "materials",
  },
  {
    title: "Transparent Pricing",
    description: "Clear quotes with no hidden charges — fair luxury pricing.",
    icon: "pricing",
  },
  {
    title: "Quick Turnaround",
    description: "Most repairs done within 24–48 hours without quality compromise.",
    icon: "speed",
  },
  {
    title: "Warranty Guaranteed",
    description: "Every repair backed by our comprehensive warranty program.",
    icon: "warranty",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Book Consultation",
    description: "Call, WhatsApp, or fill our form for a free doorstep visit.",
  },
  {
    step: "02",
    title: "Assessment",
    description: "Our expert inspects your furniture and shares a detailed quote.",
  },
  {
    step: "03",
    title: "Expert Repair",
    description: "Skilled craftsmen restore your furniture with premium materials.",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Rigorous inspection ensures every detail meets our standards.",
  },
  {
    step: "05",
    title: "Warranty",
    description: "Enjoy your restored sofa with full warranty coverage.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Vikram Singh",
    rating: 5,
    text: "Our entire dining chair set was reupholstered beautifully. Frames tightened and fabric matched perfectly. Great service in Gurgaon!",
    date: "2 weeks ago",
    avatar: "VS",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "They restored my Chesterfield beautifully. Professional team and doorstep service in Gurgaon — highly recommended!",
    date: "2 weeks ago",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Transparent pricing and excellent workmanship. My recliner works like new. Best sofa repair in Gurgaon.",
    date: "1 month ago",
    avatar: "PS",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "Leather repair and color matching was perfect. You cannot tell there was ever damage.",
    date: "1 week ago",
    avatar: "SR",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do you provide doorstep sofa repair in Gurgaon?",
    answer:
      "Yes! Tanseer Sofa Repair And Home Service specializes in doorstep sofa repair across Gurgaon, Gurugram and NCR including Palam Vihar. Our team brings tools and materials to your home.",
  },
  {
    question: "How long does a typical sofa repair take in Gurugram?",
    answer:
      "Most sofa repairs in Gurgaon complete within 24–48 hours. Complex restorations may take 3–5 days with a clear timeline upfront.",
  },
  {
    question: "What types of furniture do you repair in Gurgaon?",
    answer:
      "Sofas, dining chair sets, beds, headboards, recliners, sectionals, Chesterfield, L-shape, U-shape, sofa cum bed, cushions, wall panels and more — all at your doorstep in Gurugram.",
  },
  {
    question: "Do you offer a warranty on sofa repair in Gurgaon?",
    answer:
      "Yes. All Tanseer sofa repair and upholstery services in Gurgaon include warranty from 3 months to 2 years depending on the repair type.",
  },
  {
    question: "How do I get a sofa repair price quote in Gurgaon?",
    answer:
      "Book a free consultation via phone (+91 91704 63193), WhatsApp, or our contact form for a transparent doorstep quote in Gurugram.",
  },
] as const;
