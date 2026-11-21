export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "New Malden", href: "/new-malden" },
  { label: "West Ealing", href: "/west-ealing" },
  { label: "The Crew", href: "/crew" },
  { label: "Timetable", href: "/timetable" },
  { label: "Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
];

export type Price = { label: string; price: string; note: string; featured?: boolean };

export const prices: Price[] = [
  {
    label: "Monthly",
    price: "£59.99",
    note: "Rolling membership. One month notice period.",
    featured: true,
  },
  { label: "7 Day Pass", price: "£62.99", note: "Make the most of us for 7 days in a row." },
  { label: "Single Month", price: "£69.99", note: "Pay for just one month. No contract required." },
  { label: "Annual", price: "£649.99", note: "The most cost-effective way to train." },
  { label: "Day Pass", price: "£19.99", note: "One day. Morning 'til close." },
];

export type FacilityZone = { name: string; blurb: string; items: string[] };

export type Club = {
  slug: string;
  name: string;
  shortName: string;
  address: string[];
  phone: string;
  email: string;
  hours: string[];
  joinUrl: string;
  mapUrl: string;
  zones: FacilityZone[];
  studio: string[];
};

export const clubs: Record<"new-malden" | "west-ealing", Club> = {
  "new-malden": {
    slug: "new-malden",
    name: "Energym New Malden",
    shortName: "New Malden",
    address: ["106–110 High Street", "New Malden", "KT3 4EU"],
    phone: "020 8942 7874",
    email: "info@energym.co.uk",
    hours: [
      "Mon–Fri 6am–11pm (last entry 10.30pm)",
      "Sat–Sun 8am–8pm (last entry 7.30pm)",
      "Bank Holidays 8am–8pm (last entry 7.30pm)",
    ],
    joinUrl: "https://secure16.clubwise.com/energym/pos.asp",
    mapUrl: "https://maps.google.com/?q=106-110+High+Street+New+Malden+KT3+4EU",
    zones: [
      {
        name: "Gold",
        blurb: "Annihilate your PB with:",
        items: [
          "Dumbbells",
          "Multi-adjustable benches",
          "Incline / decline flat bench",
          "T-bar row",
          "Preacher curl",
          "Smith machines",
          "Multi-adjustable bench press",
        ],
      },
      {
        name: "Emerald",
        blurb: "Push your endurance levels to their very limits using:",
        items: [
          "8-station cables",
          "Chest press",
          "Shoulder press",
          "Tricep dip",
          "Lat pulldown",
          "Hamstring curl",
          "Calf raise",
          "Leg extension",
          "Abductor / adductor",
          "Low row",
          "Rear kick",
          "Leg curl",
        ],
      },
      {
        name: "Opal",
        blurb: "Supercharge your cardio stamina with:",
        items: ["Treadmills", "Cross trainers", "Rowers", "Ski erg", "Stretching area", "Upright bikes"],
      },
      {
        name: "Onyx",
        blurb: "Train like a gladiator using:",
        items: [
          "20 squat rack stations",
          "Hip thrust",
          "Abductor / adductor",
          "Pendulum squat",
          "45-degree leg press",
          "Power squat",
          "V squat",
          "Hack squat",
          "Calf raise",
          "Sleds",
          "TRX stations",
          "Pull-up / dip station",
        ],
      },
      {
        name: "Diamond",
        blurb: "Jumpstart your heart-rate with extreme HIIT on:",
        items: [
          "Steppers",
          "Rowing machines",
          "Chin dip",
          "12 × 55kg punch bags",
          "Monkey bars",
          "Medicine balls",
          "Kettlebells",
          "Barbell sets",
          "Battle rope",
          "Running track",
          "Sleds",
          "Wattbike",
        ],
      },
      {
        name: "Sapphire",
        blurb: "Lose yourself in our immersive classes.",
        items: ["Spin studio", "Immersive lights", "Over 60 classes a week"],
      },
    ],
    studio: ["Circuits", "Yoga", "Pilates", "Boxing", "Strength", "Spin", "Dance", "Mobility"],
  },
  "west-ealing": {
    slug: "west-ealing",
    name: "Energym West Ealing",
    shortName: "West Ealing",
    address: ["104 The Broadway", "West Ealing", "W13 0SY"],
    phone: "020 3752 8574",
    email: "westealing@energym.co.uk",
    hours: [
      "Mon–Fri 6am–11pm (last entry 10.30pm)",
      "Sat–Sun 8am–8pm (last entry 7.30pm)",
      "Bank Holidays 8am–8pm (last entry 7.30pm)",
    ],
    joinUrl: "https://secure15.clubwise.com/energymwestealing/pos.asp",
    mapUrl: "https://maps.google.com/?q=104+The+Broadway+West+Ealing+W13+0SY",
    zones: [
      {
        name: "Gold",
        blurb: "Annihilate your PB with:",
        items: [
          "Dumbbells",
          "Incline / decline flat bench",
          "T-bar row",
          "Lat pulldown",
          "Smith machine",
          "Sitting plate-loaded chest press",
          "Shoulder press racks",
        ],
      },
      {
        name: "Emerald",
        blurb: "Push your endurance levels to their very limits using:",
        items: [
          "Lat shoulder raise",
          "Standing chest press",
          "Dual pulley",
          "Tricep dip",
          "Pendulum squat",
          "Bicep curl",
          "Calf raise",
          "Plate-loaded pec fly",
          "Pec fly",
          "Low row",
          "Rear kick",
          "Leg extension",
        ],
      },
      {
        name: "Opal",
        blurb: "Supercharge your cardio stamina with:",
        items: ["Treadmills", "Cross trainers", "Upright bikes", "Watt bikes", "Four station", "Rowers", "Hack squat"],
      },
      {
        name: "Onyx",
        blurb: "Train like a gladiator using:",
        items: ["Olympic platforms", "8 station", "45-degree leg press", "Pull-up / dip station"],
      },
      {
        name: "Diamond",
        blurb: "Jumpstart your heart-rate with extreme HIIT on:",
        items: [
          "Steppers",
          "Chin dip",
          "5 × 55kg punch bags",
          "4 squat racks",
          "TRX station",
          "Monkey bars",
          "Medicine balls",
          "Barbell sets",
          "Battle rope",
          "Running track",
          "Spin bikes",
        ],
      },
      {
        name: "Sapphire",
        blurb: "Lose yourself in our immersive classes.",
        items: ["Spin studio", "Immersive lights", "Over 60 classes a week"],
      },
    ],
    studio: ["Circuits", "Yoga", "Pilates", "Boxing", "Strength", "Spin", "Dance", "Mobility"],
  },
};

