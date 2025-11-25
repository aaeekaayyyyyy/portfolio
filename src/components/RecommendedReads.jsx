import { FaBook, FaExternalLinkAlt } from 'react-icons/fa'

export default function RecommendedReads() {
  const books = [
    {
      title: 'Why Machines Learn',
      author: 'Anil Ananthaswamy',
      url: 'https://www.amazon.com/Why-Machines-Learn-Elegant-Behind/dp/0593185749',
      description: 'An elegant exploration of the mathematical and conceptual foundations behind machine learning, making complex ideas accessible.'
    },
    {
      title: 'The Alignment Problem',
      author: 'Brian Christian',
      url: 'https://www.amazon.com/Alignment-Problem-Machine-Learning-Values/dp/0393635821',
      description: 'A deep dive into how machine learning systems can align with human values and the challenges of building ethical AI.'
    },
    {
      title: 'Understanding Deep Learning',
      author: 'Simon J. D. Prince',
      url: 'https://udlbook.github.io/udlbook/',
      description: 'A comprehensive textbook that provides a thorough understanding of deep learning principles, from fundamentals to advanced topics.'
    }
  ]

  return (
    <section id="recommended-reads" className="section-container relative">
      <h2 className="section-title">Recommended Reads</h2>
      <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Essential books that have shaped my understanding of machine learning and AI research. 
        These works explore the theoretical foundations, ethical considerations, and deep technical insights that drive the field forward.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="card card-3d group flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary-500/20 rounded-lg text-primary-300 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <FaBook size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">by {book.author}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
              {book.description}
            </p>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600/20 to-primary-500/20 text-primary-400 rounded-lg font-semibold transition-all border border-primary-500/30 hover:border-primary-400 hover:from-primary-600/30 hover:to-primary-500/30 transform hover:scale-105"
            >
              <span>Read More</span>
              <FaExternalLinkAlt size={12} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

