import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  // FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/raaz.ketan',
  twitter: 'https://x.com/raazketan',
  github: 'https://github.com/RaazKetan',
  linkedin: 'https://www.linkedin.com/in/ketan-raj-4ab47b204/',
};

export const author = {
  name: 'Ketan',
  email: '21ketanraaz@gmail.com',
};

export const seoData = {
  title: 'Ketan Raj | Cloud Practitioner | Full Stack Developer',
  description:
    'Ketan  is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image: 'https://github.com/RaazKetan/ketan-v4/raw/main/public/me.png',
  url: '',
  keywords: [
    'Ketan',
    'Ketan Raj',
    '@Ketan Raj',
    'Ketan Raj Portfolio',
    'Portfolio',
    'Ketan Portfolio ',
    'Ketan Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello friend 👋, I'm ",
  title: 'Ketan.',
  tagline: 'I create visually appealing interfaces on the web',
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. Utilizing AWS services  to build robust, serverless applications ",
  specialText: 'Integration Engineer @ClearTax',

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'AWS',
      'Next.js',
      'React.js',
      'JavaScript (ES6+)',
      'Node.js',
      'Python',
      'SQL',
    ],
  },
  img: '/ketan.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'aws', icon: 'fontisto:aws' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'mongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
      ],
    },
    {
      id: getId(),
      title: 'Cloud Development',
      lottie: {
        light: '/lotties/aws.json',
        dark: '/lotties/aws1.json',
      },
      points: [
        'Experience in developing cloud-native applications using AWS services & infrastructure',
        'Developing serverless applications using AWS Lambda and API Gateway',
        'Building full-stack applications with React.js & AWS Amplify using AWS SDK',
      ],
      softwareSkills: [
        { name: 'aws-amplif', icon: 'logos:aws-amplify' },
        { name: 'aws', icon: 'fontisto:aws' },
        { name: 'aws-s3', icon: 'logos:aws-s3' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'My experience and volunteering',
  experiences: [
    {
      company: 'Clear',
      companyUrl: 'https://cleartax.in/',
      role: 'Integration Engineer',
      started: 'July 2024',
      upto: 'Present',
      tasks: [
        'Developed an autonomous Python-OpenAI framework for data extraction and field mapping, reducing manual specification time by 95% through automated validation, resulting in 90% decrease in specification-related queries and eliminating manual rework for integration team.',
        'Strengthened Unity data model by architecting advanced SQL validation queries and Python automation scripts, implementing predictive error detection with real-time validation that prevented 98% of ingestion failures while reducing onboarding time by 95%.',
        'Optimized data ingestion workflows using SQL queries and Python scripts, implementing DBT transformations with Retool monitoring dashboards, reducing integration failures by 99% and cutting issue resolution time from hours to minute.',
        'Led comprehensive testing of Clear GL Stream product by processing 18M+ rows across 40+ tables, uncovering critical performance bottlenecks in handling large-scale enterprise data, collaborating with development team to implement optimized indexing and batch processing solutions ensuring seamless data handling',
      ],
    },
    {
      company: 'Comfort Build',
      companyUrl: 'https://comfort-build.odoo.com/',
      role: 'Software Developer',
      started: 'Feb 2024',
      upto: 'May 2024',
      tasks: [
        'Engineered responsive admin dashboard using React.js, Redux for state management, and Tailwind CSS, implementing 20+ features including dynamic analytics, user management, and automated reporting tools, reducing administrative overhead by 80% while ensuring mobile-first experience.',
        'Designed comprehensive interface system for 30+ screens using Figma, developing responsive layouts and component libraries for web admin portal and Android application, achieving 93% stakeholder approval through consistent UI/UX pattern.',
        'Developed modular inventory dashboard using React.js components and Tailwind CSS, implementing real-time data synchronization, automated stock level monitoring, and order status tracking system, reducing manual reconciliation by 80% while ensuring 95% data accuracy.',
      ],
    },
    {
      company: 'Bharat Intern',
      companyUrl: 'https://bharatintern.live/',
      role: 'Frontend Developer Intern',
      started: 'Dec 2023',
      upto: 'Jan 2024',
      tasks: [
        ' Conducted a comprehensive analysis of the websites existing features, identifying key areas for improvement. Implemented these enhancements, which resulted in a 200% increase in the websites overall functionality. This included optimizing code, improving performance, and adding new features that significantly enhanced the user experience',
        'Led the design and development of user-focused interfaces. This involved creating wireframes, prototypes, and final designs that prioritized ease of use and visual appeal. The new interfaces significantly improved user satisfaction and engagement, as evidenced by positive customer feedback and data analysis.',
      ],
    },
    {
      company: 'WiperSpray',
      companyUrl:
        'https://play.google.com/store/apps/details?id=com.wiper.my&hl=en',
      role: 'Frontend Developer & Research Intern',
      started: 'Jan 2023',
      upto: 'March 2023',
      tasks: [
        'Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a 40% increase in page load speed',
        'Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced design decisions and led to a 30% improvement in user satisfaction scores.',
        'Met project deadlines consistently, delivering good-quality code and designs on time.',
      ],
    },
    {
      company: 'Compiler Club',
      companyUrl: '',
      role: 'Head',
      started: 'March 2022',
      upto: 'June 2022',
      tasks: [
        'Facilitated the education of over 300 students on topics such as Data Structures and Algorithms (DSA), Competitive Coding, and Web Development. This included organizing and conducting workshops, study sessions, and coding competitions to enhance students knowledge and skills.',
        'Played a key role in building a strong community of coding enthusiasts. Organized events and activities that fostered collaboration and knowledge sharing among students, leading to a more engaged and active club membership.',
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Imagine',
      url: 'https://imagine-alpha.vercel.app/',
      repo: 'https://github.com/RaazKetan/imagine',
      img: '/Imagine.png',
      year: 2024,
      tags: [
        'NextJS',
        'Typescript',
        'MongoDB',
        'Cloudinary',
        'Stripe',
        'Clerk',
        'Tailwind CSS',
      ],
    },

    {
      id: getId(),
      name: 'Readme Editor',
      url: 'https://readme-editor-sand.vercel.app/',
      repo: 'https://github.com/RaazKetan/ReadmeEditor',
      img: '/Readme1.png',
      year: 2024,
      tags: ['React', 'Markdown', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'Luxe Lenses - eCommerce',
      url: 'https://luxe-lenses.vercel.app/',
      repo: 'https://github.com/RaazKetan/LuxeLenses',
      img: '/luxe.png',
      year: 2023,
      tags: ['React', 'Redux', 'Firebase', 'Scss', 'Stripe'],
    },
    {
      id: getId(),
      name: 'Portfolio 3.0',
      url: 'https://ketan-raj-2-0.vercel.app/',
      repo: 'https://github.com/RaazKetan/KetanRaj_2.0',
      img: '/portfolio3.0.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Budget Bud',
      url: 'https://budget-bud-orpin.vercel.app/',
      repo: 'https://github.com/RaazKetan/BudgetBud',
      img: '/BB.png',
      year: 2023,
      tags: ['React', 'Scss', 'Redux', 'Firebase'],
    },
    {
      id: getId(),
      name: 'Code Hut',
      url: 'https://main.d4wdz4xajlx5c.amplifyapp.com/',
      repo: 'https://github.com/RaazKetan/codehut',
      img: '/CodeHut.png',
      year: 2022,
      tags: ['React', 'Tailwind CSS', 'GitHub API', 'AWS'],
    },
    {
      id: getId(),
      name: 'Brewnation',
      url: 'https://brewnation-1-7f6u2ta0l-raazketan.vercel.app/',
      repo: 'https://github.com/RaazKetan/Brewnation',
      img: '/Brewnation.png',
      year: 2022,
      tags: ['HTML', 'Sass', 'JavaScript', 'MongoDB'],
    },
    {
      id: getId(),
      name: '3dMania',
      url: 'https://3dmania.vercel.app/',
      repo: 'https://github.com/RaazKetan/3dMania',
      img: '/3dMania.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for an Internship or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

// export const footerSection: FooterSectionType = {
//   title: 'Design Inspiration @Brittany Chiang',
//   link: 'https://github.com/bchiang7',
// };
