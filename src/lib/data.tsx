import { Figma, Github, Twitter } from "lucide-react";

import LogoDart from "/public/images/logos/icon-dart.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoFlutter from "/public/images/logos/icon-flutter.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoKotlin from "/public/images/logos/icon-kotlin.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoSwift from "/public/images/logos/icon-swift.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";

import LogoASC from "/public/images/logo-asc.png";
import LogoCNV from "/public/images/logo-cnv.png";
import LogoShinhan from "/public/images/logo-shinhan.png";

import ProjectAlpha from "/public/images/alpha.png";
import ProjectLoyalty from "/public/images/loyalty_1.png";
import ProjectOneUni from "/public/images/oneuni.png";

import { ExperienceDetails, ProjectDetails } from "./types";

// import {
//   ExperienceDetails,
//   ProjectDetails,
//   TechDetails,
//   TestimonialDetails,
// } from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/shahsagarm",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://twitter.com/shahsagarm",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/shahsagarm",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/shahsagarm",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@shahsagarm",
  },
];

// export const TECHNOLOGIES: TechDetails[] = [
//   {
//     label: 'Javascript',
//     logo: LogoJavascript,
//     url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
//   },
//   {
//     label: 'Typescript',
//     logo: LogoTypescript,
//     url: 'https://www.typescriptlang.org/',
//   },
//   {
//     label: 'React',
//     logo: LogoReact,
//     url: 'https://react.dev/',
//   },
//   {
//     label: 'Next.js',
//     logo: LogoNextjs,
//     url: 'https://nextjs.org/',
//   },
//   {
//     label: 'Node.js',
//     logo: LogoNodejs,
//     url: 'https://nodejs.org/en',
//   },
//   {
//     label: 'Express.js',
//     logo: LogoExpress,
//     darkModeLogo: LogoExpressLight,
//     url: 'https://expressjs.com/',
//   },
//   {
//     label: 'Nest.js',
//     logo: LogoNest,
//     url: 'https://nestjs.com/',
//   },
//   {
//     label: 'Socket.io',
//     logo: LogoSocket,
//     darkModeLogo: LogoSocketLight,
//     url: 'https://socket.io/',
//   },
//   {
//     label: 'PostgreSQL',
//     logo: LogoPostgreSQL,
//     url: 'https://www.postgresql.org/',
//   },
//   {
//     label: 'MongoDB',
//     logo: LogoMongoDB,
//     url: 'https://www.mongodb.com/',
//   },
//   {
//     label: 'Sass/Scss',
//     logo: LogoSass,
//     url: 'https://sass-lang.com/',
//   },
//   {
//     label: 'Tailwindcss',
//     logo: LogoTailwindcss,
//     url: 'https://tailwindcss.com/',
//   },
//   {
//     label: 'Figma',
//     logo: LogoFigma,
//     url: 'https://www.figma.com/',
//   },
//   {
//     label: 'Cypress',
//     logo: LogoCypress,
//     darkModeLogo: LogoCypressLight,
//     url: 'https://www.cypress.io/',
//   },
//   {
//     label: 'Storybook',
//     logo: LogoStorybook,
//     url: 'https://storybook.js.org/',
//   },
//   {
//     label: 'Git',
//     logo: LogoGit,
//     url: 'https://git-scm.com/',
//   },
// ];

