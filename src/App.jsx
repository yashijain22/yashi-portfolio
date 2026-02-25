import { motion } from "framer-motion"
import profile from "./assets/Yashi.jpeg"

function App() {
  return (
    <div className="bg-white text-slate-800 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Yashi Jain</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Hi, I'm Yashi Jain
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              AI/ML & Python Developer building intelligent and scalable backend systems.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="border px-6 py-3 rounded-xl">
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-black text-white"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="Yashi Jain"
              className="w-64 h-64 object-cover rounded-2xl shadow-md"
            />
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10">About</h3>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h4 className="text-xl font-semibold mb-4">Profile Summary</h4>
              <p className="text-slate-600">
                Python Backend Developer experienced in building secure, scalable
                web applications using FastAPI, Flask, and SQLAlchemy.
                Strong in REST architecture, JWT authentication and database optimization.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "FastAPI",
                  "Flask",
                  "React",
                  "SQL",
                  "Machine Learning",
                  "Git",
                  "Data Structures"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-slate-100 rounded-full border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10">Projects</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Elysia – AI Chat App",
              "Password Generator Web App",
              "Job Recommendation System",
              "AI Exam Proctoring",
              "AI Finance Assistant",
              "Task Manager App"
            ].map((project, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg">{project}</h4>
                <p className="text-slate-600 mt-3 text-sm">
                  Backend-focused application with intelligent architecture and clean implementation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>

          <p>
            <a href="mailto:yashi2212.jain@gmail.com">
              yashi2212.jain@gmail.com
            </a>
          </p>

          <p>
            <a href="tel:6350202035">
              +91 6350202035
            </a>
          </p>

          <p>
            <a href="https://linkedin.com/in/yashijain22" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>

          <p>
            <a href="https://github.com/yashijain22" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>

        </div>
      </section>

      <footer className="py-10 text-center text-sm border-t">
        © {new Date().getFullYear()} Yashi Jain
      </footer>

    </div>
  )
}

export default App