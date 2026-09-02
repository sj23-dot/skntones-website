'use client'

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-custom">
          <h1 className="text-6xl font-light text-black mb-4 tracking-wide">About</h1>
          <p className="text-gray-600 font-light">Our story, values, and vision</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-2xl">
          <h2 className="text-4xl font-light text-black mb-8 tracking-wide">Our Story</h2>
          <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
            <p>
              Skintones.co began as a vision to create a space where art, fashion, and community could exist in meaningful conversation. What started as a clothing brand has evolved into something deeper—a platform for creative expression and cultural celebration.
            </p>
            <p>
              Based in San Bruno, California, we are committed to thoughtful design that honors diverse voices and perspectives. Every piece we create carries intention. Every collaboration strengthens our community.
            </p>
            <p>
              Today, Skintones.co represents more than apparel. We are a collective of artists, designers, and cultural visionaries dedicated to authentic expression and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Authenticity', desc: 'We create with intention and celebrate genuine expression.' },
              { title: 'Community', desc: 'We build spaces where diverse voices are heard and valued.' },
              { title: 'Artistry', desc: 'We believe in the power of thoughtful design and creative vision.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-light text-black mb-4 tracking-wide">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}