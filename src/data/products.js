export const categories = [
  {
    id: 'home-living',
    name: 'Home & Modern Living',
    description: 'Artisan cast iron cookware, natural bamboo mist diffusers, and curated residential lifestyle hardware.',
    buttonText: 'Shop Home & Living',
    link: '#',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'personal-care',
    name: 'Personal Care & Fragrances',
    description: 'Dermatologist-grade botanical oils, royal ambergris perfumes, and bespoke grooming rituals.',
    buttonText: 'Shop Personal Care',
    link: '#',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'smart-electronics',
    name: 'Smart Tech & Gadgets',
    description: 'High-power GaN fast charging stations, rugged outdoor Bluetooth speakers, and modern consumer tech.',
    buttonText: 'Shop Electronics',
    link: '#',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'gourmet-pantry',
    name: 'Gourmet & Pantry Staples',
    description: 'Royal Kashmiri Grade A+ saffron threads, single-estate raw Acacia honey with fresh honeycomb.',
    buttonText: 'Shop Gourmet',
    link: '#',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  }
];

export const products = [
  {
    id: 1,
    name: 'Nordic Artisan Cast Iron Casserole & Dutch Oven',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'KLM-COOK-101',
    price: '$ 52',
    priceNumeric: 52,
    packSize: '6-Quart Heavy-Gauge Enameled Cast Iron Dutch Oven',
    availability: 'In Stock (Ready for Dispatch)',
    stockUnits: 2800,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 64,
    priceNote: 'Direct Factory & Bulk Wholesale Tier Available',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Heavy-gauge enameled cast iron delivering superior heat retention, chip-resistant enamel finish, and self-basting condensation lid.',
    longDescription: 'Curated by Kaleemullah LLC for executive kitchens and premier culinary retailers. Crafted with dense cast iron and multiple coats of chip-resistant enamel, it provides flawless simmer control across induction, electric, and gas cooktops.',
    features: [
      'Heavy cast iron construction delivers exceptional thermal mass and slow heat distribution',
      'Dual ergonomic side handles provide balanced transport from stovetop to dining table',
      'Non-reactive smooth porcelain interior eliminates the need for seasoning',
      'Tight-fitting heavy lid with underside condensation spikes self-bastes braises and roasts',
      'Commercial-grade durability certified for international hospitality benchmarks'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 52', discount: 'Retail Base' },
      { range: '20 - 99 Units', price: '$ 44', discount: '15% Wholesale' },
      { range: '100+ Units', price: '$ 36', discount: '30% Commercial Pallet' }
    ],
    specs: [
      { label: 'Capacity', value: '6 Quart (5.7 Liters)' },
      { label: 'Core Material', value: 'Heavy Virgin Cast Iron' },
      { label: 'Oven Safe', value: 'Up to 500°F (260°C)' },
      { label: 'Compatibility', value: 'Induction, Gas, Electric, Ceramic' },
      { label: 'Warranty', value: '2 Year Commercial Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'Zen Harmony Ultrasonic Bamboo Aromatherapy Diffuser',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'KLM-DIFF-102',
    price: '$ 29',
    priceNumeric: 29,
    packSize: 'Solid Handcrafted Bamboo Mist Diffuser with Ambient Warm Glow',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3200,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 48,
    priceNote: 'Volume Tier Pricing',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Elevate home ambiance with whisper-quiet ultrasonic atomization, handcrafted solid natural bamboo housing, and continuous natural fragrance.',
    longDescription: 'Kaleemullah LLC supplies premium lifestyle and wellness hardware. This sculptural ultrasonic diffuser features a 350ml water reservoir, automatic shutoff safety mechanisms, and soft warm ambient lighting suitable for bedrooms, executive offices, and luxury spas.',
    features: [
      'Whisper-quiet ultrasonic wave technology operating at under 22dB',
      'Handcrafted natural sustainable bamboo casing with clean modern curves',
      'Waterless auto-shutoff mechanism prevents overheating and dry burning',
      'Dual mist settings: 8 hours continuous or 16 hours intermittent operation',
      'BPA-free reservoir compatible with pure therapeutic essential oils'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 29', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '$ 23', discount: '20% Bulk Discount' },
      { range: '100+ Units', price: '$ 18', discount: '37% Master Carton' }
    ],
    specs: [
      { label: 'Reservoir Capacity', value: '350 ml' },
      { label: 'Power Source', value: 'USB-C Universal Interface' },
      { label: 'Housing Material', value: 'Natural Bamboo & Medical PP' },
      { label: 'Coverage Area', value: 'Up to 400 sq. ft.' }
    ]
  },
  {
    id: 3,
    name: 'Imperial Ambergris & Taif Rose Extrait de Parfum',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'KLM-PERF-201',
    price: '$ 45',
    priceNumeric: 45,
    packSize: '100ml Heavy Crystal Flacon with Solid Brass Magnetic Cap',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3400,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 88,
    priceNote: 'Boutique & Perfumery Wholesale Available',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Prestigious oriental fragrance fusing rare Taif rose blossoms, golden ambergris, and sweet sandalwood with 16+ hour longevity.',
    longDescription: 'Formulated and batch-matured under artisanal fragrance benchmarks for Kaleemullah LLC. A long-lasting 26% Extrait concentration designed for high-end boutique perfumeries and discerning retailers worldwide, presented in a luxury collector presentation box.',
    features: [
      '26% Extrait de Parfum concentration delivering 16+ hours of lasting sillage',
      'Blended with authentic handpicked Taif rose, marine ambergris, and Mysore sandalwood',
      'Custom magnetic atomizer cap with ultra-fine micro-mist nozzle dispersion',
      'Free from synthetic phthalates and parabens',
      'Luxury gift-ready packaging with individual authenticity batch certificate'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 45', discount: 'Base Price' },
      { range: '30 - 119 Units', price: '$ 36', discount: '20% Salon Tier' },
      { range: '120+ Units', price: '$ 29', discount: '35% Wholesale MOQ' }
    ],
    specs: [
      { label: 'Volume', value: '100ml / 3.4 fl. oz.' },
      { label: 'Fragrance Profile', value: 'Floral Amber, Taif Rose & Precious Woods' },
      { label: 'Concentration', value: 'Extrait de Parfum (26%)' },
      { label: 'Shelf Life', value: '36 Months' }
    ]
  },
  {
    id: 4,
    name: 'Organic Moroccan Argan & Botanical Jojoba Elixir',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'KLM-CARE-202',
    price: '$ 22',
    priceNumeric: 22,
    packSize: '100ml Amber Dropper Bottle with Certified Bio-Active Pipette',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4600,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 72,
    priceNote: 'Salon & Spa Wholesale Available',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'First cold-pressed 100% pure organic Moroccan argan and golden jojoba oil, restoring hair luster and replenishing facial hydration.',
    longDescription: 'Curated by Kaleemullah LLC for luxury spas and commercial beauty retailers. Cold-extracted strictly without heat or chemical solvents, retaining maximum fatty acids, squalene, and natural vitamin E.',
    features: [
      '100% pure certified organic cold-pressed argan and golden jojoba oils',
      'Multi-purpose formulation suitable for hair nourishment, beard grooming, and facial hydration',
      'Non-comedogenic and fast-absorbing with zero greasy residue',
      'UV-protective amber glass bottle protects delicate bio-active compounds',
      'Free from fragrances, silicones, sulfates, and animal testing'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 22', discount: 'Single Unit Price' },
      { range: '30 - 99 Units', price: '$ 17.50', discount: '20% Spa Tier' },
      { range: '100+ Units', price: '$ 13.80', discount: '37% Wholesale Carton' }
    ],
    specs: [
      { label: 'Volume', value: '100ml / 3.4 fl. oz.' },
      { label: 'Ingredients', value: 'Organic Argania Spinosa & Simmondsia Chinensis' },
      { label: 'Extraction', value: 'Single-Batch First Cold Press' },
      { label: 'Origin', value: 'Morocco & Southern Valley Certified' }
    ]
  },
  {
    id: 5,
    name: 'TitanPro Rugged Wireless Waterproof Bluetooth Speaker',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'KLM-SPK-301',
    price: '$ 49',
    priceNumeric: 49,
    packSize: '30W Dual-Driver Outdoor Stereo Speaker with IPX7 Armor',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2600,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 96,
    priceNote: 'Wholesale Electronics Tier Available',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Punchy 360° stereo acoustics, IPX7 waterproof immersion rating, Bluetooth 5.3 range, and 24-hour battery endurance.',
    longDescription: 'Procured and distributed globally by Kaleemullah LLC. Built with dual passive bass radiators, drop-resistant silicone bumpers, and high-capacity battery bank functionality to recharge phones on the go.',
    features: [
      '30W peak output with dual neodymium drivers and dual passive bass radiators',
      'IPX7 submersible waterproof rating withstands full water immersion up to 1 meter',
      '24-hour continuous playtime with built-in 5200mAh USB-A powerbank port',
      'True Wireless Stereo (TWS) pairing links two speakers for room-filling sound',
      'Bluetooth 5.3 low-latency connection with up to 100ft wireless range'
    ],
    tiers: [
      { range: '1 - 14 Units', price: '$ 49', discount: 'Base Wholesale' },
      { range: '15 - 59 Units', price: '$ 41', discount: '16% Distributor' },
      { range: '60+ Units', price: '$ 33', discount: '32% Bulk Pallet' }
    ],
    specs: [
      { label: 'Output Power', value: '30W RMS (Dual 15W Drivers)' },
      { label: 'Battery Capacity', value: '5200 mAh (24h Playtime)' },
      { label: 'Waterproof Rating', value: 'IPX7 Certified' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' }
    ]
  },
  {
    id: 6,
    name: 'GaN III 65W Multi-Port Fast Wall Charger',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'KLM-CHG-302',
    price: '$ 24',
    priceNumeric: 24,
    packSize: '3-Port GaN Wall Adapter (2x USB-C PD + 1x USB-A QC)',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4900,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 68,
    priceNote: 'High Velocity Retail Ready',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Rapidly charge laptops, tablets, and phones simultaneously with next-gen GaN III semiconductor architecture.',
    longDescription: 'Sourced by Kaleemullah LLC for consumer tech distributors. 50% smaller than legacy chargers, featuring intelligent dynamic power distribution and comprehensive thermal protection.',
    features: [
      'Next-generation GaN III semiconductor technology delivers faster, cooler charging',
      '65W maximum Power Delivery (PD 3.0 / PPS) charges MacBook to 50% in 30 mins',
      'Simultaneous 3-device charging with smart dynamic current allocation',
      'Foldable prongs and universal 100-240V international voltage compatibility',
      'Certified by CE, FCC, RoHS, and UL safety standards'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 24', discount: 'Retail Base' },
      { range: '30 - 119 Units', price: '$ 19', discount: '20% Volume' },
      { range: '120+ Units', price: '$ 15', discount: '37% Wholesale Carton' }
    ],
    specs: [
      { label: 'Total Output', value: '65W Max' },
      { label: 'Ports', value: '2x USB-C (PD 3.0) + 1x USB-A (QC 3.0)' },
      { label: 'Input Voltage', value: '100-240V ~ 50/60Hz 1.5A' },
      { label: 'Protection', value: 'Over-Current, Over-Voltage, Temp Guard' }
    ]
  },
  {
    id: 7,
    name: 'Royal Kashmiri Super-Negin Grade A+ Saffron Threads',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'KLM-SAF-401',
    price: '$ 26',
    priceNumeric: 26,
    packSize: '5g Hermetically Sealed Glass Jar with Authenticity Certificate',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 5200,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 124,
    priceNote: 'Export Grade Certified 100% Pure & Halal',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Handpicked 100% pure Super Negin deep crimson saffron stigmas with intense natural aroma, high crocin color strength, and zero additives.',
    longDescription: 'Procured direct from sustainable Kashmiri mountain estates by Kaleemullah LLC. Only the unbroken, all-red tips of the crocus flower are selected, nitrogen-sealed to lock in essential safranal aroma compounds.',
    features: [
      '100% pure Grade A+ Super Negin saffron with zero yellow style threads',
      'High crocin color reading (>250) providing vibrant golden-orange infusion',
      'Airtight embossed collector glass jar with internal moisture seal',
      'Zero artificial dyes, chemical fragrances, or filler ingredients',
      '100% Halal certified, vegan, and non-GMO verified'
    ],
    tiers: [
      { range: '1 - 39 Units', price: '$ 26', discount: 'Standard Price' },
      { range: '40 - 149 Units', price: '$ 21', discount: '19% Retail Pack' },
      { range: '150+ Units', price: '$ 16.50', discount: '36% Export Tier' }
    ],
    specs: [
      { label: 'Net Weight', value: '5g / 0.18 oz' },
      { label: 'Grade', value: 'Grade A+ Super Negin All-Red' },
      { label: 'Harvest Year', value: 'Current Harvest Fresh Crop' },
      { label: 'Shelf Life', value: '36 Months' }
    ]
  },
  {
    id: 8,
    name: 'Single-Estate Raw Acacia Honey with Organic Honeycomb',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'KLM-HNY-402',
    price: '$ 25',
    priceNumeric: 25,
    packSize: '450g Clear Hexagonal Glass Jar with Cut Fresh Honeycomb Piece',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4100,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 89,
    priceNote: 'Gourmet Grocer & Bulk Rates Available',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Crystal-clear monofloral Acacia honey containing a fresh chunk of edible organic beeswax comb, offering delicate sweet floral notes.',
    longDescription: 'Harvested from pristine European Robinia acacia groves and supplied by Kaleemullah LLC. Unheated, raw, and slow to crystallize, this honey contains an authentic piece of hand-cut honey comb straight from the hive.',
    features: [
      '100% pure unheated raw monofloral Acacia honey with raw edible honeycomb',
      'Mild, delicate sweet flavor profile that never overpowers tea or pastries',
      'High fructose-to-glucose ratio keeps honey liquid for months naturally',
      'Sealed in heavyweight hexagonal crystal glass with tamper-evident seal',
      'Certified 100% Halal, Non-GMO, and tested for zero antibiotics'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 25', discount: 'Single Jar' },
      { range: '25 - 99 Units', price: '$ 20', discount: '20% Wholesale Case' },
      { range: '100+ Units', price: '$ 16', discount: '36% Commercial Pallet' }
    ],
    specs: [
      { label: 'Net Weight', value: '450g / 15.8 oz' },
      { label: 'Floral Source', value: 'Robinia pseudoacacia (Black Locust)' },
      { label: 'Processing', value: 'Cold-Filtered Raw with Comb Piece' },
      { label: 'Shelf Life', value: '36 Months' }
    ]
  }
];
