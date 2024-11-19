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
  dss,
  techbee,
  vmark,
  trangkhuyet,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "3D Artist",
    icon: creator,
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
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Staff",
    company_name: "DSS EDUCATION GROUP",
    icon: dss,
    iconBg: "#fff",
    date: "July 2024 - Oct 2024",
    points: [
      "Develop Odoo technology on web and mobile platforms.",
      "Use and develop a company website with WordPress.",
      "Join the LMS website development project with Moodle.",
      "Developing a new LMS project with Mern Stack.",
    ],
  },
  {
    title: "Intern Fullstack Developer",
    company_name: "TechBee Solutions",
    icon: techbee,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Participate in moving from monolithic architecture to Microservices system, enhancing expansion and maintenance.",
      "Support the process of using Docker and AWS, contributing to the smooth conversion to cloud infrastructure.",
      "Contribute to coding reviews and provide construction feedback for colleagues, create a cooperative working environment and study orientation.",
    ],
  },
  {
    title: "Intern Fullstack Developer",
    company_name: "VDAS/VMARK",
    icon: vmark,
    iconBg: "#fff",
    date: "Mar 2024 - June 2024",
    points: [
      "Develop and maintain web applications using React and Node.js, improving user experience and system performance.",
      "Collaborate with senior engineers to design and deploy API Restful, improving integration with external systems.",
    ],
  },
  {
    title: "IT Helpdesk",
    company_name: "Moon Charity & Social Security Fund",
    icon: trangkhuyet,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Support of ce work related to technology (guidance, error correction) and support other parts of the organization to use technology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!",
    name: "Sara Lee",
    designation: "Demo",
    company: "Demo",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!",
    name: "Chris Brown",
    designation: "Demo",
    company: "Demo",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!",
    name: "Lisa Wang",
    designation: "Demo",
    company: "Demo",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    // name: "Car Rent",
    name: "E-learning",
    // description:
    //   "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    description: 
      "E-Learning Hub nhằm thu hút người dùng đăng ký và khám phá khóa học. Trang sẽ có tiêu đề hấp dẫn, giới thiệu ngắn gọn về lợi ích học trực tuyến...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    source_code_link: "https://github.com/duc-thanh-2303/E_Learning",
  },
  {
    // name: "Job IT",
    name: "Demo",
    // description:
    //   "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/duc-thanh-2303",
  },
  {
    // name: "Trip Guide",
    name: "Demo",
    // description:
    //   "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
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
    image: tripguide,
    source_code_link: "https://github.com/duc-thanh-2303",
  },
];

export { services, technologies, experiences, testimonials, projects };
