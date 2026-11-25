// data.js — content synced with the latest CV (English).
// Exception agreed with the owner: the BUFEST entry in `achievements` is kept from the
// previous site (faithful English translation), backed by the certificate PDF.

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["PHP", "JavaScript", "TypeScript", "Python", "Go (Golang)", "Java", "HTML5", "CSS3/Tailwind CSS"]
  },
  {
    category: "Frameworks & Tools",
    skills: ["Laravel", "React.js", "Alpine.js", "FastAPI", "LangChain", "PyTorch", "Scikit-Learn", "Supabase (PostgreSQL)", "Docker", "Git/GitHub", "GitHub Actions", "Railway", "Vercel"]
  },
  {
    category: "Design & Systems Analysis",
    skills: ["UI/UX Prototyping (Figma, Canva)", "System Analysis & Design (SAD)", "Data Structures & Algorithms"]
  },
  {
    category: "Artificial Intelligence & Security",
    skills: ["Natural Language Processing (NLP)", "RAG (FAISS, BM25, ChromaDB, Ollama)", "Sequential Recommender Systems", "Computer Vision (OpenCV, MediaPipe)", "Basic Threat Modeling (STRIDE)", "Packet Analysis (Wireshark/Nmap)"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Project Leadership", "Business Planning & Pitching", "Public Communication (Public Speaking / MC)", "Team Collaboration"]
  }
];

// Flat skills array for backward compatibility
export const skills = [
  'Python', 'PyTorch', 'FastAPI', 'Go (Golang)', 'Hybrid RAG (FAISS + BM25 + RRF)',
  'ChromaDB', 'LangChain', 'Scikit-Learn', 'Supabase / PostgreSQL', 'Docker',
  'Google Gemini API', 'Ollama', 'Weights & Biases (W&B)', 'OpenCV / MediaPipe',
  'React.js', 'Tailwind CSS', 'GitHub Actions CI/CD', 'Git', 'Linux'
];

// "AI Focus" strip right after the hero. Facts taken from the CV project/experience bullets.
export const aiFocus = [
  {
    title: 'RAG Systems',
    visual: 'rag',
    text: 'Hybrid RAG (FAISS + BM25 + RRF) for the Astra UD Trucks fleet intelligence platform, and a fully local, on-premise RAG with Ollama and ChromaDB.',
    links: [
      { label: 'Astra UD Trucks project', href: '#project-astra-ud-trucks' },
      { label: 'Local RAG project', href: '#project-local-rag' }
    ]
  },
  {
    title: 'NLP & Recommender Research',
    visual: 'log',
    text: 'Reproduced the BSARec paper (AAAI 2024) at the Intelligent System Laboratory, with a multi-seed audit, HR@K and NDCG@K evaluation, and ablation studies.',
    links: [{ label: 'BSARec project', href: '#project-bsarec' }]
  },
  {
    title: 'Computer Vision',
    visual: 'hand',
    text: 'BISINDO sign language detection with MediaPipe, based on 21 hand landmarks per frame.',
    links: [{ label: 'BISINDO project', href: '#project-bisindo' }]
  }
];

