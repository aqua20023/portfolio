import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import reactnative  from "../assets/tech/reactnative.png";
import javawhite from "../assets/tech/javawhite.png"
import mern from "../assets/company/mern.png"
import msclogo from "../assets/company/msclogo.png"
import gatelogo from "../assets/company/gate-logo.png"
import LMS from "../assets/LMS.png"
import randomgifs from "../assets/randomgifs.png"
import codehelpblogs from "../assets/codehelpblogs.png"
import topcourses from "../assets/topcourses.png"
import tourist from "../assets/tourist.png"
import javaBlack from "../assets/tech/javaBlack.png"







export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "React Native Developer",
    icon: reactnative,
  },
  {
    title: "DSA Java",
    icon: javawhite,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: javawhite,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Microsoft Student Ambassador's Club (Technical Co-Lead)",
    icon: msclogo,
    iconBg: "#383E56",
    date: "October 2023 - April 2024",
    points: [
      "Built and maintained simple web applications using HTML, CSS, JavaScript, and React.js basics.",
      "Worked closely with teammates and designers to develop user-friendly projects.",
      "Learned and applied responsive design principles for better usability on all devices.",
      "Took part in code reviews, gaining feedback and improving coding practices.",
      "Supported and guided fellow students in understanding frontend development basics.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Self taught Freelancer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2025",
    points: [
  "Built and maintained web applications using React.js and basic frontend technologies.",
  "Worked with clients and teammates to create simple, user-friendly projects.",
  "Applied responsive design principles to ensure compatibility across devices and browsers.",
  "Learned from code reviews and feedback to improve coding skills.",
  "Gained practical experience by completing hands-on freelance projects.",
],
},
  {
    title: "Qualified GATE 2025",
    company_name: "GATE 2025 Examination",
    icon: gatelogo,
    iconBg: "#383E56",
    date: "Feb  2025",
    points: [
  "Qualified GATE 2025 examination with strong problem-solving and analytical skills.",
  "Developed a solid foundation in core Computer Science concepts including Data Structures, Algorithms, and Operating Systems.",
  "Practiced applying theoretical knowledge to solve real-world technical problems under time constraints.",
  "Demonstrated consistency, discipline, and effective time management during exam preparation.",
  "Strengthened logical reasoning and technical aptitude through continuous practice and self-study.",
],
  },
  {
    title: "Fullstack (MERN) Developer",
    company_name: "Freelancer",
    icon: mern,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
  "Building and maintaining fullstack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
  "Designing and developing RESTful APIs to support dynamic and scalable applications.",
  "Creating responsive, user-friendly interfaces with React.js and modern UI libraries.",
  "Managing databases with MongoDB for efficient data storage and retrieval.",
  "Collaborating with clients to understand requirements and deliver customized solutions.",
  "Continuously learning and applying best practices in both frontend and backend development.",
],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LMS Website",
    description:
      "A full-featured LMS website  Edemy, offering course creation, video lectures, quizzes, secure payments, and progress tracking with a responsive, user-friendly design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: LMS,
    source_code_link: "https://github.com/aqua20023/LMS-Edemy",
    link: "https://github.com/aqua20023/LMS-Edemy",
  },
  {
    name: "Blogging Website",
    description:
      "A dynamic blogging website enabling users to create, edit, and share posts, with categories, hashtag, and a clean, responsive reading experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codehelpblogs,
    source_code_link: "https://github.com/aqua20023/Codehelp-Blogging-website-experimental",
    link: "https://github.com/aqua20023/Codehelp-Blogging-website-experimental",
  },
  {
    name: "Top Courses",
    description:
      "A responsive top courses selling website where users can browse, purchase, and learn from curated courses with secure payments and an intuitive interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: topcourses,
    source_code_link: "https://github.com/aqua20023/Cinamatic-experimental",
    link: "https://github.com/aqua20023/Cinamatic-experimental",
  },
  {
    name: "Random_Memes",
    description:
      "A fun random meme website that fetches and displays memes instantly, offering users endless entertainment with simple navigation and engaging, humorous content.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: randomgifs,
    source_code_link: "https://github.com/aqua20023/Random_Memes",
    link: "https://github.com/aqua20023/Random_Memes",
  },
  {
    name: "Trip booking ",
    description:
      "A responsive Indian trip booking website enabling users to explore destinations, compare packages, and securely book trips with intuitive search and filter features.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tourist,
    source_code_link: "https://github.com/aqua20023/Codehelp-Blogging-website-experimental",
    link: "https://github.com/aqua20023/Codehelp-Blogging-website-experimental",
  },
];

export { services, technologies, experiences, testimonials, projects };