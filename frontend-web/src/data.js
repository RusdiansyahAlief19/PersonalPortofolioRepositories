// data.js — Unslopped, impact-driven, tailored for AI / Machine Learning & Data Engineering
// Based on 02_Portofolio/data_unslopped.js

export const skillCategories = [
  {
    category: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "Scikit-Learn", "Sequential Recommendation (BSARec, SASRec)", "Predictive Analytics", "Model Benchmarking (HR@K, NDCG@K)", "Weights & Biases (W&B)"]
  },
  {
    category: "Generative AI & Vector Engines",
    skills: ["Hybrid RAG (FAISS + BM25 + Reciprocal Rank Fusion)", "LangChain", "ChromaDB", "Ollama (Qwen 2.5)", "Google Gemini API", "Anti-Hallucination Grounding"]
  },
  {
    category: "Data Engineering & Systems",
    skills: ["Python (FastAPI, Pandas, NumPy, SciPy)", "Go (Golang Data Serving)", "Supabase (PostgreSQL, RLS)", "Automated Cron ETL Pipelines", "Docker & Docker Compose", "Git / GitHub Actions"]
  },
  {
    category: "Computer Vision & Full-Stack",
    skills: ["Google MediaPipe (3D Hand Landmarks)", "OpenCV", "React.js", "Tailwind CSS", "Linux", "Railway / Vercel"]
  }
];

// Flat skills array for backward compatibility
export const skills = [
  'Python', 'PyTorch', 'FastAPI', 'Go (Golang)', 'Hybrid RAG (FAISS + BM25 + RRF)',
  'ChromaDB', 'LangChain', 'Scikit-Learn', 'Supabase / PostgreSQL', 'Docker',
  'Google Gemini API', 'Ollama', 'Weights & Biases (W&B)', 'OpenCV / MediaPipe',
  'React.js', 'Tailwind CSS', 'GitHub Actions CI/CD', 'Git', 'Linux'
];

export const projects = [
  {
    title: 'Astra UD Trucks — Fleet Intelligence & Hybrid RAG Platform',
    category: 'Enterprise AI & Data Platform',
    description: 'Platform AI tingkat enterprise berbasis Hybrid Search RAG (Vector FAISS + BM25 Keyword Search + Reciprocal Rank Fusion) yang di-grounding dengan Google Gemini 2.5 Flash untuk konsultasi teknis bebas halusinasi. Dilengkapi dashboard Predictive Maintenance berbasis Machine Learning (Scikit-Learn) untuk memprediksi keausan komponen armada serta Driver Behavior Scoring berbasis Z-score linear mapping.',
    tech_stack: 'Python, FastAPI, Gemini 2.5 Flash, FAISS, BM25, LangChain, Scikit-Learn, Pandas, React.js',
    image_path: '/assets/images/projects/ragudtrucks.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/RAGudtrucks',
    highlight: 'Enterprise Hybrid RAG + Predictive ML'
  },
  {
    title: 'BSARec Reproduce & Sequential Recommender System Research',
    category: 'Deep Learning Research (AAAI 2024)',
    description: 'Riset reproduksi paper AAAI 2024 ("An Attentive Inductive Bias for Sequential Recommendation beyond the Self-Attention") di Laboratorium Komputasi Cerdas FILKOM UB. Melakukan benchmarking empiris multi-seed (42, 43, 44) terhadap SASRec pada dataset Amazon Beauty, LastFM, dan MovieLens-1M dengan metrik HR@K dan NDCG@K, studi ablasi hiperparameter, serta tracking eksperimen di Weights & Biases.',
    tech_stack: 'Python, PyTorch, Weights & Biases (W&B), SciPy, Google Colab (Tesla T4 GPU)',
    image_path: '/assets/images/projects/bsarec.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/BSARec_Reproduce',
    highlight: 'AAAI 2024 Paper Reproduction'
  },
  {
    title: 'Local RAG Travel AI Agent & Knowledge Engine',
    category: 'On-Premise Microservices & Vector DB',
    description: 'Asisten AI customer service berbasis Retrieval-Augmented Generation yang berjalan 100% lokal di Docker tanpa bergantung pada API eksternal berbayar. Arsitektur decoupled microservice: frontend & session di Laravel 11 terhubung ke high-throughput RAG engine berbasis Golang (langchaingo), ChromaDB vector store, dan LLM lokal Qwen 2.5 via Ollama untuk estimasi harga paket wisata presisi.',
    tech_stack: 'Golang, ChromaDB, Ollama (Qwen 2.5), Laravel 11, Tailwind CSS, Alpine.js, Docker Compose',
    image_path: '/assets/images/projects/local-rag.jpg',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/LocalRAG',
    highlight: 'Golang Vector Serving + On-Premise LLM'
  },
  {
    title: 'SchedulingApps — Academic Ingestion Pipeline & Cloud Platform',
    category: 'Data Engineering & Cloud Integration',
    description: 'Platform manajemen jadwal dan sinkronisasi akademik terpusat untuk mahasiswa Universitas Brawijaya. Mengimplementasikan pipeline penarikan data berkala otomatis (automated cron ingestion) via GitHub Actions dari Google Classroom API, Google Calendar API, dan scraping portal kampus, dengan penyimpanan relasional aman di Supabase PostgreSQL ber-Row Level Security (RLS).',
    tech_stack: 'TypeScript, Supabase (PostgreSQL, RLS), Google Cloud APIs, GitHub Actions CI/CD',
    image_path: '/assets/images/projects/scheduling.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/SchedulingApps',
    highlight: 'Automated Cron ETL + Supabase RLS'
  },
  {
    title: 'BISINDO Real-Time Sign Language Gesture Recognition',
    category: 'Computer Vision & Accessibility',
    description: 'Sistem computer vision real-time untuk mendeteksi dan menerjemahkan Bahasa Isyarat Indonesia (BISINDO) guna mempermudah aksesibilitas komunikasi. Mengekstraksi 21 koordinat 3D hand landmarks spasial per frame melalui webcam menggunakan Google MediaPipe dengan algoritma klasifikasi berlatensi rendah.',
    tech_stack: 'Python, OpenCV, Google MediaPipe, NumPy',
    image_path: '/assets/images/projects/bisindo.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/BISINDO-Sign-Language-Detection',
    highlight: 'Real-time 3D Landmark Tracking'
  },
  {
    title: 'Buddle (smartStudyTimer) — Adaptive Study Productivity App',
    category: 'Full-Stack Web Application',
    description: 'Aplikasi manajemen waktu belajar interaktif dengan integrasi teknik Pomodoro dan Flowtime untuk memaksimalkan fokus belajar. Dibangun dengan antarmuka dinamis dan ringan serta di-deploy secara mandiri di cloud platform Railway.',
    tech_stack: 'Laravel, Alpine.js, Tailwind CSS, MySQL, Railway Cloud',
    image_path: '/assets/images/projects/study-timer.jpg',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/smartStudyTimer',
    highlight: 'Live Deployment on Railway'
  }
];

