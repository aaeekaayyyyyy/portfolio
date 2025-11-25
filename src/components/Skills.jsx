export default function Skills() {
  const skillCategories = [
    {
      title: 'ML/AI',
      icon: '🧠',
      skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning', 'LLMs', 'Reinforcement Learning', 'Generative AI']
    },
    {
      title: 'MLOps & Cloud',
      icon: '☁️',
      skills: ['MLflow', 'Docker', 'Kubernetes', 'GKE', 'AWS SageMaker', 'GCP Vertex AI', 'Airflow', 'Model Deployment']
    },
    {
      title: 'Data Engineering',
      icon: '📊',
      skills: ['PubSub', 'BigQuery', 'pandas', 'NumPy', 'ETL Pipelines', 'Large-scale Data Processing']
    },
    {
      title: 'Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript/TypeScript', 'C++', 'C#', 'SQL']
    },
    {
      title: 'Web Frameworks',
      icon: '🌐',
      skills: ['React', 'Angular', 'FastAPI', 'Flask', 'Node.js', 'ASP.NET MVC', 'Streamlit']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB', 'MS SQL Server', 'BigQuery']
    }
  ]

  return (
    <section id="skills" className="section-container relative">
      <h2 className="section-title">Technical Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="card card-3d group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                {category.icon}
              </span>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary-600/20 to-primary-500/20 text-primary-300 rounded-lg text-sm font-medium border border-primary-500/30 hover:border-primary-400 hover:from-primary-600/30 hover:to-primary-500/30 transition-all transform hover:scale-110 hover:rotate-1 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

