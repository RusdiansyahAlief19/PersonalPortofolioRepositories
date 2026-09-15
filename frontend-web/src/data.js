export const skills = [
  'PHP', 'JavaScript', 'Python', 'Go (Golang)', 'Java', 'HTML5', 'CSS3 / Tailwind CSS',
  'Laravel', 'React.js', 'Alpine.js', 'Docker', 'Git / GitHub', 'Railway', 'Vercel',
  'UI/UX Prototyping (Figma, Canva)', 'System Analysis & Design', 'Data Structures & Algorithms',
  'Computer Vision (OpenCV, MediaPipe)', 'RAG (Retrieval-Augmented Generation)',
  'STRIDE Threat Modeling', 'Wireshark / Nmap', 'Suricata',
  'Human Resource Management', 'Project Leadership', 'Public Speaking (MC)', 'Team Collaboration', 'Problem Solving'
];

export const projects = [
  {
    title: 'PhagOS — Virtual SOC Analyst',
    description: 'Virtual SOC Analyst berbasis RAG untuk menjaga keamanan server jaringan. Menganalisis log Suricata, menghitung skor risiko statistik per host, dan menjelaskan ancaman dalam Bahasa Indonesia melalui chatbot dengan sitasi MITRE ATT&CK.',
    tech_stack: 'Python, FastAPI, FAISS, BM25, Gemini, Suricata, SQLite, HMAC-SHA256',
    image_path: '/assets/images/projects/phagos.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/PhagOS'
  },
  {
    title: 'RAGudtrucks — Fleet Intelligence Platform',
    description: 'Platform RAG enterprise untuk Astra UD Trucks (proyek lomba inovasi). Asisten AI untuk informasi teknis truk, kalkulator TCO interaktif, dashboard predictive maintenance FleetSight, dan driver behavior scoring.',
    tech_stack: 'Python, FastAPI, FAISS, BM25, Gemini 2.5 Flash, LangChain, Scikit-Learn, React.js, Pandas',
    image_path: '/assets/images/projects/ragudtrucks.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/RAGudtrucks'
  },
  {
    title: 'Buddle (Buddy Learning) — Smart Study Timer',
    description: 'Aplikasi timer belajar dan produktivitas dengan teknik Pomodoro dan Flowtime. Dilengkapi rekomendasi chronotype personal agar sesi belajar lebih optimal dan terukur.',
    tech_stack: 'Laravel, Alpine.js, Tailwind CSS, MySQL, Railway',
    image_path: '/assets/images/projects/study-timer.jpg',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/smart-study-timer'
  },
  {
    title: 'OneTimeURL (OTU)',
    description: 'Sistem one-time URL yang dikembangkan saat magang di PT Finnet Indonesia. Setiap URL hanya dapat diakses sekali dengan autentikasi JWT token untuk keamanan transfer data sensitif antar pihak.',
    tech_stack: 'React.js, Node.js, JWT, REST API',
    image_path: '/assets/images/projects/onetimeurl.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/OneTimeURL-OTU-'
  },
  {
    title: 'Website Profesional SAB Tour & Travel',
    description: 'Membangun landing page modern dan platform web operasional untuk bisnis tour & travel keluarga, termasuk katalog paket perjalanan serta pencatatan keuangan digital.',
    tech_stack: 'HTML, Tailwind CSS, PHP (Laravel), Docker (Sail), Vercel, Figma',
    image_path: '/assets/images/projects/sab-tour.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/SABTOURS'
  },
  {
    title: 'Sistem Deteksi Bahasa Isyarat BISINDO',
    description: 'Mengembangkan prototipe Computer Vision untuk mendeteksi dan menerjemahkan Bahasa Isyarat Indonesia (BISINDO) secara real-time berdasarkan koordinat landmark tangan.',
    tech_stack: 'Python, OpenCV, MediaPipe, Computer Vision',
    image_path: '/assets/images/projects/bisindo.png',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19'
  },
  {
    title: 'Local Retrieval-Augmented Generation (RAG) System',
    description: 'Membangun sistem kecerdasan buatan lokal yang dapat memproses dan menjawab pertanyaan berdasarkan dokumen spesifik dengan arsitektur RAG, menjaga privasi data karena berjalan di local environment.',
    tech_stack: 'LangChain, Ollama, Python, FAISS',
    image_path: '/assets/images/projects/local-rag.jpg',
    link: null,
    github_link: 'https://github.com/RusdiansyahAlief19/LocalRAG'
  }
];

