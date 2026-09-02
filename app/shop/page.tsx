'use client'

export default function Shop() {
  const products = [
    { id: 1, name: 'Classic Graphic Tee', price: '$29.99', category: 'Tees' },
    { id: 2, name: 'Oversized Hoodie', price: '$59.99', category: 'Hoodies' },
    { id: 3, name: 'Rugby Stripe Shirt', price: '$49.99', category: 'Shirts' },
    { id: 4, name: 'Track Pants', price: '$54.99', category: 'Pants' },
    { id: 5, name: 'Vintage Tee', price: '$34.99', category: 'Tees' },
    { id: 6, name: 'Zip Hoodie', price: '$64.99', category: 'Hoodies' },
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container-custom">
          <h1 className="text-6xl font-light text-black mb-4 tracking-wide">Shop</h1>
          <p className="text-gray-600 font-light">Thoughtfully curated collection of apparel</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-gray-200 rounded-sm h-64 flex items-center justify-center mb-6 overflow-hidden">
                  <span className="text-gray-500 text-3xl font-light">Product</span>
                </div>
                <span className="text-gray-500 text-xs font-light tracking-widest uppercase">{product.category}</span>
                <h3 className="text-2xl font-light text-black my-3">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-light">{product.price}</span>
                  <button className="px-6 py-2 bg-black text-white font-light text-sm tracking-widest hover:bg-gray-900">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}