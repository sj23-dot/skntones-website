'use client'

import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    allergies: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ fullName: '', email: '', phone: '', allergies: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-custom">
          <h1 className="text-6xl font-light text-black mb-4 tracking-wide">Book Your Appointment</h1>
          <p className="text-gray-600 font-light">Schedule your visit at Skintones.co</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-2xl">
          {submitted ? (
            <div className="bg-gray-50 border border-gray-200 p-8 text-center rounded-lg">
              <h2 className="text-3xl font-light text-black mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 font-light">Thank you for booking with us. We'll contact you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-light tracking-widest mb-3 uppercase">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-light tracking-widest mb-3 uppercase">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-light tracking-widest mb-3 uppercase">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Allergies & Medical Notes */}
              <div>
                <label className="block text-sm font-light tracking-widest mb-3 uppercase">Allergies & Medical Conditions</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-white border-b border-gray-300 focus:border-black focus:outline-none font-light h-32 resize-none"
                  placeholder="Please disclose any allergies, skin conditions, or medical information we should know about..."
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-black text-white font-light tracking-widest hover:bg-gray-900 transition-all"
              >
                BOOK APPOINTMENT
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-light text-black mb-12 tracking-wide">Before Your Visit</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-black mb-3">What to Expect</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Your appointment will begin with a consultation where our team will discuss your skincare goals and assess your skin. Please allow 60 minutes for your first visit.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-black mb-3">Cancellation Policy</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                We require 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-black mb-3">Important Information</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Please arrive 15 minutes early and bring a valid ID. Disclose any recent skin treatments or medications during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
