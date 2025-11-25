import { useState } from 'react'
import { FaQuestionCircle, FaTrophy, FaRedo } from 'react-icons/fa'

const questions = [
  {
    question: 'Which part of AI is Ayushman most passionate about?',
    options: ['Computer Vision', 'Natural Language Processing', 'Money', 'Research'],
    answer: 'Research',
    funFact: 'I hate to read in general but I love to read about research in NLP and RL.'
  },
  {
    question: 'Where is Ayushman pursuing his Master\'s degree?',
    options: ['John Hopkins University', 'Northeastern University', 'Case Western Reserve University', 'On the web'],
    answer: 'Northeastern University',
    funFact: 'I am pursuing an M.S. in Artificial Intelligence with advanced ML coursework.'
  },
  {
    question: 'Which technology powers Ayushman\'s LLM book recommender?',
    options: ['Azure Cognitive Search', 'ChromaDB', 'ElasticSearch', 'Pinecone'],
    answer: 'ChromaDB',
    funFact: 'The system blends OpenAI embeddings with ChromaDB for semantic retrieval.'
  },
  {
    question: 'What keeps ML systems reliable in production?',
    options: ['MLOps Pipelines', 'Random Seeds', 'Manual Deployment', 'Hope'],
    answer: 'MLOps Pipelines',
    funFact: 'I ship pipelines with MLflow, Airflow, Docker, and Kubernetes to keep things sane.'
  },
  {
    question: 'Which fun fact is true about Ayushman?',
    options: [
      'Built a Windows voice assistant',
      'Won MasterChef India',
      'Summited Mount Everest',
      'Invented Wi-Fi'
    ],
    answer: 'Built a Windows voice assistant',
    funFact: 'Wind Voice Assistant automates Spotify, WhatsApp, Calendar and more.'
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showSummary, setShowSummary] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleAnswer = (option) => {
    if (selectedOption || showSummary) return
    setSelectedOption(option)
    const isCorrect = option === questions[currentQuestion].answer
    if (isCorrect) {
      setScore((prev) => prev + 1)
      setFeedback('🔥 Nailed it! Ayushman-approved answer.')
    } else {
      setFeedback('🤔 Not quite! Try learning more about Ayushman.')
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption(null)
        setFeedback('')
      } else {
        setShowSummary(true)
      }
    }, 1200)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedOption(null)
    setShowSummary(false)
    setFeedback('')
  }

  const progress = ((currentQuestion + (showSummary ? 1 : 0)) / questions.length) * 100

  return (
    <section id="quiz" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-300/5 blur-3xl opacity-60 pointer-events-none" />
      <div className="relative z-10">
        <h2 className="section-title">Mini Quiz</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card card-3d">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-500/20 rounded-full text-primary-300">
                <FaQuestionCircle size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400">Interactive Fun</p>
                <h3 className="text-2xl font-semibold text-primary-300">Quiz Ayushman</h3>
              </div>
            </div>

            {!showSummary ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Question {currentQuestion + 1}/{questions.length}</span>
                    <span>Score: {score}</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-300 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                  {questions[currentQuestion].question}
                </p>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => {
                    const isSelected = selectedOption === option
                    const isCorrect = option === questions[currentQuestion].answer
                    let optionClasses =
                      'w-full text-left px-5 py-4 rounded-xl border border-gray-700 text-gray-200 transition-all duration-300 hover:border-primary-500 hover:-translate-y-0.5'
                    if (selectedOption) {
                      optionClasses += isCorrect
                        ? ' border-green-400/50 bg-green-500/20 text-green-200'
                        : isSelected
                          ? ' border-red-400/50 bg-red-500/20 text-red-200'
                          : ' opacity-60'
                    } else {
                      optionClasses += ' bg-dark-card'
                    }
                    return (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={optionClasses}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>

                {feedback && (
                  <div className="mt-6 p-4 rounded-xl bg-dark-surface border border-primary-500/30 text-primary-200 text-sm">
                    {feedback}
                    <p className="mt-2 text-gray-400 text-xs">
                      {questions[currentQuestion].funFact}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    <FaTrophy /> Final Score
                  </div>
                  <p className="text-5xl font-bold text-primary-300">{score}/{questions.length}</p>
                  <p className="text-gray-400">
                    {score >= 4 ? 'Elite! You know Ayushman really well.' : 'Nice! Keep exploring to learn even more.'}
                  </p>
                </div>

                <button
                  onClick={handleRestart}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-primary-500/40 text-primary-300 hover:bg-primary-500/10 transition-all"
                >
                  <FaRedo /> Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