export type CrewMember = {
  name: string;
  slug: string;
  club: "New Malden" | "West Ealing";
  bio: string;
  image: string;
};

export const crew: CrewMember[] = [
  {
    name: "Callum",
    slug: "callum",
    club: "New Malden",
    bio: "Helping clients build the body they want — and the discipline to keep it.",
    image: "/img/crew/callum.jpeg",
  },
  {
    name: "Carla",
    slug: "carla",
    club: "New Malden",
    bio: "I love helping people get healthier, fitter, stronger and more confident.",
    image: "/img/crew/carla.jpeg",
  },
  {
    name: "Mia",
    slug: "mia",
    club: "New Malden",
    bio: "Empowering women to unlock confidence by pushing mental and physical boundaries.",
    image: "/img/crew/mia.jpeg",
  },
  {
    name: "Mo",
    slug: "mo",
    club: "New Malden",
    bio: "A happy, well-balanced lifestyle that minimises future health-related issues.",
    image: "/img/crew/mo.jpeg",
  },
  {
    name: "Nic",
    slug: "nic",
    club: "New Malden",
    bio: "Personal training, fitness coaching and boxing coaching, built around you.",
    image: "/img/crew/nic.jpeg",
  },
  {
    name: "Cagri",
    slug: "cagri",
    club: "New Malden",
    bio: "From first session to full potential — plus rehabilitation and massage therapy.",
    image: "/img/crew/cagri.jpeg",
  },
  {
    name: "Najeeb",
    slug: "najeeb",
    club: "New Malden",
    bio: "Sustainable plans built around your lifestyle, abilities and aspirations.",
    image: "/img/crew/najeeb.jpeg",
  },
  {
    name: "Archie",
    slug: "archie",
    club: "New Malden",
    bio: "Personalised training, nutrition and motivation for the long term.",
    image: "/img/crew/archie.jpeg",
  },
  {
    name: "Joseph",
    slug: "joseph",
    club: "New Malden",
    bio: "Kickboxing, strength and cardio that doesn't feel like cardio.",
    image: "/img/crew/joseph.jpeg",
  },
  {
    name: "Dylan",
    slug: "dylan",
    club: "New Malden",
    bio: "Core, balance and control through TRX, kettlebells and bodyweight.",
    image: "/img/crew/dylan.jpeg",
  },
  {
    name: "Richard",
    slug: "richard",
    club: "New Malden",
    bio: "Strength and conditioning you can stick to, enjoy and progress with.",
    image: "/img/crew/richard.jpeg",
  },
  {
    name: "Martyna",
    slug: "martyna",
    club: "West Ealing",
    bio: "Making fitness approachable, enjoyable and part of your daily life.",
    image: "/img/crew/martyna.jpeg",
  },
  {
    name: "Balkar",
    slug: "balkar",
    club: "West Ealing",
    bio: "15+ years in fitness, 8+ in yoga — strength meets mindful movement.",
    image: "/img/crew/balkar.jpeg",
  },
  {
    name: "Laertis",
    slug: "laertis",
    club: "West Ealing",
    bio: "A hybrid of football, boxing, calisthenics and weightlifting. AKA Lart.",
    image: "/img/crew/laertis.jpeg",
  },
  {
    name: "Hussien",
    slug: "hussien",
    club: "West Ealing",
    bio: "Sustainable fitness and nutrition for people with demanding 9–5s.",
    image: "/img/crew/hussien.jpeg",
  },
  {
    name: "David",
    slug: "david",
    club: "West Ealing",
    bio: "Football and rugby background, all-round fitness and nutrition.",
    image: "/img/crew/david.jpeg",
  },
  {
    name: "Shella",
    slug: "shella",
    club: "West Ealing",
    bio: "Your biggest cheerleader — bespoke programming and real accountability.",
    image: "/img/crew/shella.jpeg",
  },
  {
    name: "Paul",
    slug: "paul",
    club: "West Ealing",
    bio: "Functional fitness and strength, built on sustainable habits.",
    image: "/img/crew/paul.jpeg",
  },
  {
    name: "Rafael",
    slug: "rafael",
    club: "West Ealing",
    bio: "Health & Exercise Science background, practical coaching for real life.",
    image: "/img/crew/rafael.jpeg",
  },
];

