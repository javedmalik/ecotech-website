export const processContent = {
  tagline: "How It Works",
  heading: "Simple. Fast. Responsible.",
  steps: [
    {
      step: "01",
      icon: "📞",
      title: "Book a Pickup",
      description:
        "Contact us via phone, email, or website form. Describe your scrap material and we'll schedule a convenient time.",
    },
    {
      step: "02",
      icon: "🚛",
      title: "We Come to You",
      description:
        "Our verified team arrives at your location, inspects, and weighs the materials on-site with calibrated equipment.",
    },
    {
      step: "03",
      icon: "⚖️",
      title: "Get Fair Pricing",
      description:
        "Receive real-time, transparent pricing based on current market rates for each material type — no negotiations needed.",
    },
    {
      step: "04",
      icon: "💳",
      title: "Instant Payment",
      description:
        "Payment is processed immediately via bank transfer or cash. Receive a full receipt and documentation.",
    },
    {
      step: "05",
      icon: "♻️",
      title: "Responsible Recycling",
      description:
        "Materials are transported to our facility for certified, environmentally sound processing, recycling, and recovery.",
    },
  ],
};

export const materialsContent = {
  tagline: "Materials We Accept",
  heading: "Every Kind of Scrap, Handled Right",
  categories: [
    {
      name: "Electronic Scrap (E-Waste)",
      items: [
        "Computers & Laptops",
        "Mobile Phones & Tablets",
        "Servers & Networking Equipment",
        "PCBs & Motherboards",
        "Cables & Wires",
        "LED/LCD Monitors",
        "Printers & Scanners",
        "Power Banks & Batteries",
      ],
      icon: "💻",
      color: "blue",
    },
    {
      name: "Precious Metals",
      items: [
        "Gold Scrap",
        "Silver Scrap",
        "Platinum",
        "Palladium",
        "Rhodium",
        "Catalytic Converters",
        "Industrial Catalysts",
        "Jewellery Industry Waste",
      ],
      icon: "✨",
      color: "yellow",
    },
    {
      name: "Industrial Metals",
      items: [
        "Copper Scrap",
        "Aluminium Scrap",
        "Iron Scrap",
        "Steel Scrap",
        "Brass & Bronze",
        "Stainless Steel",
        "Lead Scrap",
        "Zinc Scrap",
      ],
      icon: "🏭",
      color: "green",
    },
    {
      name: "Other Recyclables",
      items: [
        "Industrial Waste",
        "Commercial Waste",
        "Domestic Waste Products",
        "Pharmaceutical Waste",
        "Petrochemical Waste",
        "Automotive Waste",
        "Government Entity Scrap",
        "Factory Decommissions",
      ],
      icon: "♻️",
      color: "teal",
    },
  ],
};

export const contactContent = {
  tagline: "Get In Touch",
  heading: "Ready to Recycle?",
  subheading:
    "Contact us today for a free assessment and pickup scheduling. We serve residential, commercial, and industrial clients across India.",
  details: [
    {
      icon: "📍",
      title: "Registered Office",
      value: "Uttar Pradesh, India",
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@ecotechrecyclers.in",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      icon: "🕐",
      title: "Working Hours",
      value: "Mon – Sat: 9:00 AM – 6:00 PM",
    },
  ],
  formFields: [
    { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
    { name: "material", label: "Scrap Material Type", type: "text", placeholder: "E.g. E-waste, copper, etc." },
    { name: "message", label: "Additional Details", type: "textarea", placeholder: "Quantity, location, pickup preference..." },
  ],
};
