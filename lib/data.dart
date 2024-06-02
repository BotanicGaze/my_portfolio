class IconPaths {
  static const github = 'assets/icons/github.svg';
  static const twitter = 'assets/icons/twitter.svg';
  static const figma = 'assets/icons/figma.svg';

  static const javascript = 'assets/logos/icon-javascript.svg';
  static const typescript = 'assets/logos/icon-typescript.svg';
  static const react = 'assets/logos/icon-react.svg';
  static const nextjs = 'assets/logos/icon-nextjs.svg';
  static const nodejs = 'assets/logos/icon-nodejs.svg';
  static const express = 'assets/logos/icon-express.svg';
  static const expressLight = 'assets/logos/icon-express-light.svg';
  static const nest = 'assets/logos/icon-nest.svg';
  static const socket = 'assets/logos/icon-socket.svg';
  static const socketLight = 'assets/logos/icon-socket-light.svg';
  static const postgresql = 'assets/logos/icon-postgresql.svg';
  static const mongodb = 'assets/logos/icon-mongodb.svg';
  static const sass = 'assets/logos/icon-sass.svg';
  static const tailwindcss = 'assets/logos/icon-tailwindcss.svg';
  static const figmaLogo = 'assets/logos/icon-figma.svg';
  static const cypress = 'assets/logos/icon-cypress.svg';
  static const cypressLight = 'assets/logos/icon-cypress-light.svg';
  static const storybook = 'assets/logos/icon-storybook.svg';
  static const git = 'assets/logos/icon-git.svg';
  static const flutter = 'assets/logos/icon-flutter.svg';
  static const dart = 'assets/logos/icon-dart.svg';
  static const kotlin = 'assets/logos/icon-kotlin.svg';
  static const swift = 'assets/logos/icon-swift.svg';

  static const upwork = 'assets/logos/logo-upwork.svg';
  static const greenApex = 'assets/logos/logo-greenapex.svg';
  static const greenApexLight = 'assets/logos/logo-greenapex-light.svg';
  static const dotnpixel = 'assets/logos/logo-dotnpixel.svg';
  static const dotnpixelLight = 'assets/logos/logo-dotnpixel-light.svg';
  static const shinhan = 'assets/logos/logo-shinhan.png';
  static const asc = 'assets/logos/logo-asc.png';
  static const cnv = 'assets/logos/logo-cnv.png';

  static const projectFiskil = 'assets/images/project-fiskil.png';
  static const projectWingie = 'assets/images/project-wingie.png';
  static const projectPepehousing = 'assets/images/project-pepehousing.png';
  static const loyaltyHUB = 'assets/images/loyalty_1.png';
  static const oneuni = 'assets/images/oneuni.png';
  static const alpha = 'assets/images/alpha.png';

  static const avatarKrisztian = 'assets/images/avatar-krisztian.png';
  static const avatarEugen = 'assets/images/avatar-eugen.png';
  static const avatarDummy = 'assets/images/avatar-dummy.svg';
}

class ExternalLinks {
  static const github = 'https://github.com/shahsagarm';
  static const githubRepo = 'https://github.com/shahsagarm/sagarshah.dev';
  static const twitter = 'https://twitter.com/shahsagarm';
  static const figma = 'https://www.figma.com/@shahsagarm';
  static const figmaFile =
      'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop';
}

class NavLink {
  final String label;
  final String href;

  NavLink(this.label, this.href);
}

final navLinks = [
  NavLink('About', '#about'),
  NavLink('Work', '#work'),
  NavLink('Testimonials', '#testimonials'),
  NavLink('Contact', '#contact'),
];

class SocialLink {
  final String icon;
  final String url;

  SocialLink(this.icon, this.url);
}

final socialLinks = [
  SocialLink(IconPaths.github, 'https://github.com/shahsagarm'),
  SocialLink(IconPaths.twitter, 'https://twitter.com/shahsagarm'),
  SocialLink(IconPaths.figma, 'https://www.figma.com/@shahsagarm'),
];

class TechDetails {
  final String label;
  final String logo;
  final String? darkModeLogo;
  final String url;

  TechDetails({
    required this.label,
    required this.logo,
    this.darkModeLogo,
    required this.url,
  });
}

