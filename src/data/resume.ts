export type Link = { label: string; href: string }

export type Role = {
  title: string
  company: string
  location: string
  start: string
  end: string
  current?: boolean
  bullets: { lead?: string; text: string }[]
}

export type SkillGroup = { name: string; items: string[] }

export type Highlight = { metric: string; label: string; detail: string }

/** Everything on the site comes from here. Edit this file, not the components. */
export const profile = {
  name: 'Avay Kumar Das',
  initials: 'AK',
  title: 'Senior iOS Engineer',
  tagline: 'SwiftUI · Swift · Objective-C',
  location: 'New Delhi, India',
  email: 'avay.kumar0129@gmail.com',
  photo: '/avay.jpeg',
  resume: '/Avay_Kumar_Das_Resume.pdf',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avay-das-5326a9b4/' },
  ] as Link[],
}

export const intro = {
  heading: 'Why I build what I build',
  paragraphs: [
    `I'm a product-focused Senior iOS Engineer with 8+ years spent shipping polished consumer applications to
     very large user bases — Zomato, OYO, and for the last four years the Deutsche Telekom streaming ecosystem.
     My work sits where technical craftsmanship meets product judgement: I care about the frame that drops, the
     accessibility label that's missing, and the release that goes out clean.`,

    `Most of my recent work has been on Apple TV (tvOS), owning the Player and Home modules across multiple
     international markets. Multi-market means every assumption you hold about layout, localisation, and content
     rights gets tested — it has made me a far more careful engineer than any single-market product could.`,

    `Alongside the platform work I've been building the tooling I wished existed. I designed and documented an
     in-app agent architecture for modular, agent-driven interactions across iOS and cross-platform, built a
     locally-hosted RAG application that generates unit tests for new modules, and developed a system of
     diagnostic agents that cut root-cause analysis time dramatically. I think the next decade of iOS work
     belongs to engineers who can do both halves, and I've been deliberately building toward that.`,

    `I'm looking for senior iOS work at a product company that takes the client seriously — where the app is the
     product, not a thin shell over an API.`,
  ],
}

export const highlights: Highlight[] = [
  {
    metric: '80%',
    label: 'Faster diagnostics',
    detail:
      'Built a system of agentic-AI diagnostic agents that reduced time spent on root-cause analysis for production issues.',
  },
  {
    metric: 'RAG',
    label: 'Automated unit tests',
    detail:
      'Locally-hosted retrieval-augmented generation app that writes unit tests for new modules, measurably increasing development speed.',
  },
  {
    metric: 'Multi-market',
    label: 'tvOS at scale',
    detail:
      'Engineered and optimised the AppleTV ecosystem across several international markets, owning Player and Home.',
  },
  {
    metric: '8+ yrs',
    label: 'Consumer iOS',
    detail:
      'Shipping to massive user bases at Zomato, OYO and Deutsche Telekom — Swift, SwiftUI and Objective-C in production.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages & Frameworks',
    items: [
      'Swift (Advanced)',
      'SwiftUI (Production Level)',
      'Objective-C',
      'UIKit',
      'Combine',
      'Async/Await',
      'Multithreading (GCD / Concurrency)',
      'Python',
      'Agentic AI Development',
    ],
  },
  {
    name: 'Architecture & Design',
    items: ['SOLID Principles', 'VIPER', 'MVC', 'MVVM', 'Design Patterns'],
  },
  {
    name: 'Tools & Delivery',
    items: [
      'Git Strategies',
      'CI/CD (Fastlane, Jenkins)',
      'Xcode',
      'Unit Testing',
      'App Store Connect, TestFlight',
      'Xcode Instruments (Time Profiler, Leaks)',
      'Crashlytics',
      'Backend Development (Python)',
      'Flutter',
    ],
  },
]

export const roles: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Deutsche Telekom Digital Labs',
    location: 'Gurugram',
    start: 'Nov 2022',
    end: 'Present',
    current: true,
    bullets: [
      {
        lead: 'Product Engineering',
        text: 'Engineered and optimised the AppleTV (tvOS) ecosystem across multiple international markets (NatCos), primarily owning the UI for the Player and Home modules.',
      },
      {
        lead: 'Technical Innovation',
        text: 'Led the design and documentation of an In-App Agent Architecture, focusing on modularity and scalable agent-driven interactions within the iOS ecosystem and cross-platform.',
      },
      {
        lead: 'AI Tooling',
        text: 'Built a locally-hosted RAG (Retrieval-Augmented Generation) application to automate unit test generation for new modules, significantly increasing development speed.',
      },
      {
        lead: 'Media & Analytics',
        text: 'Implemented specialised Player analytics for commission settlement and integrated comprehensive user analytics services (MoEngage, Google Analytics) to drive product decisions.',
      },
      {
        lead: 'Leadership',
        text: 'Mentored junior developers through code reviews and technical learning sessions to maintain high codebase standards.',
      },
      {
        lead: 'CI/CD Management',
        text: 'Kept the CI/CD pipeline running and managed provisioning profiles and certificates via scripts.',
      },
      {
        lead: 'Exploration',
        text: 'Worked on agentic AI to develop a system of diagnostic agents, helping achieve 80% faster diagnostics and RCA.',
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Deutsche Telekom Digital Labs',
    location: 'Gurugram',
    start: 'Apr 2021',
    end: 'Oct 2022',
    bullets: [
      { text: 'Implemented user analytics services for MoEngage, Google Analytics, and in-house systems.' },
      { text: 'Contributed significantly to app setup for a new country launch.' },
      { text: 'Developed player analytics for commission settlement across various National Companies.' },
      { text: 'Enhanced overall app user experience through targeted bug fixes.' },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'OYO',
    location: 'Gurugram',
    start: 'Nov 2018',
    end: 'Mar 2020',
    bullets: [
      {
        lead: 'Speed & Execution',
        text: 'Led the end-to-end implementation of new Login and Signup flows, ensuring rapid deployment to improve user conversion ease for international onboarding.',
      },
      {
        lead: 'User Obsession',
        text: 'Executed a major UI/UX revamp, transitioning the app from Frames to AutoLayout for a seamless, modern experience across a massive user base.',
      },
      {
        lead: 'Infrastructure',
        text: 'Established a basic CI server for build automation and authored comprehensive unit tests to ensure product stability.',
      },
      { lead: 'Growth', text: 'Played a key role in delivering major features and critical updates.' },
      {
        lead: 'Release Management',
        text: 'Owned the end-to-end App Store release lifecycle, including provisioning profiles, code signing, and versioning for global deployments.',
      },
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Zomato',
    location: 'Gurugram',
    start: 'Jun 2017',
    end: 'Oct 2018',
    bullets: [
      {
        lead: 'Product Thinking',
        text: "Collaborated cross-functionally with Product, Design, and Backend teams to evolve app features from concept to traction for one of India's largest consumer platforms.",
      },
      {
        lead: 'Reliability',
        text: 'Focused on overall app experience improvements and critical bug fixes to maintain high user retention in a high-growth environment.',
      },
    ],
  },
]

/**
 * Shipped work. Placeholder until the App Store links and screenshots are added —
 * drop entries in here and the section renders itself.
 */
export type App = {
  name: string
  role: string
  blurb: string
  image?: string
  href?: string
}

export const apps: App[] = []

export const education = {
  degree: 'Bachelor of Technology',
  school: 'National Institute of Technology, Rourkela',
  location: 'Rourkela, Odisha',
  detail: 'GPA 7.4',
}

export const languages = [
  { name: 'Hindi', level: 'First language', value: 100 },
  { name: 'English', level: 'Upper Intermediate (B2)', value: 72 },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