// export const EXPERIENCES: ExperienceDetails[] = [
//   {
//     logo: LogoUpwork,
//     logoAlt: 'Upwork logo',
//     position: 'Independent Freelancer',
//     startDate: new Date(2021, 10),
//     currentlyWorkHere: true,
//     summary: [
//       'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
//       'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
//     ],
//   },
//   {
//     logo: LogoGreenApex,
//     darkModeLogo: LogoGreenApexLight,
//     logoAlt: 'Greenapex logo',
//     position: 'Team Lead',
//     startDate: new Date(2017, 6),
//     endDate: new Date(2021, 9),
//     summary: [
//       'Acted as team lead in different projects.',
//       'Brainstormed new ideas & gathered requirements for internal projects.',
//       'Designed architecture of different projects (frontend + backend).',
//       'Worked on enterprise-level projects for a variety of clients.',
//       'Handled sprint planning & task distribution.',
//     ],
//   },
//   {
//     logo: LogoDotnpixel,
//     darkModeLogo: LogoDotnpixelLight,
//     logoAlt: 'Dotnpixel logo',
//     position: 'Full Stack Developer',
//     startDate: new Date(2015, 11),
//     endDate: new Date(2017, 4),
//     summary: ['Worked as a full stack developer (React / Laravel).'],
//   },
// ];

// export const PROJECTS: ProjectDetails[] = [
//   {
//     name: 'Wingie',
//     description:
//       'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
//     url: 'https://www.wingie.com',
//     previewImage: ProjectWingie,
//     technologies: [
//       'React',
//       'Typescript',
//       'React Bootstrap',
//       'Firebase',
//       'Express.js',
//       'PostgreSQL',
//       'Styled Components',
//       'Redux',
//     ],
//   },
//   {
//     name: 'Fiskil',
//     description:
//       'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
//     url: 'https://fiskil.com.au',
//     previewImage: ProjectFiskil,
//     technologies: [
//       'React',
//       'Next.js',
//       'Typescript',
//       'Tailwindcss',
//       'Material UI',
//       'Redux Toolkit',
//       'React Query',
//       'Express.js',
//       'PostgreSQL',
//       'Firebase',
//       'AWS Amplify',
//       'Cypress',
//       'Storybook',
//     ],
//   },
//   {
//     name: 'Pepehousing',
//     description:
//       'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
//     url: 'https://pepehousing.com',
//     previewImage: ProjectPepehousing,
//     technologies: [
//       'React',
//       'Next.js',
//       'Typescript',
//       'Tailwindcss',
//       'Redux Toolkit',
//       'React Query',
//       'Storybook',
//     ],
//   },
// ];

// export const TESTIMONIALS: TestimonialDetails[] = [
//   {
//     personName: 'Krisztian Gyuris',
//     personAvatar: AvatarKrisztian,
//     title: 'Founder - inboxgenie.io',
//     testimonial:
//       'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
//   },
//   {
//     personName: 'Eugen Esanu',
//     personAvatar: AvatarEugen,
//     title: 'Founder - shosho.design',
//     testimonial:
//       'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
//   },
//   {
//     personName: 'Joe Matkin',
//     personAvatar: AvatarDummy,
//     title: 'Freelancer',
//     testimonial:
//       'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
//   },
// ];

// // Icon paths
// export const IconPaths = {
//   github: 'images/icons/github.svg',
//   twitter: 'images/icons/twitter.svg',
//   figma: 'images/icons/figma.svg',

//   javascript: 'images/logos/icon-javascript.svg',
//   typescript: 'images/logos/icon-typescript.svg',
//   react: 'images/logos/icon-react.svg',
//   nextjs: 'images/logos/icon-nextjs.svg',
//   nodejs: 'images/logos/icon-nodejs.svg',
//   express: 'images/logos/icon-express.svg',
//   expressLight: 'images/logos/icon-express-light.svg',
//   nest: 'images/logos/icon-nest.svg',
//   socket: 'images/logos/icon-socket.svg',
//   socketLight: 'images/logos/icon-socket-light.svg',
//   postgresql: 'images/logos/icon-postgresql.svg',
//   mongodb: 'images/logos/icon-mongodb.svg',
//   sass: 'images/logos/icon-sass.svg',
//   tailwindcss: 'images/logos/icon-tailwindcss.svg',
//   figmaLogo: 'images/logos/icon-figma.svg',
//   cypress: 'images/logos/icon-cypress.svg',
//   cypressLight: 'images/logos/icon-cypress-light.svg',
//   storybook: 'images/logos/icon-storybook.svg',
//   git: 'images/logos/icon-git.svg',
//   flutter: 'images/logos/icon-flutter.svg',
//   dart: 'images/logos/icon-dart.svg',
//   kotlin: 'images/logos/icon-kotlin.svg',
//   swift: 'images/logos/icon-swift.svg',

