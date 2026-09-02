'use client'

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Spring Collection Launch',
      date: 'March 15, 2026',
      location: 'San Bruno, CA',
      desc: 'Join us for the unveiling of our latest spring collection.'
    },
    {
      id: 2,
      title: 'Community Art Workshop',
      date: 'March 22, 2026',
      location: 'Skintones Studio',
      desc: 'An intimate gathering for design fundamentals and creative exploration.'
    },
    {
      id: 3,
      title: 'Artist Collaboration Showcase',
      date: 'April 5, 2026',
      location: 'San Bruno, CA',
      desc: 'Celebrating the work of diverse artists and cultural creators.'
    },
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-custom">
          <h1 className="text-6xl font-light text-black mb-4 tracking-wide">Events</h1>
          <p className="text-gray-600 font-light">Connect with our community</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-2xl">
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="pb-8 border-b border-gray-200 last:border-b-0">
                <h3 className="text-3xl font-light text-black mb-3">{event.title}</h3>
                <p className="text-gray-500 font-light tracking-widest uppercase text-sm mb-2">{event.date}</p>
                <p className="text-gray-600 font-light mb-4">{event.location}</p>
                <p className="text-gray-700 font-light leading-relaxed mb-6">{event.desc}</p>
                <button className="px-6 py-3 border border-black text-black font-light tracking-widest text-sm hover:bg-black hover:text-white transition-all">
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}