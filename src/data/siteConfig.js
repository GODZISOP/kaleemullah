import defaultLogo from '../images/kaleemullah-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * KALEEMULLAH LLC — Central Brand, Contact & Color Settings
 * =========================================================================
 */

export const siteConfig = {
  // 🏢 Company Information
  companyName:     "Kaleemullah LLC",
  shortName:       "Kaleemullah",
  legalName:       "KALEEMULLAH LLC",
  tagline:         "Premium Wholesale, General Trading & Global Distribution",
  heroSubtitle:    "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by Kaleemullah LLC.",
  eyebrowStandard: "THE KALEEMULLAH STANDARD OF EXCELLENCE",

  // 📞 Phone, WhatsApp & Email
  phonePrimary:    "(+966) 53 098 7507",       // Display phone on top nav
  phonePrimaryTel: "+966530987507",          // Dial link (tel:...)
  phoneDirect:     "(+966) 53 098 7507",        // Direct trade desk line
  phoneDirectTel:  "+966530987507",          // Direct dial link
  whatsappNumber:  "966530987507",            // Numbers only (country code + number)
  whatsappDisplay: "(+966) 53 098 7507",
  email:           "info@kaleemullahllc.com",
  website:         "www.kaleemullahllc.com",

  // 📍 Registered & Operating Address
  address: {
    line1:        "Global Distribution Trade Desk",
    line2:        "Middle East & North America Logistics",
    full:         "Global Distribution Trade Hub",
    cityStateZip: "Global Logistics Trade Desk",
    jurisdiction: "Commercial LLC Registered"
  },

  // 🚚 Warehousing & Shipping Hubs
  hubs: {
    originText:   "Dispatched via Global Logistics & Freight Hubs",
    dispatchNote: "Dispatched from our primary international distribution hubs and regional fulfillment centers."
  },

  // 📖 About Page Description & Mission
  about: {
    mission:      "At Kaleemullah LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide. Founded on the principles of trust, transparency, and trade excellence, we serve as a reliable bridge between global suppliers and growing businesses.",
    b2bNote:      "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, Kaleemullah LLC provides flexible minimums, volume price tiers, and dependable fulfillment. Our team ensures every order meets the highest quality and delivery standards you can count on.",
    sourcingNote: "We pride ourselves on thoughtful sourcing — choosing products that deliver genuine performance, high customer satisfaction, and dependable quality for retail and wholesale partners worldwide.",
    cards: [
      {
        title:       "Integrity First",
        description: "Transparent pricing, transparent communication, and verified product authenticity."
      },
      {
        title:       "Logistics Agility",
        description: "Fast customs turnaround, reliable carrier contracts, and multi-hub fulfillment."
      },
      {
        title:       "Partner Centric",
        description: "Dedicated trade managers ready to accommodate customer requirements and custom schedules."
      }
    ],
    ctaButton: "Contact Management Desk"
  },

  // 📞 Contact Us Page - Labels & helper texts
  contact: {
    sectionTag:   "GET IN TOUCH",
    tagline:      "We are at your service for catalog requests, partnership discussions, or general inquiries.",
    cardTitle:    "Direct Coordinates",
    formTitle:    "Send Us a Message",
    formSuccess:  "Thank you! Your message has been received by Kaleemullah LLC. We will reply within 24 hours.",
    labels: {
      email:      "Email",
      phone:      "Phone Number",
      hub:        "Operating Trade Hub",
      whatsapp:   "WhatsApp Chat",
      management: "Management"
    }
  },

  // 🦶 Footer Content
  footer: {
    description:        "Quality products online. Sourcing and distribution dedicated to supplying top tier merchandise with transparent global logistics.",
    operationsLabel:    "Global Distribution & Wholesale Trade Hub",
    newsletterTagline:  "Receive exclusive price updates, catalog drops, and seasonal availability lists.",
    newsletterSuccess:  "✓ Thank you for subscribing to our wholesale bulletin!",
    copyrightSuffix:    "All rights reserved.",
    managedByLabel:     "Global Logistics & Distribution Hub",
    websiteUrl:         "https://www.kaleemullahllc.com",
    domain:             "kaleemullahllc.com",
    socials: [
      { label: "Facebook",  url: "https://facebook.com/" },
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "TikTok",    url: "https://tiktok.com/" }
    ],
    menu: [
      { label: "Home",    tab: "home" },
      { label: "Shop",    tab: "home", scrollTo: "featured-products-section" },
      { label: "About",   tab: "about" },
      { label: "Contact", tab: "contact" }
    ]
  },

  // ⭐ Testimonial Quote
  testimonial: {
    quote:  "Partnering with Kaleemullah LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // 💰 Currency Symbol used across the store
  currencySymbol: "$",

  // 🖼️ Logo
  logo: defaultLogo,

  // 🎨 Website Color Theme (Hex codes)
  theme: {
    primaryNavy:   "#0a192f",
    secondaryTeal: "#1e3a8a",
    accentTeal:    "#2563eb",
    accentHover:   "#1d4ed8",
    accentGold:    "#2563eb",
    bgLight:       "#f8fafc"
  }
};