//   upwork: 'public/logos/logo-upwork.svg',
//   greenApex: 'public/logos/logo-greenapex.svg',
//   greenApexLight: 'public/logos/logo-greenapex-light.svg',
//   dotnpixel: 'public/logos/logo-dotnpixel.svg',
//   dotnpixelLight: 'public/logos/logo-dotnpixel-light.svg',
//   shinhan: 'public/logos/logo-shinhan.png',
//   asc: 'public/logos/logo-asc.png',
//   cnv: 'public/logos/logo-cnv.png',

//   projectFiskil: 'public/images/project-fiskil.png',
//   projectWingie: 'public/images/project-wingie.png',
//   projectPepehousing: 'public/images/project-pepehousing.png',
//   loyaltyHUB: 'public/images/loyalty_1.png',
//   oneuni: 'public/images/oneuni.png',
//   alpha: 'public/images/alpha.png',

//   avatarKrisztian: 'images/images/avatar-krisztian.png',
//   avatarEugen: 'images/images/avatar-eugen.png',
//   avatarDummy: 'images/images/avatar-dummy.svg',
// };

// External links
export const ExternalLinks = {
  github: "https://github.com/shahsagarm",
  githubRepo: "https://github.com/shahsagarm/sagarshah.dev",
  twitter: "https://twitter.com/shahsagarm",
  figma: "https://www.figma.com/@shahsagarm",
  figmaFile:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

// Navigation link class
export class NavLink {
  label: string;
  href: string;

  constructor(label: string, href: string) {
    this.label = label;
    this.href = href;
  }
}

// Navigation links
export const navLinks: NavLink[] = [
  new NavLink("About", "#about"),
  new NavLink("Work", "#work"),
  new NavLink("Testimonials", "#testimonials"),
  new NavLink("Contact", "#contact"),
];

// Social link class
export class SocialLink {
  icon: string;
  url: string;

  constructor(icon: string, url: string) {
    this.icon = icon;
    this.url = url;
  }
}

// export const SOCIAL_LINKS = [
//   {
//     icon: Github,
//     url: 'https://github.com/shahsagarm',
//   },
//   {
//     icon: Twitter,
//     url: 'https://twitter.com/shahsagarm',
//   },
//   {
//     icon: Figma,
//     url: 'https://www.figma.com/@shahsagarm',
//   },
// ];

// Technology details class
export class TechDetails {
  label: string;
  logo: string;
  darkModeLogo?: string;
  url: string;

  constructor(label: string, logo: string, url: string, darkModeLogo?: string) {
    this.label = label;
    this.logo = logo;
    this.url = url;
    if (darkModeLogo) {
      this.darkModeLogo = darkModeLogo;
    }
  }
}

// Technologies
export const TECHNOLOGIES: TechDetails[] = [
  new TechDetails("Flutter", LogoFlutter, "https://flutter.dev/"),
  new TechDetails("Dart", LogoDart, "https://dart.dev/"),
  new TechDetails("Kotlin", LogoKotlin, "https://kotlinlang.org/"),
  new TechDetails("Swift", LogoSwift, "https://www.swift.org/"),
  new TechDetails(
    "Javascript",
    LogoJavascript,
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  ),
  new TechDetails(
    "Typescript",
    LogoTypescript,
    "https://www.typescriptlang.org/"
  ),
  new TechDetails("React", LogoReact, "https://react.dev/"),
  new TechDetails("Next.js", LogoNextjs, "https://nextjs.org/"),
  new TechDetails("Node.js", LogoNodejs, "https://nodejs.org/en"),
  new TechDetails(
    "Socket.io",
    LogoSocketLight,
    "https://socket.io/",
    LogoSocketLight
  ),
  new TechDetails("MongoDB", LogoMongoDB, "https://www.mongodb.com/"),
  new TechDetails("Figma", LogoFigma, "https://www.figma.com/"),
  new TechDetails("Storybook", LogoStorybook, "https://storybook.js.org/"),
  new TechDetails("Git", LogoGit, "https://git-scm.com/"),
];

// // Experience details class
// export class ExperienceDetails {
//   logo: string;
//   darkModeLogo?: string;
//   logoAlt: string;
//   position: string;
//   startDate: Date;
//   endDate?: Date;
//   currentlyWorkHere: boolean;
//   summary: string[];

//   constructor(
//     logo: string,
//     logoAlt: string,
//     position: string,
//     startDate: Date,
//     currentlyWorkHere: boolean,
//     summary: string[],
//     darkModeLogo?: string,
//     endDate?: Date
//   ) {
//     this.logo = logo;
//     this.logoAlt = logoAlt;
//     this.position = position;
//     this.startDate = startDate;
//     this.currentlyWorkHere = currentlyWorkHere;
//     this.summary = summary;
//     if (darkModeLogo) {
//       this.darkModeLogo = darkModeLogo;
//     }
//     if (endDate) {
//       this.endDate = endDate;
//     }
//   }
// }

// Experiences
export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoShinhan,
    logoAlt: "Shinhan securities co. ltd",
    position: "Developer",
    startDate: new Date(2022, 11), // December is month 11 in JavaScript Date
    currentlyWorkHere: true,
    summary: [
      "Build and maintain Trading app using socket.IO and Flutter framework.",
      "Connect FPT AI to OCR ID Card, apply eKYC to verify the customer's identity and make E-contract.",
      "Use Flutter with state management bloc, getx to develop trading marketing app Sàn Xịn Ha.",
      "Use React native to maintain trading app Shinhan Alpha VN.",
      "Use React Js to maintain web trading and home trading. ",
    ],
  },
  {
    logo: LogoASC,
    logoAlt: "asc logo",
    position: "Mobile developer",
    startDate: new Date(2021, 10), // November is month 10 in JavaScript Date
    currentlyWorkHere: false,
    summary: [
      "Use state management bloc, provider to develop apps.",
      "Integrate native code Zoom SDKs for learn online feature",
      "Build chat app with signalR and flutter",
      "Develop feature for education app, Ex: Timetable, tuition management, attendance, learn online...",
      "Handled submit app in App Store/CH play.",
    ],

    endDate: new Date(2022, 10), // November is month 10 in JavaScript Date
  },
  {
    logo: LogoCNV,
    logoAlt: "cnv logo",
    position: "Mobile developer",
    startDate: new Date(2019, 10), // November is month 10 in JavaScript Date
    currentlyWorkHere: false,
    summary: [
      "Use state management provider, bloc to develop apps.",
      "Build module for loyalty app, Ex: spa, retail, reward, booking ,....",
      "Integrate native code SDKs (android/ios) for loyalty apps. Ex: momo payment, mPOS, sunmi printer",
      "Dev UI features of loyalty apps from graphic files received from design figma, sketch, adobe xd,...",
      "Submit and management app in App Store/CH play.",
    ],

    endDate: new Date(2021, 9), // October is month 9 in JavaScript Date
  },
];

