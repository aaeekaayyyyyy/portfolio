import { FaCalendarAlt, FaMapMarkerAlt, FaFlask } from 'react-icons/fa'

export default function Research() {
  return (
    <section id="research" className="section-container relative">
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="section-title">Research Experience & Aspirations</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto text-lg">
          My passion lies in <span className="text-primary-400 font-semibold">machine learning research.</span>, 
          I aspire to contribute to the research community by doing research in Natural Language Processing and Reinforcement Learning
          by developing novel algorithms and advancing our understanding of how ML models work.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="card card-3d group relative pl-8 border-l-4 border-primary-500">
          <div className="absolute -left-2 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-card animate-pulse" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-2 glow-text">
                Thapar Institute of Engineering & Technology, Patiala
              </h3>
              <p className="text-xl text-primary-400 font-semibold mb-2 flex items-center gap-2">
                <FaFlask className="text-primary-500" />
                AI/ML Research Associate
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 rounded-lg">
                <FaCalendarAlt className="text-primary-400" />
                <span className="text-primary-300 font-medium text-sm">June 2022 - June 2023</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-primary-500" />
                <span className="text-sm">Patiala</span>
              </div>
            </div>
          </div>
          <ul className="space-y-3 mt-6">
            <li className="text-gray-300 flex items-start group/item hover:text-primary-300 transition-colors">
              <span className="text-primary-500 mr-3 mt-1.5 text-lg group-hover/item:scale-125 transition-transform">▸</span>
              <span className="leading-relaxed">Investigated gender and racial bias perpetuation in popular ML models (GPT, BERT, image classifiers) and mitigation strategies</span>
            </li>
            <li className="text-gray-300 flex items-start group/item hover:text-primary-300 transition-colors">
              <span className="text-primary-500 mr-3 mt-1.5 text-lg group-hover/item:scale-125 transition-transform">▸</span>
              <span className="leading-relaxed">Analyzed gender bias in NLP models, identifying a 19% outcome disparity in text classification tasks</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

