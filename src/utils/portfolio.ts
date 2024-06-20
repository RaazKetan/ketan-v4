import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
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
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
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
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. ",
  specialText: 'Co-Founder @Shakuntla Traders - Gaya',

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
    items: ['AWS', 'Next.js', 'React.js', 'TailwindCSS', 'Bootstrap'],
  },
  img: '/gaurav-sarage.jpg',
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
      title: 'blockchain development',
      lottie: {
        light: '/lotties/aws.json',
        dark: '/lotties/aws1.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
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
      company: 'Shakuntla Traders',
      companyUrl: '',
      role: 'Co-Founder',
      started: 'Jan 2020',
      upto: 'Present',
      tasks: [
        'Co-founded a successful e-commerce business that sells a variety of products, including electronics, clothing, and home goods. Managed all aspects of the business, including product sourcing, marketing, and customer service.',
        'Developed and maintained the company website, resulting in a 30% increase in online sales. Implemented SEO best practices to improve search engine rankings and drive organic traffic to the site.',
        'Managed a team of 5 employees, providing training and support to ensure high-quality customer service. Implemented a customer loyalty program that increased repeat business by 20%.',
        'Developed and implemented a social media marketing strategy that increased brand awareness and engagement. Managed social media accounts, including Facebook, Instagram, and Twitter, to promote products and engage with customers.',
      ],
    },
    {
      company: 'Comfort Build',
      companyUrl: 'https://comfort-build.odoo.com/_odoo/comfort-build',
      role: 'UI/UX Developer',
      started: 'Feb 2024',
      upto: 'May 2024',
      tasks: [
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
      companyUrl: '',
      role: 'Frontend Developer & Research Intern',
      started: 'Jan 2023',
      upto: 'March 2023',
      tasks: [
        'Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed',
        'Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.',
        'Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.',
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
      url: 'https://github.com/gaurav-sarage/InstantAI',
      repo: 'https://github.com/gaurav-sarage/InstantAI',
      img: '',
      year: 2023,
      tags: ['NextJS', 'Typescript', 'Shadcn', 'Prisma'],
    },
    {
      id: getId(),
      name: 'Luxe Lenses - eCommerce',
      url: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      repo: 'https://github.com/gaurav-sarage/shopTronics-ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231495891-ec7c33c6-7f36-41fe-8efd-3e992d5b800d.png',
      year: 2023,
      tags: ['React', 'Scss', 'HTML', 'Strapi', 'Stripe Payment Gateway'],
    },
    {
      id: getId(),
      name: 'Readme Editor',
      url: 'https://github.com/gaurav-sarage/ecommerce',
      repo: 'https://github.com/gaurav-sarage/ecommerce',
      img: 'https://user-images.githubusercontent.com/85820227/231498672-64b2e2ff-d987-45a3-bca6-5d8d89759360.png',
      year: 2022,
      tags: ['React', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Photo Gallery App (React)',
      url: 'https://gsierra19-photo-gallery-app.web.app/',
      repo: 'https://github.com/gaurav-sarage/photo-gallery-app',
      img: 'https://user-images.githubusercontent.com/85820227/250177861-cd5a5cd8-590e-49a1-92b5-4273aeee2f57.png',
      year: 2023,
      tags: ['ReactJS', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Modern Art Gallery',
      url: 'https://gaurav-sarage.github.io/Client-02/',
      repo: 'https://github.com/gaurav-sarage/Client-02/',
      img: 'https://user-images.githubusercontent.com/85820227/231500007-aa155693-1871-4e44-8152-9c230861e7bd.png',
      year: 2022,
      tags: ['HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'countries app using REST API',
      url: 'https://country-api-react-app.netlify.app/',
      repo: 'https://github.com/gaurav-sarage/country-api',
      img: 'https://user-images.githubusercontent.com/85820227/231487782-eb60fb21-32ae-4012-9190-7c42be3d18e8.png',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'GitHub User Search',
      url: 'https://gaurav-sarage.github.io/github-user-search/',
      repo: 'https://github.com/gaurav-sarage/github-user-search',
      img: 'https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png',
      year: 2021,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Hackathon Portfolio',
      url: 'https://gaurav-sarage.github.io/webathon-portfolio/',
      repo: 'https://github.com/gaurav-sarage/webathon-portfolio',
      img: 'https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
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

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
