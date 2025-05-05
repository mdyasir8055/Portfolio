// Portfolio Data File
// This file contains all the data for the portfolio sections

// Hero Section Data
export const heroData = {
  name: "Mohamed Yasir",
  title: "",
  description: "Building innovative web applications with modern technologies. Passionate about creating seamless user experiences and solving complex problems through code.",
  profileImage: "src/images/Profile-1.jpg",
  splineScene: "https://prod.spline.design/CDWL5hVWel3vGzhO/scene.splinecode",
  contactButtonText: "Contact Me",
  githubButtonText: "GitHub",
  githubUrl: "https://github.com/yasirmansoori"
};

// About Section Data
export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a passionate Full Stack Developer with expertise in building modern web applications. My journey in tech began with a curiosity about how websites work, which led me to dive deep into the world of web development.",
    "During my career, I've had the opportunity to work on various projects ranging from e-commerce platforms to data visualization tools. I'm particularly interested in the intersection of design and functionality.",
    "When I'm not coding or designing, you can find me participating in hackathons, contributing to open-source projects, or exploring the latest developments in the tech community."
  ],
  education: {
    institution: "Velammal Engineering College",
    degree: "B.S. in Computer Science",
    period: "2020 - 2024"
  }
};

// Tech Stack Section Data
export const techStackData = [
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5' },
  { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
  { name: 'ReactJS', icon: 'https://cdn.simpleicons.org/react' },
  { name: 'NextJS', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
  { name: 'Shadcn', icon: 'https://cdn.simpleicons.org/shadcnui/white' },
  { name: 'NodeJS', icon: 'https://cdn.simpleicons.org/nodedotjs/darkgreen' },
  { name: 'ExpressJS', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/darkgreen' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/sky' },
  { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/blue' },
  { name: 'Zustand', icon: 'https://cdn.simpleicons.org/redux/pink' },
  { name: 'Zod', icon: 'https://cdn.simpleicons.org/zod/purple' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' },
  { name: 'Java', icon: '' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/sky' },
  { name: 'pnpm', icon: 'https://cdn.simpleicons.org/pnpm' }
];

export const skillsMarqueeData = [
  'Accessible',
  'Responsive',
  'Dynamic',
  'Scalable',
  'Search Optimized',
  'Interactive',
  'Secure',
  'Reliable',
  'Engaging'
];

// Experience Section Data
export const experienceData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechGlobe Inc.",
    period: "2022 - Present",
    description: "Led development of interactive web applications with React, Three.js, and WebGL. Implemented 3D visualizations and animations for product showcases.",
    skills: ["React", "Three.js", "WebGL", "GSAP", "TypeScript"],
  },
  {
    id: 2,
    title: "Creative Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Created interactive experiences for brand campaigns using JavaScript and canvas-based animations. Collaborated with designers to bring creative concepts to life.",
    skills: ["JavaScript", "Canvas API", "SVG Animation", "React", "Next.js"],
  },
  {
    id: 3,
    title: "UI/UX Developer",
    company: "InnovateTech",
    period: "2018 - 2020",
    description: "Designed and developed responsive user interfaces with a focus on animation and interaction. Created prototypes and implemented frontend solutions.",
    skills: ["HTML/CSS", "JavaScript", "Framer Motion", "Figma", "UI Design"],
  },
];

// Certifications Section Data
export const certificationsData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2022",
    url: "https://aws.amazon.com/certification/",
    description: "Advanced certification for designing distributed systems on AWS.",
  },
  {
    id: 2,
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "Aug 2022",
    url: "https://cloud.google.com/certification/cloud-architect",
    description: "Design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.",
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Mar 2022",
    url: "https://www.tensorflow.org/certificate",
    description: "Build and train neural network models using TensorFlow for various machine learning applications.",
  },
  {
    id: 4,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "Nov 2021",
    url: "https://learn.microsoft.com/en-us/certifications/",
    description: "Design, build, test, and maintain cloud applications and services on Microsoft Azure.",
  },
  {
    id: 5,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "Sep 2021",
    url: "https://www.cncf.io/certification/cka/",
    description: "Advanced knowledge of Kubernetes administration and related container orchestration.",
  },
  {
    id: 6,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "Jul 2021",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    description: "Build production-ready front-end applications with React and modern JavaScript.",
  },
  {
    id: 7,
    title: "Advanced React and Redux",
    issuer: "Udemy",
    date: "Jun 2021",
    url: "#",
    description: "Mastery of advanced React patterns, Redux state management, and modern frontend architecture.",
  },
  {
    id: 8,
    title: "Three.js Journey",
    issuer: "Three.js Journey",
    date: "May 2021",
    url: "#",
    description: "Comprehensive mastery of 3D web graphics using Three.js and WebGL.",
  },
  {
    id: 9,
    title: "Creative JavaScript",
    issuer: "Frontend Masters",
    date: "Apr 2021",
    url: "#",
    description: "Advanced JavaScript techniques for creating interactive and creative web experiences.",
  }
];

// Projects Section Data
export const projectsData = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce website with product catalog, user accounts, and secure checkout.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Portal",
    description: "A secure patient management system for healthcare providers with appointment scheduling and medical records.",
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Auth0"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Financial Dashboard",
    description: "An interactive dashboard for visualizing financial data with customizable charts and reports.",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Vue.js", "D3.js", "Express", "MySQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for tracking social media performance and engagement metrics.",
    image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real-time Chat App",
    description: "A modern chat application with real-time messaging, file sharing, and video calls.",
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Socket.io", "WebRTC", "Redis"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered platform for generating and editing images using machine learning models.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Blockchain Explorer",
    description: "A web application for exploring and analyzing blockchain transactions and smart contracts.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Web3.js", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Virtual Event Platform",
    description: "A platform for hosting and managing virtual events with live streaming and interactive features.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "WebRTC", "Socket.io", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

// Contact Section Data
export const contactData = {
  title: "Contact",
  getInTouch: {
    title: "Get in Touch",
    description: "Feel free to reach out if you have any questions, opportunities, or just want to say hello! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
  },
  connectWithMe: {
    title: "Connect With Me",
    socialLinks: [
      { platform: "GitHub", icon: "Github", url: "#" },
      { platform: "LinkedIn", icon: "Linkedin", url: "#" },
      { platform: "Twitter", icon: "Twitter", url: "#" },
      { platform: "Email", icon: "Mail", url: "#" }
    ]
  },
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
    submitButton: "Send Message",
    submittingButton: "Sending...",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    messagePlaceholder: "Your message..."
  },
  successMessage: {
    title: "Message sent!",
    description: "Thank you for reaching out. I'll get back to you soon."
  }
};