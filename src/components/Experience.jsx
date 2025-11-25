import { FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      company: 'Ubiquiti',
      location: 'Gurugram',
      position: 'Machine Learning Engineer',
      period: 'March 2025 - August 2025',
      achievements: [
        'Built real-time computer vision pipelines using PyTorch, TensorFlow, and OpenCV for object detection (People, Vehicles, Animals, Loitering), achieving 23% accuracy improvement on embedded edge NVR systems',
        'Developed scalable FAISS vector search with metadata tagging for natural-language event queries, serving 50K+ monthly users with 65% search time reduction',
        'Optimized model inference using ONNX Runtime and TensorRT, reducing latency by 37% and model size by 42 MB for edge deployment'
      ]
    },
    {
      company: 'Blusmart',
      location: 'Gurugram',
      position: 'Full-stack AI Developer',
      period: 'October 2024 - March 2025',
      achievements: [
        'Built surge prediction system with Flask/XGBoost APIs, increasing dashboard usage by 54% and reducing fleet wait times by 18% through real-time ML predictions',
        'Developed spatial-temporal ML models using DBSCAN and Prophet, achieving 28% improvement in ride demand prediction across 5 city launches',
        'Architected full-stack workflow achieving 99.97% uptime, processing 12,000+ daily ride events'
      ]
    },
    {
      company: 'o9 Solutions',
      location: 'Bangalore',
      position: 'Associate Software Engineer Intern (GenAI Team)',
      period: 'January 2024 - August 2024',
      achievements: [
        'Built ETL pipelines with PubSub and BigQuery, processing 2M+ procurement data rows monthly for ML model training',
        'Deployed ML models on GKE using Airflow, following cloud computing and AI deployment best practices',
        'Participated in code reviews to ensure ML workflow correctness and reliability'
      ]
    }
  ]

  return (
    <section id="experience" className="section-container relative">
      <h2 className="section-title">Professional Experience</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card card-3d group relative pl-8 border-l-4 border-primary-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-card animate-pulse" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-2 glow-text">
                  {exp.company}
                </h3>
                <p className="text-xl text-primary-400 font-semibold mb-2 flex items-center gap-2">
                  <FaRocket className="text-primary-500" />
                  {exp.position}
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 rounded-lg">
                  <FaCalendarAlt className="text-primary-400" />
                  <span className="text-primary-300 font-medium text-sm">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaMapMarkerAlt className="text-primary-500" />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mt-6">
              {exp.achievements.map((achievement, achIndex) => (
                <li
                  key={achIndex}
                  className="text-gray-300 flex items-start group/item hover:text-primary-300 transition-colors"
                >
                  <span className="text-primary-500 mr-3 mt-1.5 text-lg group-hover/item:scale-125 transition-transform">▸</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