export type ClassSlot = {
  name: string;
  time: string;
  duration: string;
  room: string;
  note?: string;
};

export type Day = { day: string; slots: ClassSlot[] };

export const timetables: Record<"new-malden" | "west-ealing", Day[]> = {
  "new-malden": [
    {
      day: "Monday",
      slots: [
        { name: "Stretch & Flex", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "Belly Shredder", time: "9.30am", duration: "45 min", room: "Gym Floor" },
        { name: "Spin & Abs", time: "10.00am", duration: "45 min", room: "Spin Studio" },
        { name: "Boxing Fitness", time: "12.00pm", duration: "60 min", room: "Gym Floor" },
        { name: "Yoga", time: "12.00pm", duration: "60 min", room: "Studio One" },
        { name: "HIIT with Rich", time: "6.00pm", duration: "45 min", room: "Studio One" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { name: "Boxing", time: "6.05am", duration: "45 min", room: "Gym Floor" },
        { name: "Kickboxing", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "Muay Thai", time: "9.30am", duration: "45 min", room: "Gym Floor" },
        { name: "Dynamic Yoga", time: "11.30am", duration: "60 min", room: "Studio One" },
        { name: "HIIT with Rich", time: "12.00pm", duration: "45 min", room: "Studio One" },
        { name: "Foundations in Lifting", time: "5.15pm", duration: "45 min", room: "Studio One" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { name: "Circuits", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "Circuits", time: "9.30am", duration: "45 min", room: "Studio One" },
        { name: "Booty Camp", time: "12.00pm", duration: "45 min", room: "Studio One" },
        { name: "Group PT", time: "5.00pm", duration: "45 min", room: "Gym Floor" },
        { name: "Step Dance", time: "5.00pm", duration: "60 min", room: "Studio One" },
        { name: "Pilates", time: "6.00pm", duration: "60 min", room: "Studio One" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { name: "Boxing Fitness", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "Power 45", time: "9.30am", duration: "45 min", room: "Gym Floor" },
        { name: "Yoga", time: "10.30am", duration: "60 min", room: "Studio One" },
        { name: "Pilates", time: "12.00pm", duration: "60 min", room: "Studio One" },
        { name: "Power Bar", time: "5.15pm", duration: "45 min", room: "Studio One" },
        { name: "Legs, Bums & Tums", time: "6.00pm", duration: "45 min", room: "Studio One" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { name: "Booty Camp", time: "7.00am", duration: "45 min", room: "Studio One" },
        { name: "Booty Camp", time: "9.30am", duration: "45 min", room: "Studio One" },
        { name: "Iron Rush", time: "11.00am", duration: "45 min", room: "Studio One" },
        { name: "Iron Rush", time: "12.00pm", duration: "45 min", room: "Studio One" },
        { name: "Power Bar", time: "5.15pm", duration: "45 min", room: "Studio One" },
        { name: "Pilates", time: "6.00pm", duration: "60 min", room: "Studio One" },
      ],
    },
    {
      day: "Saturday",
      slots: [
        { name: "Bollyburn Beginners", time: "9.00am", duration: "45 min", room: "Studio One" },
        { name: "Legs, Bums & Tums", time: "10.00am", duration: "45 min", room: "Spin Studio" },
        { name: "Spin", time: "10.00am", duration: "45 min", room: "Spin Studio" },
        { name: "Yoga", time: "11.00am", duration: "60 min", room: "Studio One" },
        { name: "Spin", time: "11.00am", duration: "30 min", room: "Spin Studio" },
      ],
    },
    {
      day: "Sunday",
      slots: [
        { name: "Pilates", time: "10.00am", duration: "60 min", room: "Studio One" },
        { name: "Yoga", time: "11.00am", duration: "60 min", room: "Studio One" },
      ],
    },
  ],
  "west-ealing": [
    {
      day: "Monday",
      slots: [
        { name: "Strength & Conditioning", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        {
          name: "Legs, Bums & Tums",
          time: "9.00am",
          duration: "45 min",
          room: "Studio One",
          note: "Female only",
        },
        { name: "Pilates", time: "12.15pm", duration: "45 min", room: "Studio One" },
        { name: "Full Body Ignite", time: "6.00pm", duration: "45 min", room: "Gym Floor" },
        { name: "Core Strength", time: "7.00pm", duration: "45 min", room: "Studio One" },
        { name: "Spin", time: "7.15pm", duration: "45 min", room: "Spin Studio" },
        { name: "Pilates", time: "8.05pm", duration: "60 min", room: "Studio One" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { name: "HIIT", time: "7.00am", duration: "45 min", room: "Studio One" },
        { name: "Full Body Workout", time: "9.30am", duration: "45 min", room: "Studio One" },
        { name: "Yoga", time: "12.30pm", duration: "60 min", room: "Studio One" },
        { name: "Circuit Training", time: "6.00pm", duration: "45 min", room: "Gym Floor" },
        { name: "Spin", time: "6.30pm", duration: "45 min", room: "Spin Studio" },
        { name: "Tabata", time: "7.00pm", duration: "45 min", room: "Gym Floor" },
        { name: "Pilates", time: "7.00pm", duration: "60 min", room: "Studio One" },
        { name: "Yoga", time: "8.00pm", duration: "60 min", room: "Studio One" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { name: "TBC", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "TBC", time: "9.30am", duration: "45 min", room: "Studio One" },
        { name: "Station 8", time: "6.00pm", duration: "45 min", room: "Gym Floor" },
        { name: "Boxing", time: "7.00pm", duration: "60 min", room: "Gym Floor" },
        {
          name: "HIIT Circuit / Block Work",
          time: "6.30pm",
          duration: "45 min",
          room: "Spin Studio",
        },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { name: "Bootcamp", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "Abs & Conditioning", time: "9.30am", duration: "45 min", room: "Gym Floor" },
        { name: "Booty Strong / Core Solid", time: "6.00pm", duration: "45 min", room: "Studio One" },
        { name: "Yoga", time: "6.00pm", duration: "60 min", room: "Studio One" },
        { name: "Spin", time: "6.30pm", duration: "45 min", room: "Spin Studio" },
        { name: "Upper Body Sculpt", time: "7.00pm", duration: "45 min", room: "Studio One" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { name: "TBC", time: "7.00am", duration: "45 min", room: "Gym Floor" },
        { name: "TBC", time: "9.30am", duration: "45 min", room: "Studio One" },
        { name: "Pilates", time: "12.30pm", duration: "60 min", room: "Studio One" },
        { name: "TBC", time: "6.00pm", duration: "45 min", room: "Gym Floor" },
        { name: "Boxing", time: "7.00pm", duration: "60 min", room: "Gym Floor" },
        { name: "TBC", time: "7.00pm", duration: "45 min", room: "Studio One" },
        { name: "TBC", time: "8.15pm", duration: "30 min", room: "Studio One" },
      ],
    },
    {
      day: "Saturday",
      slots: [
        { name: "Yoga", time: "9.00am", duration: "45 min", room: "Studio One" },
        { name: "Pilates", time: "10.00am", duration: "60 min", room: "Studio One" },
        { name: "Strength Lab", time: "12.30pm", duration: "45 min", room: "Gym Floor" },
      ],
    },
    {
      day: "Sunday",
      slots: [{ name: "Yoga", time: "9.00am", duration: "60 min", room: "Studio One" }],
    },
  ],
};

export type ClassInfo = { name: string; description: string; tag: string };

export const classes: ClassInfo[] = [
  {
    name: "HIIT",
    tag: "Cardio",
    description:
      "Bursts of high-intensity strength and cardio followed by brief recovery. A 3–5 minute warm-up, then three rounds of eight exercises mixing machines and bodyweight. 30–45 minutes.",
  },
  {
    name: "Boxing",
    tag: "Combat",
    description:
      "A 60-minute class built around intense rounds. Footwork, combinations, conditioning and a lot of sweat. No experience needed.",
  },
  {
    name: "Pilates",
    tag: "Core",
    description:
      "Controlled movement, breath and core stability. Build strength without bulk, improve posture and move more freely.",
  },
  {
    name: "Spin",
    tag: "Cardio",
    description:
      "Forty-five minutes of immersive, beat-driven riding in the spin studio. Sprint, climb, recover, repeat.",
  },
  {
    name: "Yoga",
    tag: "Mobility",
    description:
      "Strength, balance and mobility with a focus on breath. A proper reset for body and head.",
  },
  {
    name: "Strength & Conditioning",
    tag: "Strength",
    description:
      "Compound lifts, accessory work and conditioning. Built to make you stronger, more stable and harder to knock over.",
  },
  {
    name: "Foundations in Lifting",
    tag: "Beginner",
    description:
      "Squat, bench and deadlift for beginners. The fundamentals, correct form and the confidence to walk onto the gym floor.",
  },
  {
    name: "Power Pump",
    tag: "Strength",
    description:
      "Full-body pump using bodyweight and free weights. Warm-up, a 20-minute main session and a cool-down. Minimal rest.",
  },
  {
    name: "Functional Circuits",
    tag: "Conditioning",
    description:
      "A 45-minute full-body workout built from functional movement patterns. Improves cardiovascular fitness and coordination.",
  },
  {
    name: "Barbell Club",
    tag: "Advanced",
    description:
      "Advanced barbell and bodyweight work. You must be able to lift a 20kg Olympic bar overhead and do pull-ups and push-ups.",
  },
  {
    name: "Legs, Bums & Tums",
    tag: "Tone",
    description:
      "Lower-body strength, glutes and core. High rep, low boredom, done in 45.",
  },
  {
    name: "Mobility & Stretch",
    tag: "Recovery",
    description:
      "Flexibility and mobility for moving well and avoiding injury. The class your future knees will thank you for.",
  },
];

export const classNames = [
  "Abs",
  "Abs & Cardio",
  "Abs & Conditioning",
  "Barbell Club",
  "Belly Shredder",
  "Block Work",
  "Body Balance",
  "Body Sculpt",
  "Bollyburn Beginners",
  "Bootcamp",
  "Booty Camp",
  "Booty Strong / Core Solid",
  "Boxercise",
  "Boxing",
  "Boxing Fitness",
  "Circuit Training",
  "Circuits",
  "Core",
  "Core Power Circuit",
  "Core Solid",
  "Core Strength",
  "Dynamic Strength & Balance",
  "Dynamic Yoga",
  "Fit Fusion",
  "Foundations in Lifting",
  "Full Body Ignite",
  "Full Body Workout",
  "Functional Circuits",
  "Functional Fitness",
  "Get Glutes",
  "Glute Express",
  "Group PT",
  "HIIT",
  "HIIT Circuit",
  "HIIT with Rich",
  "Iron Rush",
  "Kickboxing",
  "Kickboxercise",
  "Legs, Bums & Tums",
  "Lift & Sweat",
  "Mobility",
  "Muay Thai",
  "Pilates",
  "Power 45",
  "Power Bar",
  "Power Pump",
  "Raise the Bar",
  "Reflex Ready",
  "Relax & Relief",
  "Spin",
  "Spin & Abs",
  "Stability",
  "Station 8",
  "Step Dance",
  "Strength & Conditioning",
  "Strength Lab",
  "Stretch & Flex",
  "Stretching & Mobility",
  "Sweat & Burn",
  "Tabata",
  "Total Burn",
  "TRX",
  "TRX Functional Circuit",
  "Upper Body Sculpt",
  "Yoga",
];