final technologies = [
  TechDetails(
    label: 'Flutter',
    logo: IconPaths.flutter,
    url: 'https://flutter.dev/',
  ),
  TechDetails(
    label: 'Dart',
    logo: IconPaths.dart,
    url: 'https://dart.dev/',
  ),
  TechDetails(
    label: 'Kotlin',
    logo: IconPaths.kotlin,
    url: 'https://kotlinlang.org/',
  ),
  TechDetails(
    label: 'Swift',
    logo: IconPaths.swift,
    url: 'https://www.swift.org/',
  ),
  TechDetails(
    label: 'Javascript',
    logo: IconPaths.javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  ),
  TechDetails(
    label: 'Typescript',
    logo: IconPaths.typescript,
    url: 'https://www.typescriptlang.org/',
  ),
  TechDetails(
    label: 'React',
    logo: IconPaths.react,
    url: 'https://react.dev/',
  ),
  TechDetails(
    label: 'Next.js',
    logo: IconPaths.nextjs,
    url: 'https://nextjs.org/',
  ),
  TechDetails(
    label: 'Node.js',
    logo: IconPaths.nodejs,
    url: 'https://nodejs.org/en',
  ),
  TechDetails(
    label: 'Socket.io',
    logo: IconPaths.socketLight,
    darkModeLogo: IconPaths.socketLight,
    url: 'https://socket.io/',
  ),
  TechDetails(
    label: 'MongoDB',
    logo: IconPaths.mongodb,
    url: 'https://www.mongodb.com/',
  ),
  TechDetails(
    label: 'Figma',
    logo: IconPaths.figmaLogo,
    url: 'https://www.figma.com/',
  ),
  TechDetails(
    label: 'Storybook',
    logo: IconPaths.storybook,
    url: 'https://storybook.js.org/',
  ),
  TechDetails(
    label: 'Git',
    logo: IconPaths.git,
    url: 'https://git-scm.com/',
  ),
];

class ExperienceDetails {
  final String logo;
  final String? darkModeLogo;
  final String logoAlt;
  final String position;
  final DateTime startDate;
  final DateTime? endDate;
  final bool currentlyWorkHere;
  final List<String> summary;

  ExperienceDetails({
    required this.logo,
    this.darkModeLogo,
    required this.logoAlt,
    required this.position,
    required this.startDate,
    this.endDate,
    required this.currentlyWorkHere,
    required this.summary,
  });
}

final experiences = [
  ExperienceDetails(
    logo: IconPaths.shinhan,
    logoAlt: 'Shinhan securities co. ltd',
    position: 'Developer',
    startDate: DateTime(2022, 12),
    currentlyWorkHere: true,
    summary: [
      'Build and maintain Trading app using socket.IO and Flutter framework.',
      r"Connect FPT AI to OCR ID Card, apply eKYC to verify the customer's identity and make E-contract.",
      'Use Flutter with state management bloc, getx to develop trading marketing app Sàn Xịn Ha.',
      'Use React native to maintain trading app Shinhan Alpha VN.',
      'Use React Js to maintain web trading and home trading. '
    ],
  ),
  ExperienceDetails(
    logo: IconPaths.asc,
    logoAlt: 'asc logo',
    position: 'Mobile developer',
    startDate: DateTime(2021, 11),
    endDate: DateTime(2022, 11),
    currentlyWorkHere: false,
    summary: [
      'Use state management bloc, provider to develop apps.',
      'Integrate native code Zoom SDKs for learn online feature',
      'Build chat app with signalR and flutter',
      'Develop feature for education app, Ex: Timetable, tuition management, attendance, learn online...',
      'Handled submit app in App Store/CH play.'
    ],
  ),
  ExperienceDetails(
    logo: IconPaths.cnv,
    logoAlt: 'cnv logo',
    position: 'Mobile developer',
    startDate: DateTime(2019, 11),
    endDate: DateTime(2021, 10),
    currentlyWorkHere: false,
    summary: [
      'Use state management provider, bloc to develop apps.',
      'Build module for loyalty app, Ex: spa, retail, reward, booking ,....',
      'Integrate native code SDKs (android/ios) for loyalty apps. Ex: momo payment, mPOS, sunmi printer',
      'Dev UI features of loyalty apps from graphic files received from design figma, sketch, adobe xd,...',
      'Submit and management app in App Store/CH play.'
    ],
  ),
];

