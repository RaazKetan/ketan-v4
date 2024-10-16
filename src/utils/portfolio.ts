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
    'Ketaan Raj Portfolio',
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
        // 'Developing and maintaining integrations with third-party services, ensuring seamless data flow and system compatibility.',
        // 'Conducting code reviews, providing feedback, and mentoring junior team members to ensure code quality and best practices.',
        'Collaborating with cross-functional teams to design and implement scalable and efficient solutions that meet business requirements.',
        'Identifying and troubleshooting technical issues, ensuring timely resolution and minimal impact on system performance.',
        'Optimizing existing systems and processes to improve performance, reliability, and scalability.',
        'Designed a robust solution to extract unique records by leveraging primary keys across 40+ tables, ensuring data integrity and eliminating redundancy.',
        'Utilizing SAP to extract data and generate reports for analysis, enabling data-driven decision-making and process optimization.',
      ],
    },
    {
      company: 'Shakuntla Traders',
      companyUrl: '',
      role: 'Co-Founder',
      started: 'Jan 2020',
      upto: 'Present',
      tasks: [
        'Successfully increased sales by 100% through strategic planning, market analysis, and effective sales techniques. This growth has significantly boosted the companys revenue and market presence.',
        'Oversaw financial planning and budgeting, ensuring optimal allocation of resources and maximizing return on investment.',
        'Effectively managing a team of 5 people, ensuring that all team members are aligned with the companys goals and objectives. This involves coordinating tasks, providing guidance and support, and fostering a collaborative and productive work environment.',
        'Successfully managed 1,000 outlets, ensuring consistent product availability, quality control, and customer satisfaction across all locations. This extensive network has contributed to the significant market presence of Shakuntla Traders.',
      ],
    },
    {
      company: 'Comfort Build',
      companyUrl: 'https://comfort-build.odoo.com/',
      role: 'Software Developer',
      started: 'Feb 2024',
      upto: 'May 2024',
      tasks: [
        'Conceptualized the entire app in Figma, designing 30+ screens and user flows to ensure a seamless and visually appealing user experience.',
        'Improved user satisfaction by 40% through the implementation of a clean and intuitive interface. This was achieved by conducting extensive user research and usability testing to understand user needs and preferences.',
        'Increased user engagement by 50% by incorporating interactive elements such as dynamic menus, engaging animations, and responsive feedback mechanisms. These elements made the app more engaging and enjoyable to use.',
        'Achieved a 25% boost in app usage by making user-centric design improvements based on continuous feedback and usability testing. This included enhancing the visual appeal of the app and making it more accessible and easier to navigate',
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
      name: 'Luxe Lenses - eCommerce',
      url: 'https://luxe-lenses.vercel.app/',
      repo: 'https://github.com/RaazKetan/LuxeLenses',
      img: '/luxe.png',
      year: 2023,
      tags: ['React', 'Redux', 'Firebase', 'Scss', 'Stripe'],
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
