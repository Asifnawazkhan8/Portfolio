
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
    tailwind,
    git,
    carrent,
    jobit,
    tripguide,
    vu,
    laravel, sql, php, jquery,
    bootstrap,
  material,
    
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
      id: "skills",
      title: "Skills",
    },

    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Laravel Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      name: "Bootstrap",
      icon: bootstrap,
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
      name: "Jquery",
      icon: jquery,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Material UI ",
      icon: material,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "MySQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    
    {
      title: "Laravel Developer",
      company_name: "VU Software house",
      icon: vu,
      iconBg: "#E6DEDD",
      date: "Nav 2022 - Oct 2023",
      points: [
        "Developed and maintained complex web applications using Laravel, PHP, MySQL, HTML/CSS, and JavaScript.",
        "Collaborated with cross-functional teams to gather requirements and translate them into technical specifications.",
        "Implemented responsive and user-friendly front-end interfaces, ensuring optimal performance across different devices.",
        "Designed and optimized database schemas, queries, and APIs for efficient data retrieval and manipulation.",
        "Integrated third-party APIs and services to enhance application functionality.",
        "Conducted code reviews, identified bugs, and implemented necessary fixes to ensure high-quality code standards.",
        "Applied object-oriented programming principles for code modularity and maintainability.",
        "Utilized Git and Gitlab for version control.",
        "Communicated with stakeholders to ensure software solutions met their specific needs.",
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
      name: "PAASA",
      description:
        "The PAASA (Pakistan Australian Association of South Australia) website is a dynamic platform crafted using cutting-edge technologies such as React.js, React Routing, and Reactstrap, seamlessly integrated with HTML, SCSS, jQuery, and Material UI. Its sleek design, converted from an XD file, offers users an immersive experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Reactstrap",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/laibaabbas/paasa",
      web_link:"https://paasa.vercel.app"
    },
    {
      name: "Logitrago",
      description:
        "The static demo website illustrates the prowess of a logistics service provider in Air Freight, Shipping Freight, and Road Freight.Captivating CSS animations, offering a seamless user experience and responsiveness. This platform serves as a compelling demonstration of the company's capabilities in the transportation industry.",
       tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Jquery",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/laibaabbas/logitrago",
      web_link:"https://logitrago.vercel.app/"
    },
    {
      name: "STMS",
      description:
        "Synopsis and Thesis Management System(STMS) is a centralized platform for the Virtual University of Pakistan, streamlining synopsis and thesis-related activities.The system provides a comprehensive platform for managing the process of submitting, reviewing, scheduling meeting, feedback provision, and approving synopses.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP Blade templates",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
      web_link:""
    },
  ];
const links = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/laiba-abbas-8938a01a5/',
    icon: 'fa-linkedin',
    span_class: 'ld',
    class:''

  },
];
  export { services, technologies, experiences, testimonials, projects };