class ProjectDetails {
  final String name;
  final String description;
  final String url;
  final String previewImage;
  final List<String> technologies;

  ProjectDetails({
    required this.name,
    required this.description,
    required this.url,
    required this.previewImage,
    required this.technologies,
  });
}

final projects = [
  ProjectDetails(
    name: 'Shinhan Alpha VN',
    description: '''
A simple, easy-to-understand interface facilitates quick, safe, and convenient transaction orders, suitable for all types of investors.

Comprehensive aggregation of the latest information about businesses (news/analytical reports/technical charts) and the market (indices/top movers) swiftly and thoroughly, assisting investors in easily tracking and analyzing before making trading decisions.

Selection of investment stock categories that align with clients' financial scope and preferred industries.

Enhanced feature to add interested business names to favorites, enabling investors to promptly receive notifications about the stocks they are interested in.
''',
    url: 'https://apps.apple.com/vn/app/shinhan-alpha-vn/id1594363552',
    previewImage: IconPaths.alpha,
    technologies: [
      'Socket.IO',
      'React native',
      'Typescript',
      'Swift',
      'Kolin',
      'Story book',
    ],
  ),
  ProjectDetails(
    name: 'OneUni',
    description: '''
OneUni is an educational technology application that provides useful information anytime, anywhere for users including students, lecturers, and parents to enhance interaction between learners and educational institutions. It offers the following services:

For Students: Student profile information, Details about the program the student is enrolled in, Study plans and timetables for the semester or academic year, Academic results including grades and disciplinary scores, Information on tuition fees, fees, and payment methods, Surveys and evaluations regarding the school and teaching staff, Proposals and tracking of one-stop services, Receipt of notifications from the institution, Tracking of institutional news, And more...

For Parents: Monitoring of academic progress and results, Tracking of disciplinary records, Monitoring of outstanding fees and payment of tuition fees, Receipt of notifications from the institution, And more...

For Teachers and Staff: Receipt of issued notifications from the institution, Institutional work schedule, Personal work schedule, Personal inbox, Task assignment and task management, Viewing personal profile information, Viewing teaching schedules and examination schedules, Accessing monthly salary information, Applying for leave or overtime work
        ''',
    url: 'https://apps.apple.com/vn/app/oneuni/id1673685126',
    previewImage: IconPaths.oneuni,
    technologies: [
      'Flutter',
      'Dart',
      'Swift',
      'Kolin',
    ],
  ),
  ProjectDetails(
    name: 'Loyalty HUB',
    description: '''
        The Loyalty HUB App is designed for employees to create orders, receive notifications for new orders, and call drivers from partner transportation apps such as Ahamove directly within the Loyalty HUB app of CNV Loyalty.
        
        Understanding the role of the Loyalty HUB App:
        1.  The Loyalty HUB App is an application designed for employees of all businesses to use collectively, and it cannot be customized in terms of name or color.
        2.  This application only requires logging in and using.
        3. It aims to address the issue of receiving notifications for new orders and creating orders to sell products/services in a simple manner.''',
    url: 'https://apps.apple.com/vn/app/loyalty-hub/id1564404944',
    previewImage: IconPaths.loyaltyHUB,
    technologies: [
      'Flutter',
      'Dart',
      'Swift',
      'Kolin',
    ],
  ),
];

class TestimonialDetails {
  final String personName;
  final String personAvatar;
  final String title;
  final String testimonial;

  TestimonialDetails({
    required this.personName,
    required this.personAvatar,
    required this.title,
    required this.testimonial,
  });
}

final testimonials = [
  TestimonialDetails(
    personName: 'Krisztian Gyuris',
    personAvatar: IconPaths.avatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
        'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  ),
  TestimonialDetails(
    personName: 'Eugen Esanu',
    personAvatar: IconPaths.avatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
        'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  ),
  TestimonialDetails(
    personName: 'Joe Matkin',
    personAvatar: IconPaths.avatarDummy,
    title: 'Freelancer',
    testimonial:
        'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  ),
];
