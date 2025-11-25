import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Swaad: AI-powered Flavor Profiling',
      description: 'Built full-stack recommendation system using FastAPI, React, and Vite with ML-powered flavor profiling (NumPy, pandas, scikit-learn, cosine similarity). Integrated OCR (EasyOCR/Tesseract) for automated menu digitization and deployed RESTful API with radar chart visualizations.',
      repo: 'https://github.com/aaeekaayyyyyy/swaad',
      tech: ['FastAPI', 'React', 'Vite', 'NumPy', 'pandas', 'scikit-learn', 'OCR', 'EasyOCR', 'Tesseract'],
      icon: '🍽️'
    },
    {
      title: 'LLM-Powered Book Discovery Engine',
      description: 'Built semantic book recommender using OpenAI embeddings and ChromaDB vector search, achieving 84% satisfaction. Integrated zero-shot HuggingFace models for emotion/genre detection with Streamlit UI.',
      repo: 'https://github.com/aaeekaayyyyyy/book-recommender',
      tech: ['OpenAI', 'ChromaDB', 'HuggingFace', 'Streamlit', 'Vector Search', 'NLP'],
      icon: '📚'
    },
    {
      title: 'Wind Voice Assistant',
      description: 'Built desktop voice assistant for Windows using Python with OpenAI GPT APIs, enabling app control (Spotify, WhatsApp, Google Calendar) and reducing manual effort by 42%.',
      repo: 'https://github.com/aaeekaayyyyyy/Wind_for_public',
      tech: ['Python', 'OpenAI GPT', 'Voice Recognition', 'Windows Automation'],
      icon: '🎤'
    }
  ]

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title">My Favorite Personal Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card card-3d group flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                {project.icon}
              </span>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 flex-grow">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary-600/20 to-primary-500/20 text-primary-300 rounded-lg text-xs font-medium border border-primary-500/30 hover:border-primary-400 hover:from-primary-600/30 hover:to-primary-500/30 transition-all transform hover:scale-110"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600/20 to-primary-500/20 text-primary-400 rounded-lg font-semibold transition-all border border-primary-500/30 hover:border-primary-400 hover:from-primary-600/30 hover:to-primary-500/30 transform hover:scale-105"
            >
              <FaGithub className="group-hover/link:rotate-12 transition-transform" />
              <span>View Repository</span>
              <FaExternalLinkAlt size={12} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
      
      {/* GitHub CTA */}
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-gray-400 text-sm mb-3">
          There are many other projects worth a look on my{' '}
          <a
            href="https://github.com/aaeekaayyyyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <FaGithub className="text-xs group-hover:rotate-12 transition-transform" />
            <span className="underline">GitHub</span>
            <FaExternalLinkAlt size={10} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </p>
      </div>
    </section>
  )
}

