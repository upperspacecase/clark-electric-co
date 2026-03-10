const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Clark Electric Co",
  tagline: "Licensed Electrician Serving Huntsville Since 2010",
  phone: "(256) 534-6132",
  phoneHref: "tel:+12565346132",
  smsHref: "sms:+12565346132",
  email: "info@clark-electric-co.com",
  address: "202 Parkway Dr NW, Huntsville, AL 35801",
  licenseNumber: "",
  yearEstablished: 2010,
  hoursOfOperation: "24/7 Emergency Service Available",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Licensed Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Complete home wiring, rewiring, and electrical upgrades for houses and apartments across Huntsville.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Office, retail, and industrial electrical installations, fit-outs, and ongoing maintenance.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Power outages, sparking outlets, tripped breakers. We come to you fast, day or night.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Replace outdated electrical panels with modern, code-compliant breaker boxes and safety switches.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "Recessed lighting, LED upgrades, outdoor lighting, and smart lighting systems for any space.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial electric vehicle charging stations.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "With over 15 years serving Huntsville and the greater Madison County area, Clark Electric Co is built on honest work and fair pricing. Every job is completed by a licensed, insured electrician who treats your property like their own. From Five Points bungalows to Research Park offices, no job is too big or too small.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 5,
    totalReviews: 0,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJq6o6B0prYogRba0ibo1i8TQ",
    items: [],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103689.45474442498!2d-86.65804835!3d34.7303688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67e8cd1205%3A0x6dfa6c7a0e4e0187!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency Call-Out",
      "Switchboard & Panel Upgrade",
      "Lighting Installation",
      "EV Charger Installation",
      "Other",
    ],
    // recipientEmail derived from siteConfig.email
  },
};

export default siteConfig;