export const experiences = [
  {
    period: 'Agu 2026 - Des 2026',
    type: 'Teaching',
    title: 'Asisten Praktikum Analisis & Perancangan Sistem (APS)',
    organization: 'Fakultas Ilmu Komputer, Universitas Brawijaya',
    description: 'Membimbing dan menilai mahasiswa dalam siklus SDLC. Mengajarkan pemodelan data terstruktur (ERD), alur sistem, serta prototyping interaktif dengan Figma, hingga fasilitasi implementasi teknis dari desain ke sistem fungsional.'
  },
  {
    period: '2025',
    type: 'Organization',
    title: 'Ketua Pelaksana (Chairman) RECON',
    organization: 'HMDTIF Universitas Brawijaya',
    description: 'Memimpin perencanaan dan eksekusi kunjungan industri ke Telkom Infrastruktur Surabaya. Mengelola anggaran, perizinan, timeline, serta koordinasi stakeholder agar acara berjalan tertib dan tepat sasaran.'
  },
  {
    period: '2025 - 2026',
    type: 'Organization',
    title: 'Badan Pengurus Internal — Human Resources',
    organization: 'HMDTIF Universitas Brawijaya',
    description: 'Berperan sebagai Badan Pengurus Internal dengan fokus Human Resource dan kemampuan manajemen yang kuat: memfasilitasi rekrutmen internal, evaluasi kinerja, sesi LGD, program Staff of the Month, serta komunikasi internal untuk menjaga sinergi organisasi.'
  },
  {
    period: 'Agu 2024 - Des 2026',
    type: 'Work',
    title: 'Full-Stack Developer & IT Support',
    organization: 'SAB Tour & Travel',
    description: 'Merancang, mengembangkan, dan memelihara platform web operasional serta portal pemesanan paket wisata end-to-end. Membangun antarmuka responsif, mengintegrasikan arsitektur backend untuk manajemen order, katalog, dan pencatatan keuangan, serta mengelola konfigurasi server, deployment cloud, dan domain.'
  },
  {
    period: 'Agu 2024 - Sekarang',
    type: 'Education',
    title: 'S1 Teknik Informatika',
    organization: 'Universitas Brawijaya (FILKOM)',
    description: 'Fokus pada Software Engineering, struktur data & algoritma, analisis & perancangan sistem, serta jaringan komputer. Aktif berorganisasi di HMDTIF dengan peran strategis di bidang Human Resource dan leadership.'
  },
  {
    period: 'Des 2023 - Apr 2024',
    type: 'Internship',
    title: 'Junior Web Developer',
    organization: 'PT Finnet Indonesia',
    description: 'Mengembangkan dan mengintegrasikan antarmuka web interaktif dengan React.js untuk digitalisasi alur kerja internal. Membangun modul backend berbasis Go (Golang), mengonfigurasi lingkungan dengan Docker, serta berkolaborasi dalam tim engineering menggunakan Agile/Scrum dan Git.'
  },
  {
    period: '2021 - Sekarang',
    type: 'Freelance',
    title: 'Master of Ceremony (MC) & Event Committee',
    organization: 'Berbagai Acara',
    description: 'Memandu berbagai acara formal dan non-formal sejak masa SMK hingga kuliah. Terlibat dalam manajemen acara, penyusunan proposal sponsorship, dan kepanitiaan di berbagai perhelatan penting.'
  },
  {
    period: 'Jul 2021 - Jul 2024',
    type: 'Education',
    title: 'Rekayasa Perangkat Lunak',
    organization: 'SMK Telkom Malang',
    description: 'Memperdalam fondasi OOP, web development, dan database. Fokus pada pengembangan front-end khususnya React.js, serta aktif berorganisasi dan dipercaya sebagai Master of Ceremony (MC).'
  }
];