// // Project details class
// export class ProjectDetails {
//   name: string;
//   description: string;
//   url: string;
//   previewImage: string;
//   technologies: string[];

//   constructor(name: string, description: string, url: string, previewImage: string, technologies: string[]) {
//     this.name = name;
//     this.description = description;
//     this.url = url;
//     this.previewImage = previewImage;
//     this.technologies = technologies;
//   }
// }

// Projects
export const PROJECTS: ProjectDetails[] = [
  {
    name: "Shinhan Alpha VN",
    description: `
A simple, easy-to-understand interface facilitates quick, safe, and convenient transaction orders, suitable for all types of investors.

Comprehensive aggregation of the latest information about businesses (news/analytical reports/technical charts) and the market (indices/top movers) swiftly and thoroughly, assisting investors in easily tracking and analyzing before making trading decisions.

Selection of investment stock categories that align with clients' financial scope and preferred industries.

Enhanced feature to add interested business names to favorites, enabling investors to promptly receive notifications about the stocks they are interested in.
`,
    url: "https://apps.apple.com/vn/app/shinhan-alpha-vn/id1594363552",
    previewImage: ProjectAlpha,
    technologies: [
      "Socket.IO",
      "React native",
      "Typescript",
      "Swift",
      "Kolin",
      "Story book",
    ],
  },
  {
    name: "OneUni",
    description: `
OneUni is an educational technology application that provides useful information anytime, anywhere for users including students, lecturers, and parents to enhance interaction between learners and educational institutions. It offers the following services:

For Students: Student profile information, Details about the program the student is enrolled in, Study plans and timetables for the semester or academic year, Academic results including grades and disciplinary scores, Information on tuition fees, fees, and payment methods, Surveys and evaluations regarding the school and teaching staff, Proposals and tracking of one-stop services, Receipt of notifications from the institution, Tracking of institutional news, And more...

For Parents: Monitoring of academic progress and results, Tracking of disciplinary records, Monitoring of outstanding fees and payment of tuition fees, Receipt of notifications from the institution, And more...

For Teachers and Staff: Receipt of issued notifications from the institution, Institutional work schedule, Personal work schedule, Personal inbox, Task assignment and task management, Viewing personal profile information, Viewing teaching schedules and examination schedules, Accessing monthly salary information, Applying for leave or overtime work
`,
    url: "https://apps.apple.com/vn/app/oneuni/id1673685126",
    previewImage: ProjectOneUni,
    technologies: ["Flutter", "Dart", "Swift", "Kolin"],
  },
  {
    name: "Loyalty HUB",
    description: `
The Loyalty HUB App is designed for employees to create orders, receive notifications for new orders, and call drivers from partner transportation apps such as Ahamove directly within the Loyalty HUB app of CNV Loyalty.

Understanding the role of the Loyalty HUB App:
1.  The Loyalty HUB App is an application designed for employees of all businesses to use collectively, and it cannot be customized in terms of name or color.
2.  This application only requires logging in and using.
3. It aims to address the issue of receiving notifications for new orders and creating orders to sell products/services in a simple manner.
`,
    url: "https://apps.apple.com/vn/app/loyalty-hub/id1564404944",
    previewImage: ProjectLoyalty,
    technologies: ["Flutter", "Dart", "Swift", "Kolin"],
  },
];

// Testimonial details class
export class TestimonialDetails {
  personName: string;
  personAvatar: string;
  title: string;
  testimonial: string;

  constructor(
    personName: string,
    personAvatar: string,
    title: string,
    testimonial: string
  ) {
    this.personName = personName;
    this.personAvatar = personAvatar;
    this.title = title;
    this.testimonial = testimonial;
  }
}

// // Testimonials
// export const TESTIMONIALS: TestimonialDetails[] = [
//   new TestimonialDetails(
//     "Krisztian Gyuris",
//     IconPaths.avatarKrisztian,
//     "Founder - inboxgenie.io",
//     "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."
//   ),
//   new TestimonialDetails(
//     "Eugen Esanu",
//     IconPaths.avatarEugen,
//     "Founder - shosho.design",
//     "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team."
//   ),
//   new TestimonialDetails(
//     "Joe Matkin",
//     IconPaths.avatarDummy,
//     "Freelancer",
//     "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues."
//   ),
// ];
