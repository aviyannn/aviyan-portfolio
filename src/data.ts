// All site copy lives here so content updates don't require touching layout code.

export const spotify = {
  username: "aviyannnnnn",
  profile: "https://open.spotify.com/user/315bezrssjmu32pnmzvzyij2enme",
};

export const profile = {
  name: "Aviyan Dhital",
  github: "aviyannn",
  email: "aqd13@txstate.edu",
  resume: "/Aviyan-Dhital-Resume.pdf",
  tagline:
    "CS student and undergraduate researcher building data pipelines and machine learning models for environmental science.",
  // "On repeat" in the hero. With no song set, it links to the Spotify profile instead.
  // href is optional (e.g. a link to the track).
  onRepeat: { song: "", artist: "", href: "" },
  currentlyEmoji: "🍳",
  currentlyLabel: "Cooking",
  currently: "Chicken and rice",
};

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "instagram" | "spotify" | "mail" | "file";
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/aviyannn", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aviyandhital", icon: "linkedin" },
  { label: "X", href: "https://x.com/AviYawns", icon: "x" },
  { label: "Instagram", href: "https://instagram.com/aviyan__", icon: "instagram" },
  { label: "Spotify", href: spotify.profile, icon: "spotify" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Resume", href: profile.resume, icon: "file" },
];

export type Role = {
  title: string;
  dates: string;
  note?: string;
  groups: { heading?: string; points: string[] }[];
};

export type Entry = {
  org: string;
  mark: string;
  color: string;
  roles: Role[];
};

export const experience: Entry[] = [
  {
    org: "Ingram School of Engineering",
    mark: "ISE",
    color: "#501214",
    roles: [
      {
        title: "Undergraduate Research Assistant",
        dates: "May 2026 — Present",
        note: "Advisor: Dr. Sujata Mandal",
        groups: [
          {
            heading: "Hydrothermal Carbonization of Biomass",
            points: [
              "Built an end-to-end Python pipeline (pandas, statsmodels, SciPy, scikit-learn) analyzing hydrochar formation across a two-temperature by five-residence-time reaction matrix.",
              "Established via two-way ANOVA that residence time drives hydrochar pH (p=0.034) while temperature governs C/O ratio (p=0.036); regression models explained 73–82% of variance in yield, pH, and C/O ratio.",
              "Correlated EDS elemental composition to carbonization degree (carbon r=+0.998) and quantified an inverse carbon-quality to mass-yield tradeoff (r=−0.860, p=0.0014).",
            ],
          },
          {
            heading: "Flood-Driven Arsenic Contamination Modeling",
            points: [
              "Built a six-module Python pipeline pulling USGS water-quality and discharge data for site 08171350, with automated bounds validation, outlier flagging, and gap interpolation.",
              "Engineered 22 lag, rolling-mean, and flood-phase features for a Random Forest classifier predicting arsenic exceedance of the 10 µg/L EPA limit, evaluated by stratified cross-validation.",
              "Identified a two-day lag between turbidity spikes and arsenic peaks, defining an early-warning window for treatment response.",
            ],
          },
        ],
      },
    ],
  },
  {
    org: "Department of Mathematics",
    mark: "MATH",
    color: "#8d734a",
    roles: [
      {
        title: "Teaching Assistant",
        dates: "Aug 2026 — Present",
        groups: [
          {
            points: [
              "Support College Algebra students by explaining concepts and problem-solving strategies in office hours.",
              "Provide individualized academic support and coordinate with the instructor on course activities.",
            ],
          },
        ],
      },
      {
        title: "Paper Grader",
        dates: "May 2026 — Jul 2026",
        groups: [
          {
            points: [
              "Graded student assignments against established rubrics, maintaining consistency across submissions.",
              "Provided written feedback to help students strengthen conceptual understanding.",
            ],
          },
        ],
      },
    ],
  },
  {
    org: "Department of Physics",
    mark: "PHYS",
    color: "#2f5d8a",
    roles: [
      {
        title: "Undergraduate Research Assistant",
        dates: "Jan 2026 — Apr 2026",
        groups: [
          {
            points: [
              "Developed Python linear regression models on experimental datasets and evaluated them with R² and residual analysis.",
              "Automated data processing and visualization workflows to replace manual spreadsheet analysis.",
            ],
          },
        ],
      },
    ],
  },
];

export const activities: Entry[] = [
  {
    org: "Alpha Lambda Delta Honor Society",
    mark: "ΑΛΔ",
    color: "#3f6b4f",
    roles: [
      {
        title: "Member",
        dates: "2024 — Present",
        groups: [
          {
            points: [
              "National honor society recognizing academic excellence among first-year students.",
            ],
          },
        ],
      },
    ],
  },
  {
    org: "Bobcats LEAD",
    mark: "LEAD",
    color: "#6b3a5c",
    roles: [
      {
        title: "Emerging Leader",
        dates: "2025",
        groups: [
          {
            points: [
              "Applied leadership concepts through team-based discussions and workshops on communication and collaboration.",
            ],
          },
        ],
      },
    ],
  },
];

