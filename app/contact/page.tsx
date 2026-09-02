'use client'

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-custom">
          <h1 className="text-6xl font-light text-black mb-4 tracking-wide">Get in Touch</h1>
          <p className="text-gray-600 font-light">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-2xl">
          <form className="space-y-8">
            <div>
              <label className="block text-sm font-light tracking-widest mb-3 uppercase">Name</label>
              <input
                type="text"
                className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-light tracking-widest mb-3 uppercase">Email</label>
              <input
                type="email"
                className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-light tracking-widest mb-3 uppercase">Subject</label>
              <input
                type="text"
                className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-light tracking-widest mb-3 uppercase">Message</label>
              <textarea
                className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light h-32 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-black text-white font-light tracking-widest hover:bg-gray-900 transition-all">
              SEND
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-light text-black mb-12 tracking-wide">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-light mb-3 text-sm tracking-widest uppercase">Email</h3>
              <a href="mailto:skintones.co@gmail.com" className="text-black font-light hover:underline">skintones.co@gmail.com</a>
            </div>
            <div>
              <h3 className="font-light mb-3 text-sm tracking-widest uppercase">Instagram</h3>
              <a href="https://www.instagram.com/p/DQKbQGuEvUp/" target="_blank" rel="noopener noreferrer" className="text-black font-light hover:underline">@skintones.co</a>
            </div>
            <div>
              <h3 className="font-light mb-3 text-sm tracking-widest uppercase">Location</h3>
              <p className="text-gray-700 font-light">881 San Bruno Ave W</p>
              <p className="text-gray-700 font-light">San Bruno, CA 94066</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
