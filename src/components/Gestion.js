import React, { useState } from 'react';

export default function Gestion({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div
                className="ease-in-out duration-200 hover:scale-105 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.imageSrc} 
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="max-w-md bg-white p-8 rounded-lg">
            <img
              src={selectedProduct.imageSrc} 
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />

            <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

            <div className="flex gap-4">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
                Eliminer
              </button>

              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-md"
                onClick={closePopup}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