export const experiences = [
  {
    period: '2026 - Sekarang',
    type: 'Research',
    title: 'Research Intern – NLP & Sequential Recommendation',
    organization: 'Laboratorium Komputasi Cerdas, FILKOM Universitas Brawijaya',
    description: 'Meneliti arsitektur deep learning untuk model rekomendasi sekuensial dan mekanisme self-attention. Mereproduksi paper AAAI 2024 BSARec, mengidentifikasi research gap terhadap data interaksi bising, menjalankan benchmarking multi-seed terhadap baseline SASRec, dan memonitor eksperimen via Weights & Biases.'
  },
  {
    period: 'Agu 2026 - Sekarang',
    type: 'Academic',
    title: 'Asisten Praktikum Analisis & Perancangan Sistem (APS)',
    organization: 'Fakultas Ilmu Komputer, Universitas Brawijaya',
    description: 'Membimbing dan mengevaluasi mahasiswa dalam siklus SDLC dan perancangan arsitektur data. Mengajarkan pemodelan basis data relasional (ERD), diagram alur data (DFD/UML), normalisasi skema, hingga implementasi sistem fungsional.'
  },
  {
    period: 'Des 2023 - Apr 2024',
    type: 'Internship',
    title: 'Software Engineer Intern – Backend & Data Processing',
    organization: 'PT Finnet Indonesia',
    description: 'Mengembangkan modul backend microservices berbasis Go (Golang) untuk pemrosesan data internal berkecepatan tinggi. Membangun antarmuka interaktif dengan React.js dan mengonfigurasi kontainerisasi lingkungan pengujian dengan Docker.'
  },
  {
    period: 'Agu 2024 - Sekarang',
    type: 'Work',
    title: 'Full-Stack Developer & IT Support',
    organization: 'SAB Tour & Travel',
    description: 'Merancang dan memelihara platform web operasional serta portal pemesanan paket wisata end-to-end. Mengintegrasikan basis data pesanan, katalog digital, serta menghubungkannya dengan sistem asisten Local RAG.'
  },
  {
    period: 'Agu 2024 - Sekarang',
    type: 'Education',
    title: 'S1 Teknik Informatika',
    organization: 'Universitas Brawijaya (FILKOM)',
    description: 'Fokus pada Kecerdasan Buatan (AI), Machine Learning, Rekayasa Perangkat Lunak, Struktur Data & Algoritma, dan Sistem Terdistribusi.'
  },
  {
    period: 'Jul 2021 - Jul 2024',
    type: 'Education',
    title: 'Rekayasa Perangkat Lunak',
    organization: 'SMK Telkom Malang',
    description: 'Membangun fondasi kuat dalam Object-Oriented Programming (OOP), web development modern, dan basis data relasional.'
  }
];

export const achievements = [
  {
    year: '2026',
    title: 'Finalis Business Festival ("BUFEST") 2026',
    organizer: 'HMDTIF FILKOM Universitas Brawijaya',
    theme: 'Data-Driven Business Innovation',
    certificate_no: '00459/HMDTIF FILKOM-UB/BISNIS/BUFEST/D/X/2026',
    description: 'Menembus babak final tingkat nasional dengan merancang proposal inovasi bisnis berbasis permodelan analitik data pasar dan integrasi teknologi cerdas.',
    certificate_link: '/docs/finalisLombaBussinesPlanUB.pdf'
  }
];
