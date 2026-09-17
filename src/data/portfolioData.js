export const initialPortfolioData = {
  personal: {
    name: "Sonu Kadere",
    isPlaceholderName: false,
    title: "Frontend & MERN Stack Developer",
    location: "Indore, Madhya Pradesh, India",
    email: "sonukadere1506@gmail.com",
    phone: "+91-6264791823",
    avatar: "/profile.jpg",
    badgeText: "Open for Software Engineer & Full-Stack Roles",
    availableForHire: true,
    introGreeting: "Hey, I'm",
    headline: "Frontend & MERN Stack Developer Crafting Scalable Web Applications",
    subheadline: "Hands-on experience in React.js, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS, and REST APIs. Passionate about building reusable components, clean UI architecture, and solving problems with Data Structures & Algorithms.",
    resumeUrl: "/Sonu_Kadere_Resume.pdf",
    githubUrl: "https://github.com/sonukadere",
    linkedinUrl: "https://www.linkedin.com/in/sonukadere1506/",
    leetcodeUrl: "https://github.com/sonukadere",
    otherLinks: [
      { label: "GitHub", url: "https://github.com/sonukadere" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sonukadere1506/" }
    ]
  },
  metrics: [
    { label: "DSA & Problem Solving", value: "C++", icon: "Code" },
    { label: "Production Internships", value: "2", icon: "FolderGit2" },
    { label: "Tech Stack Tools", value: "12+", icon: "Wrench" },
    { label: "Clean Code & Reliability", value: "100%", icon: "Zap" }
  ],
  about: {
    terminalCommand: "sonu.getProfile()",
    greeting: "Frontend & MERN Stack Developer passionate about writing clean, scalable code and delivering dynamic user experiences.",
    paragraphs: [
      "I am a Frontend & MERN Stack Developer with hands-on internship experience in React.js, JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, Tailwind CSS, and WordPress.",
      "I have practical experience developing responsive web applications, integrating REST APIs, creating modular UI components, optimizing frontend performance, and collaborating in Agile workflows using Git, GitHub, and Postman.",
      "With a strong educational foundation in Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA) from SCS&IT Devi Ahilya Vishwavidyalaya, Indore, I continuously sharpen my problem-solving skills in C++ and Data Structures & Algorithms."
    ],
    highlights: [
      "Hands-on MERN Stack & Frontend Internship Experience",
      "Proficient in React.js, Tailwind CSS, JavaScript (ES6+), and REST APIs",
      "Backend foundations in Node.js, Express.js, and MongoDB / SQL",
      "Continuous problem solver in C++ and Data Structures & Algorithms",
      "Agile collaboration with Git, GitHub, Postman, and debugging"
    ],
    careerGoal: "Seeking a Software Engineer or Full-Stack Developer role where I can build high-impact web products, contribute to modern frontends and APIs, and grow within a high-performing engineering team."
  },
  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "Code2", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette", highlight: true },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", highlight: false },
      { name: "WordPress", level: "Proficient", icon: "Layers", highlight: false },
      { name: "Elementor", level: "Proficient", icon: "Layout", highlight: false }
    ],
    backend: [
      { name: "Node.js", level: "Intermediate", icon: "Server", highlight: true },
      { name: "Express.js", level: "Intermediate", icon: "Network", highlight: true },
      { name: "REST APIs", level: "Advanced", icon: "ArrowLeftRight", highlight: true },
      { name: "C++ (DSA)", level: "Proficient", icon: "Cpu", highlight: true }
    ],
    database: [
      { name: "MongoDB", level: "Proficient", icon: "Database", highlight: true },
      { name: "SQL (MySQL)", level: "Proficient", icon: "Table", highlight: false }
    ],
    tools: [
      { name: "Git", level: "Advanced", icon: "GitBranch", highlight: true },
      { name: "GitHub", level: "Advanced", icon: "GitBranch", highlight: true },
      { name: "Postman", level: "Advanced", icon: "Send", highlight: true },
      { name: "VS Code", level: "Advanced", icon: "Terminal", highlight: false }
    ]
  },
  projects: [
    {
      id: "school-system",
      title: "Daily Day Academy – School Management System",
      tagline: "Full-Stack Educational Portal & Analytics Engine",
      category: "Full Stack",
      featured: true,
      description: "A modern, full-featured school management web application designed for administrators, teachers, and students. Features role-based authentication, student and teacher portals, interactive analytics charts, fee management, and dynamic attendance records.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
      stats: {
        platform: "Web Application (React + Vite + API Client)",
        features: "Role-Based Auth, Student/Teacher Portals, Interactive Charts, Attendance & Grading",
        security: "Protected Routes, JWT Session Tokens, Input Sanitization",
        techStack: "React.js, Tailwind CSS, JavaScript (ES6+), Chart.js, REST APIs, Vite"
      },
      tags: ["React.js", "Tailwind CSS", "REST APIs", "Chart.js", "Vite"],
      liveUrl: "https://school-pied-one.vercel.app/login",
      githubUrl: "https://github.com/sonukadere",
      highlights: [
        "Built responsive student, teacher, and administrative dashboards with role-based routing.",
        "Integrated interactive performance charts visualizing student enrollment, metrics, and academic progress.",
        "Engineered secure credential authentication and dynamic data persistence across sessions."
      ]
    },
    {
      id: "hone-hospitality",
      title: "H ONE – Hospitality & Catering Consultancy Platform",
      tagline: "Executive Culinary Advisory & Concept Architecture",
      category: "Frontend",
      featured: true,
      description: "A responsive executive digital platform created for H ONE hospitality and catering consultancy led by Chef Mukesh Choudhary. Features luxury aesthetic typography, concept architecture galleries, menu engineering portfolios, and client consultation lead flows.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
      stats: {
        platform: "Consultancy Web Platform (React + Vite)",
        features: "Concept Architecture, Menu Engineering Showcase, Consultation Inquiries, Smooth Scrolling",
        security: "Client-side Form Validation & Security Headers",
        techStack: "React.js, Tailwind CSS, Modern UI/UX, Vite"
      },
      tags: ["React.js", "Tailwind CSS", "UI/UX Design", "Responsive Layout", "Vite"],
      liveUrl: "https://honehospitalitycatering.vercel.app/",
      githubUrl: "https://github.com/sonukadere",
      highlights: [
        "Crafted an elegant, responsive design system with luxury typography and micro-interactions.",
        "Architected smooth scroll transitions, culinary portfolio galleries, and service concept showcases.",
        "Optimized mobile performance, image loading, and responsive layouts across all screen viewports."
      ]
    },
    {
      id: "weather-app",
      title: "Real-Time Weather Application",
      tagline: "Dynamic Meteorological Dashboard & API Integration",
      category: "Frontend",
      featured: true,
      description: "A responsive real-time weather web application that provides instant meteorological updates using public REST APIs. Features dynamic data fetching for temperature, humidity, and wind speed based on user city search, with comprehensive error handling and clean responsive UI.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1000&q=80",
      stats: {
        platform: "Responsive Web Application",
        features: "Dynamic API Fetching, City Search, Temperature, Humidity, Wind Speed",
        security: "Client-side Input Sanitization & Error Handling",
        techStack: "JavaScript (ES6+), HTML5, CSS3, REST APIs"
      },
      tags: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Responsive Design"],
      liveUrl: "https://github.com/sonukadere",
      githubUrl: "https://github.com/sonukadere",
      highlights: [
        "Implemented asynchronous fetch queries to retrieve real-time weather metrics from public REST endpoints.",
        "Engineered responsive layouts and user-friendly visual weather states for desktop, tablet, and mobile displays.",
        "Built robust error boundaries for invalid city searches and network timeout conditions."
      ]
    }
  ],
  experience: [
    {
      role: "MERN Stack Intern",
      company: "Digiflex Pvt. Ltd.",
      location: "India",
      period: "Jul 2026 – Present",
      description: "Developing responsive web applications and scalable user interfaces using React.js and MERN stack technologies in an Agile environment.",
      points: [
        "Developed responsive web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.",
        "Built reusable React components and integrated REST APIs to create dynamic, data-driven user interfaces.",
        "Improved frontend performance, diagnosed UI bugs, and ensured pixel-perfect responsive design across all devices.",
        "Collaborated seamlessly with the engineering team using Git, GitHub, and Postman while adhering to Agile sprint practices."
      ],
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Git", "GitHub", "Postman", "Agile"]
    },
    {
      role: "Frontend Developer Intern",
      company: "VidyaGXP Pvt. Ltd.",
      location: "India",
      period: "May 2026 – Jun 2026",
      description: "Contributed to responsive web interface development, component reusability, and cross-browser quality assurance.",
      points: [
        "Developed responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.",
        "Built reusable React components and integrated REST APIs to deliver dynamic user experiences.",
        "Optimized UI performance, resolved critical bugs, and ensured complete cross-browser compatibility.",
        "Collaborated with developers using Git and GitHub, actively participating in testing, debugging, and code reviews."
      ],
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Git", "Testing & Debugging"]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "SCS&IT, Devi Ahilya Vishwavidyalaya",
      university: "Devi Ahilya Vishwavidyalaya, Indore",
      year: "2024 – 2026",
      score: "Completed",
      details: "Advanced study of Computer Science, Software Engineering, Database Systems, Web Technologies, and Algorithm Design."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "SCS&IT, Devi Ahilya Vishwavidyalaya",
      university: "Devi Ahilya Vishwavidyalaya, Indore",
      year: "2021 – 2024",
      score: "Graduated",
      details: "Core coursework in Object-Oriented Programming, C++, Data Structures, Web Development, Database Management, and Operating Systems."
    }
  ],
  certifications: [
    {
      title: "Data Structures & Algorithms in C++",
      issuer: "Technical Foundations",
      date: "2024",
      credentialUrl: "https://github.com/sonukadere"
    },
    {
      title: "MERN Stack Web Development Specialization",
      issuer: "Hands-on Internship Certification",
      date: "2026",
      credentialUrl: "https://www.linkedin.com/in/sonukadere1506/"
    }
  ]
};
