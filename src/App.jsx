import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

/* ===== IMPORT PROJECT IMAGES (Vite-correct) ===== */
import umichShop from "./assets/UMWiFI.png";
import icuImg from "./assets/image-3188-1024x683.png";
import bioImg from "./assets/lungs.png";

export default function App() {
  return (
    <div className="bg-background text-text font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shrisha</h1>
      <div className="flex gap-6 text-text/70">
        <a href="#about" className="hover:text-text">About</a>
        <a href="#skills" className="hover:text-text">Skills</a>
        <a href="#projects" className="hover:text-text">Projects</a>
        <a href="#experience" className="hover:text-text">Experience</a>
        <a href="#contact" className="hover:text-text">Contact</a>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* GRADIENT BACKGROUND (fallback when Spline is off) */}
      {/* GRADIENT + GLOW BACKGROUND */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-heroStart via-card to-heroEnd opacity-90" />
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
      </div>



      {/* SPLINE BACKGROUND */}
      {/* <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/ZVDjEYHzsq6fLlEA/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div> */}

      

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-[#E5F9F8] via-[#12B2C1] to-[#0D8A9E] bg-clip-text text-transparent">
                Shrisha
              </span>
            </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-10 leading-relaxed text-[#E5F9F8]/90">
          Computer Science student at the University of Michigan focused on{" "}
          <span className="text-[#12B2C1] font-medium">full-stack development</span>,{" "}
          <span className="text-[#12B2C1] font-medium">data science</span>, and{" "}
          <span className="text-[#12B2C1] font-medium">applied machine learning</span>.
        </p>


        <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl font-semibold
                    bg-gradient-to-r from-[#12B2C1] to-[#0D8A9E]
                    text-[#1F2B2D]
                    shadow-lg shadow-[#12B2C1]/30
                    hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#resume"
          className="px-6 py-3 rounded-xl border border-[#E5F9F8]/40
                    text-[#E5F9F8]
                    backdrop-blur-sm
                    hover:bg-[#E5F9F8]/10 transition"
        >
          Resume
        </a>
      </div>

      </div>

    </section>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section id="about" className="max-w-prose mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-text/80 text-justify hyphens-auto leading-[1.4]">
        I’m a Computer Science student in the University of Michigan College of Engineering,
        graduating in May 2026. My academic and research experience spans software engineering,
        data science, and machine learning, with a particular interest in building systems that
        are robust, maintainable, and grounded in real-world constraints.
      </p>

      <p className="text-text/80 text-justify hyphens-auto leading-[1.4] mt-4">
        Outside of coursework, I enjoy drawing and playing the violin.
      </p>
    </section>
  );
}

/* ================= SKILLS ================= */

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <SkillGroup title="Languages" items={["Python", "C", "C++", "R", "JavaScript", "SQL", "HTML/CSS"]} />
        <SkillGroup title="Libraries" items={["React", "scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Seaborn"]} />
        <SkillGroup title="Development" items={["FastAPI", "REST APIs", "AWS EC2", "GitHub", "Linux"]} />
        <SkillGroup title="Machine Learning" items={["Supervised & Unsupervised Learning", "Feature Engineering", "Cross-Validation", "ROC Analysis"]} />
      </div>
    </section>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="bg-card rounded-2xl p-6">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span key={item} className="px-3 py-1 text-sm rounded-full bg-background/50">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="UMich One-Stop Shop"
          stack="React · FastAPI · Python"
          image={umichShop}
          description="Centralized student platform for personalized campus recommendations."
          bullets={[
            "Built backend authentication and data handling with FastAPI",
            "Designed survey-based recommendation logic",
            "Acted as project manager for a 3-person team"
          ]}
        />

        <ProjectCard
          title="Predicting ICU Patient Mortality"
          stack="Python · scikit-learn"
          image={icuImg}
          description="Machine learning models for predicting in-hospital ICU mortality."
          bullets={[
            "Implemented logistic regression and SVM models",
            "Applied cross-validation and hyperparameter tuning",
            "Evaluated sensitivity vs. specificity trade-offs"
          ]}
        />

        <ProjectCard
          title="Bioinformatics Data Pipeline"
          stack="Python · R · HPC"
          image={bioImg}
          description="Computational pipeline for transcriptomic and genomic data analysis on HPC clusters."
          bullets={[
            "Preprocessed and normalized large-scale gene expression data",
            "Integrated transcriptomic datasets across experiments",
            "Built reproducible analysis scripts in Python and R"
          ]}
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, stack, description, bullets, image }) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden hover:-translate-y-2 transition">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-text/60 mb-3">{stack}</p>
        <p className="text-text/80 text-justify hyphens-auto leading-[1.4] mb-4">
          {description}
        </p>
        <ul className="list-disc list-inside text-text/80 space-y-1">
          {bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

/* ================= EXPERIENCE ================= */

function Experience() {
  return (
    <section id="experience" className="max-w-prose mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <ExperienceCard
        role="Data Analytics Intern"
        org="Chandrasekaran Lab"
        time="May 2025 – Aug 2025 · Remote"
        points={[
          "Reviewed 50+ PubMed papers on metabolic pathway analysis",
          "Integrated transcriptomic and proteomic datasets",
          "Produced a 10-page research report"
        ]}
      />

      <ExperienceCard
        role="SCOOTI Program Research Assistant"
        org="Chandrasekaran Lab"
        time="Aug 2024 – Feb 2025 · Remote"
        points={[
          "Developed computational tools for metabolic analysis",
          "Preprocessed transcriptomics data",
          "Wrote Python and R analysis scripts"
        ]}
      />

      <ExperienceCard
        role="UROP Genetics Research Assistant"
        org="Antonellis Lab · University of Michigan"
        time="Jan 2023 – Apr 2023 · Ann Arbor, MI"
        points={[
          "Performed molecular biology techniques including PCR, gene cloning, and Sanger sequencing",
          "Conducted gene analysis and assisted with experimental design for genetics research projects",
          "Presented research findings at the Spring 2023 UROP Symposium, communicating results to both technical and non-technical audiences"
        ]}
      />

    </section>
  );
}

function ExperienceCard({ role, org, time, points }) {
  return (
    <div className="bg-card rounded-2xl p-6 mb-6">
      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-text/60">{org} · {time}</p>
      <ul className="list-disc list-inside mt-3 text-text/80 space-y-1">
        {points.map(p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section id="contact" className="max-w-prose mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-text/80 text-justify hyphens-auto leading-[1.4] mb-8">
        I’m currently seeking full-time positions and research opportunities in software engineering,
        data science, and applied machine learning.
      </p>
      <a
        href="mailto:shrisha500@gmail.com"
        className="px-8 py-3 rounded-2xl bg-accent text-background font-semibold hover:opacity-80 transition"
      >
        Email Me
      </a>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="py-6 text-center text-text/60">
      © 2026 Shrisha · Built with React & Tailwind
    </footer>
  );
}
