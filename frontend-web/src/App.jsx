import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills, projects, experiences } from './data';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 50, width: '95%', maxWidth: '56rem' }}
          className="bg-jcrea-gray/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between gap-8 border border-white/10 shadow-2xl"
          data-aos="fade-down">

        <div className="hidden md:flex items-center gap-6 flex-1">
            <a href="#home" className="bg-jcrea-orange text-white px-5 py-2 rounded-full font-semibold text-sm shadow-[0_0_15px_rgba(255,107,0,0.4)]">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white font-medium text-sm transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white font-medium text-sm transition-colors">Skills</a>
        </div>

        <div className="font-black text-2xl tracking-tighter text-white flex-shrink-0">
            Alief<span className="text-jcrea-orange">.</span>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            <a href="#projects" className="text-gray-400 hover:text-white font-medium text-sm transition-colors">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white font-medium text-sm transition-colors">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white font-medium text-sm transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-jcrea-orange/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="text-center z-10" data-aos="zoom-in" data-aos-duration="1200">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-jcrea-gray/50 rounded-full px-4 py-1.5 text-sm mb-6 text-gray-300">
                <span>👋</span> Hi there!
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-2">
                I'm <span className="text-jcrea-orange">Alief</span>,
            </h1>
            <h2 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 mb-10">
                A Software Engineer
            </h2>
        </div>

        <div className="relative z-10" data-aos="fade-up" data-aos-delay="300">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-jcrea-gray rounded-full border-4 border-jcrea-gray outline outline-2 outline-jcrea-orange/50 overflow-hidden mb-8 shadow-2xl flex items-center justify-center mx-auto relative group">
                <div className="absolute inset-0 bg-jcrea-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img src="/assets/images/profil tengah.jpeg" className="w-full h-full object-cover" alt="Profile" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-max mx-auto">
                <a href="#projects" className="bg-jcrea-orange text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.4)] flex items-center gap-2 w-full sm:w-auto justify-center">
                    Lihat Proyek Saya
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
                <a href="/docs/CV_Alief.pdf" target="_blank" rel="noreferrer" className="border border-white/20 hover:border-white/50 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/5 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto justify-center">
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
            </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-jcrea-orange">Me</span></h3>
            <p className="text-gray-400">Sedikit cerita tentang perjalanan dan ketertarikan saya.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 bg-jcrea-gray/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 shadow-xl text-gray-300 leading-relaxed text-lg" data-aos="fade-right" data-aos-delay="100">
                <p className="mb-6">
                    Halo! Saya <strong className="text-white">Rusdiansyah Alief</strong>, mahasiswa Teknik Informatika di Universitas Brawijaya. Sebagai seorang <strong className="text-jcrea-orange">Software Engineer</strong>, saya memiliki gairah eksplorasi yang luas di berbagai spektrum teknologi, mulai dari rekayasa perangkat lunak hingga pemrosesan data cerdas.
                </p>
                <p className="mb-6">
                    Membangun fondasi kuat sejak SMK di bidang Rekayasa Perangkat Lunak, cakupan keahlian saya kini sangat komprehensif: merancang arsitektur web modern, mengembangkan kecerdasan buatan (<strong className="text-white">AI & Machine Learning</strong>), melakukan data preprocessing, hingga mendalami <strong className="text-white">Information Security</strong>.
                </p>
                <p>
                    Di luar penulisan kode, saya adalah komunikator yang antusias. Saya aktif mengelola Sumber Daya Manusia (HR) di HMDTIF UB dan kerap dipercaya menjadi <strong className="text-jcrea-orange">Master of Ceremony (MC)</strong> di berbagai perhelatan penting.
                </p>
            </div>
            
            <div className="md:col-span-5 space-y-6" data-aos="fade-left" data-aos-delay="300">
                <div className="bg-gradient-to-br from-jcrea-gray/60 to-jcrea-dark p-6 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-jcrea-orange/50 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-jcrea-orange/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-[2]"></div>
                    <h4 className="text-jcrea-orange font-bold text-xl mb-1 relative z-10">Pendidikan</h4>
                    <p className="text-white font-medium text-lg relative z-10">Universitas Brawijaya</p>
                    <p className="text-gray-400 text-sm relative z-10">S1 Teknik Informatika (Semester 4)</p>
                </div>

                <div className="bg-gradient-to-br from-jcrea-gray/60 to-jcrea-dark p-6 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-jcrea-orange/50 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-jcrea-orange/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-[2]"></div>
                    <h4 className="text-jcrea-orange font-bold text-xl mb-1 relative z-10">Fokus Keahlian</h4>
                    <p className="text-white font-medium text-lg relative z-10">Software Engineering</p>
                    <p className="text-gray-400 text-sm relative z-10">Web, AI, Security & Data</p>
                </div>

                <div className="bg-gradient-to-br from-jcrea-gray/60 to-jcrea-dark p-6 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-jcrea-orange/50 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-jcrea-orange/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-[2]"></div>
                    <h4 className="text-jcrea-orange font-bold text-xl mb-1 relative z-10">Komunikasi</h4>
                    <p className="text-white font-medium text-lg relative z-10">Public Speaking</p>
                    <p className="text-gray-400 text-sm relative z-10">MC, Event Organizing, HR Management</p>
                </div>
            </div>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section id="skills" className="py-24 px-4 max-w-6xl mx-auto bg-jcrea-gray/20">
        <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Skills & <span className="text-jcrea-orange">Tools</span></h3>
            <p className="text-gray-400">Teknologi dan alat yang sering saya gunakan.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="100">
            {skills.map((skill, index) => (
                <div key={index} className="bg-jcrea-gray/60 backdrop-blur-sm border border-white/10 hover:border-jcrea-orange/50 hover:bg-jcrea-orange/10 px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-2 cursor-default group shadow-lg">
                    <span className="font-bold text-gray-300 group-hover:text-white">{skill}</span>
                </div>
            ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-jcrea-orange">Projects</span></h3>
            <p className="text-gray-400">Beberapa karya terbaik yang pernah saya buat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? projects.map((item, index) => (
                <div key={index} className="bg-jcrea-gray/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-jcrea-orange/50 transition-all duration-500 group shadow-xl flex flex-col"
                    data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                    <div className="h-56 bg-black overflow-hidden relative">
                        <img src={item.image_path || 'https://via.placeholder.com/600x400?text=No+Image'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" alt={item.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-jcrea-dark via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-extrabold mb-3 text-white group-hover:text-jcrea-orange transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                            {item.description.length > 120 ? item.description.substring(0, 120) + '...' : item.description}
                        </p>
                        
                        {item.tech_stack && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tech_stack.split(',').map((tech, techIndex) => (
                                    <span key={techIndex} className="skill-tag">{tech.trim()}</span>
                                ))}
                            </div>
                        )}

                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                            {item.link && item.link !== '#' && (
                                <a href={item.link} target="_blank" rel="noreferrer" className="flex-1 bg-jcrea-orange/20 hover:bg-jcrea-orange text-jcrea-orange hover:text-white border border-jcrea-orange/50 text-center py-2 rounded-xl text-sm font-bold transition-all duration-300">
                                    Live Demo
                                </a>
                            )}
                            <a
                                href={item.github_link && item.github_link !== '#' ? item.github_link : 'https://github.com/RusdiansyahAlief19'}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 bg-jcrea-gray hover:bg-white hover:text-black border border-white/20 text-center py-2 rounded-xl text-sm font-bold transition-all duration-300"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="col-span-full text-center text-gray-500">Belum ada proyek yang ditambahkan.</div>
            )}
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section id="experience" className="py-24 px-4 max-w-4xl mx-auto bg-jcrea-gray/20 rounded-3xl">
        <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Experience & <span className="text-jcrea-orange">Education</span></h3>
            <p className="text-gray-400">Jejak perjalanan karir dan pendidikan saya.</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-jcrea-orange/50 before:to-transparent">
            
            {experiences.length > 0 ? experiences.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" data-aos="fade-up">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-jcrea-dark bg-jcrea-orange text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-jcrea-gray/60 border border-white/5 hover:border-jcrea-orange/30 transition-all shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-jcrea-orange font-bold text-sm tracking-wide">{item.period || 'Past - Present'}</span>
                            <span className="bg-black/30 text-xs px-2 py-1 rounded-md text-gray-400 uppercase tracking-wider">{item.type}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                        <h5 className="text-sm font-medium text-gray-400 mb-3">{item.organization}</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>
            )) : (
                <div className="text-center text-gray-500 w-full">Belum ada pengalaman yang ditambahkan.</div>
            )}
        </div>
      </section>

      {/* CONTACT ME */}
      <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="bg-jcrea-gray/40 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-jcrea-orange/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-jcrea-orange">Connect!</span></h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Tertarik untuk bekerja sama, diskusi soal teknologi, atau sekadar menyapa? Jangan ragu untuk menghubungi saya melalui form atau media sosial di bawah ini.
                    </p>
                    
                    <div className="space-y-4">
                        <a href="mailto:email@example.com" className="flex items-center gap-4 text-gray-300 hover:text-jcrea-orange transition-colors group">
                            <div className="w-12 h-12 bg-black/30 rounded-xl flex items-center justify-center group-hover:bg-jcrea-orange/20 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <span className="font-medium text-lg">Email Me</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-jcrea-orange transition-colors group">
                            <div className="w-12 h-12 bg-black/30 rounded-xl flex items-center justify-center group-hover:bg-jcrea-orange/20 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </div>
                            <span className="font-medium text-lg">LinkedIn</span>
                        </a>
                        <a href="https://github.com/RusdiansyahAlief19" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-jcrea-orange transition-colors group">
                            <div className="w-12 h-12 bg-black/30 rounded-xl flex items-center justify-center group-hover:bg-jcrea-orange/20 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </div>
                            <span className="font-medium text-lg">GitHub</span>
                        </a>
                    </div>
                </div>
                
                <div className="bg-black/20 p-8 rounded-3xl border border-white/5">
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Nama</label>
                            <input type="text" className="w-full bg-jcrea-gray/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jcrea-orange transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input type="email" className="w-full bg-jcrea-gray/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jcrea-orange transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Pesan</label>
                            <textarea rows="4" className="w-full bg-jcrea-gray/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-jcrea-orange transition-colors" placeholder="Tulis pesan Anda..."></textarea>
                        </div>
                        <button type="button" onClick={() => alert('Ini hanya demo form. Anda bisa menggunakan Formspree/EmailJS untuk mengaktifkannya.')} className="w-full bg-jcrea-orange hover:bg-[#cc5500] text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-12">
        <p>&copy; {new Date().getFullYear()} Rusdiansyah Alief. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
