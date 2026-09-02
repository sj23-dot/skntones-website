'use client'

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Collection Drop 2026', category: 'Fashion' },
    { id: 2, title: 'Community Art Exhibit', category: 'Art' },
    { id: 3, title: 'Street Style Moments', category: 'Photography' },
    { id: 4, title: 'Design Process', category: 'Behind the Scenes' },
    { id: 5, title: 'Event Highlights', category: 'Events' },
    { id: 6, title: 'Artist Collaboration', category: 'Art' },
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-custom">
          <h1 className="text-6xl font-light text-black mb-4 tracking-wide">Gallery</h1>
          <p className="text-gray-600 font-light">Moments from our creative journey</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-sm h-80 cursor-pointer"
              >
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 text-4xl font-light">Image</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-xl font-light text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm font-light">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}