export const projects = [
  {
    id: 'project-astra-ud-trucks',
    ai_label: 'AI / RAG',
    title: 'Astra UD Trucks – Fleet Intelligence Platform & Hybrid RAG System',
    category: 'Hybrid RAG & Predictive Maintenance',
    description: 'Built a Hybrid Retrieval-Augmented Generation (RAG) system that combines semantic vector search (FAISS) and keyword search (BM25) with Reciprocal Rank Fusion (RRF) to produce grounded answers from documents. Also implemented predictive maintenance for brake, tire, and battery wear (Scikit-Learn) and driver behavior scoring using Z-score mapping.',
    tech_stack: 'Python, FastAPI, Google Gemini 2.5 Flash, FAISS, BM25, LangChain, Scikit-Learn, React.js',
    image_path: '/assets/images/projects/ragudtrucks.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/RAGudtrucks'
  },
  {
    id: 'project-local-rag',
    ai_label: 'AI / RAG',
    title: 'Local RAG Travel AI Agent & Knowledge Engine',
    category: 'On-Premise Microservices',
    description: 'Designed a self-contained microservice architecture that runs fully locally and privately via Docker Compose, with no paid external APIs. A Laravel 11 frontend connects to an independent Golang backend service that handles price calculation and local LLM inference with Qwen 2.5-3B.',
    tech_stack: 'Laravel 11, Golang (langchaingo), ChromaDB, Ollama (qwen2.5:3b), Docker Compose, Tailwind CSS, Alpine.js',
    image_path: '/assets/images/projects/local-rag.jpg',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/LocalRAG'
  },
  {
    id: 'project-bsarec',
    ai_label: 'AI / Research',
    title: 'BSARec Reproduction & Sequential Recommender System Research',
    category: 'Research · Intelligent System Laboratory',
    description: 'Reproduced the AAAI 2024 BSARec paper on the Amazon Beauty, LastFM, and MovieLens-1M datasets as part of research at the Intelligent System Laboratory. Performed a multi-seed audit (seeds 42, 43, 44), evaluated with HR@K and NDCG@K, and analyzed ablation studies on the hyperparameters α and c.',
    tech_stack: 'Python, PyTorch, Weights & Biases (W&B), SciPy, Google Colab (Tesla T4 GPU)',
    image_path: '/assets/images/projects/bsarec.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/BSARec_Reproduce'
  },
  {
    id: 'project-bisindo',
    ai_label: 'AI / Computer Vision',
    title: 'BISINDO Gesture Recognition & Sign Language Detector',
    category: 'Computer Vision',
    description: 'Developed a computer vision prototype for real-time detection and translation of Indonesian Sign Language (BISINDO) based on 21 hand landmark coordinates per frame, with low-latency processing.',
    tech_stack: 'Python, OpenCV, MediaPipe, NumPy',
    image_path: '/assets/images/projects/bisindo.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/BISINDO-Sign-Language-Detection'
  },
  {
    title: 'SchedulingApps – Academic Management & Automated Sync Pipeline',
    category: 'Academic Management Platform',
    description: 'Built a serverless academic management platform that brings together class schedules, assignments, and personal agendas for Universitas Brawijaya students. Automated synchronization with the Google Classroom and Google Calendar APIs through GitHub Actions cron pipelines, and secured the database schema with Supabase Row-Level Security (RLS).',
    tech_stack: 'TypeScript, Supabase (PostgreSQL, RLS), Google Cloud APIs, GitHub Actions (CI/CD)',
    image_path: '/assets/images/projects/scheduling.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/SchedulingApps'
  },
  {
    title: 'Buddle (smartStudyTimer) – Study Timer & Productivity App',
    category: 'Productivity Web App',
    description: 'Built a study-time management web app that supports the Pomodoro and Flowtime techniques, with focus progress visualization. Designed a responsive, interactive UI with Tailwind CSS and Alpine.js, and deployed the app independently on Railway.',
    tech_stack: 'Laravel, Alpine.js, Tailwind CSS, Railway',
    image_path: '/assets/images/projects/study-timer.jpg',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/smartStudyTimer'
  },
  {
    title: 'SAB Tour & Travel – Landing Page & Web Platform',
    category: 'Landing Page',
    description: 'Designed and launched a modern, responsive landing page for travel service provider SAB Tour & Travel. Managed the integration of the tour package catalog display, refined the visual branding, and organized systematic digital bookkeeping.',
    tech_stack: 'HTML, Tailwind CSS, Vercel',
    image_path: '/assets/images/projects/sab-tour.png',
    link: null,
    github_link: null
  }
];

