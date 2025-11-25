export default function Education() {
  const educations = [
    {
      university: 'Northeastern University',
      location: 'Boston, MA',
      degree: 'Master of Science in Artificial Intelligence',
      period: 'September 2025 - May 2027',
      coursework: [
        'Machine Learning',
        'Deep Learning',
        'Algorithms',
        'Natural Language Processing',
        'Mathematics for Machine Learning',
        'Statistics',
        'Linear Algebra',
        'Calculus',
        'Foundations of Artificial Intelligence'
      ]
    },
    {
      university: 'Thapar Institute of Engineering Technology',
      location: 'Patiala',
      degree: 'Bachelor of Engineering, Computer Science',
      period: '2020 - 2024',
      coursework: [
        'Data Structures and Algorithms',
        'Artificial Intelligence',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Computer Networks',
        'Mathematics for Engineering'
      ]
    }
  ]

  return (
    <section id="education" className="section-container relative">
      <h2 className="section-title">Education</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="card card-3d group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 mb-2 glow-text">
                  {edu.university}
                </h3>
                <p className="text-lg text-primary-400 font-semibold mb-1">
                  {edu.degree}
                </p>
                <p className="text-gray-400 text-sm">
                  {edu.location}
                </p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 rounded-lg">
                <p className="text-primary-300 font-medium text-sm md:text-base">
                  {edu.period}
                </p>
              </div>
            </div>
            {edu.coursework.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-300 font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-3">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-primary-500/20 text-primary-300 rounded-lg text-sm font-medium border border-primary-500/30 hover:border-primary-400 hover:from-primary-600/30 hover:to-primary-500/30 transition-all transform hover:scale-105"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