export const featured = {
  context: "Ingram School of Engineering",
  year: "2026",
  title: "Flood-Driven Arsenic Contamination Modeling",
  summary:
    "A six-module Python pipeline on USGS water-quality and discharge data that predicts when arsenic will exceed the 10 µg/L EPA limit — and found a two-day early-warning window between turbidity spikes and arsenic peaks.",
  tags: ["USGS data pipeline", "22 engineered features", "Random Forest", "Early-warning window"],
  stack: "Python · pandas · scikit-learn · stratified cross-validation",
  href: undefined as string | undefined,
};

export type Build = {
  name: string;
  description: string;
  language: string;
  href?: string;
  status?: string;
};

export const builds: Build[] = [
  {
    name: "aqi-forecast",
    description:
      "Next-day AQI forecasting for San Marcos, TX. Cuts prediction error 15–20% against a baseline regression across 10k+ data points.",
    language: "Python",
    href: "https://github.com/aviyannn/aqi-forecast",
  },
  {
    name: "expensetracker",
    description:
      "Responsive expense tracker with Firebase auth (Email, Google, Phone/OTP) and expense splitting, validated across 100+ test transactions.",
    language: "JavaScript",
    href: "https://github.com/aviyannn/expensetracker",
  },
  {
    name: "shadefinder",
    description:
      "A walking router for the Texas State campus that routes you through shade instead of the shortest path.",
    language: "HTML",
    href: "https://github.com/aviyannn/shadefinder",
  },
  {
    name: "FFT-MICROSCOPY-ANALYSIS",
    description:
      "Frequency-domain analysis of microscopy-style images with 2D FFTs and Gaussian low/high-pass filters.",
    language: "Python",
    href: "https://github.com/aviyannn/FFT-MICROSCOPY-ANALYSIS",
  },
  {
    name: "capitalOne",
    description:
      "Cosmic Car Fund — a gamified savings dashboard on live banking data with car-goal tracking and a payment simulator.",
    language: "TypeScript",
    href: "https://github.com/aviyannn/capitalOne",
  },
  {
    name: "aviyan-portfolio",
    description: "This site. Minimal by design, built with React, TypeScript, and Vite.",
    language: "TypeScript",
    href: "https://github.com/aviyannn/aviyan-portfolio",
  },
];

export const languageColors: Record<string, string> = {
  Python: "#3572a5",
  JavaScript: "#e8c93a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  "C++": "#f34b7d",
};

export const toolkit: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL"] },
  {
    label: "Data & ML",
    items: ["pandas", "NumPy", "Matplotlib", "seaborn", "scikit-learn", "SciPy", "statsmodels"],
  },
  { label: "Web", items: ["React", "Next.js", "Tailwind CSS", "Firebase", "Supabase"] },
  { label: "Tools", items: ["Git", "Jira (Scrum)", "VS Code", "Jupyter", "Windows", "macOS", "Linux"] },
];

export const education = {
  school: "Texas State University",
  degree: "B.S. Computer Science · Minor in Applied Mathematics",
  location: "San Marcos, TX",
  dates: "Fall 2024 — Spring 2028",
  honors: [
    "President's List · Fall 2024, Spring 2025",
    "Dean's List · Fall 2025",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Discrete Mathematics",
    "Object-Oriented Programming",
    "Computing System Fundamentals",
    "Assembly Language",
    "Probability & Statistics",
  ],
};

export type Interest = {
  emoji: string;
  title: string;
  detail: string;
};

export const about = {
  intro:
    "Away from the keyboard, I'm usually watching sport (football above all), playing games, at the gym, in the kitchen, or with headphones on.",
  interests: [
    {
      emoji: "⚽",
      title: "Barça, Argentina & beyond",
      detail:
        "Football is the big one. Matchdays are non-negotiable — Barcelona every week, and the Albiceleste whenever they play. I'm also always up for F1 race weekends, cricket matches, and big tennis finals.",
    },
    {
      emoji: "🎮",
      title: "Playing, not just watching",
      detail: "On the field whenever I can, and on PES, FIFA, and mobile games when I can't.",
    },
    {
      emoji: "🏋️",
      title: "Gym",
      detail: "Lifting keeps me disciplined and is where I reset after long days.",
    },
    {
      emoji: "🍳",
      title: "Cooking",
      detail: "Experimenting in the kitchen and trying new recipes is how I unwind.",
    },
    {
      emoji: "🎧",
      title: "Music",
      detail: "Always something playing — while coding, cooking, or lifting.",
    },
  ] as Interest[],
};