// Newest first. The research internship has no dates in the CV, so none are shown.
export const experiences = [
  {
    period: null,
    type: 'Research',
    title: 'Research Intern – Natural Language Processing (NLP) & Sequential Recommendation',
    organization: 'Intelligent System Laboratory, Universitas Brawijaya',
    description: 'Worked on NLP research as part of the laboratory internship program. Conducted an in-depth literature review of the BSARec paper to identify research gaps, reproduced its experiments, and translated the gaps into candidate research directions.'
  },
  {
    period: 'August 2026 – December 2026',
    type: 'Teaching',
    title: 'Teaching Assistant – Systems Analysis and Design (APS)',
    organization: 'Faculty of Computer Science, Universitas Brawijaya',
    description: 'Mentored and evaluated dozens of students throughout the Software Development Life Cycle (SDLC). Taught database modeling with Entity Relationship Diagrams (ERD), system workflow diagrams, and interactive prototyping in Figma, from design to a functional, test-ready system.'
  },
  {
    period: 'August 2024 – December 2026',
    type: 'Work',
    title: 'Full-Stack Developer & IT Support',
    organization: 'SAB Tour & Travel',
    description: 'Designed, developed, and maintained an end-to-end operational web platform and travel package booking portal, covering order data, tour catalogs, and internal financial record-keeping. Managed server configuration, cloud deployment workflows, and domains.'
  },
  {
    period: 'December 2023 – April 2024',
    type: 'Internship',
    title: 'Software Engineering Intern',
    organization: 'PT. Finnet Indonesia',
    stack: 'React.js · Go (Golang) · Docker',
    description: 'Built React.js web interfaces to digitize internal manual workflows and Go (Golang) backend modules for web feature data processing. Set up Docker development environments for consistent deployments, working in an Agile/Scrum team with Git.'
  }
];

export const education = [
  {
    period: 'August 2024 – Present',
    type: 'Education',
    title: "Bachelor's Degree in Informatics Engineering (S1)",
    organization: 'Universitas Brawijaya — Malang, East Java',
    description: 'Focus: Software Engineering, Data Structures & Algorithms, Systems Analysis & Design, Computer Networks.'
  },
  {
    period: 'July 2021 – July 2024',
    type: 'Education',
    title: 'Software Engineering',
    organization: 'SMK Telkom Malang — Malang, East Java',
    description: 'Focus: Object-Oriented Programming, Web Development, Databases.'
  }
];

export const achievements = [
  {
    year: '2026',
    title: 'Finalist – Business Festival ("BUFEST") 2026',
    organizer: 'HMDTIF FILKOM Universitas Brawijaya',
    theme: 'Data-Driven Business Innovation',
    certificate_no: '00459/HMDTIF FILKOM-UB/BISNIS/BUFEST/D/X/2026',
    description: 'Advanced to the national final by designing a business innovation proposal based on market data analytics modeling and intelligent technology integration.',
    certificate_link: '/docs/finalisLombaBussinesPlanUB.pdf'
  }
];

// Competition and organization entries shown below the BUFEST card.
export const activities = [
  {
    period: null,
    type: 'Competition',
    title: 'Business Plan Competition',
    organization: null,
    description: 'Actively participated in business plan competitions, developing and presenting business plans to judging panels, and took part in various other competitions to hone teamwork, problem-solving, and presentation skills.'
  },
  {
    period: '2025',
    type: 'Organization',
    title: 'Committee Chairperson – Industry Visit (RECON)',
    organization: 'Informatics Engineering Student Association (HMDTIF), Universitas Brawijaya',
    description: 'Led the organizing committee in planning and executing a student industry visit to Telkom Infrastruktur Surabaya, with full responsibility for budget, institutional permits, timelines, and coordination with industry stakeholders.'
  },
  {
    period: '2025 – 2026',
    type: 'Organization',
    title: 'Internal Resource Development (PSDI) / Human Resources Staff',
    organization: 'Informatics Engineering Student Association (HMDTIF), Universitas Brawijaya',
    description: 'Facilitated internal recruitment and member performance assessments, coordinated Leaderless Group Discussion (LGD) sessions and the Staff of the Month program, and managed internal communication to strengthen cross-division synergy.'
  }
];
