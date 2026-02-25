import { motion } from "framer-motion"
import profile from "./assets/Yashi.jpeg"

function App() {
  return (
    <div className="bg-white text-slate-800 scroll-smooth">

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Yashi Jain</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#projects" className="hover:text-black transition">Projects</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm Yashi Jain
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              AI/ML & Python Developer building intelligent and scalable backend systems.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="border border-slate-800 px-6 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
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

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">About</h3>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Profile Summary */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Profile Summary</h4>
              <p className="text-slate-600 leading-relaxed">
                Python Backend Developer experienced in building secure, scalable web applications using FastAPI, Flask, and 
                SQLAlchemy. Strong in REST architecture, JWT authentication, OTP systems, and database optimization. 
                Skilled at writing efficient, maintainable code while enhancing backend performance through structured 
                design principles
              </p>
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "Object-Oriented Programming",
                  "API Integration",
                  "Data Visualization",
                  "Bootstrap",
                  "Natural Language Processing",
                  "Artificial Intelligence",
                  "Backend Development",
                  "SQL",
                  "Flask",
                  "Back-End Frameworks (E.G., Node.Js, Django)",
                  "React",
                  "Git",
                  "Machine Learning",
                  "Data Structures and Algorithms",
                  "Communication Skills"

                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-slate-100 rounded-full border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Projects</h3>

          <div className="grid md:grid-cols-3 gap-8">

            {/* 1 */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">Elysia – AI Powered Chat App</h4>
              <p className="text-slate-600 mt-3 text-sm">
                FastAPI backend with JWT authentication, OTP reset, SQLAlchemy ORM, async programming and OpenAI GPT integration.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Python • FastAPI • OpenAI • SQLAlchemy • JWT • React
              </div>
            </div>

            {/* 2 */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">Password Generator Web App</h4>
              <p className="text-slate-600 mt-3 text-sm">
                Secure Flask app with authentication, OTP reset (SendGrid), SQLite storage and CI/CD deployment.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Python • Flask • SQLite • Bootstrap • Render
              </div>
            </div>

            {/* 3 */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">Job Recommendation System</h4>
              <p className="text-slate-600 mt-3 text-sm">
                Personalized job suggestion platform using Python-based recommendation algorithms.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Python • ML Logic • Backend
              </div>
            </div>

            {/* 4 */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">AI Exam Proctoring System</h4>
              <p className="text-slate-600 mt-3 text-sm">
                Computer vision based system detecting suspicious activities during online exams.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Python • OpenCV • ML • Computer Vision
              </div>
            </div>

            {/* 5 */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">AI Powered Personal Finance Assistant</h4>
              <p className="text-slate-600 mt-3 text-sm">
                Intelligent assistant for expense tracking, budgeting insights and financial data analysis.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Python • AI Models • Data Analysis • APIs
              </div>
            </div>

            {/* 6 */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg">Task Manager Web App</h4>
              <p className="text-slate-600 mt-3 text-sm">
                CRUD-based task management system with authentication and clean UI design.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Python • Flask • SQLite • Frontend
              </div>
            </div>

          </div>
        </div>
      </section>

           {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <p className="text-slate-600 mb-10">
            Open to full-time opportunities, internships and AI-driven projects.
          </p>

          <div className="space-y-4 text-slate-700">
            <p>
              📧 Email: 
              <a
                href="mailto:yashi2212.jain@gmail.com"
                className="ml-1 text-slate-900 font-medium hover:underline"
              >
                yashi2212.jain@gmail.com
              </a>
            </p>

            <p>
              📱 Phone: 
              <a
                href="tel:6350202035"
                className="ml-1 text-slate-900 font-medium hover:underline"
              >
                +91 6350202035
              </a>
            </p>

            <p>
              🔗 LinkedIn: 
              <a
                href="https://linkedin.com/in/yashijain22"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-slate-900 font-medium hover:underline"
              >
                linkedin.com/in/yashijain22
              </a>
            </p>

            <p>
              💻 GitHub: 
              <a
                href="https://github.com/yashijain22"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-slate-900 font-medium hover:underline"
              >
                github.com/yashijain22
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Yashi Jain. All rights reserved.
      </footer>

    </div>
  )
}

export default App
