export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Client Collaboration & Communication",
    description:
      "I prioritize open communication and collaborative development, ensuring projects align with client vision and business goals.",
    className: "lg:col-span-1 md:col-span-1 col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible & Remote-Ready",
    description:
      "Experienced in working across different time zones with distributed teams, ensuring seamless collaboration regardless of location.",
    className: "lg:col-span-1 md:col-span-1 col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Performance-Driven Development",
    description:
      "Specialized in building high-performance mobile apps with optimized rendering, efficient state management, and smooth user experiences.",
    className: "lg:col-span-1 md:col-span-1 col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Full-Stack Mobile Expertise",
    description:
      "End-to-end mobile development from UI/UX implementation to backend integration, payment gateways, and real-time features.",
    className: "lg:col-span-1 md:col-span-1 col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Production-Ready Applications",
    description:
      "Successfully launched apps serving 100K+ users on Google Play Store and Apple App Store with robust architecture and scalability.",
    className: "lg:col-span-1 md:col-span-1 col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Build Something Amazing",
    description:
      "Ready to collaborate on your next mobile app project. From concept to deployment, I'll help bring your vision to life.",
    className: "lg:col-span-1 md:col-span-1 col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Taco Bell - Food Ordering App",
    des: "High-performance React Native app serving 100K+ users with menu browsing, cart management, payment integration, and real-time order tracking.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://play.google.com/store/apps/details?id=com.tacobell.ordering",
  },
  {
    id: 2,
    title: "Repair India App",
    des: "Comprehensive service management and booking platform connecting users with repair professionals across India with real-time tracking and notifications.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg", "/c.svg"],
    link: "https://play.google.com/store/apps/details?id=com.repair_india&pcampaignid=web_share",
  },
  {
    id: 3,
    title: "DPS School Management App",
    des: "Complete school management system with student attendance, grade tracking, parent-teacher communication, and administrative tools for seamless education management.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg", "/c.svg"],
    link: "https://play.google.com/store/apps/details?id=com.dps_panipat_city&pcampaignid=web_share",
  },
  {
    id: 4,
    title: "Buddy Cabs",
    des: "Feature-rich cab booking application with real-time ride tracking, secure payments, and seamless user experience.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://play.google.com/store/apps/details?id=com.cabbudi.userapp&pcampaignid=web_share",
  },
];

export const testimonials = [
  {
    quote:
      "Sumit delivered an exceptional React Native app for our food delivery platform. His expertise in handling complex features like real-time order tracking, payment integration, and push notifications was impressive. The app is smooth, fast, and our users love it!",
    name: "Rajesh Kumar",
    title: "Product Manager, Taco Bell India",
  },
  {
    quote:
      "Working with Sumit was a great experience. He built our driver app with excellent attention to detail, implementing GPS navigation and real-time booking features flawlessly. His code quality and commitment to deadlines were outstanding.",
    name: "Priya Sharma",
    title: "CTO, Buddy Cabs",
  },
  {
    quote:
      "Sumit's technical skills in React Native are top-notch. He optimized our app's performance significantly using FlashList and MMKV, reducing load times by 40%. His proactive approach to problem-solving saved us weeks of development time.",
    name: "Amit Patel",
    title: "Tech Lead, Jupiter Orison",
  },
  {
    quote:
      "I highly recommend Sumit for any mobile app development project. He delivered our school management app with a clean architecture, making it easy to maintain and scale. His expertise in both Android and iOS platforms is remarkable.",
    name: "Dr. Neha Gupta",
    title: "Director, DPS School",
  },
  {
    quote:
      "Sumit's ability to integrate complex APIs and third-party services is exceptional. He handled our payment gateway integration, Firebase setup, and analytics implementation seamlessly. A true professional who delivers quality work on time.",
    name: "Vikram Singh",
    title: "Founder, Repair India",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Flamingo Digital Private Limited",
    location: "Gurugram",
    title: "App Developer - React Native",
    duration: "June 2025 - Present",
    desc: "Led the end-to-end development and successful Google Play Store and Apple App Store launch of the high-performance React Native Taco Bell application for both Android and iOS platforms, currently serving 100K+ active users.",
    achievements: [
      "Designed and implemented scalable core modules including Authentication, Menu Browsing, Cart and Checkout, Coupon Management, Payment Gateway Integration, Order Processing, Push Notifications, and Profile Management",
      "Owned ongoing maintenance, feature enhancements, performance optimization, and stability improvements across both platforms",
      "Contributed to the Coffee Island app and supported the legacy Taco Bell application",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    company: "Jupiter Orison",
    location: "Gurugram",
    title: "Software Developer",
    duration: "December 2022 - Present",
    desc: "Mobile application development company focused on delivering high-performance apps for Android and iOS platforms.",
    achievements: [
      "Developed and deployed high-performance mobile apps for Android and iOS using React Native",
      "Implemented clean architecture and modular reusable components to improve scalability",
      "Integrated REST and GraphQL APIs with Redux and MobX for consistent state management",
      "Delivered user-focused features with Firebase for real-time sync and analytics",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    company: "Webority Technologies",
    location: "Gurugram",
    title: "Jr. Software Developer",
    duration: "September 2021 - November 2022",
    desc: "Tech company specializing in web and mobile development solutions.",
    achievements: [
      "Created intuitive UI components and screens for cross-platform apps",
      "Led development of the Buddy Cabs Driver App including booking, navigation & trip logic",
      "Optimized performance using FlatList, lazy loading, and async storage techniques",
      "Collaborated closely with product and backend teams to integrate APIs and deploy builds",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const techStack = {
  core: ["React Native", "React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  native: ["Kotlin", "Swift", "SwiftUI", "Jetpack Compose"],
  stateManagement: ["Redux", "Zustand", "Redux Toolkit", "Context API"],
  navigation: ["React Navigation"],
  apis: ["REST APIs", "GraphQL", "Axios", "Apollo Client"],
  backend: ["Node.js", "Express.js", "MongoDB", "Firebase", "AWS"],
  ui: ["Styled Components", "React Native Paper", "Native Base"],
  performance: [
    "Shopify FlashList",
    "React Native Skia",
    "MMKV",
    "Lazy Loading",
    "Code Splitting",
  ],
  notifications: ["Firebase Cloud Messaging (FCM)", "OneSignal"],
  payments: ["Stripe", "Razorpay", "Payment Gateway Integration"],
  testing: ["Jest", "React Native Testing Library"],
  deployment: [
    "Fastlane",
    "CodePush (OTA Updates)",
    "CI/CD Pipelines",
    "App Center",
    "Google Play Console",
    "Apple App Store Connect",
  ],
  tools: ["Git", "GitHub", "VS Code", "Postman", "Android Studio", "Xcode"],
};
